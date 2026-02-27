# Section Copy Edits (First Pass)

Date: 2026-02-27
Basis: only screenshots currently rendered on the website.

## Screenshot-proof snapshot

- Explicit: `CAP-002`, `CAP-005`, `CAP-006`, `CAP-009`, `CAP-010`, `CAP-011` (6)
- Implicit: `CAP-003`, `CAP-012`, `CAP-016`, `CAP-019` (4)
- Explicit-placeholder: `CAP-022`, `CAP-023`, `CAP-024`, `CAP-025` (4)
- None: all other capabilities (15)

## Exact copy edits by section/key

| Section | Translation key | Proposed NL | Proposed EN | Capability focus |
|---|---|---|---|---|
| Hero | `hero.subline` | Met Rondo hoeft dat niet meer. Ledendata, contributie en facturatie in één systeem, automatisch gesynchroniseerd met Sportlink. Penningmeesters krijgen direct overzicht via het finance dashboard; ledenpassen en scanner test je direct in de demo. | With Rondo, that's a thing of the past. Member data, dues and invoicing in one system, automatically synced with Sportlink. Treasurers get instant overview through the finance dashboard; membership passes and scanner can be tested directly in the demo. | `CAP-022`, `CAP-023`, `CAP-024`, `CAP-025`, `CAP-029` |
| Hero | `hero.demo.hint` | Inloggen met gebruikersnaam <strong>demo</strong> en wachtwoord <strong>demo</strong>. Demo bevat ledenbeheer, contributie, ledenpassen en scanner. | Log in with username <strong>demo</strong> and password <strong>demo</strong>. Demo includes member admin, dues, membership passes and scanner. | `CAP-029`, `CAP-023`, `CAP-024`, `CAP-025` |
| ProductStory | `product.card5.solution` | Geef vrijwilligers precies de toegang die ze nodig hebben, bijvoorbeeld alleen VOG-beheer, contributie of teambeheer. | Give volunteers exactly the access they need, for example only VOG management, dues, or team management. | `CAP-004` |
| ProductStory | `product.card6.solution` | Rondo Club maakt Apple Wallet- en Google Wallet-ledenpassen. In de webapp scan je de pas en zie je direct: geldig, verlopen of onbekend. | Rondo Club issues Apple Wallet and Google Wallet membership passes. In the webapp, you scan a pass and instantly see: valid, expired, or unknown. | `CAP-023`, `CAP-024`, `CAP-025` |
| ProductStory | `product.card7.solution` | Het finance dashboard toont openstaand bedrag, recente betalingen en acties die nu opvolging nodig hebben. | The finance dashboard shows outstanding amounts, recent payments, and actions that need follow-up now. | `CAP-022` |
| FeatureGallery | `gallery.subheading` | Bekijk hoe Rondo Club eruitziet. Klik op een scherm om te vergroten. Ledenpassen, scanner en finance dashboard test je in de demo. | See what Rondo Club looks like. Click a screen to enlarge. Membership passes, scanner and the finance dashboard can be tested in the demo. | `CAP-022`, `CAP-023`, `CAP-024`, `CAP-025` |
| InvoicingHighlight | `invoicing.dues.bulk.desc` | Start één bulk-run voor alle leden die gefactureerd moeten worden; resultaat en aantallen staan direct klaar. | Start one bulk run for all members who need invoicing; result and counts are available immediately. | `CAP-012` |
| InvoicingHighlight | `invoicing.both.status.desc` | Na betaling werkt Rondo de factuurstatus automatisch bij, inclusief historie per factuur. | After payment, Rondo updates invoice status automatically, including per-invoice history. | `CAP-019` |
| InvoicingHighlight | `invoicing.both.dashboard.desc` | Direct overzicht voor de penningmeester: openstaand bedrag, recente betalingen en acties die aandacht vragen. | Direct treasurer overview: outstanding amount, recent payments, and actions that need attention. | `CAP-022` |
| IntegrationDiagram | `integration.sync.desc` | Rondo Sync draait elke nacht en verwerkt wijzigingen uit Sportlink en Nikki: nieuwe leden, verhuizingen en uitschrijvingen in alle gekoppelde systemen. | Rondo Sync runs nightly and processes changes from Sportlink and Nikki: new members, address changes, and cancellations across all connected systems. | `CAP-001` |
| IntegrationDiagram | `integration.freescout.desc` | Als een lid mailt, zie je direct lidcontext in FreeScout (wie, team en historie). Rondo Sync houdt die gegevens actueel. | When a member emails, you immediately see member context in FreeScout (who, team and history). Rondo Sync keeps those details up to date. | `CAP-008` |
| FAQ (new) | `faq.q11` | Kan ik ledenpassen en scanner nu al zien? | Can I already see membership passes and scanner? | `CAP-023`, `CAP-024`, `CAP-025` |
| FAQ (new) | `faq.a11` | Ja. In de demo kun je Apple/Google-ledenpassen en de scannerflow direct testen met demo/demo. | Yes. In the demo you can directly test Apple/Google membership passes and the scanner flow using demo/demo. | `CAP-023`, `CAP-024`, `CAP-025`, `CAP-029` |
| FAQ (new) | `faq.q12` | Wat zie ik in het finance dashboard? | What do I see in the finance dashboard? | `CAP-022` |
| FAQ (new) | `faq.a12` | Openstaand bedrag, recente betalingen en acties die opvolging nodig hebben. | Outstanding amount, recent payments, and actions that need follow-up. | `CAP-022` |
| FAQ (new) | `faq.q13` | Hoe actueel is de demo? | How up to date is the demo? | `CAP-029` |
| FAQ (new) | `faq.a13` | De demo is bedoeld om functionaliteit te bekijken. Data kan afwijken van productie en wordt periodiek ververst. | The demo is meant to evaluate functionality. Data can differ from production and is refreshed periodically. | `CAP-029` |

## Placement notes

- Replace existing keys above where they already exist.
- Add the three FAQ items at the end of the current FAQ list in both NL and EN.
- Keep legal/compliance pages claim-based; screenshot proof is less relevant there than source/document proof.
