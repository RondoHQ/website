import type { FAQPage, Organization, SoftwareApplication, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rondo",
  "url": "https://rondo.club",
  "logo": "https://rondo.club/rondo-logo.png",
  "description": "Ledenadministratie voor sportverenigingen met automatische Sportlink synchronisatie"
};

export const softwareApplicationSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rondo",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Ledenadministratie voor sportverenigingen. Beheer leden, teams en planning op één plek.",
  "offers": {
    "@type": "Offer",
    "price": "250",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "Rondo",
    "url": "https://rondo.club"
  }
};

export const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is FreeScout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreeScout is een open-source helpdesksysteem voor e-mail. Het is ideaal voor clubs omdat meerdere mensen toegang kunnen hebben tot dezelfde inbox — zo gaat er geen bericht verloren, ook als iemand op vakantie is."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook FreeScout hosting aan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee, op dit moment nog niet, maar we kunnen je wel in contact brengen met een partij die dat wél doet."
      }
    },
    {
      "@type": "Question",
      "name": "Waarom gebruiken jullie Laposta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Laposta is gratis tot 2.000 e-mailadressen in je lijsten en 12.000 e-mails per maand. Voor de meeste sportverenigingen is dat ruim voldoende, en de koppeling met Rondo zorgt dat je lijsten altijd up-to-date zijn."
      }
    },
    {
      "@type": "Question",
      "name": "Heb je Nikki nodig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee, Nikki is niet verplicht. Rondo werkt prima zonder. Sterker nog, we zijn aan het overwegen om ons eigen contributiesysteem te bouwen zodat je helemaal geen externe tool meer nodig hebt, omdat de koppeling tussen Nikki en Sportlink verre van foutloos is."
      }
    }
  ]
};
