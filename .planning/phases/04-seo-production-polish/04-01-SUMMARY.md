---
phase: 04-seo-production-polish
plan: 01
subsystem: seo
tags: [astro-seo, plausible, json-ld, schema-dts, sitemap, opengraph, a11y, cloudflare]

# Dependency graph
requires:
  - phase: 01-foundation-design-system
    provides: "Glass morphism components, Astro + Tailwind setup, BaseLayout"
  - phase: 02-landing-page-sections
    provides: "Complete landing page content (hero, products, pricing)"
  - phase: 03-contact-form-integration
    provides: "Contact form with server-side handling"
provides:
  - "SEO meta tags (title, description, OpenGraph, Twitter Card)"
  - "JSON-LD structured data (Organization, SoftwareApplication)"
  - "Plausible analytics with ContactFormSubmit conversion tracking"
  - "XML sitemap and robots.txt generation"
  - "Skip link for keyboard accessibility"
  - "prefers-reduced-motion global CSS"
  - "Cloudflare security headers"
  - "Branded OG image (1200x630px)"
affects: []

# Tech tracking
tech-stack:
  added: ["@astrojs/sitemap", "astro-seo", "astro-robots-txt", "schema-dts"]
  patterns: ["Centralized SEO metadata in src/data/", "JSON-LD via set:html in Astro"]

key-files:
  created: ["src/data/siteMetadata.ts", "src/data/structuredData.ts", "public/_headers", "public/og-image.png", "scripts/generate-og-image.mjs"]
  modified: ["astro.config.mjs", "src/layouts/BaseLayout.astro", "src/pages/index.astro", "src/components/sections/ContactForm.astro", "src/styles/global.css", "package.json"]

key-decisions:
  - "astro-seo for meta tags over manual <meta> — validates OG properties, prevents duplicates"
  - "schema-dts for JSON-LD type safety over plain objects"
  - "astro-robots-txt integration over static robots.txt — auto-links sitemap"
  - "Global prefers-reduced-motion with * selector — catches all component transitions without per-component changes"
  - "Sharp SVG composite for OG image generation — no extra font libraries needed"

patterns-established:
  - "SEO constants centralized in src/data/siteMetadata.ts"
  - "Structured data schemas in src/data/structuredData.ts"
  - "Plausible custom events via window.plausible() with props"

# Metrics
duration: 3min
completed: 2026-02-07
---

# Phase 4 Plan 1: SEO & Production Polish Summary

**Product-focused SEO with astro-seo OpenGraph/JSON-LD, Plausible analytics with form conversion tracking, skip link accessibility, and Cloudflare security headers**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-02-07T11:42:00Z
- **Completed:** 2026-02-07T11:45:54Z
- **Tasks:** 3 (2 auto + 1 checkpoint)
- **Files modified:** 12

## Accomplishments
- Full SEO head with product-focused Dutch title/description, OpenGraph, Twitter Card via astro-seo
- JSON-LD structured data for Organization and SoftwareApplication schemas
- Plausible analytics integrated with ContactFormSubmit custom conversion event
- XML sitemap and robots.txt generated at build time via Astro integrations
- Skip link "Spring naar hoofdinhoud" for keyboard navigation
- prefers-reduced-motion global CSS disables all transitions/animations
- Cloudflare Pages security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Branded OG image (1200x630px, obsidian background with logo and tagline)

## Task Commits

Each task was committed atomically:

1. **Task 1: Install packages, create data files, configure Astro and Cloudflare** - `48cccbc` (chore)
2. **Task 2: Update templates with SEO, analytics, accessibility, and reduced-motion** - `3380339` (feat)
3. **Task 3: Human verification checkpoint** - approved by user

## Files Created/Modified
- `astro.config.mjs` - Added site URL, sitemap and robotsTxt integrations
- `package.json` - Added @astrojs/sitemap, astro-seo, astro-robots-txt, schema-dts
- `src/data/siteMetadata.ts` - Centralized SEO constants (title, description, OG image, locale)
- `src/data/structuredData.ts` - JSON-LD schemas for Organization and SoftwareApplication
- `public/_headers` - Cloudflare Pages security and caching headers
- `public/og-image.png` - Branded 1200x630px OG image
- `scripts/generate-og-image.mjs` - One-off script to generate OG image via sharp
- `src/layouts/BaseLayout.astro` - SEO component, JSON-LD, Plausible, skip link
- `src/pages/index.astro` - Default SEO metadata, main-content id
- `src/components/sections/ContactForm.astro` - Plausible ContactFormSubmit event
- `src/styles/global.css` - prefers-reduced-motion media query

## Decisions Made
- Used astro-seo component over manual meta tags for OpenGraph validation
- Used schema-dts for type-safe JSON-LD over plain objects
- Used astro-robots-txt integration over static robots.txt for auto-linking sitemap
- Global * selector with prefers-reduced-motion to catch all component transitions
- Sharp SVG composite approach for OG image generation (no extra font dependencies)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 4 is the final phase — milestone complete after verification
- All v1 requirements addressed

---
*Phase: 04-seo-production-polish*
*Completed: 2026-02-07*
