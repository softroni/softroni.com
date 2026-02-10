# Softroni Brand Design Guidelines

**Version 1.0 · February 2026**
**Prepared for: Designers & Developers**

---

## 1. Brand Overview

Softroni is an AI and automation-focused software company that builds mobile apps, web platforms, and intelligent solutions. The brand identity is rooted in a terminal/developer aesthetic — clean, technical, and modern — while remaining approachable enough for consumer-facing products.

**Brand Personality:** Precise, modern, developer-native, quietly confident
**Tagline:** apps · ai · automation
**Legal Entity:** SOFTRONI LLC (Texas)
**Website:** softroni.com

---

## 2. Logo System

### 2.1 Primary Logo

The primary logo uses a terminal-inspired motif: a green chevron prompt (`>`), the company name in monospace type, and a blinking underscore cursor (`_`).

```
>Softroni_
```

The `S` in Softroni shares the same green as the chevron, visually linking the prompt to the wordmark. The remaining letters `oftroni` are rendered in dark charcoal. The underscore blinks in green, reinforcing the "always running" terminal metaphor.

### 2.2 Compact Mark (App Icon)

For app icons, favicons, and constrained spaces, use the compact mark:

```
>S_
```

This mark is provided in two variants:

- **Dark variant:** Dark background (`#111111`), green `>S` with a slightly translucent green underscore. Use on dark UI surfaces, app icons, and social media avatars.
- **Light variant:** White background with a subtle border (`#F0F0F0`), same green `>S_` treatment. Use on light UI surfaces and when the icon sits on white or near-white backgrounds.

**App icon corner radius:** 18px (at 80×80px base size). Follow platform-specific masking for iOS (continuous corner radius applied by the OS) and Android (adaptive icon specs).

### 2.3 Logo Clear Space

Maintain a minimum clear space around the logo equal to the height of the `>` chevron character on all sides. No other text, graphics, or UI elements should intrude into this zone.

### 2.4 Minimum Size

- **Primary logo:** Do not render below 120px wide (digital) or 1.2 inches (print).
- **Compact mark:** Do not render below 32×32px. At sizes below 48px, test legibility of the underscore — if it becomes indistinguishable, consider dropping it and using just `>S`.

### 2.5 Logo Misuse

Do not:

- Change the color of individual letters (beyond the defined S/chevron green)
- Add drop shadows, gradients, or outlines to the logo
- Rotate or skew the logo
- Place the logo on busy or low-contrast backgrounds
- Substitute the typeface
- Animate the logo differently than the defined animation (see Section 7)

---

## 3. Color Palette

### 3.1 Primary Colors

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Primary Green | Softroni Green | `#00B368` | 0, 179, 104 | Chevron, S letter, underscore, CTAs, accent elements |
| Primary Dark | Charcoal | `#1A1A1A` | 26, 26, 26 | Body text, "oftroni" wordmark text |
| Background | White | `#FFFFFF` | 255, 255, 255 | Default page background |

### 3.2 Secondary / Neutral Colors

| Role | Hex | Usage |
|------|-----|-------|
| Icon Background Dark | `#111111` | Dark app icon background, dark sections |
| Tagline Text | `#999999` | Tagline words, secondary/muted text |
| Tagline Dot | `#DDDDDD` | Middot separators in tagline |
| Divider | `#F0F0F0` | Horizontal rules, subtle borders, card borders |
| Domain Text | `#CCCCCC` | Tertiary text, domain display |

### 3.3 Accessibility Notes

- `#00B368` on white passes WCAG AA for large text (3.52:1) but does not pass for small body text. Use Softroni Green for headings, buttons, and icons only — never for small body copy on white.
- `#1A1A1A` on white passes WCAG AAA (16.56:1). Use for all body text.
- For green text on dark backgrounds (`#111111`), `#00B368` passes AA at all sizes.

---

## 4. Typography

### 4.1 Primary Typeface — JetBrains Mono

**Usage:** Logo, code snippets, terminal-themed UI, headings where a technical tone is needed.

- Logo wordmark: **600 weight** for "oftroni", **800 weight** for "S", chevron, and underscore
- App icon text: **800 weight**
- Code/terminal UI: **400 weight**

**Source:** Google Fonts — `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;800`
**Fallback stack:** `'JetBrains Mono', 'SF Mono', 'Fira Code', monospace`

### 4.2 Secondary Typeface — System Sans-Serif

**Usage:** Body copy, navigation, taglines, marketing content, UI labels.

**Stack:** `-apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', sans-serif`

This defers to the platform's native sans-serif for performance and familiarity, with Inter as the explicit web fallback if a custom font is needed (e.g., in Figma comps or email templates).

### 4.3 Type Scale (Website)

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Logo wordmark | JetBrains Mono | 96px (desktop) / 48px (mobile) | 600–800 | Green + Charcoal |
| Tagline | System sans | 18px | 500 | `#999999` |
| Section heading (H2) | System sans | 32–40px | 700 | `#1A1A1A` |
| Subsection heading (H3) | System sans | 20–24px | 600 | `#1A1A1A` |
| Body text | System sans | 16–18px | 400 | `#1A1A1A` or `#333333` |
| Domain / meta | JetBrains Mono | 20px | 500 | `#CCCCCC` |

---

## 5. Website Structure & Content Reference

The current softroni.com has the following pages and sections. Use these as the baseline for any redesign work.

### 5.1 Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero, services overview, process, products preview, about summary, newsletter signup |
| About | `/about.html` | Company story and values |
| Support / Contact | `/support.html` | Contact form and support information |
| Privacy Policy | `/privacy-policy.html` | Legal privacy policy |
| Terms of Service | `/terms-of-service.html` | Legal terms |
| Beside (Product) | `/beside/` | Product landing page for "Beside" — a free body-doubling focus app |

### 5.2 Homepage Sections (Current)

1. **Hero** — "Software for the modern world." with CTA buttons (Start a Project, Learn More)
2. **Services** — Three cards: Mobile Development, Web Platforms, AI & Automation
3. **Process** — Four numbered steps: Discover → Design → Build → Launch
4. **Products** — "Beside" (featured, with 🌿 icon and description), plus placeholder cards for Web Apps and Desktop Apps (both marked "Coming Soon")
5. **About Summary** — "Built on simplicity" block with link to full about page
6. **Newsletter** — Email signup with privacy note
7. **Footer** — Logo, nav links (About, Privacy, Terms, Support), copyright

### 5.3 Navigation

- **Header:** Logo (linked to `/`), About, Support, "Get in Touch" (links to `/support.html`)
- **Footer:** Logo, About, Privacy Policy, Terms of Service, Support

---

## 6. Design Tokens & Spacing

These tokens should be used consistently across the website and any product UI.

### 6.1 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight internal padding |
| `space-sm` | 8px | Icon gaps, compact padding |
| `space-md` | 16px | Default element spacing |
| `space-lg` | 24px | Section internal padding |
| `space-xl` | 40px | Between major sections |
| `space-2xl` | 60px | Hero/section top-bottom padding |
| `space-3xl` | 80–100px | Page-level section separators |

### 6.2 Border Radius

| Element | Radius |
|---------|--------|
| App icons | 18px (at 80px size) |
| Buttons | 8px |
| Cards | 12px |
| Input fields | 8px |
| Tooltips | 6px |

### 6.3 Shadows

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | `0 4px 20px rgba(0,0,0,0.05)` | Light cards, light app icon |
| Medium | `0 4px 20px rgba(0,0,0,0.1)` | Dark cards, dark app icon, elevated elements |
| None | — | Flat UI elements, text sections |

---

## 7. Dark Theme

The brand should support both light and dark modes, respecting the user's system preference via `prefers-color-scheme`. The terminal aesthetic naturally suits dark environments, so the dark theme should feel like the brand's home turf.

### 7.1 Dark Theme Color Mappings

| Role | Light Mode | Dark Mode | Notes |
|------|-----------|-----------|-------|
| Page Background | `#FFFFFF` | `#0A0A0A` | Near-black, not pure black — avoids OLED smearing and feels more refined |
| Surface / Cards | `#FFFFFF` | `#141414` | Slight elevation from background |
| Elevated Surface | `#F9F9F9` | `#1E1E1E` | Modals, dropdowns, hover states |
| Primary Text | `#1A1A1A` | `#E8E8E8` | High contrast but not pure white (reduces eye strain) |
| Secondary Text | `#999999` | `#888888` | Tagline, muted labels |
| Tertiary Text | `#CCCCCC` | `#555555` | Domain display, timestamps |
| Softroni Green | `#00B368` | `#00C878` | Slightly brighter in dark mode for equivalent perceived vibrancy |
| Dividers / Borders | `#F0F0F0` | `#222222` | Subtle separation |
| Tagline Dots | `#DDDDDD` | `#444444` | Middot separators |

### 7.2 Logo in Dark Mode

- **Primary logo:** The chevron `>`, the `S`, and the underscore `_` use `#00C878` (bright green). The `oftroni` text uses `#E8E8E8` (light gray).
- **Compact mark:** Use the dark variant (`#111111` background) as the default in dark mode contexts.
- Do **not** use the light variant app icon on dark backgrounds — the border becomes invisible and the icon floats.

### 7.3 Shadows in Dark Mode

Shadows are barely visible on dark backgrounds. Replace box-shadows with subtle border treatments or lighter surface colors to create elevation.

| Level | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Subtle | `0 4px 20px rgba(0,0,0,0.05)` | `1px solid #222222` (border instead) |
| Medium | `0 4px 20px rgba(0,0,0,0.1)` | `0 4px 20px rgba(0,0,0,0.4)` + `1px solid #2A2A2A` |

### 7.4 Green Accessibility in Dark Mode

- `#00C878` on `#0A0A0A` passes WCAG AA for all text sizes (7.2:1).
- `#00C878` on `#141414` passes WCAG AA for all text sizes (6.1:1).
- This is why the green is bumped slightly brighter in dark mode — the light mode `#00B368` on `#0A0A0A` still passes (6.4:1), but the brighter variant provides more visual pop.

### 7.5 Implementation Notes

- Use CSS custom properties (variables) for all colors so themes can be swapped with a single class or media query.
- Default to the user's system preference: `@media (prefers-color-scheme: dark)`.
- If offering a manual toggle, persist the choice in local storage and apply a `data-theme="dark"` attribute on `<html>`.
- Images, screenshots, and illustrations may need separate light/dark variants or a subtle background treatment to avoid floating on dark surfaces.
- The logo entrance animation (Section 8) works identically in both themes — only the color values change.

### 7.6 Example CSS Variables

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-surface: #FFFFFF;
  --bg-elevated: #F9F9F9;
  --text-primary: #1A1A1A;
  --text-secondary: #999999;
  --text-tertiary: #CCCCCC;
  --accent-green: #00B368;
  --border-subtle: #F0F0F0;
  --dot-color: #DDDDDD;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0A0A0A;
    --bg-surface: #141414;
    --bg-elevated: #1E1E1E;
    --text-primary: #E8E8E8;
    --text-secondary: #888888;
    --text-tertiary: #555555;
    --accent-green: #00C878;
    --border-subtle: #222222;
    --dot-color: #444444;
  }
}
```

---

## 8. Animation Guidelines

The logo has a defined entrance animation sequence. This should be used on the homepage hero or splash screens. It should **not** loop — it plays once on page load.

| Step | Element | Animation | Timing | Delay |
|------|---------|-----------|--------|-------|
| 1 | Chevron `>` | Punch-in (scale 0.5→1, fade) | 0.4s ease-out | 0.2s |
| 2 | `Softroni` text | Typewriter (width 0→8ch, stepped) | 1.0s steps(8) | 0.7s |
| 3 | Underscore `_` | Blink (opacity 1↔0.3) | 1.0s step-end | 1.9s (infinite) |
| 4 | Tagline | Slide up + fade in | 0.6s ease-out | 2.0s |
| 5 | Divider | Scale-X from center | 0.8s ease-out | 2.5s |
| 6 | Bottom row (icons + domain) | Fade in | 0.5s ease-out | 3.0s |

**Rules:**

- The underscore blink is the only infinite animation.
- All other animations play once and settle.
- Respect `prefers-reduced-motion` — if the user prefers reduced motion, skip all entrance animations and show elements in their final state. The underscore blink should also be disabled.

---

## 9. Product Branding: Beside

Beside is the first announced product. It uses a leaf/nature emoji (🌿) as its visual identifier on the current site.

**Product tagline:** "Free body doubling for focus"
**Description:** "The feeling of someone working beside you — no camera, no strangers, no paywall."

When designing the Beside product page or app identity:

- Maintain the Softroni brand system (colors, typography, spacing) as the foundation.
- The product can introduce its own accent color or illustration style, but the Softroni Green and monospace type should remain present in navigation and footer.
- Product icons should use the same 18px corner radius convention.

---

## 10. File Naming & Asset Export

When exporting logo and brand assets, use the following naming convention:

```
softroni-logo-primary-dark.svg
softroni-logo-primary-light.svg
softroni-mark-dark-80.png
softroni-mark-light-80.png
softroni-mark-dark-1024.png    (for App Store)
softroni-mark-light-1024.png
softroni-og-image.png           (1200×630 for social sharing)
```

Export formats:

- **SVG** for all logo and mark variants (scalable, web-ready)
- **PNG** at 1x, 2x, 3x for app icons and raster contexts
- **PDF** for print use

---

## 11. Quick Reference Card

```
Brand:        Softroni
Logo:         >Softroni_
Compact:      >S_
Tagline:      apps · ai · automation
Green:        #00B368
Dark:         #1A1A1A
Typeface:     JetBrains Mono (logo/code) + System sans (body)
Website:      softroni.com
Entity:       SOFTRONI LLC
```

---

*These guidelines are a living document. Update this file as the brand evolves.*
