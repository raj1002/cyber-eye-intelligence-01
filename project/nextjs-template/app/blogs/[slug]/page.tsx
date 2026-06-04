import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getBlogs } from "@/lib/sanity";

export const revalidate = 60;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs
    .filter((b) => b.slug?.current)
    .map((b) => ({ slug: b.slug!.current }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return {};
  return {
    title: blog.seoTitle ?? blog.title,
    description: blog.seoDescription ?? "",
  };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) notFound();

  const date = blog.date ?? (blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : "");

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            <Link href="/knowledge?tab=blogs" className="hover:text-accent transition">Knowledge Centre</Link>
            {" / "}
            <span className="text-white">{blog.title}</span>
          </div>
          <div className="label mb-4">[ Blog · {blog.readTime} · {date} ]</div>
          <h1 className="display text-4xl lg:text-6xl max-w-4xl">{blog.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            {(!blog.body || (blog.body as unknown[]).length === 0) ? (
              <p className="text-mute text-lg leading-relaxed">
                Full post content is being prepared. Check back soon — or{" "}
                <Link href="/contact" className="text-accent hover:underline">contact us</Link>{" "}
                if you need this information urgently.
              </p>
            ) : (
              <div className="space-y-5">
                {(blog.body as { _type: string; children?: { text: string }[] }[]).map((block, i) => {
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
