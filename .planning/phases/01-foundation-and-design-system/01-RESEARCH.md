# Phase 1: Foundation & Design System - Research

**Researched:** 2026-02-06
**Domain:** Astro 5 + Tailwind CSS 4 + Glass Morphism Design System
**Confidence:** HIGH

## Summary

Phase 1 establishes the foundation for a high-performance SaaS landing page using Astro 5.17+ and Tailwind CSS 4 with a glass morphism design system. The research reveals critical accessibility and performance considerations that must be addressed upfront to avoid costly refactoring.

The standard approach for this tech stack is straightforward: Astro's zero-JavaScript static generation pairs with Tailwind CSS 4's new Vite plugin for optimal developer experience and build performance. However, the glass morphism aesthetic introduces significant complexity around accessibility (WCAG 2.2 contrast requirements) and mobile performance (backdrop-filter rendering costs).

Key findings indicate that glass morphism effects must be carefully constrained: blur values should be limited to 6-10px on mobile, contrast ratios must meet 4.5:1 minimums for text, and the `prefers-reduced-transparency` media query must be implemented to respect user accessibility preferences. The research identified that Safari requires `-webkit-` prefixes and renders blur effects differently than Chrome, necessitating cross-browser testing during component development.

**Primary recommendation:** Establish accessibility and performance guardrails as part of the design system foundation (Phase 1 Plan 02) before building any landing page components. Create reusable glass morphism utilities with built-in contrast validation and performance optimizations to prevent technical debt.

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| **Astro** | 5.17+ | Static site framework | Industry-leading performance for content sites. Zero-JS by default, islands architecture for selective hydration. Backed by Cloudflare (acquired Jan 2026). |
| **Tailwind CSS** | 4.0+ | Utility-first CSS framework | New Vite plugin integration replaces old PostCSS approach. Faster builds, better DX. Native support for glass morphism utilities (backdrop-blur, bg-opacity). |
| **Node.js** | 22+ | JavaScript runtime | Astro 5.x minimum is 18.17.1, but Astro 6 (beta) requires 22+. Future-proofing for stability. |
| **TypeScript** | 5.3+ | Type safety | First-class Astro support. Type-safe components and props prevent runtime errors. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **@tailwindcss/vite** | Latest | Tailwind 4 Vite plugin | Required for Tailwind 4 integration. Replaces deprecated @astrojs/tailwind. |
| **astro-icon** | Latest | SVG icon system | Zero runtime cost, 275,000+ icons from popular sets (Lucide, Heroicons). Tree-shakable. |
| **Prettier** | Latest | Code formatting | With prettier-plugin-astro and prettier-plugin-tailwindcss for consistent formatting. |
| **ESLint** | Latest | Linting | With eslint-plugin-astro and eslint-plugin-jsx-a11y for accessibility checks. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Astro | Next.js | Next.js requires React runtime, larger bundles (5-10x). Better if you need complex server-side logic everywhere. Use Astro for content-first sites. |
| Astro | SvelteKit | SvelteKit locks you into Svelte framework. Astro is framework-agnostic. Use SvelteKit if entire app is Svelte-based. |
| Tailwind CSS 4 | Tailwind CSS 3 | v3 uses old PostCSS approach (slower builds). v4 Vite plugin is faster, cleaner. No reason to use v3. |
| Tailwind | CSS-in-JS (Styled Components, Emotion) | Runtime overhead, worse performance. Only use if you need dynamic theming with JS. Tailwind + CSS variables is faster. |

**Installation:**
```bash
# Create Astro project
npm create astro@latest

# Install Tailwind CSS 4 with Vite plugin
npm install tailwindcss @tailwindcss/vite

# Dev dependencies
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss
npm install -D eslint eslint-plugin-astro eslint-plugin-jsx-a11y
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Optional: Icons
npm install astro-icon
```

## Architecture Patterns

### Recommended Project Structure

```
website/
├── public/                    # Static assets (copied as-is)
│   ├── fonts/                # Custom fonts
│   ├── images/               # Static images, favicon
│   └── robots.txt
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Atomic design elements
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Input.astro
│   │   │   └── GlassPanel.astro  # Reusable glass container
│   │   ├── sections/        # Landing page sections
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   └── Pricing.astro
│   │   └── shared/          # Site-wide elements
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       └── Nav.astro
│   ├── layouts/             # Page templates
│   │   └── BaseLayout.astro # HTML shell, meta tags
│   ├── pages/               # Routes (file-based routing)
│   │   └── index.astro      # Landing page
│   ├── styles/              # Global styles
│   │   ├── global.css       # Tailwind import + resets
│   │   ├── theme.css        # CSS variables (colors, spacing)
│   │   └── glass.css        # Glass morphism utilities
│   └── lib/                 # Utilities
│       ├── types.ts         # TypeScript types
│       └── utils.ts         # Helper functions
├── astro.config.mjs         # Astro configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

**Why this structure:**
- `src/pages/` is reserved by Astro for routing
- `src/components/ui/` separates atomic elements from composed sections
- `src/styles/` centralizes global CSS and theme variables
- Keeps glass morphism styles isolated in `glass.css` for easy modification

### Pattern 1: Component Composition

**What:** Build complex UIs by composing small, focused components
**When to use:** Creating reusable sections with varying content
**Example:**
```astro
---
// src/components/sections/Features.astro
import Card from '../ui/Card.astro';
import Icon from '../ui/Icon.astro';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

const { features } = Astro.props;
---

<section class="features">
  <div class="grid gap-6 md:grid-cols-3">
    {features.map(feature => (
      <Card variant="glass">
        <Icon name={feature.icon} class="h-12 w-12 text-electric-cyan" />
        <h3 class="mt-4 text-xl font-semibold">{feature.title}</h3>
        <p class="mt-2 text-gray-300">{feature.description}</p>
      </Card>
    ))}
  </div>
</section>
```

**Source:** [Astro Components Documentation](https://docs.astro.build/en/basics/astro-components/)

### Pattern 2: Layout Inheritance

**What:** Use layouts to wrap pages with common structure (HTML shell, nav, footer)
**When to use:** Every page needs consistent metadata, navigation, and structure
**Example:**
```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="nl" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="stylesheet" href="/src/styles/global.css" />
</head>
<body class="bg-obsidian text-white">
  <slot />
</body>
</html>
```

**Source:** [Astro Layouts Documentation](https://docs.astro.build/en/basics/layouts/)

### Pattern 3: Glass Morphism with Accessibility

**What:** Implement glass effects with WCAG-compliant contrast and user preference support
**When to use:** Any translucent UI element with text content
**Example:**
```css
/* src/styles/glass.css */

/* Base glass effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari */
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Mobile optimization: reduce blur */
@media (max-width: 768px) {
  .glass {
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
}

/* Accessibility: respect user preferences */
@media (prefers-reduced-transparency) {
  .glass {
    background: rgba(255, 255, 255, 0.15); /* More opaque */
    backdrop-filter: none; /* Remove blur */
    -webkit-backdrop-filter: none;
  }
}

/* Ensure text contrast on glass */
.glass-text {
  color: #FFFFFF; /* Pure white for 4.5:1 contrast */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Backup for contrast */
}
```

**Source:** [Glassmorphism Meets Accessibility](https://axesslab.com/glassmorphism-meets-accessibility-can-frosted-glass-be-inclusive/)

### Pattern 4: Tailwind Theme Extension

**What:** Extend Tailwind with custom colors and utilities for design system
**When to use:** Project setup, ensures consistent colors across all components
**Example:**
```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-cyan': '#22D3EE',
        'bright-cobalt': '#3B82F6',
        'deep-midnight': '#1E3A8A',
        'obsidian': '#0F172A'
      },
      backdropBlur: {
        'xs': '2px',  // Subtle, mobile-friendly
        'glass': '10px', // Standard glass effect
      }
    }
  }
};
```

**Source:** [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)

### Anti-Patterns to Avoid

**Anti-Pattern 1: Excessive Backdrop Blur on Mobile**
- **What:** Using backdrop-filter: blur(20px+) without mobile optimization
- **Why bad:** Causes significant performance degradation on low-end Android devices. Janky scrolling, dropped frames, battery drain.
- **Instead:** Limit blur to 6-10px on mobile, use @media queries to reduce or remove blur
- **Detection:** Test with Chrome DevTools CPU throttling (6x slowdown), monitor frame rate during scroll

**Anti-Pattern 2: Ignoring WCAG Contrast Requirements**
- **What:** Placing text directly on translucent glass without contrast validation
- **Why bad:** Fails WCAG 2.2 Level AA (4.5:1 for normal text). Illegible for users with vision impairments.
- **Instead:** Use pure white (#FFFFFF) text on dark glass, add text-shadow for backup, test with contrast checkers
- **Detection:** Use browser DevTools contrast checker, WebAIM Contrast Checker, automated accessibility audits

**Anti-Pattern 3: No Fallback for Reduced Transparency Preference**
- **What:** Glass effects without `@media (prefers-reduced-transparency)` fallback
- **Why bad:** Ignores user accessibility preferences. Users who enable "reduce transparency" in OS settings still see glass effects.
- **Instead:** Provide solid, high-contrast alternative styles in prefers-reduced-transparency media query
- **Detection:** Enable "Reduce transparency" in macOS System Settings > Accessibility > Display, verify glass effects are removed

**Anti-Pattern 4: Hardcoding Content in Components**
- **What:** Embedding Dutch text directly in `.astro` component templates
- **Why bad:** Makes components non-reusable, prevents easy content updates, couples presentation to content
- **Instead:** Pass all content as props or use content collections for scalability
- **Example:**
```astro
<!-- Bad: Hardcoded -->
<h1>Rondo - Sports Club Management</h1>

<!-- Good: Props-based -->
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<h1>{title}</h1>
```

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| **Icon system** | Custom SVG sprite sheets, manual icon imports | `astro-icon` package | Supports 275,000+ icons from popular sets, zero runtime cost, automatic optimization, tree-shaking |
| **Contrast validation** | Manual color testing, eyeballing readability | WebAIM Contrast Checker, automated linting with eslint-plugin-jsx-a11y | WCAG calculations are complex, easy to miss edge cases, automation prevents regressions |
| **Responsive images** | Manual srcset generation, format conversion | Astro's built-in `<Image>` component | Automatic WebP/AVIF conversion, responsive srcset generation, lazy loading, prevents layout shift |
| **Code formatting** | Manual formatting rules, inconsistent style | Prettier with prettier-plugin-astro | Team consistency, prevents bikeshedding, integrates with Astro's unique syntax |
| **Mobile-first breakpoints** | Custom media queries, magic numbers | Tailwind's built-in breakpoints (sm, md, lg, xl, 2xl) | Industry-standard breakpoints, tested across devices, prevents inconsistency |

**Key insight:** Glass morphism accessibility is complex—don't try to solve it ad-hoc in each component. Create reusable utilities with built-in contrast validation and user preference support during Phase 1 design system setup.

## Common Pitfalls

### Pitfall 1: Glass Morphism Accessibility Failure

**What goes wrong:** Text on semi-transparent glass backgrounds fails WCAG 2.2 contrast requirements (4.5:1 for normal text, 3:1 for large/bold). Translucent panes reduce readability to illegibility, especially on dark backgrounds like #0F172A. This is the **most critical pitfall for Phase 1**.

**Why it happens:** Designers prioritize aesthetic over accessibility. Developers assume "it looks fine on my MacBook Pro" without testing contrast ratios or considering users with visual impairments. The frosted glass effect inherently reduces contrast.

**How to avoid:**
1. **Establish contrast standards in Phase 1 Plan 02**: All text on glass must be pure white (#FFFFFF) or have 4.5:1 contrast minimum
2. **Use automated tooling**: Add contrast checks to linting with eslint-plugin-jsx-a11y
3. **Test early and often**: Use WebAIM Contrast Checker during component development
4. **Provide fallbacks**: Implement `@media (prefers-reduced-transparency)` for solid backgrounds
5. **Limit glass usage**: Reserve glass effects for decorative elements or cards with large, bold text (3:1 minimum)

**Warning signs:**
- Text requires squinting to read
- Contrast checker shows ratios below 4.5:1
- Visual hierarchy unclear (can't distinguish interactive from static elements)
- Dark background texture competes with glass blur

**Phase impact:** This must be solved in Phase 1 (Design System) before building landing page components. If deferred, requires refactoring all components later.

**Sources:**
- [Glassmorphism Meets Accessibility - Axess Lab](https://axesslab.com/glassmorphism-meets-accessibility-can-frosted-glass-be-inclusive/)
- [Glassmorphism Best Practices - NN/G](https://www.nngroup.com/articles/glassmorphism/)
- [WCAG Color Contrast Guide](https://www.webability.io/blog/color-contrast-for-accessibility)

### Pitfall 2: Mobile Performance Degradation from Backdrop-Filter

**What goes wrong:** Heavy use of `backdrop-filter: blur()` causes janky scrolling, dropped frames, and poor perceived performance on mobile devices (especially mid-range Android phones). Page feels sluggish despite fast load times.

**Why it happens:** `backdrop-filter` is computationally expensive—requires real-time processing of everything behind the glass element. Each glass element adds GPU load. Developers test on high-end laptops where performance seems fine, missing degradation on target devices.

**How to avoid:**
1. **Set performance budgets in Phase 1**: Limit glass effects to 3-5 elements per viewport maximum
2. **Reduce blur on mobile**: Use @media queries to reduce blur from 10px to 6px on screens <768px
3. **Test on real devices**: Don't rely on DevTools device emulation—test on actual mid-range Android phones
4. **Use will-change sparingly**: Only add `will-change: backdrop-filter` to elements that will animate
5. **Consider removing glass on mobile**: Provide solid backgrounds with same colors for mobile users

**Detection:**
- Chrome DevTools Performance panel shows dropped frames during scroll
- CPU throttling (6x slowdown) reveals stuttering
- Lighthouse Performance score <90 on mobile
- Frame rate drops below 60fps during scrolling

**Phase impact:** Must be addressed in Phase 1 (Design System) by establishing mobile-specific glass utilities with reduced blur values.

**Sources:**
- [CSS Backdrop Filter Performance](https://codelucky.com/css-backdrop-filter/)
- [Backdrop Filter Blur Performance](https://tailwindcss.com/docs/backdrop-filter-blur)

### Pitfall 3: Node.js Version Mismatch on Cloudflare Pages

**What goes wrong:** Cloudflare Pages uses default Node.js version (18.17.1), but Astro 5.x works better with Node 20+, and Astro 6 requires Node 22+. Builds fail with cryptic errors about unsupported Node APIs.

**Why it happens:** Developers don't explicitly set `NODE_VERSION` environment variable in Cloudflare Pages settings. Local development uses newer Node (22+) but Cloudflare deployment breaks due to version mismatch.

**How to avoid:**
1. **Set NODE_VERSION immediately in Phase 1 Plan 01**: Add `NODE_VERSION=22` environment variable in Cloudflare Pages dashboard (Settings > Environment variables)
2. **Add .nvmrc file**: Create `.nvmrc` with `22` in project root for local dev consistency
3. **Document in package.json**: Add `"engines": { "node": ">=22.0.0" }` to package.json
4. **Pin specific version**: Use `22.11.0` instead of `22` to prevent unexpected updates

**Detection:**
- Build logs show unexpected Node version
- Errors mention "unsupported Node API" or "require is not defined"
- Local builds succeed but Cloudflare deployments fail

**Phase impact:** Must be configured during Phase 1 Plan 01 (Project Setup) before first deployment.

**Sources:**
- [Astro Cloudflare Deployment](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Build Configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Astro 6 Node Requirements](https://www.infoq.com/news/2026/02/astro-v6-beta-cloudflare/)

### Pitfall 4: Safari Rendering Differences for Backdrop-Filter

**What goes wrong:** Glass morphism effects look correct in Chrome/Firefox but appear differently in Safari (both desktop and iOS). Colors more saturated, blur radius feels stronger, opacity behaves unexpectedly.

**Why it happens:** Safari requires `-webkit-backdrop-filter` prefix and has different rendering engine behavior for compositing translucent layers. Developers only test in Chrome.

**How to avoid:**
1. **Always use both prefixed and unprefixed properties**: `-webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px);`
2. **Test in Safari during development**: Don't wait until deployment—Safari is ~50% of mobile users
3. **Provide fallback**: Use `@supports not (backdrop-filter: blur(10px))` for browsers without support
4. **Consider Safari-specific adjustments**: May need slightly different blur values using feature detection

**Detection:**
- Glass effects look different between Chrome and Safari
- Backdrop blur not working at all in Safari (missing -webkit- prefix)
- Colors appear more saturated in Safari than design mockups

**Phase impact:** Must be addressed in Phase 1 Plan 02 (Design System) when creating glass utilities.

**Sources:**
- [Safari Blur Performance Fix](https://graffino.com/til/how-to-fix-filter-blur-performance-issue-in-safari)
- [Backdrop Filter Browser Support](https://caniuse.com/css-backdrop-filter)

### Pitfall 5: Tailwind 4 Integration Confusion

**What goes wrong:** Developers use deprecated `@astrojs/tailwind` integration instead of new `@tailwindcss/vite` plugin. This causes slower builds, configuration issues, or build failures.

**Why it happens:** Following outdated tutorials or documentation. The `@astrojs/tailwind` package still exists for backward compatibility but is no longer recommended for Tailwind 4.

**How to avoid:**
1. **Use official Tailwind CSS 4 installation guide**: Follow [tailwindcss.com/docs/installation/framework-guides/astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
2. **Install @tailwindcss/vite, not @astrojs/tailwind**: `npm install tailwindcss @tailwindcss/vite`
3. **Add Vite plugin to astro.config.mjs**: Use `vite.plugins: [tailwindcss()]` in config
4. **Import in CSS, not config**: Use `@import "tailwindcss"` in global.css instead of old `@tailwind` directives

**Detection:**
- Build times slower than expected
- Warnings about deprecated integrations
- Tailwind classes not applying correctly
- Looking for `tailwind.config.js` when it's no longer required for v4

**Phase impact:** Must be done correctly in Phase 1 Plan 01 (Project Setup). Migrating later is painful.

**Sources:**
- [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Astro + Tailwind v4 Setup Guide](https://tailkits.com/blog/astro-tailwind-setup/)
- [How to Use Tailwind CSS v4 in Astro](https://dipankarmaikap.com/how-to-use-tailwind-css-v4-in-astro/)

## Code Examples

Verified patterns from official sources:

### Example 1: Astro Config with Tailwind 4 Vite Plugin

```javascript
// astro.config.mjs
// Source: https://tailwindcss.com/docs/installation/framework-guides/astro

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Example 2: Global CSS with Tailwind Import

```css
/* src/styles/global.css */
/* Source: https://tailwindcss.com/docs/installation/framework-guides/astro */

@import "tailwindcss";

/* Custom base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Example 3: Accessible Glass Morphism Card Component

```astro
---
// src/components/ui/GlassCard.astro
// Source: Research synthesis from accessibility guidelines

interface Props {
  variant?: 'default' | 'solid';
  class?: string;
}

const { variant = 'default', class: className = '' } = Astro.props;
---

<div class={`glass-card glass-card--${variant} ${className}`}>
  <slot />
</div>

<style>
  .glass-card {
    padding: 2rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
  }

  /* Default: Glass morphism with accessibility */
  .glass-card--default {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }

  /* Mobile: Reduce blur for performance */
  @media (max-width: 768px) {
    .glass-card--default {
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }
  }

  /* Accessibility: Respect user preference */
  @media (prefers-reduced-transparency) {
    .glass-card--default {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }

  /* Solid variant: No transparency */
  .glass-card--solid {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Fallback for browsers without backdrop-filter support */
  @supports not (backdrop-filter: blur(10px)) {
    .glass-card--default {
      background: rgba(255, 255, 255, 0.15);
    }
  }
</style>
```

### Example 4: Button Component with Glass Variant

```astro
---
// src/components/ui/Button.astro

interface Props {
  variant?: 'primary' | 'secondary' | 'glass';
  href?: string;
  class?: string;
}

const { variant = 'primary', href, class: className = '' } = Astro.props;
const Tag = href ? 'a' : 'button';
---

<Tag
  href={href}
  class={`btn btn--${variant} ${className}`}
>
  <slot />
</Tag>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none;
    border: none;
    cursor: pointer;
  }

  /* Primary: Solid electric cyan */
  .btn--primary {
    background: #22D3EE;
    color: #0F172A;
  }

  .btn--primary:hover {
    background: #06B6D4;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(34, 211, 238, 0.3);
  }

  /* Secondary: Solid bright cobalt */
  .btn--secondary {
    background: #3B82F6;
    color: #FFFFFF;
  }

  .btn--secondary:hover {
    background: #2563EB;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }

  /* Glass: Translucent with glass effect */
  .btn--glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
  }

  .btn--glass:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  /* Accessibility: Remove glass effect if user prefers */
  @media (prefers-reduced-transparency) {
    .btn--glass {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }
</style>
```

### Example 5: Responsive Base Layout

```astro
---
// src/layouts/BaseLayout.astro
// Source: https://docs.astro.build/en/basics/layouts/

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="nl" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Preload critical fonts -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin />

  <!-- Global styles -->
  <link rel="stylesheet" href="/src/styles/global.css" />
</head>
<body class="min-h-screen bg-obsidian text-white antialiased">
  <slot />
</body>
</html>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| **Tailwind via PostCSS** | Tailwind via Vite plugin (`@tailwindcss/vite`) | Tailwind CSS 4 (2024) | Faster builds, cleaner config, better DX |
| **@astrojs/tailwind integration** | Direct Vite plugin import | Tailwind CSS 4 release | Official integration deprecated for v4 |
| **Glassmorphism without accessibility** | Glass effects with WCAG compliance, prefers-reduced-transparency | WCAG 2.2 (2023) | Required for accessibility compliance |
| **Manual environment config** | Astro 6 workerd runtime dev server | Astro 6 Beta (Jan 2026) | Dev/prod parity for Cloudflare Workers |
| **Astro on Vercel/Netlify** | Astro on Cloudflare Pages | Cloudflare acquired Astro (Jan 2026) | First-class integration, better performance |

**Deprecated/outdated:**
- **@astrojs/tailwind package for Tailwind 4**: Deprecated. Use `@tailwindcss/vite` plugin instead.
- **tailwind.config.js required**: Optional in Tailwind 4. Can configure via CSS with `@theme` directive.
- **@tailwind directives in CSS**: Replaced with `@import "tailwindcss"` in Tailwind 4.
- **Astro 4.x**: Use Astro 5.17+ for better performance (5x faster Markdown, 2x faster MDX).

## Open Questions

Things that couldn't be fully resolved:

1. **Logo File Availability**
   - What we know: User mentioned need for Rondo logo file in STATE.md blockers
   - What's unclear: Whether logo exists, format (SVG preferred), when it will be available
   - Recommendation: Ask user for logo file before starting Phase 1 Plan 02 (Header component). Use placeholder text if logo not ready, but plan for logo integration.

2. **Exact Blur Values for Optimal Mobile Performance**
   - What we know: Research suggests 6-10px for mobile, 10-20px for desktop. Higher values cause performance issues.
   - What's unclear: What blur value provides best aesthetic/performance balance for Rondo's specific design on target devices
   - Recommendation: Start with 6px mobile, 10px desktop. Test on real devices during Phase 1, adjust based on performance metrics.

3. **Level of Glass Morphism Saturation**
   - What we know: Glass effects should be reserved for decorative elements or cards with large text
   - What's unclear: How many glass elements is "too many" for Rondo landing page specifically
   - Recommendation: Establish guideline of 3-5 glass elements per viewport max during Phase 1. Use solid variants for less important elements.

4. **Analytics Integration Timing**
   - What we know: TECH-04 requires Plausible analytics, but it's Phase 4 requirement
   - What's unclear: Whether analytics script should be in base layout from Phase 1 (easier) or added later (cleaner separation)
   - Recommendation: Add analytics script hook to BaseLayout.astro in Phase 1 (commented out), activate in Phase 4. Prevents layout changes later.

## Sources

### Primary (HIGH confidence)

**Astro Documentation:**
- [Astro Project Structure](https://docs.astro.build/en/basics/project-structure/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Astro Layouts](https://docs.astro.build/en/basics/layouts/)
- [Deploy to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)

**Tailwind CSS:**
- [Install Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Backdrop Blur Utilities](https://tailwindcss.com/docs/backdrop-filter-blur)

**Cloudflare:**
- [Astro on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Build Configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)

**Official Announcements:**
- [What's New in Astro - January 2026](https://astro.build/blog/whats-new-january-2026/)
- [Astro 6 Beta Announcement](https://astro.build/blog/astro-6-beta/)
- [Astro Joins Cloudflare](https://www.infoq.com/news/2026/02/astro-v6-beta-cloudflare/)

### Secondary (MEDIUM confidence)

**Glass Morphism Accessibility:**
- [Glassmorphism Meets Accessibility - Axess Lab](https://axesslab.com/glassmorphism-meets-accessibility-can-frosted-glass-be-inclusive/)
- [Glassmorphism Best Practices - NN/G](https://www.nngroup.com/articles/glassmorphism/)
- [Glassmorphism with Website Accessibility - New Target](https://www.newtarget.com/web-insights-blog/glassmorphism/)

**WCAG Standards:**
- [WCAG Color Contrast Guide 2026](https://www.webability.io/blog/color-contrast-for-accessibility)
- [WCAG Contrast Requirements - WebAIM](https://webaim.org/articles/contrast/)

**Implementation Guides:**
- [Astro + Tailwind v4 Setup: 2026 Quick Guide](https://tailkits.com/blog/astro-tailwind-setup/)
- [How to Use Tailwind CSS v4 in Astro](https://dipankarmaikap.com/how-to-use-tailwind-css-v4-in-astro/)
- [Glassmorphism with Tailwind CSS - FlyOnUI](https://flyonui.com/blog/glassmorphism-with-tailwind-css/)

**Performance:**
- [CSS Backdrop Filter Complete Guide](https://codelucky.com/css-backdrop-filter/)
- [Safari Blur Performance Fix](https://graffino.com/til/how-to-fix-filter-blur-performance-issue-in-safari)

**Responsive Design:**
- [Best Practices for File Organization in Astro.js](https://tillitsdone.com/blogs/astro-js-file-organization-guide/)

**Accessibility Media Queries:**
- [prefers-reduced-transparency - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- [CSS prefers-reduced-transparency - Chrome Developers](https://developer.chrome.com/blog/css-prefers-reduced-transparency)

### Tertiary (LOW confidence)

- Community discussions and GitHub issues (referenced in pitfalls but not used as primary sources)

## Metadata

**Confidence breakdown:**
- **Standard stack:** HIGH - Official Astro and Tailwind documentation, verified versions, widely adopted pattern
- **Architecture:** HIGH - Based on official Astro project structure docs and community best practices
- **Glass morphism accessibility:** HIGH - Multiple authoritative sources (NN/G, Axess Lab, WCAG standards) confirm requirements
- **Performance pitfalls:** MEDIUM - Based on web search findings and community reports, verified with official docs where possible
- **Deployment configuration:** MEDIUM - Official Cloudflare docs confirm basics, but Node version specifics based on general guidance

**Research date:** 2026-02-06
**Valid until:** ~30 days (March 2026) for stable technologies (Astro 5, Tailwind 4). Astro 6 beta may stabilize sooner—revalidate if using Astro 6 features.

**Key research limitations:**
- No direct access to Context7 for library-specific queries (used web search + official docs instead)
- Glass morphism performance optimization values (blur radius) are general best practices, not Rondo-specific testing
- Cloudflare Pages NODE_VERSION requirement inferred from Astro requirements, not explicitly documented
- User accessibility testing (screen readers, low vision) not performed—recommendations based on WCAG standards only
