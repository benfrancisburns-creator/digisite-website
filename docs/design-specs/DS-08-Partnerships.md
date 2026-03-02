# DigiSite — Partnership Schemes Section Specification
**Document:** DS-08  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-07-Market.md, DS-11-Contact.md

---

## 1. CONCEPT

This is the commercial engine of the site. Every other section builds toward this one. The reader arriving here either wants to invest (in which case they need to understand how DigiSite creates value across multiple partner types), or they are a potential partner (in which case they need to feel like this section was written specifically for them).

It was.

Each of the four partnership schemes speaks in the language of its target reader. A scaffold company director reads their scheme and recognises their world immediately — forward pipeline, programme dates, site handover. A festival organiser reads theirs and sees premium CPM and fast deployment. A property developer with a neglected site reads theirs and understands for the first time that their liability has a commercial value.

This is the section where DigiSite demonstrates it understands four completely different industries and has built a distinct, tailored commercial proposition for each one.

### Design principle for this section
Each scheme gets its own complete panel. Not a card, not a summary tile — a full panel with enough depth to answer the specific questions that reader will have. The section is intentionally long. A serious potential partner will read every word of their scheme. The section rewards that attention.

### Revenue share treatment
Revenue share percentages are deliberately kept vague throughout — described in terms of structure and principles, never specific percentages. This drives interested parties to the contact form where the conversation can be had properly.

### Navigation within the section
A sticky scheme selector sits at the top of the section. As the reader scrolls through each panel, the selector updates to show which scheme they are currently viewing. Clicking any scheme name scrolls directly to that panel. This makes the section navigable without hiding content behind tabs.

**Section anchor:** `id="partnerships"`
**Individual panel anchors:** `#scheme-construction`, `#scheme-landlords`, `#scheme-commercial`, `#scheme-events`

---

## 2. SECTION STRUCTURE

```
[Section background: #0D1B2A]
[Top: 1px amber rule — signals shift from market analysis to commercial offer]

[Section eyebrow + headline + intro]

[Sticky scheme selector — 4 scheme names]

[PANEL 1: Construction & Development]
[PANEL 2: Landlords & Landowners]
[PANEL 3: Commercial & Public]
[PANEL 4: Events]

[Cross-scheme principles strip]
```

---

## 3. SECTION HEADER

### Top Rule
1px full-width amber rule at the very top of the section.
`background: #F5A623; opacity: 0.35`
This amber rule mirrors the one at the bottom of DS-04 (Opportunity). The pairing is intentional — amber bookmarks the commercial argument that runs through the middle of the site.

### Eyebrow
- Text: `PARTNERSHIP SCHEMES`
- Font: IBM Plex Mono 600, 11px, uppercase, `letter-spacing: 0.2em`
- Colour: `#00D4FF`

### Headline
- Text: `Four schemes. One for every partner type.`
- Font: Space Grotesk 700, 56px desktop / 36px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`
- Max-width: 700px

### Intro
- Text: `DigiSite doesn't offer a single generic partnership. Each scheme is built around the specific asset, commercial position, and priorities of a different type of partner. Find your scheme below.`
- Font: Space Grotesk 400, 18px
- Colour: `#8A9BB0`
- Max-width: 600px
- Line-height: 1.65
- Margin-bottom: 64px

---

## 4. STICKY SCHEME SELECTOR

A horizontal row of four scheme names that sticks to the top of the viewport (below the main navigation) as the reader scrolls through the panels.

### Behaviour
- Becomes sticky at `top: 72px` (immediately below the fixed navigation)
- Active scheme highlighted based on scroll position — updated via IntersectionObserver watching each panel
- Clicking a scheme name smooth-scrolls to that panel

### Styling
- Background: `rgba(13, 27, 42, 0.96)` with `backdrop-filter: blur(12px)`
- Border-bottom: `1px solid rgba(0, 212, 255, 0.12)`
- Height: 52px
- Full viewport width

### Scheme names (left to right)
1. `Construction & Development`
2. `Landlords & Landowners`
3. `Commercial & Public`
4. `Events`

### Item styling
- Font: Space Grotesk 500, 13px, `letter-spacing: 0.04em`
- Inactive: `#8A9BB0`
- Active: `#F7F9FC` with a 2px bottom border in the scheme's accent colour (see scheme colour system below)
- Hover: `#F7F9FC`, no border
- Transition: `all 0.2s ease`
- Items spaced evenly across the container width

### Scheme colour system
Each scheme has a designated accent colour used for its selector indicator, its panel top rule, and its CTA button:

| Scheme | Accent Colour | Rationale |
|---|---|---|
| Construction & Development | `#00D4FF` (cyan) | Core scheme, primary product, brand primary |
| Landlords & Landowners | `#F5A623` (amber) | Self-generated inventory, growth driver, warmth |
| Commercial & Public | `#00D4FF` (cyan) | Commercially adjacent to Construction |
| Events | `#F5A623` (amber) | Premium, high-value, exciting |

Alternating cyan/amber creates visual rhythm as the reader scrolls through panels without requiring additional colours outside the brand system.

### JavaScript — active state management
```javascript
const panels = document.querySelectorAll('.scheme-panel');
const selectorItems = document.querySelectorAll('.scheme-selector-item');

const panelObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      selectorItems.forEach(item => {
        item.classList.toggle('active', item.dataset.target === id);
      });
    }
  });
}, { threshold: 0.3 });

panels.forEach(panel => panelObserver.observe(panel));
```

---

## 5. PANEL STRUCTURE — SHARED TEMPLATE

Every scheme panel uses the same structural template. The content within each element is specific to the scheme.

### Panel anatomy (top to bottom)
```
[Panel top rule — scheme accent colour]
[Panel header row: scheme number + name + tagline]
[Two-column body: left = who + what they get; right = the proposition detail]
[Commercial structure strip]
[CTA button]
```

### Panel background
Alternating to create visual separation:
- Panels 1 and 3: `#0F2035`
- Panels 2 and 4: `#0D1B2A`

### Panel padding
`padding: 80px 0` desktop, `padding: 64px 0` mobile

### Panel top rule
1px full-width rule in the scheme's accent colour at `opacity: 0.4` at the very top edge of the panel (outside the padding).

---

## 6. PANEL 1 — CONSTRUCTION & DEVELOPMENT

**Accent colour:** `#00D4FF` (cyan)
**Background:** `#0F2035`
**Target reader:** Scaffold company directors, principal contractors, building company commercial teams

---

### Panel Header Row

**Scheme number:**
- Text: `SCHEME 01`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.2em`, `#00D4FF` at 60% opacity

**Scheme name:**
- Text: `Construction & Development`
- Font: Space Grotesk 700, 44px desktop / 30px mobile
- Colour: `#F7F9FC`
- Letter-spacing: `-0.02em`

**Tagline:**
- Text: `Turn your scaffold pipeline into a recurring revenue stream.`
- Font: Space Grotesk 400, 20px
- Colour: `#8A9BB0`
- Margin-top: 12px

---

### Two-Column Body

**Left column (40% width desktop) — Who + What they get**

*Who this scheme is for:*
Label: `FOR`
Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#00D4FF`

List of three partner types — each on its own line with a `→` prefix in cyan:
- `Scaffold companies with a pipeline of contracted sites`
- `Principal contractors managing their own scaffold`
- `Building companies with control of their site perimeter`

Font: Space Grotesk 400, 15px, `#F7F9FC`, line-height 1.8

Margin-top from label: 16px. Gap between label and list: 12px.

---

*What the partner gets:*
Label: `WHAT YOU RECEIVE`
Font: same as FOR label

List — `→` prefix in cyan:
- `Revenue share on every site in your pipeline`
- `Zero upfront cost — DigiSite funds hardware and installation`
- `DigiSite manages planning, power, advertising sales`
- `Site power supply at cost via DNO sub-metering`
- `Monthly revenue reports with proof-of-play`

---

**Right column (60% width desktop) — The proposition**

*Opening hook:*
- Text: `Your scaffold generates work for your clients. With DigiSite, it generates income for you.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Letter-spacing: `-0.01em`
- Margin-bottom: 20px

*Body:*
"Every site in your pipeline is a potential DigiSite location. You share your forward programme — sites contracted or in tender, with approximate dates and locations. DigiSite assesses each one, handles planning consent, and deploys on every qualifying site. You earn a revenue share on every screen that goes live.

This is the pipeline model: the partnership comes first, sites flow from it. The more active sites you carry, the more you earn. And because DigiSite is already on your site managing power infrastructure, there's a direct operational benefit before the first advertisement ever runs."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.75

---

### Tier Model

Below the two-column body. A visual representation of the volume tier structure — the centrepiece of this scheme's commercial logic.

**Label above:**
- Text: `VOLUME TIER MODEL — REVENUE SHARE INCREASES WITH ACTIVE SITES`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.15em`, `#00D4FF`
- Margin-bottom: 24px

**Four tier blocks in a horizontal row (desktop) / vertical stack (mobile):**

Each tier block:
- Background: `rgba(0, 212, 255, 0.04)` to `rgba(0, 212, 255, 0.10)` — gradient from left (lightest) to right (darkest) indicating increasing value
- Border: `1px solid rgba(0, 212, 255, 0.15)`
- Border-radius: 4px
- Padding: `24px 20px`

| Tier | Sites | Label | Key Benefit |
|---|---|---|---|
| Standard | 1–4 sites | `TIER 1` | Standard onboarding, remote monitoring, proof-of-play |
| Preferred | 5–9 sites | `TIER 2` | Priority mobilisation scheduling + co-branding on canvas wrap |
| Strategic | 10–19 sites | `TIER 3` | Dedicated account contact + pipeline planning support |
| Alliance | 20+ sites | `TIER 4` | First access to new DigiSite products + joint business planning |

**Each tier block contains:**

Tier label: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.18em`, `#00D4FF`

Site count: IBM Plex Mono 600, 22px, `#F7F9FC` — e.g. `1–4` then `SITES` in 9px below

Revenue share line: Space Grotesk 500, 12px, `#8A9BB0` — `Revenue share: contact us` (same for all four — keeps percentages vague while signalling the structure exists)

Key benefit: Space Grotesk 400, 12px, `#8A9BB0`, line-height 1.5

**The Tier 4 (Alliance) block is visually differentiated:**
- Border colour: `rgba(0, 212, 255, 0.35)` — more prominent
- Background: `rgba(0, 212, 255, 0.08)` — slightly brighter
- The site count `20+` in `#00D4FF` rather than white — signals this is the tier DigiSite wants to talk to most

**Statement below tier model:**
- Text: `Tier status is calculated on active live sites plus accumulated site history. The more you commit, the better your terms — and the more you earn.`
- Font: Space Grotesk 400, 13px, `#8A9BB0`
- Text-align: centre
- Margin-top: 16px

---

### Commercial Structure Strip (Panel 1)

A horizontal strip summarising the key commercial terms. Four items in a row.

| Label | Value |
|---|---|
| `AGREEMENT TYPE` | Site licence under framework agreement |
| `MINIMUM TERM` | 3 months (co-terminus with scaffold) |
| `PAYMENT` | Monthly in arrears |
| `PLANNING COST` | Funded entirely by DigiSite |

Label: IBM Plex Mono 600, 9px, uppercase, `letter-spacing: 0.15em`, `#00D4FF`
Value: Space Grotesk 400, 13px, `#8A9BB0`
Background: `rgba(0, 212, 255, 0.03)`, `border-top: 1px solid rgba(0, 212, 255, 0.1)`, `border-bottom: 1px solid rgba(0, 212, 255, 0.1)`
Padding: `28px 0`

---

### CTA Button (Panel 1)
- Text: `Join the Construction & Development Scheme →`
- Style: solid cyan — `background: #00D4FF; color: #0D1B2A`
- Font: Space Grotesk 600, 14px, `letter-spacing: 0.04em`
- Padding: `16px 36px`
- Border-radius: 2px
- On click: scrolls to `#contact` and pre-selects "Construction & Development" in the contact form scheme selector
- Hover: `background: #33DDFF`, `box-shadow: 0 0 24px rgba(0,212,255,0.35)`
- Margin-top: 40px

---

## 7. PANEL 2 — LANDLORDS & LANDOWNERS

**Accent colour:** `#F5A623` (amber)
**Background:** `#0D1B2A`
**Target reader:** Property owners, freeholders, landowners with neglected or undeveloped sites, heritage property owners, developers in planning limbo

---

### Panel Header Row

**Scheme number:** `SCHEME 02`

**Scheme name:** `Landlords & Landowners`

**Tagline:**
- Text: `Your vacant site is costing you money. DigiSite changes that.`
- Font: Space Grotesk 400, 20px, `#8A9BB0`

---

### Two-Column Body

**Left column — Who + What they get**

*Who this scheme is for:*
- `Property owners with vacant or underperforming sites`
- `Freeholders of buildings in planning limbo`
- `Owners of heritage properties requiring fabric repair`
- `Landowners with high-footfall frontage generating no income`

*What the partner gets:*
- `A guaranteed minimum annual income from an idle asset`
- `Revenue share above a defined threshold`
- `No upfront cost — DigiSite funds scaffold, hardware, and planning`
- `Improved visual presentation of a neglected frontage`
- `A credible argument for planning authorities (community benefit)`

---

**Right column — The proposition**

*Opening hook:*
- Text: `DigiSite doesn't need your site to be active. It needs it to be visible.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Margin-bottom: 20px

*Body:*
"Vacant plots, empty buildings, sites stuck in planning — these assets are costing their owners money every month in rates, insurance and maintenance, generating nothing in return. DigiSite identifies sites with strong audience data, approaches the landowner, and proposes a ground licence that pays from day one.

DigiSite sources and erects any scaffold required. DigiSite applies for and funds planning consent. DigiSite manages all advertising. The landowner's contribution is access rights and a signature. The result is a new income stream from an asset that was previously a liability."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.75

---

### Heritage Opportunity Callout

A distinct inset block within Panel 2 — amber bordered, giving it prominence without breaking the panel flow.

**Background:** `rgba(245, 166, 35, 0.04)`
**Border:** `1px solid rgba(245, 166, 35, 0.2)`
**Border-radius:** 6px
**Padding:** `32px 36px`

**Label:**
- Text: `HERITAGE & LISTED BUILDINGS`
- Font: IBM Plex Mono 600, 10px, uppercase, `letter-spacing: 0.18em`, `#F5A623`

**Headline:**
- Text: `A deteriorating listed building is a planning problem. DigiSite can help make it a planning solution.`
- Font: Space Grotesk 700, 18px, `#F7F9FC`
- Margin-bottom: 12px

**Body:**
"Where scaffold is required for inspection, stabilisation or repair, DigiSite can monetise that scaffold during the works period. Revenue generated by the screens can be ring-fenced toward fabric repair costs — a material consideration that planning authorities weigh favourably. Community art content displayed during advertising downtime further strengthens the planning case. DigiSite can help turn a liability into a demonstrable public benefit."

Font: Space Grotesk 400, 14px, `#8A9BB0`, line-height 1.65

**Note at bottom of callout:**
- Text: `Grade I and II* listed buildings carry very high planning risk and are assessed on a case-by-case basis. Grade II listed buildings are the primary heritage opportunity.`
- Font: IBM Plex Mono 400, 11px, `#8A9BB0` at 60% opacity, italic-equivalent (lighter weight)
- Margin-top: 16px

---

### Commercial Structure Strip (Panel 2)

| Label | Value |
|---|---|
| `AGREEMENT TYPE` | Ground licence agreement |
| `MINIMUM TERM` | 24 months (36–48 preferred for quality sites) |
| `PAYMENT` | Guaranteed minimum + revenue share above threshold |
| `PLANNING COST` | Funded entirely by DigiSite |

---

### CTA Button (Panel 2)
- Text: `Discuss a Landlords & Landowners Scheme →`
- Style: outlined amber — `border: 1px solid #F5A623; color: #F5A623; background: transparent`
- Hover: `background: rgba(245, 166, 35, 0.1)`
- On click: scrolls to `#contact` and pre-selects "Landlords & Landowners"

---

## 8. PANEL 3 — COMMERCIAL & PUBLIC

**Accent colour:** `#00D4FF` (cyan)
**Background:** `#0F2035`
**Target reader:** Retail estate managers, commercial property directors, drive-thru and leisure operators, local authority estates and highways teams

---

### Panel Header Row

**Scheme number:** `SCHEME 03`

**Scheme name:** `Commercial & Public`

**Tagline:**
- Text: `High-footfall sites. Captive audiences. Revenue from a boundary that costs you nothing to maintain.`
- Font: Space Grotesk 400, 20px, `#8A9BB0`

---

### Two-Column Body

**Left column — Who + What they get**

*Who this scheme is for:*
- `Retail park and drive-thru operators`
- `Supermarket and leisure destination estate teams`
- `Local authorities with public realm or infrastructure works`
- `NHS trusts and housing associations with estate programmes`

*What the partner gets (Commercial):*
- `Revenue share from advertising on your site boundary`
- `Free screen time allocation for your own promotional content`
- `DigiSite manages all advertisers and content — zero admin for you`
- `National estate agreements for multi-site operators`

*What the partner gets (Public sector):*
- `Screens at no cost to the council or authority`
- `Free inventory allocation: 25–30% of screen time for public information`
- `Community art and local authority content during advertising downtime`
- `DigiSite generates and shares advertising revenue`

---

**Right column — The proposition**

*Opening hook:*
- Text: `A drive-thru queue is a captive audience with dwell time. That's exactly what advertisers want to reach.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Margin-bottom: 20px

*Body:*
"Commercial sites — drive-thrus, retail parks, car park perimeters, leisure destinations — are built around high volumes of passing and dwelling people. DigiPerim is purpose-built for exactly these environments: standalone perimeter framework, no scaffold required, full front-access maintenance, fast to deploy and recover.

For large commercial operators managing national estates, DigiSite offers a Master Site Licence — one agreement covering all sites. Individual site schedules are appended as screens are deployed. A conversation with the right person in an estates team can unlock dozens of locations from a single agreement."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.75

---

### Public Sector Inset Block

**Background:** `rgba(0, 212, 255, 0.03)`
**Border:** `1px solid rgba(0, 212, 255, 0.12)`
**Border-radius:** 6px
**Padding:** `32px 36px`

**Label:**
- Text: `PUBLIC SECTOR & COUNCILS`
- Font: IBM Plex Mono 600, 10px, uppercase, `#00D4FF`

**Headline:**
- Text: `Screens that inform, connect and pay for themselves.`
- Font: Space Grotesk 700, 18px, `#F7F9FC`
- Margin-bottom: 12px

**Body:**
"DigiSite's offer to a local authority is straightforward: screens deployed at no cost during public realm or infrastructure works, with a defined free inventory allocation for council communications, public health campaigns, local arts content, and community announcements. DigiSite monetises the remaining inventory and shares the revenue. The council gains a communications platform and an income stream from works that would otherwise generate neither."

Font: Space Grotesk 400, 14px, `#8A9BB0`, line-height 1.65

**Closing line:**
- Text: `DigiSite is actively seeking its first local authority partnership. Liverpool City Council's public art programme makes them a natural first conversation.`
- Font: Space Grotesk 500, 13px, `#F7F9FC`
- Margin-top: 16px

---

### Commercial Structure Strip (Panel 3)

| Label | Value |
|---|---|
| `AGREEMENT TYPE` | Site licence / Master Site Licence for national estates |
| `TERM` | 12–36 months commercial · aligned to works programme (public) |
| `FREE INVENTORY` | 10–15% commercial · 25–30% public sector |
| `PLANNING COST` | Funded entirely by DigiSite |

---

### CTA Button (Panel 3)
- Text: `Explore the Commercial & Public Scheme →`
- Style: solid cyan
- On click: pre-selects "Commercial & Public" in contact form

---

## 9. PANEL 4 — EVENTS

**Accent colour:** `#F5A623` (amber)
**Background:** `#0D1B2A`
**Target reader:** Festival organisers, venue operators, sporting event directors, theme park estates, exhibition organisers

---

### Panel Header Row

**Scheme number:** `SCHEME 04`

**Scheme name:** `Events`

**Tagline:**
- Text: `Festival and sporting audiences command the highest CPM in DOOH. DigiSite puts screens where those audiences are.`
- Font: Space Grotesk 400, 20px, `#8A9BB0`

---

### Two-Column Body

**Left column — Who + What they get**

*Who this scheme is for:*
- `Music festival organisers (Glastonbury, Creamfields, Parklife scale)`
- `Premier League and major sporting venue operators`
- `Theme parks with ongoing construction or permanent frontage`
- `Exhibition centres and arena event operators`

*What the partner gets:*
- `Guaranteed flat site licence fee — paid regardless of advertising performance`
- `Or revenue share on upside for larger, more predictable events`
- `Zero operational involvement — DigiSite manages everything`
- `Multi-year agreements for annual events (renewable automatically)`
- `Enhanced site presentation — screens improve the visual environment`

---

**Right column — The proposition**

*Opening hook:*
- Text: `Premium brands pay a premium to reach festival audiences. DigiSite captures that premium and shares it with you.`
- Font: Space Grotesk 700, 20px, `#F7F9FC`
- Margin-bottom: 20px

*Body:*
"Events inventory commands a significant CPM premium over standard DOOH locations. Brands targeting 18–34 year olds at a music festival, families at a theme park, or ABC1 adults at a Premier League ground will pay more per thousand impressions than for any roadside location — because the audience quality and dwell time justify it.

DigiSite deploys DigiScaff on construction scaffold at venues under development and DigiPerim on event perimeter fencing. Both products are designed for fast mobilisation and recovery — critical for a festival site that has days, not weeks, to turn around. Annual events are structured as multi-year agreements with automatic renewal, converting a one-off deployment into a recurring revenue line for both parties."

Font: Space Grotesk 400, 15px, `#8A9BB0`, line-height 1.75

---

### Speed and Simplicity Callout

**Background:** `rgba(245, 166, 35, 0.04)`
**Border:** `1px solid rgba(245, 166, 35, 0.2)`
**Border-radius:** 6px
**Padding:** `32px 36px`

**Label:**
- Text: `THE EVENTS ADVANTAGE`
- Font: IBM Plex Mono 600, 10px, uppercase, `#F5A623`

**Headline:**
- Text: `From enquiry to proposal: 48 hours. From agreement to live screen: days.`
- Font: Space Grotesk 700, 18px, `#F7F9FC`
- Margin-bottom: 12px

**Body:**
"Events move fast. DigiSite's Events scheme uses a single agreement template with clearly defined variables — event name, screen configuration, deployment dates, site licence fee. We can turn around a fully costed proposal for any event enquiry within 48 hours. DigiPerim is specifically designed for rapid deployment and recovery, making it the natural fit for festivals and sporting events where setup and breakdown windows are tight."

Font: Space Grotesk 400, 14px, `#8A9BB0`, line-height 1.65

---

### Commercial Structure Strip (Panel 4)

| Label | Value |
|---|---|
| `AGREEMENT TYPE` | Flat site licence fee or short-term revenue share |
| `TERM` | Event duration + mobilisation / demobilisation periods |
| `ANNUAL EVENTS` | Multi-year agreement with automatic annual renewal |
| `PROPOSAL TURNAROUND` | 48 hours from enquiry |

---

### CTA Button (Panel 4)
- Text: `Register an Events Enquiry →`
- Style: outlined amber
- On click: pre-selects "Events" in contact form

---

## 10. CROSS-SCHEME PRINCIPLES STRIP

Below all four panels. A full-width strip that states the commitments that apply to every DigiSite deployment regardless of scheme. This closes the section on shared values rather than leaving it to end on the Events panel.

### Background
`#0F2035`
`border-top: 1px solid rgba(0, 212, 255, 0.12)`
Padding: `64px 0`

### Headline
- Text: `Every scheme. Every site. The same commitments.`
- Font: Space Grotesk 700, 28px, `#F7F9FC`
- Text-align: centre
- Margin-bottom: 48px

### Three commitments in a horizontal row (desktop) / stacked (mobile)

**Commitment 1 — Community Content**

Icon: Simple display screen SVG outline with a small art-frame symbol inside, 32px, `#00D4FF`

Title: `Community Art in Downtime`
Font: Space Grotesk 700, 16px, `#F7F9FC`

Body: `Every DigiSite screen displays local community art and public interest content whenever no paid campaign is running. This is the default content state — not a sacrifice of paid inventory, but a commitment to the neighbourhoods we operate in.`
Font: Space Grotesk 400, 14px, `#8A9BB0`, line-height 1.65

---

**Commitment 2 — QR Analytics**

Icon: QR code outline SVG, 32px, `#00D4FF`

Title: `QR Code on Every Canvas`
Font: Space Grotesk 700, 16px, `#F7F9FC`

Body: `A site-specific QR code is printed into the canvas wrap surrounding every screen. It links to a landing page showing current content, advertiser information, and a booking CTA. Scan data builds a per-location audience analytics asset that improves pricing over time.`

---

**Commitment 3 — Planning**

Icon: Document/permit outline SVG, 32px, `#00D4FF`

Title: `Planning Consent: Always`
Font: Space Grotesk 700, 16px, `#F7F9FC`

Body: `Advertisement consent from the local planning authority is required for every DigiSite installation, without exception, before a single screen goes live. DigiSite funds and manages every application. All partnership agreements are conditional on consent being granted.`

---

## 11. ANIMATION

### Panel entrances
Each panel reveals as a whole unit on scroll — `opacity 0→1, translateY 32px→0` over 600ms. The larger translateY (32px vs the usual 24px) gives the panels more weight on entry given their size.

### Tier model (Panel 1)
The four tier blocks cascade left to right on entry — 100ms stagger per block. The Alliance tier (Tier 4) receives an additional subtle glow pulse after it enters: `box-shadow: 0 0 0 → 0 0 16px rgba(0,212,255,0.2) → 0 0 0` over 800ms, once only.

### CTA buttons
Each CTA button reveals with a 300ms delay after its panel — ensuring it appears after the content it belongs to, not simultaneously.

### Sticky selector
The selector becomes visible (fades in) the moment the Partnerships section enters the viewport. Fades out when the section is scrolled past.

---

## 12. MOBILE LAYOUT

- Sticky scheme selector scrolls horizontally on mobile — overflow-x: auto, no scrollbar visible
- Scheme name font reduces to 12px on mobile
- Panel two-column layouts collapse to single column — proposition text above, partner offer below
- Tier model: 2×2 grid on mobile rather than single column (keeps it compact)
- Heritage / Events / Public sector inset blocks: full width, reduce padding to `24px`
- Commercial structure strips: 2×2 grid on mobile
- Cross-scheme commitments: single column stack

---

## 13. COPY DECISIONS — LOCKED

| Scheme | CTA text |
|---|---|
| Construction & Development | `Join the Construction & Development Scheme →` |
| Landlords & Landowners | `Discuss a Landlords & Landowners Scheme →` |
| Commercial & Public | `Explore the Commercial & Public Scheme →` |
| Events | `Register an Events Enquiry →` |

CTA verb choices are deliberate:
- **Join** — Construction partners are being invited into a scheme that already has a defined structure. Joining implies membership.
- **Discuss** — Landlords need a conversation, not a form submission. Lower barrier verb.
- **Explore** — Commercial operators are assessing fit for large estates. Exploring implies no commitment.
- **Register** — Events move fast. Registering signals the process starts now.

---

## 14. PRE-SELECTION LOGIC FOR CONTACT FORM

Each CTA button appends a URL parameter when scrolling to the contact form, which the form uses to pre-select the correct scheme:

```javascript
// On CTA click — example for Panel 1
function scrollToContact(scheme) {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
  // Set the scheme selector after scroll completes
  setTimeout(() => {
    const selector = document.getElementById('scheme-selector');
    if (selector) selector.value = scheme;
    // Trigger change event to reveal conditional fields
    selector.dispatchEvent(new Event('change'));
  }, 800);
}
```

Called with: `scrollToContact('construction')` / `scrollToContact('landlords')` / `scrollToContact('commercial')` / `scrollToContact('events')`

This pre-selection logic is defined here and consumed by DS-11 (Contact).

---

*Companion documents: DS-00-Brand-System.md, DS-07-Market.md, DS-11-Contact.md*
