import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/lib/sanity";
import { img, articleImageBySlug } from "@/lib/image-manifest";

const FALLBACK = [
  { slug: "whatsapp-ios18", type: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes." },
  { slug: "bec-header-forensics", type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel." },
  { slug: "m365-retention", type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?" },
  { slug: "ai-forensics-marketing", type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't." },
  { slug: "signal-android14", type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data." },
  { slug: "65b-sc-ruling", type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026." },
];

export const metadata = {
  title: "Insights — Cyber Eye Intelligence",
  description: "Field notes, tool reviews and case-law commentary from working forensic examiners.",
};

export default async function InsightsPage() {
  const sanity = await getArticles();
  const articles = sanity.length > 0
    ? sanity.map((a) => ({
        slug: a.slug?.current ?? a._id,
        type: a.type ?? "Article",
        readTime: a.readTime ?? "5 min",
        date: a.date ?? (a.publishedAt
          ? new Date(a.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
          : ""),
        title: a.title,
      }))
    : FALLBACK;

  const [featured, ...rest] = articles;

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Insights</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-6">From the<br /><span className="text-accent">lab.</span></h1>
          <p className="text-lg text-mute max-w-2xl">Field notes, tool reviews, case-law commentary and the occasional rant — written by working examiners between acquisitions.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          {featured && (
            <Link href={`/insights/${featured.slug}`} className="card card-hover overflow-hidden grid md:grid-cols-2 mb-12 block">
              {articleImageBySlug[featured.slug] ? <Image {...img(articleImageBySlug[featured.slug])} alt={img(articleImageBySlug[featured.slug]).alt} className="aspect-[5/4] md:aspect-auto object-cover w-full" sizes="(max-width: 768px) 100vw, 50vw" /> : <Image {...img("insight-featured-hero")} alt={img("insight-featured-hero").alt} className="aspect-[5/4] md:aspect-auto object-cover w-full" sizes="(max-width: 768px) 100vw, 50vw" />}
              <div className="p-10 flex flex-col justify-center">
                <div className="label mb-4">[ Featured · {featured.type} · {featured.readTime} ]</div>
                <h2 className="display text-3xl lg:text-4xl mb-6">{featured.title}</h2>
                <p className="text-mute leading-relaxed mb-6">
                  Apple&apos;s File System tweaks in iOS 18 quietly shifted what we can carve from unallocated space. Here&apos;s what still works, what doesn&apos;t, and the workflows we&apos;ve replaced.
                </p>
                <div className="mono text-sm text-accent">Read article →</div>
              </div>
            </Link>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            {rest.map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
                {articleImageBySlug[a.slug] && <Image {...img(articleImageBySlug[a.slug])} alt={img(articleImageBySlug[a.slug]).alt} className="aspect-[5/4] rounded-card mb-5 card-hover object-cover w-full" sizes="(max-width: 768px) 100vw, 33vw" />}
                <div className="label mb-2">{a.type} · {a.readTime} · {a.date}</div>
                <h3 className="text-xl leading-snug group-hover:text-accent transition">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
