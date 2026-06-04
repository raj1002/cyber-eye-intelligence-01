import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/sanity";
import { img, articleImageBySlug } from "@/lib/image-manifest";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles
    .filter((a) => a.slug?.current)
    .map((a) => ({ slug: a.slug!.current }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? "",
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const label = article.label ?? "";
  const imageSlot =
    articleImageBySlug[label] ??
    articleImageBySlug[params.slug] ??
    "insight-featured-hero";
  const heroImg = img(imageSlot);

  const date = article.date ?? (article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : "");

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            <Link href="/insights" className="hover:text-accent transition">Insights</Link>
            {" / "}
            <span className="text-white">{article.title}</span>
          </div>
          <div className="label mb-4">[ {article.type} · {article.readTime} · {date} ]</div>
          <h1 className="display text-4xl lg:text-6xl max-w-4xl mb-10">{article.title}</h1>
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
            {(!article.body || (article.body as unknown[]).length === 0) ? (
              <p className="text-mute text-lg leading-relaxed">
                Full article content is being prepared. Check back soon — or{" "}
                <Link href="/contact" className="text-accent hover:underline">contact us</Link>{" "}
                if you need this information urgently.
              </p>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                {(article.body as { _type: string; children?: { text: string }[] }[]).map((block, i) => {
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
            <Link href="/insights" className="mono text-sm text-accent hover:underline">← Back to Insights</Link>
            <Link href="/contact" className="btn-primary">Speak to an examiner →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
