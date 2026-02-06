# Architecture Research: Rondo Website

**Domain:** SaaS Landing Page (Astro + Cloudflare Pages)
**Researched:** 2026-02-06
**Confidence:** HIGH

## Executive Summary

Astro is an optimal choice for the Rondo website landing page due to its static-first architecture, zero JavaScript by default, and exceptional performance characteristics. The framework's file-based routing, component composition model, and first-class Cloudflare integration (as of January 2026, Cloudflare acquired Astro) make it ideal for building fast, SEO-friendly SaaS landing pages.

Key architectural decisions:
- **Static generation** for landing pages (no SSR needed initially)
- **Component-based architecture** for reusable UI elements
- **Content collections** for scalable content management as site grows
- **API routes** for contact form handling
- **Cloudflare Pages** deployment with Wrangler CLI

The architecture supports the stated goal of growing from a single landing page to a multi-page product showcase through Astro's flexible content organization and routing system.

## File Organization

### Recommended Project Structure

```
website/
├── public/                    # Static assets (fonts, icons, images)
│   ├── fonts/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI elements (buttons, cards)
│   │   ├── sections/        # Landing page sections
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── ProductClub.astro
│   │   │   ├── ProductSync.astro
│   │   │   ├── Pricing.astro
│   │   │   └── Contact.astro
│   │   └── shared/          # Header, footer, navigation
│   │       ├── Header.astro
│   │       ├── Footer.astro
│   │       └── Nav.astro
│   ├── content/             # Content collections (for future growth)
│   │   ├── config.ts        # Content schema definitions
│   │   ├── blog/            # Blog posts (future)
│   │   └── features/        # Feature descriptions
│   ├── layouts/             # Page layout templates
│   │   ├── BaseLayout.astro # Core HTML structure
│   │   └── PageLayout.astro # Standard page wrapper
│   ├── pages/               # Routes (file-based routing)
│   │   ├── index.astro      # Landing page (/)
│   │   ├── api/             # API endpoints
│   │   │   └── contact.ts   # POST handler for contact form
│   │   └── [future pages]/
│   ├── styles/              # Global styles and utilities
│   │   ├── global.css       # Global CSS
│   │   ├── theme.css        # CSS variables for theming
│   │   └── glass.css        # Glassmorphism utilities
│   └── lib/                 # Utilities and helpers
│       ├── types.ts         # TypeScript types
│       └── utils.ts         # Helper functions
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── wrangler.jsonc           # Cloudflare deployment config
└── package.json
```

### Directory Purpose and Rules

| Directory | Purpose | Rules |
|-----------|---------|-------|
| `src/pages/` | **Required.** File-based routing | Each `.astro` file becomes a route |
| `src/components/` | Reusable UI elements | Organize by feature/type (ui, sections, shared) |
| `src/layouts/` | Page layout wrappers | Define shared structure (HTML shell, nav, footer) |
| `src/content/` | Content collections | Type-safe content with schema validation |
| `src/styles/` | CSS and stylesheets | Processed and optimized by Astro during build |
| `public/` | Static assets | Copied as-is, not processed by Astro |

**Critical:** Only `src/pages/` is reserved by Astro. All other directories can be renamed/reorganized, but these conventions align with ecosystem best practices.

## Component Architecture

### Component Boundaries

| Component Type | Responsibility | Communicates With | Example |
|---------------|----------------|-------------------|---------|
| **Layout** | HTML structure, meta tags, global nav/footer | Pages, shared components | `BaseLayout.astro` |
| **Section** | Self-contained landing page section | UI components, data props | `Hero.astro`, `Features.astro` |
| **UI** | Atomic design elements | Section components | `Button.astro`, `Card.astro` |
| **Shared** | Site-wide elements (header, footer, nav) | All pages via layout | `Header.astro`, `Footer.astro` |
| **Page** | Route endpoints, orchestrate sections | Layouts, sections | `index.astro` |

### Component Structure Pattern

All Astro components follow this two-part structure:

```astro
---
// Component Script (server-side, runs at build time)
// - Import dependencies
// - Define props with TypeScript
// - Fetch data
// - Run server-side logic
import Button from '../ui/Button.astro';

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- Component Template (rendered to HTML) -->
<section class="hero">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
  <Button text="Get Started" />
</section>

<style>
  /* Scoped styles (optional) */
  .hero { /* ... */ }
</style>
```

**Key characteristics:**
- **Zero JavaScript by default:** Components render to pure HTML at build time
- **Server-side execution:** Component script runs during build, not in browser
- **Composable:** Components can import and nest other components
- **Type-safe:** Full TypeScript support with interface definitions

### Data Flow

```
User Request → Static HTML (built at deploy time)
              ↓
Landing Page (index.astro)
   ├── BaseLayout (meta, structure)
   ├── Hero section
   ├── Features section
   ├── Product sections (Club + Sync)
   ├── Pricing section
   └── Contact section (w/ form)
        └── API route (/api/contact.ts)
            └── Email service / CRM integration
```

**For contact form only:**
```
Client-side form submission
   ↓ (POST)
API Route (/api/contact.ts)
   ↓
Email service (e.g., Resend, SendGrid)
   ↓
Response to client
```

### Patterns to Follow

#### Pattern 1: Composition Over Configuration
**What:** Build complex UIs by composing small, focused components
**When:** Creating reusable sections with varying content
**Example:**
```astro
---
// Good: Composable
import Card from '../ui/Card.astro';
import Icon from '../ui/Icon.astro';
---
<Card>
  <Icon name="check" />
  <h3>Feature Title</h3>
  <p>Description</p>
</Card>
```

#### Pattern 2: Layout Inheritance
**What:** Use layouts to wrap pages with common structure
**When:** Multiple pages need the same HTML shell, nav, footer
**Example:**
```astro
---
// layouts/BaseLayout.astro
interface Props {
  title: string;
  description: string;
}
---
<!DOCTYPE html>
<html>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

#### Pattern 3: Content Collections for Scale
**What:** Use content collections for structured, type-safe content
**When:** Managing blog posts, feature descriptions, case studies
**Example:**
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number()
  })
});

export const collections = {
  'features': featuresCollection
};
```

#### Pattern 4: Props-Based Theming
**What:** Pass styling props to components for variations
**When:** Creating reusable components with visual variants
**Example:**
```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}
const { variant = 'primary', size = 'md' } = Astro.props;
---
<button class={`btn btn-${variant} btn-${size}`}>
  <slot />
</button>
```

### Anti-Patterns to Avoid

#### Anti-Pattern 1: Client-Side JavaScript by Default
**What:** Adding `<script>` tags or framework components unnecessarily
**Why bad:** Defeats Astro's zero-JS philosophy, increases bundle size, slows page load
**Instead:** Use Astro's static rendering; only add client JS when interactive behavior is truly needed
**Detection:** Check DevTools Network tab—if you see .js files loading for static content, investigate

#### Anti-Pattern 2: Large Monolithic Page Components
**What:** Building entire landing page in a single `.astro` file
**Why bad:** Hard to maintain, no reusability, difficult to test sections individually
**Instead:** Break page into section components (`Hero.astro`, `Features.astro`, etc.)
**Example:**
```astro
// Bad: Everything in one file
<section class="hero">...</section>
<section class="features">...</section>
<section class="pricing">...</section>

// Good: Composed from sections
<Hero {...heroProps} />
<Features features={features} />
<Pricing plans={plans} />
```

#### Anti-Pattern 3: Mixing Content and Presentation
**What:** Hardcoding content strings directly in component templates
**Why bad:** Makes content updates require code changes, prevents internationalization, reduces reusability
**Instead:** Pass content as props or use content collections
**Example:**
```astro
// Bad: Hardcoded content
<h1>Rondo - Sports Club Management</h1>

// Good: Props-based
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<h1>{title}</h1>
```

#### Anti-Pattern 4: Fetching Data in Section Components
**What:** Making API calls or database queries inside reusable section components
**Why bad:** Couples components to data sources, makes them less reusable, harder to test
**Instead:** Fetch data in page components, pass to sections as props
**Example:**
```astro
// Bad: Data fetching in section
// Features.astro
---
const features = await fetch('/api/features').then(r => r.json());
---

// Good: Data passed as props
// index.astro
---
import Features from '../components/sections/Features.astro';
const features = await fetch('/api/features').then(r => r.json());
---
<Features features={features} />
```

## Build & Deploy Pipeline

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Preview production build locally
npm run build && npm run preview
```

**Astro 6 Beta Feature (2026):** The new development server uses Vite's Environment API and can run directly in the `workerd` runtime (same as Cloudflare Workers production), closing the gap between dev and production environments.

### Build Process

```bash
# Build static site
npm run build

# Output: dist/ directory containing static HTML, CSS, assets
```

**Build characteristics:**
- Astro generates pure static HTML by default (no SSR)
- Zero JavaScript shipped to clients unless explicitly added
- Automatic optimization: image optimization, CSS minification, HTML compression
- File-based routing creates routes from `src/pages/` structure

### Deployment to Cloudflare Pages

#### Option 1: Wrangler CLI (Recommended for Manual Deploy)

```bash
# Install Wrangler
npm install wrangler@latest --save-dev

# Build and deploy
npm run build && npx wrangler pages deploy ./dist
```

**Configuration:** Create `wrangler.jsonc`:
```json
{
  "name": "rondo-website",
  "compatibility_date": "2026-02-06",
  "pages_build_output_dir": "./dist"
}
```

#### Option 2: Git Integration (Recommended for CI/CD)

1. Connect GitHub/GitLab repository in Cloudflare dashboard
2. Configure build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. Automatic deployments on every push to main branch
4. Preview deployments for pull requests

### Environment Configuration

**No adapter needed for static sites.** If you later need SSR for contact form API routes:

```bash
# Install Cloudflare adapter
npx astro add cloudflare
```

This adds `@astrojs/cloudflare` adapter to `astro.config.mjs`:
```javascript
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // or 'hybrid' for mixed static/SSR
  adapter: cloudflare()
});
```

**Note for contact forms:** Static sites can't process POST requests server-side. Options:
1. Use external form service (Web3Forms, Formspree)
2. Add SSR with Cloudflare adapter for API routes
3. Use Cloudflare Workers separately

### Performance Optimizations

Astro includes these by default:
- **Automatic code splitting:** Only load JS for components that need it
- **Asset optimization:** Images, CSS, fonts automatically optimized
- **Partial hydration:** Interactive components load JS only when needed (Islands Architecture)
- **Zero JS baseline:** Static components ship no JavaScript

### Deployment Checklist

- [ ] Environment variables configured in Cloudflare dashboard
- [ ] Custom domain configured (if not using *.pages.dev)
- [ ] SSL/TLS enabled (automatic with Cloudflare)
- [ ] Build command and output directory verified
- [ ] Preview deployments tested
- [ ] Analytics/monitoring configured (Cloudflare Web Analytics)

## Suggested Build Order

### Phase 1: Foundation (Week 1)
**Goal:** Project setup and base infrastructure

1. **Initialize project**
   - `npm create astro@latest`
   - Install Tailwind CSS: `npx astro add tailwind`
   - Configure TypeScript, ESLint, Prettier
   - Set up git repository

2. **Create base layout**
   - `src/layouts/BaseLayout.astro` (HTML structure, meta tags)
   - SEO component or astro-seo integration
   - Theme CSS variables in `src/styles/theme.css`
   - Dark theme configuration

3. **Build shared components**
   - `src/components/shared/Header.astro` (logo, navigation)
   - `src/components/shared/Footer.astro` (links, copyright)
   - `src/components/ui/Button.astro` (primary/secondary variants)

4. **Configure deployment**
   - Create `wrangler.jsonc`
   - Test local build: `npm run build`
   - Deploy to Cloudflare Pages
   - Verify deployment works

**Why this order:** Establishes core infrastructure that all subsequent work depends on. Getting deployment working early enables continuous validation.

### Phase 2: Glassmorphism & Design System (Week 1-2)
**Goal:** Implement visual design language

1. **Glassmorphism utilities**
   - `src/styles/glass.css` (backdrop-blur utilities)
   - Tailwind config for glass variants
   - Test on dark background

2. **UI component library**
   - `src/components/ui/Card.astro` (with glass variant)
   - `src/components/ui/Icon.astro` (icon system)
   - `src/components/ui/Input.astro`, `Textarea.astro` (for forms)

3. **Design tokens**
   - CSS variables for spacing, colors, typography
   - Tailwind theme extension
   - Consistent animation/transition utilities

**Why this order:** Design system must be established before building landing page sections to ensure consistency.

### Phase 3: Landing Page Sections (Week 2-3)
**Goal:** Build static content sections

1. **Hero section**
   - `src/components/sections/Hero.astro`
   - Glass morphism card with headline, CTA
   - Responsive layout

2. **Features overview**
   - `src/components/sections/Features.astro`
   - Feature card grid layout
   - Icons and descriptions

3. **Product showcases**
   - `src/components/sections/ProductClub.astro` (Stadion features)
   - `src/components/sections/ProductSync.astro` (Sportlink Sync features)
   - Screenshots or mockups

4. **Pricing section**
   - `src/components/sections/Pricing.astro`
   - Pricing card components
   - Feature comparison

5. **Assemble landing page**
   - `src/pages/index.astro`
   - Import and compose all sections
   - Add inter-section spacing and transitions

**Why this order:** Start with simpler static sections (Hero, Features) before more complex ones. Composing them into `index.astro` validates the component architecture.

**Dependency note:** All sections depend on UI components and design system from Phase 2.

### Phase 4: Contact Form & API (Week 3)
**Goal:** Add interactive contact functionality

**Decision point:** Choose approach:
- **Option A (Simpler):** Use external service (Web3Forms, Formspree)
  - Integrate form service SDK
  - Client-side submission
  - No API route needed

- **Option B (More control):** Build API route with SSR
  - Add Cloudflare adapter: `npx astro add cloudflare`
  - Create `src/pages/api/contact.ts` (POST handler)
  - Integrate email service (Resend, SendGrid)
  - Handle validation and error states

1. **Contact form component**
   - `src/components/sections/Contact.astro`
   - Form fields (name, email, message)
   - Client-side validation
   - Loading and success states

2. **API integration**
   - Implement chosen approach (A or B)
   - Test form submission
   - Error handling

**Why this order:** Contact form is the only interactive element and depends on all other sections being complete. Building it last allows focus on getting static content right first.

**Deployment note:** If using Option B (API route), redeploy to Cloudflare after enabling adapter to ensure SSR works in production.

### Phase 5: SEO & Polish (Week 4)
**Goal:** Production readiness

1. **SEO optimization**
   - Meta tags (title, description, OG tags)
   - Install `astro-seo` or similar
   - Social sharing previews (Facebook Debugger, Twitter Card Validator)
   - Structured data (JSON-LD for organization)

2. **Performance audit**
   - Lighthouse CI
   - Core Web Vitals check
   - Image optimization verification
   - Bundle size analysis

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast (especially with glass morphism)
   - Screen reader testing

4. **Analytics**
   - Cloudflare Web Analytics integration
   - Conversion tracking on CTA buttons
   - Form submission tracking

**Why this order:** SEO and polish work requires completed content. Doing this last ensures you're optimizing the final product.

### Phase 6: Future Growth Preparation (Post-Launch)
**Goal:** Set foundation for multi-page expansion

1. **Content collections setup**
   - Create `src/content/config.ts`
   - Define schemas for future content types (blog, case studies)
   - Test with sample content

2. **Additional pages**
   - About page (`src/pages/about.astro`)
   - Product detail pages
   - Blog listing and detail pages (using content collections)

3. **Navigation expansion**
   - Update header with new page links
   - Add mobile menu if needed
   - Breadcrumbs for multi-level navigation

**Why this order:** These are not needed for initial launch but prepare for natural growth. Content collections can be set up but left empty until blog content is ready.

### Build Order Rationale

**Sequential dependencies:**
```
Foundation → Design System → Sections → Form → SEO → Growth
     ↓            ↓             ↓         ↓       ↓
  Required    Required      Required  Optional Optional
```

**Parallel opportunities:**
- While building sections (Phase 3), different team members can work on different section components simultaneously
- SEO work (Phase 5) can start during Phase 4 once static content is finalized
- Design system (Phase 2) can be refined throughout Phase 3 as sections reveal needs

**Critical path:** Foundation → Design System → Landing Page Sections → Deployment

**Optional path:** Contact Form (can launch without it, add later)

**Validation points:**
- After Phase 1: Verify deployment pipeline works
- After Phase 2: Verify design consistency across components
- After Phase 3: User testing of landing page flow
- After Phase 4: Test contact form submission end-to-end
- After Phase 5: Lighthouse score >90, accessibility audit pass

## Scalability Considerations

| Concern | Initial (Landing Page) | Growth (Multi-page) | Future (App Integration) |
|---------|------------------------|---------------------|--------------------------|
| **Routing** | Single page (index.astro) | File-based routing in pages/ | Dynamic routes, API endpoints |
| **Content** | Hardcoded props | Content collections | CMS integration (DatoCMS, Strapi) |
| **Assets** | Static images in public/ | Optimized images with @astrojs/image | CDN, image optimization service |
| **Interactivity** | Minimal (contact form only) | Progressive enhancement | React/Vue islands for complex UI |
| **Data fetching** | None (static content) | Fetch at build time | SSR with Cloudflare adapter |
| **Performance** | <50KB initial load | <150KB with multiple pages | Code splitting, lazy loading |

### Growth Path from Landing Page to Multi-Page Site

**Stage 1: Single landing page (current scope)**
- Static HTML, zero JavaScript
- All content in component props
- No routing beyond root path

**Stage 2: Multi-page product site (3-6 months)**
- Add pages: `/about`, `/product/club`, `/product/sync`, `/pricing`, `/contact`
- Introduce content collections for features, case studies
- Shared layout consistency across pages
- Nested navigation

**Stage 3: Content-rich site (6-12 months)**
- Add blog: `/blog`, `/blog/[slug]`
- Documentation: `/docs/[...slug]`
- Customer stories: `/customers/[slug]`
- Use content collections with MDX for rich content
- Search functionality (client-side Pagefind or Algolia)

**Stage 4: Hybrid static/dynamic (12+ months)**
- User accounts (requires SSR)
- Dynamic pricing calculator
- Product demos requiring server-side logic
- API integrations with Stadion/Sportlink Sync
- Cloudflare adapter for SSR routes

**Architectural flexibility:** Astro supports this growth path natively:
- Add pages incrementally without restructuring
- Mix static and SSR pages (output: 'hybrid')
- Content collections scale from 10 to 10,000 entries
- Islands Architecture allows adding framework components where needed

## Sources

**HIGH Confidence (Official Documentation & Verified):**
- [Astro Project Structure - Official Docs](https://docs.astro.build/en/basics/project-structure/)
- [Astro Components - Official Docs](https://docs.astro.build/en/basics/astro-components/)
- [Deploy to Cloudflare Pages - Official Docs](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Astro on Cloudflare Pages - Cloudflare Docs](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare Acquires Astro (Jan 2026)](https://www.cloudflare.com/press/press-releases/2026/cloudflare-acquires-astro-to-accelerate-the-future-of-high-performance-web-development/)
- [Astro 6 Beta Announcement (Feb 2026) - InfoQ](https://www.infoq.com/news/2026/02/astro-v6-beta-cloudflare/)
- [Content Collections - Astro Docs](https://docs.astro.build/en/guides/content-collections/)

**MEDIUM Confidence (Community Best Practices, Multiple Sources):**
- [Astroship Template - GitHub](https://github.com/surjithctly/astroship)
- [Build Forms with API Routes - Astro Docs](https://docs.astro.build/en/recipes/build-forms-api/)
- [Astro SEO Plugin - GitHub](https://github.com/jonasmerlin/astro-seo)
- [Glassmorphism with Tailwind CSS - FlyOnUI](https://flyonui.com/blog/glassmorphism-with-tailwind-css/)
- [SaaS Landing Page Breakdown - Cortes Design](https://www.cortes.design/post/saas-landing-page-breakdown-example)
- [Best Astro File Organization - TilItsDone](https://tillitsdone.com/blogs/astro-js-file-organization-guide/)

**Build Order Research:**
- [Astro Landing Page Templates](https://astro.build/themes/details/astro-landing-page/)
- [SaaS Landing Pages Examples - Lapa Ninja](https://www.lapa.ninja/category/saas/)
- [SaaS Landing Page Best Practices - Landingi](https://landingi.com/landing-page/saas-best-practices/)
