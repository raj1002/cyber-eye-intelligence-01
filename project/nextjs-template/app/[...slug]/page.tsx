import { notFound } from 'next/navigation';
import { getPageBySlug, getPages } from '@/lib/sanity';
import PortableText from '@/components/PortableText';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((p) => ({ slug: p.slug.current.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const slug = params.slug.join('/');
  const page = await getPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.seoTitle ?? `${page.title} — Cyber Eye Intelligence`,
    description: page.seoDescription ?? page.description,
  };
}

export default async function FreePage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const page = await getPageBySlug(slug);
  if (!page) notFound();

  const maxW =
    page.layout === 'wide' ? 'max-w-page' : page.layout === 'narrow' ? 'max-w-2xl' : 'max-w-4xl';

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className={`${maxW} mx-auto px-6 lg:px-10`}>
          <div className="label mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            {' / '}
            <span className="text-white">{page.title}</span>
          </div>
          <h1 className="display text-5xl lg:text-6xl mb-6">{page.title}</h1>
          {page.description && (
            <p className="text-lg text-mute max-w-2xl">{page.description}</p>
          )}
        </div>
      </section>

      <div className={`${maxW} mx-auto px-6 lg:px-10 py-16`}>
        {page.body && page.body.length > 0 ? (
          <PortableText value={page.body} />
        ) : (
          <p className="text-mute">No content yet.</p>
        )}
      </div>
    </>
  );
}
