import Link from "next/link";
import Image from "next/image";
import { getCourses } from "@/lib/sanity";

const FALLBACK = [
  { code: "CE-101", audience: "police", title: "Mobile Device Forensics for Investigators", sub: "Extraction, parsing and evidence handling from iOS and Android in a live lab environment.", duration: "3 days", format: "In-person", price: "₹18,000" },
  { code: "CE-102", audience: "police", title: "Digital Evidence Handling & § 65B Compliance", sub: "Correct acquisition, labelling and certification so evidence holds under cross-examination.", duration: "2 days", format: "In-person", price: "₹12,000" },
  { code: "CE-103", audience: "police", title: "Network Forensics & Log Analysis", sub: "PCAP analysis, log correlation and ISP coordination for cyber-crime investigations.", duration: "4 days", format: "In-person", price: "₹22,000" },
  { code: "CE-104", audience: "police", title: "Open Source Intelligence (OSINT) for Police", sub: "Structured OSINT techniques for criminal investigations — social media, dark web, GEOINT.", duration: "2 days", format: "In-person / Online", price: "₹14,000" },
  { code: "CE-201", audience: "counsel", title: "Digital Evidence for Lawyers — Foundations", sub: "Understand how digital evidence is acquired, what makes it admissible and how to challenge it.", duration: "1 day", format: "In-person", price: "₹8,500" },
  { code: "CE-202", audience: "counsel", title: "§ 65B Masterclass for Litigators", sub: "Deep-dive into the certification regime — drafting, challenging and cross-examining digital evidence.", duration: "1 day", format: "In-person / Online", price: "₹9,500" },
  { code: "CE-203", audience: "counsel", title: "eDiscovery & Cloud Evidence", sub: "M365, Gmail and cloud storage in litigation. What logs survive, what doesn't, and how to request it.", duration: "1 day", format: "Online", price: "₹7,500" },
  { code: "CE-204", audience: "counsel", title: "Expert Witness Cross-Examination Prep", sub: "Work alongside a forensic examiner to prepare and challenge expert evidence in mock cross.", duration: "1 day", format: "In-person", price: "₹12,000" },
  { code: "CE-301", audience: "corporate", title: "Insider Threat Investigation — Practitioner", sub: "Identify, contain and investigate an insider incident without tipping your hand.", duration: "2 days", format: "In-person", price: "₹16,000" },
  { code: "CE-302", audience: "corporate", title: "Incident Response for Corporate Security", sub: "Hands-on IR drills: ransomware, BEC, data exfiltration. NIST and CERT-In aligned.", duration: "3 days", format: "In-person", price: "₹24,000" },
  { code: "CE-303", audience: "corporate", title: "Forensic Readiness Programme", sub: "Build a defensible evidence collection plan before an incident — policies, tools, chain of custody.", duration: "2 days", format: "In-person / Online", price: "₹18,000" },
  { code: "CE-304", audience: "corporate", title: "Cloud Forensics & SaaS Evidence", sub: "Acquire, preserve and present evidence from AWS, Azure, M365 and Google Workspace.", duration: "2 days", format: "In-person / Online", price: "₹20,000" },
  { code: "CE-401", audience: "police", title: "Malware Reverse Engineering Basics", sub: "Static and dynamic analysis for investigators — identify ransomware families, C2 infrastructure.", duration: "3 days", format: "In-person", price: "₹20,000" },
  { code: "CE-402", audience: "corporate", title: "OSINT for Corporate Due Diligence", sub: "Vendor risk, competitor intelligence, fraudulent identity detection — structured OSINT workflow.", duration: "1 day", format: "Online", price: "₹9,000" },
];

const AUDIENCES = [
  { key: "police", label: "Law Enforcement" },
  { key: "counsel", label: "Legal & Counsel" },
  { key: "corporate", label: "Corporate Security" },
];

export const metadata = {
  title: "Cyber Eye Academy — Training",
  description: "Hands-on forensic training for police, prosecutors, counsel and corporate security teams.",
};

export default async function TrainingPage() {
  const sanity = await getCourses();
  const courses = sanity.length > 0
    ? sanity.map((c) => ({
        code: c.code ?? c._id.slice(0, 6).toUpperCase(),
        audience: c.audience ?? "police",
        title: c.title,
        sub: c.sub ?? "",
        duration: c.duration ?? "",
        format: c.format ?? "",
        price: c.price ?? "",
      }))
    : FALLBACK;

  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Academy</span></div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="hex" />
                <span className="label">[ Cyber Eye Academy ]</span>
              </div>
              <h1 className="display text-6xl lg:text-7xl mb-8">
                Train the people<br />who handle the<br /><span className="text-accent">evidence.</span>
              </h1>
              <p className="text-lg text-mute max-w-lg leading-relaxed">
                {courses.length} courses for law enforcement, in-house counsel and corporate security teams. Every module taught by a working examiner — no slides-only theory.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="card p-6 text-center">
                  <div className="display text-3xl num">{courses.length}</div>
                  <div className="label mt-2">Courses</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="display text-3xl num">2,400<span className="text-accent">+</span></div>
                  <div className="label mt-2">Officers trained</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="display text-3xl num">4.9</div>
                  <div className="label mt-2">Avg rating</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="pill">ISO-aligned curriculum</span>
                <span className="pill">CPD certified</span>
                <span className="pill">Govt-approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training classroom image */}
      <section className="border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10 py-12">
          <div className="relative w-full aspect-[16/7] rounded-[12px] overflow-hidden">
            <Image
              src="/images/training-classroom.jpg"
              alt="Cyber Eye Academy — forensic training session in progress"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <span className="label text-white/70">[ Live forensic lab session ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course sections per audience */}
      {AUDIENCES.map((aud) => {
        const audienceCourses = courses.filter((c) => c.audience === aud.key);
        if (audienceCourses.length === 0) return null;
        return (
          <section key={aud.key} id={`audience-${aud.key}`} className="py-16 border-b border-line">
            <div className="max-w-page mx-auto px-6 lg:px-10">
              <div className="label mb-10">[ For {aud.label} ]</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audienceCourses.map((c) => (
                  <div key={c.code} className="card card-hover p-7">
                    <div className="flex items-start justify-between mb-8">
                      <div className="mono text-accent text-xs">{c.code}</div>
                      <span className="hex" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 leading-snug">{c.title}</h3>
                    <p className="text-sm text-mute leading-relaxed mb-6">{c.sub}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {c.duration && <span className="pill">{c.duration}</span>}
                      {c.format && <span className="pill">{c.format}</span>}
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-line">
                      <div className="display text-xl num">{c.price}</div>
                      <Link href="/contact" className="mono text-xs text-accent uppercase tracking-wider">Enquire →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Group training CTA */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="card relative overflow-hidden grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <div className="label mb-6">[ In-house &amp; Group training ]</div>
              <h2 className="display text-4xl lg:text-5xl mb-6">
                Bring the lab<br /><span className="text-accent">to your force.</span>
              </h2>
              <p className="text-mute leading-relaxed mb-8 max-w-md">
                We&rsquo;ll run any course on-site. Minimum 8 participants. We bring the acquisition kits, the test devices and the legal scenarios. You bring the investigators.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Request group training →</Link>
                <Link href="/contact" className="btn-ghost">Download brochure</Link>
              </div>
            </div>
            <div className="p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-line">
              <div className="label mb-6">[ What&rsquo;s included ]</div>
              <ul className="space-y-4 text-sm text-mute leading-relaxed">
                {[
                  "Live acquisition lab with real devices",
                  "Legal case studies from actual casework",
                  "§ 65B mock certification exercise",
                  "CPD certificate per participant",
                  "Post-training examiner Q&A (1 h)",
                  "Course materials — print + digital",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
