# Website Audit per Persona

Audit of the rondo.club homepage against each buyer persona's needs.
The page sections in order: Hero, ProductStory, FeatureGallery, Origin, IntegrationDiagram, GettingStarted, Pricing, BusinessCase, Support, FAQ, ContactForm, Footer.

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
| No contract period summary | Medium | The FAQ says "opzeggen voor 1 juli", but a chair wants a clear, visible "Maandelijks opzegbaar" or "Jaarcontract, opzegbaar voor 1 juli" somewhere prominent. |
| "Open source" needs more explanation | Low | The chair may not know what open source means for their risk. The FAQ explains it well, but inline on the page it's just a label. |

### Verdict: Weak. The information exists but is buried. The chair scans quickly and won't find what they need.

---

## 3. De Penningmeester (budget gatekeeper)

Pricing is clear, but ROI framing and contract terms could be stronger.

### What works

- **Pricing section** — dead simple formula (€250 + €0.50/lid), three concrete examples (250/500/1000 leden).
- **"Alles inbegrepen, geen verrassingen"** — good reassurance.
- **BusinessCase** "100+ uur per jaar bespaard" — ROI framing present.
- **FAQ** on stopping and data ownership — exit terms exist.
- **Invoice details** — "Jaarlijkse facturatie, ledental op peildatum 1 september, excl. btw" is precise.

### Gaps

| Gap | Severity | Notes |
|-----|----------|-------|
| No explicit cost-vs-savings comparison | Medium | "100+ uur bespaard" is good but not connected to the price. For a 500-member club: €500/year ÷ 100 hours = €5/hour. That's a compelling number to state explicitly. |
| Contract period not on pricing page | Medium | It's in the FAQ only. The penningmeester wants to see "jaarcontract" or "maandelijks opzegbaar" right next to the price. |
| Payment method unclear | Low | How does the club pay? Invoice? Automatische incasso? Important for a treasurer to know. |
| No "what's NOT included" clarity | Low | Does the club need Laposta separately? FreeScout hosting? What are the real total costs? |
| Price comparison to alternatives missing | Low | Even a simple "vergelijk: een secretaris die 2 uur per week besteedt aan handmatig werk kost de club meer dan Rondo" would help. |

### Verdict: Adequate. Pricing is clear, but the penningmeester has to hunt for contract terms and do their own ROI math.

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
- **Open source** mentioned in pricing, FAQ, and footer with GitHub link.
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
| **Medium** | "Forward to board" flow missing | Secretaris | Help the secretary champion Rondo: a CTA or shareable summary with trust signals + pricing for board members. |
| **Medium** | Contract terms scattered | Penningmeester, Voorzitter | Surface key terms (contract period, cancellation, data export) alongside or near pricing — not just in FAQ. |
| **Medium** | ROI not made explicit | Penningmeester | Connect hours saved to cost: "For a 500-member club, Rondo costs less than €10 per week." |
| **Medium** | Joost's credibility underplayed | Techneut, Voorzitter | "Founder of Yoast SEO" is a trust signal that works for both technical and business audiences. Currently it's completely absent. |
| **Low** | Technical depth lacking | Techneut | Add a brief "Technisch" section or FAQ entries about stack, security measures, sync mechanism. |
| **Low** | Laposta/FreeScout costs unclear | Penningmeester | Clarify that Laposta is free up to 2000 addresses (mentioned in FAQ but not near pricing) and that FreeScout hosting is separate. |
