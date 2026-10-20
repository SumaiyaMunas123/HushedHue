# Hushed Hue — Design System

Colour, softly spoken. The visual language is **sunset in grey**: muted, smoky, hazy, never neon. Quiet maximalism — rich texture and motion, restrained palette.

## Color tokens

All tokens are CSS custom properties on `:root` (see `src/app/globals.css`). Hex values are the source of truth.

| Token | Hex | Role |
| --- | --- | --- |
| `--color-graphite` | `#2B2A2D` | Primary text, dark surfaces |
| `--color-smoke` | `#6F6A6C` | Secondary text, icons |
| `--color-mist` | `#B9B2B0` | Borders, subtle fills |
| `--color-grey-rose` | `#C9A3A0` | Accent, soft highlight |
| `--color-dusk-red` | `#A8564F` | Strong accent, dusk depth |
| `--color-ember` | `#C98B6B` | Warm accent |
| `--color-peach-haze` | `#F1DCCB` | Soft surfaces |
| `--color-cream` | `#F7EFE8` | Page background |

### Gradient system

- **Brand mesh**: mist → grey-rose → ember → peach-haze (hero, cards, placeholders).
- **Dusk scroll**: background interpolates from pastel dawn (cream / peach-haze) at the top toward smoky dusk-red and graphite tint at the bottom, driven by `--dusk-progress` (0–1).
- **Grain**: SVG noise overlay at ~4–6% opacity on gradient surfaces (no raster assets).

### Contrast (WCAG AA)

- Body copy: graphite on cream (~11:1).
- Secondary: smoke on cream (~4.6:1) — use for captions ≥14px or bump weight; primary UI labels stay graphite.
- On dark scrims (process timeline): cream or peach-haze on graphite-tinted panels with verified contrast ≥4.5:1.

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | **Fraunces** (`next/font`) | `opsz` 9–144, `SOFT` 100, `WONK` 1 for warm curves; italic for emphasis |
| Body / UI | **Figtree** | Clean, friendly; fallback DM Sans not loaded to limit font payload |

### Type scale (rem / line-height)

- `display-xl`:  clamp(3rem, 8vw, 6.5rem) / 1.05 — hero
- `display-lg`: clamp(2.25rem, 5vw, 4rem) / 1.1 — section titles
- `title`: 1.5rem / 1.25
- `body-lg`: 1.125rem / 1.65
- `body`: 1rem / 1.7
- `caption`: 0.875rem / 1.5 — smoke colour

**Principles:** generous whitespace, no all-caps paragraphs, letter-spacing animates subtly on display hover (+0.02em max).

## Spacing & layout

- Base unit: **4px**. Common steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Max content width: **72rem** (`max-w-6xl` / custom `--page-max`).
- Section vertical rhythm: **6–8rem** desktop, **4–5rem** mobile.
- **Bento grid**: 12-column mental model; cards `rounded-3xl` (24px) to `rounded-[2rem]`.
- **Glass surfaces**: `backdrop-blur-xl`, 1px border `color-mix(in srgb, var(--color-mist) 40%, transparent)`, inner shadow `inset 0 1px 0 color-mix(in srgb, white 35%, transparent)`.

## Motion

| Pattern | Tool | Reduced motion |
| --- | --- | --- |
| Page enter, hovers | Motion (Framer) | Instant / opacity only |
| Smooth scroll | Lenis | Native scroll |
| Process timeline scrub | GSAP ScrollTrigger | Static stepped layout |
| Hero gradient | OGL shader | CSS gradient fallback |
| Cursor trail | Canvas 2D | Disabled |
| Loader | CSS + Motion | Skip animation |

**Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (soft out). Durations: 0.4–0.9s for reveals; marquee linear infinite slow.

## Voice

Warm, brief, human. Short sentences. Examples: *Colour, softly spoken.* / *We make quiet things that get noticed.*
