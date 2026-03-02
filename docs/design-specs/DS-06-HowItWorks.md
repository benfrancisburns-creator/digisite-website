# DigiSite — How It Works Section Specification
**Document:** DS-06  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-05-Solution.md, DS-07-Market.md

---

## 1. CONCEPT

This section is the operational credibility section. The reader arriving here has seen the opportunity (DS-04) and understood the products (DS-05). The question they're now asking is: "But how does it actually happen? What do I have to do? What does DigiSite handle?"

The primary reader for this section is a **construction partner** — a scaffold company director, a principal contractor's commercial manager, or a property developer. They are practical people. They want to know the process is real, that DigiSite has thought through the complexity, and that the burden on them is minimal.

The secondary reader is an **investor** — who needs to see that DigiSite has a credible, repeatable operational model, not just a concept.

### What this section must do
- Show the end-to-end process from first conversation to revenue share
- Demonstrate that DigiSite carries the hard work (planning, DNO, mobilisation)
- Make clear what the partner provides and what DigiSite provides
- Surface the DNO power benefit as a genuine value-add — not buried, front and centre
- Give a realistic sense of the timeline without making hard commitments

### What this section must NOT do
- Overwhelm with operational detail — that belongs in the Partnership Framework document
- Mention specific planning timelines that could become liabilities
- Make the process sound slow or bureaucratic — even though planning takes time, the framing is "DigiSite handles it in parallel"

**Section anchor:** `id="how-it-works"`

---

## 2. SECTION STRUCTURE

```
[Section background: #0F2035]
[Top: 1px cyan rule]

[Section eyebrow + headline + intro]

[Six-step process — horizontal timeline desktop, vertical mobile]

[Two-column value exchange panel]

[DNO benefit callout]
```

---

## 3. SECTION HEADER

### Eyebrow
- Text: `HOW IT WORKS`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`

### Headline
- Text: `DigiSite handles the complexity. You share the revenue.`
- Font: Space Grotesk 700, 52px desktop / 34px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Max-width: 720px

### Intro
- Text: `From first conversation to live screen, DigiSite manages planning consent, power infrastructure, hardware installation and content management. A construction partner provides site access and programme dates. Everything else is DigiSite.`
- Font: Space Grotesk 400, 18px
- Colour: `#8A9BB0`
- Max-width: 640px
- Line-height: 1.65
- Margin-bottom: 80px

---

## 4. SIX-STEP PROCESS

### Layout — Desktop
A horizontal timeline. Six steps in a single row connected by a thin cyan line running through their centre. The line represents the timeline progressing left to right.

`display: grid; grid-template-columns: repeat(6, 1fr); gap: 0`

The connecting line:
- A single `1px` horizontal rule in `rgba(0, 212, 255, 0.3)` running left to right at the vertical midpoint of the step number circles
- Implemented as a pseudo-element on the container or as an absolutely positioned element behind the steps

### Layout — Mobile
Vertical stack. Steps connect via a thin vertical cyan line on the left edge. Each step indents to the right of the line.

### Step Component
Each step contains:
1. Step number — circle with number inside
2. Step label — short name
3. Step description — one or two sentences
4. Who handles it — DigiSite or Partner tag

**Step number circle:**
- Size: 40px × 40px
- Border: `1px solid rgba(0, 212, 255, 0.4)`
- Background: `rgba(0, 212, 255, 0.06)`
- Number: IBM Plex Mono 600, 14px, `#00D4FF`
- Border-radius: 50%
- Centred horizontally above the step content

**Step label:**
- Font: Space Grotesk 700, 15px, `#F7F9FC`
- Margin-top: 16px
- Letter-spacing: `-0.01em`

**Step description:**
- Font: Space Grotesk 400, 13px, `#8A9BB0`
- Line-height: 1.6
- Margin-top: 8px

**Who handles it tag:**
- Small pill below the description
- DigiSite tag: `background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.25); color: #00D4FF`
- Partner tag: `background: rgba(245, 166, 35, 0.1); border: 1px solid rgba(245, 166, 35, 0.25); color: #F5A623`
- Font: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.15em`
- Padding: `4px 10px`
- Border-radius: 2px

---

## 5. THE SIX STEPS — CONTENT

### Step 1 — Partnership
**Label:** `Partnership`
**Description:** `Join the DigiSite scheme and share your forward site pipeline. DigiSite assesses each site against audience data and commercial viability.`
**Who handles it:** Partner (pipeline sharing) + DigiSite (assessment)
**Tag:** Show both — Partner pill first, DigiSite pill second, stacked or side by side

*Note on tag treatment for steps with shared responsibility: show the partner pill first (they initiate) then the DigiSite pill. Steps where DigiSite carries everything solo: DigiSite pill only.*

### Step 2 — Site Assessment
**Label:** `Site Assessment`
**Description:** `DigiSite surveys each qualifying site — scaffold geometry, perimeter dimensions, audience data from Route, and planning sensitivity. A commercial viability decision is made per site.`
**Who handles it:** DigiSite only

### Step 3 — Planning Consent
**Label:** `Planning Consent`
**Description:** `DigiSite submits and funds advertisement consent applications for every qualifying site. No screen goes live without consent. Partners are kept informed throughout.`
**Who handles it:** DigiSite only

*This step has a note beneath the description — not part of the step itself but a clarifying line:*
- Text: `Typical timeline: 10–20 weeks depending on site sensitivity.`
- Font: IBM Plex Mono 400, 11px, `#8A9BB0` at 70% opacity
- This is the only place on the site where a planning timeline is mentioned — framed as a range, not a promise

### Step 4 — Mobilisation
**Label:** `Mobilisation`
**Description:** `DigiSite deploys screens, rigging, power infrastructure and connectivity — coordinated with the partner's site programme. Installation is fast and non-disruptive to site operations.`
**Who handles it:** DigiSite only

### Step 5 — Go Live
**Label:** `Go Live`
**Description:** `Screens go live. DigiSite manages all advertising sales, content scheduling, remote monitoring and advertiser reporting. The partner receives monthly proof-of-play reports.`
**Who handles it:** DigiSite only

### Step 6 — Revenue Share
**Label:** `Revenue Share`
**Description:** `Monthly revenue share payments in arrears, with full reporting. The partner earns from their site without managing a single advertiser relationship.`
**Who handles it:** DigiSite (payment) — Partner (earns)
**Tag:** DigiSite pill + Partner pill — in this step, Partner pill second to signal they are the beneficiary

---

## 6. VALUE EXCHANGE PANEL

Below the six-step timeline. A two-column layout directly comparing what each party puts in and gets out. This is the clearest articulation of the commercial relationship on the site.

### Layout
Two columns side by side, equal width. Desktop: `display: grid; grid-template-columns: 1fr 1fr; gap: 2px`. Mobile: stacked.

### Left Column — The Partner
**Header:**
- Label: `THE PARTNER PROVIDES`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#F5A623` (amber — partner colour)
- Background strip: `rgba(245, 166, 35, 0.05)` very faint amber wash across the column header

**Items (3):**
1. Site access and programme dates
2. Coordination with site operations during installation
3. Exclusivity on the relevant structure during the agreement term

**Item treatment:**
- Each item preceded by a small `→` in amber
- Font: Space Grotesk 400, 15px, `#8A9BB0`
- Line-height: 1.7
- Padding: `32px 36px`

### Right Column — DigiSite
**Header:**
- Label: `DIGISITE HANDLES`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#00D4FF` (cyan — DigiSite colour)
- Background strip: `rgba(0, 212, 255, 0.05)`

**Items (6):**
1. Advertisement consent applications (funded by DigiSite)
2. Structural engineering sign-off per site
3. DNO power connection and sub-metering
4. Hardware supply, installation and maintenance
5. All advertising sales and content management
6. Monthly revenue share payments and proof-of-play reporting

**Item treatment:**
- Each item preceded by a small `→` in cyan
- Same font treatment as left column

### Bottom of panel — balance statement
Below both columns, full width, centred:
- Text: `The partner provides the location. DigiSite provides everything else.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Letter-spacing: `-0.01em`
- Padding-top: 32px
- Border-top: `1px solid rgba(255,255,255,0.06)`

---

## 7. DNO POWER BENEFIT CALLOUT

This is a standalone callout block below the value exchange panel. It gets its own distinct treatment because it's a genuine, concrete value-add that most construction partners won't be expecting — DigiSite saving them the cost and complexity of arranging their own site power connection.

### Background
`rgba(0, 212, 255, 0.04)` — same barely-there cyan wash as the infrastructure strip in DS-05.
Border: `1px solid rgba(0, 212, 255, 0.15)`
Border-radius: 6px
Padding: `40px 48px`

### Layout
Two-column on desktop: icon/label left, body text right. Single column on mobile.

### Left — Label
- Text: `POWER SUPPLY BENEFIT`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#00D4FF`
- Below the label, a simple lightning bolt icon in cyan (SVG, 24px)

### Right — Body
**Headline:**
- Text: `DigiSite manages the DNO connection — so you don't have to.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Margin-bottom: 12px

**Body:**
- Text: `Every DigiSite deployment requires a DNO (Distribution Network Operator) connection for site power. Because regulations permit only one temporary connection per site, DigiSite and the construction contractor share the supply. DigiSite handles the application, the lead time, and the admin. The contractor receives access to site power at cost — sub-metered, accurate, no markup.`
- Font: Space Grotesk 400, 15px, `#8A9BB0`
- Line-height: 1.7

**Closing line:**
- Text: `This benefit alone often covers the cost of partnering with DigiSite before a single advertisement runs.`
- Font: Space Grotesk 500, 15px, `#F7F9FC` — slightly elevated from the body to signal this is the punchline
- Margin-top: 16px

---

## 8. ANIMATION

Standard entrance animations from DS-00, with one addition for the timeline steps:

The six steps animate in sequence — each step reveals 80ms after the previous, creating a left-to-right cascade that mirrors the timeline direction. The connecting line draws left to right as the steps reveal — implemented via a CSS `width` animation from `0%` to `100%` triggered on intersection.

```css
.timeline-line {
  width: 0%;
  transition: width 1.2s ease-out;
}
.timeline-line.visible {
  width: 100%;
}
```

The value exchange panel columns slide in from opposite sides:
- Left column: `translateX(-20px) → translateX(0)`
- Right column: `translateX(20px) → translateX(0)`
- Both: `opacity 0 → 1`, duration 600ms, triggered simultaneously

---

## 9. MOBILE LAYOUT

- Six steps become a vertical list with connecting line on the left edge
- Each step: number circle on the left, label + description + tag to the right
- Value exchange panel: stacked — partner column above, DigiSite column below
- The balance statement remains between them on mobile, acting as a divider
- DNO callout: single column, label above body

---

## 10. COPY — LOCKED

| Element | Copy |
|---|---|
| Eyebrow | `HOW IT WORKS` |
| Headline | `DigiSite handles the complexity. You share the revenue.` |
| Intro | `From first conversation to live screen, DigiSite manages planning consent, power infrastructure, hardware installation and content management. A construction partner provides site access and programme dates. Everything else is DigiSite.` |
| Step 1 label | `Partnership` |
| Step 1 description | `Join the DigiSite scheme and share your forward site pipeline. DigiSite assesses each site against audience data and commercial viability.` |
| Step 2 label | `Site Assessment` |
| Step 2 description | `DigiSite surveys each qualifying site — scaffold geometry, perimeter dimensions, audience data from Route, and planning sensitivity. A commercial viability decision is made per site.` |
| Step 3 label | `Planning Consent` |
| Step 3 description | `DigiSite submits and funds advertisement consent applications for every qualifying site. No screen goes live without consent. Partners are kept informed throughout.` |
| Step 3 note | `Typical timeline: 10–20 weeks depending on site sensitivity.` |
| Step 4 label | `Mobilisation` |
| Step 4 description | `DigiSite deploys screens, rigging, power infrastructure and connectivity — coordinated with the partner's site programme. Installation is fast and non-disruptive to site operations.` |
| Step 5 label | `Go Live` |
| Step 5 description | `Screens go live. DigiSite manages all advertising sales, content scheduling, remote monitoring and advertiser reporting. The partner receives monthly proof-of-play reports.` |
| Step 6 label | `Revenue Share` |
| Step 6 description | `Monthly revenue share payments in arrears, with full reporting. The partner earns from their site without managing a single advertiser relationship.` |
| Balance statement | `The partner provides the location. DigiSite provides everything else.` |
| DNO headline | `DigiSite manages the DNO connection — so you don't have to.` |
| DNO body | `Every DigiSite deployment requires a DNO (Distribution Network Operator) connection for site power. Because regulations permit only one temporary connection per site, DigiSite and the construction contractor share the supply. DigiSite handles the application, the lead time, and the admin. The contractor receives access to site power at cost — sub-metered, accurate, no markup.` |
| DNO punchline | `This benefit alone often covers the cost of partnering with DigiSite before a single advertisement runs.` |

---

*Companion documents: DS-00-Brand-System.md, DS-05-Solution.md, DS-07-Market.md*
