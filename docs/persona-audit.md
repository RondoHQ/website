# Website Audit per Persona

Audit of the rondo.club homepage against each buyer persona's needs.
The page sections in order: Hero, ProductStory, FeatureGallery, Origin, IntegrationDiagram, GettingStarted, Sponsorship, BusinessCase, Support, FAQ, ContactForm, Footer.

---

## 1. De Secretaris (primary discoverer)

The website is strongest for this persona. The entire top half speaks directly to their pain.

### What works

- **Hero headline** "Niemand weet welke ledenlijst de juiste is" — instant recognition.
- **ProductStory** maps 5 real scenarios (new member, VOG, families, mailing, access control) that are exactly the secretary's daily frustrations.
- **Screenshots + demo** — the hero slideshow, card screenshots, and FeatureGallery all let them visualize the solution.
- **Demo CTA** in the hero with credentials (demo/demo) — very low barrier.
- **BusinessCase** section is literally titled "De argumenten voor je bestuursvergadering" — ammunition ready-made.

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| No "forward this to your board" CTA | Medium | The secretary needs to sell this internally. A "Stuur dit naar je bestuur" button/link that creates an email with key info would make championing easier. |
| No anchor/shortcut to specific features | Low | If they've heard about Rondo for VOG or contributions specifically, there's no way to jump there. Nav only has generic "Product". |
| No testimonial or quote from a real secretary | Medium | "I used to spend 3 hours a week on this" from AWC's secretary (even if that's Joost himself) would be powerful. |

### Verdict: Strong. The secretary will feel seen and can take action.

---

## 2. De Voorzitter / Bestuurslid (decision maker)

Trust information exists but is scattered and buried deep. A chair scanning the page in 60 seconds will miss most of it.

### What works

- **Origin section** — real person (Joost de Valk), real club (AWC), real company identity.
- **Trust bar** in BusinessCase — "Je data blijft altijd van jou", "Europese servers", "Open source, geen lock-in", "99% uptime".
- **FAQ** addresses key concerns: stopping, data ownership, developer risk — all with specific answers.
- **Footer** has KvK number, links to terms and privacy policy.

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| Trust signals are too far down the page | High | The trust bar sits in section 8 of 12. A chair scans the top and bounces. Key trust signals (KvK, bewerkersovereenkomst, data ownership, EU hosting) should appear much earlier — ideally above the fold or right after the hero. |
| No social proof | High | No testimonials, no "used by X clubs", no case study. The only proof is "AWC gebruikt het dagelijks" buried in the Origin paragraph. One concrete line like "Sinds 2023 in gebruik bij AWC Wijchen (500+ leden)" would help enormously. |
| KvK only in footer | Medium | The company identity (Emilia Projects BV, KvK 89067959) is credibility a chair actively looks for, but it's in the tiniest footer text. Surface it in the trust bar or Origin section. |
| "bewerkersovereenkomst" isn't prominent | Medium | It's mentioned in step 2 of GettingStarted and FAQ, but the chair wants to see it as a headline trust signal, not find it by accident. |
| Sponsorship conditions are club-specific | Medium | The model is clear, but the exact label, visibility and duration are agreed with each club. Show that the written agreement records these terms. |
| "Open source" needs more explanation | Low | The chair may not know what open source means for their risk. The FAQ explains it well, but inline on the page it's just a label. |

### Verdict: Weak. The information exists but is buried. The chair scans quickly and won't find what they need.

---

## 3. De Penningmeester (budget gatekeeper)

The sponsorship model is clear, but the exact agreement and expected third-party usage costs still require a conversation.

### What works

- **Sponsorship section** — states that Rondo has no licence fee and explains the Your.Online label sponsorship in return.
- **Third-party costs are explicit** — Mollie transactions, email delivery and FreeScout hosting are named as separate costs.
- **BusinessCase** "100+ uur per jaar bespaard" — ROI framing present.
- **FAQ and terms** explain open-source self-hosting, data ownership and the commercial arrangement.

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| Exact sponsorship commitment is not illustrated | Medium | Give one non-binding example of the decisions recorded in the agreement: label, placement, duration and evaluation moment. |
| Third-party costs are not quantified | Low | The site correctly names the cost categories, but a treasurer may still want indicative links or examples for Mollie, email and FreeScout hosting. |
| Savings are not connected to operational costs | Low | "100+ uur bespaard" is useful; one example could show how the remaining third-party costs compare with saved volunteer time. |

### Verdict: Strong. The model and exclusions are clear; only the club-specific sponsorship terms and indicative third-party costs remain to discuss.

---

## 4. De Vrijwilligerscoordinator / VOG-verantwoordelijke

This persona can find what they need but has to scroll through a lot of unrelated content first.

### What works

- **ProductStory scenario 2** is specifically about VOG — "Wie heeft er al een VOG?" with a clear before/after.
- **FeatureGallery** has a dedicated VOG tab with two screenshots (overzicht + acties).
- **"Automatisch een herinnering"** for expired VOGs — addresses the core pain.

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| No direct entry point for VOG | High | If this person Googles "vog administratie sportvereniging" and lands on the homepage, they have to scroll past the hero and scan 5 ProductStory cards to find theirs. A nav link or anchor "VOG" would help, or a dedicated landing page. |
| VOG workflow not explained | Medium | How does VOG data get into Rondo? Does the coordinator enter it manually? Is there an import? The "what" is clear, the "how" is not. |
| No regulatory urgency | Medium | No mention of KNVB/bond requirements for VOG, no "avoid compliance risks" framing. This person is often motivated by fear of non-compliance. |
| Automatic reminders — to whom? | Low | "Automatisch een herinnering" — but to whom? The volunteer? The coordinator? Via email? Small detail but this persona would want to know. |

### Verdict: Adequate but unfocused. The content exists but isn't optimized for someone arriving with a single specific pain.

---

## 5. De ICT-vrijwilliger / Techneut

The integration diagram is good, but technical depth is thin.

### What works

- **IntegrationDiagram** — animated SVG showing the data flow between all systems, with explanation cards per system.
- **Origin** — "ervaren developer en internet ondernemer" establishes credibility (though underplays Joost's background significantly).
- **Open source** mentioned in Sponsorship, FAQ, and footer with GitHub link.
- **FAQ** on data storage ("Europese servers, AVG") and developer risk ("code is vrij beschikbaar").

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| No tech stack info | Medium | The techneut wants to know: WordPress (PHP), Node.js, where it's hosted, what database. "Gebouwd op WordPress" appears once in an explanation card but isn't framed as a deliberate technical choice. |
| GitHub link doesn't sell quality | Medium | Links to `github.com/rondohq` but no mention of activity, stars, or code quality. The techneut will click through anyway, but priming with "actief onderhouden, X commits in de laatste maand" would help. |
| Security details missing | Medium | "Europese servers" and "passende technische maatregelen" is vague. The techneut wants specifics: HTTPS, encrypted at rest, backup frequency, access control. |
| Nightly sync mechanism unexplained | Low | The diagram shows data flow beautifully but doesn't explain the sync mechanism (cron? webhook? API polling?). |
| Joost's background underplayed | Low | "Ervaren developer en internet ondernemer" — Joost de Valk is the founder of Yoast SEO, used by millions. This is massive technical credibility that's completely hidden. |
| No uptime/monitoring info | Low | "99% uptime" is in the trust bar but with no explanation of monitoring, SLA, or incident response. |

### Verdict: Surface-level adequate. The techneut gets the gist but can't do a proper technical evaluation from the website alone. They'll need to dig into GitHub and possibly ask questions.

---

## Cross-persona summary

| Priority | Issue | Affected personas | Recommendation |
|----------|-------|-------------------|----------------|
| **High** | Trust signals buried too deep | Voorzitter, Penningmeester | Add a compact trust bar higher on the page (after Hero or ProductStory). Include: KvK, bewerkersovereenkomst, EU hosting, data ownership, open source. |
| **High** | No social proof | Voorzitter, all others | Add at minimum "In gebruik bij AWC Wijchen (500+ leden) sinds 2023" prominently. A one-line quote from a real user would be even better. |
| **High** | No direct path for VOG searchers | VOG-verantwoordelijke | Either add "VOG" to the nav, create a #vog anchor, or build a dedicated /vog landing page. |
| **Medium** | "Forward to board" flow missing | Secretaris | Help the secretary champion Rondo with a shareable summary of trust signals, sponsorship and expected third-party costs. |
| **Medium** | Sponsorship example missing | Penningmeester, Voorzitter | Show which terms are agreed without presenting one fixed arrangement as universal. |
| **Low** | Operational-cost context is limited | Penningmeester | Connect saved volunteer time to the separate third-party cost categories without claiming a fixed total. |
| **Medium** | Joost's credibility underplayed | Techneut, Voorzitter | "Founder of Yoast SEO" is a trust signal that works for both technical and business audiences. Currently it's completely absent. |
| **Low** | Technical depth lacking | Techneut | Add a brief "Technisch" section or FAQ entries about stack, security measures, sync mechanism. |
| **Low** | Third-party prices require external lookup | Penningmeester | Link to current provider information where useful; keep Rondo copy limited to which costs are included or excluded. |
