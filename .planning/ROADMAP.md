# Roadmap: Rondo Website

## Overview

This roadmap delivers a modern SaaS landing page for Rondo — a four-phase journey from foundation to production launch. Starting with an accessible glass morphism design system and deployment pipeline, we build landing page sections with Dutch-first content, add a contact form for lead capture, and finish with SEO optimization and analytics integration. Each phase delivers verifiable user-facing capabilities, progressing from "visitors see a beautiful site" to "clubs can contact us and we appear in search results."

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3, 4): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Design System** - Astro project setup, glass morphism UI library, Cloudflare deployment
- [ ] **Phase 2: Landing Page Sections** - Hero, products, pricing sections with Dutch content
- [ ] **Phase 3: Contact Form & Integration** - Lead capture form with server-side handling
- [ ] **Phase 4: SEO & Production Polish** - Meta tags, analytics, performance audit, launch

## Phase Details

### Phase 1: Foundation & Design System
**Goal**: Establish core infrastructure and accessible glass morphism component library that all subsequent work depends on
**Depends on**: Nothing (first phase)
**Requirements**: TECH-01, DSGN-01, DSGN-02, DSGN-03, DSGN-04
**Success Criteria** (what must be TRUE):
  1. Developer can run Astro dev server locally with hot reload working
  2. Cloudflare Pages deployment pipeline successfully builds and deploys commits
  3. Glass morphism UI components (Button, Card, Input) render with accessible contrast on dark background
  4. Site layout adapts correctly on mobile, tablet, and desktop viewports
  5. Electric cyan (#22D3EE) and bright cobalt (#3B82F6) accent colors display correctly against obsidian (#0F172A) background
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md — Astro project setup with Tailwind CSS 4, base layout, theme colors (completed 2026-02-06)
- [x] 01-02-PLAN.md — Glass morphism UI component library (Button, Card, GlassPanel, Input) (completed 2026-02-06)

### Phase 2: Landing Page Sections
**Goal**: Deliver complete static landing page with Dutch-first content addressing multiple stakeholder personas
**Depends on**: Phase 1 (needs design system)
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04, PROD-01, PROD-02, PROD-03, PRIC-01, TECH-05
**Success Criteria** (what must be TRUE):
  1. Visitor sees Dutch headline and value proposition immediately upon landing
  2. Visitor sees real Rondo Club product screenshot in hero section
  3. Visitor can click primary CTA button visible above fold
  4. Visitor can navigate using header logo and menu
  5. Visitor understands what Rondo Club does (people, teams, dates management)
  6. Visitor understands what Rondo Sync does (automated Sportlink data sync)
  7. Visitor sees integration diagram showing how Rondo Club, Rondo Sync, Sportlink, Laposta, and FreeScout connect
  8. Visitor sees transparent pricing (€250/year minimum + €0.50/member/year) with example calculation
  9. All content displays in Dutch throughout the site
**Plans**: 2 plans

Plans:
- [ ] 02-01-PLAN.md — Hero section, sticky glass header, footer, and page skeleton with Dutch content
- [ ] 02-02-PLAN.md — Product story, integration diagram, and pricing section

### Phase 3: Contact Form & Integration
**Goal**: Enable clubs to express interest and capture leads via contact form
**Depends on**: Phase 2 (form appears on complete landing page)
**Requirements**: CONT-01
**Success Criteria** (what must be TRUE):
  1. Visitor can fill out contact form with name, email, club name fields
  2. Visitor can optionally add member count and message
  3. Visitor sees success confirmation after form submission
  4. Form submission sends email notification to Rondo
  5. Form validation prevents invalid submissions (missing required fields, bad email format)
**Plans**: 1 plan

Plans:
- [ ] 03-01: Contact form with server-side handling

### Phase 4: SEO & Production Polish
**Goal**: Optimize site for search engines, add analytics, verify performance and accessibility meet production standards
**Depends on**: Phase 3 (SEO needs final content)
**Requirements**: TECH-02, TECH-03, TECH-04
**Success Criteria** (what must be TRUE):
  1. Site appears correctly in Google search results with title and description
  2. Site preview shows correct image and text when shared on social media (OpenGraph)
  3. Site loads in under 3 seconds on mobile connection
  4. Plausible analytics tracks page views and CTA clicks
  5. Site passes WCAG 2.1 AA contrast requirements
  6. Search engines can crawl site (robots.txt and sitemap.xml configured)
**Plans**: 1 plan

Plans:
- [ ] 04-01: SEO, analytics, and production audit

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Design System | 2/2 | Complete | 2026-02-06 |
| 2. Landing Page Sections | 0/2 | Not started | - |
| 3. Contact Form & Integration | 0/1 | Not started | - |
| 4. SEO & Production Polish | 0/1 | Not started | - |
