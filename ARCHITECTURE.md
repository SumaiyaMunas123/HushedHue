# Hushed Hue — Architecture

Next.js App Router site, static content, no backend. Deploy target: Vercel.

## Stack

- **Next.js 15** (App Router) + TypeScript (`strict`)
- **Tailwind CSS v4** — tokens in `globals.css` via `@theme`
- **Motion** — UI animation
- **Lenis** — smooth scroll (`SmoothScroll` provider)
- **GSAP + ScrollTrigger** — horizontal process timeline scrub only
- **OGL** — hero shader (dynamic import, CSS fallback)
- **next/font** — Fraunces, Figtree
- **next/og** — `src/app/opengraph-image.tsx`

## Folder layout

```
src/
  app/
    layout.tsx          # fonts, metadata, providers
    page.tsx            # composes all sections
    globals.css         # tokens, grain, dusk, utilities
    opengraph-image.tsx
    work/[slug]/page.tsx
  content/              # typed data (no CMS)
    site.ts
    services.ts
    offerings.ts
    palettes.ts
    work.ts
    process.ts
    about.ts
    journal.ts
  components/
    providers/
      AppProviders.tsx  # Lenis, palette, cursor gate
    layout/
      IntroLoader.tsx
      DuskScrollBackground.tsx
      CustomCursor.tsx
      SiteHeader.tsx
    ui/
      Section.tsx
      GlassCard.tsx
      Button.tsx
      RevealText.tsx
      Toast.tsx
    sections/           # one file per homepage section
    hero/
      HeroShader.tsx    # OGL (client, lazy)
    work/
      PhoneMockup.tsx
  lib/
    palette-utils.ts    # HSL harmonious shuffle
    hooks.ts            # reduced motion, touch, toast
```

## Content model

- **`site.ts`**: name, tagline, email, social URLs, meta defaults.
- **`palettes.ts`**: curated palettes → maps to CSS variable overrides on `<html>`.
- **`work.ts`**: case studies with slug, gradient art, problem / approach / result copy.

## Runtime features

1. **Intro loader** — sessionStorage flag; fades wordmark; skipped with `prefers-reduced-motion`.
2. **Palette Lab** — `PaletteProvider` sets `data-palette` + CSS vars; swatch click copies hex + toast.
3. **Dusk scroll** — `DuskScrollBackground` updates `--dusk-progress` from scroll.
4. **Custom cursor** — client canvas trail; off on touch / reduced motion.

## Quality

- Semantic landmarks (`header`, `main`, `footer`, `section` + `aria-labelledby`).
- Focus rings: `focus-visible:outline-2 outline-offset-2`.
- Heavy clients: `dynamic(..., { ssr: false })` for OGL, cursor, GSAP section.
