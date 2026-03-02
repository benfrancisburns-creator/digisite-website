# DigiSite — Footer Specification
**Document:** DS-12  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-11-Contact.md

---

## 1. CONCEPT

The footer is intentionally minimal. The site's contact section immediately above it carries the conversion weight — the footer's job is to close the page cleanly, provide the necessary legal information, and reinforce the brand one final time.

No sitemap. No newsletter signup. No social media links unless DigiSite has active, maintained profiles to link to at time of build. An empty or sparse social presence linked from the footer does more harm than good.

---

## 2. STRUCTURE

```
[Background: #070F18 — darker than base navy, signals the page has ended]
[Top: 1px solid rgba(255,255,255,0.06) — subtle white rule, not cyan]

[Two rows:]
[  Row 1: Logo left · Nav links centre · Tagline right ]
[  Row 2: Legal left · Company info right ]
```

---

## 3. BACKGROUND

`#070F18` — a step darker than the base navy `#0D1B2A`. This creates a clear visual full stop at the bottom of the page. The shift is subtle but deliberate — it signals closure.

Top border: `1px solid rgba(255, 255, 255, 0.06)` — a barely-there white line. White rather than cyan because the footer sits outside the commercial conversation of the site. It is administrative space.

Padding: `48px 0` desktop, `40px 0` mobile.

---

## 4. ROW 1 — BRAND AND NAVIGATION

### Layout
Three elements in a horizontal row on desktop:
- Logo: left-aligned
- Navigation links: centred
- Tagline: right-aligned

Mobile: stacked vertically, all centred.

---

### Logo
DigiSite full lockup, dark variant (white wordmark, cyan hexagon).
Size: nav size (156×43px) — same as the navigation bar.
No link needed — the footer logo is decorative, not a home link (the page is single-page, there is no separate home to navigate to).

---

### Navigation links
Five links — same as the main navigation plus Contact:
`Products · Partners · Market · Roadmap · Contact`

Font: Space Grotesk 400, 13px, `text-transform: uppercase`, `letter-spacing: 0.1em`
Colour: `#8A9BB0`
Hover: `#F7F9FC`, `transition: color 0.2s ease`
Gap: 32px between links

Each link smooth-scrolls to its section anchor — same behaviour as the main nav.

---

### Tagline
- Text: `The forever-moving canvas.`
- Font: Space Grotesk 400, 14px, italic (the only italic on the site — used once, here, as a closing whisper)
- Colour: `#8A9BB0`
- Text-align: right

The italicised tagline is a deliberate tonal choice. The site has been bold, precise and data-driven throughout. Ending on an italic whisper of the brand idea gives the page a moment of stillness before the legal row.

---

## 5. ROW 2 — LEGAL AND COMPANY INFORMATION

A thin row below Row 1, separated by `1px solid rgba(255,255,255,0.04)` with `padding-top: 24px`.

### Left — Legal
- Text: `© 2026 DigiSite. All rights reserved. · Privacy Policy`
- Font: Space Grotesk 400, 12px, `#8A9BB0` at 70% opacity
- "Privacy Policy" is a link — underlined on hover, same colour
- Privacy Policy links to `/privacy` — a separate static page to be built in Astro (not in scope for the spec documents but noted here for the build checklist)

### Right — Company information
- Text: `DigiSite · Liverpool, Merseyside · www.digiscaff.co.uk`
- Font: IBM Plex Mono 400, 11px, `#8A9BB0` at 60% opacity
- Text-align: right

**Note:** Company registration number should be added here once DigiSite is formally incorporated. Placeholder: `[Company No. TBC]`. Once confirmed, the line reads: `DigiSite Ltd · Registered in England & Wales · No. XXXXXXXX · Liverpool, Merseyside`

---

## 6. MOBILE LAYOUT

All footer content stacks vertically, centred:

1. Logo (centred)
2. Navigation links (centred, 2-column wrap or single column)
3. Tagline (centred)
4. Divider rule
5. Legal line (centred)
6. Company info (centred)

Gap between logo and nav: 24px
Gap between nav and tagline: 16px
Gap between tagline and divider: 24px

---

## 7. ASTRO COMPONENT

Create `/src/components/Footer.astro`:

```astro
---
const navLinks = [
  { label: 'Products', href: '#solution' },
  { label: 'Partners', href: '#partnerships' },
  { label: 'Market', href: '#market' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];
---

<footer class="w-full" style="background: #070F18; border-top: 1px solid rgba(255,255,255,0.06);">
  <div class="max-w-content mx-auto px-12 py-12">

    <!-- Row 1 -->
    <div class="flex items-center justify-between footer-row-1">

      <!-- Logo -->
      <LogoSVG variant="dark" size="nav" />

      <!-- Nav -->
      <nav class="flex items-center gap-8">
        {navLinks.map(link => (
          <a
            href={link.href}
            class="text-mid-grey hover:text-off-white text-[13px] uppercase tracking-[0.1em] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <!-- Tagline -->
      <span class="text-mid-grey text-[14px]" style="font-style: italic;">
        The forever-moving canvas.
      </span>

    </div>

    <!-- Divider -->
    <div class="w-full mt-8 mb-6" style="height:1px; background: rgba(255,255,255,0.04);"></div>

    <!-- Row 2 -->
    <div class="flex items-center justify-between footer-row-2">

      <!-- Legal -->
      <p class="text-[12px]" style="color: rgba(138,155,176,0.7);">
        © 2026 DigiSite. All rights reserved.&nbsp;·&nbsp;
        <a href="/privacy" class="hover:text-off-white transition-colors duration-200">Privacy Policy</a>
      </p>

      <!-- Company info -->
      <p class="font-mono text-[11px]" style="color: rgba(138,155,176,0.6); text-align: right;">
        DigiSite · Liverpool, Merseyside · www.digiscaff.co.uk
      </p>

    </div>

  </div>
</footer>

<style>
  @media (max-width: 768px) {
    .footer-row-1 {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      text-align: center;
    }
    .footer-row-1 nav {
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px 24px;
    }
    .footer-row-2 {
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
    }
    .footer-row-2 p:last-child {
      text-align: center;
    }
  }
</style>
```

---

## 8. PRIVACY POLICY PAGE

A minimal `/privacy` page in Astro — not designed to the same standard as the main site. Plain dark navy background, off-white body copy, DigiSite logo at the top, standard GDPR/UK PECR privacy policy content.

Content to be drafted separately once the company is incorporated and the data processing activities are formally defined. The privacy policy page is a build dependency for launch — the site cannot go live without it.

**Minimum required sections:**
- Who we are (company name, registered address, contact email)
- What data we collect (name, email, company from the contact form)
- How we use it (responding to enquiries, no marketing without consent)
- How long we keep it
- Third parties (Netlify processes form submissions)
- Your rights (GDPR rights — access, deletion, portability)
- Contact for data requests

---

## 9. WHAT THE FOOTER DOES NOT INCLUDE

- Social media links — only add if active profiles exist at launch
- Newsletter signup — not part of Phase 1 commercial model
- Sitemap links — single page site, no need
- Cookie banner — required if analytics are added. Phase 1 uses Netlify Analytics (server-side, no cookies). If Google Analytics or similar is added later, a cookie consent mechanism must be implemented at that point.
- Blog or news links — Phase 1 has no content section

---

## 10. COPY — LOCKED

| Element | Copy |
|---|---|
| Tagline | `The forever-moving canvas.` |
| Copyright | `© 2026 DigiSite. All rights reserved.` |
| Company info | `DigiSite · Liverpool, Merseyside · www.digiscaff.co.uk` |
| Company info (post-incorporation) | `DigiSite Ltd · Registered in England & Wales · No. XXXXXXXX · Liverpool, Merseyside` |

---

*Companion documents: DS-00-Brand-System.md, DS-11-Contact.md*
*Final document in the Phase 1 design specification series.*
