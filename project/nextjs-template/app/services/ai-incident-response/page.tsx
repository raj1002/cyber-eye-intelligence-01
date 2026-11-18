import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { Hex } from "@/components/Primitives";
import { DF09, AI_THREATS, RETAINER, PHONE_DISPLAY, PHONE_TEL } from "@/lib/ai-positioning";
import { serviceLd, faqLd, breadcrumbLd } from "@/lib/jsonld";

// DF-09 AI Incident Response & Forensics (spec P1.3, P1.6, P1.8).
// A static route: it takes precedence over app/services/[slug], so the family slugs are unaffected.
// Every section is server-rendered with no FadeIn wrapper, so it's all visible with JavaScript off.

export const metadata: Metadata = {
  title: { absolute: DF09.seo.title },
  description: DF09.seo.description,
  alternates: { canonical: DF09.path },
  openGraph: { title: DF09.seo.title, description: DF09.seo.description, url: DF09.path },
};

const BREADCRUMB = [
  { name: "Services", path: "/services" },
  { name: "Digital Forensics", path: "/services#fam-digital-forensics" },
  { name: DF09.code, path: DF09.path },
];

const btn = "mono text-sm uppercase tracking-wider px-6 py-3 rounded-control";

export default function AiIncidentResponsePage() {
  const jsonLd = [
    serviceLd({
      name: DF09.title,
      description: DF09.seo.description,
      path: DF09.path,
      serviceType: "AI incident response and deepfake forensics",
    }),
    faqLd([...DF09.answers, ...DF09.faq]),
    breadcrumbLd(BREADCRUMB),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="label mb-6">
            <Link href="/" className="hover:text-accent">Home</Link> /{" "}
            <Link href="/services" className="hover:text-accent">Services</Link> /{" "}
            <Link href="/services#fam-digital-forensics" className="hover:text-accent">Digital Forensics</Link> /{" "}
            <span className="text-white" aria-current="page">{DF09.code}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <Hex />
                <span className="label">[ {DF09.code} — {DF09.title} ]</span>
              </div>
              <h1 className="display text-5xl lg:text-7xl mb-6">{DF09.h1}</h1>
              <p className="text-lg text-mute max-w-2xl mb-8 leading-relaxed">{DF09.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=ai-incident" className={`btn-primary ${btn} font-medium`}>Report an AI incident →</Link>
                <Link href="/contact" className={`btn-ghost ${btn}`}>Speak to an examiner</Link>
                <a href={`tel:${PHONE_TEL}`} className={`btn-ghost ${btn}`}>24/7: {PHONE_DISPLAY}</a>
              </div>
              <ul className="flex flex-wrap gap-2 mt-8" aria-label="How we work">
                {DF09.trustTags.map((t) => (
                  <li key={t} className="pill">{t}</li>
                ))}
              </ul>
              <p className="text-xs text-stone mt-6">
                Reviewed by {DF09.reviewedBy} · Last updated {DF09.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to call us */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="label mb-4">01 — When to call</div>
            <h2 className="display text-4xl">When to call us</h2>
          </div>
          <ul className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {DF09.whenToCall.map((w) => (
              <li key={w} className="card p-6 text-sm text-mute leading-relaxed">{w}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-4">02 — What we do</div>
          <h2 className="display text-4xl mb-10">What we do</h2>
          <div className="grid lg:grid-cols-3 gap-4">
            {AI_THREATS.map((t) => (
              <div key={t.code} className="card p-7 flex flex-col">
                <div className="mono text-accent text-xs mb-6">{t.code}</div>
                <h3 className="text-xl font-medium mb-4">{t.title}</h3>
                <div className="label mb-2">What we do</div>
                <p className="text-sm text-mute leading-relaxed mb-6">{t.whatWeDo}</p>
                <div className="label mb-2 mt-auto">What you get</div>
                <p className="text-sm text-white leading-relaxed">{t.whatYouGet}</p>
              </div>
            ))}
          </div>
          <div className="card mt-8 p-7">
            <p className="text-sm text-mute leading-relaxed">
              <strong className="text-white font-semibold">How we use AI ourselves:</strong> {DF09.howWeUseAi}
            </p>
          </div>
        </div>
      </section>

      {/* From our casework */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-4">03 — Casework</div>
          <h2 className="display text-4xl mb-10">From our casework</h2>
          {DF09.caseFile ? (
            <div className="card p-8 lg:p-10 grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="mono text-accent text-xs mb-3">{DF09.caseFile.code}</div>
                <h3 className="text-2xl font-medium">{DF09.caseFile.title}</h3>
              </div>
              <dl className="lg:col-span-8 grid md:grid-cols-3 gap-6 text-sm">
                <div><dt className="label mb-2">Situation</dt><dd className="text-mute leading-relaxed">{DF09.caseFile.situation}</dd></div>
                <div><dt className="label mb-2">What we did</dt><dd className="text-mute leading-relaxed">{DF09.caseFile.whatWeDid}</dd></div>
                <div><dt className="label mb-2">Outcome</dt><dd className="text-mute leading-relaxed">{DF09.caseFile.outcome}</dd></div>
              </dl>
            </div>
          ) : (
            <div className="card p-8 border-dashed">
              <p className="text-sm text-mute">
                [PLACEHOLDER: one real, anonymised AI or deepfake case file from the founders, or a short &ldquo;What we&rsquo;re seeing&rdquo; note from our examiners. Required before launch.]
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How an AI engagement runs */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-4">04 — Method</div>
          <h2 className="display text-4xl mb-10">How an AI engagement runs</h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DF09.process.map((p, i) => (
              <li key={p.step} className="card p-6">
                <div className="mono text-accent text-xs mb-8">Step 0{i + 1}</div>
                <h3 className="text-xl mb-2">{p.step}</h3>
                <p className="text-sm text-mute leading-relaxed">{p.body.charAt(0).toUpperCase() + p.body.slice(1)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="label mb-4">05 — Deadlines</div>
            <h2 className="display text-4xl">Deadlines you may be facing</h2>
          </div>
          <ul className="lg:col-span-8 space-y-4">
            {DF09.deadlines.map((d) => (
              <li key={d.label} className="card p-6 text-sm text-mute leading-relaxed">
                <strong className="text-white font-semibold">{d.label}:</strong> {d.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI Incident Readiness Retainer (P1.8) */}
      <section id="retainer" className="py-20 border-b border-line scroll-mt-20">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-6">
              <div className="label mb-4">[ {RETAINER.eyebrow} ]</div>
              <h2 className="display text-4xl lg:text-5xl">{RETAINER.h2}</h2>
            </div>
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-mute leading-relaxed">{RETAINER.intro}</p>
            </div>
          </div>
          <div className="card overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm text-left">
              <caption className="sr-only">{RETAINER.h2} tiers</caption>
              <thead>
                <tr className="border-b border-line">
                  <td className="p-5" />
                  {RETAINER.tiers.map((t) => (
                    <th key={t} scope="col" className="p-5 text-xl text-accent font-semibold tracking-tight">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RETAINER.rows.map((r) => (
                  <tr key={r.label} className="border-b border-line last:border-b-0 align-top">
                    <th scope="row" className="p-5 mono text-[11px] font-semibold uppercase tracking-wider text-mute w-1/5">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className="p-5 text-mute leading-relaxed">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <p className="text-sm text-mute max-w-2xl">{RETAINER.note}</p>
            <Link href="/contact?type=retainer" className={`btn-primary ${btn} font-medium`}>Talk about a retainer →</Link>
          </div>
        </div>
      </section>

      {/* Answer blocks (AEO): visible H2 question, 40–60 word answer directly under it */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="space-y-12 max-w-3xl">
            {DF09.answers.map((a) => (
              <div key={a.q}>
                <h2 className="display text-3xl mb-4">{a.q}</h2>
                <p className="text-mute leading-relaxed">{a.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="label mb-4">FAQ</div>
            <h2 className="display text-4xl">Frequently asked questions</h2>
          </div>
          <dl className="lg:col-span-8 space-y-6">
            {DF09.faq.map((f) => (
              <div key={f.q} className="card p-6">
                <dt className="text-lg font-medium mb-2">{f.q}</dt>
                <dd className="text-sm text-mute leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="card relative overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 ph-grid opacity-40" />
            <div className="relative">
              <h2 className="display text-4xl lg:text-5xl mb-6">{DF09.closing.h2}</h2>
              <p className="text-mute text-lg max-w-xl mx-auto mb-10">{DF09.closing.body}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact?type=ai-incident" className="btn-primary">Report an AI incident →</Link>
                <a href={`tel:${PHONE_TEL}`} className="btn-ghost">{PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
