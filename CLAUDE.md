# CLAUDE.md — DigiSite Website Build Context

> This file is read by Claude Code at session start. It provides full project context for the DigiSite website build.

---

## 1. What This Project Is

**DigiSite** is a digital out-of-home (DOOH) advertising company that deploys high-brightness LED screens on construction scaffolding and perimeter hoardings across UK cities. This repository is the **marketing/investor website** at `www.digiscaff.co.uk`.

The website is a single-page scrolling site designed to attract construction partners, advertisers, and investors. It is not an app — it is a premium brochure site with a contact form.

**Stage:** Pre-revenue. Concept validated, hardware specified. Seeking investment and first commercial partnerships.
**Base:** Liverpool / Merseyside, UK.

---

## 2. Owner

| Field | Value |
|-------|-------|
| Name | Ben Burns |
| GitHub | benfrancisburns-creator |
| Email | benfrancisburns@gmail.com |

---

## 3. Tech Stack (defined in DS-00)

| Layer | Choice |
|-------|--------|
| Framework | **Astro** — static site builder with component architecture |
| Styling | **Tailwind CSS** — utility-first, configured with DigiSite brand tokens |
| Fonts | Google Fonts — **Space Grotesk** (display/body) + **IBM Plex Mono** (data/mono accent) |
| Forms | **Netlify Forms** — zero server-side code |
| Hosting | **Netlify** — static deployment, domain pointed via DNS CNAME |
| Animations | Vanilla JS IntersectionObserver + CSS transitions (no animation library) |
| Domain | `digiscaff.co.uk` |

---

## 4. Brand System Summary

Full spec: `docs/design-specs/DS-00-Brand-System.md`

### Colours
| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#0D1B2A` | Primary background |
| Cyan | `#00D4FF` | Primary accent — CTAs, stats, logo mark |
| Amber | `#F5A623` | Secondary accent — warmth, transition moments |
| Off-white | `#F7F9FC` | Body copy on dark |
| Mid-grey | `#8A9BB0` | Secondary copy, labels |
| Section step | `#0F2035` | Alternate section background |
| Steel | `#2A3F52` | Scaffold lines in illustrations |

### Key Rules
- **Dark first.** Navy or section-step on every section. No white backgrounds.
- **Cyan is not a fill colour.** One focal element per screen only.
- **Amber is rarer than cyan.** Section transitions and warmth only.
- All colours as CSS custom properties — never hardcoded hex.

### Typography
- **Space Grotesk 700** — Headlines (tight negative letter-spacing)
- **Space Grotesk 400/500** — Body, UI, nav
- **IBM Plex Mono 400/600** — Stats, data, labels (seasoning, not base)

### Signature Effect
**LED Glow** — cyan glow applied only to screen/LED elements. `box-shadow` layered at 3 intensities. Never on text/buttons.

---

## 5. Site Sections (scroll order)

Each section has a locked design spec in `docs/design-specs/`.

| # | Section | Spec File | Anchor |
|---|---------|-----------|--------|
| 1 | Navigation | DS-02 | — |
| 2 | Hero | DS-03 | `#hero` |
| 3 | The Opportunity | DS-04 | `#opportunity` |
| 4 | The Solution (Products) | DS-05 | `#solution` |
| 5 | How It Works | DS-06 | `#how-it-works` |
| 6 | Market | DS-07 | `#market` |
| 7 | Partnerships | DS-08 | `#partnerships` |
| 8 | Technology | DS-09 | `#technology` |
| 9 | Roadmap | DS-10 | `#roadmap` |
| 10 | Contact | DS-11 | `#contact` |
| 11 | Footer | DS-12 | — |

---

## 6. Astro Component Structure (defined in DS-00)

```
/src
  /components
    Nav.astro
    Hero.astro
    Opportunity.astro
    Solution.astro
    HowItWorks.astro
    Market.astro
    Partnerships.astro
    Partners.astro
    Roadmap.astro
    Contact.astro
    Footer.astro
    LogoSVG.astro         ← Logo as inline SVG component
    StatBlock.astro       ← Reusable stat display
    PillLabel.astro       ← Reusable IBM Plex Mono pill label
  /layouts
    Base.astro            ← HTML shell, head, fonts, meta
  /pages
    index.astro           ← Homepage — imports all components in order
  /styles
    global.css            ← CSS custom properties, reset, base styles
```

---

## 7. Key Business Context

For full details see `docs/business/`.

- **Product Lines:** DigiScaff (scaffold-mounted screens) + DigiPerim (perimeter fencing screens)
- **Hardware:** Samsung commercial displays (OH series — 3,000+ nit brightness)
- **CMS:** Samsung MagicINFO
- **Partnership Model:** Open scheme — 4 types: Construction & Infrastructure, Commercial & Event, Landlords & Landowners, Events
- **Revenue Model:** CPM-based digital advertising. Split model between DigiSite, site partners, and advertisers.
- **Pilot Scale:** 4-16 sites initially, Liverpool/Merseyside

---

## 8. Design Docs Reference

### Design Specs (in `docs/design-specs/`)
| File | Contents |
|------|----------|
| DS-00 | Brand system — colours, typography, spacing, motion, LED glow, tech stack, accessibility |
| DS-01 | Logo — hexagon mark geometry, SVG code, all variants, Astro component |
| DS-02 | Navigation — desktop/mobile, scroll states, smooth scroll, Astro component |
| DS-03 | Hero — headline, cityscape illustration spec, entrance animations, Astro component |
| DS-04 | The Opportunity — problem statement, stats, dead-media narrative |
| DS-05 | The Solution — product showcase, DigiScaff/DigiPerim specs |
| DS-06 | How It Works — 4-step process, timeline visual |
| DS-07 | Market — TAM/SAM/SOM, UK construction data |
| DS-08 | Partnerships — 4 partner types, benefits grid |
| DS-09 | Technology — platform architecture, MagicINFO CMS |
| DS-10 | Roadmap — timeline phases |
| DS-11 | Contact — form, CTA, ASCII border accent |
| DS-12 | Footer — links, legal, logo placement |

### Business Docs (in `docs/business/`)
| File | Contents |
|------|----------|
| 01 | Business concept v1.2 — full overview |
| 02 | Logistics and operations |
| 03 | Products and hardware |
| 04 | Planning and compliance |
| 05 | Pre-financial model research |

---

## 9. Build Phases

### Phase 1 (build now)
Everything in DS-00 through DS-12. Static site, no database, no authentication. Contact form via Netlify Forms.

### Phase 2 (architecture only in Phase 1)
Interactive map, booking flow, partner portal, QR analytics. Phase 1 components must support Phase 2 without rebuilding — possible Next.js migration.

**Phase 1 must not introduce technical debt that blocks Phase 2.**

---

## 10. Build Rules

- **Read the relevant DS spec before building any section.** Each spec contains locked copy, exact CSS values, and often a complete Astro component.
- **Copy marked as "Locked" must not be changed** without explicit approval from Ben.
- **CSS custom properties only** — no hardcoded hex values in component CSS.
- **Accessibility:** WCAG AA minimum. Off-white on navy passes at 13.8:1. Cyan on navy only for decorative/large text.
- **Mobile breakpoint:** 768px.
- **Base-8 spacing system** — all spacing multiples of 8px.
- **No animation libraries** — vanilla JS + CSS transitions only.
- Logo capitalisation is "DigiSite" — mixed case is deliberate, never normalise.

---

## 11. External References

- **Figma:** Connected via MCP server (see Claude Code settings)
- **Source design docs:** Also available at `C:\Users\Ben\Desktop\Digisite\`
- **Bengal project context:** `C:\Users\Ben\Desktop\Bengalv1\` (parent project — DigiSite is one operational domain)

---

*Owner: Ben Burns | Project: DigiSite Website | Domain: digiscaff.co.uk*
