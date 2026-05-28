import { Section, Placeholder } from "@/components/Primitives";

export const metadata = {
  title: "About — Cyber-Eye Intelligence",
  description: "Founded in 2018 by three forensic examiners. Fully accredited lab. Examiner-led, never sold.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">About</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-10 max-w-4xl">
            We find what others<br />miss — and prove it <span className="text-accent">in court.</span>
          </h1>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-lg text-mute leading-relaxed">
              <p>
                Cyber-Eye Intelligence was founded in 2018 by three forensic examiners who had spent a decade between police labs, Big Four practices and contested courtrooms. Each had walked out of an engagement where good evidence was undone by sloppy custody, or a case lost on a technicality that an extra hour of imaging would have prevented.
              </p>
              <p>
                We started Cyber-Eye to do the work the way it should be done — slowly when it matters, fast when lives are on the line, and always documented to a standard that survives the most hostile cross-examination.
              </p>
              <p>
                Today we run a fully accredited lab out of Mumbai with satellite operations in Bengaluru and Delhi. Every engagement is led by a named examiner. No sales filter, no account managers, no &ldquo;we&apos;ll loop in the team&rdquo;.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Placeholder label="founders · lab interior" className="aspect-[4/5] rounded-card card" />
            </div>
          </div>
        </Section>
      </section>

      <section className="py-16 border-b border-line">
        <Section>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="card p-6"><div className="display text-4xl num">2018</div><div className="label mt-2">Founded</div></div>
            <div className="card p-6"><div className="display text-4xl num">600<span className="text-accent">+</span></div><div className="label mt-2">Cases handled</div></div>
            <div className="card p-6"><div className="display text-4xl num">2,400<span className="text-accent">+</span></div><div className="label mt-2">Officers trained</div></div>
            <div className="card p-6"><div className="display text-4xl num">12</div><div className="label mt-2">Certified examiners</div></div>
          </div>
        </Section>
      </section>

      <section className="py-16 border-b border-line">
        <Section>
          <div className="label mb-6">[ How we operate ]</div>
          <h2 className="display text-5xl mb-12">Three rules.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Court-first methodology.", d: "Every step documented. Every artefact hashed. Every report defensible — even when nothing ever reaches a courtroom." },
              { t: "Examiner-led, never sold.", d: "You speak to the analyst handling your case. Quotes are scoped by examiners, not commercial leads." },
              { t: "Discretion by default.", d: "NDAs at intake, encrypted transit, sealed handling for sensitive matters. Some clients we'll never name." },
            ].map((v) => (
              <div key={v.t} className="card p-8">
                <div className="hex mb-8" />
                <h3 className="display text-2xl mb-3">{v.t}</h3>
                <p className="text-mute leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="label mb-6">[ Accreditations ]</div>
        <h2 className="display text-5xl mb-12">Memberships & alignment.</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { t: "ISO 17025 aligned", s: "Lab procedures" },
            { t: "CERT-In empanelled", s: "Auditor of Record" },
            { t: "HTCIA member", s: "Since 2019" },
            { t: "IACIS member", s: "CFCE certified" },
          ].map((b) => (
            <div key={b.t} className="card p-8 text-center">
              <Placeholder label="" className="aspect-square w-20 mx-auto mb-4 rounded-pill" />
              <div className="font-medium">{b.t}</div>
              <div className="label mt-1">{b.s}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
