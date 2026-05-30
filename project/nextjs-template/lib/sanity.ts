import { createClient } from 'next-sanity';

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const projectId = /^[a-z0-9-]+$/.test(rawProjectId) ? rawProjectId : 'f36piw8r';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-05-01',
  useCdn: true,
});

// ─── Typed interfaces ────────────────────────────────────────────────────────

export interface SanityServiceFamily {
  _id: string;
  _type: 'service';
  title: string;
  slug: { current: string };
  tagline?: string;
  description?: string;
  icon?: string;
  services?: { title: string; description: string }[];
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
}

export interface SanitySector {
  _id: string;
  _type: 'sector';
  title: string;
  slug: { current: string };
  tagline?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
}

export interface SanityCaseFile {
  _id: string;
  _type: 'caseFile';
  ref?: string;
  sector?: string;
  label?: string;
  title: string;
  sub?: string;
  imgLabel?: string;
  publishedAt?: string;
}

export interface SanityCourse {
  _id: string;
  _type: 'course';
  code?: string;
  audience?: 'police' | 'counsel' | 'corporate';
  title: string;
  sub?: string;
  duration?: string;
  format?: string;
  price?: string;
}

export interface SanityArticle {
  _id: string;
  _type: 'article';
  type?: string;
  readTime?: string;
  date?: string;
  title: string;
  label?: string;
  body?: unknown[];
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityWhitepaper {
  _id: string;
  _type: 'whitepaper';
  code?: string;
  title: string;
  sub?: string;
  year?: string;
  pdfUrl?: string;
}

export interface SanityBlog {
  _id: string;
  _type: 'blog';
  date?: string;
  title: string;
  readTime?: string;
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
}

export interface SanityTestimonial {
  _id: string;
  _type: 'testimonial';
  quote: string;
  author?: string;
  firm?: string;
  rating?: number;
}

export interface SanityTeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role?: string;
  bio?: string;
  order?: number;
}

// ─── Helper functions ────────────────────────────────────────────────────────

export async function getServiceFamilies(): Promise<SanityServiceFamily[]> {
  try {
    return await sanityClient.fetch<SanityServiceFamily[]>(
      `*[_type == "service"] | order(publishedAt asc) {
        _id, _type, title, slug, tagline, description, icon,
        services[] { title, description },
        seoTitle, seoDescription, publishedAt
      }`,
      {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<SanityServiceFamily | null> {
  try {
    return await sanityClient.fetch<SanityServiceFamily | null>(
      `*[_type == "service" && slug.current == $slug][0] {
        _id, _type, title, slug, tagline, description, icon,
        services[] { title, description },
        seoTitle, seoDescription, publishedAt
      }`,
      { slug },
      { next: { revalidate: 300 } }
    );
  } catch {
    return null;
  }
}

export async function getSectors(): Promise<SanitySector[]> {
  try {
    return await sanityClient.fetch<SanitySector[]>(
      `*[_type == "sector"] | order(publishedAt asc) {
        _id, _type, title, slug, tagline, description, seoTitle, seoDescription, publishedAt
      }`,
      {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}

export async function getSectorBySlug(slug: string): Promise<SanitySector | null> {
  try {
    return await sanityClient.fetch<SanitySector | null>(
      `*[_type == "sector" && slug.current == $slug][0] {
        _id, _type, title, slug, tagline, description, seoTitle, seoDescription, publishedAt
      }`,
      { slug },
      { next: { revalidate: 300 } }
    );
  } catch {
    return null;
  }
}

export async function getCaseFiles(sector?: string): Promise<SanityCaseFile[]> {
  try {
    const filter = sector
      ? `*[_type == "caseFile" && sector == $sector] | order(publishedAt desc)`
      : `*[_type == "caseFile"] | order(publishedAt desc)`;
    return await sanityClient.fetch<SanityCaseFile[]>(
      `${filter} { _id, _type, ref, sector, label, title, sub, imgLabel, publishedAt }`,
      sector ? { sector } : {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}

export async function getCourses(audience?: string): Promise<SanityCourse[]> {
  try {
    const filter = audience
      ? `*[_type == "course" && audience == $audience]`
      : `*[_type == "course"]`;
    return await sanityClient.fetch<SanityCourse[]>(
      `${filter} | order(_createdAt asc) { _id, _type, code, audience, title, sub, duration, format, price }`,
      audience ? { audience } : {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}

export async function getArticles(): Promise<SanityArticle[]> {
  try {
    return await sanityClient.fetch<SanityArticle[]>(
      `*[_type == "article"] | order(publishedAt desc) {
        _id, _type, type, readTime, date, title, label, body, publishedAt, seoTitle, seoDescription
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

export async function getWhitepapers(): Promise<SanityWhitepaper[]> {
  try {
    return await sanityClient.fetch<SanityWhitepaper[]>(
      `*[_type == "whitepaper"] | order(_createdAt asc) { _id, _type, code, title, sub, year, pdfUrl }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

export async function getBlogs(): Promise<SanityBlog[]> {
  try {
    return await sanityClient.fetch<SanityBlog[]>(
      `*[_type == "blog"] | order(publishedAt desc) {
        _id, _type, date, title, readTime, body, seoTitle, seoDescription, publishedAt
      }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  try {
    return await sanityClient.fetch<SanityTestimonial[]>(
      `*[_type == "testimonial"] | order(_createdAt asc) { _id, _type, quote, author, firm, rating }`,
      {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  try {
    return await sanityClient.fetch<SanityTeamMember[]>(
      `*[_type == "teamMember"] | order(order asc) { _id, _type, name, role, bio, order }`,
      {},
      { next: { revalidate: 300 } }
    );
  } catch {
    return [];
  }
}
