# DigiSite — Contact Section Specification
**Document:** DS-11  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-08-Partnerships.md, DS-12-Footer.md

---

## 1. CONCEPT

The contact section is where the site converts. Every section before it has been building a case — the market, the products, the model, the ambition. This section is the answer to: "I'm convinced. What do I do now?"

The key decision locked in planning: the form is structured around the four partnership schemes plus investment, not around generic audience types. A visitor selects their scheme and the form reveals the specific questions relevant to that conversation. This means every lead DigiSite receives arrives pre-qualified, pre-framed, and ready for the right follow-up.

This is not a generic "get in touch" form. It is five distinct conversations in one interface.

### Pre-selection from DS-08
Each Partnership scheme CTA pre-selects the relevant scheme in this form via the `scrollToContact()` function specified in DS-08. When a user arrives via a scheme CTA, their scheme is already selected and the conditional fields are already visible. This makes the handoff from the Partnerships section completely seamless.

### Form handling
Netlify Forms — zero server-side code, built-in spam filtering, email notifications to DigiSite on submission.

**Section anchor:** `id="contact"`

---

## 2. SECTION STRUCTURE

```
[Section background: #0D1B2A]
[Top: 1px cyan rule]

[Two-column layout desktop:]
[  Left (45%): Section header + context statement + direct contact ]
[  Right (55%): The form ]

[ASCII border callout — bottom of left column ]
```

---

## 3. SECTION HEADER (LEFT COLUMN)

### Eyebrow
- Text: `GET IN TOUCH`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`

### Headline
- Text: `Start the conversation.`
- Font: Space Grotesk 700, 52px desktop / 36px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Line-height: 1.0

### Context statement
- Text: `Whether you're a scaffold company with a site pipeline, a landowner with an underperforming asset, a commercial estate looking to generate income, an event organiser, or an investor — select your route below and tell us about your situation.`
- Font: Space Grotesk 400, 16px
- Colour: `#8A9BB0`
- Line-height: 1.7
- Max-width: 380px
- Margin-top: 24px

### Response commitment
- Text: `We respond to every enquiry within 48 hours.`
- Font: IBM Plex Mono 600, 12px, uppercase, `letter-spacing: 0.12em`
- Colour: `#00D4FF`
- Margin-top: 32px
- Preceded by a small `→`

---

## 4. ASCII BORDER CALLOUT (LEFT COLUMN)

The single deliberate use of ASCII border aesthetic on the site — borrowed from the Johnny Decimal design influence established in DS-00. It appears here and nowhere else.

Positioned in the lower portion of the left column, below the context statement and response commitment.

### Content
```
┌─────────────────────────────┐
│  WHAT HAPPENS NEXT          │
│                             │
│  01  We review your enquiry │
│  02  We research your site  │
│  03  We send a proposal     │
│  04  We meet (or call)      │
└─────────────────────────────┘
```

### Styling
- Font: IBM Plex Mono 400, 12px
- Colour: `rgba(0, 212, 255, 0.45)` for the border characters
- `WHAT HAPPENS NEXT` label: IBM Plex Mono 600, 11px, `#00D4FF`, `letter-spacing: 0.15em`
- Step numbers (`01`, `02`, `03`, `04`): IBM Plex Mono 600, `#00D4FF`
- Step text: IBM Plex Mono 400, `#8A9BB0`
- Line-height: 1.8
- White-space: `pre` — preserves ASCII alignment
- Margin-top: 48px

### Why this works here
The ASCII border signals: this is a structured process, not a black box. The form submission isn't the end — it's step zero of a defined sequence. This is particularly important for construction partners and investors who need to know what they're walking into.

---

## 5. THE FORM (RIGHT COLUMN)

### Form background
`background: #0F2035`
`border: 1px solid rgba(0, 212, 255, 0.12)`
`border-radius: 8px`
`padding: 48px`

### Form implementation
Netlify Forms. The `<form>` element requires:
```html
<form
  name="digisite-contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="digisite-contact" />
  <input type="hidden" name="bot-field" class="hidden" />
  <!-- fields -->
</form>
```

---

### STEP 1 — Scheme Selector

The first and most important element. A row of five buttons — one per route. Selecting a button highlights it and reveals the conditional fields for that route.

**Button labels:**
1. `Construction & Development`
2. `Landlords & Landowners`
3. `Commercial & Public`
4. `Events`
5. `Investment`

**Button layout:**
Horizontal row — `display: flex; flex-wrap: wrap; gap: 8px`
On mobile: 2 per row with Investment below

**Button styling — inactive:**
- Background: `rgba(0, 212, 255, 0.04)`
- Border: `1px solid rgba(0, 212, 255, 0.15)`
- Border-radius: 4px
- Padding: `10px 16px`
- Font: Space Grotesk 500, 13px, `#8A9BB0`
- Transition: `all 0.2s ease`

**Button styling — active:**
- Construction & Development / Commercial (cyan active): `background: rgba(0, 212, 255, 0.12); border-color: #00D4FF; color: #00D4FF`
- Landlords / Events / Investment (amber active): `background: rgba(245, 166, 35, 0.12); border-color: #F5A623; color: #F5A623`

**Scheme label (above buttons):**
- Text: `I am a...`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#8A9BB0`
- Margin-bottom: 12px

**Hidden input — captures selected scheme for Netlify:**
```html
<input type="hidden" name="scheme" id="scheme-value" value="" />
```
Updated by JavaScript when a button is selected.

---

### UNIVERSAL FIELDS (shown for all routes)

These appear immediately below the scheme selector for all routes before the conditional fields.

**Field 1 — Name**
- Label: `YOUR NAME`
- Type: text input
- Placeholder: `First and last name`
- Required: yes

**Field 2 — Email**
- Label: `EMAIL ADDRESS`
- Type: email input
- Placeholder: `name@company.com`
- Required: yes

**Field 3 — Company / Organisation**
- Label: `COMPANY OR ORGANISATION`
- Type: text input
- Placeholder: `Your company name`
- Required: yes

### Field styling (all fields)
- Label: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.15em`, `#8A9BB0`
- Input: `background: rgba(0, 212, 255, 0.04); border: 1px solid rgba(0, 212, 255, 0.15); border-radius: 4px; padding: 14px 16px; color: #F7F9FC; font-family: Space Grotesk; font-size: 15px`
- Placeholder: `#8A9BB0` at 50% opacity
- Focus: `border-color: #00D4FF; outline: none; box-shadow: 0 0 0 3px rgba(0,212,255,0.08)`
- Transition: `border-color 0.2s ease, box-shadow 0.2s ease`
- Width: 100%
- Margin-bottom between fields: 20px

---

### CONDITIONAL FIELDS — CONSTRUCTION & DEVELOPMENT

Revealed when "Construction & Development" is selected.

**Field: Role**
- Label: `YOUR ROLE`
- Type: select dropdown
- Options: `Scaffold Company` / `Principal Contractor` / `Building Company` / `Developer` / `Other`

**Field: Pipeline Geography**
- Label: `WHERE ARE YOUR ACTIVE SITES?`
- Type: checkbox group (multi-select)
- Options: `Liverpool` / `Manchester` / `Leeds` / `Sheffield` / `Birmingham` / `London` / `Other UK`
- Layout: 3-column grid of checkboxes

**Checkbox styling:**
- Custom checkbox — hidden native input, custom `::before` box
- Unchecked: `border: 1px solid rgba(0, 212, 255, 0.2); background: transparent`
- Checked: `border-color: #00D4FF; background: rgba(0, 212, 255, 0.15)` with cyan tick mark
- Label font: Space Grotesk 400, 14px, `#8A9BB0`

**Field: Approximate site count**
- Label: `APPROXIMATE NUMBER OF ACTIVE SITES`
- Type: select dropdown
- Options: `1–4` / `5–9` / `10–19` / `20+` / `Not sure yet`

**Field: Message**
- Label: `ANYTHING ELSE YOU'D LIKE TO TELL US`
- Type: textarea
- Rows: 4
- Placeholder: `Tell us about your pipeline, your typical sites, or any specific questions`
- Required: no

---

### CONDITIONAL FIELDS — LANDLORDS & LANDOWNERS

**Field: Site type**
- Label: `WHAT IS YOUR SITE?`
- Type: select
- Options: `Vacant plot` / `Empty building` / `Site in planning` / `Heritage / listed building` / `Under development` / `Other`

**Field: Location**
- Label: `SITE LOCATION`
- Type: text input
- Placeholder: `Town or city, postcode if known`

**Field: Frontage description**
- Label: `APPROXIMATE FRONTAGE / VISIBILITY`
- Type: select
- Options: `High street / city centre` / `Busy road / arterial route` / `Residential area` / `Mixed use` / `Not sure`

**Field: Current situation**
- Label: `CURRENT SITUATION`
- Type: textarea, rows 3
- Placeholder: `Tell us about the site — how long it's been vacant, any planning history, or what's holding development back`
- Required: no

---

### CONDITIONAL FIELDS — COMMERCIAL & PUBLIC

**Field: Organisation type**
- Label: `ORGANISATION TYPE`
- Type: select
- Options: `Retail operator` / `Drive-thru / QSR estate` / `Leisure / entertainment` / `Local authority` / `NHS / public sector` / `Housing association` / `Other`

**Field: Number of sites**
- Label: `NUMBER OF SITES IN YOUR ESTATE`
- Type: select
- Options: `1` / `2–5` / `6–20` / `21–100` / `100+`

**Field: Location(s)**
- Label: `PRIMARY LOCATION(S)`
- Type: text input
- Placeholder: `Cities or regions where your sites are based`

**Field: Message**
- Label: `TELL US MORE`
- Type: textarea, rows 3
- Placeholder: `Any specific sites, estate requirements, or questions`

---

### CONDITIONAL FIELDS — EVENTS

**Field: Event type**
- Label: `EVENT TYPE`
- Type: select
- Options: `Music festival` / `Sporting event` / `Theme park / attraction` / `Exhibition / trade show` / `Arena / venue` / `Other`

**Field: Event name**
- Label: `EVENT OR VENUE NAME`
- Type: text input
- Placeholder: `Name of your event or venue`

**Field: Location**
- Label: `EVENT LOCATION`
- Type: text input
- Placeholder: `Town, city or venue address`

**Field: Timing**
- Label: `NEXT EVENT DATE OR SEASON`
- Type: text input
- Placeholder: `e.g. June 2026, or ongoing`

**Field: Message**
- Label: `TELL US ABOUT YOUR EVENT`
- Type: textarea, rows 3
- Placeholder: `Audience size, site layout, any specific screen placement ideas`

---

### CONDITIONAL FIELDS — INVESTMENT

**Field: Investor type**
- Label: `INVESTOR TYPE`
- Type: select
- Options: `Angel investor` / `Venture capital` / `Family office` / `Strategic investor` / `Other`

**Field: Investment stage interest**
- Label: `INVESTMENT STAGE`
- Type: select
- Options: `Seed / pre-revenue` / `Series A` / `Growth capital` / `Not sure yet`

**Field: How did you hear about DigiSite**
- Label: `HOW DID YOU FIND US?`
- Type: select
- Options: `Search` / `Referral` / `Industry event` / `Social media` / `Press` / `Other`

**Field: Message**
- Label: `ANYTHING YOU'D LIKE TO SHARE`
- Type: textarea, rows 3
- Placeholder: `Investment thesis, questions, or any relevant background`

---

### SUBMIT BUTTON

**Text:** `Send Enquiry →`
**Styling:** Solid cyan — `background: #00D4FF; color: #0D1B2A`
**Font:** Space Grotesk 600, 15px, `letter-spacing: 0.04em`
**Padding:** `16px 40px`
**Border-radius:** 2px
**Width:** Full width of form
**Margin-top:** 32px
**Hover:** `background: #33DDFF`, `box-shadow: 0 0 24px rgba(0,212,255,0.35)`
**Disabled state** (before scheme is selected): `opacity: 0.4; cursor: not-allowed`

The submit button is disabled until a scheme has been selected. This ensures the `scheme` hidden input is always populated on submission.

---

### SUCCESS STATE

On successful submission, the form is replaced by a confirmation message within the same container. No page redirect.

**Confirmation content:**
```
[Cyan hexagon icon — DigiSite logo mark, 48px]

Thank you.
We've received your enquiry and we'll be in touch within 48 hours.

[Scheme-specific confirmation line:]
Construction & Development: "We'll review your site pipeline and come back with an initial assessment."
Landlords: "We'll look at your site and come back with an audience data report for your location."
Commercial: "We'll review your estate details and prepare a proposal."
Events: "We'll prepare a costed proposal for your event within 48 hours."
Investment: "We'll be in touch to arrange a conversation."
```

**Confirmation styling:**
- Text-align: centre
- Padding: `48px`
- Headline: Space Grotesk 700, 32px, `#F7F9FC`
- Body: Space Grotesk 400, 16px, `#8A9BB0`
- Scheme line: Space Grotesk 500, 15px, `#F7F9FC`

---

## 6. JAVASCRIPT — FORM BEHAVIOUR

```javascript
// Scheme selector
const schemeButtons = document.querySelectorAll('.scheme-btn');
const schemeInput = document.getElementById('scheme-value');
const conditionalSections = document.querySelectorAll('.conditional-fields');
const submitBtn = document.getElementById('submit-btn');

schemeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    schemeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Update hidden input
    schemeInput.value = btn.dataset.scheme;

    // Show correct conditional section
    conditionalSections.forEach(section => {
      section.style.display = section.dataset.scheme === btn.dataset.scheme
        ? 'block' : 'none';
    });

    // Enable submit
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
  });
});

// Pre-selection from Partnership CTAs (from DS-08)
function scrollToContact(scheme) {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const targetBtn = document.querySelector(`[data-scheme="${scheme}"]`);
    if (targetBtn) targetBtn.click();
  }, 800);
}

// Form success handling
const form = document.querySelector('[data-netlify]');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    // Replace form with success state
    const scheme = schemeInput.value;
    showSuccessState(scheme);
  } catch (err) {
    console.error('Form submission error:', err);
  }
});

function showSuccessState(scheme) {
  const confirmationMessages = {
    construction: "We'll review your site pipeline and come back with an initial assessment.",
    landlords: "We'll look at your site and come back with an audience data report for your location.",
    commercial: "We'll review your estate details and prepare a proposal.",
    events: "We'll prepare a costed proposal for your event within 48 hours.",
    investment: "We'll be in touch to arrange a conversation."
  };

  form.parentElement.innerHTML = `
    <div style="text-align:center; padding:48px;">
      <!-- Logo mark SVG here -->
      <h2 style="font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:32px; color:#F7F9FC; margin-top:24px;">
        Thank you.
      </h2>
      <p style="font-family:'Space Grotesk',sans-serif; font-size:16px; color:#8A9BB0; margin-top:12px;">
        We've received your enquiry and we'll be in touch within 48 hours.
      </p>
      <p style="font-family:'Space Grotesk',sans-serif; font-size:15px; color:#F7F9FC; margin-top:16px;">
        ${confirmationMessages[scheme] || ''}
      </p>
    </div>
  `;
}
```

---

## 7. ANIMATION

The two-column layout reveals as follows:
- Left column: `opacity 0→1, translateX -20px→0`, 600ms ease-out
- Right column (form card): `opacity 0→1, translateX 20px→0`, 600ms ease-out, 100ms delay
- Both trigger simultaneously on intersection

The form fields themselves do not animate individually — the card animates as one unit. Animating individual form fields would feel distracting.

---

## 8. MOBILE LAYOUT

- Two-column layout collapses to single column: left column content first, form below
- ASCII border callout: placed below the headline and context statement, above the form
- Scheme buttons: 2 per row, wrapping. Investment button: full width below
- Form padding reduces to `32px 24px`
- Universal fields: all full width
- Checkbox grid: 2-column on mobile

---

## 9. ACCESSIBILITY

- Every form field has a visible `<label>` element associated via `for`/`id`
- Error states: red border `#FF4444` + error message below field for required fields left empty on submit
- Focus states: visible cyan ring on all inputs (specified in field styling above)
- The scheme selector buttons are `<button type="button">` elements — not links or divs
- Form submission confirmation replaces the form in the same DOM location — screen readers announce the change via `aria-live="polite"` on the form container

---

## 10. COPY — LOCKED

| Element | Copy |
|---|---|
| Eyebrow | `GET IN TOUCH` |
| Headline | `Start the conversation.` |
| Context | `Whether you're a scaffold company with a site pipeline, a landowner with an underperforming asset, a commercial estate looking to generate income, an event organiser, or an investor — select your route below and tell us about your situation.` |
| Response commitment | `We respond to every enquiry within 48 hours.` |
| Scheme prompt | `I am a...` |
| Submit button | `Send Enquiry →` |
| Success headline | `Thank you.` |
| Success body | `We've received your enquiry and we'll be in touch within 48 hours.` |

---

*Companion documents: DS-00-Brand-System.md, DS-08-Partnerships.md, DS-12-Footer.md*
