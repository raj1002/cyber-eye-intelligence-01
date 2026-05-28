import { Section, Placeholder } from "@/components/Primitives";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Insights — Cyber-Eye Intelligence",
  description: "Field notes, tool reviews and case-law commentary from working forensic examiners.",
};

export default function InsightsPage() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">Insights</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-6">From the<br /><span className="text-accent">lab.</span></h1>
          <p className="text-lg text-mute max-w-2xl">
            Field notes, tool reviews, case-law commentary and the occasional rant — written by working examiners between acquisitions.
          </p>
        </Section>
      </section>

      <Section className="py-16">
        <a className="card card-hover overflow-hidden grid md:grid-cols-2 mb-12">
          <Placeholder label={`featured · ${featured.slug}`} className="aspect-[5/4] md:aspect-auto" />
          <div className="p-10 flex flex-col justify-center">
            <div className="label mb-4">[ Featured · {featured.kind} · {featured.readTime} ]</div>
            <h2 className="display text-3xl lg:text-4xl mb-6">{featured.title}</h2>
            <p className="text-mute leading-relaxed mb-6">
              Apple&apos;s File System tweaks in iOS 18 quietly shifted what we can carve from unallocated space. Here&apos;s what still works, what doesn&apos;t, and the workflows we&apos;ve replaced.
            </p>
            <div className="font-mono text-sm text-accent">Read article →</div>
          </div>
        </a>

        <div className="grid md:grid-cols-3 gap-8">
          {rest.map((a) => (
            <a key={a.slug} className="group block">
              <Placeholder label={`article · ${a.slug}`} className="aspect-[5/4] rounded-card mb-5 card-hover" />
              <div className="label mb-2">{a.kind} · {a.readTime} · {a.date}</div>
              <h3 className="text-xl leading-snug group-hover:text-accent transition">{a.title}</h3>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
