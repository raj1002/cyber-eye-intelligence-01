import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "@/lib/sanity";

export const revalidate = 60;

const FALLBACK_BLOGS = [
  { slug: "bombay-hc-whatsapp-ruling", date: "May 12, 2026", title: "What the Bombay HC's WhatsApp admissibility ruling means for your next matter.", readTime: "4 min" },
  { slug: "up-police-cyber-training", date: "Apr 5, 2026", title: "We trained 200 UP Police cyber-crime investigators. Here's what they didn't know.", readTime: "6 min" },
  { slug: "cellebrite-vs-graykey-2026", date: "Mar 1, 2026", title: "Cellebrite UFED vs. GrayKey in 2026: a practitioner's honest comparison.", readTime: "8 min" },
];

export async function generateStaticParams() {
  const sanity = await getBlogs();
  const sanityParams = sanity
    .filter((b) => b.slug?.current)
    .map((b) => ({ slug: b.slug!.current }));
  const fallbackParams = FALLBACK_BLOGS.map((b) => ({ slug: b.slug }));
  const seen = new Set(sanityParams.map((p) => p.slug));
  return [...sanityParams, ...fallbackParams.filter((p) => !seen.has(p.slug))];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (blog) return { title: blog.seoTitle ?? blog.title, description: blog.seoDescription ?? "" };
  const fallback = FALLBACK_BLOGS.find((b) => b.slug === params.slug);
  if (!fallback) return {};
  return { title: `${fallback.title} — Cyber Eye Intelligence` };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const sanityBlog = await getBlogBySlug(params.slug);
  const fallback = FALLBACK_BLOGS.find((b) => b.slug === params.slug);

  if (!sanityBlog && !fallback) notFound();

  const title = sanityBlog?.title ?? fallback!.title;
  const readTime = sanityBlog?.readTime ?? fallback!.readTime;
  const sanityDate = sanityBlog?.date
    ?? (sanityBlog?.publishedAt ? new Date(sanityBlog.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "");
  const date = sanityDate || fallback?.date || "";
  const body = sanityBlog?.body as { _type: string; children?: { text: string }[] }[] | undefined;

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            <Link href="/knowledge?tab=blogs" className="hover:text-accent transition">Blogs</Link>
            {" / "}
            <span className="text-white">{title}</span>
          </div>
          <div className="label mb-4">[ Blog · {readTime} · {date} ]</div>
          <h1 className="display text-4xl lg:text-6xl max-w-4xl">{title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            {(!body || body.length === 0) ? (
              <p className="text-mute text-lg leading-relaxed">
                Full post content is being prepared. Check back soon — or{" "}
                <Link href="/contact" className="text-accent hover:underline">contact us</Link>{" "}
                if you need this information urgently.
              </p>
            ) : (
              <div className="space-y-5">
                {body.map((block, i) => {
                  if (block._type === "block" && block.children) {
                    return (
                      <p key={i} className="text-mute leading-relaxed">
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
            <Link href="/knowledge?tab=blogs" className="mono text-sm text-accent hover:underline">← Back to Blogs</Link>
            <Link href="/contact" className="btn-primary">Speak to an examiner →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
