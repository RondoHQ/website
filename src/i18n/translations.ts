import type { Lang } from './utils';

const translations = {
  // ─── Site Metadata ───
  'site.title': {
    nl: 'Rondo — Ledenadministratie voor sportverenigingen',
    en: 'Rondo — Member management for sports clubs',
  },
  'site.description': {
    nl: 'Niemand weet welke ledenlijst de juiste is. Met Rondo stroomt ledendata automatisch van Sportlink naar overal waar je het nodig hebt.',
    en: "Nobody knows which member list is the right one. With Rondo, member data flows automatically from Sportlink to wherever you need it.",
  },

  // ─── BaseLayout ───
  'skip': {
    nl: 'Spring naar hoofdinhoud',
    en: 'Skip to main content',
  },

  // ─── Header / Nav ───
  'nav.product': { nl: 'Product', en: 'Product' },
  'nav.roles': { nl: 'Voor jouw rol', en: 'By role' },
  'nav.integration': { nl: 'Integratie', en: 'Integration' },
  'nav.costs': { nl: 'Kosten', en: 'Costs' },
  'nav.faq': { nl: 'FAQ', en: 'FAQ' },
  'nav.contact': { nl: 'Contact', en: 'Contact' },

  // ─── Hero ───
  'hero.headline': {
    nl: 'Eén platform voor je clubadministratie',
    en: 'One platform for your club administration',
  },
  'hero.subline': {
    nl: 'Van ledenbeheer en contributie tot facturatie, VOG en ledenpassen: Rondo automatiseert je clubprocessen en houdt alles synchroon met Sportlink.',
    en: 'From member management and dues to invoicing, VOG, and membership passes: Rondo automates your club processes and keeps everything in sync with Sportlink.',
  },
  'hero.cta.product': {
    nl: 'Bekijk wat Rondo doet',
    en: 'See what Rondo does',
  },
  'hero.cta.demo': {
    nl: 'Probeer de demo',
    en: 'Try the demo',
  },
  'hero.demo.hint': {
    nl: 'Inloggen met gebruikersnaam <strong>demo</strong> en wachtwoord <strong>demo</strong>. Demo bevat ledenbeheer, contributie, ledenpassen en scanner.',
    en: 'Log in with username <strong>demo</strong> and password <strong>demo</strong>. Demo includes member admin, dues, membership passes and scanner.',
  },

  // ─── ProductStory ───
  'product.heading': {
    nl: 'Eén platform voor je hele cluborganisatie',
    en: 'One platform for your entire club operation',
  },
  'product.subheading': {
    nl: 'Van secretaris en penningmeester tot ledenadministratie, communicatie en toegang: iedereen werkt met dezelfde actuele data. Geen versnipperde Excel-bestanden, geen handmatig kopiëren tussen systemen.',
    en: 'From secretary and treasurer to member administration, communication and access: everyone works from the same current data. No scattered spreadsheets, no manual copying between systems.',
  },
  'product.card1.title': { nl: 'Een nieuw lid...', en: 'A new member...' },
  'product.card1.problem': {
    nl: 'Iemand meldt zich aan, de data komt in Sportlink. Dan begint het handwerk: mailinglijsten bijwerken, ouders toevoegen, overzichten voor teamleiders aanpassen. Bij uitschrijving: andersom, en ook nog checken of de contributie betaald is.',
    en: "Someone signs up and their data enters Sportlink. Then the manual work begins: updating mailing lists, adding parents, adjusting team leader overviews. When they leave: the reverse, plus checking whether dues have been paid.",
  },
  'product.card1.solution': {
    nl: 'zodra je het lid goedkeurt in Sportlink, stroomt alles automatisch door naar Rondo Club, mailinglijsten (Laposta), en helpdesk (FreeScout). Bij uitschrijving precies zo.',
    en: "as soon as you approve the member in Sportlink, everything flows automatically to Rondo Club, mailing lists (Laposta), and helpdesk (FreeScout). The same happens when they leave.",
  },
  'product.card2.title': { nl: 'Wie heeft er al een VOG?', en: 'Who already has a background check?' },
  'product.card2.problem': {
    nl: 'Welke vrijwilligers hebben een geldige Verklaring Omtrent het Gedrag? Je zoekt in e-mails, vraagt rond, en hoopt dat de administratie klopt.',
    en: "Which volunteers have a valid Certificate of Conduct (VOG)? You search through emails, ask around, and hope the records are correct.",
  },
  'product.card2.solution': {
    nl: 'Per persoon direct zichtbaar of er een geldige VOG is. Verlopen? Automatisch een herinnering. Altijd compliant, zonder gedoe.',
    en: "Each person's VOG status is immediately visible. Expired? Automatic reminder. Always compliant, without the hassle.",
  },
  'product.card3.title': { nl: 'Ouders met meerdere kinderen?', en: 'Parents with multiple children?' },
  'product.card3.problem': {
    nl: 'In Sportlink zijn ouders alleen een veld bij een kind, geen aparte personen. Gezinsrelaties bestaan niet. Korting voor een tweede kind? Dat zoek je zelf uit, handmatig, elk seizoen opnieuw.',
    en: "In Sportlink, parents are just a field on a child's record, not separate people. Family relationships don't exist. Discount for a second child? You figure that out yourself, manually, every season.",
  },
  'product.card3.solution': {
    nl: 'Rondo Club herkent gezinnen automatisch. Omdat Rondo het herkent, kun je er je contributieregels op aanpassen — zonder handwerk.',
    en: "Rondo Club recognises families automatically. Because Rondo knows the relationships, you can set up dues rules accordingly — no manual work needed.",
  },
  'product.card4.title': { nl: 'Je wil een mailing sturen', en: 'You want to send a mailing' },
  'product.card4.problem': {
    nl: 'Exporteren uit Sportlink, checken op bounced e-mails, importeren in mailingtool, hopen dat de lijst actueel is.',
    en: "Export from Sportlink, check for bounced emails, import into your mailing tool, hope the list is up to date.",
  },
  'product.card4.solution': {
    nl: 'Mailinglijsten in Laposta zijn altijd actueel. Selecteer een team of groep en verstuur — geen exports, geen imports, geen verouderde adressen.',
    en: "Mailing lists in Laposta are always up to date. Select a team or group and send — no exports, no imports, no outdated addresses.",
  },
  'product.card5.title': { nl: 'Niet iedereen hoeft alles te zien', en: 'Not everyone needs to see everything' },
  'product.card5.problem': {
    nl: 'Je hebt een vrijwilliger die de VOGs regelt. Moet die van iedereen alles kunnen zien? Of alleen van de mensen waar hij een VOG voor moet regelen?',
    en: "You have a volunteer who handles background checks. Should they see everything about everyone? Or only the people they need to manage?",
  },
  'product.card5.solution': {
    nl: 'Geef vrijwilligers precies de toegang die ze nodig hebben, bijvoorbeeld alleen VOG-beheer, contributie of teambeheer.',
    en: 'Give volunteers exactly the access they need, for example only VOG management, dues, or team management.',
  },
  'product.card6.title': { nl: 'Ledenpas op je telefoon', en: 'Membership pass on your phone' },
  'product.card6.problem': {
    nl: 'Lidmaatschap controleren bij de poort, bardienst of evenement is vaak handwerk: lijstjes afvinken, namen zoeken, discussie aan de deur.',
    en: 'Checking memberships at the gate, bar shift or event is often manual: ticking paper lists, searching names, and delays at the door.',
  },
  'product.card6.solution': {
    nl: 'Rondo Club maakt Apple Wallet- en Google Wallet-ledenpassen. In de webapp scan je de pas en zie je direct: geldig, verlopen of onbekend.',
    en: 'Rondo Club issues Apple Wallet and Google Wallet membership passes. In the webapp, you scan a pass and instantly see: valid, expired, or unknown.',
  },
  'product.card7.title': { nl: 'De penningmeester wil overzicht', en: 'Treasurer needs overview' },
  'product.card7.problem': {
    nl: 'Wat is betaald, wat staat open, en welke acties zijn urgent? Zonder centraal overzicht kost dat veel uitzoekwerk.',
    en: "What's paid, what's overdue, and which actions are urgent? Without a central view, this takes too much digging.",
  },
  'product.card7.solution': {
    nl: 'Het finance dashboard toont openstaand bedrag, recente betalingen en acties die nu opvolging nodig hebben.',
    en: 'The finance dashboard shows outstanding amounts, recent payments, and actions that need follow-up now.',
  },
  'product.card8.title': { nl: 'Wie staat er zaterdag achter de bar?', en: "Who's behind the bar on Saturday?" },
  'product.card8.problem': {
    nl: 'Diensten vullen betekent appjes sturen, lijstjes bijhouden en hopen dat iemand reageert. En wie zijn verplichte diensten al heeft gedraaid? Dat weet niemand precies.',
    en: 'Filling shifts means sending group messages, keeping lists and hoping someone responds. And who has already done their required shifts? Nobody knows for sure.',
  },
  'product.card8.solution': {
    nl: 'plan het hele seizoen, open zelfinschrijving per seizoenshelft, deel leden rechtstreeks in en stuur bij op bezetting, plichtsvoortgang en komende tekorten.',
    en: 'plan the entire season, open self-signup separately for each half, assign members directly and adjust based on coverage, obligation progress and upcoming shortages.',
  },
  'product.card9.title': { nl: 'Sponsors verdienen ook aandacht', en: 'Sponsors deserve attention too' },
  'product.card9.problem': {
    nl: 'Sponsorcontacten staan in een los Excel-bestand bij de sponsorcommissie. Wie was de contactpersoon ook alweer? En wie mag er naar binnen bij de Businessclub-avond?',
    en: 'Sponsor contacts live in a separate spreadsheet with the sponsor committee. Who was the contact person again? And who gets in at the Businessclub evening?',
  },
  'product.card9.solution': {
    nl: 'organisaties en persoonlijke sponsors staan met hun contactrelaties, logo’s en passen in Rondo Club; je bepaalt ook hun zichtbaarheid op Club TV.',
    en: 'organisations and personal sponsors live in Rondo Club with their contact relations, logos and passes; you also control their Club TV visibility.',
  },
  'product.card10.title': { nl: 'Toernooien zonder losse formulieren', en: 'Tournaments without separate forms' },
  'product.card10.problem': {
    nl: 'Ieder team apart mailen, spelersaantallen uit formulieren halen en in een spreadsheet bijhouden wie al heeft gereageerd.',
    en: 'Emailing every team separately, copying player counts from forms, and tracking responses in a spreadsheet.',
  },
  'product.card10.solution': {
    nl: 'nodig het actuele kader per team uit, verzamel één gedeelde inschrijving en volg teams, spelers en bedragen tot de deadline.',
    en: 'invite current staff per team, collect one shared registration, and track teams, players, and amounts until the deadline.',
  },
  'product.card10.cta': { nl: 'Voor de toernooicoördinator', en: 'For the tournament coordinator' },
  'product.card11.title': { nl: 'Eén actueel scherm in het clubhuis', en: 'One current clubhouse screen' },
  'product.card11.problem': {
    nl: 'Wedstrijdinformatie, mededelingen en sponsorlogo’s uit losse presentaties halen kost tijd en raakt snel achterhaald.',
    en: 'Building matchday information, announcements, and sponsor logos from separate presentations takes time and quickly becomes outdated.',
  },
  'product.card11.solution': {
    nl: 'combineer actuele Sportlink-informatie met eigen content, geplande afspeellijsten en sponsorrotatie en controleer het resultaat vooraf in je browser.',
    en: 'combine current Sportlink information with your own content, scheduled playlists, and sponsor rotation, then preview the result in your browser.',
  },
  'product.card11.cta': { nl: 'Voor de Club TV-redacteur', en: 'For the Club TV editor' },
  'product.withRondo': { nl: 'Met Rondo:', en: 'With Rondo:' },

  // ─── Role paths ───
  'roles.heading': { nl: 'Begin bij jouw rol', en: 'Start with your role' },
  'roles.subheading': {
    nl: 'Kies het pad dat past bij jouw werk in de club, en zie direct wat Rondo voor jou oplost — inclusief de automatische sync op de achtergrond.',
    en: 'Choose the path that matches your role at the club and see what Rondo solves for you right away, including automatic sync in the background.',
  },
  'roles.secretary.title': { nl: 'Secretaris', en: 'Secretary' },
  'roles.secretary.text': {
    nl: 'Van ledenmutaties en VOG-overzicht tot teams, commissies en communicatie. Minder handwerk, meer grip.',
    en: 'From member changes and VOG status to teams, committees and communication. Less manual work, more control.',
  },
  'roles.secretary.cta': { nl: 'Zo werkt het voor de secretaris', en: 'See how it works for the secretary' },
  'roles.treasurer.title': { nl: 'Penningmeester', en: 'Treasurer' },
  'roles.treasurer.text': {
    nl: 'Contributieregels, bulkfacturatie, automatische betaalstatus en finance dashboard in één workflow.',
    en: 'Dues rules, bulk invoicing, automatic payment status and finance dashboard in one workflow.',
  },
  'roles.treasurer.cta': { nl: 'Voor de penningmeester', en: 'For the treasurer' },
  'roles.gate.title': { nl: 'Toegang & events', en: 'Access & events' },
  'roles.gate.text': {
    nl: 'Gebruik Apple/Google Wallet-ledenpassen en scan direct in de webapp of iemand geldig lid is.',
    en: 'Use Apple/Google Wallet membership passes and scan instantly in the webapp to verify active membership.',
  },
  'roles.gate.cta': { nl: 'Zo werkt het voor toegang & events', en: 'See how it works for access & events' },
  'roles.board.title': { nl: 'Bestuur & ICT', en: 'Board & IT' },
  'roles.board.text': {
    nl: 'Krijg grip op data-eigenaarschap, rollen/rechten en hoe systemen via sync samenwerken.',
    en: 'Get control over data ownership, access roles and how systems work together through sync.',
  },
  'roles.board.cta': { nl: 'Zo werkt het voor bestuur & ICT', en: 'See how it works for board & IT' },
  'roles.support.title': { nl: 'Ledenadministratie', en: 'Member administration' },
  'roles.support.text': {
    nl: 'Behandel vragen over leden sneller met actuele context en minder uitzoekwerk.',
    en: 'Handle member administration questions faster with current context and less manual lookup.',
  },
  'roles.support.cta': { nl: 'Voor de ledenadministratie', en: 'For member administration' },
  'roles.communication.title': { nl: 'Communicatie', en: 'Communication' },
  'roles.communication.text': {
    nl: 'Verstuur beter met actuele mailinglijsten dankzij sync met Laposta en minder handmatig lijstbeheer.',
    en: 'Send better with up-to-date mailing lists thanks to Laposta sync and less manual list management.',
  },
  'roles.communication.cta': { nl: 'Zo werkt het voor communicatie', en: 'See how it works for communication' },
  'roles.volunteers.title': { nl: 'Vrijwilligerscoördinator', en: 'Volunteer coordinator' },
  'roles.volunteers.text': {
    nl: 'Plan het seizoen in helften, deel leden in en stuur bij met het aanmeldingenoverzicht, de bezettingskalender en actuele statistieken.',
    en: 'Plan the season in two halves, assign members and adjust using the signup overview, coverage calendar and current statistics.',
  },
  'roles.volunteers.cta': { nl: 'Voor de vrijwilligerscoördinator', en: 'For the volunteer coordinator' },
  'roles.sponsors.title': { nl: 'Sponsorcommissie', en: 'Sponsor committee' },
  'roles.sponsors.text': {
    nl: 'Beheer organisaties en persoonlijke sponsors, logo’s, contactrelaties, passen en zichtbaarheid op Club TV.',
    en: 'Manage organisations and personal sponsors, logos, contact relations, passes and Club TV visibility.',
  },
  'roles.sponsors.cta': { nl: 'Voor de sponsorcommissie', en: 'For the sponsor committee' },
  'roles.tournaments.title': { nl: 'Toernooicoördinator', en: 'Tournament coordinator' },
  'roles.tournaments.text': {
    nl: 'Nodig actueel teamkader uit, verzamel complete inschrijvingen en volg de voortgang tot de deadline.',
    en: 'Invite current team staff, collect complete registrations, and track progress until the deadline.',
  },
  'roles.tournaments.cta': { nl: 'Voor de toernooicoördinator', en: 'For the tournament coordinator' },
  'roles.clubTv.title': { nl: 'Club TV-redacteur', en: 'Club TV editor' },
  'roles.clubTv.text': {
    nl: 'Combineer wedstrijdinformatie, mededelingen, media en sponsors in geplande afspeellijsten voor het clubscherm.',
    en: 'Combine matchday information, announcements, media, and sponsors in scheduled playlists for the clubhouse screen.',
  },
  'roles.clubTv.cta': { nl: 'Voor de Club TV-redacteur', en: 'For the Club TV editor' },

  // ─── InvoicingHighlight ───
  'invoicing.heading': {
    nl: 'Facturatie & betalingen: volledig geregeld',
    en: 'Invoicing & Payments — fully handled',
  },
  'invoicing.subheading': {
    nl: 'Contributie en tuchtzaken: van factuur tot betaling, zonder handwerk.',
    en: 'Dues and disciplinary cases: from invoice to payment, without manual work.',
  },
  'invoicing.dues.title': { nl: 'Contributie', en: 'Dues' },
  'invoicing.dues.rules': { nl: 'Contributieregels per team en categorie', en: 'Dues rules per team and category' },
  'invoicing.dues.rules.desc': { nl: 'Met automatische pro-rata en familiekorting.', en: 'With automatic pro-rata and family discounts.' },
  'invoicing.dues.bulk': { nl: 'Bulk facturatie', en: 'Bulk invoicing' },
  'invoicing.dues.bulk.desc': { nl: 'Start één bulk-run voor alle leden die gefactureerd moeten worden; resultaat en aantallen staan direct klaar.', en: 'Start one bulk run for all members who need invoicing; result and counts are available immediately.' },
  'invoicing.dues.installments': { nl: 'Termijnbetalingen', en: 'Instalment payments' },
  'invoicing.dues.installments.desc': { nl: 'Leden kiezen zelf voor betaling in 3 of 8 termijnen via een persoonlijke betaalpagina.', en: 'Members choose to pay in 3 or 8 instalments via a personal payment page.' },
  'invoicing.dues.reminders': { nl: 'Automatische herinneringen', en: 'Automatic reminders' },
  'invoicing.dues.reminders.desc': { nl: 'Na 14 en 21 dagen krijgen leden een herinnering. De tweede gaat ook naar de penningmeester.', en: 'After 14 and 21 days, members receive a reminder. The second one also goes to the treasurer.' },
  'invoicing.dues.emails': { nl: 'Gepersonaliseerde e-mails', en: 'Personalised emails' },
  'invoicing.dues.emails.desc': { nl: 'Aparte templates voor contributie en tuchtzaken, met voornaam en clubstijl.', en: 'Separate templates for dues and disciplinary cases, with first name and club branding.' },
  'invoicing.disciplinary.title': { nl: 'Tuchtzaken', en: 'Disciplinary cases' },
  'invoicing.disciplinary.linked': { nl: 'Factuur direct gekoppeld aan de tuchtzaak', en: 'Invoice directly linked to the disciplinary case' },
  'invoicing.disciplinary.linked.desc': { nl: 'Geen dubbel werk, geen knip-en-plak.', en: 'No double work, no copy-paste.' },
  'invoicing.disciplinary.admin': { nl: 'Administratiekosten automatisch toevoegen', en: 'Automatically add administration fees' },
  'invoicing.disciplinary.admin.desc': { nl: 'Instelbaar in je financiële instellingen.', en: 'Configurable in your financial settings.' },
  'invoicing.both.title': { nl: 'Beide', en: 'Both' },
  'invoicing.both.ideal': { nl: 'Betalen via iDEAL (Wero)', en: 'Pay via iDEAL (Wero)' },
  'invoicing.both.ideal.desc': { nl: 'Veilig en vertrouwd, rechtstreeks via de bank.', en: 'Safe and trusted, directly through the bank.' },
  'invoicing.both.status': { nl: 'Automatische betaalstatus', en: 'Automatic payment status' },
  'invoicing.both.status.desc': { nl: 'Na betaling werkt Rondo de factuurstatus automatisch bij, inclusief historie per factuur.', en: 'After payment, Rondo updates invoice status automatically, including per-invoice history.' },
  'invoicing.both.pdf': { nl: 'Professionele PDF-facturen', en: 'Professional PDF invoices' },
  'invoicing.both.pdf.desc': { nl: 'Met QR-code, kortingsregels en duidelijke betaallink.', en: 'With QR code, discount rules and clear payment link.' },
  'invoicing.both.control': { nl: 'Volledige controle', en: 'Full control' },
  'invoicing.both.control.desc': { nl: 'Versturen, opnieuw versturen, markeren als betaald, PDF downloaden en historie inzien.', en: 'Send, resend, mark as paid, download PDF and view history.' },
  'invoicing.both.scheduled': { nl: 'Geplande verzending', en: 'Scheduled sending' },
  'invoicing.both.scheduled.desc': { nl: 'Zet conceptfacturen klaar en laat ze automatisch versturen op een datum in de toekomst.', en: 'Prepare draft invoices and have them sent automatically on a future date.' },
  'invoicing.both.drafts': { nl: 'Slim werken met concepten', en: 'Work smart with drafts' },
  'invoicing.both.drafts.desc': { nl: 'Kopieer een bestaande factuur naar een nieuw concept en beheer concepten in bulk.', en: 'Copy an existing invoice into a new draft and manage drafts in bulk.' },
  'invoicing.both.credit': { nl: 'Creditfacturen', en: 'Credit invoices' },
  'invoicing.both.credit.desc': { nl: 'Crediteer een factuur met één klik, met eigen e-mailteksten voor creditfacturen.', en: 'Credit an invoice in one click, with dedicated email templates for credit invoices.' },
  'invoicing.both.dashboard': { nl: 'Finance dashboard', en: 'Finance dashboard' },
  'invoicing.both.dashboard.desc': {
    nl: 'Direct overzicht voor de penningmeester: openstaand bedrag, recente betalingen en acties die aandacht vragen.',
    en: 'Direct treasurer overview: outstanding amount, recent payments, and actions that need attention.',
  },
  'invoicing.noNikki': {
    nl: 'Geen Nikki meer nodig. Minder handmatig werk, minder fouten en sneller duidelijkheid over openstaande bedragen.',
    en: 'No more need for Nikki. Less manual work, fewer errors and faster clarity on outstanding amounts.',
  },
  'invoicing.cta': { nl: 'Bekijk de demo', en: 'Look at the demo' },

  // ─── FeatureGallery ───
  'gallery.heading': { nl: 'Rondo in beeld', en: 'Rondo in action' },
  'gallery.subheading': {
    nl: 'Bekijk hoe Rondo Club eruitziet. Klik op een scherm om te vergroten. Ledenpassen, scanner en finance dashboard test je in de demo.',
    en: 'See what Rondo Club looks like. Click a screen to enlarge. Membership passes, scanner and the finance dashboard can be tested in the demo.',
  },
  'gallery.tab.members': { nl: 'Leden', en: 'Members' },
  'gallery.tab.jubilees': { nl: 'Jubilarissen', en: 'Jubilees' },
  'gallery.tab.staffList': { nl: 'Kaderlijst', en: 'Staff list' },
  'gallery.tab.dues': { nl: 'Contributie', en: 'Dues' },
  'gallery.tab.finance': { nl: 'Finance', en: 'Finance' },
  'gallery.tab.access': { nl: 'Toegang', en: 'Access' },
  'gallery.tab.vog': { nl: 'VOG', en: 'VOG' },
  'gallery.tab.teams': { nl: 'Teams', en: 'Teams' },
  'gallery.tab.committees': { nl: 'Commissies', en: 'Committees' },
  'gallery.tab.disciplinary': { nl: 'Tuchtzaken', en: 'Disciplinary' },
  'gallery.tab.shifts': { nl: 'Diensten', en: 'Shifts' },
  'gallery.tab.sponsors': { nl: 'Sponsors', en: 'Sponsors' },
  // Screenshot captions
  'gallery.caption.memberList': { nl: 'Ledenlijst met zoeken en filteren', en: 'Member list with search and filters' },
  'gallery.caption.personDetail': { nl: 'Compleet persoonsprofiel', en: 'Complete member profile' },
  'gallery.caption.jubileesFilter': { nl: 'Jubilarissen met ledenfilter', en: 'Jubilees with member filters' },
  'gallery.caption.jubileesVolunteers': { nl: 'Jubilarissen met vrijwilligersfilter', en: 'Jubilees with volunteer filters' },
  'gallery.caption.staffList': { nl: 'Kaderlijst overzicht', en: 'Staff list overview' },
  'gallery.caption.staffListFilter': { nl: 'Kaderlijst met filters', en: 'Staff list with filters' },
  'gallery.caption.duesOverview': { nl: 'Contributie-overzicht per seizoen', en: 'Dues overview per season' },
  'gallery.caption.duesRules': { nl: 'Contributieregels met familiekorting', en: 'Dues rules with family discounts' },
  'gallery.caption.duesToInvoice': { nl: 'Contributie nog te factureren', en: 'Dues still to be invoiced' },
  'gallery.caption.vogOverview': { nl: 'VOG-overzicht met statusbadges', en: 'VOG overview with status badges' },
  'gallery.caption.vogActions': { nl: 'VOG-acties en herinneringen', en: 'VOG actions and reminders' },
  'gallery.caption.teamsOverview': { nl: 'Alle teams in een overzicht', en: 'All teams at a glance' },
  'gallery.caption.teamDetail': { nl: 'Team detail met spelers en begeleiders', en: 'Team details with players and staff' },
  'gallery.caption.teamsFilter': { nl: 'Teams met actieve filters', en: 'Teams with active filters' },
  'gallery.caption.committeesOverview': { nl: 'Commissies en werkgroepen', en: 'Committees and working groups' },
  'gallery.caption.committeeDetail': { nl: 'Commissie samenstelling en rollen', en: 'Committee composition and roles' },
  'gallery.caption.disciplinaryOverview': { nl: 'Tuchtzaken overzicht', en: 'Disciplinary cases overview' },
  'gallery.caption.disciplinaryPerson': { nl: 'Tuchtzaak detail bij persoon', en: 'Disciplinary case on member profile' },
  'gallery.caption.financeDashboard': { nl: 'Finance dashboard overzicht', en: 'Finance dashboard overview' },
  'gallery.caption.financeActions': { nl: 'Openstaande posten en acties voor opvolging', en: 'Outstanding items and actions for follow-up' },
  'gallery.caption.financeInvoiceDetail': { nl: 'Factuurdetail in financiën', en: 'Invoice details in finance' },
  'gallery.caption.financeCreateInvoice': { nl: 'Nieuwe factuur aanmaken', en: 'Create a new invoice' },
  'gallery.caption.accessApple': { nl: 'Apple Wallet ledenpas', en: 'Apple Wallet membership pass' },
  'gallery.caption.accessGoogle': { nl: 'Google Wallet ledenpas', en: 'Google Wallet membership pass' },
  'gallery.caption.accessAppleAwc': { nl: 'AWC ledenpas in Apple Wallet', en: 'AWC membership pass in Apple Wallet' },
  'gallery.caption.accessGoogleAwc': { nl: 'AWC ledenpas in Google Wallet', en: 'AWC membership pass in Google Wallet' },
  'gallery.caption.accessScannerAwc': { nl: 'AWC ledenpas scanner', en: 'AWC membership pass scanner' },
  'gallery.caption.accessScanner': { nl: 'Pas-scanner validatie in de webapp', en: 'Pass scanner validation in the webapp' },
  'gallery.caption.shiftsOverview': { nl: 'Seizoensplanning met bezetting per dag', en: 'Season planning with daily coverage' },
  'gallery.caption.shiftsCalendar': { nl: 'Bezettingskalender per diensttype', en: 'Coverage calendar per shift type' },
  'gallery.caption.sponsorsOverview': { nl: 'Organisatiesponsors met logo, rol en Club TV-status', en: 'Organisation sponsors with logo, role and Club TV status' },
  'gallery.caption.sponsorsPeople': { nl: 'Persoonlijke sponsors als afzonderlijk sponsortype', en: 'Personal sponsors as a separate sponsor type' },
  'gallery.caption.sponsorLogoClubTv': { nl: 'Logo en zichtbaarheid op Club TV instellen', en: 'Set a logo and Club TV visibility' },
  'gallery.caption.sponsorPass': { nl: 'Businessclub-pas voor sponsors', en: 'Businessclub pass for sponsors' },

  // ─── Origin ───
  'origin.heading': { nl: 'Waarom ik Rondo bouwde', en: 'Why I built Rondo' },
  'origin.p1': {
    nl: 'Als secretaris bij voetbalvereniging <a href="https://www.svawc.nl" target="_blank" rel="noopener">AWC</a> in Wijchen liep ik tegen precies deze problemen aan. Ledendata verspreid over Sportlink, Excel-bestanden en e-maillijsten. VOG administratie was een continue uitdaging. Handmatig exporteren en importeren voor elke mailing. Geen overzicht van gezinnen voor de contributieregeling.',
    en: 'As club secretary at football club <a href="https://www.svawc.nl" target="_blank" rel="noopener">AWC</a> in Wijchen, I ran into exactly these problems. Member data scattered across Sportlink, spreadsheets and mailing lists. Background check administration was a constant challenge. Manual exports and imports for every mailing. No overview of families for the dues structure.',
  },
  'origin.p2': {
    nl: 'Als ervaren developer en internet ondernemer dacht ik: dit moet beter kunnen. Dus bouwde ik Rondo — eerst voor AWC, nu beschikbaar voor elke sportvereniging die dezelfde frustraties herkent. AWC gebruikt Rondo dagelijks, en dat is de beste test die er is.',
    en: "As an experienced developer and internet entrepreneur, I thought: there has to be a better way. So I built Rondo — first for AWC, now available for any sports club that recognises the same frustrations. AWC uses Rondo daily, and that's the best test there is.",
  },
  'origin.p3': {
    nl: 'Ik wil geen geld verdienen aan sportclubs. Ik vind het belangrijk dat sporten betaalbaar is en blijft en dat verenigingen zich makkelijk goed kunnen organiseren. Daarom is Rondo open source beschikbaar en bieden we het aan voor clubs die willen dat wij het voor hen beheren.',
    en: "I don't want to make money off sports clubs. I believe it's important that playing sports remains affordable and that clubs can organise themselves easily. That's why Rondo is open source and we offer it for clubs that want us to manage it for them.",
  },
  'origin.role': { nl: 'Bedenker en ontwikkelaar van Rondo', en: 'Creator and developer of Rondo' },
  'origin.secretary': { nl: 'Secretaris bij', en: 'Club secretary at' },

  // ─── IntegrationDiagram ───
  'integration.heading': { nl: 'Hoe alles samenwerkt', en: 'How it all works together' },
  'integration.subheading': {
    nl: 'Rondo verbindt je systemen zodat data overal klopt',
    en: 'Rondo connects your systems so data is correct everywhere',
  },
  'integration.sportlink.desc': {
    nl: '<a href="https://www.sportlink.nl/" target="_blank" rel="noopener">Sportlink Club</a> is het ledenadministratiesysteem dat veel sportbonden gebruiken. Rondo Sync haalt elke nacht automatisch de nieuwste ledendata op. Toegestane wijzigingen aan contact- en adresgegevens uit Rondo Club gaan gecontroleerd terug naar Sportlink; niet ieder Rondo-veld hoort daar thuis.',
    en: '<a href="https://www.sportlink.nl/" target="_blank" rel="noopener">Sportlink Club</a> is the member administration system used by many Dutch sports federations. Rondo Sync automatically fetches the latest member data every night. Allowed contact and address changes from Rondo Club are returned to Sportlink in a controlled flow; not every Rondo field belongs there.',
  },
  'integration.sync.desc': {
    nl: 'Rondo Sync verwerkt inkomende wijzigingen uit Sportlink, Nikki en Sponsit en koppelt toegestane contact- en adreswijzigingen terug naar Sportlink. Het wijzigingslog bewaart elke wijziging 24 maanden en toont of die wacht, is gesynchroniseerd, alleen in Rondo hoort of handmatige actie nodig heeft. Verwerking door Sportlink kan tot een half uur duren.',
    en: 'Rondo Sync processes incoming changes from Sportlink, Nikki and Sponsit and returns allowed contact and address changes to Sportlink. The change log keeps each change for 24 months and shows whether it is waiting, synchronized, Rondo-only or needs manual action. Processing by Sportlink can take up to half an hour.',
  },
  'integration.club.desc': {
    nl: 'Jullie eigen ledenadministratie. Leden houden in Mijn gegevens toegestane contact- en adresgegevens bij en voegen beschikbare passen direct toe aan Apple Wallet of Google Wallet. De club beheert hier ook VOG-registraties, gezinsrelaties, contributiegroepen en toegangsrechten.',
    en: 'Your own member administration. In My details, members keep allowed contact and address details current and add available passes directly to Apple Wallet or Google Wallet. The club also manages background check records, family relationships, dues groups and access rights here.',
  },
  'integration.laposta.desc': {
    nl: 'E-mailmarketing die automatisch meebeweegt. Rondo Sync houdt je mailinglijsten in <a href="https://laposta.nl/" target="_blank" rel="noopener">Laposta</a> synchroon met je ledendata. Nieuw lid? Automatisch op de juiste lijst. Uitgeschreven? Automatisch verwijderd.',
    en: 'Email marketing that automatically keeps up. Rondo Sync keeps your mailing lists in <a href="https://laposta.nl/" target="_blank" rel="noopener">Laposta</a> in sync with your member data. New member? Automatically on the right list. Cancelled? Automatically removed.',
  },
  'integration.freescout.desc': {
    nl: '<a href="https://freescout.net/" target="_blank" rel="noopener">FreeScout</a> is een gedeelde mailbox voor je club. Als een lid mailt, zie je direct lidcontext in FreeScout (wie, team en historie). Rondo Sync houdt die gegevens actueel. <a href="/voor-ledenadministratie/">Bekijk hoe dit werkt voor de ledenadministratie.</a>',
    en: '<a href="https://freescout.net/" target="_blank" rel="noopener">FreeScout</a> is a shared inbox for your club. When a member emails, you immediately see member context in FreeScout (who, team and history). Rondo Sync keeps those details up to date. <a href="/en/for-member-administration/">See how this works for member administration.</a>',
  },
  'integration.sponsit.desc': {
    nl: 'Voor clubs die <a href="https://www.sponsit.nl/" target="_blank" rel="noopener">Sponsit</a> gebruiken voor sponsorwerving: Rondo Sync haalt sponsors en hun contactpersonen automatisch op, zodat je sponsoradministratie in Rondo Club altijd actueel is. <a href="/voor-sponsorcommissie/">Bekijk hoe dit werkt voor de sponsorcommissie.</a>',
    en: 'For clubs using <a href="https://www.sponsit.nl/" target="_blank" rel="noopener">Sponsit</a> for sponsor acquisition: Rondo Sync automatically imports sponsors and their contact people, keeping your sponsor records in Rondo Club current. <a href="/en/for-sponsor-committee/">See how this works for the sponsor committee.</a>',
  },
  'integration.nikki.desc': {
    nl: 'Voor clubs die <a href="https://www.nikki.nl/" target="_blank" rel="noopener">Nikki</a> gebruiken voor contributie-inning: Rondo Sync haalt contributiedata op en koppelt deze aan de juiste leden in Rondo Club. Zo heb je overzicht over betalingen zonder handwerk.',
    en: 'For clubs using <a href="https://www.nikki.nl/" target="_blank" rel="noopener">Nikki</a> for dues collection: Rondo Sync fetches dues data and links it to the right members in Rondo Club. Giving you an overview of payments without manual work.',
  },
  'integration.lettermint.desc': {
    nl: '<a href="https://lettermint.email/" target="_blank" rel="noopener">Lettermint</a> verzorgt de transactionele e-mails vanuit Rondo Club: facturen, VOG-herinneringen en andere geautomatiseerde berichten. Betrouwbare aflevering zonder dat je er iets voor hoeft te doen.',
    en: '<a href="https://lettermint.email/" target="_blank" rel="noopener">Lettermint</a> handles transactional emails from Rondo Club: invoices, background check reminders, and other automated messages. Reliable delivery without any effort on your part.',
  },
  'integration.mollie.desc': {
    nl: '<a href="https://www.mollie.com/" target="_blank" rel="noopener">Mollie</a> is een betaalplatform waarmee je club eenvoudig online betalingen kan ontvangen. Rondo Club koppelt betalingen automatisch aan de juiste leden, zodat je altijd overzicht hebt over contributie en andere bijdragen.',
    en: '<a href="https://www.mollie.com/" target="_blank" rel="noopener">Mollie</a> is a payment platform that lets your club easily receive online payments. Rondo Club automatically links payments to the right members, giving you a clear overview of dues and other contributions.',
  },
  'integration.sync.summary.title': {
    nl: 'Wat Rondo Sync automatisch doet',
    en: 'What Rondo Sync does automatically',
  },
  'integration.sync.summary.item1': {
    nl: 'Nieuwe leden, mutaties en uitschrijvingen vanuit Sportlink verwerken.',
    en: 'Process new members, updates and cancellations from Sportlink.',
  },
  'integration.sync.summary.item2': {
    nl: 'Contactgegevens up-to-date houden in gekoppelde systemen zoals Laposta en FreeScout.',
    en: 'Keep contact details current in connected systems like Laposta and FreeScout.',
  },
  'integration.sync.summary.item3': {
    nl: 'Contributiedata uit Nikki koppelen aan de juiste personen in Rondo Club (indien gebruikt).',
    en: 'Link dues data from Nikki to the correct people in Rondo Club (when used).',
  },
  'integration.sync.summary.item4': {
    nl: 'Sponsors en contactpersonen uit Sponsit synchroniseren naar Rondo Club (indien gebruikt).',
    en: 'Sync sponsors and contact people from Sponsit to Rondo Club (when used).',
  },
  'integration.sync.summary.item5': {
    nl: 'Toegestane wijzigingen uit Mijn gegevens gecontroleerd terugzetten in Sportlink, met een zichtbare status voor de ledenadministratie.',
    en: 'Return allowed changes from My details to Sportlink in a controlled flow, with a visible status for member administrators.',
  },
  'integration.federations': {
    nl: 'Bonden die Sportlink gebruiken',
    en: 'Federations that use Sportlink',
  },
  'integration.federations.note': {
    nl: 'Gebruikt jouw bond Sportlink? Dan kan jouw club Rondo Club gebruiken!',
    en: 'Does your federation use Sportlink? Then your club can use Rondo Club!',
  },
  // SVG labels
  'integration.label.memberdata': { nl: 'ledendata', en: 'member data' },
  'integration.label.sponsordata': { nl: 'sponsordata', en: 'sponsor data' },
  'integration.label.duesdata': { nl: 'contributiedata', en: 'dues data' },
  'integration.label.contacts': { nl: 'contactmomenten', en: 'interactions' },
  'integration.label.payments': { nl: 'betalingen', en: 'payments' },
  'integration.label.emails': { nl: 'e-mails', en: 'emails' },

  // ─── GettingStarted ───
  'started.heading': { nl: 'Hoe begin je?', en: 'How do you get started?' },
  'started.subheading': {
    nl: 'In vijf stappen draait jouw club op Rondo',
    en: 'Your club up and running on Rondo in five steps',
  },
  'started.step1.title': { nl: 'Neem contact op', en: 'Get in touch' },
  'started.step1.text': {
    nl: 'Vertel ons over je club en wat je nodig hebt. We denken graag mee over welke koppelingen voor jullie zinvol zijn.',
    en: "Tell us about your club and what you need. We're happy to advise on which integrations make sense for you.",
  },
  'started.step2.title': { nl: 'We tekenen', en: 'We sign' },
  'started.step2.text': {
    nl: 'We sturen je een overeenkomst en bewerkersovereenkomst. Duidelijke afspraken, geen kleine lettertjes.',
    en: 'We send you an agreement and data processing agreement. Clear terms, no fine print.',
  },
  'started.step3.title': { nl: 'Deel je logins', en: 'Share your logins' },
  'started.step3.text': {
    nl: 'We hebben een login nodig op de systemen die je wilt koppelen, zoals Sportlink Club. Deze gegevens vragen we altijd op via een beveiligde verbinding.',
    en: "We need a login for the systems you want to connect, such as Sportlink Club. We always request these credentials via a secure connection.",
  },
  'started.step4.title': { nl: 'Wij richten in', en: 'We set everything up' },
  'started.step4.text': {
    nl: 'We zetten jullie Rondo-omgeving op, koppelen Sportlink, en configureren de gewenste integraties. Jullie hoeven niets te installeren.',
    en: "We set up your Rondo environment, connect Sportlink, and configure the integrations you need. You don't have to install anything.",
  },
  'started.step5.title': { nl: 'Jullie data draait', en: 'Your data is live' },
  'started.step5.text': {
    nl: 'Vanaf dag één synchroniseert Rondo automatisch. Jullie ledendata is overal up-to-date, zonder handwerk.',
    en: 'From day one, Rondo syncs automatically. Your member data is up to date everywhere, without manual work.',
  },

  // ─── Sponsorship and costs ───
  'sponsorship.heading': { nl: 'Geen licentiekosten voor je club', en: 'No licence fees for your club' },
  'sponsorship.subheading': {
    nl: 'Rondo is onderdeel van Your.Online en wordt via sponsoring beschikbaar gemaakt.',
    en: 'Rondo is part of Your.Online and is made available through sponsorship.',
  },
  'sponsorship.exchange': {
    nl: 'Voor het gebruik en beheer van Rondo betaalt je club geen licentiekosten. In ruil daarvoor vragen we de club om één van de labels van Your.Online als sponsor van de club op te nemen. De voorwaarden daarvoor spreken we samen af.',
    en: 'Your club pays no licence fees for the use and management of Rondo. In return, we ask the club to list one of the Your.Online brands as a club sponsor. We agree the terms together.',
  },
  'sponsorship.thirdParty': {
    nl: 'Rondo is daardoor niet volledig kosteloos. Kosten van externe diensten, zoals transactiekosten van Mollie en kosten voor e-mailverzending, zijn voor rekening van de club. Hosting van FreeScout is ook niet inbegrepen. Voor Club TV geldt daarnaast eenmalig ongeveer €200 per aan te sluiten tv.',
    en: 'Rondo is therefore not entirely free of charge. Third-party costs, such as Mollie transaction fees and email delivery costs, remain the club’s responsibility. FreeScout hosting is not included either. Club TV also has a one-time additional cost of approximately €200 per TV to be connected.',
  },
  'sponsorship.goal': {
    nl: 'Ons uitgangspunt is om de totale kosten voor de club altijd zo laag mogelijk te houden.',
    en: 'Our goal is always to keep the club’s total costs as low as possible.',
  },
  'sponsorship.cta': { nl: 'Bespreek de mogelijkheden', en: 'Discuss the options' },

  // ─── BusinessCase ───
  'business.heading': { nl: 'Wat het je club oplevert', en: 'What it delivers for your club' },
  'business.subheading': {
    nl: 'De argumenten voor je bestuursvergadering',
    en: 'The arguments for your board meeting',
  },
  'business.time.title': { nl: '100+ uur per jaar bespaard', en: '100+ hours saved per year' },
  'business.time.text': {
    nl: 'Geen handmatig exporteren, importeren en bijwerken meer. Ledendata synchroniseert automatisch naar al je systemen. Die uren kan je besteden aan je club.',
    en: 'No more manual exporting, importing and updating. Member data syncs automatically to all your systems. Those hours can be spent on your club.',
  },
  'business.gdpr.title': { nl: 'AVG-proof ledenadministratie', en: 'GDPR-compliant member management' },
  'business.gdpr.text': {
    nl: 'Geen spreadsheets met persoonsgegevens op persoonlijke laptops meer. Eén beveiligd systeem met toegangsrechten per vrijwilliger. Inclusief bewerkersovereenkomst.',
    en: 'No more spreadsheets with personal data on private laptops. One secure system with access rights per volunteer. Including a data processing agreement.',
  },
  'business.handover.title': { nl: 'Soepele bestuurswissel', en: 'Smooth board transitions' },
  'business.handover.text': {
    nl: 'Als de secretaris stopt, hoeft de opvolger geen map met Excel-bestanden te ontcijferen. Alles staat in Rondo, gedocumenteerd en klaar voor overdracht.',
    en: "When the secretary steps down, their successor doesn't need to decipher a folder of spreadsheets. Everything is in Rondo, documented and ready for handover.",
  },
  'business.quote.text': {
    nl: 'Binnen AWC merken we dagelijks hoeveel druk er ligt op vrijwilligers. Met Rondo hebben we eindelijk een platform dat écht ontzorgt. Ledenadministratie, contributie-inning en financiële afstemming lopen geïntegreerd en overzichtelijk samen. Het scheelt ons uren werk en geeft ons de inzichten om als vereniging beter te sturen. Dat maakt mijn rol als Penningmeester een stuk leuker én effectiever.',
    en: "At AWC, we see every day how much pressure volunteers are under. With Rondo, we finally have a platform that truly takes work off our hands. Member administration, dues collection and financial alignment now run in one integrated, clear flow. It saves us hours of work and gives us the insights to steer the club better. That makes my role as treasurer both more enjoyable and more effective.",
  },
  'business.quote.name': { nl: 'Xander Notte', en: 'Xander Notte' },
  'business.quote.role': { nl: 'Penningmeester bij AWC', en: 'Treasurer at AWC' },
  'business.trust.data': { nl: 'Je data blijft altijd van jou', en: 'Your data always remains yours' },
  'business.trust.eu': { nl: 'Europese servers', en: 'European servers' },
  'business.trust.opensource': { nl: 'Open source, geen lock-in', en: 'Open source, no lock-in' },
  'business.trust.uptime': { nl: '99% uptime', en: '99% uptime' },
  'business.trust.link': {
    nl: 'Lees onze <a href="/voorwaarden/">algemene voorwaarden</a> en ons <a href="/privacybeleid/">privacybeleid</a> voor alle details.',
    en: 'Read our <a href="/en/terms/">terms and conditions</a> and our <a href="/en/privacy/">privacy policy</a> for all details.',
  },

  // ─── Support ───
  'support.heading': { nl: 'Persoonlijke support', en: 'Personal support' },
  'support.subheading': { nl: 'Geen ticketnummers, geen wachtrijen', en: 'No ticket numbers, no queues' },
  'support.direct.title': { nl: 'Direct contact', en: 'Direct contact' },
  'support.direct.text': {
    nl: 'Iedere ingelogde gebruiker kan vanuit Rondo Club een idee of probleem melden; de huidige pagina wordt automatisch toegevoegd. We nemen de melding in behandeling. Zodra die is opgelost of afgewezen, is een toelichting verplicht en ontvangt de melder één e-mail met de uitkomst.',
    en: 'Every signed-in user can report an idea or problem from Rondo Club; the current page is included automatically. We review the report. Once it is resolved or declined, an explanation is required and the reporter receives one email with the outcome.',
  },
  'support.response.title': { nl: 'Reactie binnen 24-48 uur', en: 'Response within 24-48 hours' },
  'support.response.text': {
    nl: 'Op werkdagen krijg je binnen een dag antwoord. Geen chatbot, geen standaardantwoorden — gewoon een persoonlijke reactie.',
    en: "On business days you'll get a reply within a day. No chatbot, no canned responses — just a personal reply.",
  },
  'support.docs.title': { nl: 'Documentatie', en: 'Documentation' },
  'support.docs.text': {
    nl: 'Technische documentatie is beschikbaar. Functionele handleidingen worden doorlopend aangevuld.',
    en: 'Technical documentation is available. Functional guides are being added continuously.',
  },

  // ─── FAQ ───
  'faq.heading': { nl: 'Veelgestelde vragen', en: 'Frequently asked questions' },
  'faq.q1': { nl: 'Wat is FreeScout?', en: 'What is FreeScout?' },
  'faq.a1': {
    nl: '<a href="https://freescout.net/" target="_blank" rel="noopener">FreeScout</a> is een open-source helpdesksysteem voor e-mail. Het is ideaal voor clubs omdat meerdere mensen toegang kunnen hebben tot dezelfde inbox — zo gaat er geen bericht verloren, ook als iemand op vakantie is.',
    en: '<a href="https://freescout.net/" target="_blank" rel="noopener">FreeScout</a> is an open-source helpdesk system for email. It\'s ideal for clubs because multiple people can access the same inbox — so no message gets lost, even when someone is on holiday.',
  },
  'faq.q2': { nl: 'Bieden jullie ook FreeScout hosting aan?', en: 'Do you also offer FreeScout hosting?' },
  'faq.a2': {
    nl: 'Nee, op dit moment nog niet, maar we kunnen je wel in contact brengen met een partij die dat wél doet.',
    en: "No, not at this time, but we can put you in touch with a party that does.",
  },
  'faq.q3': { nl: 'Waarom gebruiken jullie Laposta?', en: 'Why do you use Laposta?' },
  'faq.a3': {
    nl: '<a href="https://laposta.nl/" target="_blank" rel="noopener">Laposta</a> is gratis tot 2.000 e-mailadressen in je lijsten en 12.000 e-mails per maand. Voor de meeste sportverenigingen is dat ruim voldoende, en de koppeling met Rondo zorgt dat je lijsten altijd up-to-date zijn.',
    en: '<a href="https://laposta.nl/" target="_blank" rel="noopener">Laposta</a> is free for up to 2,000 email addresses and 12,000 emails per month. For most sports clubs that\'s more than enough, and the integration with Rondo ensures your lists are always up to date.',
  },
  'faq.q4': { nl: 'Is Rondo open source?', en: 'Is Rondo open source?' },
  'faq.a4': {
    nl: 'Ja! Zowel <a href="https://github.com/rondohq" target="_blank" rel="noopener">Rondo Club als Rondo Sync</a> zijn open source. Je kunt alles zelf hosten als je dat wilt. Voor het gebruik en beheer van Rondo rekenen we geen licentiekosten. In ruil daarvoor vragen we de club om één van de labels van Your.Online als sponsor van de club op te nemen. De voorwaarden daarvoor spreken we samen af. Kosten van externe diensten en FreeScout-hosting zijn niet inbegrepen. Voor Club TV geldt daarnaast eenmalig ongeveer €200 per aan te sluiten tv.',
    en: 'Yes! Both <a href="https://github.com/rondohq" target="_blank" rel="noopener">Rondo Club and Rondo Sync</a> are open source. You can self-host everything if you want. We charge no licence fees for the use and management of Rondo. In return, the club lists one of the Your.Online brands as a sponsor; we agree the terms together. Third-party service costs and FreeScout hosting are not included. Club TV also has a one-time additional cost of approximately €200 per TV to be connected.',
  },
  'faq.q5': { nl: 'Mijn club gebruikt een ander e-mailsysteem, kan dat ook?', en: 'My club uses a different email system, can that work too?' },
  'faq.a5': {
    nl: 'Ja, natuurlijk! Rondo is flexibel en kan in principe met elk e-mailsysteem gekoppeld worden. De koppeling moet dan wel gebouwd worden — <a href="/contact/">neem contact op</a> en we bespreken de mogelijkheden.',
    en: 'Yes, of course! Rondo is flexible and can in principle be connected to any email system. The integration would need to be built — <a href="/en/contact/">get in touch</a> and we\'ll discuss the possibilities.',
  },
  'faq.q6': { nl: 'Heb je Nikki nodig?', en: 'Do you need Nikki?' },
  'faq.a6': {
    nl: 'Nee, <a href="https://www.nikki.nl/" target="_blank" rel="noopener">Nikki</a> is niet verplicht. Rondo heeft een eigen contributiesysteem met automatische facturatie, iDEAL-betalingen en termijnregelingen. Je kunt Nikki nog steeds gebruiken als je wilt, maar het hoeft niet meer.',
    en: 'No, <a href="https://www.nikki.nl/" target="_blank" rel="noopener">Nikki</a> is not required. Rondo has its own dues system with automatic invoicing, iDEAL payments and instalment plans. You can still use Nikki if you want, but you no longer need to.',
  },
  'faq.q7': { nl: 'Wat als we willen stoppen met Rondo?', en: 'What if we want to stop using Rondo?' },
  'faq.a7': {
    nl: 'Dan kan dat. Je zegt op voor 1 juli en het contract loopt af op 1 augustus. Na opzegging heb je 30 dagen om al je data te exporteren. Je data is en blijft altijd van jou — zie onze <a href="/voorwaarden/">algemene voorwaarden</a>.',
    en: 'You can. Cancel before 1 July and the contract ends on 1 August. After cancellation you have 30 days to export all your data. Your data is and always remains yours — see our <a href="/en/terms/">terms and conditions</a>.',
  },
  'faq.q8': { nl: 'Van wie is onze ledendata?', en: 'Who owns our member data?' },
  'faq.a8': {
    nl: 'Van jullie. Altijd. Wij gebruiken je data nooit voor eigen doeleinden en verstrekken die niet aan derden. Je kunt op elk moment een volledige export opvragen. Dit staat ook zwart op wit in onze <a href="/voorwaarden/">voorwaarden</a> en de bewerkersovereenkomst die we samen tekenen.',
    en: 'You do. Always. We never use your data for our own purposes and never share it with third parties. You can request a full export at any time. This is also stated in black and white in our <a href="/en/terms/">terms</a> and the data processing agreement we sign together.',
  },
  'faq.q9': { nl: 'Wat als Rondo stopt of de ontwikkelaar wegvalt?', en: 'What if Rondo shuts down or the developer drops out?' },
  'faq.a9': {
    nl: 'Rondo is volledig <a href="https://github.com/rondohq" target="_blank" rel="noopener">open source</a>. De code is vrij beschikbaar, dus jullie (of een andere partij) kunnen het altijd zelf blijven draaien. Daarnaast blijft je data altijd van jou en kun je die exporteren. Je bent nooit afhankelijk van één persoon of bedrijf.',
    en: 'Rondo is fully <a href="https://github.com/rondohq" target="_blank" rel="noopener">open source</a>. The code is freely available, so you (or another party) can always keep running it yourself. Additionally, your data always remains yours and you can export it. You\'re never dependent on a single person or company.',
  },
  'faq.q10': { nl: 'Waar wordt onze data opgeslagen?', en: 'Where is our data stored?' },
  'faq.a10': {
    nl: 'Op Europese servers, in overeenstemming met de AVG. Alle diensten die we gebruiken zijn Europees. We sluiten een bewerkersovereenkomst en nemen passende technische maatregelen om je data te beschermen. Meer details staan op onze <a href="/made-in-europe/">Made in Europe</a>-pagina, in ons <a href="/privacybeleid/">privacybeleid</a> en onze <a href="/voorwaarden/">voorwaarden</a>.',
    en: 'On European servers, in compliance with the GDPR. All services we use are European. We sign a data processing agreement and take appropriate technical measures to protect your data. More details can be found on our <a href="/en/made-in-europe/">Made in Europe</a> page, in our <a href="/en/privacy/">privacy policy</a> and our <a href="/en/terms/">terms and conditions</a>.',
  },
  'faq.q11': { nl: 'Kan ik ledenpassen en scanner nu al zien?', en: 'Can I already see membership passes and scanner?' },
  'faq.a11': {
    nl: 'Ja. In de demo kun je Apple/Google-ledenpassen en de scannerflow direct testen met demo/demo.',
    en: 'Yes. In the demo you can directly test Apple/Google membership passes and the scanner flow using demo/demo.',
  },
  'faq.q12': { nl: 'Wat zie ik in het finance dashboard?', en: 'What do I see in the finance dashboard?' },
  'faq.a12': {
    nl: 'Openstaand bedrag, recente betalingen en acties die opvolging nodig hebben.',
    en: 'Outstanding amount, recent payments, and actions that need follow-up.',
  },
  'faq.q13': { nl: 'Hoe actueel is de demo?', en: 'How up to date is the demo?' },
  'faq.a13': {
    nl: 'De demo is bedoeld om functionaliteit te bekijken. Data kan afwijken van productie en wordt periodiek ververst.',
    en: 'The demo is meant to evaluate functionality. Data can differ from production and is refreshed periodically.',
  },
  'faq.q14': { nl: 'Wat doet Rondo Sync precies?', en: 'What exactly does Rondo Sync do?' },
  'faq.a14': {
    nl: 'Rondo Sync verwerkt automatisch wijzigingen uit Sportlink (en optioneel Nikki) en zet die door naar Rondo Club en gekoppelde systemen zoals Laposta en FreeScout. Toegestane contact- en adreswijzigingen uit Rondo Club gaan gecontroleerd terug naar Sportlink. Het wijzigingslog bewaart elke wijziging 24 maanden en toont of die wacht, is gesynchroniseerd, alleen in Rondo hoort of actie nodig heeft.',
    en: 'Rondo Sync automatically processes changes from Sportlink (and optionally Nikki) and propagates them to Rondo Club and connected systems such as Laposta and FreeScout. Allowed contact and address changes from Rondo Club are returned to Sportlink in a controlled flow. The change log keeps each change for 24 months and shows whether it is waiting, synchronized, Rondo-only or needs action.',
  },

  'faq.q15': { nl: 'Kan Rondo ook bardiensten en andere vrijwilligersdiensten roosteren?', en: 'Can Rondo schedule bar shifts and other volunteer shifts?' },
  'faq.a15': {
    nl: 'Ja. Je plant het hele seizoen vooruit en opent de zelfinschrijving per seizoenshelft. Leden kiezen zelf een dienst of de coördinator deelt iemand rechtstreeks in. Het volledige aanmeldingenoverzicht, de bezettingskalender en het statistiekendashboard tonen per seizoen de voortgang en komende tekorten. Vrijwilligers kunnen hun eigen planning downloaden naar hun agenda. <a href="/voor-vrijwilligerscoordinator/">Bekijk hoe dit werkt voor de vrijwilligerscoördinator.</a>',
    en: 'Yes. You plan the entire season ahead and open self-signup separately for each half. Members choose a shift or the coordinator assigns someone directly. The complete signup overview, coverage calendar and statistics dashboard show progress and upcoming shortages per season. Volunteers can download their own schedule to their calendar. <a href="/en/for-volunteer-coordinator/">See how this works for the volunteer coordinator.</a>',
  },
  'faq.q16': { nl: 'Kan ik ook sponsors beheren in Rondo?', en: 'Can I manage sponsors in Rondo too?' },
  'faq.a16': {
    nl: 'Ja. Rondo ondersteunt organisaties en persoonlijke sponsors, gekoppelde contactpersonen, sponsor- en Businessclub-passen, logo’s en zichtbaarheid op Club TV. Een sponsorcontact kan alleen het logo van de eigen organisatie bijwerken. Clubs die <a href="https://www.sponsit.nl/" target="_blank" rel="noopener">Sponsit</a> gebruiken kunnen organisaties, contacten en logo’s synchroniseren. <a href="/voor-sponsorcommissie/">Bekijk hoe dit werkt voor de sponsorcommissie.</a>',
    en: 'Yes. Rondo supports organisations and personal sponsors, linked contacts, sponsor and Businessclub passes, logos and Club TV visibility. A sponsor contact can only update their own organisation’s logo. Clubs using <a href="https://www.sponsit.nl/" target="_blank" rel="noopener">Sponsit</a> can sync organisations, contacts and logos. <a href="/en/for-sponsor-committee/">See how this works for the sponsor committee.</a>',
  },
  'faq.q17': { nl: 'Kunnen leden zelf inloggen?', en: 'Can members log in themselves?' },
  'faq.a17': {
    nl: 'Ja. Via het inlogformulier ontvangt een lid of ouder een eenmalige link per e-mail. Bij een gedeeld e-mailadres binnen een gezin kiest de gebruiker eerst de juiste persoon; Rondo koppelt een ouder of verzorger waar mogelijk meteen aan het eigen profiel. Inloggen kan met zo’n e-maillink of met een zelfgekozen wachtwoord. Na het inloggen kan de clubversie optioneel via App installeren op een geschikt apparaat worden gezet; Rondo toont geen automatische installatiepop-up. In Mijn gegevens passen leden hun eigen e-mailadressen, telefoonnummers en het woonadres van hun gezin aan. Ouders kunnen e-mailadressen en telefoonnummers van hun eigen kinderen onder 18 wijzigen; een andere ouder of verzorger is alleen-lezen. Nieuwe e-mailadressen worden eerst geverifieerd. Toegestane wijzigingen gaan gecontroleerd naar Sportlink en kunnen daar tot een half uur op verwerking wachten. Beschikbare passen voeg je direct toe aan Apple Wallet of Google Wallet.',
    en: 'Yes. Through the login form, a member or parent receives a one-time link by email. When a family shares an email address, the user first chooses the right person; wherever possible, Rondo links a parent or guardian directly to their own profile. They can log in with an email link or a password they set themselves. After logging in, users can optionally add the club version to a suitable device through Install app; Rondo does not show an automatic installation pop-up. In My details, members can edit their own email addresses, phone numbers and household address. Parents can edit the email addresses and phone numbers of their own children under 18; another parent or guardian is read-only. New email addresses are verified first. Allowed changes are sent to Sportlink in a controlled flow and can take up to half an hour to process there. Available passes can be added directly to Apple Wallet or Google Wallet.',
  },

  // ─── ContactForm ───
  'contact.heading': { nl: 'Interesse?', en: 'Interested?' },
  'contact.subheading': {
    nl: 'Vul het formulier in en we nemen zo snel mogelijk contact met je op.',
    en: "Fill out the form and we'll get back to you as soon as possible.",
  },
  'contact.name': { nl: 'Naam', en: 'Name' },
  'contact.name.placeholder': { nl: 'Jouw naam', en: 'Your name' },
  'contact.email': { nl: 'E-mailadres', en: 'Email address' },
  'contact.email.placeholder': { nl: 'jouw@email.nl', en: 'your@email.com' },
  'contact.club': { nl: 'Clubnaam', en: 'Club name' },
  'contact.club.placeholder': { nl: 'Naam van je sportclub', en: 'Name of your sports club' },
  'contact.members': { nl: 'Aantal leden', en: 'Number of members' },
  'contact.members.placeholder': { nl: 'Bijvoorbeeld: 200-500', en: 'For example: 200-500' },
  'contact.message': { nl: 'Bericht', en: 'Message' },
  'contact.message.placeholder': { nl: 'Waar kunnen we je mee helpen?', en: 'How can we help you?' },
  'contact.submit': { nl: 'Verstuur bericht', en: 'Send message' },
  'contact.sending': { nl: 'Versturen...', en: 'Sending...' },
  'contact.success': { nl: 'Bedankt! We nemen zo snel mogelijk contact op.', en: "Thanks! We'll get back to you as soon as possible." },
  'contact.error': { nl: 'Er ging iets mis. Probeer het opnieuw.', en: 'Something went wrong. Please try again.' },
  'contact.errorRetry': { nl: 'Er ging iets mis. Probeer het later opnieuw.', en: 'Something went wrong. Please try again later.' },
  'contact.validation': { nl: 'Vul alle verplichte velden in (naam, e-mail, clubnaam).', en: 'Please fill in all required fields (name, email, club name).' },
  'contact.validEmail': { nl: 'Vul een geldig e-mailadres in.', en: 'Please enter a valid email address.' },

  // ─── Footer ───
  'footer.madeInEurope': { nl: 'Made in Europe', en: 'Made in Europe' },
  'footer.openSource': { nl: 'Open source op GitHub', en: 'Open source on GitHub' },
  'footer.privacy': { nl: 'Privacybeleid', en: 'Privacy policy' },
  'footer.terms': { nl: 'Voorwaarden', en: 'Terms' },
  'footer.disclaimer': {
    nl: 'Sportlink is een merknaam van Sportlink Services B.V. Rondo is een product van Emilia Projects BV en is niet gelieerd aan Sportlink Services B.V.',
    en: 'Sportlink is a trademark of Sportlink Services B.V. Rondo is a product of Emilia Projects BV and is not affiliated with Sportlink Services B.V.',
  },

  // ─── Made in Europe page ───
  'europe.title': { nl: 'Made in Europe — Rondo', en: 'Built in Europe — Rondo' },
  'europe.description': {
    nl: 'Rondo is volledig gebouwd en gehost in Europa. Ontdek welke diensten we gebruiken en waarom dat belangrijk is.',
    en: 'Rondo is fully built and hosted in Europe. Discover which services we use and why that matters.',
  },
  'europe.heading': { nl: 'Made in Europe', en: 'Made in Europe' },
  'europe.subtitle': {
    nl: 'Rondo is volledig gebouwd, gehost en beheerd in Europa. Jouw clubdata verlaat nooit de EU.',
    en: 'Rondo is fully built, hosted and managed in Europe. Your club data never leaves the EU.',
  },
  'europe.why.heading': { nl: 'Waarom dat belangrijk is', en: 'Why that matters' },
  'europe.why.p1': {
    nl: 'Sportclubs beheren persoonlijke gegevens van leden: namen, adressen, financiële gegevens en meer. Door uitsluitend Europese diensten te gebruiken valt alle dataverwerking onder de AVG/GDPR, zonder afhankelijkheid van buitenlandse wetgeving zoals de US CLOUD Act.',
    en: 'Sports clubs manage personal data of members: names, addresses, financial data and more. By exclusively using European services, all data processing falls under the GDPR, without dependency on foreign legislation such as the US CLOUD Act.',
  },
  'europe.why.p2': {
    nl: 'Dat betekent: geen data die onverwacht bij Amerikaanse techbedrijven terechtkomt, en volledige controle over waar jullie ledenadministratie staat.',
    en: "That means: no data unexpectedly ending up with American tech companies, and full control over where your member administration is stored.",
  },
  'europe.services.heading': {
    nl: 'Diensten die we gebruiken en waarmee we integreren',
    en: 'Services we use and integrate with',
  },
  'europe.hosting.heading': { nl: 'Hosting', en: 'Hosting' },
  'europe.hosting.intro': {
    nl: 'Clubs kunnen kiezen uit meerdere Europese hostingpartners:',
    en: 'Clubs can choose from multiple European hosting partners:',
  },
  'europe.opensource.heading': { nl: 'Open source', en: 'Open source' },
  'europe.opensource.text': {
    nl: 'Rondo is volledig open source. Je kunt de broncode inzien, controleren en bijdragen op <a href="https://github.com/rondohq" target="_blank" rel="noopener">GitHub</a>. Transparantie is geen marketingpraatje: het is hoe we werken.',
    en: 'Rondo is fully open source. You can view, audit and contribute to the source code on <a href="https://github.com/rondohq" target="_blank" rel="noopener">GitHub</a>. Transparency isn\'t a marketing buzzword: it\'s how we work.',
  },
  // Service descriptions for Made in Europe page
  'europe.mollie.role': { nl: 'Betaalverzoeken en contributie', en: 'Payment requests and dues' },
  'europe.mollie.desc': {
    nl: 'Nederlandse betaalprovider voor iDEAL, creditcard en andere betaalmethodes. Gereguleerd door De Nederlandsche Bank.',
    en: 'Dutch payment provider for iDEAL, credit card and other payment methods. Regulated by De Nederlandsche Bank.',
  },
  'europe.lettermint.role': { nl: 'Transactionele e-mail', en: 'Transactional email' },
  'europe.lettermint.desc': {
    nl: 'Europese e-maildienst voor factuurmails, herinneringen en notificaties. Data blijft volledig binnen de EU.',
    en: 'European email service for invoice emails, reminders and notifications. Data stays entirely within the EU.',
  },
  'europe.rabobank.role': { nl: 'Betaalverzoeken', en: 'Payment requests' },
  'europe.rabobank.desc': {
    nl: 'Betaalverzoeken rechtstreeks via de Rabobank. Ideaal voor clubs met een Rabobank-rekening die leden snel en vertrouwd willen laten betalen.',
    en: 'Payment requests directly through Rabobank. Ideal for clubs with a Rabobank account that want members to pay quickly and securely.',
  },
  'europe.sportlink.role': { nl: 'Ledenadministratie', en: 'Member administration' },
  'europe.sportlink.desc': {
    nl: 'Het ledenregistratiesysteem van veel sportbonden. Rondo synchroniseert automatisch alle ledendata vanuit Sportlink.',
    en: 'The member registration system used by many sports federations. Rondo automatically syncs all member data from Sportlink.',
  },
  'europe.nikki.role': { nl: 'Contributie (optioneel)', en: 'Dues (optional)' },
  'europe.nikki.desc': {
    nl: 'Contributie-inning via Sportlink. Rondo heeft een eigen contributiesysteem, maar ondersteunt ook Nikki voor clubs die dat al gebruiken.',
    en: 'Dues collection via Sportlink. Rondo has its own dues system, but also supports Nikki for clubs already using it.',
  },
  'europe.sponsit.role': { nl: 'Sponsorbeheer (optioneel)', en: 'Sponsor management (optional)' },
  'europe.sponsit.desc': {
    nl: 'Nederlands platform voor sponsorwerving en -beheer. Rondo Sync haalt sponsors en contactpersonen automatisch op voor clubs die Sponsit gebruiken.',
    en: 'Dutch platform for sponsor acquisition and management. Rondo Sync automatically imports sponsors and contact people for clubs using Sponsit.',
  },
  'europe.laposta.role': { nl: 'E-mailmarketing', en: 'Email marketing' },
  'europe.laposta.desc': {
    nl: 'Nederlandse e-mailmarketingdienst voor nieuwsbrieven en mailinglijsten. Gratis tot 2.000 adressen. Ledenlijsten worden automatisch gesynchroniseerd vanuit Rondo.',
    en: 'Dutch email marketing service for newsletters and mailing lists. Free up to 2,000 addresses. Member lists are automatically synced from Rondo.',
  },
  'europe.siteground.role': { nl: 'Hosting', en: 'Hosting' },
  'europe.siteground.desc': {
    nl: 'Europese hostingprovider met datacenters in onder andere Nederland en Duitsland. Hoofdkantoor in Spanje.',
    en: 'European hosting provider with data centres in the Netherlands and Germany, among others. Headquartered in Spain.',
  },
  'europe.hostinger.role': { nl: 'Hosting', en: 'Hosting' },
  'europe.hostinger.desc': {
    nl: 'Litouwse hostingprovider met Europese datacenters. Gebruikt voor aanvullende hosting en domeinnaamregistratie.',
    en: 'Lithuanian hosting provider with European data centres. Used for additional hosting and domain registration.',
  },
  'europe.yourhosting.role': { nl: 'Hosting', en: 'Hosting' },
  'europe.yourhosting.desc': {
    nl: 'Nederlandse hostingprovider met datacenters in Nederland. Onderdeel van TransIP/team.blue.',
    en: 'Dutch hosting provider with data centres in the Netherlands. Part of TransIP/team.blue.',
  },

  // ─── Privacy Policy page ───
  'privacy.title': { nl: 'Privacybeleid — Rondo', en: 'Privacy Policy — Rondo' },
  'privacy.description': {
    nl: 'Het privacybeleid van rondo.club, beheerd door Emilia Projects BV. Lees hoe wij omgaan met persoonsgegevens en ledendata.',
    en: 'The privacy policy of rondo.club, managed by Emilia Projects BV. Read how we handle personal data and member records.',
  },

  // ─── Terms page ───
  'terms.title': { nl: 'Algemene Voorwaarden — Rondo', en: 'Terms and Conditions — Rondo' },
  'terms.description': {
    nl: 'De algemene voorwaarden voor het gebruik van Rondo, beheerd door Emilia Projects BV.',
    en: 'The terms and conditions for using Rondo, managed by Emilia Projects BV.',
  },

  // ─── Language switcher ───
  'lang.nl': { nl: 'NL', en: 'NL' },
  'lang.en': { nl: 'EN', en: 'EN' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}
