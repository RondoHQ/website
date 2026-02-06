# Stack Research: Rondo Website

**Project:** Rondo SaaS Landing Page
**Researched:** 2026-02-06
**Overall confidence:** HIGH

## Executive Summary

The recommended stack for building a modern SaaS landing page in 2026 leverages Astro 5.17+ with Cloudflare Pages deployment. This combination provides exceptional performance, SEO capabilities, and developer experience. With Cloudflare's acquisition of Astro in January 2026, the Astro-Cloudflare integration has become first-class, with Astro 6 Beta introducing workerd runtime support for local development that mirrors production deployment.

The stack prioritizes:
- **Performance**: Sub-second load times through static generation and minimal JavaScript
- **Developer Experience**: Type-safe components, hot module replacement, and modern tooling
- **Styling Flexibility**: Tailwind CSS 4's new Vite plugin approach for glass morphism designs
- **Production Readiness**: First-class Cloudflare Pages support with zero-config deployment

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Astro** | 5.17+ | Web framework | Content-focused static site generation with islands architecture for selective hydration. As of Feb 2026, Astro is the fastest-growing framework for content sites. 5x faster Markdown builds, 2x faster MDX, 25-50% less memory vs v4. |
| **Node.js** | 20+ LTS | Runtime | Required for build process and development server. Astro 5+ requires Node 18.17.1 or newer, recommend 20+ for long-term stability. |
| **TypeScript** | 5.3+ | Type safety | First-class Astro support for type-safe components, content collections, and configuration. |

**Why Astro over alternatives:**
- **vs Next.js**: Better for static content sites. No React runtime shipped to client by default. 5-10x smaller JavaScript bundles.
- **vs SvelteKit**: Simpler architecture for landing pages. No framework lock-in — use any UI framework or none at all.
- **vs Gatsby**: Modern architecture, actively developed (backed by Cloudflare as of Jan 2026), faster builds, better DX.

### Styling

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Tailwind CSS** | 4.0+ | Utility-first CSS | New Vite plugin integration (`@tailwindcss/vite`) replaces old PostCSS approach. Native Astro 5.2+ support. Perfect for glass morphism with backdrop-blur and gradient utilities. |
| **prettier-plugin-tailwindcss** | Latest | Class sorting | Automatic class ordering for consistency. Works with Astro files. |

**Glass Morphism Implementation:**
- Tailwind's `backdrop-blur-*`, `bg-opacity-*`, and gradient utilities handle the glass aesthetic
- Custom CSS variables for Electric Cyan (#22D3EE), Bright Cobalt (#3B82F6), Deep Midnight Blue (#1E3A8A), Obsidian (#0F172A)
- No additional CSS framework needed

**Why Tailwind 4 over alternatives:**
- **vs Tailwind 3**: Native Vite plugin (faster), improved DX, better tree-shaking
- **vs CSS-in-JS**: Zero runtime overhead, better performance, simpler mental model for landing pages
- **vs CSS Modules**: Faster development with utility classes, better for rapid iteration

### Components & UI

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Astro Components** | Built-in | Page structure | Default for all static content. Use `.astro` files for everything that doesn't need client-side interactivity. |
| **View Transitions** | Built-in | Page animations | Built-in Astro feature for smooth page transitions. Includes fade, slide options. Use for navigation between pages. |
| **astro-icon** | Latest | Icon system | Inline SVG icons from 275,000+ open source sets (including Lucide, Heroicons, Phosphor). Zero runtime, tree-shakable. |
| **@astrojs/image** or **astro:assets** | Built-in | Image optimization | Built-in image optimization with automatic format conversion (WebP/AVIF), responsive images, lazy loading. |

**Why minimal JavaScript approach:**
- Landing pages rarely need client-side frameworks
- Better Core Web Vitals (especially LCP, FID)
- Faster time-to-interactive
- Lower hosting costs (smaller assets)

**For interactive elements (if needed):**
- Use Astro islands with `client:load` or `client:visible` directives
- Prefer vanilla JS or Alpine.js over React/Vue for simple interactions
- Only hydrate what needs interactivity

### Form Handling

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Astro Actions** | Built-in (4.15+) | Form submission | Server-side form handling with built-in validation. Zero client JavaScript required. Type-safe with astro:schema. |
| **Zod** | 3.22+ | Schema validation | Industry-standard validation library. Powers astro:schema. Type-safe runtime validation. |
| **Cloudflare Workers** | Runtime | Form processing | Process forms on Cloudflare's edge network. Low latency, built-in rate limiting via Cloudflare. |

**Form Submission Flow:**
```
Contact Form (HTML)
  → Astro Action (server-side)
  → Zod validation
  → Cloudflare Workers (email/API)
  → Success/error response
```

**Why Astro Actions over alternatives:**
- **vs Client-side only**: Server-side validation prevents malicious submissions, works without JavaScript
- **vs API routes**: Actions provide better type safety, automatic validation, simpler mental model
- **vs Third-party forms**: No vendor lock-in, no monthly costs, full control over UX

**For email delivery:**
- Cloudflare Workers with Mailgun/SendGrid/Postmark API
- Or Cloudflare Email Routing (free for custom domains)

### Deployment

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **Cloudflare Pages** | Current | Hosting platform | First-class Astro support. Free tier includes unlimited bandwidth, 500 builds/month. Global CDN with 310+ cities. Sub-50ms TTFB globally. |
| **@astrojs/cloudflare** | Latest | SSR adapter | Official adapter for Cloudflare Pages Functions. Supports SSR, API routes, edge middleware. |
| **Git Integration** | Built-in | CI/CD | Automatic deployments from GitHub/GitLab. Preview deployments for PRs. Zero-config. |
| **Wrangler CLI** | Latest | Local development | Cloudflare's CLI for local testing with Workers runtime. Mirrors production environment. |

**Deployment Configuration:**
```bash
# Build command
npm run build

# Output directory
dist

# Environment
Node 20
```

**Why Cloudflare Pages over alternatives:**
- **vs Vercel**: No bandwidth costs, unlimited free tier, faster global edge network
- **vs Netlify**: Better Astro integration (Cloudflare acquired Astro Jan 2026), lower latency
- **vs Self-hosted**: Zero DevOps overhead, automatic SSL, DDoS protection, instant cache invalidation

**Astro 6 Advantage:**
- With Astro 6 Beta (coming Q1 2026), `astro dev` runs locally using workerd runtime
- Development environment matches production Cloudflare Workers exactly
- Catch runtime errors before deployment

### Dev Tooling

| Tool | Version | Purpose | Configuration |
|------|---------|---------|---------------|
| **eslint-plugin-astro** | Latest | Linting Astro files | Astro-specific rules, JSX-a11y for accessibility |
| **Prettier** | Latest | Code formatting | With `prettier-plugin-astro` for .astro files |
| **typescript-eslint** | 7+ | TypeScript linting | Type-aware rules for .ts/.astro files |
| **@astrojs/check** | Built-in | Type checking | CLI for checking TypeScript errors in Astro components |
| **Vite** | 6+ | Build tool | Astro uses Vite under the hood. Fast HMR, optimized builds |

**Recommended npm scripts:**
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "lint": "eslint . --ext .astro,.ts,.js",
    "format": "prettier --write \"**/*.{astro,ts,js,json,md}\""
  }
}
```

### SEO & Analytics

| Technology | Version | Purpose | Rationale |
|------------|---------|---------|-----------|
| **astro-seo** | Latest | Meta tags | Comprehensive SEO component for title, description, OpenGraph, Twitter cards. Single component replaces dozens of manual meta tags. |
| **astro-sitemap** | Built-in | XML sitemap | Automatic sitemap generation. First-party integration. |
| **Cloudflare Web Analytics** | Runtime | Privacy-first analytics | Free, GDPR-compliant, no cookie banner needed. Sub-1KB script. Direct integration for Cloudflare Pages. |
| **astro-robots-txt** | Latest | robots.txt | Automatic robots.txt generation with customizable rules. |

**OpenGraph Image Specs:**
- 1200x630px for Facebook/LinkedIn
- 1200x675px for Twitter
- Under 300KB for WhatsApp
- Use `astro-opengraph-images` for dynamic generation if needed

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Motion One** | Latest | Animations | If glass morphism needs scroll-triggered animations. Lightweight alternative to GSAP. Works with Astro islands. |
| **Zod** | 3.22+ | Runtime validation | Forms, API responses, content collection schemas. Required by Astro Actions. |
| **date-fns** | Latest | Date formatting | If displaying dates (blog posts, pricing updates). Tree-shakable, smaller than Moment.js. |

## What NOT to Use

### Avoid

| Technology | Why Avoid | Use Instead |
|------------|-----------|-------------|
| **React/Vue/Svelte for entire site** | Unnecessary JavaScript overhead for static landing page. Slower performance, worse Core Web Vitals. | Astro components. Add framework islands only for truly interactive parts. |
| **Tailwind 3 or earlier** | Old PostCSS approach. Slower builds, worse DX. | Tailwind CSS 4 with `@tailwindcss/vite` plugin |
| **`@astrojs/tailwind` integration** | Deprecated for Tailwind 4. Official docs now recommend direct Vite plugin. | `@tailwindcss/vite` in astro.config |
| **jQuery** | Ancient. No longer needed for DOM manipulation. Huge bundle size. | Vanilla JS or Alpine.js if absolutely needed |
| **Styled Components / Emotion** | Runtime CSS-in-JS hurts performance. Unnecessary complexity for landing pages. | Tailwind utilities + CSS variables |
| **Vercel's OG Image Generation** | Vendor lock-in. Only works on Vercel. | `astro-opengraph-images` (works anywhere) |
| **Client-side form libraries** | Unnecessary JavaScript. Forms work without JS using Astro Actions. | Astro Actions + Zod + HTML forms |
| **Separate icon packages** | Multiple icon systems = inconsistent sizing/styling, larger bundle. | `astro-icon` (unified interface to all icon sets) |
| **Moment.js** | Deprecated, massive bundle (67KB). | `date-fns` (tree-shakable) or native Intl API |
| **Bootstrap / Bulma** | Component-heavy CSS frameworks clash with Tailwind. Redundant styles. | Tailwind + custom components |

### Anti-Patterns

**Don't:**
- Don't use `client:load` everywhere — most landing page content is static
- Don't import entire icon libraries — use `astro-icon` for on-demand loading
- Don't skip `astro check` before deployment — catches TypeScript errors
- Don't use CSS Modules with Tailwind — mixing paradigms creates confusion
- Don't create separate `/api` routes for simple forms — use Astro Actions
- Don't forget `alt` attributes on images — use eslint-plugin-jsx-a11y
- Don't deploy without testing with `astro preview` — catches static build issues

## Installation

### Create New Astro Project

```bash
npm create astro@latest rondo-website
cd rondo-website
```

### Core Dependencies

```bash
# Core
npm install astro@latest

# Styling
npm install -D tailwindcss@4 @tailwindcss/vite
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss

# Forms & Validation
npm install zod

# Deployment
npm install @astrojs/cloudflare

# SEO
npm install astro-seo astro-sitemap astro-robots-txt

# Icons
npm install astro-icon

# Animations (optional, only if needed)
npm install motion
```

### Dev Dependencies

```bash
npm install -D typescript
npm install -D eslint eslint-plugin-astro eslint-plugin-jsx-a11y
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D @astrojs/check
```

### Configuration Files

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rondo.nl',
  output: 'hybrid', // static by default, opt-in to SSR
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
```

**tailwind.config.js:**
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'electric-cyan': '#22D3EE',
        'bright-cobalt': '#3B82F6',
        'deep-midnight': '#1E3A8A',
        'obsidian': '#0F172A'
      }
    }
  }
};
```

**src/styles/global.css:**
```css
@import 'tailwindcss';
```

## Confidence Levels

| Recommendation | Confidence | Reasoning |
|----------------|------------|-----------|
| **Astro 5.17+** | HIGH | Official Cloudflare backing, proven in production, excellent docs, active community |
| **Tailwind CSS 4** | HIGH | Stable release, official Astro integration via Vite, widely adopted |
| **Cloudflare Pages** | HIGH | First-class Astro support, Cloudflare acquired Astro (Jan 2026), zero-config deployment |
| **Astro Actions for forms** | HIGH | Built-in since v4.15, type-safe, official docs, replaces API routes pattern |
| **astro-seo** | MEDIUM | Popular community package, well-maintained, but not official. Alternative: manual meta tags |
| **Motion One** | MEDIUM | Only if animations needed. Lightweight but adds complexity. Prefer CSS animations first |
| **Astro 6 Beta** | LOW | Still in beta (as of Feb 2026). Use 5.17 stable for production until v6 stable release |

## Version Verification

All versions verified as of February 6, 2026:
- Astro: Currently at v5.17+ stable, v6 in beta
- Tailwind CSS: v4.0+ stable
- Node.js: LTS 20.x recommended
- TypeScript: 5.3+ compatible with Astro
- Zod: v3.22+ stable

## Sources

### High Confidence (Official Documentation)
- [Astro Documentation](https://docs.astro.build/)
- [Cloudflare Pages: Astro Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [Tailwind CSS with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Astro Forms Documentation](https://docs.astro.build/en/recipes/build-forms/)
- [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)

### Medium Confidence (Current News & Updates)
- [Astro Joins Cloudflare (Jan 2026)](https://astro.build/blog/joining-cloudflare/)
- [Cloudflare Acquires Astro](https://blog.cloudflare.com/astro-joins-cloudflare/)
- [Astro 6 Beta Announcement](https://astro.build/blog/astro-6-beta/)
- [What's New in Astro - January 2026](https://astro.build/blog/whats-new-january-2026/)
- [Astro in 2026: Why It's Beating Next.js](https://dev.to/polliog/astro-in-2026-why-its-beating-nextjs-for-content-sites-and-what-cloudflares-acquisition-means-6kl)

### Community Resources
- [20 Best SaaS Landing Pages + 2026 Best Practices](https://fibr.ai/landing-page/saas-landing-pages)
- [10 SaaS Landing Page Design Best Practices 2026](https://www.designstudiouiux.com/blog/saas-landing-page-design/)
- [Astro + Tailwind v4 Setup: 2026 Quick Guide](https://tailkits.com/blog/astro-tailwind-setup/)
- [How to Use Tailwind CSS v4 in Astro](https://dipankarmaikap.com/how-to-use-tailwind-css-v4-in-astro/)
- [Custom Form Validation With Astro.js & Zod](https://tillitsdone.com/blogs/astro-js-form-validation-with-zod/)
- [astro-seo GitHub](https://github.com/jonasmerlin/astro-seo)
- [Astro Icon Documentation](https://www.astroicon.dev/)
- [How To Get Social Media Previews Right with OpenGraph](https://lirantal.com/blog/getting-social-media-previews-right-with-opengraph-meta-tags)

### Glass Morphism & Design
- [Design in 2026: Glassy Layers Take Over](https://coloura.co.uk/inside-2026-design-hyperpersonalized-ui-replaces-flat-with-texture-and-glassy-motion/)
- [How to use Motion Animation Library with Astro](https://developers.netlify.com/guides/motion-animation-library-with-astro/)

### Developer Tooling
- [How to setup ESLint and Prettier in Astro](https://cosmicthemes.com/blog/astro-eslint-prettier-setup/)
- [eslint-plugin-astro Documentation](https://ota-meshi.github.io/eslint-plugin-astro/user-guide/)
- [Astro Editor Setup](https://docs.astro.build/en/editor-setup/)
