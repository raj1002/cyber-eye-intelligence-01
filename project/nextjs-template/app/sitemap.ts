import { MetadataRoute } from 'next';
import { getServiceFamilies, getSectors } from '@/lib/sanity';

const BASE_URL = 'https://cybereyeintelligence.com';

const FALLBACK_SERVICE_SLUGS = [
  'digital-forensics', 'digital-intelligence', 'managed-security', 'managed-forensics', 'data-recovery',
];
const FALLBACK_SECTOR_SLUGS = [
  'law-enforcement', 'legal-litigation', 'corporate-enterprise', 'government', 'bfsi-insurance',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let serviceSlugs = FALLBACK_SERVICE_SLUGS;
  let sectorSlugs = FALLBACK_SECTOR_SLUGS;

  try {
    const [sanityServices, sanitySectors] = await Promise.all([
      getServiceFamilies(),
      getSectors(),
    ]);
    if (sanityServices.length > 0) serviceSlugs = sanityServices.map((s) => s.slug.current);
    if (sanitySectors.length > 0) sectorSlugs = sanitySectors.map((s) => s.slug.current);
  } catch {
    // fall through to static fallbacks
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/training`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/sectors`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/knowledge`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const sectorRoutes: MetadataRoute.Sitemap = sectorSlugs.map((slug) => ({
    url: `${BASE_URL}/sectors/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const legalRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/legal/disclaimers`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...staticRoutes, ...serviceRoutes, ...sectorRoutes, ...legalRoutes];
}
