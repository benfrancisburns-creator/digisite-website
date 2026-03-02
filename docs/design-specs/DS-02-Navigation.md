# DigiSite — Navigation Specification
**Document:** DS-02  
**Version:** 1.0  
**Date:** March 2026  
**Status:** Locked  
**Companion:** DS-00-Brand-System.md, DS-01-Logo.md

---

## 1. CONCEPT

The navigation is transparent over the hero and transitions to a blurred dark state on scroll. It sits at the very top of every viewport and never obscures content. It is minimal — logo left, four links and one CTA right. No dropdowns. No mega menus. Text-only link labels in tracked small caps.

The nav makes its first visual statement before anything else on the page loads. It needs to feel like it belongs to a premium tech brand, not a construction company website.

---

## 2. DESKTOP NAVIGATION

### Layout
- Fixed position: `position: fixed; top: 0; left: 0; right: 0; z-index: 100`
- Height: 72px
- Content aligned in a `max-width: 1200px` container, horizontally centred
- Flexbox: logo left (`flex: 0 0 auto`), nav links and CTA right (`margin-left: auto`)

### Default State (over Hero — transparent)
- Background: transparent
- No border, no box-shadow
- Logo: dark variant (white wordmark, cyan hexagon) at nav size (156×43px)

### Scrolled State (triggered at 80px scroll depth)
- Background: `rgba(13, 27, 42, 0.92)` — navy at 92% opacity
- Backdrop filter: `blur(12px)` — frosted glass effect
- Bottom border: `1px solid rgba(0, 212, 255, 0.1)` — very subtle cyan line
- Transition: `all 0.3s ease` — smooth change on scroll
- Logo: same dark variant, unchanged

### Nav Links (4 links)
- Labels: Products · Partners · Market · Contact
- Font: Space Grotesk 500, 13px, `text-transform: uppercase`, `letter-spacing: 0.1em`
- Colour: `#F7F9FC` at 85% opacity (slightly muted — not pure white, not competing with logo or CTA)
- Hover: opacity increases to 100%, `transition: opacity 0.2s ease`
- Gap between links: 40px
- Each link scrolls smoothly to its corresponding section anchor

### CTA Button — "Partner With Us"
- Positioned immediately after nav links, 32px gap
- Style: outlined — transparent fill, `1px solid #00D4FF` border, `#00D4FF` text
- Font: Space Grotesk 500, 13px, `text-transform: uppercase`, `letter-spacing: 0.1em`
- Padding: `10px 24px`
- Border-radius: 2px (nearly square — precise, not rounded)
- Hover: fill becomes `rgba(0, 212, 255, 0.1)`, subtle cyan wash behind text
- Transition: `all 0.2s ease`
- On click: scrolls to Contact section (anchor `#contact`)

---

## 3. MOBILE NAVIGATION

### Trigger
Below `768px` viewport width, nav collapses to logo + hamburger.

### Mobile Nav Bar
- Height: 64px
- Logo: dark variant, icon-only (48×48px) OR full lockup at reduced size — whichever fits without crowding the hamburger
- Hamburger: right-aligned, 24px icon, three horizontal lines, `#F7F9FC` colour
- Same scroll state transition applies as desktop (transparent → blurred dark)

### Hamburger Icon (SVG)
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <line x1="3" y1="6" x2="21" y2="6" stroke="#F7F9FC" stroke-width="1.5"/>
  <line x1="3" y1="12" x2="21" y2="12" stroke="#F7F9FC" stroke-width="1.5"/>
  <line x1="3" y1="18" x2="21" y2="18" stroke="#F7F9FC" stroke-width="1.5"/>
</svg>
```

### Mobile Menu Overlay
- Triggered by hamburger click
- Full-screen overlay: `position: fixed; inset: 0; background: #0D1B2A; z-index: 200`
- Entrance: fades in at `opacity: 0 → 1` over 250ms
- Close: X button top-right (same position as hamburger), or tap outside
- Content: vertically centred flex column
- Links: Products · Partners · Market · Contact · Partner With Us
- Font: Space Grotesk 700, 36px, `letter-spacing: -0.01em`
- Colour: `#F7F9FC`
- Each link at 20px gap
- "Partner With Us" styled as per the CTA button above but full-width with centred text
- On link tap: menu closes, page scrolls to anchor

---

## 4. SCROLL BEHAVIOUR

All navigation links use smooth scroll. In Astro, implement via vanilla JavaScript:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu if open
    closeMobileMenu();
  });
});
```

### Scroll offset
Account for fixed nav height (72px desktop, 64px mobile) so section headings are not hidden behind the nav on anchor scroll. Apply a CSS scroll-margin-top to each section:

```css
section[id] {
  scroll-margin-top: 80px;
}
```

---

## 5. ASTRO COMPONENT

Create `/src/components/Nav.astro`:

```astro
---
// Nav.astro — no props required
const links = [
  { label: 'Products', href: '#solution' },
  { label: 'Partners', href: '#partnerships' },
  { label: 'Market', href: '#market' },
  { label: 'Contact', href: '#contact' },
];
---

<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-content mx-auto px-12 h-18 flex items-center">

    <!-- Logo -->
    <a href="/" aria-label="DigiSite home">
      <LogoSVG variant="dark" size="nav" />
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center ml-auto gap-10">
      {links.map(link => (
        <a
          href={link.href}
          class="text-off-white/85 hover:text-off-white text-[13px] font-medium uppercase tracking-[0.1em] transition-opacity duration-200"
        >
          {link.label}
        </a>
      ))}
      <a
        href="#contact"
        class="ml-8 px-6 py-2.5 border border-cyan text-cyan text-[13px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-cyan/10 transition-all duration-200"
      >
        Partner With Us
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button id="menu-toggle" class="ml-auto md:hidden" aria-label="Open menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="3" y1="6" x2="21" y2="6" stroke="#F7F9FC" stroke-width="1.5"/>
        <line x1="3" y1="12" x2="21" y2="12" stroke="#F7F9FC" stroke-width="1.5"/>
        <line x1="3" y1="18" x2="21" y2="18" stroke="#F7F9FC" stroke-width="1.5"/>
      </svg>
    </button>
  </div>
</nav>

<!-- Mobile menu overlay -->
<div id="mobile-menu" class="fixed inset-0 bg-navy z-[200] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-250">
  <button id="menu-close" class="absolute top-5 right-6" aria-label="Close menu">
    <!-- X icon -->
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="4" y1="4" x2="20" y2="20" stroke="#F7F9FC" stroke-width="1.5"/>
      <line x1="20" y1="4" x2="4" y2="20" stroke="#F7F9FC" stroke-width="1.5"/>
    </svg>
  </button>
  <nav class="flex flex-col items-center gap-8">
    {links.map(link => (
      <a href={link.href} class="mobile-nav-link text-off-white font-grotesk font-bold text-4xl tracking-tight">
        {link.label}
      </a>
    ))}
    <a href="#contact" class="mobile-nav-link mt-4 px-10 py-4 border border-cyan text-cyan font-grotesk font-medium text-[13px] uppercase tracking-[0.1em]">
      Partner With Us
    </a>
  </nav>
</div>

<script>
  // Scroll state
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.background = 'rgba(13, 27, 42, 0.92)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.borderBottom = '1px solid rgba(0, 212, 255, 0.1)';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.borderBottom = 'none';
    }
  });

  // Mobile menu
  const toggle = document.getElementById('menu-toggle');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');

  function openMenu() {
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100');
  }
  function closeMenu() {
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.classList.remove('opacity-100');
  }

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
</script>
```

---

## 6. Z-INDEX STACK

| Layer | Z-index | Element |
|---|---|---|
| Base content | 0 | All page sections |
| Nav | 50 | Fixed navigation bar |
| Mobile overlay | 200 | Full-screen menu |
| Any future modals | 300 | (reserved for Phase 2) |

---

*Companion documents: DS-00-Brand-System.md, DS-01-Logo.md, DS-03-Hero.md*
