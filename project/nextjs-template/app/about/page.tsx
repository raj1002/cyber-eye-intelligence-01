import { Placeholder } from "@/components/Primitives";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";

export const metadata = {
  title: "About — Cyber Eye Intelligence",
  description: "Founded in 2025 by certified forensic examiners. Fully accredited lab. Examiner-led, never sold.",
};

export default async function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">About</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-10 max-w-4xl">
            We find what others<br />miss — and prove it <span className="text-accent">in court.</span>
          </h1>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-lg text-mute leading-relaxed">
              <p>
                Cyber Eye Intelligence was founded in 2025 by certified forensic examiners who had spent years across police labs, Big Four practices and contested courtrooms. Each had walked out of an engagement where good evidence was undone by sloppy custody, or a case lost on a technicality that an extra hour of imaging would have prevented.
              </p>
              <p>
                We started Cyber Eye to do the work the way it should be done — slowly when it matters, fast when lives are on the line, and always documented to a standard that survives the most hostile cross-examination.
              </p>
              <p>
                We operate out of Mumbai with satellite operations in Bengaluru and Delhi. Every engagement is led by a named examiner. No sales filter, no account managers, no &ldquo;we&apos;ll loop in the team&rdquo;.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Placeholder label="founders · lab interior" className="aspect-[4/5] rounded-card card" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="grid md:grid-cols-4 gap-4">
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={2025} duration={1200} />
              </div>
              <div className="label mt-2">Founded</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={40} suffix="+" />
              </div>
              <div className="label mt-2">Cases handled</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={120} suffix="+" />
              </div>
              <div className="label mt-2">Officers trained</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={5} />
              </div>
              <div className="label mt-2">Certified examiners</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three Rules */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="label mb-6">[ How we operate ]</div>
          <h2 className="display text-5xl mb-12">Three <span className="text-accent">rules.</span></h2></FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-3 gap-4">
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
          </FadeIn>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="label mb-6">[ Why choose us ]</div>
          <h2 className="display text-5xl mb-12">The brief on <span className="text-accent">Cyber Eye.</span></h2></FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: "01", t: "Court-admissible by design", d: "§ 65B certification, hashed exhibits and twin-examiner sign-off on every engagement — not just the contested ones." },
              { code: "02", t: "Named examiners, not account managers", d: "You know who's handling your case. Their name goes on the report. Their phone rings if the opposing expert calls." },
              { code: "03", t: "Turnaround with integrity", d: "CE/VectorAI-assisted triage compresses discovery. Speed without cutting corners on chain of custody." },
              { code: "04", t: "Cross-sector depth", d: "Police labs, HC litigation, listed-company boardrooms and government audit — our team has operated in each, not just studied them." },
              { code: "05", t: "Discretion is structural", d: "Encrypted intake, sealed handling, redacted case files. We advise clients we can never publicly name — and they stay." },
              { code: "06", t: "Training as a force multiplier", d: "120+ officers trained through the Academy. Your team learns the same methods our examiners use in the lab." },
            ].map((r) => (
              <div key={r.code} className="card p-7">
                <div className="mono text-accent text-xs mb-8">{r.code}</div>
                <h3 className="text-lg font-medium mb-3">{r.t}</h3>
                <p className="text-sm text-mute leading-relaxed">{r.d}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="label mb-6">[ Accreditations ]</div>
          <h2 className="display text-5xl mb-12">Memberships &amp; <span className="text-accent">alignment.</span></h2></FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-4 gap-4">
            {[
              { t: "ISO 17025 aligned", s: "Lab procedures" },
              { t: "CERT-In empanelled", s: "Auditor of Record" },
              { t: "HTCIA member", s: "Since 2025" },
              { t: "IACIS member", s: "CFCE certified" },
            ].map((b) => (
              <div key={b.t} className="card p-8 text-center">
                <Placeholder label="" className="aspect-square w-20 mx-auto mb-4 rounded-pill" />
                <div className="font-medium">{b.t}</div>
                <div className="label mt-1">{b.s}</div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
