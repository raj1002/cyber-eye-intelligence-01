import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Placeholder } from "@/components/Primitives";
import { sectors } from "@/lib/data";

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = sectors.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: `${s.title} — Cyber-Eye Intelligence`, description: s.blurb };
}

export default function SectorDetailPage({ params }: { params: { slug: string } }) {
  const sector = sectors.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">
            Home / <Link href="/sectors" className="hover:text-accent">Sectors</Link> /{" "}
            <span className="text-white">{sector.title}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="label mb-4">[ Sector · {sector.code} ]</div>
              <h1 className="display text-6xl lg:text-7xl mb-6">{sector.title}.</h1>
              <p className="text-lg text-mute max-w-xl mb-8 leading-relaxed">{sector.blurb}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Request a partnership →</Link>
                <Link href="/training" className="btn-ghost">Training catalogue</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Placeholder label={`${sector.title} · partnership`} className="aspect-[4/5] rounded-card" />
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="label mb-6">[ Engagement modes ]</div>
        <h2 className="display text-5xl mb-12">How we partner.</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { n: "01", t: "Overflow casework", d: "When the in-house team is at capacity, we take on triaged matters and return court-ready reports inside agreed SLAs." },
            { n: "02", t: "Specialised expertise", d: "Chip-off, ransomware reversal, cross-border attribution — when an outside expert is needed." },
            { n: "03", t: "Training & enablement", d: "Custom curricula tailored to the operating environment, from foundational to advanced." },
          ].map((c) => (
            <div key={c.n} className="card p-8">
              <div className="font-mono text-accent text-xs mb-8">{c.n}</div>
              <h3 className="text-2xl font-medium mb-3">{c.t}</h3>
              <p className="text-sm text-mute leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
