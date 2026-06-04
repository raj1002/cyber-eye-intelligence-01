import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { img } from "@/lib/image-manifest";

const caseFiles = [
  { slug: "ce-2025-014", id: "CE/2025/014", sector: "Corporate · Mobile", title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.", sub: "2.4 TB examined · § 65B admitted · Mumbai sessions court.", quote: "Recovered 14 deleted chats from a wiped iPhone. Conviction secured in 9 months.", client: "Sr. Counsel, listed manufacturing company", location: "Mumbai · Corporate IP Theft" },
  { slug: "ce-2025-008", id: "CE/2025/008", sector: "BFSI · Email", title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.", sub: "Attribution to Lagos-based ring · funds frozen.", quote: "BEC fraud worth ₹4.6 crore traced across three jurisdictions in eleven days. The funds were frozen in time.", client: "CFO, Listed NBFC", location: "Mumbai · BFSI" },
  { slug: "ce-2025-003", id: "CE/2025/003", sector: "Corporate · Insider", title: "Identified data exfiltration through personal cloud — termination upheld.", sub: "17 USB events · 2 SaaS exports · labour tribunal accepted.", quote: "Discreet, fast, methodical. Their insider investigation report became our HR action playbook.", client: "CISO, Listed Bank", location: "Mumbai · Corporate Insider" },
  { slug: "ce-2024-097", id: "CE/2024/097", sector: "Corporate · Malware", title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.", sub: "Conti-affiliated · attribution upheld in arbitration.", quote: "They mapped 41 days of dwell time to the hour. Our insurer accepted every finding without pushback.", client: "Head of Risk, FMCG Conglomerate", location: "Pune · Corporate Malware" },
  { slug: "ce-2024-082", id: "CE/2024/082", sector: "Legal · Mobile", title: "Reconstructed 6-week location timeline in a contested custody matter.", sub: "Geofencing · cell-site verification · family court accepted.", quote: "The location reconstruction was granular enough for the family court judge to make a same-day order.", client: "Principal Counsel, Family Law Practice", location: "Delhi · Legal Litigation" },
  { slug: "ce-2024-061", id: "CE/2024/061", sector: "NGO · Cloud", title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.", sub: "M365 audit log · attribution to compromised contractor.", quote: "Contained in 36 hours. No donor data reached the threat actor. Board was fully briefed within the day.", client: "Executive Director, International NGO", location: "Mumbai · Cloud Security" },
  { slug: "ce-2024-048", id: "CE/2024/048", sector: "Law Enforcement · Mobile", title: "Cell-site triangulation closed a 9-suspect narcotics syndicate.", sub: "23 devices imaged · 4 burner phones decrypted.", quote: "The cell-site analysis was the keystone evidence. All nine accused are in trial.", client: "Superintendent of Police, Maharashtra", location: "Nashik · Law Enforcement" },
  { slug: "ce-2024-032", id: "CE/2024/032", sector: "Government · Insider", title: "Traced a ministry document leak to a single endpoint in 9 days.", sub: "USB telemetry · classified handling · auditor accepted.", quote: "Nine days from engagement to attribution. The audit committee closed the matter without a public incident.", client: "Joint Secretary, Central Ministry", location: "Delhi · Government Insider" },
  { slug: "ce-2023-118", id: "CE/2023/118", sector: "Healthcare · Malware", title: "Contained a hospital ransomware attack — restored ICU systems in 18 hours.", sub: "No patient data lost · CERT-In incident filing closed.", quote: "ICU systems back in 18 hours. Not a single patient record left the facility.", client: "CTO, Multi-speciality Hospital Chain", location: "Hyderabad · Healthcare" },
];

export async function generateStaticParams() {
  return caseFiles.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const c = caseFiles.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: `${c.id} — Cyber Eye Intelligence`, description: c.title };
}

export default function CaseFileDetailPage({ params }: { params: { slug: string } }) {
  const caseFile = caseFiles.find((c) => c.slug === params.slug);
  if (!caseFile) notFound();

  return (
    <>
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">
            Home / <Link href="/case-files" className="hover:text-accent">Case Files</Link> /{" "}
            <span className="text-white">{caseFile.id}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-line">
                <Image {...img("case-detail-hero")} alt={img("case-detail-hero").alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-accent z-10" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-accent z-10" />
                <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between mono text-[10px] uppercase tracking-widest text-stone">
                  <span>{caseFile.id}</span>
                  <span className="text-accent">ADMITTED</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="label mb-6">[ Case File · #{caseFile.id} ]</div>
              <blockquote className="display text-3xl lg:text-4xl leading-tight mb-8">
                &ldquo;{caseFile.quote}&rdquo;
              </blockquote>
              <div className="text-mute mb-10">
                — {caseFile.client}<br />
                <span className="label">{caseFile.location}</span>
              </div>
              <p className="text-mute mb-8 leading-relaxed">{caseFile.sub}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Open a similar case →</Link>
                <Link href="/case-files" className="btn-ghost">All case files</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">[ Methodology ]</div>
          <h2 className="display text-4xl mb-12">How we <span className="text-accent">worked it.</span></h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Intake", d: "Evidence received with dual-signed chain of custody and hash verification." },
              { n: "02", t: "Acquire", d: "Write-blocked imaging. Bit-by-bit copy. SHA-256 on source and working copy." },
              { n: "03", t: "Examine", d: "Twin-examiner analysis. Worklog timestamped and signed at every step." },
              { n: "04", t: "Report", d: "§ 65B compliant certificate. Expert testimony on standby." },
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
    </>
  );
}
