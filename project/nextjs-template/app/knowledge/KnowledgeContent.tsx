'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { img, articleImageBySlug, caseImageByLabel, caseImageFromId } from '@/lib/image-manifest';

export interface KnowledgeCaseFile {
  id: string;
  slug: string;
  sector: string;
  label: string;
  title: string;
  sub: string;
  imgLabel: string;
}

export interface KnowledgeArticle {
  type: string;
  readTime: string;
  date: string;
  title: string;
  label: string;
  slug?: string;
}

export interface KnowledgeWhitepaper {
  code: string;
  title: string;
  sub: string;
  year: string;
  pdfUrl?: string;
}

export interface KnowledgeBlog {
  date: string;
  title: string;
  readTime: string;
  slug?: string;
}

interface Props {
  caseFiles: KnowledgeCaseFile[];
  articles: KnowledgeArticle[];
  whitepapers: KnowledgeWhitepaper[];
  blogs: KnowledgeBlog[];
}

const SECTOR_FILTERS = [
  { key: "all", label: "All sectors" },
  { key: "law-enforcement", label: "Law Enforcement" },
  { key: "legal", label: "Legal & Litigation" },
  { key: "corporate", label: "Corporate" },
  { key: "government", label: "Government" },
  { key: "bfsi", label: "BFSI & Insurance" },
  { key: "healthcare", label: "Healthcare" },
  { key: "ngo", label: "NGO" },
];

const ARTICLE_TYPE_FILTERS = [
  { key: "all", label: "All types" },
  { key: "Tutorial", label: "Tutorial" },
  { key: "Field notes", label: "Field Notes" },
  { key: "Reference", label: "Reference" },
  { key: "Opinion", label: "Opinion" },
  { key: "Case law", label: "Case Law" },
];

const WP_YEAR_FILTERS = [
  { key: "all", label: "All years" },
  { key: "2026", label: "2026" },
  { key: "2025", label: "2025" },
  { key: "2024", label: "2024" },
];

const BLOG_YEAR_FILTERS = [
  { key: "all", label: "All years" },
  { key: "2026", label: "2026" },
  { key: "2025", label: "2025" },
  { key: "2024", label: "2024" },
];

// Parse "MMM DD, YYYY" or "MMM D, YYYY" → Date for sorting
function parseDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

type Tab = 'cases' | 'insights' | 'whitepapers' | 'blogs';

function KnowledgeInner({ caseFiles, articles, whitepapers, blogs }: Props) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') as Tab | null;
  const [tab, setTab] = useState<Tab>(
    initialTab && ['cases', 'insights', 'whitepapers', 'blogs'].includes(initialTab) ? initialTab : 'cases'
  );
  const [sector, setSector] = useState('all');
  const [articleType, setArticleType] = useState('all');
  const [wpYear, setWpYear] = useState('all');
  const [blogYear, setBlogYear] = useState('all');

  useEffect(() => {
    const t = searchParams.get('tab') as Tab | null;
    if (t && ['cases', 'insights', 'whitepapers', 'blogs'].includes(t)) {
      setTab(t);
      setSector('all');
      setArticleType('all');
      setWpYear('all');
      setBlogYear('all');
    }
  }, [searchParams]);

  // Sorted + filtered data
  const sortedCases = [...caseFiles].sort((a, b) => {
    const aYear = parseInt(a.id.match(/\d{4}/)?.[0] ?? '0');
    const bYear = parseInt(b.id.match(/\d{4}/)?.[0] ?? '0');
    const aSeq = parseInt(a.id.split('/')[2] ?? '0');
    const bSeq = parseInt(b.id.split('/')[2] ?? '0');
    return bYear !== aYear ? bYear - aYear : bSeq - aSeq;
  });
  const visibleCases = sector === 'all' ? sortedCases : sortedCases.filter((c) => c.sector === sector);

  const sortedArticles = [...articles].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const visibleArticles = articleType === 'all' ? sortedArticles : sortedArticles.filter((a) => a.type === articleType);

  const sortedWhitepapers = [...whitepapers].sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));
  const visibleWhitepapers = wpYear === 'all' ? sortedWhitepapers : sortedWhitepapers.filter((w) => w.year === wpYear);

  const sortedBlogs = [...blogs].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const visibleBlogs = blogYear === 'all' ? sortedBlogs : sortedBlogs.filter((b) => b.date.includes(blogYear));

  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Knowledge Centre</span></div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h1 className="display text-6xl lg:text-7xl">Knowledge<br /><span className="text-accent">Centre.</span></h1>
            <p className="text-lg text-mute max-w-md">Casework, field notes, deep references and the occasional opinion — published by working examiners between acquisitions.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['cases', 'insights', 'whitepapers', 'blogs'] as Tab[]).map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={`pill ${tab === t ? 'pill-on' : ''}`}>
                {t === 'cases' ? 'Case Files' : t === 'insights' ? 'Insights' : t === 'whitepapers' ? 'White Papers' : 'Blogs'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Files tab */}
      {tab === 'cases' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="label mb-3">[ Case Files · Redacted ]</div>
                <h2 className="display text-4xl">Filter by <span className="text-accent">sector.</span></h2>
              </div>
              <div className="text-sm text-mute"><span className="text-white num">{visibleCases.length}</span> of <span className="num">{caseFiles.length}</span> files</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {SECTOR_FILTERS.map((f) => (
                <button key={f.key} type="button" onClick={() => setSector(f.key)} className={`pill ${sector === f.key ? 'pill-on' : ''}`}>{f.label}</button>
              ))}
            </div>
            {visibleCases.length === 0 ? (
              <div className="text-center py-16 text-mute">
                <div className="display text-3xl mb-2">No matching cases.</div>
                <p className="text-sm">Try a different sector — or <Link href="/contact" className="text-accent">contact us</Link> about a precedent like yours.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCases.map((c) => (
                  <Link key={c.id} href={`/case-files/${c.slug}`} className="group block">
                    {(() => { const slot = caseImageFromId(c.id) ?? caseImageByLabel[c.imgLabel]; return slot ? <Image {...img(slot)} alt={img(slot).alt} className="aspect-[5/4] rounded-card mb-5 card-hover object-cover w-full" sizes="(max-width: 768px) 100vw, 33vw" /> : null; })()}
                    <div className="flex items-center gap-3 label mb-3">
                      <span className="text-accent">{c.id}</span><span>·</span><span>{c.label}</span>
                    </div>
                    <h3 className="text-xl leading-snug group-hover:text-accent transition">{c.title}</h3>
                    <p className="text-sm text-mute mt-2">{c.sub}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Insights tab */}
      {tab === 'insights' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="label mb-3">[ Insights · From the lab ]</div>
                <h2 className="display text-4xl">Filter by <span className="text-accent">type.</span></h2>
              </div>
              <div className="text-sm text-mute"><span className="text-white num">{visibleArticles.length}</span> of <span className="num">{articles.length}</span> articles</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {ARTICLE_TYPE_FILTERS.map((f) => (
                <button key={f.key} type="button" onClick={() => setArticleType(f.key)} className={`pill ${articleType === f.key ? 'pill-on' : ''}`}>{f.label}</button>
              ))}
            </div>
            {visibleArticles.length === 0 ? (
              <div className="text-center py-16 text-mute">
                <div className="display text-3xl mb-2">No matching articles.</div>
                <p className="text-sm">Try a different type filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleArticles.map((a, i) => (
                  <Link key={i} href={a.slug ? `/insights/${a.slug}` : '/knowledge?tab=insights'} className="group block">
                    {(() => { const slot = articleImageBySlug[a.label ?? '']; return slot ? <Image {...img(slot)} alt={img(slot).alt} className="aspect-[5/3] rounded-card mb-5 card-hover object-cover w-full" sizes="(max-width: 768px) 100vw, 33vw" /> : null; })()}
                    <div className="label mb-3">{a.type} · {a.readTime} · {a.date}</div>
                    <h3 className="text-xl font-medium leading-snug group-hover:text-accent transition">{a.title}</h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* White Papers tab */}
      {tab === 'whitepapers' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="label mb-3">[ White Papers · Technical reference ]</div>
                <h2 className="display text-4xl">Filter by <span className="text-accent">year.</span></h2>
              </div>
              <div className="text-sm text-mute"><span className="text-white num">{visibleWhitepapers.length}</span> of <span className="num">{whitepapers.length}</span> papers</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {WP_YEAR_FILTERS.map((f) => (
                <button key={f.key} type="button" onClick={() => setWpYear(f.key)} className={`pill ${wpYear === f.key ? 'pill-on' : ''}`}>{f.label}</button>
              ))}
            </div>
            {visibleWhitepapers.length === 0 ? (
              <div className="text-center py-16 text-mute">
                <div className="display text-3xl mb-2">No papers for that year.</div>
                <p className="text-sm">Try a different year filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {visibleWhitepapers.map((w) => (
                  <div key={w.code} className="card card-hover p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="mono text-accent text-xs">{w.code} · {w.year}</div>
                      <span className="hex" />
                    </div>
                    <h3 className="text-2xl font-medium mb-3 leading-snug">{w.title}</h3>
                    <p className="text-mute leading-relaxed mb-8">{w.sub}</p>
                    {w.pdfUrl
                      ? <a href={w.pdfUrl} target="_blank" rel="noopener noreferrer" className="mono text-xs text-accent uppercase tracking-wider">Download PDF →</a>
                      : <Link href="/contact" className="mono text-xs text-accent uppercase tracking-wider">Request PDF →</Link>
                    }
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Blogs tab */}
      {tab === 'blogs' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="label mb-3">[ Blog · Lab notes ]</div>
                <h2 className="display text-4xl">Filter by <span className="text-accent">year.</span></h2>
              </div>
              <div className="text-sm text-mute"><span className="text-white num">{visibleBlogs.length}</span> of <span className="num">{blogs.length}</span> posts</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {BLOG_YEAR_FILTERS.map((f) => (
                <button key={f.key} type="button" onClick={() => setBlogYear(f.key)} className={`pill ${blogYear === f.key ? 'pill-on' : ''}`}>{f.label}</button>
              ))}
            </div>
            {visibleBlogs.length === 0 ? (
              <div className="text-center py-16 text-mute">
                <div className="display text-3xl mb-2">No posts for that year.</div>
                <p className="text-sm">Try a different year filter.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {visibleBlogs.map((b, i) => (
                  <Link key={i} href={b.slug ? `/blogs/${b.slug}` : '/knowledge?tab=blogs'} className="card card-hover p-7 flex items-center justify-between gap-6 group block">
                    <div className="flex-1">
                      <div className="label mb-3">{b.date} · {b.readTime}</div>
                      <h3 className="text-xl font-medium group-hover:text-accent transition">{b.title}</h3>
                    </div>
                    <div className="mono text-accent text-sm flex-shrink-0">Read →</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default function KnowledgeContent(props: Props) {
  return (
    <Suspense fallback={<div className="py-20 text-center text-mute">Loading…</div>}>
      <KnowledgeInner {...props} />
    </Suspense>
  );
}
