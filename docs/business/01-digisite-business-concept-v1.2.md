# DigiSite — Master Business Concept Context File
**Version:** 1.2  
**Date:** March 2026  
**Purpose:** Master reference document for website development, Claude Code builds, and future AI-assisted sessions. Load this file at the start of any new conversation to restore full context.
**Changelog v1.2:** Corrected partner information throughout. Removed Samsung, OpenSpace and OpenMedia as listed partners (these were carry-overs from earlier research that do not reflect current strategy). Updated Lyndon SGB to Brand Access Solutions. Reframed Section 9 to accurately distinguish between target platforms/suppliers and confirmed commercial relationships. No confirmed commercial partnerships exist at this stage — DigiSite is pre-revenue and actively seeking its first partners.

---

## 1. BUSINESS OVERVIEW

**Company Name:** DigiSite  
**Domain:** www.digiscaff.co.uk  
**Base:** Liverpool / Merseyside  
**Stage:** Pre-revenue. Concept validated, hardware specified, operational model documented. Actively seeking investment and first commercial partnerships.

### What DigiSite Does
DigiSite is a Digital Out-of-Home (DOOH) venture that transforms construction scaffolding and perimeter fencing into dynamic digital advertising platforms. By mounting high-brightness LED screens on scaffold structures and perimeter hoardings, DigiSite monetises previously idle urban construction site facades — creating new revenue streams for site owners and premium advertising inventory for brands.

### The Problem It Solves
Construction sites occupy prime urban real estate for months or years. During this time, their visible surfaces generate zero commercial value. DigiSite turns this wasted space into a revenue-generating digital advertising network — benefiting developers, advertisers, and the surrounding community.

### Vision Statement
"DigiSite is a forever-moving global canvas — unlocking brand exposure in places traditional billboards cannot reach, connecting advertisers with audiences at eye level, and associating brands with landmark urban developments."

### Growth Strategy
- **Phase 1:** Pilot — 4–16 sites across Liverpool, Manchester, Leeds and Sheffield (within 1–1.5 hour drive of Liverpool base) to validate commercial performance, refine logistics, gather market data
- **Phase 2:** Scale across major UK cities through scaffold and land partnerships
- **Phase 3:** International expansion — Europe, then Asia

---

## 2. PRODUCTS

### DigiScaff
Digital LED screens mounted on scaffolding structures. Screens are bolted onto a custom rigging system that attaches to scaffold poles. The perimeter of the screens is wrapped to create a bold, polished visual presentation. The screen area can grow floor by floor as the scaffold rises.

- **Hardware:** Hikvision DS-D4257GO-2AAA (P5.71) — formal project proposal from Hikvision received October 2025. Alternative: DS-D4266GO-2AAA (P6.6) for longer viewing distances / cost optimisation.
- **Rigging:** Key clamp fittings (malleable iron, bolt onto 48.3mm scaffold tube, no welding) form the sub-frame. Sub-frame connects to existing scaffold structure via EN74 scaffold couplers (right-angle and swivel). Custom brackets fabricated to connect LED cabinet rear mounting points to the 48.3mm sub-frame tube. The rigging frame is a **reusable asset** — deployed and recovered across multiple sites.
- **Screen wrap / canvas:** The outer perimeter of the sub-frame's 48.3mm tube border acts as the tensioning rail. Canvas wrap attaches directly to this tube using bungee cord through reinforced eyelets or pole pockets — exactly how the existing scaffold wrap industry works. No separate bespoke border product needed. Material: 330gsm PVC mesh (recommended — allows wind to pass through, reducing structural load) or 500–720gsm solid PVC for denser branding. M1 fire resistant material preferred. Printed to brand or sponsor specification.
- **Key challenge:** Wind loading, structural load distribution, safe mounting at height
- **Target partner type:** Scaffold companies and principal contractors within the Construction & Development scheme. Brand Access Solutions (formerly Lyndon SGB / BrandSafway) is an example of the type of scaffold operator DigiSite aims to partner with — large, established, multi-site pipeline. No exclusive or confirmed partnership exists with any scaffold company at this stage.

### DigiPerim
Digital screens integrated into perimeter fencing/hoardings. The unit is a cupboard-style enclosure that houses screens and all necessary hardware, bolted onto a framework easily installed around a site perimeter.

- **Hardware:** Dynamo DVO Series LED screens (DVO800d P8 recommended) — designed specifically for perimeter/fence applications, full front access maintenance (critical for cupboard enclosure), UK supplier
- **Enclosure:** Custom-designed cupboard unit — designs near final, need pricing
- **Framework:** Bolted perimeter framework — easily installed and removed
- **Key advantage:** Can be deployed on any perimeter hoarding — not limited to scaffolded sites

---

## 3. PARTNERSHIP SCHEMES (REVISED MODEL)

Four partner categories — replaced previous exclusive Lyndon SGB model:

| Partner Type | What They Provide | What DigiSite Offers |
|---|---|---|
| **Construction & Development** | Scaffold/site access during build phase | Revenue share from advertising sales |
| **Landlords & Landowners** | Permanent or semi-permanent location rights | Revenue share + community value/placemaking |
| **Commercial & Public** | Sites on retail, civic or public buildings | Revenue share + enhanced brand visibility |
| **Events** | Temporary, high-footfall event venues | Short-term revenue + enhanced site presentation |

**Key Principle:** DigiSite offers tailored partnership structures including visibility exchanges and shared infrastructure agreements. Revenue share percentages TBC — typically 10–30% of gross ad revenue in comparable OOH models.

---

## 4. TECHNOLOGY STACK

### Screen Hardware
- **Primary candidate:** Hikvision LED panels (product number TBC — to be confirmed and alternatives investigated)
- **Previously researched:** Samsung OH-series outdoor LCD and Samsung LED modules (>3,000 nits, IP65 weatherproof)
- **Spec requirements:** High brightness (3,000–8,000+ nits for daylight visibility), IP65 weatherproof, modular, outdoor-rated, long lifespan

### Content Management System (CMS)
- **Primary:** Samsung MagicINFO — cloud-based CMS for remote content scheduling, monitoring, and management
- **Capabilities:** Ad scheduling, loop/rotation management, remote monitoring & diagnostics, proof-of-play logging, media format support (images, animation, video)
- **Security:** Encrypted connections, access control, emergency kill switch

### Connectivity
- Rugged outdoor internet connections — quotes already obtained from specialist providers (details TBC)
- 4G/5G router as primary or backup
- Local content storage for offline resilience

### Power Infrastructure
- **Source:** Lucy Zodion feeder pillars — specifically the Westminster retractable range for temporary/semi-permanent low voltage access
- **Connection:** Via DNO (Distribution Network Operator) request to local electricity supplier
- **Key constraint:** DNO can only provide one temporary connection per site
- **Two scenarios:**
  1. DigiSite obtains the DNO connection and provides a sub-supply to the construction contractor (with cost compensation for their consumption)
  2. Construction contractor already has a DNO supply — DigiSite connects to this and compensates them for DigiSite's power consumption
- **DNO process:** Must be applied for well in advance (lead times up to 12+ weeks). Requires quotation, acceptance, and payment before works begin. Qualified electrician / ICP required for installation.
- **Metering:** Sub-metering required to apportion costs accurately between DigiSite and contractor
- **Efficiency:** Auto-dimming, scheduled off periods (late night) to reduce consumption and comply with planning conditions

### Programmatic Advertising — Supply Side (DigiSite's role)
DigiSite registers its screens as inventory on a **Supply-Side Platform (SSP)**. Leading DOOH SSPs:
- **Vistar Media** — largest DOOH programmatic platform globally
- **Place Exchange (by Broadsign)** — leading SSP for programmatic DOOH, integrated with all major DSPs
- **Broadsign Reach** — alternative SSP option

Through the SSP, DigiSite lists available screen time, sets pricing floors, and accesses the programmatic marketplace automatically. Three deal types:
1. **Open Exchange** — open auction, maximum reach, fills unsold inventory
2. **Private Marketplace (PMP)** — curated inventory, premium pricing, selected buyers
3. **Programmatic Guaranteed** — fixed deals, reserved inventory

### Programmatic Advertising — Demand Side (Advertisers' role)
Advertisers use **Demand-Side Platforms (DSPs)** — e.g. The Trade Desk, Basis, Vistar DSP — to bid on DigiSite inventory automatically based on location, time, audience targeting and budget.

### DigiSite Interactive Map Platform
A proprietary booking platform — the "Rightmove of DOOH inventory." Key features:
- Interactive map showing all available DigiSite screen locations across the UK
- Each location clickable to reveal key site metrics and audience data
- **Route data integration** — Route is the UK's Joint Industry Currency for OOH audience measurement, providing:
  - Impressions (total views)
  - Reach (unique individuals reached)
  - Cover (% of target audience reached)
  - Frequency (average views per individual)
  - Demographics breakdown
  - Updated quarterly; covers ~400,000 OOH sites across GB
- Route data powers dynamic pricing — high-traffic, high-demographic-quality sites command premium rates
- Direct booking capability — advertisers select site, see price, book and pay
- Programmatic SSP fills unsold slots in background

---

## 5. ADVERTISING REVENUE MODEL

**Two-channel approach:**

**Channel 1 — DigiSite Direct (higher margin)**
Advertisers use the interactive map to browse, select and book specific sites directly. Full-rate card pricing informed by Route audience data.

**Channel 2 — Programmatic via SSP (yield optimisation)**
Unsold inventory automatically listed via Vistar/Place Exchange SSP into open exchange and PMP deals. Fills gaps, reaches agency buyers, provides revenue floor.

**Pricing Logic:**
- Based on Route audience metrics per location (impressions, reach, demographics)
- Tiered by location quality: premium city-centre vs standard sites
- **Standard booking unit: fortnight (two weeks)** — this is the standard UK OOH booking cycle. Sold per slot (of 6 in a 60-second loop) per fortnight. Each slot = 10 seconds per rotation. Discount rates available for multi-fortnight bookings and full share of voice.
- Programmatic CPM fills unsold slots at approximately £10–20/1,000 impressions

**Revenue benchmarks (Liverpool/Manchester city centre, 6-slot rotation):**

| Scenario | Slots Sold | Rate/Slot/Fortnight | Gross/Fortnight | Gross Annual |
|---|---|---|---|---|
| Conservative (ramp-up) | 2 | £1,000 | £2,000 | £52,000 |
| Base case (established) | 3 | £1,500 | £4,500 | £117,000 |
| Optimistic (strong site) | 5 | £2,500 | £12,500 | £325,000 |

*Gross before: partner revenue share (10–20%), SSP fees (15–20% of programmatic), operational costs.*

---

## 5B. COMMUNITY CONTENT & QR CODE ENGAGEMENT

### Community Art in Downtime
DigiSite screens display community and local art content during **downtime** — whenever no paid advertising campaign is scheduled (overnight, between campaigns, during the initial ramp-up period before a site is fully sold). This is not a sacrifice of paid inventory; it fills time that would otherwise show a blank or static screen.

**Why this matters:**
- Strengthens every planning application — genuine community benefit argument counters the "adverts on scaffolding" framing
- Opens doors to council-owned or council-adjacent sites where pure advertising would face resistance
- Liverpool City Council has an active public art programme — natural partnership opportunity
- No additional CMS complexity — community content is set as the default fallback loop that plays whenever no paid campaign occupies the slot

**Content policy (suggested):** DigiSite curates a rotating library of local artist commissions, council information, public interest messages, and community announcements. This library is always available as the default content state.

### QR Code on Canvas Wrap
Rather than placing a QR code on the screen itself (which would conflict with paid advertiser content and raise content change compliance questions), DigiSite prints a **persistent QR code into the canvas wrap** surrounding the screen.

**Advantages:**
- Always visible regardless of what is playing on the screen
- Scannable day and night, at any point — not dependent on catching a specific moment in the content loop
- Does not complicate advertisement consent for the screen itself (it is on printed vinyl, not the digital display)
- Low cost — printed into the canvas design at no meaningful additional expense
- Creates a fixed, durable touchpoint per site

**Each screen has a unique QR** pointing to a site-specific landing page. This page can display:
- What is currently playing on the screen
- Advertiser offers or calls to action
- The community art piece backstory
- Council or partner information
- A "Advertise on this screen" CTA for local businesses

**Data value:** Aggregated QR scan data by location and time of day becomes audience insight. Over time, this supplements Route data and helps justify premium rates — a genuine competitive differentiator over traditional OOH formats that cannot be measured at point of exposure.

**Tech requirement:** Simple redirect/landing page system — each site has a unique QR → unique URL. Scan analytics tracked per location. This should be factored into the website/platform build.

---

## 6. MARKET CONTEXT

- Global DOOH market: ~$20.7 billion (2024), growing at 10.7% CAGR
- UK OOH static billboards: £200–£2,000/week; digital billboards average ~£1,000/week
- Converting static to digital typically yields ~4x annual revenue
- DOOH digital screens reach 83% of UK population per week (Route data)
- 75% of consumers recall seeing a digital billboard in the past month
- Key competitors: primarily banner/wrap-based scaffold advertisers (not digital screens) — DigiSite is positioned as first-mover in the digital scaffold niche in the UK

**Competitor landscape:**
- Other companies wrap scaffold sites with printed banners/static wraps — NOT digital screens
- DigiSite has researched these competitors and has archived documents/examples from other suppliers
- Doka "SiteLight" (Germany) — closest comparable concept internationally; uses LED panels on scaffolding towers
- Oxford Street installation (London, 2024) — first digital scaffold screen on Oxford Street; required 7 years of planning; 10-year media contract

---

## 7. PLANNING, CONSENT & COMPLIANCE

### Advertisement Consent
- All large advertising displays in the UK require **express advertisement consent** from the local planning authority
- Construction site wraps/screens are NOT exempt — even temporary installations require consent
- Key assessment criteria: amenity, public safety, luminance levels, driver distraction
- **Brightness limits:** Typically capped at ~300 cd/m² at night for large format screens (600 cd/m² for <10m² signs) — DigiSite screens must have auto-dimming photocells
- **Content rules:** No rapid flashing; changes no faster than every 5–10 seconds; full-motion video generally not permitted outside special zones (e.g. Piccadilly Circus)
- Operating hours may be restricted (e.g. 11pm–6am off in residential areas)
- Displaying without consent is a **criminal offence** in the UK

### Heritage Statements
- Required when sites are in or near conservation areas, listed buildings or heritage settings
- Heritage statements must demonstrate the installation does not harm the significance of the heritage asset
- Early engagement with local planning authority and Historic England (where relevant) recommended
- DigiSite strategy: proactively commission heritage assessments for relevant sites as part of site onboarding

### Health & Safety
- **CDM Regulations 2015** apply — risk assessments required, principal designer/contractor obligations
- Working at height regulations — harness use, exclusion zones, trained crews
- Structural engineering sign-off required per site
- Screen installation only in acceptable wind conditions
- No obstruction of site safety signage, emergency routes or lighting

### Business Rates
- Advertising hoardings in the UK are subject to business rates (non-domestic property rating)
- DigiSite must budget for business rates per installation unless temporary exemption applies

---

## 8. MOBILISATION & OPERATIONS

### Site Mobilisation Process (to be fully documented)
1. Site survey and feasibility assessment
2. Structural engineering assessment (load, wind)
3. Advertisement consent application to local authority
4. Heritage statement (where required)
5. DNO connection application (long lead time — apply early)
6. Internet connectivity provisioning
7. Rigging/frame installation (coordinated with scaffold erection)
8. Screen installation and cabling
9. Power connection (via Lucy Zodion feeder pillar)
10. CMS configuration and content upload
11. Testing and commissioning
12. Go-live

### Ongoing Operations
- Remote monitoring via CMS (Samsung MagicINFO — selected platform, licensing TBC)
- Scheduled maintenance visits
- Screen cleaning and panel inspection
- Content management (ad scheduling, advertiser uploads)
- Power and connectivity monitoring
- Screen relocation when scaffold is struck

---

## 9. SUPPLIERS, PLATFORMS & TARGET PARTNERS

**Important:** DigiSite has no confirmed commercial partnerships at this stage. The entries below distinguish between three categories: (A) hardware suppliers from whom DigiSite has received formal proposals or quotes, (B) established platforms and data services DigiSite intends to use commercially, and (C) the types of construction industry partners DigiSite is actively seeking. Do not describe any of the below as confirmed partners in investor materials, website copy, or partner-facing documents.

### A — Hardware Suppliers (proposals/specifications received)

| Supplier | Status | Role |
|---|---|---|
| **Hikvision** | Formal project proposal received October 2025 | LED screen hardware for DigiScaff — DS-D4257GO-2AAA (P5.7) primary; DS-D4266GO-2AAA (P6.6) alternative. Pricing TBC — formal quote required. |
| **Dynamo** | Under evaluation — UK supplier | LED screen hardware for DigiPerim — DVO800d (P8) recommended. Pricing TBC — formal quote required. |
| **Lucy Zodion** | Product specified — quote required | Westminster retractable feeder pillars for site power distribution. No commercial relationship confirmed. |
| **Internet connectivity provider** | Quotes obtained — provider TBC | Rugged outdoor 4G/5G connectivity per site. Provider and commercial terms not yet confirmed. |

### B — Platforms & Data Services (intended commercial use — no agreements in place)

| Platform | Role | Notes |
|---|---|---|
| **Route (Outsmart)** | UK OOH audience measurement data | Powers site-level pricing and the interactive map. Subscription-based service — pricing to be confirmed with Outsmart. No agreement in place. |
| **Vistar Media / Place Exchange** | Supply-Side Platforms (SSPs) for programmatic DOOH | DigiSite intends to list inventory here. Standard industry platforms — SSP registration is a commercial process, not a partnership negotiation. |
| **Samsung MagicINFO** | Content Management System (CMS) | Cloud-based ad scheduling, monitoring, proof-of-play. Licensing costs TBC. Chosen as CMS platform; no Samsung commercial relationship or hardware supply agreement exists. |

### C — Target Partner Profile (Construction & Development Scheme)

DigiSite is actively seeking its first Construction & Development scheme partners. The ideal initial partner profile:

- A scaffold company or principal contractor operating across Liverpool, Manchester, Leeds or Sheffield
- Minimum 5 active or pipeline sites in DigiSite's pilot geography
- Sites with commercial or civic frontage and meaningful pedestrian/vehicle footfall
- Willing to share forward programme pipeline under a framework agreement

**Brand Access Solutions** (formerly Lyndon SGB, operating as part of BrandSafway) is an example of the scale and type of scaffold operator DigiSite is targeting. They are not a confirmed partner and DigiSite has no active commercial relationship with them. There will be no exclusivity offered to any single scaffold company — the scheme is open to multiple partners simultaneously.

**OpenMedia and OpenSpace** — these organisations appeared in earlier versions of this document as potential partners. Following research into how DOOH advertising is actually bought and sold (programmatic SSPs, direct booking via DigiSite's own platform), there is no identified role for either organisation in the current business model. Both have been removed from the partner strategy.

---

## 10. FINANCIAL (HIGH LEVEL — DETAIL TBC)

**Revenue streams:**
- Direct advertising sales via DigiSite interactive map
- Programmatic advertising via SSP (Vistar/Place Exchange)
- Partnership revenue share (from partner sites)

**Cost structure (to be fully priced):**
- LED screen hardware (Hikvision — product + quantity TBC)
- DigiScaff rigging manufacture and installation
- DigiPerim cupboard unit manufacture and installation
- Lucy Zodion feeder pillar units
- DNO connection costs per site
- Internet connectivity per site
- Installation labour (mobilisation team)
- CMS licensing (Samsung MagicINFO — selected platform, cost TBC)
- SSP fees (typically % of programmatic revenue)
- Route data subscription
- Planning/consent fees per site
- Structural engineering per site
- Insurance (equipment + public liability)
- Business rates per installation
- Ongoing maintenance

**Investment required:** Total capital requirement to be calculated once full cost build-up complete.

---

## 11. ASSETS & DOCUMENTS AVAILABLE

The following materials exist and can be shared/uploaded for reference:
- Rigging designs for DigiScaff (simple designs — need finalising and pricing)
- DigiPerim cupboard unit design (near final — needs pricing)
- Internet connectivity quotes from providers
- Competitor documents — examples from scaffold banner/wrap companies (not digital)
- Archived documents from previous installations by other suppliers
- Hikvision product number (TBC — to be confirmed by owner)

---

## 12. WEBSITE REQUIREMENTS

**Domain:** www.digiscaff.co.uk  
**Type:** Single-page scrolling landing site — startup showcase / investor-facing  
**Primary audiences:** Investors/VCs, construction & development partners, advertisers, industry bodies  
**Primary goals:** Attract investment, demonstrate concept credibility, generate partner enquiries

**Proposed page structure:**
1. Hero — bold headline + CTA
2. The Problem — wasted urban space
3. The Solution — DigiScaff + DigiPerim
4. How It Works — operational flow
5. The Market — DOOH opportunity stats
6. Partnerships — 4 partner schemes
7. Key Partners — hardware suppliers and technology platforms (Hikvision, Dynamo, Route, Vistar); framed as "built on proven technology" rather than confirmed commercial partnerships
8. Roadmap — Pilot → UK Cities → Europe → Asia
9. Contact — audience-segmented enquiry form

**Brand direction:**
- Tone: Bold, innovative, credible — tech startup meets urban infrastructure
- Primary colour: Deep navy #0D1B2A
- Accent: Electric cyan #00D4FF
- Secondary: Amber/gold #F5A623
- Neutral: Off-white #F7F9FC, mid-grey #8A9BB0
- Typography: Space Grotesk or Syne (headlines), Inter (body)
- Visual language: Night-time cityscape, LED glow effects, scaffolding silhouettes

**Tech stack for build:**
- Framework: Astro or plain HTML/CSS/JS
- Styling: Tailwind CSS
- Forms: Netlify Forms
- Hosting: Netlify or Vercel
- Domain: digiscaff.co.uk pointed via DNS

---

## 13. OPEN QUESTIONS & NEXT STEPS

The following topics still need to be fully documented in subsequent context files:

- [x] Hikvision screen product number confirmed — DS-D4257GO-2AAA (P5.7) primary, DS-D4266GO-2AAA (P6.6) alternative
- [x] DigiPerim hardware confirmed — Dynamo DVO800d (P8)
- [x] DigiScaff rigging system confirmed in principle — key clamp + EN74 couplers + custom brackets (structural engineer to finalise and sign off)
- [x] Canvas wrap material and integration method confirmed — PVC mesh 330gsm, attaches to 48.3mm tube border
- [x] Advertising pricing model confirmed — sold per fortnight (UK OOH standard booking unit)
- [x] Community/art content strategy confirmed — downtime fallback content, no paid inventory sacrificed
- [x] QR code strategy confirmed — printed on canvas wrap, site-specific landing pages, scan analytics
- [ ] DigiScaff rigging designs to be shared with structural engineer for formal sign-off and manufacture specification
- [ ] DigiPerim cupboard unit design to be finalised and priced
- [ ] Full cost build-up completed
- [ ] Investment requirement calculated
- [ ] Internet connectivity provider(s) documented
- [ ] Partnership scheme terms and revenue shares defined
- [ ] DNO connection process per site type mapped out
- [ ] Heritage statement process documented
- [ ] Competitor documents reviewed and archived
- [ ] Brand guidelines finalised (logo, fonts, colours)
- [ ] Website copy drafted section by section
- [ ] Claude Code build commenced
- [ ] Site-specific QR landing page system scoped into website/platform build
- [ ] Liverpool City Council public art partnership explored

---

*This document should be loaded at the start of each new conversation. Update version number when significant changes are made.*
