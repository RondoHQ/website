# Features Research: Rondo Website

**Domain:** B2B SaaS Landing Page for Sports Club Management
**Target:** Dutch amateur sports clubs (boards & volunteers)
**Researched:** 2026-02-06
**Overall Confidence:** HIGH (verified with 2026 sources)

## Executive Summary

Modern B2B SaaS landing pages in 2026 balance clarity with visual sophistication. The baseline has shifted: users expect instant value comprehension (3-5 seconds), real product visuals over stock photography, and transparent pricing for products under €10k annual contracts. For Rondo's target market—volunteer boards at small Dutch sports clubs—simplicity and trust signals outweigh innovation. The glass morphism design choice aligns with 2026 trends but requires careful restraint to maintain readability.

Key insight: Contact-form-only conversion paths work for complex enterprise products, but sports club management sits in a middle ground where dual CTAs (demo request + information capture) perform best. The €250/year + €0.50/member pricing model is simple enough to display transparently, which builds trust and filters unqualified leads.

---

## Table Stakes

Features users expect. Missing = product feels incomplete or untrustworthy.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Clear hero headline (<8 words, <44 chars)** | Users decide in 3-5 seconds whether to stay | Low | Must communicate outcome, not features. "Save 10 hours per week managing your club" not "Club management software" |
| **Primary CTA above fold** | Expected on every SaaS landing page | Low | High-contrast button, action-driven text ("Start free demo" not "Learn more") |
| **Real product screenshots/UI visuals** | Stock photos harm credibility in 2026 | Medium | Must show actual Rondo interface, not generic sports imagery. Annotated screenshots perform best |
| **Social proof above fold** | B2B buyers check reviews first | Low | Client logos, testimonial count, or G2/Trustpilot rating. "Trusted by 150+ sports clubs" |
| **Mobile-first responsive design** | 50%+ traffic is mobile, volunteer boards browse on phones | Medium | Touch-friendly CTAs, readable text without pinch-zoom |
| **Fast page load (<3 seconds)** | Speed = trust. 6-second loads kill conversion | Medium | Glass morphism requires GPU rendering—test performance |
| **Contact information visible** | Small organizations need human reassurance | Low | Email, phone, or chat icon in header/footer |
| **Privacy/security mention** | GDPR compliance expected for Dutch market | Low | Brief mention or footer link to privacy policy |
| **What it does (functional clarity)** | Users compare 3-5 tools simultaneously | Low | One-sentence description under headline |
| **Who it's for (audience clarity)** | Self-selection prevents wasted conversations | Low | "For amateur sports clubs in Netherlands" |
| **Accessible design (WCAG 2.1 AA minimum)** | Legal requirement (EAA 2026) + volunteer inclusivity | Medium | Color contrast, keyboard navigation, screen reader support. WCAG 2.2 preferred |

---

## Differentiators

Features that set product apart. Not expected, but valued when present.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Interactive product preview/demo in hero** | Communicate functionality instantly without form fill | High | 10-15 second micro-demos outperform "book a call". Could show live member roster or calendar |
| **Pricing transparency** | Builds trust, filters unqualified leads | Low | €250/year + €0.50/member is simple enough to display. Competitors often hide pricing |
| **Glass morphism design on dark background** | Modern aesthetic differentiates from competitors | Medium | Aligns with 2026 trends. Risk: Can harm readability if over-used. Keep text layers fully opaque |
| **Dual CTA strategy** | Addresses both "ready to buy" and "still researching" segments | Low | Primary: "Request demo" / Secondary: "See pricing" or "Watch video" |
| **Video testimonial from volunteer board member** | Relatable social proof for volunteer target audience | Medium | Scripted customer explaining time saved. Keep <90 seconds |
| **Dutch-language localization** | Most competitors are English-first or Netherlands-located but English UX | Low | Beyond translation: culturally-appropriate imagery, Dutch sports references |
| **Progressive disclosure for features** | Reduces cognitive load for non-technical volunteers | Medium | Tabs/accordions to reveal advanced features. Simple overview at top, details below fold |
| **Integration showcase** | Sportlink Sync as differentiator if competitors lack it | Medium | "Automatically syncs with Sportlink Club" with visual connection diagram |
| **ROI calculator** | "Calculate your time savings" tool | Medium | Input member count → shows hours saved per month. Concrete value proposition |
| **Real case study with metrics** | "FC Example saved 12 hours/week" more powerful than generic testimonial | Medium | Requires customer cooperation. Before/after comparison |
| **Annual pricing (not monthly)** | Aligns with sports club budget cycles (yearly season planning) | Low | Unique angle: "One payment per season" |
| **Micro-animations on scroll** | Demonstrates features through motion | Medium | Glass morphism pairs well with subtle hover effects, scroll-based progress. Risk: Performance impact |

---

## Anti-Features

Features to explicitly NOT build. Common mistakes in this domain.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Multi-page funnel with 10+ form fields** | Volunteer boards won't complete long forms. 5 fields max → 120% better conversion | Single-page contact form: Name, Email, Club Name, Member Count, Message (optional) |
| **"Contact sales" as only CTA** | Creates friction. Works for €50k+ deals, not €250/year products | Offer demo request OR transparent pricing page. Dual path approach |
| **Abstract 3D graphics/generic stock photos** | 2026 trend away from this. Feels impersonal | Real product screenshots, real Dutch sports club imagery (with permission) |
| **Auto-play video with sound** | Annoys users, especially on mobile | Click-to-play video, muted by default, stays on page (don't redirect to YouTube) |
| **Chatbot popup within 5 seconds** | Interrupts initial comprehension phase | Delay chatbot 30+ seconds OR trigger after scroll depth. Volunteer boards prefer email anyway |
| **Feature list without context** | "Team management, scheduling, payments" meaningless without use case | Outcome-focused: "Never manually update rosters again" with feature underneath |
| **Hiding pricing behind demo** | Creates suspicion. Only hide for complex custom enterprise | Show base price (€250/year) clearly. "Contact for clubs >500 members" acceptable |
| **US-centric imagery/language** | Target is Netherlands amateur sports | Dutch language, Dutch sports (football/hockey/volleyball), Euro pricing |
| **Multiple competing CTAs** | "Sign up" "Book demo" "Free trial" "Learn more" = decision paralysis | One primary CTA per section. Secondary actions visually de-emphasized |
| **Long hero headline (>10 words)** | Cognitive overload. Average high-performer: <8 words | Test: "Sports club management made simple" vs "Comprehensive all-in-one platform for amateur sports club administration" |
| **Excessive transparency/blur effects** | Glass morphism gone wrong destroys text readability | Use glass morphism for cards/containers, not text backgrounds. Test contrast ratios |
| **AI-generated images without polish** | Signals low quality, rushed product | Professional photography OR clean product screenshots. Skip imagery if budget constrained |
| **Self-serve signup without qualification** | Wrong fit customers create support burden | Contact form → qualification call → setup. Small clubs need onboarding help anyway |

---

## Feature Dependencies

### Critical Path (Must Build First)

```
Foundation Layer:
└─ Responsive layout (mobile-first)
   └─ Performance optimization (<3s load)
      └─ Accessibility baseline (WCAG 2.1 AA)
         └─ Clear hero (headline + visual + CTA)
            └─ Social proof (logos or testimonial)
```

### Value Communication Layer (Build Second)

```
Hero Section:
└─ Outcome-focused headline
   └─ Supporting one-liner ("What it does")
   └─ Primary CTA ("Request demo")
   └─ Product visual (screenshot or video)
      └─ Social proof indicator ("150+ clubs")

Secondary Sections:
└─ Problem/Solution framing
   └─ Feature highlights (3-5 max above fold)
   └─ Detailed features (progressive disclosure below fold)
```

### Trust Layer (Build Third)

```
Trust Signals:
└─ Customer logos
   └─ Testimonial with real name/photo
      └─ Case study with metrics (optional but valuable)
         └─ Third-party rating (G2/Trustpilot) if available

Pricing Transparency:
└─ Pricing page or section
   └─ Clear base price (€250 + €0.50/member)
      └─ Example calculation ("100 members = €300/year")
         └─ "Contact for custom" only for 500+ members
```

### Differentiation Layer (Build Fourth - Post-MVP)

```
Interactive Elements:
└─ Micro-animations (scroll/hover)
   └─ Interactive product preview
      └─ ROI calculator

Advanced Social Proof:
└─ Video testimonial
   └─ Multiple case studies
      └─ Industry-specific examples (football vs hockey clubs)
```

### Technical Dependencies

```
Design System:
└─ Glass morphism component library
   └─ Dark obsidian background system
      └─ Contrast-tested text colors
         └─ Accessible interactive elements

Performance:
└─ Image optimization (WebP, lazy load)
   └─ CSS/JS minification
      └─ GPU-rendered effects testing
         └─ Mobile performance validation
```

### Content Dependencies

```
Copywriting:
└─ Value proposition research (customer interviews)
   └─ Headline A/B test variations
      └─ Feature description framework
         └─ Dutch language professional translation

Social Proof:
└─ Customer permission/contracts
   └─ Logo/photo collection
      └─ Testimonial scripting/recording
         └─ Case study metrics validation
```

---

## MVP Recommendation

### Phase 1: Foundation (Week 1-2)

**Must Have:**
1. **Responsive hero section** with clear headline, product screenshot, primary CTA
2. **Mobile-first layout** with performance budget (<3s load)
3. **Contact form** (5 fields max: Name, Email, Club Name, Member Count, Message)
4. **Basic social proof** (customer count or 2-3 logos if available)
5. **Accessibility baseline** (WCAG 2.1 AA: color contrast, keyboard nav, semantic HTML)
6. **Transparent pricing section** (€250 + €0.50/member with example calculation)

**Design:**
- Glass morphism for card containers only (not text backgrounds)
- Dark obsidian background with high-contrast text
- Single primary CTA per section

**Content:**
- Outcome-focused headline (<8 words)
- Three feature highlights (above fold)
- One customer testimonial (text + name/club)

### Phase 2: Trust & Clarity (Week 3-4)

**Should Have:**
7. **Detailed features section** with progressive disclosure (tabs or accordions)
8. **Video demo** (60-90 seconds, click-to-play, hosted on page)
9. **Real customer testimonial** with photo and club name
10. **Integration showcase** (Sportlink Sync, Laposta, FreeScout with visual diagram)
11. **FAQ section** (8-10 common questions from sales conversations)

### Defer to Post-MVP

**Nice to Have (Phase 3+):**
- Interactive product preview in hero
- ROI calculator tool
- Video testimonials
- Multiple case studies with metrics
- A/B testing framework for headlines
- Chatbot integration
- Multi-language support (if expanding beyond Netherlands)
- Micro-animations (scroll-triggered, hover effects)

**Rationale for deferring:**
- **Interactive demo**: High development complexity, test conversion with static screenshots first
- **ROI calculator**: Requires validation of time-savings claims with real customer data
- **Video testimonials**: Need customer cooperation, professional recording equipment
- **Animations**: Performance risk with glass morphism, validate design system first

---

## Implementation Notes

### Glass Morphism Constraints

**Do:**
- Use for card/container backgrounds with backdrop-filter blur
- Apply to navigation bars, modal windows, pricing cards
- Keep transparency subtle (80-90% opacity, not 50%)
- Test on low-end mobile devices for performance

**Don't:**
- Apply to text layers (readability killer)
- Use excessive blur radius (>20px often hurts performance)
- Layer more than 2-3 glass elements (compounds GPU load)
- Forget fallback for browsers without backdrop-filter support

### Contact Form vs Self-Serve

**Recommendation: Contact form for MVP**
- Sports club management requires setup/onboarding assistance
- Volunteer boards benefit from human qualification call
- €250/year price point doesn't justify full self-serve infrastructure
- Can add self-serve signup in Phase 3 if inbound volume justifies it

### Accessibility Considerations

**Critical for volunteer boards:**
- Many volunteers are 50+ years old → larger text, clear hierarchy
- Board meetings often review website together → desktop/tablet experience matters
- Budget approval process → printable/shareable pricing page
- Non-technical users → avoid jargon, use plain Dutch language

### Conversion Optimization Strategy

**Test priority (after MVP launch):**
1. Headline variations (outcome-focused vs feature-focused)
2. CTA text ("Request demo" vs "See Rondo in action" vs "Book a call")
3. Social proof placement (above fold vs near CTA vs both)
4. Pricing visibility (dedicated page vs hero section callout)
5. Form length (5 fields vs 3 fields)

**Benchmarks to target:**
- Landing page conversion: 5-15% (dedicated page)
- Form completion: 33%+ (if reached form page)
- Mobile bounce rate: <60%
- Page load time: <3 seconds

---

## Complexity Assessment

| Feature Category | Complexity | Timeline | Dependencies |
|-----------------|------------|----------|--------------|
| Responsive foundation | Medium | 1-2 weeks | Design system, component library |
| Hero section | Low | 3-5 days | Copywriting, product screenshots |
| Contact form | Low | 2-3 days | Email integration, form validation |
| Pricing section | Low | 1-2 days | Final pricing confirmation |
| Social proof | Low-Medium | 3-5 days | Customer permissions, asset collection |
| Glass morphism design | Medium | 1 week | Browser testing, performance validation |
| Video production | Medium-High | 2-3 weeks | Customer cooperation, recording equipment |
| Interactive demo | High | 3-4 weeks | React/Vue integration, API mocking |
| ROI calculator | Medium | 1-2 weeks | Data validation, UX design |
| Accessibility compliance | Medium | Ongoing | WCAG audit, keyboard testing, screen reader testing |

---

## Sources

### B2B SaaS Landing Page Best Practices
- [Best Practices for Designing B2B SaaS Landing Pages – 2026](https://genesysgrowth.com/blog/designing-b2b-saas-landing-pages)
- [Best B2B SaaS Website Examples (2026)](https://www.vezadigital.com/post/best-b2b-saas-websites-2026)
- [Top Landing Page Design Trends for B2B SaaS in 2026](https://www.saashero.net/content/top-landing-page-design-trends/)
- [9 B2B Landing Page Lessons From 2025 to Drive More Conversions in 2026](https://instapage.com/blog/b2b-landing-page-best-practices)
- [26 SaaS landing pages: examples, trends and best practices](https://unbounce.com/conversion-rate-optimization/the-state-of-saas-landing-pages/)

### Table Stakes Features
- [10 SaaS Landing Page Trends for 2026 (with Real Examples)](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples)
- [10 SaaS Landing Page Design Best Practices to Follow in 2026](https://www.designstudiouiux.com/blog/saas-landing-page-design/)
- [20 Best SaaS Landing Pages + 2026 Best Practices for Higher Conversions](https://fibr.ai/landing-page/saas-landing-pages)

### Conversion Elements
- [How to Skyrocket Your SaaS Website Conversions in 2026](https://www.webstacks.com/blog/website-conversions-for-saas-businesses)
- [SaaS website design in 2026 — best SaaS websites, examples & conversion framework](https://www.stan.vision/journal/saas-website-design)
- [Average SaaS Conversion Rates: 2026 Report](https://firstpagesage.com/seo-blog/average-saas-conversion-rates/)

### Hero Section Best Practices
- [Best Practices for SaaS Website Hero Sections](https://www.alfdesigngroup.com/post/saas-hero-section-best-practices)
- [How to create a perfect SaaS landing page hero section](https://landingrabbit.com/blog/saas-website-hero-section)

### Pricing Transparency
- [12 SaaS Pricing Page Best Practices with Examples in 2026](https://www.designstudiouiux.com/blog/saas-pricing-page-design-best-practices/)
- [Hidden Prices, Lost Buyers: Why B2B SaaS Companies Should Embrace Transparency](https://www.pacepricing.com/blog/hidden-prices-lost-buyers-why-b2b-saas-companies-should-embrace-transparency)
- [The SaaS Pricing Strategy Guide for 2026](https://www.momentumnexus.com/blog/saas-pricing-strategy-guide-2026/)

### Contact Form vs Self-Serve
- [Should You Move from Self-Serve to Sales-Supported SaaS?](https://blog.close.com/move-from-self-serve-to-sales-supported-saas/)
- [SaaS Sign-Up Rate Benchmarks](https://www.klipfolio.com/blog/value-of-saas-sign-up-rate-benchmarks)
- [A Guide to SaaS Signup Flows](https://userguiding.com/blog/signup-flows-saas)

### Anti-Patterns and Mistakes
- [I Reviewed 250+ SaaS Landing Pages— Avoid These 10 Common Design Mistakes](https://uxplanet.org/i-reviewed-250-saas-landing-pages-avoid-these-10-common-design-mistakes-a1a8499e6ee8)
- [The top 10 saas landing page mistakes to avoid](https://abmatic.ai/blog/top-saas-landing-page-mistakes-to-avoid)

### Glass Morphism Design
- [What is Glassmorphism? UI Design Trend 2026](https://www.designstudiouiux.com/blog/what-is-glassmorphism-ui-trend/)
- [Glassmorphism: What It Is and How to Use It in 2026](https://invernessdesignstudio.com/glassmorphism-what-it-is-and-how-to-use-it-in-2026)
- [UI Design Trend 2026 #2: Glassmorphism and Liquid Design Make a Comeback](https://medium.com/design-bootcamp/ui-design-trend-2026-2-glassmorphism-and-liquid-design-make-a-comeback-50edb60ca81e)
- [2026 Web Design Trends: Glassmorphism, Micro-Animations & AI Magic](https://www.digitalupward.com/blog/2026-web-design-trends-glassmorphism-micro-animations-ai-magic/)

### Trust Signals and B2B Design
- [18 Best B2B Websites in 2026: Examples & Best Practices](https://www.tilipmandigital.com/resource-center/articles/best-b2b-websites)
- [Top 10 B2B Website Design Trends for 2026](https://www.axongarside.com/blog/b2b-website-design-trends-2026)

### Accessibility Requirements
- [WCAG for SaaS Owners: The Complete Guide to Web Accessibility Compliance in 2026](https://medium.com/@mhdrahman/wcag-for-saas-owners-the-complete-guide-to-web-accessibility-compliance-in-2026-8eb794a9bcfa)
- [2026 WCAG & ADA Website Compliance Requirements & Standards](https://www.accessibility.works/blog/wcag-ada-website-compliance-standards-requirements/)
- [SaaS Accessibility Legal Compliance: ADA, EAA & WCAG](https://www.accessibility.works/blog/saas-cloud-software-ada-compliance-wcag-testing-auditing/)

### Progressive Disclosure
- [The Power of Progressive Disclosure in SaaS UX Design](https://lollypop.design/blog/2025/may/progressive-disclosure/)
- [Progressive Disclosure Examples to Simplify Complex SaaS Products](https://userpilot.com/blog/progressive-disclosure-examples/)
- [When and how to implement progressive disclosure in a landing page?](https://medium.com/@leenaguharoy/when-and-how-to-implement-progressive-disclosure-in-a-landing-page-9410bab914b1)

### Sports Club Management Examples
- [Best Club Management Software with Customization 2026](https://www.getapp.com/recreation-wellness-software/club-management/f/custom-landing-pages/)
- [Sports Club Management Software | Jersey Watch](https://www.jerseywatch.com/who-we-serve/sports-club-management-software)
- [All-in-one Sports Club Management Software | 360Player](https://en-us.360player.com/)

### Small Business SaaS
- [37 Best B2B SaaS Websites (2025)](https://www.joinamply.com/post/best-b2b-saas-websites)
- [35 SaaS website design examples to learn from in 2026](https://webflow.com/blog/saas-website-design-examples)
- [Best Practices For A SaaS Website](https://www.poweredbysearch.com/blog/saas-website-best-practices/)
