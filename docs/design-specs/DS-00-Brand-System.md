# DigiSite — Brand System Specification
**Document:** DS-00  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Purpose:** Foundational brand reference. All other spec documents inherit from this one. Claude Code must load this file before building any section.

---

## 1. COLOUR SYSTEM

### Primary Palette

| Name | Hex | Usage |
|---|---|---|
| Navy | `#0D1B2A` | Primary background — default canvas for all sections |
| Cyan | `#00D4FF` | Primary accent — CTAs, key stats, logo mark, highlights |
| Amber | `#F5A623` | Secondary accent — warmth, mutual benefit signals, secondary highlights |
| Off-white | `#F7F9FC` | Body copy on dark backgrounds |
| Mid-grey | `#8A9BB0` | Secondary copy, labels, captions on dark backgrounds |

### Supporting Palette

| Name | Hex | Usage |
|---|---|---|
| Section step | `#0F2035` | Alternate section background — subtle step up from Navy, signals new section without breaking dark system |
| Deep step | `#162236` | Building silhouette fill in illustrated scenes — darker than section step |
| Steel | `#2A3F52` | Scaffold structure lines in illustrations |
| Pure white | `#FFFFFF` | Logo wordmark on dark, inner hexagon fill on light |
| Dark text | `#0D1B2A` | Body copy on light backgrounds (same as Navy) |

### Colour Rules
- **Dark first.** Navy `#0D1B2A` or Section step `#0F2035` on every section. No white-background sections except where explicitly specified in a section spec.
- **Cyan is not a fill colour.** It is used for single focal elements per screen — the most important number, the CTA button, the logo mark, a key word in a headline. When it appears it must feel electric. Overuse destroys its power.
- **Amber is rarer than cyan.** Used at section transition moments and for warmth signals. Never cyan and amber competing for attention in the same element.
- **Never mid-tone backgrounds.** Logo and all branded elements sit only on Navy, Section step, or pure white. Mid-grey backgrounds are forbidden.
- **CSS variables required.** All colours must be defined as CSS custom properties in `:root` and referenced throughout — never hardcoded hex values in component CSS.

```css
:root {
  --color-navy: #0D1B2A;
  --color-section: #0F2035;
  --color-deep: #162236;
  --color-steel: #2A3F52;
  --color-cyan: #00D4FF;
  --color-amber: #F5A623;
  --color-white: #FFFFFF;
  --color-off-white: #F7F9FC;
  --color-grey: #8A9BB0;
}
```

---

## 2. TYPOGRAPHY SYSTEM

### Typeface Stack

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display / Headlines | Space Grotesk | 700 (Bold) | Section headlines, hero headline, stat numbers in headlines |
| UI / Body | Space Grotesk | 400, 500 | Navigation, body copy, labels, button text, subheads |
| Data / Mono accent | IBM Plex Mono | 400, 600 | Statistics, technical specs, coordinates, data readouts, QR references |

### Loading (Google Fonts — include in `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
```

### Type Scale (Desktop)

| Name | Size | Weight | Family | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero headline | 80–100px | 700 | Space Grotesk | -0.03em | 1.0 |
| Section headline | 56px | 700 | Space Grotesk | -0.02em | 1.1 |
| Sub-headline | 32px | 700 | Space Grotesk | -0.01em | 1.2 |
| Body large | 20px | 400 | Space Grotesk | 0 | 1.6 |
| Body | 17px | 400 | Space Grotesk | 0 | 1.7 |
| Label / Small | 12px | 500 | Space Grotesk | 0.12em | 1.4 |
| Nav links | 14px | 500 | Space Grotesk | 0.08em | 1 |
| Stat number | 64–80px | 600 | IBM Plex Mono | -0.02em | 1.0 |
| Stat label | 11px | 600 | IBM Plex Mono | 0.15em | 1.4 |
| Data accent | 14px | 400 | IBM Plex Mono | 0.05em | 1.5 |

### Type Scale (Mobile — apply via media query `max-width: 768px`)

| Name | Mobile Size |
|---|---|
| Hero headline | 48px |
| Section headline | 36px |
| Sub-headline | 24px |
| Stat number | 48px |

### Typography Rules
- Hero and section headlines always in Space Grotesk Bold. Never use lighter weight for headlines.
- Negative letter-spacing on headlines is mandatory — creates the tight, architectural precision that defines the brand.
- IBM Plex Mono is a seasoning, not a base. Never use it for paragraphs or full body copy — only for numbers, short labels, and data readouts.
- All-caps labels in IBM Plex Mono with `letter-spacing: 0.15em` — used for stat labels, section eyebrows, and data unit annotations.
- `text-transform: uppercase` is only applied to: nav links, stat labels, pill labels, and section eyebrows. Never to body copy or main headlines.

---

## 3. SPACING SYSTEM

Use a base-8 spacing scale throughout. All spacing values are multiples of 8px.

```css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
  --space-20: 160px;
  --space-24: 192px;
}
```

### Section Padding
- Desktop: `padding: 120px 0` (top and bottom per section)
- Mobile: `padding: 80px 0`

### Container Width
- Max content width: `1200px`
- Container padding: `0 48px` desktop, `0 24px` mobile
- Centre-aligned with `margin: 0 auto`

---

## 4. MOTION SYSTEM

### Principles
- Motion is purposeful, not decorative. Every animation has a reason.
- Entrance animations trigger on scroll — elements reveal as they enter the viewport.
- Duration is short. 300–600ms maximum for entrance animations.
- Easing is always ease-out or custom cubic-bezier — never linear, never bounce.
- No looping animations except the hero scroll indicator (subtle, slow).
- No animation that covers or obscures content during the animation.

### Standard Entrance Animation
```css
/* Apply to section content blocks */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger Pattern
When multiple elements reveal in sequence (stat blocks, partner cards), stagger by 100ms per element:
```css
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
```

### IntersectionObserver (JavaScript)
Use IntersectionObserver to trigger `.visible` class when element enters viewport:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Stat Counter Animation
Numeric stat values count up from 0 when they enter the viewport. Use requestAnimationFrame for smooth counting. Duration: 1200ms, ease-out.

### Hover States
- Buttons: background lightens 10%, subtle box-shadow adds depth. `transition: all 0.2s ease`
- Navigation links: opacity 1.0 → 0.7 on hover. `transition: opacity 0.2s ease`
- Partner cards: very subtle upward lift `transform: translateY(-4px)`. `transition: transform 0.25s ease`
- No colour changes on hover for non-interactive elements.

---

## 5. THE LED GLOW EFFECT

This is DigiSite's visual signature. It must be implemented consistently wherever a screen or digital element appears.

### CSS Implementation
```css
.led-glow {
  /* Applied to the screen face element */
  background: rgba(0, 212, 255, 0.15);
  box-shadow:
    0 0 40px rgba(0, 212, 255, 0.3),
    0 0 80px rgba(0, 212, 255, 0.15),
    0 0 120px rgba(0, 212, 255, 0.08);
}

.led-glow-ambient {
  /* Ambient glow on background — radial gradient behind screen */
  background: radial-gradient(
    ellipse 60% 40% at 50% 50%,
    rgba(0, 212, 255, 0.12) 0%,
    rgba(0, 212, 255, 0.04) 50%,
    transparent 100%
  );
}
```

### Rules for Use
- The glow effect is only applied to screen/LED elements — never to text, buttons, or UI chrome.
- On dark navy backgrounds, the glow is strongest and most visible. This is the primary use case.
- Glow intensity must be subtle — the effect should read as "emitting light" not "glowing clip art."
- On mobile, reduce glow spread by 30% to account for smaller screen sizes.

---

## 6. BORDER AND LINE LANGUAGE

### Cyan Rule
Thin horizontal rules in cyan signal section transitions and data panel headers:
```css
.rule-cyan {
  height: 1px;
  background: var(--color-cyan);
  width: 100%;
  opacity: 0.4;
}
```

### Amber Rule
Used once — at the transition between The Opportunity section and The Solution section:
```css
.rule-amber {
  height: 1px;
  background: var(--color-amber);
  width: 100%;
  opacity: 0.4;
}
```

### Stat Card Border
```css
.stat-card {
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 4px; /* Minimal radius — not rounded, just softened */
}
```

### ASCII Border Accent (Johnny Decimal influence)
Used sparingly — maximum once per page — for a specific callout or statement block:
```css
.ascii-border {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: rgba(0, 212, 255, 0.4);
  letter-spacing: 0.05em;
  white-space: pre;
  line-height: 1.4;
}
```
The ASCII border draws `┌─`, `─┐`, `└─`, `─┘` corners with `─` fill. Used only for the Contact section callout — see DS-09 spec.

---

## 7. TECH STACK

### Framework
**Astro** — static site builder with component architecture.

### Styling
**Tailwind CSS** — utility-first, configured with DigiSite brand tokens in `tailwind.config.mjs`.

### Fonts
Google Fonts (Space Grotesk + IBM Plex Mono) — loaded via `<link>` in Astro layout head.

### Forms
**Cloudflare Worker** (`digisite-form`) — receives form submissions and sends email notifications to `info@digiscaff.co.uk` via **Resend**. Worker source in `worker-form/`. Honeypot spam filtering retained.

### Hosting
**Cloudflare Pages** — static deployment. Domain `digiscaff.co.uk` pointed via DNS.

### Animations
Vanilla JavaScript IntersectionObserver + CSS transitions. No animation library required for Phase 1.

### Astro Component Structure
```
/src
  /components
    Nav.astro
    Hero.astro
    Opportunity.astro     ← "The Opportunity" section
    Solution.astro
    HowItWorks.astro
    Market.astro
    Partnerships.astro
    Partners.astro
    Roadmap.astro
    Contact.astro
    Footer.astro
    LogoSVG.astro         ← Logo as inline SVG component
    StatBlock.astro       ← Reusable stat display component
    PillLabel.astro       ← Reusable IBM Plex Mono pill label
  /layouts
    Base.astro            ← HTML shell, head, fonts, meta
  /pages
    index.astro           ← Homepage — imports all components in order
  /styles
    global.css            ← CSS custom properties, reset, base styles
```

### Tailwind Config (brand tokens)
```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        section: '#0F2035',
        deep: '#162236',
        steel: '#2A3F52',
        cyan: '#00D4FF',
        amber: '#F5A623',
        'off-white': '#F7F9FC',
        'mid-grey': '#8A9BB0',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
    }
  }
}
```

---

## 8. ACCESSIBILITY REQUIREMENTS

- Colour contrast: all body text must meet WCAG AA (4.5:1 ratio minimum). Off-white `#F7F9FC` on Navy `#0D1B2A` passes at 13.8:1.
- Cyan `#00D4FF` on Navy `#0D1B2A` — use for decorative/large text only (passes AA for large text at 4.6:1). Do not use cyan for small body copy.
- All interactive elements must have visible focus states.
- Navigation must be keyboard-navigable.
- Images and SVG illustrations must have descriptive `alt` attributes or `aria-label`.
- The logo SVG must include `role="img"` and `aria-label="DigiSite"`.

---

## 9. PHASE 1 vs PHASE 2 — BUILD BOUNDARY

Phase 1 (build now): Everything in this document and DS-01 through DS-09 section specs. Static site, no database, no authentication.

Phase 2 (architecture only in Phase 1): Interactive map, booking flow, partner portal, QR analytics. The component structure and design system established in Phase 1 must support Phase 2 without rebuilding. All components should be self-contained and re-importable into a Phase 2 Next.js migration if required.

**Phase 1 must not introduce technical debt that blocks Phase 2.** CSS custom properties, clean component boundaries, and semantic HTML ensure the foundation is sound.

---

*This document is the master reference. All section specs (DS-01 through DS-09) inherit from here. When in conflict, section specs take precedence for their specific section only.*
