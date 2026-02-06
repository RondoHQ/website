# Phase 3: User Setup Required

**Generated:** 2026-02-06
**Phase:** 03-contact-form-integration
**Status:** Incomplete

Complete these items for the Resend email integration to function. Claude automated everything possible; these items require human access to external dashboards/accounts.

## Environment Variables

| Status | Variable | Source | Add to |
|--------|----------|--------|--------|
| [ ] | `RESEND_API_KEY` | Resend Dashboard (resend.com) → API Keys → Create API Key | Cloudflare Pages env vars + `.dev.vars` |
| [ ] | `FROM_EMAIL` | Must match a verified domain in Resend (e.g. `website@rondo.nl`) | Cloudflare Pages env vars + `.dev.vars` |
| [ ] | `RECIPIENT_EMAIL` | The email address that should receive contact form submissions | Cloudflare Pages env vars + `.dev.vars` |

## Account Setup

- [ ] **Create Resend account** (if needed)
  - URL: https://resend.com/signup
  - Skip if: Already have account

## Dashboard Configuration

- [ ] **Add and verify sending domain DNS records**
  - Location: Resend Dashboard → Domains → Add Domain
  - Add your domain (e.g. `rondo.nl`)
  - Configure DNS records: DKIM, SPF, DMARC as provided by Resend
  - Wait for verification to complete

## Local Development

For local testing, create `.dev.vars` in project root:

```
RESEND_API_KEY=re_xxxxx
FROM_EMAIL=website@rondo.nl
RECIPIENT_EMAIL=joost@rondo.nl
```

## Verification

After completing setup, verify with:

```bash
# Check local dev vars exist
test -f .dev.vars && echo "OK" || echo "Missing .dev.vars"

# Test build passes
npm run build

# Start dev server and test form submission
npm run dev
# Submit form → should receive email at RECIPIENT_EMAIL
```

Expected: Form submission sends email to recipient address.

---

**Once all items complete:** Mark status as "Complete" at top of file.
