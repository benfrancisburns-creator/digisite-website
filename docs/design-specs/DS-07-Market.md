# DigiSite — The Market Section Specification
**Document:** DS-07  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-06-HowItWorks.md, DS-08-Partnerships.md

---

## 1. CONCEPT

This is the investor section. Every other section on the site speaks to multiple audiences simultaneously — The Market speaks primarily to one: the person deciding whether to put money in.

The reader arriving here has seen what DigiSite does, how it works, and the scale of the construction industry it operates in. The question they're now asking is: "Is the advertising market big enough to make this worthwhile? And why hasn't someone done this already?"

This section answers both. In order:
1. The DOOH market is large, growing fast, and structurally shifting toward digital
2. The UK is already a mature OOH market — DigiSite enters an established commercial environment, not an unproven one
3. Converting static to digital is proven to multiply revenue — DigiSite is applying a known formula to a new inventory type
4. Nobody has done this at scale in the UK — DigiSite is first-mover in a specific, defensible niche
5. There is a legal precedent (Oxford Street) that proves it is approvable and commercially viable

The tone shifts slightly in this section compared to the rest of the site. More analytical. Fewer emotional beats. The stats carry more weight here and the copy around them is leaner. An investor reading this section should feel like they're reading a credible market analysis, not a sales pitch.

**Section anchor:** `id="market"`

---

## 2. SECTION STRUCTURE

```
[Section background: #0D1B2A — base navy]
[Top: 1px cyan rule — signals transition from How It Works]

[Section eyebrow + headline]

[Four headline stats — 2×2 grid]

[Competitor landscape statement]

[Oxford Street precedent callout]

[Bottom: no rule — flows into Partnerships]
```

---

## 3. SECTION HEADER

### Eyebrow
- Text: `THE MARKET`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`
- Text-align: left

### Headline
- Text: `A growing market. An untouched inventory category.`
- Font: Space Grotesk 700, 52px desktop / 34px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Max-width: 700px

### Intro
- Text: `Digital Out-of-Home is one of the fastest-growing channels in advertising. The infrastructure to monetise it at scale already exists. Construction scaffolding — one of the most prominent and widely distributed structures in every UK city — has never been part of it. Until now.`
- Font: Space Grotesk 400, 18px
- Colour: `#8A9BB0`
- Max-width: 640px
- Line-height: 1.65
- Margin-bottom: 80px

---

## 4. FOUR HEADLINE STATS — 2×2 GRID

### Layout
Desktop: `display: grid; grid-template-columns: 1fr 1fr; gap: 2px`
Mobile: single column stack

Each stat occupies one grid cell. The 2×2 layout creates two pairs — the first row is about global/UK market size, the second row is about the revenue opportunity and reach. This pairing is intentional and should be preserved.

### Stat Cell Treatment
- Background: `#0F2035`
- Border: `1px solid rgba(0, 212, 255, 0.1)`
- Padding: `48px 44px`
- No border-radius — the grid cells butt up against each other. The overall grid reads as a single structured panel, not four individual cards.

For the outer corners only: `border-radius: 6px` applied via `:first-child` and `:last-child` selectors to round just the outer corners of the grid as a whole.

---

### STAT 1 — Global DOOH Market
**Position:** Top-left

**Number:** `$20.7bn`
**Number font:** IBM Plex Mono 600, 72px desktop / 52px mobile
**Number colour:** `#00D4FF`
**Number letter-spacing:** `-0.02em`

**Label:** `GLOBAL DOOH MARKET 2024`
**Label font:** IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#8A9BB0`
**Label margin-top:** 12px

**Body:**
"Growing at 10.7% annually — one of the fastest-growing channels in advertising globally. Programmatic DOOH is accelerating this growth further as brands shift budgets from digital display into physical environments."

**Body font:** Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.65
**Body margin-top:** 16px

**Source:** `Statista / OAAA, 2024`
**Source font:** IBM Plex Mono 400, 10px, `#8A9BB0` at 55% opacity
**Source margin-top:** 16px

---

### STAT 2 — UK OOH Reach
**Position:** Top-right

**Number:** `83%`
**Number colour:** `#00D4FF`
**Same font treatment as Stat 1**

**Label:** `OF UK POPULATION REACHED WEEKLY`

**Body:**
"Digital OOH screens reach 83% of the UK population every week, according to Route — the UK's Joint Industry Currency for outdoor audience measurement. DigiSite inventory is measured by the same standard as every major billboard network in the country."

**Source:** `Route / Outsmart, 2024`

---

### STAT 3 — Static to Digital Revenue Multiplier
**Position:** Bottom-left

**Number:** `4×`
**Number colour:** `#F5A623` (amber — this is a performance multiplier, not a market size stat. Amber signals a different type of data point — the commercial case for going digital rather than staying static.)

**Label:** `REVENUE UPLIFT: STATIC TO DIGITAL`

**Body:**
"Converting a static advertising location to digital typically generates four times the annual revenue from the same site. DigiSite is applying this proven formula to a location type — construction scaffolding — that currently generates zero."

**Source:** `Outsmart / industry benchmarks`

---

### STAT 4 — UK OOH Weekly Revenue Benchmark
**Position:** Bottom-right

**Number:** `£1,000`
**Number colour:** `#00D4FF`

**Label:** `AVERAGE WEEKLY RATE — UK DIGITAL OOH`

**Body:**
"A standard UK digital billboard averages £1,000 per week in advertising revenue. City-centre and high-footfall locations command significantly more. DigiSite screens deploy in exactly these environments — at street level, on the most prominent facades in their respective cities."

**Source:** `Outsmart / media.co.uk, 2025`

---

## 5. STAT COUNTER ANIMATION

Stats 1, 2, and 4 use the counter animation from DS-04. Stat 3 (`4×`) counts from 1× to 4× — implement by counting the integer and appending `×`.

The 2×2 grid triggers as a unit when the container enters the viewport — all four cells animate simultaneously with a stagger of 80ms between them reading left-to-right, top-to-bottom (1, 2, 3, 4).

---

## 6. COMPETITOR LANDSCAPE STATEMENT

Below the stat grid. A single prose statement — not a table, not a comparison chart. DigiSite's competitive position is made in one clear paragraph.

### Background
Full-width block, `background: rgba(0, 212, 255, 0.03)`, `border-top: 1px solid rgba(0, 212, 255, 0.1)`, `border-bottom: 1px solid rgba(0, 212, 255, 0.1)`.
Padding: `48px 0`

### Layout
Max-width container centred. Two-column on desktop: label left (30%), body right (70%). Single column on mobile.

### Left — Label
- Text: `COMPETITIVE POSITION`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#00D4FF`

### Right — Body
**Headline:**
- Text: `DigiSite operates in a niche with no direct UK competition.`
- Font: Space Grotesk 700, 22px, `#F7F9FC`
- Margin-bottom: 16px

**Body:**
"Existing scaffold advertisers in the UK use printed static wraps and banners — not digital screens. The companies selling static scaffold advertising are not competitors; they are the baseline DigiSite replaces. The closest international comparable is Doka's SiteLight system in Germany. In the UK, there is no established operator deploying digital LED screens on construction scaffolding at scale. DigiSite enters this market as a first-mover with a clearly defined operational model, proven hardware, and an established regulatory pathway."

Font: Space Grotesk 400, 16px, `#8A9BB0`, line-height 1.7

---

## 7. OXFORD STREET PRECEDENT CALLOUT

A standalone callout block — the single most powerful piece of external validation DigiSite has. A digital screen on construction scaffolding was approved and installed on Oxford Street in 2024. It took seven years of planning. It proves the concept is approvable, commercially valued, and precedent-setting.

### Background
`background: #0F2035`
`border: 1px solid rgba(245, 166, 35, 0.2)` — amber border, not cyan. This is a landmark moment and amber signals that.
`border-radius: 6px`
`padding: 48px`

### Layout
Two-column on desktop: text left (60%), stat right (40%). Single column on mobile.

### Left — Text Content

**Label:**
- Text: `LEGAL PRECEDENT`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#F5A623`

**Headline:**
- Text: `Oxford Street, London. 2024. The first digital screen on UK construction scaffolding.`
- Font: Space Grotesk 700, 22px, `#F7F9FC`
- Letter-spacing: `-0.01em`
- Margin-bottom: 16px

**Body:**
"In 2024, the first digital LED screen on construction scaffolding was approved and installed on Oxford Street — the UK's most scrutinised advertising environment. The 10-year media contract that accompanied it demonstrates the long-term commercial value the market places on this inventory type. DigiSite's model is built on the same regulatory framework, applied systematically across the UK's most commercially active construction corridors."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.7

### Right — Stat Block
A single large stat presented inside the callout.

**Number:** `10`
**Unit (below number):** `YEAR MEDIA CONTRACT`
**Number font:** IBM Plex Mono 600, 80px, `#F5A623`
**Unit font:** IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#8A9BB0`

Below the stat:
**Secondary line:**
- Text: `Oxford Street, 2024`
- Font: IBM Plex Mono 400, 11px, `#8A9BB0` at 60% opacity

The amber number against the dark card background is the visual anchor of this callout. It should feel significant — a deliberate contrast to the cyan statistics above it.

---

## 8. CLOSING STATEMENT

Below the Oxford Street callout, full-width, centred. No background change — sits on the base navy.

**Text:** `The market exists. The technology is proven. The planning pathway is established. The inventory category is empty.`

Font: Space Grotesk 700, 26px desktop / 20px mobile
Colour: `#F7F9FC`
Letter-spacing: `-0.01em`
Max-width: 720px
Text-align: centre
Padding: `80px 0`

Four short sentences. Each one closing off a potential investor objection. The rhythm is deliberate — read aloud it has a cadence. Do not add a fifth sentence or break it into bullets.

---

## 9. ANIMATION

- Section header: standard entrance
- 2×2 stat grid: all four cells trigger simultaneously on intersection, staggered 80ms
- Stat counters: count up on intersection, each cell independent
- Competitor landscape statement: standard entrance, headline then body with 100ms stagger
- Oxford Street callout: the `10` counter animates separately — counts from 0 to 10 over 800ms. The amber colour makes this moment land.
- Closing statement: standard entrance, slight upward reveal

---

## 10. MOBILE LAYOUT

- 2×2 stat grid collapses to single column (4 stacked cells)
- Competitor landscape: single column, label above headline
- Oxford Street callout: text above stat, stat centred below
- Closing statement: 20px, full width

---

## 11. COPY — LOCKED

| Element | Copy |
|---|---|
| Eyebrow | `THE MARKET` |
| Headline | `A growing market. An untouched inventory category.` |
| Intro | `Digital Out-of-Home is one of the fastest-growing channels in advertising. The infrastructure to monetise it at scale already exists. Construction scaffolding — one of the most prominent and widely distributed structures in every UK city — has never been part of it. Until now.` |
| Stat 1 body | `Growing at 10.7% annually — one of the fastest-growing channels in advertising globally. Programmatic DOOH is accelerating this growth further as brands shift budgets from digital display into physical environments.` |
| Stat 2 body | `Digital OOH screens reach 83% of the UK population every week, according to Route — the UK's Joint Industry Currency for outdoor audience measurement. DigiSite inventory is measured by the same standard as every major billboard network in the country.` |
| Stat 3 body | `Converting a static advertising location to digital typically generates four times the annual revenue from the same site. DigiSite is applying this proven formula to a location type — construction scaffolding — that currently generates zero.` |
| Stat 4 body | `A standard UK digital billboard averages £1,000 per week in advertising revenue. City-centre and high-footfall locations command significantly more. DigiSite screens deploy in exactly these environments — at street level, on the most prominent facades in their respective cities.` |
| Competitor headline | `DigiSite operates in a niche with no direct UK competition.` |
| Competitor body | `Existing scaffold advertisers in the UK use printed static wraps and banners — not digital screens. The companies selling static scaffold advertising are not competitors; they are the baseline DigiSite replaces. The closest international comparable is Doka's SiteLight system in Germany. In the UK, there is no established operator deploying digital LED screens on construction scaffolding at scale. DigiSite enters this market as a first-mover with a clearly defined operational model, proven hardware, and an established regulatory pathway.` |
| Oxford Street headline | `Oxford Street, London. 2024. The first digital screen on UK construction scaffolding.` |
| Oxford Street body | `In 2024, the first digital LED screen on construction scaffolding was approved and installed on Oxford Street — the UK's most scrutinised advertising environment. The 10-year media contract that accompanied it demonstrates the long-term commercial value the market places on this inventory type. DigiSite's model is built on the same regulatory framework, applied systematically across the UK's most commercially active construction corridors.` |
| Closing statement | `The market exists. The technology is proven. The planning pathway is established. The inventory category is empty.` |

---

*Companion documents: DS-00-Brand-System.md, DS-06-HowItWorks.md, DS-08-Partnerships.md*
