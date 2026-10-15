# Rondo Website

Public-facing marketing site at rondo.club. Astro static site with Tailwind CSS, deployed to Cloudflare Pages.

## Commands

```bash
npm run dev      # Start Astro dev server
npm run build    # Type-check + production build to dist/
npm run preview  # Preview production build
npm run deploy   # Build + deploy to Cloudflare Pages via Wrangler
```

## Structure

```
src/
  pages/          # index, privacybeleid, voorwaarden
  layouts/        # BaseLayout.astro
  components/
    sections/     # Hero, FAQ, Pricing, ContactForm, etc.
    ui/           # Button, Card, Input, etc.
    layout/       # Header
  data/           # siteMetadata.ts, structuredData.ts
  styles/         # global.css
functions/api/    # Cloudflare Function: contact form handler (Resend)
public/           # Static assets
```

## Rules

- **Never deploy unless explicitly asked.** Only run `npm run deploy` when the user says to deploy.
- **Always commit your work.** Before ending a conversation, commit all changes with a clear commit message.

## Performance monitoring

Browser tracing samples 10% of pages; disable at build time with
`PUBLIC_GLITCHTIP_PERFORMANCE=false`. Contact tracing uses the dedicated PERFORMANCE_BUDGET
KV binding for a soft 1,000/day budget and fails closed if KV is unavailable;
`GLITCHTIP_PERFORMANCE=false` disables it at runtime. Separate transaction filters
remove form data and URL parameters. Keep the fixed Turnstile/email span labels.
