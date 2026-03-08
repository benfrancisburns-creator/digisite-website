# DigiSite — CMS & Connectivity Context File
**Version:** 1.1
**Date:** March 2026

## 1. CMS ARCHITECTURE

### Why Hikvision Native Software Is Not Sufficient
Hikvision's LED management software handles panel configuration only. It cannot support:
- Multi-advertiser slot rotation (6-slot, 60-second loop)
- Proof-of-play reporting
- SSP/programmatic integration
- Commercial network monitoring

A separate commercial DOOH CMS is required for all content operations.

### Correct Signal Chain
BrightSign/Windows player → HDMI → Hikvision DS-C60S → LED cabinets

The CMS runs on the media player device. Hardware and CMS are decoupled.

**Samsung MagicINFO must be removed from all DigiSite documentation.** It is Samsung-proprietary and incompatible with Hikvision hardware.

## 2. CMS RECOMMENDATIONS

### Pilot Phase: Navori QL Cloud Professional
- Full multi-advertiser campaign management and scheduling
- Proof-of-play reporting
- Programmatic via Vistar/Hivestack SSPs (separate SSP relationship required)
- SOC 2 Type II certified
- Estimated: £30-80/screen/month
- Action: Book demo at navori.com

### Scale Phase (20+ screens): Broadsign Control + Reach SSP
- Industry standard (Clear Channel, Global, Outfront)
- Built-in Reach SSP — no separate Vistar relationship needed at scale
- In-advance programmatic booking (launched 2025)
- Estimated: £50-120/screen/month
- Action: Approach for startup pricing conversation

### Media Player: BrightSign XT244 (~£400-600/unit)
Solid-state, industrial-grade, natively supported by Navori and Broadsign.

## 3. CONNECTIVITY — UKCONNECT

**Contact:** Elton Tobin, Account Manager
**Email:** etobin@ukconnect.com
**Phone:** 0333 900 9860 | 07534 940 978
**Address:** Cody Technology Park, Building A2, Ively Road, Farnborough, GU14 0LX
**Quote date:** 14 October 2025
**Note:** UKConnect is an HBF member company.

### Per-Site Pricing (Fixed Wireless 5G, managed service)
- Installation: £400 one-off
- Unlimited 5G data: £329/month
- Connect Care (device support): £14/month
- Decommission: £300 one-off

**Monthly recurring: £343/site | One-off: £700/site**

### Financial Model Update
Replace earlier £30-80/month connectivity estimate with £343/month/site.
Add £400 to mobilisation costs and £300 to wind-down costs per site.

### Key Questions for Follow-Up
- SLA for fault resolution (hard SLA needed — downtime = revenue loss)
- Loan device included in Connect Care if hardware fails?
- 5G coverage confirmation at Liverpool, Manchester, Leeds, Sheffield postcodes
- Minimum contract term and early termination terms per site
- Volume discount structure for 4, 8, 20+ sites
- Decommission fee waiver for multi-site agreements

### Next Step
Follow-up call with Elton Tobin to confirm coverage, SLA, flexibility, and volume pricing.

## 4. OPEN QUESTIONS
- [ ] Book Navori demo — pilot pricing 4-8 screens, sample proof-of-play report
- [ ] Contact Broadsign — startup pricing for sub-10 screens
- [ ] Confirm BrightSign XT244 + Hikvision DS-C60S HDMI compatibility
- [ ] Follow-up call with Elton Tobin (UKConnect)
- [ ] Update financial model: connectivity = £343/month/site
- [ ] Remove Samsung MagicINFO from Files 01 Sections 4 and 9

---
*Version 1.1 | Save to: /DigiSite-Project/context-files/06-digisite-cms-and-connectivity.md*
