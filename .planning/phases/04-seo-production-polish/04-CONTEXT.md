# Phase 4: SEO & Production Polish - Context

**Gathered:** 2026-02-06
**Status:** Ready for planning

<domain>
## Phase Boundary

Optimize the Rondo website for search engines, add Plausible analytics, and verify production readiness (performance, accessibility). The site content is complete from Phases 1-3 — this phase makes it discoverable, measurable, and accessible.

</domain>

<decisions>
## Implementation Decisions

### Search & social appearance
- Product-focused page title: "Rondo — Ledenadministratie voor sportverenigingen" style
- Meta description emphasizes what Rondo does (product-focused, not benefit-focused)
- Custom branded OG image: logo + tagline on dark background (not product screenshot)
- JSON-LD structured data: Organization + SoftwareApplication schemas
- Target both keyword angles: "ledenadministratie sportvereniging/sportclub" AND "sportlink koppeling/synchronisatie"
- robots.txt and sitemap.xml for crawlability

### Analytics & tracking
- Plausible analytics (account exists, domain: rondo.club)
- Track contact form submissions as custom event — the primary conversion metric
- No CTA click tracking or scroll depth needed
- No cookie/privacy notice needed — Plausible is cookieless and GDPR-compliant

### Accessibility
- Full WCAG 2.1 AA audit: contrast, alt text, form labels, semantic HTML, keyboard navigation, focus indicators, screen reader flow, skip links
- Honor `prefers-reduced-transparency` — fall back to solid dark backgrounds (verify/extend Phase 1 implementation)
- Honor `prefers-reduced-motion` — disable or simplify animations
- HTML lang attribute: `nl`

### Claude's Discretion
- Exact meta description wording
- OG image design/dimensions
- Performance optimization approach (image formats, font loading, etc.)
- Specific Lighthouse/audit tooling
- Skip link placement and styling

</decisions>

<specifics>
## Specific Ideas

- Plausible domain is `rondo.club`
- Keywords should cover both "ledenadministratie" (member administration) and "sportlink" (integration) search intents
- OG image should use the dark brand aesthetic (obsidian background, cyan accents)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-seo-production-polish*
*Context gathered: 2026-02-06*
