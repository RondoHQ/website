import type { Organization, SoftwareApplication, WithContext } from 'schema-dts';

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
