import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/sanity";
import { img, articleImageBySlug } from "@/lib/image-manifest";

export const revalidate = 60;

const FALLBACK_ARTICLES = [
  { slug: "whatsapp-ios18", type: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.", label: "article · ios 18 acquisitions" },
  { slug: "bec-header-forensics", type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel.", label: "article · bec headers" },
  { slug: "m365-retention", type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?", label: "article · m365 logs" },
  { slug: "ai-forensics-marketing", type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't.", label: "article · ai forensics" },
  { slug: "signal-android14", type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data.", label: "article · signal android" },
  { slug: "65b-sc-ruling", type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026.", label: "article · § 65b ruling" },
];

export async function generateStaticParams() {
  const sanity = await getArticles();
  const sanityParams = sanity
    .filter((a) => a.slug?.current)
    .map((a) => ({ slug: a.slug!.current }));
  const fallbackParams = FALLBACK_ARTICLES.map((a) => ({ slug: a.slug }));
  // merge, sanity wins on duplicates
  const seen = new Set(sanityParams.map((p) => p.slug));
  return [...sanityParams, ...fallbackParams.filter((p) => !seen.has(p.slug))];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (article) return { title: article.seoTitle ?? article.title, description: article.seoDescription ?? "" };
  const fallback = FALLBACK_ARTICLES.find((a) => a.slug === params.slug);
  if (!fallback) return {};
  return { title: `${fallback.title} — Cyber Eye Intelligence` };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const sanityArticle = await getArticleBySlug(params.slug);
  const fallback = FALLBACK_ARTICLES.find((a) => a.slug === params.slug);

  if (!sanityArticle && !fallback) notFound();

  const title = sanityArticle?.title ?? fallback!.title;
  const type = sanityArticle?.type ?? fallback!.type;
  const readTime = sanityArticle?.readTime ?? fallback!.readTime;
  const sanityDate = sanityArticle?.date
    ?? (sanityArticle?.publishedAt ? new Date(sanityArticle.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "");
  const date = sanityDate || fallback?.date || "";
  const label = sanityArticle?.label ?? fallback?.label ?? "";
  const body = sanityArticle?.body as { _type: string; children?: { text: string }[] }[] | undefined;

  const imageSlot =
    articleImageBySlug[label] ??
    articleImageBySlug[params.slug] ??
    "insight-featured-hero";
  const heroImg = img(imageSlot);

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            <Link href="/knowledge?tab=insights" className="hover:text-accent transition">Insights</Link>
            {" / "}
            <span className="text-white">{title}</span>
          </div>
          <div className="label mb-4">[ {type} · {readTime} · {date} ]</div>
          <h1 className="display text-4xl lg:text-6xl max-w-4xl mb-10">{title}</h1>
          <Image
            {...heroImg}
            alt={heroImg.alt}
            className="rounded-card w-full aspect-[5/2] object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            {(!body || body.length === 0) ? (
              <p className="text-mute text-lg leading-relaxed">
                Full article content is being prepared. Check back soon — or{" "}
                <Link href="/contact" className="text-accent hover:underline">contact us</Link>{" "}
                if you need this information urgently.
              </p>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                {body.map((block, i) => {
                  if (block._type === "block" && block.children) {
                    return (
                      <p key={i} className="text-mute leading-relaxed mb-5">
                        {block.children.map((c) => c.text).join("")}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>

          <div className="mt-16 pt-10 border-t border-line flex items-center justify-between">
            <Link href="/knowledge?tab=insights" className="mono text-sm text-accent hover:underline">← Back to Insights</Link>
            <Link href="/contact" className="btn-primary">Speak to an examiner →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
