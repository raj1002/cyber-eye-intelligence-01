import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Primitives";

const docs: Record<string, { title: string; intro: string }> = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "We are a forensic examination practice; the data we receive is, by definition, sensitive. This policy sets out what we collect, why we collect it, and how we destroy it.",
  },
  terms: {
    title: "Terms of Engagement",
    intro:
      "These terms govern any engagement undertaken by Cyber-Eye Intelligence Pvt Ltd. They apply unless explicitly varied by a signed engagement letter.",
  },
  disclaimers: {
    title: "§ 65B Disclaimers",
    intro:
      "Our § 65B certificates are issued in good faith following lab procedures aligned to ISO 17025. Nothing herein constitutes legal advice; counsel should be retained on jurisdictional matters.",
  },
};

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const d = docs[params.slug];
  return d ? { title: `${d.title} — Cyber-Eye Intelligence` } : {};
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = docs[params.slug];
  if (!doc) notFound();

  return (
    <Section className="py-20">
      <div className="label mb-6">
        Home / <Link href="/" className="hover:text-accent">Legal</Link> /{" "}
        <span className="text-white">{doc.title}</span>
      </div>
      <h1 className="display text-5xl lg:text-6xl mb-8 max-w-3xl">{doc.title}.</h1>
      <p className="text-xl text-mute max-w-2xl leading-relaxed mb-12">{doc.intro}</p>

      <div className="grid lg:grid-cols-12 gap-10">
        <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="label mb-4">[ Sections ]</div>
          <ol className="space-y-2 text-sm">
            {["Scope", "Data we hold", "Retention", "Sharing", "Your rights", "Contact"].map((s, i) => (
              <li key={s}>
                <span className="font-mono text-accent text-xs mr-3">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </aside>
        <div className="lg:col-span-9 space-y-8 text-mute leading-relaxed">
          {["Scope", "Data we hold", "Retention", "Sharing", "Your rights", "Contact"].map((s, i) => (
            <div key={s} className="card p-8">
              <div className="label mb-3">0{i + 1} — Section</div>
              <h2 className="display text-2xl mb-4 text-white">{s}.</h2>
              <p>
                Placeholder body copy. Replace with the operative legal text reviewed by your counsel. This template intentionally avoids real legal language because legal text varies by jurisdiction and engagement.
              </p>
              <p className="mt-4">
                A second paragraph for layout balance. Tables, definition lists and ordered lists can be dropped in as needed.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
