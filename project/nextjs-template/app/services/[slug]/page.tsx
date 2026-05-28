import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/Primitives";

const families = [
  { slug: "digital-forensics", num: "01", title: "Digital Forensics", sub: "Evidence collection, incident response, data recovery, malware analysis, mobile & network forensics — with court-grade chain of custody.", tags: ["Evidence", "IR", "Mobile", "Network"] },
  { slug: "digital-intelligence", num: "02", title: "Digital Intelligence", sub: "OSINT, SOCMINT, dark web monitoring, threat intelligence, data mining and predictive analytics — turning the open digital world into actionable signal.", tags: ["OSINT", "SOCMINT", "Dark web", "Threat intel"] },
  { slug: "managed-security", num: "03", title: "Managed Security Services", sub: "24/7 SOC, XDR, vulnerability management, EDR, SIEM, IAM, UEBA and compliance — across on-prem, cloud and hybrid infrastructures.", tags: ["SOC 24/7", "XDR", "SIEM", "IAM"] },
  { slug: "managed-forensics", num: "04", title: "Managed Digital Forensic Services", sub: "On-premises forensic infrastructure, dedicated examiners, agile incident response and tailored training — delivered inside your facility.", tags: ["On-prem lab", "Agile IR", "Training"] },
  { slug: "data-recovery", num: "05", title: "Data Recovery", sub: "Hard drive, file system, database, removable media, ransomware-encrypted, mobile and chain-of-custody forensic recovery — across all major brands and formats.", tags: ["HDD / SSD", "RAID", "Ransomware", "Mobile"] },
];

export async function generateStaticParams() {
  return families.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const f = families.find((x) => x.slug === params.slug);
  if (!f) return {};
  return { title: `${f.title} — Cyber Eye Intelligence`, description: f.sub };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const family = families.find((f) => f.slug === params.slug);
  if (!family) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            Home / <Link href="/services" className="hover:text-accent">Services</Link> /{" "}
            <span className="text-white">{family.title}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="label mb-4">[ Family {family.num} / 05 ]</div>
              <h1 className="display text-6xl lg:text-7xl mb-6">
                {family.title}.<br /><span className="text-accent">Court-grade.</span>
              </h1>
              <p className="text-lg text-mute max-w-xl mb-8 leading-relaxed">{family.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Open a case →</Link>
                <Link href="/services" className="btn-ghost">All services</Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {family.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card p-6">
                <div className="label mb-4">[ Practice overview ]</div>
                <ol className="space-y-3 text-sm">
                  {["What is this practice?", "Data we can recover", "Devices & sources", "Methodology", "Deliverables", "Pricing & turnaround"].map((t, idx) => (
                    <li key={t} className="flex gap-3">
                      <span className="mono text-accent text-xs w-6">0{idx + 1}</span> {t}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 lg:pt-2"><div className="label">01 — Method</div></div>
            <div className="lg:col-span-9">
              <h2 className="display text-4xl mb-8">Methodology &amp; chain of custody.</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { s: "Seize", d: "Faraday-bagged, hash-sealed, dual-signed." },
                  { s: "Image", d: "Bit-by-bit, write-blocked, SHA-256." },
                  { s: "Examine", d: "Twin-examiner review, signed worklog." },
                  { s: "Report", d: "Findings, exhibits, expert testimony." },
                ].map((step, i) => (
                  <div key={step.s} className="card p-6">
                    <div className="mono text-accent text-xs mb-8">Step 0{i + 1}</div>
                    <h4 className="text-xl mb-2">{step.s}</h4>
                    <p className="text-sm text-mute">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="card relative overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 ph-grid opacity-40" />
            <div className="relative">
              <h2 className="display text-4xl lg:text-5xl mb-6">Got evidence? <span className="text-accent">Get a quote in 24 hours.</span></h2>
              <Link href="/contact" className="btn-primary inline-flex">Start a case →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
