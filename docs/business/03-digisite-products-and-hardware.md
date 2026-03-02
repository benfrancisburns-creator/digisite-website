# DigiSite — Products & Hardware Context File
**Version:** 1.1  
**Date:** March 2026  
**Companion to:** 01-digisite-business-concept.md, 02-digisite-logistics-and-operations.md

---

## 1. DIGISCAFF — SCREEN HARDWARE

### Primary Recommendation: Hikvision DS-D4257GO-2AAA (P5.7)
Hikvision prepared a formal DigiSite-specific project proposal (dated October 2025) based on this screen. This is the primary screen for DigiScaff deployments in close-viewing urban environments.

**Cabinet Specifications:**
| Parameter | Value |
|---|---|
| Model | DS-D4257GO-2AAA |
| Hikvision Part No. | 317006180 |
| Pixel Pitch | P5.71 (5.71mm) |
| Brightness | 9,000 nits (factory preset) / 10,000 nit peak |
| Cabinet Size | 960mm × 960mm × 100mm |
| Cabinet Weight | 27.8kg per cabinet |
| Resolution per cabinet | 168 × 168 pixels |
| Pixel Density | 30,625 dots/m² |
| Waterproof Rating | IP66 |
| Viewing Angle | 160° horizontal, 130° vertical |
| Contrast Ratio | ≥ 8,000:1 |
| Brightness Uniformity | ≥ 97% |
| Refresh Rate | Up to 3,840 Hz |
| Frame Rate | 50/60 Hz |
| Grey Level | 14–16 bit adjustable |
| Power Supply Input | 110–220 VAC ±15% |
| Max Power Consumption | ≤ 480W/m² at 9,000 nits |
| Average Power Consumption | ≤ 160W/m² at 9,000 nits |
| Operating Temperature | -40°C to +60°C |
| Storage Temperature | -40°C to +70°C |
| Operating Humidity | 10%–95% RH (no condensation) |
| LED Lifespan | 100,000 hours (~11 years continuous) |
| Cabinet Material | Aluminium profile |
| Maintenance Access | Front and rear |
| Pixel Configuration | SMD Triad LED (2727 gold wire) |
| Control System | Hikvision proprietary |

---

### Alternative/Cost Option: Hikvision DS-D4266GO-2AAA (P6.6)
Same cabinet family, slightly coarser pixel pitch. Use for larger screens or greater viewing distances where finer resolution is not required. Reduces cost per cabinet while maintaining brightness and weatherproofing.

| Parameter | Value |
|---|---|
| Model | DS-D4266GO-2AAA |
| Hikvision Part No. | 317006181 |
| Pixel Pitch | P6.67 (6.67mm) |
| Brightness | ≥ 9,000 cd/m² |
| Cabinet Size | 960mm × 960mm × 100mm |
| Cabinet Weight | 27.5kg |
| Resolution per cabinet | 144 × 144 pixels |
| Pixel Density | 22,500 dots/m² |
| Waterproof Rating | IP66 |
| Viewing Angle | 160° horizontal, 130° vertical |
| Average Power | ≤ 169W/m² |
| Max Power | ≤ 509W/m² |
| LED Lifespan | 100,000 hours |
| Certifications | CE, CB and other international standards |

**When to use P6.6 vs P5.7:**
- P5.7 — street-level viewing, close distances (under 15m), city centre pedestrian environments
- P6.6 — higher mounting positions, roadside viewing (15m+), larger format screens where cost reduction is a priority

---

### Hikvision Proposed Configuration (DigiSite Standard Unit)
The formal Hikvision proposal specified a standard DigiScaff screen unit as follows:

**Display Array:**
- Configuration: 4 rows × 9 columns = **36 cabinets**
- Total Screen Width: **8.64m**
- Total Screen Height: **3.84m**
- Total Screen Area: **33.18 sq.m**
- Diagonal: 372.2" (31 feet)
- Total Resolution: 1,512 × 672 pixels
- **Total Screen Weight: 1,000.8kg** (structural critical figure)

**Power Consumption (36-cabinet unit):**
- Average: **5.31 kW** (key figure for DNO supply sizing)
- Maximum: **15.93 kW** (key figure for circuit protection and fusing)

**Video Processing System (per screen unit):**
| Component | Model | Part No. | Qty |
|---|---|---|---|
| Chassis | DS-C60S-S6 | 317100145 | 1 |
| 4K HDMI Input Board | DS-C60S-02HI/4K | 317100150 | 1 |
| LED Sending Card Board | DS-C60S-20NO | 317100169 | 1 |
| 4K HDMI Output Board | DS-C60S-02HO/4K | 317100152 | 1 |

**Cables (per screen unit):**
| Component | Model | Part No. | Qty |
|---|---|---|---|
| Main Network Cable (20m, aviation plug) | DS-D42-NC | 317006735 | 2 |
| Main Power Cable | DS-D42-PC (5 PCS) | 317006734 | 2 |
| Cascade Cable Package | DS-D42-PC/NC | 317006736 | 2 |

**Spare Parts (per screen unit):**
| Component | Model | Part No. | Qty |
|---|---|---|---|
| Receiving Card | DS-D42CD-1AAB/R | 317005395 | 1 |
| HUB Board | DS-D42CO-1APA/H | 317005510 | 1 |
| 400W Power Supply Unit | MCP400WCD-4.2/3.2 | 317005509 | 1 |
| Spare LED Modules | DS-D4257GO-2AAA/M | 317006176 | 11 |

---

## 2. DIGIPERIM — SCREEN HARDWARE

### Candidate: Dynamo DVO Series (P6/P8/P16)
The DVO Series by Dynamo is specifically designed for perimeter LED applications (stadium perimeter boards for football, rugby, cricket, horse racing). This makes it a strong natural fit for DigiPerim.

| Parameter | DVO600d (P6) | DVO800d (P8) | DVO1600d (P16) |
|---|---|---|---|
| Pixel Pitch | 6mm | 8mm | 16mm |
| Brightness | 6,000–8,000 cd/m² | 6,000–8,000 cd/m² | ≥ 8,000 cd/m² |
| Min Viewing Distance | 6m | 8m | 16m |
| LED Type | SMD2727 | SMD2727/SMD3535 | SMD3535 |
| Cabinet Size | 960 × 960mm | 960 × 960mm | 960 × 960mm |
| Cabinet Weight | 25kg/m² | 25kg/m² | 25kg/m² |
| IP Rating | IP65 / IP54 | IP65 / IP54 | IP65 / IP54 |
| Max Power | 740W/m² | — | — |
| Input Voltage | AC 100–240V | AC 100–240V | AC 100–240V |
| Refresh Rate | 1,920–3,840 Hz | — | — |
| Viewing Angle | 160°H / 160°V | — | — |
| Maintenance | Full front access | Full front access | Full front access |
| Certifications | CE, EMC, TUV-EMC, FCC, ETL, UL, PSE, CCC, RoHS | — | — |

**DVO Key Advantages for DigiPerim:**
- Designed specifically for perimeter/fence-mounted applications
- Ultra-light at 25kg/m² (approximately 50% lighter than conventional products)
- Full front access maintenance — critical when rear access is a cupboard enclosure
- Independent control box per cabinet
- UK/European supplier (Dynamo) — local support and warranty service

**Likely use case:** DigiPerim with DVO-P8 (8mm pitch, 8m+ viewing distance) — standard viewing distance from street level across a perimeter hoarding is typically 8–20m.

### Standard DigiPerim Screen Configurations

| Format | Cabinets | Dimensions | Area |
|---|---|---|---|
| Single bay | 3×1 = 3 cabs | 2.88m × 0.96m | 2.8m² |
| Standard panel | 3×2 = 6 cabs | 2.88m × 1.92m | 5.5m² |

---

### Also Researched: Dynamo DVX Series
The DVX Series covers both outdoor and indoor configurations in various sizes (DVX122d, DVX156d, DVX195d, DVX260d, DVX297d, DVX390d). Technologies include MicroX-MIP and XGOB. Available with perimeter-specific configurations. Detailed specs mostly visual in catalogue — full spec sheet to be obtained from Dynamo.

---

## 3. STRUCTURAL FRAMEWORK — DigiScaff RIGGING SYSTEM

### System Overview: Key Clamp Sub-Frame + EN74 Scaffold Couplers
The DigiScaff rigging system uses two interlocking components:

**Component 1 — Sub-frame (Key Clamp fittings + 48.3mm scaffold tube)**
- The screen-mounting frame is built from standard 48.3mm hot-dip galvanised scaffold tube and **key clamp fittings** (also known as tube clamps, Q-Clamps, Kee Klamps, Interclamps — malleable iron, bolt-on, no welding required)
- Key clamp fittings are off-the-shelf UK products: 90° elbows, tee fittings, 3-way corners, etc.
- The sub-frame forms a rectangular grid — screen cabinets bolt onto it via **custom fabricated brackets** (see below)
- The outer perimeter of the sub-frame (the rectangular 48.3mm tube border) doubles as the **canvas wrap tensioning rail** — canvas attaches directly to this tube using bungee cord through eyelets or pole pockets, exactly as the existing scaffold wrap industry works

**Component 2 — Scaffold attachment (EN74 scaffold couplers)**
- The sub-frame connects to the existing scaffold structure via **EN74 standard scaffold couplers** — right-angle couplers (for 90° intersections) and swivel couplers (for angled or variable connections)
- Multiple attachment points distribute the load across the scaffold structure
- EN74 is the British Standard for scaffold tubes and couplers — this is standard, proven, widely understood construction methodology

**Custom brackets (bespoke fabrication)**
- Brackets are required to connect each LED cabinet's rear mounting points to the 48.3mm sub-frame tube
- Low complexity metalwork — can be produced by any local fabrication shop
- These need to be designed and quoted once the screen cabinet rear fixing pattern is confirmed from Hikvision

### Approximate Rigging Component Costs (indicative only — quotes required)
| Component | Unit Cost (est.) |
|---|---|
| Key clamp 90° elbow | £4–6 each |
| Key clamp tee fitting | £4–7 each |
| Key clamp 3-way corner | £5–7 each |
| Scaffold tube 48.3mm (per metre) | £3–5/m |
| EN74 right-angle coupler | £4–6 each |
| EN74 swivel coupler | £5–8 each |
| Custom cabinet-to-tube bracket (fabricated) | To be quoted |

### Standard DigiScaff Screen Configurations

| Format | Cabinets | Dimensions | Area | Est. Screen Weight |
|---|---|---|---|---|
| Small | 3×2 = 6 cabs | 2.88m × 1.92m | 5.5m² | ~167kg |
| Large | 9×4 = 36 cabs | 8.64m × 3.84m | 33.2m² | ~1,001kg |

### Rigging Design Status
- Concept designs sketched by founder — to be finalised and submitted to structural engineer
- Structural engineer to confirm: section sizes, number and position of EN74 coupler tie points, wind bracing requirements, factor of safety compliance
- Final engineered design to be priced for component purchase and bracket fabrication
- Frame is a **reusable asset** — manufactured once, deployed and recovered across multiple sites

---

## 3B. CANVAS WRAP SPECIFICATION

### Material Options
| Material | Weight | Wind Behaviour | Use Case |
|---|---|---|---|
| PVC mesh | 330gsm | Permeable — wind passes through; lower structural load | **Recommended for most installations** |
| Solid PVC | 500–720gsm | Impermeable — higher wind loading | Higher-impact visual; use where structurally confirmed viable |

### Specification Requirements
- M1 fire resistant rating preferred (some planning authorities require this — specify as standard)
- Hemmed edges with reinforced eyelets at regular intervals (typically 300–500mm centres)
- Printed to brand, sponsor or community art specification
- **QR code printed into the design** as a persistent element (see below)
- Produced by scaffold wrap printers — Liverpool has commercial print/signage suppliers capable of this

### QR Code Integration
A site-specific QR code is printed into the canvas wrap at a consistent, visible position. Each screen has a unique QR → unique URL → site-specific landing page. Scan data provides per-location audience analytics.

### Attachment Method
Canvas attaches to the 48.3mm outer tube border of the sub-frame using bungee cord through eyelets or pole pocket sleeves — the same method used throughout the UK scaffold wrap industry. No additional bespoke border product required.

---

## 4. DigiPERIM — ENCLOSURE DESIGN

### Concept: Cupboard Unit
The DigiPerim unit is a **cupboard-style enclosure** that:
- Houses the LED screen cabinets and all associated hardware (video processor, power distribution, internet router, cabling)
- Bolts onto a perimeter framework installed around the site hoarding/fencing
- Framework is easily installed and removed — designed for quick deployment and recovery
- Weatherproof enclosure — all hardware protected from elements
- Front access panel for maintenance

### Design Status
- Designs are near final
- Need finalising and pricing for manufacture
- Framework design also near final — needs pricing

### Key Engineering Considerations
- Frame footprint vs available pavement/site boundary space
- Weight distribution per frame section
- Wind loading on both screen face and enclosure body
- Cable routing and weatherproofing at all penetrations
- Security — anti-tamper fixings, lockable access panels

---

## 5. SCREEN COMPARISON SUMMARY

| Product | Application | Pitch | Brightness | IP Rating | Weight/m² | Supplier |
|---|---|---|---|---|---|---|
| Hikvision DS-D4257GO-2AAA | DigiScaff (premium) | P5.7 | 9,000 nits | IP66 | ~30kg/m² | Hikvision |
| Hikvision DS-D4266GO-2AAA | DigiScaff (standard) | P6.6 | 9,000 nits | IP66 | ~30kg/m² | Hikvision |
| Dynamo DVO600d | DigiPerim (close range) | P6 | 6,000–8,000 cd/m² | IP65 | 25kg/m² | Dynamo (UK) |
| Dynamo DVO800d | DigiPerim (standard) | P8 | 6,000–8,000 cd/m² | IP65 | 25kg/m² | Dynamo (UK) |
| Dynamo DVX Series | Either (to investigate) | Various | Various | Various | Various | Dynamo (UK) |

---

## 6. POWER INFRASTRUCTURE (HARDWARE)

### Lucy Zodion Westminster Retractable Feeder Pillar
- **Model:** Westminster retractable range (in-ground, deployable)
- **Rating:** Low voltage, IP67 enclosure
- **Features:** Deploys from ground to socket in under 60 seconds; flush when retracted (ideal for pavement/public realm); DNO-approved configurations available; earth leakage protection, overload safeguards, metering options
- **Application:** Primary power distribution point per DigiSite installation
- **DNO connection:** Single service connection per site — see context file 01 for connection strategy

### Power Sizing Per Standard DigiScaff Unit (36 cabinets)
- Average consumption: **5.31 kW**
- Maximum consumption: **15.93 kW**
- Required supply: Minimum 32A three-phase circuit recommended; DNO to confirm available capacity per site
- Sub-metering required between DigiSite and construction contractor consumption

### Cable Specification
- All external cabling: SWA (Steel Wire Armoured) outdoor-rated
- Routed along scaffold structure in cable tray or conduit
- Clear of worker access areas
- IP68 connectors at all outdoor junction points

---

## 7. CONNECTIVITY HARDWARE

### Strategy
Rugged outdoor 4G/5G routers — quotes obtained from specialist providers (provider names TBC). Key requirements:
- Industrial-grade hardware (not domestic)
- Weatherproof enclosure
- Dual SIM failover (two network providers for redundancy)
- Remote management capability
- Content syncs from CMS to local storage; screens continue playing if connectivity drops

### Key connectivity providers to investigate/quote:
- Cradlepoint (industrial 4G/5G routers)
- Pepwave/Peplink (multi-WAN/dual SIM outdoor routers)
- Sierra Wireless
- Local UK telecoms providers for site-specific solutions

---

## 8. CONTENT MANAGEMENT SYSTEM

### Samsung MagicINFO
The CMS backbone for DigiSite's screen network. Key capabilities:
- Cloud-based — remote access from anywhere
- Schedule ads and content by time, day, screen, loop
- Multiple advertisers in rotation (e.g. 6 × 10-second slots per minute)
- Remote monitoring: screen health, temperature, brightness, connectivity status
- Proof-of-play logging — essential for advertiser billing and verification
- Alert system for faults, offline screens, connectivity drops
- Supports images, animation, full-motion video
- Content security — encrypted connections, access-controlled, remote kill switch

---

## 9. OPEN QUESTIONS — HARDWARE

- [x] Hikvision primary screen confirmed — DS-D4257GO-2AAA (P5.7); formal project proposal received October 2025
- [x] DigiPerim screen confirmed — Dynamo DVO800d (P8) recommended
- [x] Rigging system confirmed in principle — key clamp sub-frame + EN74 scaffold couplers + custom fabricated brackets
- [x] Canvas wrap material and method confirmed — PVC mesh 330gsm (preferred), attaches to 48.3mm tube border
- [x] QR code placement confirmed — printed into canvas wrap, site-specific URLs
- [ ] Formal pricing to be obtained from Hikvision for DS-D4257GO-2AAA per cabinet (bulk pricing for pilot quantity vs scale)
- [ ] Formal pricing to be obtained from Dynamo for DVO800d
- [ ] DigiScaff rigging designs to be submitted to structural engineer for formal sign-off and section specification
- [ ] Custom bracket design and fabrication quote (bracket connecting LED cabinet rear to 48.3mm tube)
- [ ] Canvas wrap quote from Liverpool-based scaffold/signage wrap printer (per standard DigiScaff size)
- [ ] Bill of materials for key clamp rigging per screen size (Small 6-cab and Large 36-cab)
- [ ] DigiPerim cupboard unit design to be finalised and priced
- [ ] DigiPerim framework design to be finalised and priced
- [ ] Internet connectivity provider shortlist to be confirmed with quotes
- [ ] Lucy Zodion feeder pillar formal quote to be obtained per unit
- [ ] Samsung MagicINFO licensing cost to be confirmed

---

*Save to: /DigiSite-Project/context-files/03-digisite-products-and-hardware.md*  
*Load alongside 01 and 02 at the start of each new session.*
