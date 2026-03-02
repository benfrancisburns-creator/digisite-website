# DigiSite — The Opportunity Section Specification
**Document:** DS-04  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked — revenue figures to be updated once financial model is finalised  
**Companion:** DS-00-Brand-System.md, DS-03-Hero.md

---

## 1. CONCEPT

This section has one job: make the scale of the untapped opportunity immediately legible to three different readers — an investor, a construction partner, and a sceptic.

It does this in four moves:

1. A framing statement that names the mechanism (the funnel analogy)
2. Three data-backed statistics in a horizontal grid, each arguing a different dimension of the opportunity
3. A visual transition (amber rule) that signals: "we've shown you the problem, now we'll show you the solution"

The section is deliberately stripped back. No body copy paragraphs. No lists. The stats and the framing statement carry everything.

**Section anchor:** `id="opportunity"`

---

## 2. FRAMING STATEMENT

This sits above the three stat blocks, full width, centred. It is the conceptual anchor for everything that follows.

### Copy
> "DigiSite channels advertising budgets directly into the construction industry — creating revenue from spaces that previously had only costs attached to them."

### Treatment
- Font: Space Grotesk 700
- Size: 28px desktop, 22px mobile
- Colour: `#F7F9FC` (off-white)
- Max-width: 720px
- Text-align: centre
- Letter-spacing: `-0.01em`
- Line-height: 1.3
- Margin-below: 72px

The statement has no label, no eyebrow, no surrounding decoration. Its weight comes from isolation — it stands alone with space above and below before the grid of stats begins.

---

## 3. SECTION STRUCTURE

```
[Section background: #0F2035]
[Top edge: 1px cyan rule]

[Section label: "THE OPPORTUNITY"]

[Framing statement]

[Three-column stat grid]

[Bottom edge: 1px amber rule]
```

---

## 4. SECTION LABEL (EYEBROW)

Above the framing statement.

- Text: `THE OPPORTUNITY`
- Font: IBM Plex Mono 600, 11px, `text-transform: uppercase`, `letter-spacing: 0.2em`
- Colour: `#00D4FF`
- Text-align: centre
- Margin-below: 24px

---

## 5. TOP RULE

A 1px full-width horizontal line in cyan at the very top of the section (flush to the top edge, no gap).

```css
.section-rule-top {
  height: 1px;
  background: var(--color-cyan);
  opacity: 0.25;
  width: 100%;
}
```

This rule separates the Hero (pure navy `#0D1B2A`) from The Opportunity (section step `#0F2035`). The colour change is subtle — the rule marks the boundary.

---

## 6. THREE STAT BLOCKS — CONTENT

### Layout
Three equal-width columns in a horizontal flex/grid layout on desktop. Stack to single column on mobile with `gap: 48px`.

Desktop: `display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px`

The `2px` gap creates a visual separation without a heavy divider. An alternative approach: thin 1px vertical rules in `rgba(0, 212, 255, 0.12)` between columns.

### Individual Stat Block Structure
Each block contains:
1. A large IBM Plex Mono number (the stat)
2. A short IBM Plex Mono label (what the number refers to)
3. Two lines of Space Grotesk body copy (the argument)
4. A source attribution line (tiny, right-aligned or below)

---

### STAT BLOCK 1 — The Scale of Partners

**Number:** `6,235`
**Number colour:** `#00D4FF` (cyan)
**Number font:** IBM Plex Mono 600, 72px desktop / 56px mobile
**Number letter-spacing:** `-0.02em`

**Label:** `SCAFFOLD BUSINESSES IN THE UK`
**Label font:** IBM Plex Mono 600, 11px, `text-transform: uppercase`, `letter-spacing: 0.18em`
**Label colour:** `#8A9BB0`
**Label margin-top:** 12px

**Body copy:**
"Each one operates a forward pipeline of active sites. Every site is a potential DigiSite location generating zero advertising revenue today."

**Body font:** Space Grotesk 400, 16px, `#8A9BB0`, line-height 1.65
**Body margin-top:** 16px

**Source:** `ONS, March 2024`
**Source font:** IBM Plex Mono 400, 10px, `#8A9BB0` at 60% opacity
**Source margin-top:** 16px

---

### STAT BLOCK 2 — The Commercial Logic

This block is different from the other two. Instead of a single large number, it presents a before/after comparison — the most important commercial argument on the page.

**Layout within the block:**
Two numbers side by side with a thin right-arrow between them.

**Left number:** `£0`
**Right number:** `£TBC`

*(The right number is a placeholder. When the financial model is confirmed, insert the annual partner revenue figure per screen at the appropriate revenue share percentage. Based on current modelling: a partner with one DigiSite screen at base case occupancy earns approximately £35,000 per year at a 30% revenue share. This figure must be validated before publishing. Use a range if preferred: "up to £XX,000" is more defensible than a single figure.)*

**Both numbers:** IBM Plex Mono 600, 64px desktop / 48px mobile, line-height 1.0
**Left number colour:** `#8A9BB0` (muted — this is the bad number)
**Arrow:** `→` in Space Grotesk 400, 40px, `#8A9BB0`
**Right number colour:** `#00D4FF` (cyan — this is the good number)

**Label below the number pair:**
```
WHAT A SCAFFOLD FACE EARNS TODAY  →  WHAT A DIGISITE PARTNER EARNS ANNUALLY
```
Split into two sub-labels, one under each number, or as a single flowing label.
Font: IBM Plex Mono 600, 10px, `text-transform: uppercase`, `letter-spacing: 0.15em`, `#8A9BB0`

**Body copy:**
"One screen. One partner. Zero upfront cost to the construction firm. Revenue share from the day it goes live."

**Source:** `DigiSite financial model — base case. To be confirmed with formal quotes.`

*(Source note intentionally transparent — signals this is modelled, not fabricated. Investors respect honesty about estimates.)*

---

### STAT BLOCK 3 — The Structural Tailwind

**Number:** `£700bn+`
**Number colour:** `#00D4FF`
**Number font:** IBM Plex Mono 600, 72px desktop / 56px mobile

**Label:** `UK INFRASTRUCTURE INVESTMENT COMMITTED`
**Label font/style:** as per Stat Block 1

**Body copy:**
"Government-committed capital over the next decade. Every contract awarded builds more DigiSite inventory. The pipeline is not shrinking — it's mandated to grow."

**Source:** `HM Treasury / National Infrastructure and Construction Pipeline`

---

## 7. STAT BLOCK CONTAINER STYLING

```css
.stat-block {
  padding: 48px 40px;
  border: 1px solid rgba(0, 212, 255, 0.12);
  border-radius: 4px;
  background: rgba(0, 212, 255, 0.02); /* barely-there cyan tint */
}
```

On hover (desktop), very subtle lift:
```css
.stat-block:hover {
  border-color: rgba(0, 212, 255, 0.25);
  transform: translateY(-2px);
  transition: all 0.25s ease;
}
```

---

## 8. STAT COUNTER ANIMATION

When each stat block enters the viewport, the number counts up from zero to its final value. This applies to Stat 1 (`6,235`) and Stat 3 (`700`bn).

Stat 2's before/after format is handled differently — the right number fades in after a 300ms delay, with the left `£0` appearing first.

### Counter JavaScript
```javascript
function animateCounter(element, target, duration = 1200) {
  const start = performance.now();
  const isDecimal = target.toString().includes('.');
  
  requestAnimationFrame(function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    
    element.textContent = current.toLocaleString('en-GB');
    
    if (progress < 1) requestAnimationFrame(tick);
    else element.textContent = target.toLocaleString('en-GB');
  });
}

// Trigger on intersection
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      animateCounter(el, target);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-counter]').forEach(el => statObserver.observe(el));
```

Usage in HTML:
```html
<span class="stat-number" data-counter data-target="6235">6,235</span>
```

---

## 9. BOTTOM AMBER RULE

A 1px full-width horizontal line in amber at the very bottom of the section. This is the first and only appearance of amber on the page at this point. It signals warmth and mutual benefit — the construction partner and DigiSite both win. It also marks the transition into The Solution section.

```css
.section-rule-amber {
  height: 1px;
  background: #F5A623;
  opacity: 0.35;
  width: 100%;
}
```

---

## 10. SECTION PADDING AND SPACING

- Top padding: 120px (desktop), 80px (mobile)
- Bottom padding: 120px (desktop), 80px (mobile)
- The cyan rule sits outside the padding — flush to the section's top edge
- The amber rule sits outside the padding — flush to the section's bottom edge

---

## 11. MOBILE LAYOUT

- Single column stacked layout
- Stat blocks: `display: flex; flex-direction: column; gap: 48px`
- Stat block containers: `padding: 32px 24px`
- Stat numbers: 56px → 48px
- Framing statement: 22px
- Grid borders on desktop collapse to top/bottom borders only on mobile (remove left/right side borders)
- Stat 2 before/after: stack vertically with arrow pointing down (`↓`) on mobile

---

## 12. FULL SECTION COPY (LOCKED — PENDING REVENUE FIGURE)

| Element | Copy |
|---|---|
| Section eyebrow | `THE OPPORTUNITY` |
| Framing statement | `DigiSite channels advertising budgets directly into the construction industry — creating revenue from spaces that previously had only costs attached to them.` |
| Stat 1 number | `6,235` |
| Stat 1 label | `SCAFFOLD BUSINESSES IN THE UK` |
| Stat 1 body | `Each one operates a forward pipeline of active sites. Every site is a potential DigiSite location generating zero advertising revenue today.` |
| Stat 1 source | `ONS, March 2024` |
| Stat 2 left | `£0` |
| Stat 2 right | `£[TBC — insert confirmed figure]` |
| Stat 2 label | `WHAT A SCAFFOLD FACE EARNS TODAY → WHAT A DIGISITE PARTNER EARNS ANNUALLY` |
| Stat 2 body | `One screen. One partner. Zero upfront cost to the construction firm. Revenue share from the day it goes live.` |
| Stat 2 source | `DigiSite financial model — base case. To be confirmed with formal quotes.` |
| Stat 3 number | `£700bn+` |
| Stat 3 label | `UK INFRASTRUCTURE INVESTMENT COMMITTED` |
| Stat 3 body | `Government-committed capital over the next decade. Every contract awarded builds more DigiSite inventory. The pipeline is not shrinking — it's mandated to grow.` |
| Stat 3 source | `HM Treasury / National Infrastructure and Construction Pipeline` |

---

## 13. OPEN ITEMS — BEFORE PUBLISHING

- [ ] Confirm partner annual revenue figure from financial model (currently shows £TBC)
- [ ] Decide on range vs single figure for Stat 2 right-hand number
- [ ] Cross-check HM Treasury source reference for `£700bn+` figure — confirm exact document citation

---

*Companion documents: DS-00-Brand-System.md, DS-03-Hero.md, DS-05-Solution.md (not yet written)*
