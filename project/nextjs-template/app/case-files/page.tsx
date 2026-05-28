import Link from "next/link";
import { Section, Placeholder } from "@/components/Primitives";
import { caseFiles } from "@/lib/data";

export const metadata = {
  title: "Case Files — Cyber-Eye Intelligence",
  description: "Redacted summaries from real digital forensic engagements. Court-tested, peer-reviewed.",
};

export default function CaseFilesPage() {
  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">Case Files</span></div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="display text-6xl lg:text-7xl">Case<br /><span className="text-accent">files.</span></h1>
            <p className="text-lg text-mute max-w-md">
              Redacted summaries from real engagements. Every file passed peer review and, where applicable, judicial scrutiny.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12">
            {["All", "Mobile", "Cloud", "Fraud", "Insider", "Malware", "Email"].map((f, i) => (
              <span key={f} className={`pill ${i === 0 ? "pill-on" : ""}`}>{f}</span>
            ))}
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseFiles.map((c) => (
            <Link key={c.slug} href={`/case-files/${c.slug}`} className="group block">
              <Placeholder label={`case · ${c.ref}`} className="aspect-[5/4] rounded-card mb-5 card-hover" />
              <div className="flex items-center gap-3 label mb-3">
                <span className="text-accent">{c.ref}</span><span>·</span><span>{c.category}</span>
              </div>
              <h3 className="text-xl leading-snug group-hover:text-accent transition">{c.title}</h3>
              <p className="text-sm text-mute mt-2">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
