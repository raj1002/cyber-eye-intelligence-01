import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Placeholder } from "@/components/Primitives";
import { services } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.title} — Cyber-Eye Intelligence`,
    description: s.sub,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">
            Home / <Link href="/services" className="hover:text-accent">Services</Link> /{" "}
            <span className="text-white">{service.title}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div className="label mb-4">[ Service · {service.num} / 07 ]</div>
              <h1 className="display text-6xl lg:text-7xl mb-6">
                {service.title.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    {i === arr.length - 1 ? <span className="text-accent">{word}.</span> : <>{word}<br /></>}
                  </span>
                ))}
              </h1>
              <p className="text-lg text-mute max-w-xl mb-8 leading-relaxed">{service.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Open a case →</Link>
                <a className="btn-ghost inline-flex">↓ Sample report (PDF)</a>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {service.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="card p-6">
                <div className="label mb-4">[ On this page ]</div>
                <ol className="space-y-3 text-sm">
                  {[
                    "What is this practice?",
                    "Data we can recover",
                    "Devices & sources supported",
                    "Methodology & chain of custody",
                    "Sample deliverables",
                    "Pricing & turnaround",
                    "FAQ",
                  ].map((t, idx) => (
                    <li key={t} className="flex gap-3">
                      <span className="font-mono text-accent text-xs w-6">0{idx + 1}</span> {t}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 lg:pt-2"><div className="label">01 — Definition</div></div>
          <div className="lg:col-span-9">
            <h2 className="display text-4xl mb-6">What is {service.title.toLowerCase()}?</h2>
            <p className="text-xl leading-relaxed text-mute max-w-3xl">
              {service.title} is the science of extracting, preserving and analysing data in a manner that is legally defensible. It covers active, deleted, encrypted and cloud-synced artefacts — and it requires equipment, training and process that off-the-shelf data-recovery tools cannot match.
            </p>
          </div>
        </div>
      </Section>

      <section className="py-16 border-t border-line">
        <Section>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 lg:pt-2"><div className="label">02 — Recoverable</div></div>
            <div className="lg:col-span-9">
              <h2 className="display text-4xl mb-8">What we can recover.</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Deleted messages & chats",
                  "Call logs & contacts",
                  "Media & EXIF metadata",
                  "Geolocation history",
                  "App data & containers",
                  "Browser history & cookies",
                  "Cloud sync artefacts",
                  "Encryption containers",
                  "Cryptocurrency wallets",
                ].map((s) => (
                  <div key={s} className="card p-5 flex items-center justify-between">
                    <span className="text-sm">{s}</span>
                    <span className="text-accent">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      <section className="py-16 border-t border-line">
        <Section>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3 lg:pt-2"><div className="label">03 — Method</div></div>
            <div className="lg:col-span-9">
              <h2 className="display text-4xl mb-8">Methodology & chain of custody.</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { s: "Seize", d: "Faraday-bagged, hash-sealed, dual-signed." },
                  { s: "Image", d: "Bit-by-bit, write-blocked, SHA-256." },
                  { s: "Examine", d: "Twin-examiner review, signed worklog." },
                  { s: "Report", d: "Findings, exhibits, expert testimony." },
                ].map((step, i) => (
                  <div key={step.s} className="card p-6">
                    <div className="font-mono text-accent text-xs mb-8">Step 0{i + 1}</div>
                    <h4 className="text-xl mb-2">{step.s}</h4>
                    <p className="text-sm text-mute">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-24 border-t border-line">
        <div className="card relative overflow-hidden p-12 lg:p-16 text-center">
          <div className="absolute inset-0 ph-grid opacity-40" />
          <div className="relative">
            <h2 className="display text-4xl lg:text-5xl mb-6">Got evidence? Get a quote in 24 hours.</h2>
            <Link href="/contact" className="btn-primary inline-flex">Start a case →</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
