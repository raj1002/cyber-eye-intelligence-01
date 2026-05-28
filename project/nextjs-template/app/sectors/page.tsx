import Link from "next/link";
import { Hex } from "@/components/Primitives";

export const metadata = {
  title: "Sectors — Cyber Eye Intelligence",
  description: "Built for adversarial environments. Digital forensics for law enforcement, legal, corporate, government and BFSI sectors.",
};

const sectors = [
  { num: "S/01", title: "Law Enforcement & Police", sub: "Cyber cells, anti-fraud units, SIT support. Backlog clearance, mobile triage, training.", slug: "law-enforcement" },
  { num: "S/02", title: "Legal & Litigation", sub: "eDiscovery, § 65B certification, expert witness, hostile cross-prep.", slug: "legal-litigation" },
  { num: "S/03", title: "Corporate Enterprise", sub: "Internal investigations, IP theft, misconduct, exit forensics.", slug: "corporate-enterprise" },
  { num: "S/04", title: "Government Agencies", sub: "CERT-In aligned, classified handling, audit-ready procedures.", slug: "government" },
  { num: "S/05", title: "BFSI & Insurance", sub: "Wire fraud, claims, AML, KYC investigations. UPI / payments fraud.", slug: "bfsi-insurance" },
];

export default function SectorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Sectors</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-8">
            Built for<br />adversarial<br /><span className="text-accent">environments.</span>
          </h1>
          <p className="text-lg text-mute max-w-2xl">Whoever&rsquo;s on the other side — defence counsel, a hostile insider, a state-backed actor — the evidence has to hold. Our practices are organised by who we report to, not what tools we run.</p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`} className="card card-hover p-8 block">
                <div className="mono text-xs text-accent mb-12">{s.num}</div>
                <h3 className="display text-3xl mb-3">{s.title}</h3>
                <p className="text-mute leading-relaxed mb-6">{s.sub}</p>
                <div className="mono text-sm text-accent">Open sector →</div>
              </Link>
            ))}
            <Link href="/contact" className="card card-hover p-8 bg-accent text-ink block hover:bg-accent">
              <div className="mono text-xs mb-12 opacity-70">→ For you?</div>
              <h3 className="display text-3xl mb-3">Talk to an examiner.</h3>
              <p className="leading-relaxed mb-6 opacity-80">Healthcare, education, media, manufacturing — we support adversarial casework across sectors.</p>
              <div className="mono text-sm font-medium">Contact us →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Case files callout */}
      <section className="pb-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <Link href="/knowledge" className="card card-hover relative overflow-hidden grid md:grid-cols-12 block group">
            <div className="absolute inset-0 ph-grid opacity-30 pointer-events-none" />
            <div className="relative md:col-span-7 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="hex" />
                <span className="label">[ Case Files · Redacted ]</span>
              </div>
              <h3 className="display text-4xl lg:text-5xl mb-4">Proof of method.<br /><span className="text-accent">Filter by sector.</span></h3>
              <p className="text-mute leading-relaxed max-w-md mb-8">Redacted casework across every sector — admissibility outcomes, methodology notes, exhibits. Find precedent like yours.</p>
              <span className="btn-primary mono text-sm uppercase tracking-wider px-6 py-3 rounded-control inline-flex font-medium">Browse case files →</span>
            </div>
            <div className="relative md:col-span-5 border-t md:border-t-0 md:border-l border-line p-8 lg:p-12 flex flex-col justify-between gap-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <div><div className="display text-3xl num">120<span className="text-accent">+</span></div><div className="label mt-1.5">Redacted files</div></div>
                <div><div className="display text-3xl num">06</div><div className="label mt-1.5">Sectors covered</div></div>
                <div><div className="display text-3xl num">98<span className="text-accent">%</span></div><div className="label mt-1.5">Admissibility</div></div>
                <div><div className="display text-3xl num">11<span className="text-accent">y</span></div><div className="label mt-1.5">Of precedent</div></div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="pill">Law Enforcement</span>
                <span className="pill">Legal</span>
                <span className="pill">Corporate</span>
                <span className="pill">Gov</span>
                <span className="pill">BFSI</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
