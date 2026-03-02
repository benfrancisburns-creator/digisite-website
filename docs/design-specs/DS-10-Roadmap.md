# DigiSite — Roadmap Section Specification
**Document:** DS-10  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-08-Partnerships.md, DS-11-Contact.md

---

## 1. CONCEPT

The Roadmap section is the ambition statement. Every section before it has been building commercial and operational credibility — the market is real, the products are real, the model is proven. The Roadmap answers the final investor question: "How far does this go?"

The answer is: global. But it gets there in four clearly defined, logical phases that feel inevitable rather than aspirational. Each phase flows from the one before it. The pilot validates the model. The UK scale replicates it. Europe follows the same formula internationally. Asia is the long horizon.

### What this section must do
- Project confidence and ambition without making promises
- Show that the scale-up logic is built into the model from day one — it's not a hope, it's a replication strategy
- Give investors a mental map of where their capital sits in the journey
- Feel visually expansive — the brand idea of a "forever-moving canvas" should come alive here

### What this section must NOT do
- Attach dates to any phase (agreed — phase names only)
- Make specific site count or revenue commitments
- Feel like a PowerPoint slide — the roadmap should be designed, not templated

### Design principle
The roadmap moves left to right on desktop — Phase 1 on the left, Phase 4 on the right. The visual language expands as it moves right: the Phase 1 marker is tight and specific (four city names), Phase 4 is open and global. The sense of scale growing is built into the layout.

**Section anchor:** `id="roadmap"`

---

## 2. SECTION STRUCTURE

```
[Section background: #0F2035]
[Top: 1px cyan rule]

[Section eyebrow + headline + intro]

[Four-phase timeline — horizontal desktop, vertical mobile]

[Closing brand statement]
```

---

## 3. SECTION HEADER

### Eyebrow
- Text: `THE ROADMAP`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`

### Headline
- Text: `From Liverpool to the world.`
- Font: Space Grotesk 700, 56px desktop / 36px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Max-width: 600px

### Intro
- Text: `DigiSite's growth strategy is a replication model — not a reinvention at each stage. Every operational, commercial and regulatory framework built during the pilot is designed to be picked up and deployed in the next city, the next country, the next continent.`
- Font: Space Grotesk 400, 18px
- Colour: `#8A9BB0`
- Max-width: 640px
- Line-height: 1.65
- Margin-bottom: 80px

---

## 4. FOUR-PHASE TIMELINE

### Desktop Layout
A horizontal timeline spanning the full container width. Four phase blocks connected by a single line running left to right through the centre of the phase markers.

`display: grid; grid-template-columns: repeat(4, 1fr); gap: 0`

The connecting line is a single `1px` horizontal rule in `rgba(0, 212, 255, 0.25)` running through the vertical midpoint of the phase markers. Implemented as an absolutely positioned element behind the phase blocks.

The line has a subtle gradient: `rgba(0, 212, 255, 0.15)` on the left fading to `rgba(0, 212, 255, 0.5)` on the right — the line itself grows brighter as the roadmap extends, reinforcing the sense of scale building.

### Mobile Layout
Vertical stack. Connecting line runs top to bottom on the left edge (`left: 20px`). Each phase indents to the right.

---

### Phase Marker
Each phase has a marker at the top — a circle sitting on the connecting line.

- Size: 52px × 52px
- Border: `1px solid rgba(0, 212, 255, 0.4)`
- Background: `rgba(0, 212, 255, 0.06)`
- Border-radius: 50%
- Phase number inside: IBM Plex Mono 600, 16px, `#00D4FF`

**Phase 1 marker treatment:** The current phase — Phase 1 is where DigiSite is right now. Its marker is differentiated:
- Background: `rgba(0, 212, 255, 0.15)` — brighter fill
- Border: `1px solid #00D4FF` — full opacity
- A small pulsing dot at the centre of the marker: 8px circle, `#00D4FF`, opacity pulses `0.6 → 1.0 → 0.6` over 2s continuously — signals this is live/current
- This is the only looping animation in this section

---

### Phase Content (below marker)

**Phase label:**
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.2em`, `#00D4FF`
- Margin-top: 20px

**Phase name:**
- Font: Space Grotesk 700, 24px desktop / 20px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.01em`
- Margin-top: 8px

**Phase description:**
- Font: Space Grotesk 400, 14px
- Colour: `#8A9BB0`
- Line-height: 1.65
- Margin-top: 12px
- Max-width per column: naturally constrained by grid

**Geography tags:**
City or region names displayed as small pills below the description.
- Background: `rgba(0, 212, 255, 0.06)`
- Border: `1px solid rgba(0, 212, 255, 0.2)`
- Border-radius: 2px
- Padding: `4px 10px`
- Font: IBM Plex Mono 400, 10px, `#8A9BB0`
- Display: `flex; flex-wrap: wrap; gap: 6px`
- Margin-top: 16px

---

## 5. THE FOUR PHASES — CONTENT

### Phase 1 — Pilot

**Phase label:** `PHASE 01 · CURRENT`
**Phase name:** `Northern England Pilot`

**Description:**
"Deploy 4–16 screens across DigiSite's pilot geography. Validate commercial performance, refine operations, gather Route audience data, and establish the first Construction & Development scheme partnerships. The pilot generates the proof of concept that everything else is built on."

**Geography tags:**
`Liverpool` `Manchester` `Leeds` `Sheffield`

**Status indicator (Phase 1 only):**
Below the geography tags, a small status line:
- Text: `BUILDING NOW`
- Font: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.18em`
- Colour: `#00D4FF`
- Preceded by the pulsing dot element (same as marker centre dot, 6px)
- This reinforces that Phase 1 is active — DigiSite is not presenting a future concept, it is in motion

---

### Phase 2 — UK Scale

**Phase label:** `PHASE 02`
**Phase name:** `UK City Network`

**Description:**
"Scale the proven pilot model across the UK's major cities. Expand partner relationships, increase screen count, and grow direct advertiser relationships through the DigiSite booking platform. Each new city replicates the established operational and commercial framework."

**Geography tags:**
`Birmingham` `Bristol` `London` `Edinburgh` `Glasgow` `Cardiff`

*Note: London appears in Phase 2, not Phase 1, because the capital's planning complexity (heritage sensitivity, competitive OOH market, higher regulatory scrutiny) makes it a second-phase market after the model is proven in more operationally straightforward Northern cities.*

---

### Phase 3 — Europe

**Phase label:** `PHASE 03`
**Phase name:** `European Expansion`

**Description:**
"Apply the DigiSite model to European construction markets. The regulatory framework, hardware specifications, and commercial model translate directly. Target markets are selected based on construction activity, DOOH market maturity, and planning environment compatibility."

**Geography tags:**
`Germany` `Netherlands` `France` `Spain` `Nordics`

---

### Phase 4 — Asia

**Phase label:** `PHASE 04`
**Phase name:** `Asia Pacific`

**Description:**
"The long horizon. Asia Pacific represents the largest construction markets in the world — and some of the most digitally sophisticated advertising environments. DigiSite's programmatic infrastructure and operational model are built to scale to this market."

**Geography tags:**
`Singapore` `Japan` `Australia` `UAE`

**Visual treatment — Phase 4 is the most open:**
The Phase 4 geography tags have a slightly different treatment — the pill borders are at 50% opacity rather than the full `rgba(0, 212, 255, 0.2)` used for other phases. This visually signals that Phase 4 is the furthest horizon — defined but deliberately less specific than the earlier phases.

---

## 6. SCALE VISUALISATION

Between the timeline and the closing statement — a simple visual representation of scale growing across phases. Not a map (too complex to build well as SVG). Instead, a set of four numbers showing the indicative screen count ambition at each phase, presented as a data strip.

### Layout
Four columns, matching the timeline above. Each column shows a screen count range.

| Phase | Screens |
|---|---|
| Pilot | `4–16` |
| UK Network | `50–200` |
| Europe | `500+` |
| Asia Pacific | `2,000+` |

**Number treatment:**
IBM Plex Mono 600, 28px, `#00D4FF`

**Label below number:**
IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.15em`, `#8A9BB0`
Text: `SCREENS`

**Note below the strip:**
- Text: `Indicative scale targets. Not financial projections or commitments.`
- Font: IBM Plex Mono 400, 10px, `#8A9BB0` at 55% opacity
- Text-align: centre
- Margin-top: 16px

This caveat is important — it makes clear these are directional ambition figures, not investor promises. Its presence actually increases credibility rather than reducing it.

**Background strip:**
`background: rgba(0, 212, 255, 0.03)`
`border-top: 1px solid rgba(0, 212, 255, 0.08)`
`border-bottom: 1px solid rgba(0, 212, 255, 0.08)`
`padding: 40px 0`
`margin: 64px 0`

---

## 7. CLOSING BRAND STATEMENT

The final element of the roadmap — and effectively the final statement of the body of the site before the contact section. It should land with weight.

**Text:**
`"DigiSite is a forever-moving global canvas."`

Font: Space Grotesk 700, 36px desktop / 26px mobile
Colour: `#F7F9FC`
Letter-spacing: `-0.02em`
Text-align: centre
Max-width: 700px
Margin: `0 auto`

The quotation marks are intentional — this is the vision statement from the business concept document, presented here as a direct quote. It connects the roadmap (the global ambition) back to the founding idea stated at the top of DS-01 in the brand concept.

**Below the statement:**
- Text: `Unlocking brand exposure in places traditional billboards cannot reach.`
- Font: Space Grotesk 400, 18px, `#8A9BB0`
- Text-align: centre
- Margin-top: 16px
- Max-width: 560px
- Margin: `16px auto 0`

**Padding below:**
`padding-bottom: 80px` — generous space before the Contact section begins

---

## 8. ANIMATION

### Timeline entrance
The connecting line draws left to right first — `width: 0% → 100%` over 1000ms ease-out — then each phase block fades in sequentially with 150ms stagger. The line drawing precedes the content appearing, creating the sense of the timeline being laid out before the detail populates.

### Phase 1 pulsing dot
Starts pulsing immediately when the section enters viewport. Continues indefinitely (only looping animation in this section, alongside the hero scroll indicator).

### Scale visualisation
Numbers count up on intersection using the counter animation from DS-04. `4` counts to `16`, `50` counts to `200`, `500+` counts to `500` then appends `+`, `2,000+` counts to `2,000` then appends `+`.

### Closing statement
`opacity 0 → 1, translateY 20px → 0` over 700ms. Slightly longer duration than standard — this is the emotional landing point of the section and deserves a moment.

---

## 9. MOBILE LAYOUT

- Timeline: vertical stack, connecting line on left edge
- Phase markers: 44px circles, left-aligned with line
- Phase content: indented 72px from left edge
- Geography tags: wrap naturally
- Scale visualisation: 2×2 grid (Pilot + UK on top row, Europe + Asia on bottom)
- Closing statement: 26px, full width, left-aligned (not centred on mobile — centred copy on narrow screens feels formal)

---

## 10. COPY — LOCKED

| Element | Copy |
|---|---|
| Eyebrow | `THE ROADMAP` |
| Headline | `From Liverpool to the world.` |
| Intro | `DigiSite's growth strategy is a replication model — not a reinvention at each stage. Every operational, commercial and regulatory framework built during the pilot is designed to be picked up and deployed in the next city, the next country, the next continent.` |
| Phase 1 name | `Northern England Pilot` |
| Phase 1 description | `Deploy 4–16 screens across DigiSite's pilot geography. Validate commercial performance, refine operations, gather Route audience data, and establish the first Construction & Development scheme partnerships. The pilot generates the proof of concept that everything else is built on.` |
| Phase 1 status | `BUILDING NOW` |
| Phase 2 name | `UK City Network` |
| Phase 2 description | `Scale the proven pilot model across the UK's major cities. Expand partner relationships, increase screen count, and grow direct advertiser relationships through the DigiSite booking platform. Each new city replicates the established operational and commercial framework.` |
| Phase 3 name | `European Expansion` |
| Phase 3 description | `Apply the DigiSite model to European construction markets. The regulatory framework, hardware specifications, and commercial model translate directly. Target markets are selected based on construction activity, DOOH market maturity, and planning environment compatibility.` |
| Phase 4 name | `Asia Pacific` |
| Phase 4 description | `The long horizon. Asia Pacific represents the largest construction markets in the world — and some of the most digitally sophisticated advertising environments. DigiSite's programmatic infrastructure and operational model are built to scale to this market.` |
| Scale caveat | `Indicative scale targets. Not financial projections or commitments.` |
| Closing statement | `"DigiSite is a forever-moving global canvas."` |
| Closing subline | `Unlocking brand exposure in places traditional billboards cannot reach.` |

---

*Companion documents: DS-00-Brand-System.md, DS-08-Partnerships.md, DS-11-Contact.md*
