# DigiSite — The Solution Section Specification
**Document:** DS-05  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-04-Opportunity.md, DS-06-HowItWorks.md

---

## 1. CONCEPT

This section introduces DigiScaff and DigiPerim as two distinct, named products. It answers the question every reader is carrying from the Opportunity section: "So what exactly does DigiSite install?"

The section has a specific boundary with DS-06 (How It Works):
- **DS-05 answers: what is it?** — the products, their hardware, their visual form, their key characteristics
- **DS-06 answers: how does it happen?** — the mobilisation process, planning, power, partnership to go-live

No process detail lives here. No step-by-step. Just two products, clearly differentiated, visually compelling, with enough technical credibility to satisfy an investor or a construction partner reading the site for the first time.

The section ends with a shared infrastructure statement — the underlying technology (CMS, power, connectivity, programmatic marketplace) that both products run on. This avoids repeating it in each product card and reinforces that DigiSite is a system, not just two pieces of hardware.

**Section anchor:** `id="solution"`

---

## 2. SECTION STRUCTURE

```
[Section background: #0D1B2A — back to base navy after Opportunity's #0F2035]
[Top: no rule — the amber rule at the bottom of Opportunity serves as the separator]

[Section eyebrow + headline]

[Two product cards — side by side desktop, stacked mobile]

[Shared infrastructure strip]
```

---

## 3. SECTION HEADER

### Eyebrow
- Text: `THE SOLUTION`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`
- Text-align: left (this section is left-aligned, not centred — product sections feel more grounded left-aligned)

### Headline
- Text: `Two products. Every construction site.`
- Font: Space Grotesk 700, 56px desktop / 36px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Max-width: 680px

### Subhead
- Text: `DigiScaff mounts on scaffold structures. DigiPerim integrates into perimeter hoardings. Between them, they cover every deployment opportunity on every construction site in DigiSite's network.`
- Font: Space Grotesk 400, 18px
- Colour: `#8A9BB0`
- Max-width: 620px
- Line-height: 1.65
- Margin-bottom: 80px

---

## 4. PRODUCT CARDS — LAYOUT

Two cards in a horizontal grid. Desktop: `display: grid; grid-template-columns: 1fr 1fr; gap: 24px`. Mobile: `flex-direction: column; gap: 48px`.

Each card is a self-contained unit with:
- An illustrated visual at the top (the product in context)
- Product name and tagline
- Three key spec callouts in IBM Plex Mono
- Body description
- A "deployment context" line — where this product specifically applies

Cards are intentionally asymmetric in feel — DigiScaff is taller and more dramatic (scaffold height). DigiPerim is lower and wider. The card heights can differ to reflect this.

---

## 5. PRODUCT CARD 1 — DIGISCAFF

### Card Background
`#0F2035` — section step, slightly lighter than the section background. Creates depth without a heavy border.

### Card Border
`border: 1px solid rgba(0, 212, 255, 0.15)` — subtle cyan edge.
`border-radius: 6px`

### Illustrated Visual (top of card)
- Height: 280px desktop, 200px mobile
- Background: `#0D1B2A`
- An inline SVG scene — simplified version of the hero illustration but tighter and more product-focused
- Shows: scaffold structure (3–4 uprights, horizontal ledgers), DigiScaff screen mounted on it (glowing cyan rectangle with LED glow effect), canvas wrap lines extending from the screen edges
- No cityscape background — just the scaffold and screen against dark navy
- The LED glow effect is more pronounced here than in the hero — this is a product shot, not a scene
- A faint amber horizontal band across the bottom of the visual represents the ground plane

### Product Label (above name, inside card)
- Text: `PRODUCT 01`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF` at 60% opacity

### Product Name
- Text: `DigiScaff`
- Font: Space Grotesk 700, 36px
- Colour: `#FFFFFF`
- Letter-spacing: `-0.02em`

### Product Tagline
- Text: `High-brightness LED screens on construction scaffolding.`
- Font: Space Grotesk 400, 16px
- Colour: `#8A9BB0`
- Line-height: 1.5
- Margin-bottom: 28px

### Spec Strip (three callouts in a horizontal row)
Each callout: a number/value in IBM Plex Mono cyan above a label in IBM Plex Mono grey.

| Value | Label |
|---|---|
| `9,000 nits` | BRIGHTNESS |
| `33m²` | STANDARD LARGE FORMAT |
| `IP66` | WEATHERPROOF RATING |

Layout: `display: flex; gap: 32px` — horizontal row below the tagline.
Value font: IBM Plex Mono 600, 18px, `#00D4FF`
Label font: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.15em`, `#8A9BB0`
Margin-below: 24px

A 1px horizontal rule in `rgba(0, 212, 255, 0.1)` separates the spec strip from the body below.

### Body Copy
"DigiScaff mounts directly onto existing scaffold structures using a key clamp sub-frame and EN74 scaffold couplers — no welding, no permanent fixing. Screens are surrounded by a printed canvas wrap that tensiones onto the frame's outer tube, presenting a clean, professional frontage. The rig is a reusable asset, recovered and redeployed across multiple sites."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.7
Margin-bottom: 24px

### Size Configurations (small table — IBM Plex Mono)
A compact data table showing the two standard sizes. This is the only table on the site — keep it tight.

```
CONFIGURATION    DIMENSIONS      AREA
Small            2.88m × 1.92m   5.5m²
Large            8.64m × 3.84m   33.2m²
```

Font: IBM Plex Mono 400, 12px
Header row: `#8A9BB0` at 70% opacity, `letter-spacing: 0.1em`
Data rows: `#F7F9FC`
Row separator: 1px `rgba(255,255,255,0.06)`
Margin-bottom: 24px

### Deployment Context Line
- Text: `Deploys on: scaffold structures on any active construction site.`
- Font: Space Grotesk 500, 13px
- Colour: `#00D4FF`
- Preceded by a small right-angle icon or `→` in same colour

### Card Padding
`padding: 0 0 40px 0` — no side or top padding (visual bleeds to card edges), bottom padding for the text content.
Text content inside: `padding: 0 36px`

---

## 6. PRODUCT CARD 2 — DIGIPERIM

### Card Background / Border
Same treatment as DigiScaff card — `#0F2035`, `border: 1px solid rgba(0, 212, 255, 0.15)`.

### Illustrated Visual (top of card)
- Height: 220px desktop, 180px mobile (shorter than DigiScaff — reflects the product's lower, wider form)
- Background: `#0D1B2A`
- SVG scene: perimeter hoarding fence line (horizontal, low to ground), DigiPerim cupboard unit mounted on it (wider rectangle, lower profile than DigiScaff), LED glow from the screen face
- The cupboard enclosure is hinted at — a subtle rectangular border around the screen face representing the enclosure body
- A suggestion of pavement/ground in dark amber at the very bottom of the visual

### Product Label
- Text: `PRODUCT 02`
- Same treatment as DigiScaff

### Product Name
- Text: `DigiPerim`
- Same treatment as DigiScaff

### Product Tagline
- Text: `Digital screens integrated into site perimeter hoardings.`

### Spec Strip

| Value | Label |
|---|---|
| `8,000 nits` | BRIGHTNESS |
| `5.5m²` | STANDARD PANEL |
| `IP65` | WEATHERPROOF RATING |

### Body Copy
"DigiPerim installs on any site perimeter — not just scaffolded sites. The screen sits inside a custom-designed weatherproof enclosure bolted onto a lightweight perimeter framework. Full front-access maintenance means panels are serviceable without rear access. Every construction site has a perimeter. DigiPerim ensures every site in DigiSite's network generates revenue from day one of the build — before scaffold is even erected."

### Size Configurations

```
CONFIGURATION    DIMENSIONS      AREA
Single bay       2.88m × 0.96m   2.8m²
Standard panel   2.88m × 1.92m   5.5m²
```

### Deployment Context Line
- Text: `Deploys on: any site perimeter hoarding — scaffolded or not.`
- Colour: `#F5A623` (amber — deliberate distinction from DigiScaff's cyan deployment line. Amber signals the wider reach of DigiPerim — it applies to more site types.)

---

## 7. SHARED INFRASTRUCTURE STRIP

Below both product cards, full width across the section. This is not a third card — it is a lower-profile horizontal band that consolidates the shared technology both products run on.

### Background
`rgba(0, 212, 255, 0.04)` — barely-there cyan wash across the full section width.
Top and bottom borders: `1px solid rgba(0, 212, 255, 0.1)`

### Layout
Four items in a horizontal flex row on desktop. Stack 2×2 on tablet, single column on mobile.
`padding: 40px 0`

### Four Items
Each item: a small IBM Plex Mono label above a short Space Grotesk description.

**Item 1 — Power**
Label: `POWER SUPPLY`
Description: `Lucy Zodion feeder pillars — DNO-connected, sub-metered between DigiSite and site contractor.`

**Item 2 — Content Management**
Label: `CONTENT & SCHEDULING`
Description: `Samsung MagicINFO — remote ad scheduling, proof-of-play logging, live health monitoring.`

**Item 3 — Connectivity**
Label: `CONNECTIVITY`
Description: `Rugged 4G/5G dual-SIM routers with local content storage. Screens continue playing if connectivity drops.`

**Item 4 — Advertising Marketplace**
Label: `PROGRAMMATIC MARKETPLACE`
Description: `Inventory listed via Vistar Media and Place Exchange SSPs — accessible to every major media buying platform.`

Label font: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.18em`, `#00D4FF`
Description font: Space Grotesk 400, 14px, `#8A9BB0`, line-height 1.6
Gap between label and description: 8px
Gap between items: 48px desktop

---

## 8. COMMUNITY CONTENT CALLOUT

A small, quiet callout beneath the infrastructure strip — not a full section, just a single statement that introduces the community art and QR angle. This plants the idea before it reappears in the planning/compliance context of DS-06.

**Text:** `During advertising downtime, DigiSite screens display local community art and public information — strengthening every planning application and giving back to the neighbourhoods we operate in.`

Font: Space Grotesk 400, 15px, `#8A9BB0`
Max-width: 680px
Text-align: centre
Preceded by a small cyan icon — a simple four-pointed star or spark `✦` to signal this is a values statement, not a product spec

Margin-top: 48px

---

## 9. ANIMATION

All card content reveals on scroll using the standard entrance animation from DS-00.

Stagger order:
1. Section header block (eyebrow + headline + subhead) — delay 0ms
2. DigiScaff card — delay 100ms
3. DigiPerim card — delay 200ms
4. Infrastructure strip — delay 300ms
5. Community callout — delay 400ms

The illustrated visuals inside each card fade in independently with a slightly longer duration (700ms) — they should feel like screens powering up.

---

## 10. MOBILE LAYOUT

- Cards stack vertically, full width
- Illustrated visuals scale to full card width
- Spec strip wraps to two rows if needed (`flex-wrap: wrap`)
- Infrastructure strip stacks to 2×2 grid on tablet, single column on mobile
- Size configuration tables remain — reduce font to 11px on mobile
- Community callout text-align: left on mobile

---

## 11. COPY — LOCKED

| Element | Copy |
|---|---|
| Eyebrow | `THE SOLUTION` |
| Headline | `Two products. Every construction site.` |
| Subhead | `DigiScaff mounts on scaffold structures. DigiPerim integrates into perimeter hoardings. Between them, they cover every deployment opportunity on every construction site in DigiSite's network.` |
| DigiScaff tagline | `High-brightness LED screens on construction scaffolding.` |
| DigiScaff body | `DigiScaff mounts directly onto existing scaffold structures using a key clamp sub-frame and EN74 scaffold couplers — no welding, no permanent fixing. Screens are surrounded by a printed canvas wrap that tensiones onto the frame's outer tube, presenting a clean, professional frontage. The rig is a reusable asset, recovered and redeployed across multiple sites.` |
| DigiScaff deployment | `Deploys on: scaffold structures on any active construction site.` |
| DigiPerim tagline | `Digital screens integrated into site perimeter hoardings.` |
| DigiPerim body | `DigiPerim installs on any site perimeter — not just scaffolded sites. The screen sits inside a custom-designed weatherproof enclosure bolted onto a lightweight perimeter framework. Full front-access maintenance means panels are serviceable without rear access. Every construction site has a perimeter. DigiPerim ensures every site in DigiSite's network generates revenue from day one of the build — before scaffold is even erected.` |
| DigiPerim deployment | `Deploys on: any site perimeter hoarding — scaffolded or not.` |
| Community callout | `During advertising downtime, DigiSite screens display local community art and public information — strengthening every planning application and giving back to the neighbourhoods we operate in.` |

---

*Companion documents: DS-00-Brand-System.md, DS-04-Opportunity.md, DS-06-HowItWorks.md*
