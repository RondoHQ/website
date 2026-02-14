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
