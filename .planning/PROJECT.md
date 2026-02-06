# Rondo Website

## What This Is

A modern SaaS landing page for Rondo — the all-in-one platform for Dutch sports club management. The site introduces two products (Rondo Club and Rondo Sync), explains what they do, shows pricing, and captures leads via a contact form. Built with Astro, deployed to Cloudflare Pages, with a soft glass morphism aesthetic on a dark obsidian background.

## Core Value

Clearly communicate what Rondo does and make it effortless for sports clubs to get in touch.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with value proposition explaining Rondo at a glance
- [ ] Product section for Rondo Club — club management (people, teams, dates)
- [ ] Product section for Rondo Sync — automated data sync (Sportlink, Laposta, FreeScout)
- [ ] Pricing section — €250/year minimum + €0.50/member/year, all-in-one
- [ ] Contact form for clubs to express interest
- [ ] Soft glass morphism design with electric cyan (#22D3EE) and bright cobalt (#3B82F6)
- [ ] Dark obsidian background (#0F172A) with subtle texture (fine-grain/carbon fiber)
- [ ] Deep midnight blue (#1E3A8A) for shadows and depth
- [ ] Rondo logo integration (provided by user)
- [ ] Responsive design (desktop + mobile)
- [ ] Dutch language content
- [ ] Astro static site framework
- [ ] Cloudflare Pages deployment

### Out of Scope

- English / multi-language support — Dutch-only audience for now
- User authentication / dashboard — this is a marketing site, not the app itself
- Blog / content management — landing page only, no CMS needed yet
- Online signup / payment — clubs contact via form, onboarding is manual
- Animation-heavy design — keep it performant, subtle transitions only

## Context

- Rondo Club (formerly Stadion) is a WordPress theme for managing people, teams, and dates at sports clubs
- Rondo Sync (formerly Sportlink Sync) is a Node.js CLI that syncs member data from Sportlink Club to Rondo Club, Laposta, and FreeScout
- Both products are being rebranded under the "Rondo" umbrella
- Target audience: boards and volunteers at Dutch amateur sports clubs
- The website starts as a landing page and will grow into a fuller product showcase over time
- Logo will be provided separately

## Constraints

- **Deployment**: Cloudflare Pages — must be static-compatible output
- **Framework**: Astro — chosen for static-first approach and Cloudflare Pages compatibility
- **Language**: Dutch only
- **Design**: Glass morphism / soft glass aesthetic on dark background — specific color palette defined

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro over Next.js/plain HTML | Static-first, great Cloudflare Pages support, room to grow | — Pending |
| All-in-one pricing (no tiers) | Simple formula: €250 min + €0.50/member, covers Club + Sync | — Pending |
| Dutch only | Target audience is Dutch amateur sports clubs | — Pending |
| Contact form over self-serve signup | Manual onboarding for now, keeps v1 simple | — Pending |

---
*Last updated: 2026-02-06 after initialization*
