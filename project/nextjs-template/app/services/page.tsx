import Link from "next/link";
import { getServiceFamilies } from "@/lib/sanity";
import PinnedScrub from "@/components/parallax/PinnedScrub";

// Presentational mappings that don't belong in the CMS
const COLS: Record<string, string> = {
  "digital-forensics": "lg:grid-cols-4",
  "digital-intelligence": "lg:grid-cols-4",
  "managed-security": "lg:grid-cols-4",
  "managed-forensics": "lg:grid-cols-3",
  "data-recovery": "lg:grid-cols-3",
};
const BG: Record<string, string> = {
  "digital-intelligence": "bg-surface/30",
  "managed-forensics": "bg-surface/30",
};
const CODE_PREFIX: Record<string, string> = {
  "digital-forensics": "DF",
  "digital-intelligence": "DI",
  "managed-security": "MSS",
  "managed-forensics": "MDF",
  "data-recovery": "DR",
};

const FALLBACK = [
  {
    id: "digital-forensics", num: "01 / 05", label: "Family 01 / 05",
    title: "Digital", accent: "Forensics.",
    desc: "Cyber Eye Intelligence leads digital investigations end-to-end. In an era where digital evidence is decisive — for prosecutors, regulators and corporate boards — our examiners deliver meticulous, court-defensible findings across mobile, network, cloud and malware-borne incidents.",
    tagline: "Partner with us in your digital forensic journey. Rely on Cyber Eye Intelligence to unveil the truth, deliver actionable insights and stand by your organisation in the pursuit of justice and security.",
    services: [
      { code: "DF-01", title: "Digital Evidence Collection & Preservation", desc: "Meticulous acquisition from computers, mobiles, cloud and network infrastructure. Integrity-first handling for admissibility." },
      { code: "DF-02", title: "Incident Response Forensics", desc: "Rapid root-cause identification, containment and actionable insight to prevent recurrence — when minutes matter." },
      { code: "DF-03", title: "Data Recovery & Reconstruction", desc: "Restore information lost to accident or tampering. Advanced reconstruction of digital artefacts and timelines." },
      { code: "DF-04", title: "Malware Analysis", desc: "Dissect behaviour, origins and impact. Empower your team to fortify and proactively defend." },
      { code: "DF-05", title: "Mobile Device Forensics", desc: "Targeted extraction from smartphones, tablets and wearables. Court-grade insight from the device in their pocket." },
      { code: "DF-06", title: "Network Forensics", desc: "Trace digital communications, identify breaches and reconstruct events across your infrastructure." },
      { code: "DF-07", title: "Compliance & Chain of Custody", desc: "§ 65B-aligned documentation that survives cross-examination. Audit-grade evidence integrity end-to-end." },
      { code: "DF-08", title: "Empowerment Through Knowledge", desc: "Tailored training programmes and workshops to upskill your team in defensible forensic processes." },
    ],
  },
  {
    id: "digital-intelligence", num: "02 / 05", label: "Family 02 / 05",
    title: "Digital", accent: "Intelligence.",
    desc: "Extract actionable insights from vast digital landscapes. Our solutions empower organisations to make informed decisions, uncover hidden patterns and stay one step ahead — where knowledge becomes power in an era of information overload.",
    tagline: "Partner with us in your digital intelligence empowerment journey. From revealing concealed threats to strategic insights, our services elevate your intelligence capabilities in the digital age.",
    services: [
      { code: "DI-01", title: "Open-Source Intelligence (OSINT)", desc: "Navigate online sources to inform threat assessments, due diligence and strategic decision-making with precision." },
      { code: "DI-02", title: "Social Media Intelligence (SOCMINT)", desc: "Monitor sentiment, emerging trends and risk across the social landscape." },
      { code: "DI-03", title: "Dark Web Monitoring", desc: "Identify risk, monitor illicit activity and protect your digital assets from underground threats proactively." },
      { code: "DI-04", title: "Digital Threat Intelligence", desc: "Timely, actionable intelligence sourced from a wide range of data feeds — to anticipate and mitigate cyber risk." },
      { code: "DI-05", title: "Data Mining & Analysis", desc: "Unlock hidden value in large datasets. Advanced techniques to drive strategic decisions." },
      { code: "DI-06", title: "Predictive Analytics", desc: "Machine learning and statistical modelling to anticipate trends and risks." },
      { code: "DI-07", title: "Digital Reconnaissance", desc: "Comprehensive understanding of your digital footprint. Uncover exposure with precision; mitigate with confidence." },
    ],
  },
  {
    id: "managed-security", num: "03 / 05", label: "Family 03 / 05",
    title: "Managed Security", accent: "Services.",
    desc: "Unparalleled cybersecurity for on-premises, cloud and hybrid infrastructures — integrated with cutting-edge SOC and eXtended Detection & Response (XDR). Fortify your defences, detect and respond proactively, and ensure continuous security monitoring.",
    tagline: "Establish a robust defence, detect threats in real time, and respond to evolving cyber risk on a global scale. Fortify your security posture with the unwavering expertise of Cyber Eye Intelligence.",
    services: [
      { code: "MSS-01", title: "Comprehensive Managed Security", desc: "End-to-end MSS with integrated SOC and XDR. From assessment to ongoing management." },
      { code: "MSS-02", title: "24/7 Security Monitoring & IR", desc: "Round-the-clock surveillance and rapid incident response." },
      { code: "MSS-03", title: "Managed Network Security", desc: "Firewall management, intrusion detection and access control." },
      { code: "MSS-04", title: "Vulnerability Management", desc: "Continuous assessment, penetration testing and proactive patch management." },
      { code: "MSS-05", title: "Endpoint Protection & Response (EDR)", desc: "Advanced endpoint security to detect and respond to malicious activity." },
      { code: "MSS-06", title: "Managed SIEM", desc: "Centralise and analyse security data. Real-time correlation for sharper threat detection." },
      { code: "MSS-07", title: "Advanced Threat Detection", desc: "Machine learning, behavioural analytics and threat-intel feeds." },
      { code: "MSS-08", title: "IR Planning & Automation", desc: "Robust runbooks and automated response." },
      { code: "MSS-09", title: "Unified Security Across Environments", desc: "Continuous coverage across on-prem, cloud and hybrid." },
      { code: "MSS-10", title: "XDR Technology Integration", desc: "Unified visibility and control across endpoints, networks and cloud." },
      { code: "MSS-11", title: "Cloud Security Monitoring", desc: "Visibility and control over cloud assets with XDR integration." },
      { code: "MSS-12", title: "Identity & Access Management (IAM)", desc: "Implement and manage access controls." },
      { code: "MSS-13", title: "User & Entity Behaviour Analytics (UEBA)", desc: "Mitigate insider threats. Detect compromised accounts and abnormal behaviour." },
      { code: "MSS-14", title: "Compliance Monitoring & Reporting", desc: "Continuous alignment with industry regulations and proactive reporting." },
    ],
  },
  {
    id: "managed-forensics", num: "04 / 05", label: "Family 04 / 05",
    title: "Managed Digital Forensic", accent: "Services.",
    desc: "Tailored on-premises managed digital forensic services — strategically crafted to provide dedicated expertise and infrastructure for precise digital investigations within the confines of your own facilities.",
    tagline: "Choose Cyber Eye Intelligence as your trusted partner for on-premises managed digital forensic services. Localised expertise, unparalleled confidentiality and tailor-made solutions.",
    services: [
      { code: "MDF-01", title: "Dedicated Localised Expertise", desc: "Embedded examiners working alongside your team for thorough understanding of your environment." },
      { code: "MDF-02", title: "Infrastructure for Confidentiality & Control", desc: "On-prem deployment for unparalleled control, confidentiality and regulatory adherence." },
      { code: "MDF-03", title: "End-to-End Digital Investigations", desc: "Evidence collection, deep analysis, incident response and reporting." },
      { code: "MDF-04", title: "Tailored Training Solutions", desc: "Hands-on training and workshops — arm your team with essential skills." },
      { code: "MDF-05", title: "Agile Incident Response", desc: "Specialised rapid-response team for swift, precise action." },
    ],
  },
  {
    id: "data-recovery", num: "05 / 05", label: "Family 05 / 05",
    title: "Data", accent: "Recovery.",
    desc: "World-class data recovery to protect your critical information. Cutting-edge technology and seasoned engineers retrieve data across physical damage, file corruption and malicious attacks — across all major brands and formats.",
    tagline: "Partner with us for data recovery. Access state-of-the-art recovery technology, expert engineering and a dedicated team ready to help in critical data-loss scenarios.",
    services: [
      { code: "DR-01", title: "Hard Drive Recovery", desc: "HDD, SSD and complex RAID arrays — recovery from spindle failures, damaged heads and electronic malfunction." },
      { code: "DR-02", title: "File System & Database Recovery", desc: "NTFS, FAT, HFS+, Ext3/4 — plus SQL and Oracle database recoveries." },
      { code: "DR-03", title: "Removable Media Recovery", desc: "USB drives, memory cards and external HDDs." },
      { code: "DR-04", title: "Ransomware Data Recovery", desc: "Decryption and file restoration after cyberattack — paired with incident response." },
      { code: "DR-05", title: "Mobile Device Recovery", desc: "iOS and Android — recover contacts, photos, messages and app data." },
      { code: "DR-06", title: "Forensic Recovery Services", desc: "Chain-of-custody-compliant recovery for litigation, audit and compliance." },
    ],
  },
];

export const metadata = {
  title: "Services — Cyber Eye Intelligence",
  description: "Five practice families. Digital forensics, digital intelligence, managed security, managed forensic services and data recovery.",
};

function splitTitle(full: string): { title: string; accent: string } {
  const words = full.trim().split(/\s+/);
  if (words.length <= 1) return { title: "", accent: full + "." };
  return { title: words.slice(0, -1).join(" "), accent: words[words.length - 1] + "." };
}

export default async function ServicesPage() {
  const sanity = await getServiceFamilies();
  const families = sanity.length > 0
    ? sanity.map((f, i, arr) => {
        const { title, accent } = splitTitle(f.title);
        const prefix = CODE_PREFIX[f.slug.current] ?? f.slug.current.toUpperCase().slice(0, 3);
        return {
          id: f.slug.current,
          num: `${String(i + 1).padStart(2, "0")} / ${String(arr.length).padStart(2, "0")}`,
          label: `Family ${String(i + 1).padStart(2, "0")} / ${String(arr.length).padStart(2, "0")}`,
          title,
          accent,
          desc: f.description ?? f.tagline ?? "",
          tagline: f.tagline ?? "",
          services: (f.services ?? []).map((s, si) => ({
            code: `${prefix}-${String(si + 1).padStart(2, "0")}`,
            title: s.title,
            desc: s.description,
          })),
        };
      })
    : FALLBACK;

  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Services</span></div>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h1 className="display text-6xl lg:text-7xl mb-8">
                Digital forensics, cyber investigation, digital intelligence
                &amp; <span className="text-accent">managed security.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg text-mute leading-relaxed">Five practice families. One lab. Cyber Eye Intelligence combines DFIR speed with court-recognised rigour — from evidence collection and OSINT to 24/7 SOC, on-prem managed labs and ransomware recovery. Every engagement is examiner-led.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {families.map((f) => (
                  <a key={f.id} href={`#fam-${f.id}`} className="pill">{f.num.split(" / ")[0]} {f.title || f.accent.replace(".", "")}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service families */}
      {families.map((f) => (
        <section key={f.id} id={`fam-${f.id}`} className={`py-20 border-b border-line scroll-mt-20 ${BG[f.id] ?? ""}`}>
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <div className="label mb-4">[ {f.label} ]</div>
                <h2 className="display text-5xl lg:text-6xl mb-4">{f.title}<br /><span className="text-accent">{f.accent}</span></h2>
              </div>
              <div className="lg:col-span-7 lg:pt-4">
                <p className="text-lg text-mute leading-relaxed">{f.desc}</p>
              </div>
            </div>
            <div className={`grid md:grid-cols-2 ${COLS[f.id] ?? "lg:grid-cols-3"} gap-3`}>
              {f.services.map((s) => (
                <div key={s.code} className="card p-6">
                  <div className="mono text-accent text-xs mb-8">{s.code}</div>
                  <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-mute leading-relaxed">{s.desc}</p>
                </div>
              ))}
              {f.id === "managed-forensics" && (
                <div className="card p-6 bg-accent text-ink">
                  <div className="mono text-xs mb-8 opacity-70">→ For you?</div>
                  <h3 className="text-lg font-medium mb-2">Stand up your forensic capability.</h3>
                  <p className="text-sm leading-relaxed opacity-80">A discovery call sets the scope, infrastructure and SLA. We&rsquo;ll tell you if you don&rsquo;t need this.</p>
                </div>
              )}
            </div>
            <div className="card mt-8 p-7 flex flex-wrap items-center justify-between gap-4">
              <p className="text-mute max-w-2xl">{f.tagline}</p>
              <Link href="/contact" className="btn-primary mono text-sm uppercase tracking-wider px-6 py-3 font-medium">Engage this family →</Link>
            </div>
          </div>
        </section>
      ))}

      <PinnedScrub />
    </>
  );
}
