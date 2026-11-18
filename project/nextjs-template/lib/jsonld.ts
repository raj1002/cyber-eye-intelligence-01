// JSON-LD factories (spec P1.6). Values must match the visible copy.
// No aggregateRating anywhere: Google ignores self-served ratings on Organization markup.

import { SITE_URL, PHONE_TEL, FIRM_DESCRIPTION, AI_THREATS } from '@/lib/ai-positioning';

type Json = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;

export function orgLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Cyber Eye Intelligence',
    legalName: 'Cyber Eye Intelligence LLP',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: FIRM_DESCRIPTION,
    telephone: PHONE_TEL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6th Floor, Light Bridge, H.B.P, Saki Vihar Road, Powai',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400072',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Digital forensics',
      'Incident response',
      'Mobile forensics',
      'Deepfake detection',
      ...AI_THREATS.map((t) => t.title),
      'Bharatiya Sakshya Adhiniyam Section 63 certificates',
    ],
  };
}

export function websiteLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Cyber Eye Intelligence',
    url: SITE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; serviceType: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${SITE_URL}${opts.path}`,
    provider: { '@type': 'Organization', '@id': ORG_ID, name: 'Cyber Eye Intelligence' },
    areaServed: { '@type': 'Country', name: 'India' },
  };
}

export function faqLd(items: { q: string; a: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
