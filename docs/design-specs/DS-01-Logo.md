# DigiSite — Logo System Specification
**Document:** DS-01  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Purpose:** Complete logo specification for Claude Code implementation. The logo is built as inline SVG — no external image files required.

---

## 1. CONCEPT

The DigiSite mark is a **hollow hexagon** combined with the **DigiSite wordmark** in Space Grotesk Bold.

The hexagon references three things simultaneously: a bolt head (construction), a screen pixel (digital), and geometric precision (tech). The hollow ring — outer hexagon with inner hexagon cutout — creates a strong, readable mark that works from 16px favicon to full-page display.

The mixed case "DigiSite" — capital D and capital S, all other characters lowercase — is a deliberate brand decision. It is not a typo. It must not be normalised to all-caps or all-lowercase.

---

## 2. GEOMETRY

### Hexagon — flat-top orientation

The hexagon uses a flat-top orientation (one point at left, one at right, flat edges top and bottom). All coordinates are on a 72×72px grid.

**Outer hexagon points (clockwise from top-left):**
```
36,4   → top centre
64,20  → top right
64,52  → bottom right
36,68  → bottom centre
8,52   → bottom left
8,20   → top left
```

**Inner hexagon points (clockwise from top-left):**
```
36,18  → top centre
52,27  → top right
52,45  → bottom right
36,54  → bottom centre
20,45  → bottom left
20,27  → top left
```

The inner cutout is approximately 30% smaller than the outer form, creating a bold ring weight that reads clearly at small sizes.

---

## 3. COLOUR VARIANTS

### Primary — Dark Background (main use case)
- Outer hexagon fill: `#00D4FF` (cyan)
- Inner hexagon fill: `#0D1B2A` (navy — matches background, creates hollow effect)
- Wordmark: `#FFFFFF` (white)

### Secondary — Light Background
- Outer hexagon fill: `#00D4FF` (cyan)
- Inner hexagon fill: `#FFFFFF` (white — matches background)
- Wordmark: `#0D1B2A` (navy)

### Navy Variant — Light Background (alt)
- Outer hexagon fill: `#0D1B2A` (navy)
- Inner hexagon fill: `#FFFFFF` (white)
- Wordmark: `#0D1B2A` (navy)

---

## 4. SVG CODE — ALL VARIANTS

### Full Lockup — Dark Background (PRIMARY)
Use in: navigation (dark nav), hero, footer, any dark section.

```svg
<svg width="220" height="60" viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DigiSite">
  <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
  <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill="#0D1B2A"/>
  <text x="82" y="48" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="38" fill="#FFFFFF" letter-spacing="-0.5">DigiSite</text>
</svg>
```

### Full Lockup — Light Background
```svg
<svg width="220" height="60" viewBox="0 0 260 72" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DigiSite">
  <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
  <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill="#FFFFFF"/>
  <text x="82" y="48" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="38" fill="#0D1B2A" letter-spacing="-0.5">DigiSite</text>
</svg>
```

### Icon Only — Dark Background
Use in: favicon, app icon, small contexts where wordmark is not legible.

```svg
<svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DigiSite">
  <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
  <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill="#0D1B2A"/>
</svg>
```

### Icon Only — Light Background
```svg
<svg width="48" height="48" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DigiSite">
  <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
  <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill="#FFFFFF"/>
</svg>
```

### Stacked — Dark Background
Use in: social media, square format contexts.

```svg
<svg width="160" height="100" viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DigiSite">
  <polygon points="80,4 108,20 108,52 80,68 52,52 52,20" fill="#00D4FF"/>
  <polygon points="80,18 96,27 96,45 80,54 64,45 64,27" fill="#0D1B2A"/>
  <text x="80" y="92" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="26" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.3">DigiSite</text>
</svg>
```

---

## 5. ASTRO COMPONENT

Create `/src/components/LogoSVG.astro`:

```astro
---
interface Props {
  variant?: 'dark' | 'light';
  size?: 'nav' | 'large' | 'icon';
  class?: string;
}

const { variant = 'dark', size = 'nav', class: className = '' } = Astro.props;

const wordmarkColor = variant === 'dark' ? '#FFFFFF' : '#0D1B2A';
const innerColor = variant === 'dark' ? '#0D1B2A' : '#FFFFFF';

const dimensions = {
  nav: { width: 156, height: 43, viewBox: '0 0 260 72' },
  large: { width: 220, height: 60, viewBox: '0 0 260 72' },
  icon: { width: 48, height: 48, viewBox: '0 0 72 72' },
};

const d = dimensions[size];
---

{size === 'icon' ? (
  <svg
    width={d.width}
    height={d.height}
    viewBox={d.viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="DigiSite"
    class={className}
  >
    <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
    <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill={innerColor}/>
  </svg>
) : (
  <svg
    width={d.width}
    height={d.height}
    viewBox={d.viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="DigiSite"
    class={className}
  >
    <polygon points="36,4 64,20 64,52 36,68 8,52 8,20" fill="#00D4FF"/>
    <polygon points="36,18 52,27 52,45 36,54 20,45 20,27" fill={innerColor}/>
    <text
      x="82"
      y="48"
      font-family="'Space Grotesk', sans-serif"
      font-weight="700"
      font-size="38"
      fill={wordmarkColor}
      letter-spacing="-0.5"
    >DigiSite</text>
  </svg>
)}
```

---

## 6. USAGE RULES

### Where to use which variant

| Context | Variant | Size |
|---|---|---|
| Navigation (dark nav) | dark | nav |
| Navigation (on scroll, blurred) | dark | nav |
| Hero section | dark | large |
| Footer | dark | large |
| Favicon | dark | icon |
| Investor deck (light slides) | light | large |
| Partner materials (light) | light | large |

### Clearspace
Minimum clearspace on all four sides equals the height of the hexagon mark. On a nav-size logo this is approximately 14px clearspace minimum.

### Minimum Sizes
- Full lockup: 100px wide minimum
- Icon only: 24px wide minimum
- Below 24px, simplify to solid cyan hexagon with no inner cutout

### What is forbidden
- Never place the logo on a mid-tone background (grey, coloured)
- Never stretch or distort the proportions
- Never recolour the hexagon to anything other than the specified variants
- Never add effects (drop shadow, glow) to the logo itself — the surrounding design provides context
- Never use a different font for the wordmark
- Never change the capitalisation of "DigiSite"
- Never outline or stroke the hexagon

---

## 7. FAVICON IMPLEMENTATION

In Astro `Base.astro` layout head:

```html
<!-- Favicon — inline SVG data URI -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><polygon points='36,4 64,20 64,52 36,68 8,52 8,20' fill='%2300D4FF'/><polygon points='36,18 52,27 52,45 36,54 20,45 20,27' fill='%230D1B2A'/></svg>">
```

For browsers that require `.ico`, generate a 32×32 PNG from the icon SVG and place at `/public/favicon.ico`.

---

*Companion document: DS-00-Brand-System.md*
