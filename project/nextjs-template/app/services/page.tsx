import Link from "next/link";
import { Section, Hex, Placeholder } from "@/components/Primitives";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services — Cyber-Eye Intelligence",
  description: "Seven specialist digital forensic and investigation practices. Mobile, cloud, insider, malware, email, fraud, disk.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">Services</span></div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h1 className="display text-6xl lg:text-7xl mb-8">
                Digital forensic<br />& investigation<br />
                <span className="text-accent">services.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg text-mute leading-relaxed">
                Seven specialist practices, one lab. We combine the speed of an in-house DFIR team with the rigour of a court-recognised expert witness. Every engagement is examiner-led — no account managers, no hand-offs.
              </p>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`card card-hover p-8 ${i === services.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-xs">{s.num} / 07</div>
                <Hex />
              </div>
              <h3 className="display text-3xl mb-3">{s.title}</h3>
              <p className="text-mute mb-6">{s.sub}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
              <div className="font-mono text-sm text-accent">Explore {s.title.toLowerCase()} →</div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="py-24 border-t border-line">
        <Section>
          <h2 className="display text-5xl mb-12">How an engagement works.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Intake", d: "Free 30-min triage call. NDA, scope, custody handoff plan." },
              { n: "02", t: "Acquire", d: "Evidence preserved with chain of custody, twin-witnessed." },
              { n: "03", t: "Examine", d: "Lab analysis with twin-examiner review and sign-off." },
              { n: "04", t: "Report", d: "Court-ready report. Expert testimony. Defensible exhibits." },
            ].map((s) => (
              <div key={s.n} className="card p-6">
                <div className="font-mono text-accent text-xs mb-8">{s.n}</div>
                <h4 className="text-xl font-medium mb-2">{s.t}</h4>
                <p className="text-sm text-mute leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
