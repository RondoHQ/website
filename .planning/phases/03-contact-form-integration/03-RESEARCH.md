# Phase 3: Contact Form & Integration - Research

**Researched:** 2026-02-06
**Domain:** Form handling with Cloudflare Pages Functions + Resend email API
**Confidence:** HIGH

## Summary

Phase 3 implements a contact form on the Astro landing page using Cloudflare Pages Functions for serverless form submission handling and Resend API for email delivery. The architecture stays within the Cloudflare ecosystem (Pages + Workers runtime) while leveraging Resend's developer-friendly email API.

The research confirms this is a well-trodden path with established patterns: Cloudflare provides official tutorials for both Pages Functions form handling and Resend integration, and Astro has built-in support for API routes and form components. The glass morphism design system already has reusable Input and Button components that can be extended for form needs.

Key findings reveal that Cloudflare Pages Functions use file-based routing in a `/functions` directory, handle HTTP methods via `onRequestPost` exports, and access environment variables through the context object. Resend offers a simple REST API requiring only three fields (from, to, subject) with SDK support. Form security requires both client-side validation for UX and server-side validation for security, with modern approaches using HTML5 validation, honeypot fields, and optional Cloudflare Turnstile for bot protection.

**Primary recommendation:** Build a standalone Contact form section component with client-side JavaScript for enhanced UX, create a Pages Function at `/functions/api/contact.js` for server-side processing, integrate Resend SDK for email delivery, and implement multi-layer spam protection (HTML5 validation + honeypot + rate limiting).

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Cloudflare Pages Functions | N/A (platform) | Serverless API endpoints | Native to Cloudflare Pages, zero config needed, file-based routing |
| Resend | 4.x (latest) | Email delivery API | Developer-focused, simple API, official Cloudflare integration tutorial |
| Astro built-in forms | 5.17.0 | Client-side form components | No framework needed, progressive enhancement, already in stack |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Cloudflare Turnstile | N/A (service) | CAPTCHA alternative | Optional bot protection beyond honeypot, free tier available |
| HTML5 Constraint Validation API | Native | Client-side validation | Built-in browser validation, accessible, no library needed |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Resend | SendGrid, Mailgun, AWS SES | Resend has simpler API and better DX, others more enterprise-focused |
| Pages Functions | Cloudflare Workers (standalone) | Functions integrate better with Pages deployment, Workers need separate project |
| Turnstile | reCAPTCHA, hCaptcha | Turnstile is free unlimited, privacy-focused, Cloudflare-native |

**Installation:**
```bash
# In the Astro project root
npm install resend

# No other dependencies needed - Cloudflare Pages Functions and Turnstile are platform services
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── sections/
│   │   └── ContactForm.astro      # Form UI section
│   └── ui/
│       ├── Input.astro             # Existing, extend for validation
│       ├── Button.astro            # Existing, add loading state
│       └── Textarea.astro          # New component for message field
functions/
└── api/
    └── contact.js                  # POST endpoint for form submission
```

### Pattern 1: File-Based API Routes
**What:** Cloudflare Pages Functions use directory structure to define routes. `/functions/api/contact.js` creates endpoint at `/api/contact`.

**When to use:** All API endpoints for this phase (form submission).

**Example:**
```javascript
// Source: https://developers.cloudflare.com/pages/functions/routing/
// functions/api/contact.js

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parse form data
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Process and respond
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

### Pattern 2: Environment Variable Access via Context
**What:** Pages Functions receive environment variables through the `context.env` object, not `process.env`.

**When to use:** Accessing API keys and configuration.

**Example:**
```javascript
// Source: https://developers.cloudflare.com/pages/functions/api-reference/
export async function onRequestPost(context) {
  const apiKey = context.env.RESEND_API_KEY;
  const recipientEmail = context.env.RECIPIENT_EMAIL;

  // Use in Resend SDK
  const resend = new Resend(apiKey);
}
```

### Pattern 3: Resend Email Sending
**What:** Resend SDK provides simple async email sending with three required fields.

**When to use:** Sending notification emails from form submissions.

**Example:**
```javascript
// Source: https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'contact@rondo.nl',
  to: env.RECIPIENT_EMAIL,
  subject: `Contact Form: ${formData.club_name}`,
  text: `Name: ${formData.name}\nEmail: ${formData.email}\n...`
});

if (error) {
  // Handle error
}
```

### Pattern 4: Progressive Enhancement Form Submission
**What:** Form works with plain HTML, enhanced with JavaScript for better UX (no page refresh).

**When to use:** All user-facing forms.

**Example:**
```javascript
// Source: https://docs.astro.build/en/recipes/build-forms-api/
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  // Show success/error message
});
```

### Pattern 5: CORS Headers for API Endpoints
**What:** Pages Functions need explicit CORS headers when called from JavaScript.

**When to use:** All API endpoints accessed via fetch from the same domain (technically same-origin, but good practice).

**Example:**
```javascript
// Source: https://developers.cloudflare.com/pages/functions/examples/cors-headers/
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

export async function onRequestPost(context) {
  // ... process form ...

  return new Response(JSON.stringify(result), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
```

### Pattern 6: Honeypot Spam Prevention
**What:** Hidden form field that bots fill but humans don't see. Reject submissions where honeypot has value.

**When to use:** As first layer of spam defense, before rate limiting or CAPTCHA.

**Example:**
```html
<!-- Source: https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8 -->
<input
  type="text"
  name="website"
  style="position:absolute;left:-9999px;width:1px;height:1px"
  tabindex="-1"
  autocomplete="off"
  aria-hidden="true"
/>
```

Server-side:
```javascript
if (formData.get('website')) {
  return new Response('Invalid submission', { status: 400 });
}
```

### Anti-Patterns to Avoid
- **Client-side only validation:** Always validate on server - client validation can be bypassed
- **Blocking submit button until validation:** Use HTML5 `required` and let browser handle it, or validate on submit
- **Exposing secret keys:** Never put API keys in client-side code, always use environment variables
- **No rate limiting:** Public endpoints must have rate limiting to prevent abuse
- **Generic error messages:** "Something went wrong" doesn't help users fix issues
- **Submitting form data as JSON when not needed:** `FormData` is simpler and works without JavaScript

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Email delivery | SMTP connection, queue management | Resend API | Deliverability, SPF/DKIM setup, bounce handling, rate limiting |
| Email validation | Complex regex for RFC 5322 | HTML5 `type="email"` + server check | Browser handles edge cases, good UX, accessible |
| CAPTCHA/bot detection | Image puzzles, challenges | Cloudflare Turnstile or honeypot | Privacy-focused, accessible, maintained by Cloudflare |
| Rate limiting | In-memory counters | Cloudflare rate limiting rules | Distributed, survives restarts, prevents DDoS |
| Form field validation | Custom error messages | HTML5 Constraint Validation API | Accessible, localized, no JavaScript needed |

**Key insight:** Email is deceptively complex. SPF records, DKIM signing, bounce handling, rate limiting, and deliverability monitoring are all problems Resend solves. Building SMTP email from scratch in a serverless function is an anti-pattern.

## Common Pitfalls

### Pitfall 1: Using process.env in Pages Functions
**What goes wrong:** Trying to access environment variables via `process.env.RESEND_API_KEY` returns `undefined`.

**Why it happens:** Cloudflare Workers runtime (which powers Pages Functions) doesn't use Node.js environment variables. Configuration comes through the context object.

**How to avoid:** Always access environment variables via `context.env.VARIABLE_NAME` in Pages Functions.

**Warning signs:** "Cannot read property of undefined" errors when accessing API keys, secrets, or configuration values.

### Pitfall 2: Missing Server-Side Validation
**What goes wrong:** Trusting client-side validation and skipping server checks leads to invalid data, spam, or injection attacks.

**Why it happens:** Developers assume HTML5 validation is sufficient, or forget that client code can be bypassed.

**How to avoid:** Always validate all inputs on the server before processing. Check required fields, validate email format, sanitize strings, check length limits.

**Warning signs:** Spam submissions, malformed data in emails, security vulnerabilities.

### Pitfall 3: Not Handling Resend API Errors
**What goes wrong:** Resend API call fails (rate limit, invalid domain, network issue) but user sees success message or generic error.

**Why it happens:** Not checking the `error` property returned by `resend.emails.send()`.

**How to avoid:** Always check both `data` and `error` in the response. Return appropriate HTTP status codes (400 for validation, 500 for server errors, 503 for rate limiting).

**Warning signs:** Users report form submission success but no email received, silent failures in logs.

### Pitfall 4: Forgetting OPTIONS Preflight for CORS
**What goes wrong:** Form submission fails with CORS error in browser console despite CORS headers on POST response.

**Why it happens:** Modern browsers send OPTIONS preflight request before POST. If OPTIONS handler is missing or returns wrong headers, POST never happens.

**How to avoid:** Export both `onRequestOptions` and `onRequestPost` functions with matching CORS headers.

**Warning signs:** Form works in curl/Postman but fails in browser, CORS errors in console.

### Pitfall 5: No Rate Limiting on Public Endpoints
**What goes wrong:** Bot submits hundreds of form requests per minute, flooding email inbox or exhausting Resend API quota.

**Why it happens:** Public API endpoints are easy targets for abuse if unprotected.

**How to avoid:** Implement rate limiting at multiple layers: Cloudflare WAF rate limiting rules, honeypot field, Turnstile for high-risk scenarios. Log suspicious activity.

**Warning signs:** Sudden spike in form submissions, Resend quota exceeded, server costs increase.

### Pitfall 6: Synchronous Form Submission (Page Refresh)
**What goes wrong:** Form submits via GET/POST causing page reload, losing user context, poor UX.

**Why it happens:** Not preventing default form behavior with `e.preventDefault()` in submit handler.

**How to avoid:** Always handle form submission with JavaScript fetch, prevent default, show loading state, display inline success/error message.

**Warning signs:** Page flashes/reloads on submit, user loses scroll position, filled fields reset unexpectedly.

### Pitfall 7: Inaccessible Error Messages
**What goes wrong:** Screen reader users don't hear validation errors, or errors shown only with color.

**Why it happens:** Missing ARIA attributes, no programmatic association between error and field.

**How to avoid:** Use `aria-invalid="true"`, `aria-describedby` pointing to error message ID, `aria-live="assertive"` for dynamic errors. Include text labels, not just color.

**Warning signs:** Accessibility audits fail, screen reader testing shows missing announcements.

## Code Examples

Verified patterns from official sources:

### Complete Pages Function for Contact Form
```javascript
// Source: Synthesized from https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/
// functions/api/contact.js

import { Resend } from 'resend';

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
}

// Handle form submission
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Parse form data
    const formData = await request.formData();

    // Honeypot check
    if (formData.get('website')) {
      return new Response(
        JSON.stringify({ error: 'Invalid submission' }),
        { status: 400 }
      );
    }

    // Extract and validate fields
    const data = {
      name: formData.get('name')?.trim() || '',
      email: formData.get('email')?.trim() || '',
      club_name: formData.get('club_name')?.trim() || '',
      member_count: formData.get('member_count')?.trim() || '',
      message: formData.get('message')?.trim() || ''
    };

    // Server-side validation
    if (!data.name || !data.email || !data.club_name) {
      return new Response(
        JSON.stringify({ error: 'Naam, e-mail en clubnaam zijn verplicht' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig e-mailadres' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Send email via Resend
    const resend = new Resend(env.RESEND_API_KEY);

    const emailBody = `
Nieuw contactformulier bericht van Rondo website

Naam: ${data.name}
E-mail: ${data.email}
Clubnaam: ${data.club_name}
${data.member_count ? `Aantal leden: ${data.member_count}` : ''}

${data.message ? `Bericht:\n${data.message}` : 'Geen bericht ingevoerd.'}
    `.trim();

    const { data: emailData, error } = await resend.emails.send({
      from: env.FROM_EMAIL, // e.g., 'website@rondo.nl'
      to: env.RECIPIENT_EMAIL,
      subject: `Contact formulier: ${data.club_name}`,
      text: emailBody
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ error: 'Er ging iets mis bij het verzenden. Probeer het later opnieuw.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact op.'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );

  } catch (err) {
    console.error('Form submission error:', err);
    return new Response(
      JSON.stringify({ error: 'Er ging iets mis. Probeer het later opnieuw.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}
```

### Accessible Form Component with Validation
```astro
---
// Source: Synthesized from https://docs.astro.build/en/recipes/build-forms-api/
// src/components/sections/ContactForm.astro
import Input from '../ui/Input.astro';
import Button from '../ui/Button.astro';
import GlassPanel from '../ui/GlassPanel.astro';
---

<section id="contact" class="py-20 px-4">
  <div class="container mx-auto max-w-2xl">
    <GlassPanel class="p-8">
      <h2 class="text-3xl font-bold text-white mb-2">Interesse?</h2>
      <p class="text-gray-300 mb-6">
        Vul het formulier in en we nemen contact met je op.
      </p>

      <form id="contact-form" method="POST" action="/api/contact" novalidate>
        <Input
          label="Naam"
          name="name"
          type="text"
          required={true}
          placeholder="Jouw naam"
          class="mb-4"
        />

        <Input
          label="E-mailadres"
          name="email"
          type="email"
          required={true}
          placeholder="jouw@email.nl"
          class="mb-4"
        />

        <Input
          label="Clubnaam"
          name="club_name"
          type="text"
          required={true}
          placeholder="Naam van je sportclub"
          class="mb-4"
        />

        <Input
          label="Aantal leden (optioneel)"
          name="member_count"
          type="text"
          placeholder="Bijvoorbeeld: 200-500"
          class="mb-4"
        />

        <!-- Textarea for message would go here -->

        <!-- Honeypot field -->
        <input
          type="text"
          name="website"
          style="position:absolute;left:-9999px;width:1px;height:1px"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <div id="form-message" role="status" aria-live="polite" class="mb-4 hidden">
          <!-- Success/error messages displayed here -->
        </div>

        <Button type="submit" variant="primary">
          Verstuur bericht
        </Button>
      </form>
    </GlassPanel>
  </div>
</section>

<script>
  // Source: https://docs.astro.build/en/recipes/build-forms-api/
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const messageDiv = document.getElementById('form-message');
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button and show loading state
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Versturen...';
    messageDiv?.classList.add('hidden');

    try {
      const formData = new FormData(form);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success
        messageDiv!.textContent = result.message;
        messageDiv!.className = 'mb-4 p-4 bg-green-500/20 border border-green-500 rounded text-green-100';
        form.reset();
      } else {
        // Error
        messageDiv!.textContent = result.error || 'Er ging iets mis. Probeer het opnieuw.';
        messageDiv!.className = 'mb-4 p-4 bg-red-500/20 border border-red-500 rounded text-red-100';
      }
    } catch (err) {
      messageDiv!.textContent = 'Er ging iets mis. Probeer het opnieuw.';
      messageDiv!.className = 'mb-4 p-4 bg-red-500/20 border border-red-500 rounded text-red-100';
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
</script>

<style>
  /* Component-specific styles */
</style>
```

### Local Development Setup (.dev.vars)
```bash
# Source: https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/
# .dev.vars (gitignored)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
FROM_EMAIL=website@rondo.nl
RECIPIENT_EMAIL=contact@rondo.nl
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate Workers project | Cloudflare Pages Functions | 2021 | Unified deployment, simpler config |
| SendGrid, Mailgun | Resend | 2023 | Better DX, simpler API, less config |
| reCAPTCHA | Cloudflare Turnstile | 2022 | Privacy-focused, free unlimited, accessible |
| Custom regex email validation | HTML5 `type="email"` | Always available | Accessible, localized, less code |
| Alert boxes for errors | Inline messages with aria-live | Ongoing | Accessible, better UX |
| jQuery for form handling | Native fetch + FormData | 2015+ | No dependencies, modern browsers |

**Deprecated/outdated:**
- **Cloudflare Workers KV for rate limiting:** Use Cloudflare Rate Limiting Rules instead - more powerful, no code needed
- **Server-side form rendering in Astro:** Astro 4.15+ has Actions for type-safe form handling, but standard HTML forms are simpler for this use case
- **Complex email templates in code:** Resend supports template system, but plain text is sufficient for notifications

## Open Questions

Things that couldn't be fully resolved:

1. **Member count field format**
   - What we know: Can be free text, dropdown, or range input. User left to Claude's discretion.
   - What's unclear: User preference for validation (e.g., "200-500" vs "300" vs dropdown bins)
   - Recommendation: Use free text input with placeholder "Bijvoorbeeld: 200-500" - most flexible, low friction. Add validation note for planner: "Accept free-form text, don't enforce strict format".

2. **Cloudflare Rate Limiting Rules configuration**
   - What we know: Cloudflare WAF offers rate limiting rules at the dashboard level, separate from function code
   - What's unclear: Whether to configure via dashboard or wrangler.toml, specific rate limits appropriate for contact forms
   - Recommendation: Configure via Cloudflare dashboard after deployment. Standard rate limit: 5 requests per minute per IP address. Can be adjusted based on legitimate traffic patterns.

3. **Cloudflare Turnstile necessity**
   - What we know: Turnstile is free, accessible, easy to implement. Honeypot + rate limiting may be sufficient.
   - What's unclear: Expected traffic volume, spam risk level for Rondo website
   - Recommendation: Start with honeypot + rate limiting. Add Turnstile in Phase 3.5 or later if spam becomes an issue. Don't over-engineer for problems that don't exist yet.

4. **Resend domain verification timing**
   - What we know: Resend requires DNS records (DKIM, SPF, DMARC) for custom domain sending
   - What's unclear: Whether Rondo already has a domain set up with Resend, or if this needs to be done during implementation
   - Recommendation: Add task for "Verify Resend domain setup and DNS records" in planning. Use Resend's test mode during development.

5. **Form placement in page layout**
   - What we know: User left placement to Claude's discretion (inline section vs separate page)
   - What's unclear: Best position relative to Hero, ProductStory, Pricing sections
   - Recommendation: Place as final section before Footer - classic pattern, natural conversion point after seeing full value proposition.

## Sources

### Primary (HIGH confidence)
- [Cloudflare Pages Functions Routing](https://developers.cloudflare.com/pages/functions/routing/) - File-based routing patterns
- [Cloudflare Pages Functions API Reference](https://developers.cloudflare.com/pages/functions/api-reference/) - Context object structure
- [Cloudflare Workers + Resend Tutorial](https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/) - Official integration guide
- [Resend Email API Reference](https://resend.com/docs/api-reference/emails/send-email) - API parameters and authentication
- [Cloudflare Pages Functions CORS Headers](https://developers.cloudflare.com/pages/functions/examples/cors-headers/) - CORS implementation
- [Cloudflare Turnstile Overview](https://developers.cloudflare.com/turnstile/) - CAPTCHA alternative
- [Astro Build Forms with API Routes](https://docs.astro.build/en/recipes/build-forms-api/) - Form component patterns

### Secondary (MEDIUM confidence)
- [Smashing Magazine: Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/) - ARIA attributes and patterns
- [W3C WAI: Validating Input](https://www.w3.org/WAI/tutorials/forms/validation/) - Accessibility best practices
- [Cloudflare Rate Limiting Best Practices](https://developers.cloudflare.com/waf/rate-limiting-rules/best-practices/) - WAF configuration
- [DevTo: Honeypot Spam Prevention](https://dev.to/felipperegazio/how-to-create-a-simple-honeypot-to-protect-your-web-forms-from-spammers--25n8) - Implementation pattern
- [Medium: Secure Contact Form API with Cloudflare Workers](https://medium.com/@philip.mutua/how-i-built-a-secure-production-ready-contact-form-api-using-cloudflare-workers-5a3b87e576c6) - Production patterns

### Tertiary (LOW confidence)
- None - all findings verified with official documentation

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Official Cloudflare + Resend documentation confirms this approach
- Architecture: HIGH - File-based routing and context patterns are well-documented
- Pitfalls: HIGH - Common issues verified through official docs and community patterns

**Research date:** 2026-02-06
**Valid until:** 2026-03-06 (30 days - stable technologies, established patterns)
