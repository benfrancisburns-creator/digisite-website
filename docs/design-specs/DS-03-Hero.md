# DigiSite — Hero Section Specification
**Document:** DS-03  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-02-Navigation.md

---

## 1. CONCEPT

The hero is a full-viewport illustrated scene. Deep navy canvas. City skyline silhouette in the lower two-thirds. A scaffold structure centre-right with a glowing LED screen mounted on it — the entire DigiSite proposition in a single image. Headline and subhead sit left-aligned, vertically centred. Asymmetric composition: text occupies the left half, illustration bleeds across the right.

The hero has one job: make someone stop scrolling. It does this through scale (huge headline), intrigue (LED glow in darkness), and the precision of a single clear statement about what DigiSite is.

**Headline (locked):** "The forever-moving canvas."

This is the most ownable line DigiSite has. It names the concept rather than describing the business. It rewards the reader who thinks about it for two seconds. The subhead does the explaining.

---

## 2. LAYOUT — DESKTOP

### Container
- Width: 100vw
- Height: 100vh (minimum 680px)
- Background: `#0D1B2A` (Navy)
- Overflow: hidden
- Position: relative

### Grid
Two implicit columns:
- Left column: text content, spanning approximately 50% of viewport width
- Right column: cityscape illustration, spanning the full right half and bleeding to edge

Text content is vertically centred in the viewport (`display: flex; align-items: center`). Text block sits within the `max-width: 1200px` container.

### Illustration Layer
- Position: `absolute; right: 0; top: 0; bottom: 0`
- Width: approximately 60% of viewport width (overlaps with text zone — the illustration breathes behind the text rather than sitting strictly to the right)
- Implemented as inline SVG or CSS-drawn layers — no raster images
- Sits behind text on z-axis (`z-index: 0`; text at `z-index: 1`)

---

## 3. TEXT CONTENT — DESKTOP

### Pill Label (above headline)
- Text: `Digital Out-of-Home · UK`
- Font: IBM Plex Mono 400, 11px, `text-transform: uppercase`, `letter-spacing: 0.15em`
- Colour: `#00D4FF`
- Container: inline pill — `border: 1px solid rgba(0, 212, 255, 0.35)`, `border-radius: 2px`, `padding: 6px 12px`
- Background: `rgba(0, 212, 255, 0.06)` — barely-there cyan wash
- Margin-bottom: 32px

### Headline
- Text: `The forever-moving canvas.`
- Font: Space Grotesk 700
- Size: 88px desktop (clamp between 64px and 100px with `clamp(64px, 7vw, 100px)`)
- Colour: `#FFFFFF`
- Letter-spacing: `-0.03em`
- Line-height: 1.0
- Max-width: 620px (prevents widow words on large screens)
- Margin-bottom: 28px

**Note on the period:** The full stop is intentional. It gives the headline architectural weight. Do not remove it.

### Subhead
- Text: `DigiSite deploys high-brightness LED screens on construction scaffolding and perimeter hoardings — creating premium digital advertising inventory where cities grow.`
- Font: Space Grotesk 400
- Size: 19px
- Colour: `#8A9BB0` (mid-grey — clearly subordinate to headline)
- Line-height: 1.7
- Max-width: 520px
- Margin-bottom: 48px

### CTA Row
Two elements in a horizontal flex row, `gap: 20px`, `align-items: center`.

**Primary CTA — "Explore DigiSite"**
- Background: `#00D4FF`
- Text: `#0D1B2A` (navy on cyan — high contrast)
- Font: Space Grotesk 500, 14px, `text-transform: uppercase`, `letter-spacing: 0.08em`
- Padding: `16px 32px`
- Border-radius: 2px
- Hover: `background: #33DDFF` (10% lighter cyan), box-shadow `0 0 24px rgba(0, 212, 255, 0.4)`
- Transition: `all 0.2s ease`
- On click: smooth scroll to `#solution` section

**Secondary — scroll indicator text**
- Text: `See how it works`
- Font: Space Grotesk 400, 14px
- Colour: `#8A9BB0`
- No border, no background — plain text link
- Small arrow icon (→) after text, `margin-left: 8px`
- Hover: colour shifts to `#F7F9FC`
- On click: smooth scroll to `#opportunity` section

### Scroll Indicator (separate — fixed bottom-left of hero)
- Position: `absolute; bottom: 40px; left: 48px`
- A vertical line 1px wide, 40px tall, colour `rgba(0, 212, 255, 0.4)`
- Below the line: word `SCROLL` in Space Grotesk 500, 9px, `text-transform: uppercase`, `letter-spacing: 0.2em`, colour `#8A9BB0`, rotated 90° (`transform: rotate(90deg); transform-origin: left top`)
- Subtle pulsing opacity animation: `opacity: 0.4 → 0.8 → 0.4` over 2.5s, looping. This is the only looping animation in the site.
- Disappears (fade out) after user scrolls past hero (`opacity: 0; pointer-events: none`)

---

## 4. ILLUSTRATION — THE CITYSCAPE SCENE

The illustration is built in SVG layers, not a raster image. This keeps it crisp at all resolutions and avoids image loading.

### Layer 1 — Sky and Background Glow (bottommost)
- Base fill: `#0D1B2A` (same as section background — no visible transition)
- Radial gradient ambient glow centred roughly behind where the LED screen sits:
  ```css
  background: radial-gradient(ellipse 50% 35% at 70% 45%,
    rgba(0, 212, 255, 0.08) 0%,
    transparent 100%);
  ```
- This is the "screen is emitting light into the air" effect. Extremely subtle.

### Layer 2 — City Skyline Silhouette
- Flat geometric buildings in deep navy `#162236` against the slightly lighter background
- Buildings fill the lower 55% of the illustration, varying heights, no detail — pure silhouettes
- Rightmost buildings are taller (city centre visual — creates depth)
- Buildings defined as SVG `<rect>` elements with a small `<path>` for roofline details
- A handful of amber points `#F5A623` at 30–40% opacity scattered across building faces (lit windows, distant lights)
- No people, no vehicles, no trees — abstraction not illustration

### Layer 3 — Scaffold Structure
- Vertical scaffold standards (poles): two upright lines in `#2A3F52` (steel colour), approximately 2px stroke
- Horizontal ledgers: crossing the uprights at regular intervals — same colour
- The scaffold sits centre-right of the illustration, approximately 30% width of the illustration zone
- Height: approximately 60% of the viewport height
- Constructed from SVG `<line>` elements — simple, architectural

### Layer 4 — LED Screen
- A rectangle positioned on the scaffold face, approximately 40% into the illustration zone from right edge
- Fill: `rgba(0, 212, 255, 0.15)` — translucent cyan face
- Border: `1px solid rgba(0, 212, 255, 0.6)` — clean edge
- Box shadow (SVG filter):
  ```
  0 0 30px rgba(0, 212, 255, 0.5)
  0 0 60px rgba(0, 212, 255, 0.25)
  0 0 100px rgba(0, 212, 255, 0.1)
  ```
- The screen contains three horizontal bands of content at very low opacity — suggesting different advertisers in a slot rotation. These are just thin rectangles in slightly different cyan tones — not legible text.
- Dimensions: approximately 200×100px in SVG coordinates (adjust to feel right against the scaffold)

### Layer 5 — Canvas Wrap Lines
- Thin lines extending from the screen edges outward along the scaffold — representing the canvas wrap border tube
- Colour: `#2A3F52` matching scaffold
- These complete the visual of the full DigiScaff unit and explain the product without words

### Layer 6 — Ambient Points
- 6–8 very small cyan dots (`#00D4FF`, 2–3px radius, 20–30% opacity) scattered around the screen — representing pixels or data points
- 2–3 small amber dots (`#F5A623`, 2px radius, 25% opacity) in the mid-ground

---

## 5. MOBILE LAYOUT

Below 768px:

- Layout becomes single column, full width
- Illustration collapses and sits below the text block (not behind it)
- Hero height: `auto` — let content define the height, minimum `100vh`
- Padding: `120px 24px 80px` (top padding accounts for fixed nav)
- Headline size: 48px
- Subhead size: 17px, max-width: none (full column width)
- Illustration: scaled to 100% column width, height capped at 260px, cropped to show scaffold and screen without full cityscape
- CTA row: stack vertically with `gap: 16px`
- Scroll indicator: hidden on mobile

---

## 6. ANIMATION — HERO ENTRANCE

Elements animate in on page load (not on scroll — hero is immediately visible). Stagger each element:

| Element | Delay | Animation |
|---|---|---|
| Pill label | 200ms | `opacity 0→1, translateY 12px→0, duration 500ms` |
| Headline | 350ms | `opacity 0→1, translateY 16px→0, duration 600ms` |
| Subhead | 500ms | `opacity 0→1, translateY 12px→0, duration 500ms` |
| CTA row | 650ms | `opacity 0→1, translateY 12px→0, duration 500ms` |
| Illustration | 400ms | `opacity 0→1, duration 800ms` (fade in, no translate) |
| Scroll indicator | 1200ms | `opacity 0→0.4, duration 600ms` |

All animations use `ease-out` easing. Use CSS animations with `animation-fill-mode: both`.

---

## 7. ASTRO COMPONENT

Create `/src/components/Hero.astro`:

```astro
---
// Hero.astro — no props
---

<section id="hero" class="relative w-full min-h-screen bg-navy overflow-hidden flex items-center">

  <!-- Ambient glow layer -->
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div class="absolute w-full h-full" style="background: radial-gradient(ellipse 50% 35% at 70% 45%, rgba(0, 212, 255, 0.08) 0%, transparent 100%);"></div>
  </div>

  <!-- Cityscape illustration (positioned right, sits behind text) -->
  <div class="absolute right-0 top-0 bottom-0 w-3/5 pointer-events-none hero-illustration" aria-hidden="true">
    <!-- SVG illustration goes here — see section 4 above for full spec -->
    <svg class="w-full h-full" viewBox="0 0 800 720" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <!-- Layer 2: Skyline -->
      <!-- Layer 3: Scaffold -->
      <!-- Layer 4: LED screen -->
      <!-- Layer 5: Canvas wrap lines -->
      <!-- Layer 6: Ambient points -->
      <!-- See DS-03 Section 4 for complete SVG specification -->
    </svg>
  </div>

  <!-- Text content -->
  <div class="relative z-10 max-w-content mx-auto px-12 w-full">
    <div class="max-w-xl hero-text">

      <!-- Pill label -->
      <div class="inline-flex items-center px-3 py-1.5 border border-cyan/35 bg-cyan/5 mb-8 hero-pill">
        <span class="font-mono text-[11px] text-cyan uppercase tracking-[0.15em]">Digital Out-of-Home · UK</span>
      </div>

      <!-- Headline -->
      <h1 class="font-grotesk font-bold text-white leading-none tracking-tight mb-7 hero-headline"
          style="font-size: clamp(64px, 7vw, 100px); letter-spacing: -0.03em;">
        The forever-moving canvas.
      </h1>

      <!-- Subhead -->
      <p class="font-grotesk text-mid-grey leading-relaxed mb-12 hero-subhead"
         style="font-size: 19px; max-width: 520px;">
        DigiSite deploys high-brightness LED screens on construction scaffolding and perimeter hoardings — creating premium digital advertising inventory where cities grow.
      </p>

      <!-- CTAs -->
      <div class="flex items-center gap-5 hero-cta">
        <a href="#solution"
           class="px-8 py-4 bg-cyan text-navy font-grotesk font-medium text-[14px] uppercase tracking-[0.08em] rounded-sm hover:bg-cyan/90 transition-all duration-200"
           style="box-shadow: 0 0 0 rgba(0,212,255,0);"
           onmouseover="this.style.boxShadow='0 0 24px rgba(0,212,255,0.4)'"
           onmouseout="this.style.boxShadow='0 0 0 rgba(0,212,255,0)'">
          Explore DigiSite
        </a>
        <a href="#opportunity"
           class="text-mid-grey hover:text-off-white font-grotesk text-[14px] transition-colors duration-200">
          See how it works →
        </a>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-10 left-12 flex flex-col items-center gap-3 hero-scroll-indicator" aria-hidden="true">
    <div class="w-px h-10 bg-cyan/40"></div>
    <span class="font-grotesk font-medium text-[9px] text-mid-grey uppercase tracking-[0.2em]"
          style="writing-mode: vertical-lr; transform: rotate(180deg);">Scroll</span>
  </div>

</section>

<style>
  /* Hero entrance animations */
  .hero-pill,
  .hero-headline,
  .hero-subhead,
  .hero-cta,
  .hero-illustration,
  .hero-scroll-indicator {
    opacity: 0;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
  }

  .hero-pill { animation: heroReveal 0.5s 0.2s both; }
  .hero-headline { animation: heroRevealUp 0.6s 0.35s both; }
  .hero-subhead { animation: heroReveal 0.5s 0.5s both; }
  .hero-cta { animation: heroReveal 0.5s 0.65s both; }
  .hero-illustration { animation: heroFade 0.8s 0.4s both; }
  .hero-scroll-indicator { animation: heroFade 0.6s 1.2s both; }

  @keyframes heroRevealUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroReveal {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Scroll indicator pulse */
  .hero-scroll-indicator {
    animation: heroFade 0.6s 1.2s both, scrollPulse 2.5s 1.8s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero-illustration { display: none; }
    .hero-scroll-indicator { display: none; }
  }
</style>
```

---

## 8. COPY DECISIONS — LOCKED

| Element | Copy | Status |
|---|---|---|
| Pill label | `Digital Out-of-Home · UK` | Locked |
| Headline | `The forever-moving canvas.` | Locked — including full stop |
| Subhead | `DigiSite deploys high-brightness LED screens on construction scaffolding and perimeter hoardings — creating premium digital advertising inventory where cities grow.` | Locked |
| Primary CTA | `Explore DigiSite` | Locked |
| Secondary CTA | `See how it works →` | Locked |

---

## 9. SEO AND META

The hero headline contributes to the page's H1. Ensure the `<h1>` is the first and only H1 on the page. Meta title and description are set in `Base.astro`:

```html
<title>DigiSite — Digital Advertising on Construction Scaffolding</title>
<meta name="description" content="DigiSite transforms construction scaffolding into high-brightness LED advertising screens across UK cities. Premium Digital Out-of-Home for developers, contractors, and advertisers.">
<meta property="og:title" content="DigiSite — The forever-moving canvas.">
<meta property="og:description" content="Premium digital advertising inventory on construction scaffolding and perimeter hoardings across UK cities.">
<meta property="og:url" content="https://www.digiscaff.co.uk">
```

---

*Companion documents: DS-00-Brand-System.md, DS-02-Navigation.md, DS-04-Opportunity.md*
