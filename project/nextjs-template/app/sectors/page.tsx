import Link from "next/link";
import { Section } from "@/components/Primitives";
import { sectors } from "@/lib/data";

export const metadata = {
  title: "Sectors — Cyber-Eye Intelligence",
  description: "Forensic and investigation services for law enforcement, legal, corporate, government and BFSI sectors.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">Sectors</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-8">
            Built for<br />adversarial<br />
            <span className="text-accent">environments.</span>
          </h1>
          <p className="text-lg text-mute max-w-2xl">
            Whoever's on the other side — defence counsel, a hostile insider, a state-backed actor — the evidence has to hold. Our practices are organised by who we report to, not what tools we run.
          </p>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`} className="card card-hover p-8">
              <div className="font-mono text-xs text-accent mb-12">{s.code}</div>
              <h3 className="display text-3xl mb-3">{s.title}</h3>
              <p className="text-mute leading-relaxed mb-6">{s.blurb}</p>
              <div className="font-mono text-sm text-accent">Open sector →</div>
            </Link>
          ))}
          <Link href="/contact" className="card card-hover p-8 bg-accent text-ink hover:bg-accent">
            <div className="font-mono text-xs mb-12 opacity-70">→ For you?</div>
            <h3 className="display text-3xl mb-3">Talk to an examiner.</h3>
            <p className="leading-relaxed mb-6 opacity-80">Healthcare, education, media, manufacturing — we support adversarial casework across sectors.</p>
            <div className="font-mono text-sm font-medium">Contact us →</div>
          </Link>
        </div>
      </Section>
    </>
  );
}
