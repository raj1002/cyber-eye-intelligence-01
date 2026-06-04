import Link from "next/link";
import Image from "next/image";
import { getCaseFiles } from "@/lib/sanity";
import { img, caseImageFromId, caseImageByLabel } from "@/lib/image-manifest";

const FALLBACK = [
  { id: "CE/2025/014", slug: "ce-2025-014", sector: "Corporate · Mobile", title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.", sub: "2.4 TB examined · § 65B admitted · Mumbai sessions.", imgLabel: "case · IP theft" },
  { id: "CE/2025/008", slug: "ce-2025-008", sector: "BFSI · Email", title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.", sub: "Attribution to Lagos-based ring · funds frozen.", imgLabel: "case · BEC fraud" },
  { id: "CE/2025/003", slug: "ce-2025-003", sector: "Corporate · Insider", title: "Identified data exfiltration through personal cloud — termination upheld.", sub: "17 USB events · 2 SaaS exports · labour tribunal accepted.", imgLabel: "case · insider" },
  { id: "CE/2024/097", slug: "ce-2024-097", sector: "Corporate · Malware", title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.", sub: "Conti-affiliated · attribution upheld in arbitration.", imgLabel: "case · ransomware" },
  { id: "CE/2024/082", slug: "ce-2024-082", sector: "Legal · Mobile", title: "Reconstructed 6-week location timeline in a contested custody matter.", sub: "Geofencing · cell-site verification · family court accepted.", imgLabel: "case · custody" },
  { id: "CE/2024/061", slug: "ce-2024-061", sector: "NGO · Cloud", title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.", sub: "M365 audit log · attribution to compromised contractor.", imgLabel: "case · m365" },
  { id: "CE/2024/048", slug: "ce-2024-048", sector: "Law Enforcement · Mobile", title: "Cell-site triangulation closed a 9-suspect narcotics syndicate.", sub: "23 devices imaged · 4 burner phones decrypted.", imgLabel: "case · narcotics" },
  { id: "CE/2024/032", slug: "ce-2024-032", sector: "Government · Insider", title: "Traced a ministry document leak to a single endpoint in 9 days.", sub: "USB telemetry · classified handling · auditor accepted.", imgLabel: "case · ministry" },
  { id: "CE/2023/118", slug: "ce-2023-118", sector: "Healthcare · Malware", title: "Contained a hospital ransomware attack — restored ICU systems in 18 hours.", sub: "No patient data lost · CERT-In incident filing closed.", imgLabel: "case · hospital" },
];

const FILTERS = ["All", "Mobile", "Cloud", "Fraud", "Insider", "Malware", "Email"];

export const metadata = {
  title: "Case Files — Cyber Eye Intelligence",
  description: "Redacted summaries from real digital forensic engagements. Court-tested, peer-reviewed.",
};

export default async function CaseFilesPage() {
  const sanity = await getCaseFiles();
  const caseFiles = sanity.length > 0
    ? sanity.map((c) => {
        const id = c.ref ?? c._id;
        return {
          id,
          slug: id.toLowerCase().replace(/\//g, "-"),
          sector: c.label ?? c.sector ?? "",
          title: c.title,
          sub: c.sub ?? "",
          imgLabel: c.imgLabel ?? "case file",
        };
      })
    : FALLBACK;

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Case Files</span></div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h1 className="display text-6xl lg:text-7xl">Case<br /><span className="text-accent">files.</span></h1>
            <p className="text-lg text-mute max-w-md">Redacted summaries from real engagements. Every file passed peer review and, where applicable, judicial scrutiny.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-12">
            {FILTERS.map((f, i) => (
              <span key={f} className={`pill ${i === 0 ? "pill-on" : ""}`}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseFiles.map((c) => (
              <Link key={c.id} href={`/case-files/${c.slug}`} className="group block">
                {(() => { const slot = caseImageFromId(c.id) ?? caseImageByLabel[c.imgLabel]; return slot ? <Image {...img(slot)} alt={img(slot).alt} className="aspect-[5/4] rounded-card mb-5 card-hover object-cover w-full" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" /> : null; })()}
                <div className="flex items-center gap-3 label mb-3">
                  <span className="text-accent">{c.id}</span><span>·</span><span>{c.sector}</span>
                </div>
                <h3 className="text-xl leading-snug group-hover:text-accent transition">{c.title}</h3>
                <p className="text-sm text-mute mt-2">{c.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
