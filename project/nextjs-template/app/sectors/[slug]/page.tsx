import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getSectors, getSectorBySlug } from "@/lib/sanity";
import { img, sectorImageBySlug } from "@/lib/image-manifest";

const FALLBACK = [
  { slug: "law-enforcement", num: "S/01", title: "Law Enforcement & Police", sub: "Cyber cells, anti-fraud units, SIT support. Backlog clearance, mobile triage, specialist training for investigators." },
  { slug: "legal-litigation", num: "S/02", title: "Legal & Litigation", sub: "eDiscovery, § 65B certification, expert witness testimony, hostile cross-examination preparation." },
  { slug: "corporate-enterprise", num: "S/03", title: "Corporate Enterprise", sub: "Internal investigations, IP theft, misconduct, exit forensics and insider threat analysis." },
  { slug: "government", num: "S/04", title: "Government Agencies", sub: "CERT-In aligned, classified handling, audit-ready procedures and classified-environment forensics." },
  { slug: "bfsi-insurance", num: "S/05", title: "BFSI & Insurance", sub: "Wire fraud, claims investigation, AML, KYC investigations and UPI / payments fraud." },
];

export async function generateStaticParams() {
  const sanity = await getSectors();
  if (sanity.length > 0) return sanity.map((s) => ({ slug: s.slug.current }));
  return FALLBACK.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const sanity = await getSectorBySlug(params.slug);
  if (sanity) {
    return {
      title: `${sanity.title} — Cyber Eye Intelligence`,
      description: sanity.seoDescription ?? sanity.description ?? sanity.tagline ?? "",
    };
  }
  const fb = FALLBACK.find((s) => s.slug === params.slug);
  if (!fb) return {};
  return { title: `${fb.title} — Cyber Eye Intelligence`, description: fb.sub };
}

export default async function SectorDetailPage({ params }: { params: { slug: string } }) {
  const sanity = await getSectorBySlug(params.slug);
  const sector = sanity
    ? {
        slug: sanity.slug.current,
        num: "S/??",
        title: sanity.title,
        sub: sanity.description ?? sanity.tagline ?? "",
      }
    : FALLBACK.find((s) => s.slug === params.slug);

  if (!sector) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            Home / <Link href="/sectors" className="hover:text-accent">Sectors</Link> /{" "}
            <span className="text-white">{sector.title}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="label mb-4">[ Sector · {sector.num} ]</div>
              <h1 className="display text-6xl lg:text-7xl mb-6">
                {sector.title}.<br /><span className="text-accent">Forensics that holds.</span>
              </h1>
              <p className="text-lg text-mute max-w-xl mb-8 leading-relaxed">{sector.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Request a partnership →</Link>
                <Link href="/training" className="btn-ghost">Training catalogue</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              {sectorImageBySlug[sector.slug] && <Image {...img(sectorImageBySlug[sector.slug])} className="aspect-[4/5] rounded-card object-cover w-full" sizes="(max-width: 1024px) 100vw, 42vw" />}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">[ Engagement modes ]</div>
          <h2 className="display text-5xl mb-12">How we <span className="text-accent">partner.</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "01", t: "Overflow casework", d: "When the in-house team is at capacity, we take on triaged matters and return court-ready reports inside agreed SLAs." },
              { n: "02", t: "Specialised expertise", d: "Chip-off, ransomware reversal, cross-border attribution — when an outside expert is needed." },
              { n: "03", t: "Training & enablement", d: "Custom curricula tailored to the operating environment, from foundational to advanced." },
            ].map((c) => (
              <div key={c.n} className="card p-8">
                <div className="mono text-accent text-xs mb-8">{c.n}</div>
                <h3 className="text-2xl font-medium mb-3">{c.t}</h3>
                <p className="text-sm text-mute leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
