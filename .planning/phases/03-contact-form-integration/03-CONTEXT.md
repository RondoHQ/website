# Phase 3: Contact Form & Integration - Context

**Gathered:** 2026-02-06
**Status:** Ready for planning

<domain>
## Phase Boundary

Enable clubs to express interest via a contact form on the landing page. Form captures name, email, club name (required) plus optional member count and message. Submissions send an email notification to Rondo. CRM integration, automated follow-ups, and multi-step onboarding flows are out of scope.

</domain>

<decisions>
## Implementation Decisions

### Email delivery method
- Cloudflare Workers + Resend API for form submission handling
- Stays within the Cloudflare ecosystem (Pages + Workers)
- Resend free tier covers volume (100 emails/day)
- Single recipient email address (configured as environment variable)
- No auto-reply to the submitter — just on-page success confirmation
- Simple plain text notification email with form fields listed

### Claude's Discretion
- Form placement and layout within the page (inline section vs separate)
- Visual treatment with existing glass morphism design system
- Submission UX (loading states, success message style, error display)
- Validation approach (real-time vs on-submit)
- Member count field format (free text, dropdown, range selector)
- Resend API key and recipient email configuration approach
- Worker route and endpoint design

</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches. The form should feel native to the existing glass morphism landing page design established in Phases 1-2.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-contact-form-integration*
*Context gathered: 2026-02-06*
