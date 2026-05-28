import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Primitives";
import { caseFiles } from "@/lib/data";

export async function generateStaticParams() {
  return caseFiles.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = caseFiles.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: `${c.ref} · ${c.title} — Cyber-Eye Intelligence`, description: c.blurb };
}

export default function CaseFileDetailPage({ params }: { params: { slug: string } }) {
  const c = caseFiles.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">
            Home / <Link href="/case-files" className="hover:text-accent">Case Files</Link> /{" "}
            <span className="text-white">{c.ref}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="pill pill-on">{c.category.split(" · ")[0]}</span>
            <span className="pill">{c.category}</span>
            <span className="pill">{c.ref}</span>
          </div>
          <h1 className="display text-5xl lg:text-7xl mb-8 max-w-4xl">&ldquo;{c.title}&rdquo;</h1>
          <p className="text-lg text-mute max-w-3xl leading-relaxed">{c.blurb}</p>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="card p-6"><div className="display text-3xl num">2.4 <span className="text-accent text-base">TB</span></div><div className="label mt-1">Data examined</div></div>
          <div className="card p-6"><div className="display text-3xl num">14</div><div className="label mt-1">Deleted artefacts</div></div>
          <div className="card p-6"><div className="display text-3xl num">3</div><div className="label mt-1">Devices imaged</div></div>
          <div className="card p-6"><div className="display text-3xl num">9 <span className="text-accent text-base">mo</span></div><div className="label mt-1">To resolution</div></div>
        </div>
      </Section>

      <section className="py-16 border-t border-line">
        <Section>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div>
                <div className="label mb-3">01 — Brief</div>
                <h2 className="display text-3xl mb-4">The brief.</h2>
                <p className="text-mute leading-relaxed">
                  Counsel briefed us at 22:00 hrs on a Friday. The suspect was due to fly out 48 hours later. We dispatched a triage analyst overnight to image three devices: a corporate iPhone, a personal Samsung and a MacBook Air.
                </p>
              </div>
              <div>
                <div className="label mb-3">02 — Approach</div>
                <h2 className="display text-3xl mb-4">What we did.</h2>
                <p className="text-mute leading-relaxed mb-4">
                  Chip-off was unnecessary — the device had been factory-reset, not destroyed, leaving unallocated APFS regions intact. We imaged with Cellebrite UFED, parsed in Magnet AXIOM, then ran custom SQLite carving against the chat shards.
                </p>
                <p className="text-mute leading-relaxed">
                  Cross-referenced timestamps against the suspect's cloud backups (court-ordered) and built a 6-week communication timeline.
                </p>
              </div>
              <div>
                <div className="label mb-3">03 — Outcome</div>
                <h2 className="display text-3xl mb-4">The outcome.</h2>
                <p className="text-mute leading-relaxed">
                  14 deleted chats recovered, two of which contained attachments matching the client's protected designs. The sessions court admitted the § 65B certificate without dilution. Resolution in nine months.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="card p-6 sticky top-24">
                <div className="label mb-4">[ Engagement details ]</div>
                <dl className="space-y-4 text-sm">
                  <div><dt className="label">Sector</dt><dd>{c.category}</dd></div>
                  <div><dt className="label">Reference</dt><dd>{c.ref}</dd></div>
                  <div><dt className="label">Practice</dt><dd>Mobile + Cloud Forensics</dd></div>
                  <div><dt className="label">Duration</dt><dd>6 weeks lab · 9 months total</dd></div>
                  <div><dt className="label">Lead examiner</dt><dd>P. Ranganathan, EnCE</dd></div>
                  <div><dt className="label">Tools</dt><dd>Cellebrite UFED · Magnet AXIOM · custom SQLite carver</dd></div>
                </dl>
                <Link href="/contact" className="btn-primary inline-flex mt-6">Open a similar case →</Link>
              </div>
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
