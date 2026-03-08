// DigiSite Contact Form Worker
// Receives form submissions and sends email via Resend

const SCHEME_LABELS = {
  construction: 'Construction & Development',
  landlords: 'Landlords & Landowners',
  commercial: 'Commercial & Public',
  events: 'Events',
  investment: 'Investment',
};

const ALLOWED_ORIGINS = [
  'https://digiscaff.co.uk',
  'https://www.digiscaff.co.uk',
];

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatFormData(data) {
  const scheme = data.scheme || 'Unknown';
  const schemeLabel = SCHEME_LABELS[scheme] || scheme;

  let rows = '';
  const skipFields = ['form-name', 'bot-field'];

  for (const [key, value] of Object.entries(data)) {
    if (skipFields.includes(key) || !value || value === '') continue;

    const label = key
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    const displayValue = Array.isArray(value) ? value.join(', ') : value;

    rows += `
      <tr>
        <td style="padding: 10px 16px; font-weight: 600; color: #8A9BB0; white-space: nowrap; vertical-align: top; border-bottom: 1px solid #1a2d42;">${escapeHtml(label)}</td>
        <td style="padding: 10px 16px; color: #F7F9FC; border-bottom: 1px solid #1a2d42;">${escapeHtml(displayValue)}</td>
      </tr>`;
  }

  return `
    <div style="font-family: 'Space Grotesk', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D1B2A; border-radius: 8px; overflow: hidden;">
      <div style="background: #0F2035; padding: 24px 32px; border-bottom: 2px solid #00D4FF;">
        <h1 style="margin: 0; color: #00D4FF; font-size: 18px; letter-spacing: 0.15em; text-transform: uppercase;">New DigiSite Enquiry</h1>
        <p style="margin: 8px 0 0; color: #8A9BB0; font-size: 14px;">Scheme: ${escapeHtml(schemeLabel)}</p>
      </div>
      <div style="padding: 24px 16px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${rows}
        </table>
      </div>
      <div style="padding: 16px 32px; background: #0F2035; text-align: center;">
        <p style="margin: 0; color: #8A9BB0; font-size: 12px;">Sent from digiscaff.co.uk contact form</p>
      </div>
    </div>`;
}

export default {
  async fetch(request, env) {
    const corsHeaders = getCorsHeaders(request);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const contentType = request.headers.get('Content-Type') || '';
      let formData = {};

      if (contentType.includes('application/json')) {
        formData = await request.json();
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        const text = await request.text();
        const params = new URLSearchParams(text);
        for (const [key, value] of params.entries()) {
          // Handle checkbox groups (multiple values for same key)
          if (formData[key]) {
            if (Array.isArray(formData[key])) {
              formData[key].push(value);
            } else {
              formData[key] = [formData[key], value];
            }
          } else {
            formData[key] = value;
          }
        }
      } else {
        return new Response(
          JSON.stringify({ error: 'Unsupported content type' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Honeypot check — reject if bot-field is filled
      if (formData['bot-field']) {
        // Silently accept to not tip off bots
        return new Response(
          JSON.stringify({ success: true }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Basic validation
      if (!formData.name || !formData.email || !formData.scheme) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const schemeLabel = SCHEME_LABELS[formData.scheme] || formData.scheme;
      const htmlBody = formatFormData(formData);

      // Send email via Resend
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'DigiSite <noreply@digiscaff.co.uk>',
          to: ['info@digiscaff.co.uk'],
          subject: `New enquiry: ${escapeHtml(formData.name)} — ${schemeLabel}`,
          html: htmlBody,
          reply_to: formData.email,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error('Resend error:', errorData);
        return new Response(
          JSON.stringify({ error: 'Failed to send notification' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (err) {
      console.error('Worker error:', err);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};
