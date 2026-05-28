import { MetadataRoute } from 'next';
import { serviceFamilies, sectors } from '@/lib/data';

const BASE_URL = 'https://cybereyeintelligence.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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

  const serviceRoutes: MetadataRoute.Sitemap = serviceFamilies.map((sf) => ({
    url: `${BASE_URL}/services/${sf.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${BASE_URL}/sectors/${s.slug}`,
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
