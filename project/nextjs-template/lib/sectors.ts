// Display order and fixed codes for the five sectors (spec P1.9).
// Codes, URLs and copy stay the same; only the order changes. Used by the homepage
// "Who we serve" grid, /sectors, the nav flyout (desktop + mobile) and the footer.

export interface SectorMeta {
  slug: string;
  code: string;
  navTitle: string;
  navDesc: string;
  footerLabel: string;
}

export const SECTOR_ORDER: SectorMeta[] = [
  { slug: 'bfsi-insurance', code: 'S/05', navTitle: 'BFSI & Insurance', navDesc: 'Fraud, AML, customer-data investigations.', footerLabel: 'BFSI' },
  { slug: 'legal-litigation', code: 'S/02', navTitle: 'Legal & Litigation', navDesc: 'eDiscovery, expert witness, BSA s.63 certificates.', footerLabel: 'Legal' },
  { slug: 'corporate-enterprise', code: 'S/03', navTitle: 'Corporate Enterprise', navDesc: 'Internal investigations, IP theft, misconduct.', footerLabel: 'Corporate' },
  { slug: 'law-enforcement', code: 'S/01', navTitle: 'Law Enforcement', navDesc: 'Cyber cells, anti-fraud units, SIT support.', footerLabel: 'Law Enforcement' },
  { slug: 'government', code: 'S/04', navTitle: 'Government', navDesc: 'CERT-aligned, classified handling, audits.', footerLabel: 'Government' },
];

export function sectorCode(slug: string): string | undefined {
  return SECTOR_ORDER.find((s) => s.slug === slug)?.code;
}

/** Sorts any list of items with a `slug` into the P1.9 order; unknown slugs go last, in their original order. */
export function orderBySector<T extends { slug: string }>(items: T[]): T[] {
  const rank = (slug: string) => {
    const i = SECTOR_ORDER.findIndex((s) => s.slug === slug);
    return i === -1 ? SECTOR_ORDER.length : i;
  };
  return items
    .map((item, i) => ({ item, i }))
    .sort((a, b) => rank(a.item.slug) - rank(b.item.slug) || a.i - b.i)
    .map(({ item }) => item);
}
