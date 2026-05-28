import Link from "next/link";

export const metadata = {
  title: "Careers — Cyber Eye Intelligence",
  description: "Join the lab. We hire examiners, not analysts-who-might-get-better.",
};

const roles = [
  { code: "R-01", location: "Mumbai · Full-time", title: "Senior Mobile Forensics Examiner", desc: "Lead acquisitions on iOS 18 / Android 15, parse encrypted app artefacts, draft § 65B-grade reports and testify in High Court matters.", tags: ["Cellebrite · AXIOM", "5+ yrs", "₹18–28 LPA"] },
  { code: "R-02", location: "Bengaluru · Full-time", title: "Incident Response Lead", desc: "Own the 24/7 IR rota. First-responder on ransomware, BEC and intrusion engagements across BFSI and corporate clients.", tags: ["DFIR · SIEM", "7+ yrs", "₹24–36 LPA"] },
  { code: "R-03", location: "Mumbai · Full-time", title: "Digital Intelligence Analyst (OSINT)", desc: "Build attribution dossiers from open and deep-web sources. Pivot across infrastructure, identities and crypto wallets.", tags: ["OSINT · Maltego", "3+ yrs", "₹14–22 LPA"] },
  { code: "R-04", location: "Delhi · Full-time", title: "Malware Reverse Engineer", desc: "Static + dynamic analysis of native and Android samples. Build YARA, write technical addenda, support attribution work.", tags: ["IDA · Ghidra", "4+ yrs", "₹20–32 LPA"] },
  { code: "R-05", location: "Mumbai · Full-time", title: "Cloud & SaaS Forensics Examiner", desc: "M365, Google Workspace, AWS and Azure evidence acquisition, preservation and analysis for litigation and IR.", tags: ["M365 · AWS", "3+ yrs", "₹16–24 LPA"] },
  { code: "R-06", location: "Remote · Contract", title: "Academy Instructor — Legal Track", desc: "Design and deliver § 65B and eDiscovery courses for lawyers, judges and in-house counsel. Minimum 2 days/month.", tags: ["LLB / LLM", "5+ yrs practice", "₹8K/day"] },
];

const perks = [
  { code: "P/01", title: "Casework from day one", desc: "First-week shadowing on live engagements. Your name on report cover pages by month three." },
  { code: "P/02", title: "Tool & cert budget", desc: "₹2L/yr for CFCE, CCE, SANS, EnCE — your choice. Plus 40 hrs of paid study time per cycle." },
  { code: "P/03", title: "Publish, teach, testify", desc: "Academy faculty rotations. Conference travel covered. Court testimony coaching from senior examiners." },
  { code: "P/04", title: "Transparent comp", desc: "Published bands. No negotiation roulette. Bonus tied to lab outcomes, not individual billing." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 ph-grid opacity-30 pointer-events-none" />
        <div className="max-w-page mx-auto px-6 lg:px-10 relative">
          <div className="label mb-6">Home / About / <span className="text-white">Hiring</span></div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="hex" />
                <span className="label">[ Open roles · 06 ]</span>
              </div>
              <h1 className="display text-6xl lg:text-7xl mb-6">
                Build the bench<br />that <span className="text-accent">prosecutors trust.</span>
              </h1>
              <p className="text-lg text-mute leading-relaxed max-w-xl">
                We hire examiners, not analysts-who-might-get-better. Every offer is preceded by a paid technical exercise on a redacted real artefact. No riddles, no whiteboard theatre.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="card p-5"><div className="display text-3xl num">06</div><div className="label mt-1">Open roles</div></div>
                <div className="card p-5"><div className="display text-3xl num">12</div><div className="label mt-1">Examiners</div></div>
                <div className="card p-5"><div className="display text-3xl num">3</div><div className="label mt-1">Cities · IN</div></div>
                <div className="card p-5"><div className="display text-3xl num">100<span className="text-accent text-base">%</span></div><div className="label mt-1">Examiner-led hiring</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <div className="label mb-4">[ What you get ]</div>
              <h2 className="display text-5xl mb-6">Practitioner<br />over <span className="text-accent">process.</span></h2>
              <p className="text-mute leading-relaxed">We&rsquo;re a flat lab of working examiners. No layered approvals, no commercial gatekeepers between you and the case. Compensation is transparent; promotion is based on casework, not tenure.</p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p.code} className="card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="hex" />
                    <div className="mono text-xs text-accent">{p.code}</div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-mute leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="label mb-4">[ Open roles ]</div>
              <h2 className="display text-5xl">Currently <span className="text-accent">hiring.</span></h2>
            </div>
            <div className="mono text-xs text-mute uppercase tracking-wider">Updated May 2026</div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {roles.map((r) => (
              <Link key={r.code} href="/contact" className="card card-hover p-7 block">
                <div className="flex items-start justify-between mb-6">
                  <span className="pill pill-on">{r.location}</span>
                  <span className="mono text-xs text-accent">{r.code}</span>
                </div>
                <h3 className="text-2xl font-medium mb-3">{r.title}</h3>
                <p className="text-sm text-mute leading-relaxed mb-6">{r.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {r.tags.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
                <div className="mono text-xs text-accent uppercase tracking-wider">Apply →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-4">[ Hiring process ]</div>
          <h2 className="display text-5xl mb-12">Four steps.<br /><span className="text-accent">No surprises.</span></h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Apply", d: "One page, max. Cover letter optional. We read every application within 5 working days." },
              { n: "02", t: "Technical exercise", d: "Paid (₹5,000 fixed). A real redacted artefact. 4 hours. Done at your own desk." },
              { n: "03", t: "Examiner panel", d: "30-min call with two senior examiners. No brain-teasers — just casework discussion." },
              { n: "04", t: "Offer", d: "Band, start date, equipment. You'll have a written offer within 48 hours of the panel." },
            ].map((s) => (
              <div key={s.n} className="card p-6">
                <div className="mono text-accent text-xs mb-8">{s.n}</div>
                <h4 className="text-xl font-medium mb-2">{s.t}</h4>
                <p className="text-sm text-mute leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="card relative overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 ph-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <div className="label mb-6">[ Not seeing your role? ]</div>
              <h2 className="display text-4xl lg:text-5xl mb-6">We hire on merit,<br /><span className="text-accent">not just openings.</span></h2>
              <p className="text-mute text-lg max-w-xl mx-auto mb-10">Send us your CV and a brief note on what you&rsquo;d bring to the lab. If there&rsquo;s a fit, we&rsquo;ll make a role.</p>
              <Link href="/contact" className="btn-primary">Send a speculative application →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
