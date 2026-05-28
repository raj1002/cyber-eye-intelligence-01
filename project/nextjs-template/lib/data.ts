export interface ServiceFamily {
  id: string;
  num: string;
  title: string;
  sub: string;
  tags: string[];
  services: { code: string; title: string; desc: string }[];
  cta: string;
  icon?: string;
}

export interface Sector {
  id: string;
  num: string;
  title: string;
  sub: string;
  slug: string;
}

export interface CaseFile {
  id: string;
  sector: string;
  sectorLabel: string;
  title: string;
  sub: string;
  type: string;
}

export interface Course {
  id: string;
  code: string;
  audience: string;
  title: string;
  sub: string;
  duration: string;
  format: string;
  price: string;
}

export interface Article {
  id: string;
  type: string;
  readTime: string;
  date: string;
  title: string;
  sub: string;
}

export interface Role {
  id: string;
  code: string;
  title: string;
  location: string;
  type: string;
  seniority: string;
  comp: string;
  desc: string;
  tools: string;
}

export const serviceFamilies: ServiceFamily[] = [
  {
    id: "digital-forensics",
    num: "01 / 05",
    title: "Digital Forensics",
    sub: "Evidence collection, incident response, data recovery, malware analysis, mobile & network forensics — with court-grade chain of custody.",
    tags: ["Evidence", "IR", "Mobile", "Network"],
    cta: "8 services →",
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
    id: "digital-intelligence",
    num: "02 / 05",
    title: "Digital Intelligence",
    sub: "OSINT, SOCMINT, dark web monitoring, threat intelligence, data mining and predictive analytics — turning the open digital world into actionable signal.",
    tags: ["OSINT", "SOCMINT", "Dark web", "Threat intel"],
    cta: "7 services →",
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
    id: "managed-security",
    num: "03 / 05",
    title: "Managed Security Services",
    sub: "24/7 SOC, XDR, vulnerability management, EDR, SIEM, IAM, UEBA and compliance — across on-prem, cloud and hybrid infrastructures.",
    tags: ["SOC 24/7", "XDR", "SIEM", "IAM"],
    cta: "13 services →",
    services: [
      { code: "MSS-01", title: "Comprehensive Managed Security", desc: "End-to-end MSS with integrated SOC and XDR. A complete cybersecurity solution." },
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
    ],
  },
  {
    id: "managed-forensics",
    num: "04 / 05",
    title: "Managed Digital Forensic Services",
    sub: "On-premises forensic infrastructure, dedicated examiners, agile incident response and tailored training — delivered inside your facility.",
    tags: ["On-prem lab", "Agile IR", "Training"],
    cta: "5 services →",
    services: [
      { code: "MDF-01", title: "Dedicated Localised Expertise", desc: "Embedded examiners working alongside your team for thorough understanding of your environment." },
      { code: "MDF-02", title: "Infrastructure for Confidentiality & Control", desc: "On-prem deployment for unparalleled control, confidentiality and regulatory adherence." },
      { code: "MDF-03", title: "End-to-End Digital Investigations", desc: "Evidence collection, deep analysis, incident response and reporting." },
      { code: "MDF-04", title: "Tailored Training Solutions", desc: "Hands-on training and workshops — arm your team with essential skills." },
      { code: "MDF-05", title: "Agile Incident Response", desc: "Specialised rapid-response team for swift, precise action." },
    ],
  },
  {
    id: "data-recovery",
    num: "05 / 05",
    title: "Data Recovery",
    sub: "Hard drive, file system, database, removable media, ransomware-encrypted, mobile and chain-of-custody forensic recovery — across all major brands and formats.",
    tags: ["HDD / SSD", "RAID", "Ransomware", "Mobile"],
    cta: "6 services →",
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

export const sectors: Sector[] = [
  { id: "law-enforcement", num: "S/01", title: "Law Enforcement & Police", sub: "Cyber cells, anti-fraud units, SIT support. Backlog clearance, mobile triage, training.", slug: "law-enforcement" },
  { id: "legal-litigation", num: "S/02", title: "Legal & Litigation", sub: "eDiscovery, § 65B certification, expert witness, hostile cross-prep.", slug: "legal-litigation" },
  { id: "corporate-enterprise", num: "S/03", title: "Corporate Enterprise", sub: "Internal investigations, IP theft, misconduct, exit forensics.", slug: "corporate-enterprise" },
  { id: "government", num: "S/04", title: "Government Agencies", sub: "CERT-In aligned, classified handling, audit-ready procedures.", slug: "government" },
  { id: "bfsi-insurance", num: "S/05", title: "BFSI & Insurance", sub: "Wire fraud, claims, AML, KYC investigations.", slug: "bfsi-insurance" },
];

export const caseFiles: CaseFile[] = [
  { id: "CE/2025/014", sector: "corporate", sectorLabel: "Corporate · Mobile", title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.", sub: "2.4 TB examined · § 65B admitted · Mumbai sessions.", type: "IP theft" },
  { id: "CE/2025/008", sector: "bfsi", sectorLabel: "BFSI · Email", title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.", sub: "Attribution to Lagos-based ring · funds frozen.", type: "BEC fraud" },
  { id: "CE/2025/003", sector: "corporate", sectorLabel: "Corporate · Insider", title: "Identified data exfiltration through personal cloud — termination upheld.", sub: "17 USB events · 2 SaaS exports · labour tribunal accepted.", type: "Insider" },
  { id: "CE/2024/097", sector: "corporate", sectorLabel: "Corporate · Malware", title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.", sub: "Conti-affiliated · attribution upheld in arbitration.", type: "Ransomware" },
  { id: "CE/2024/082", sector: "legal", sectorLabel: "Legal · Mobile", title: "Reconstructed 6-week location timeline in a contested custody matter.", sub: "Geofencing · cell-site verification · family court accepted.", type: "Custody" },
  { id: "CE/2024/061", sector: "ngo", sectorLabel: "NGO · Cloud", title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.", sub: "M365 audit log · attribution to compromised contractor.", type: "M365" },
  { id: "CE/2024/048", sector: "law-enforcement", sectorLabel: "Law Enforcement · Mobile", title: "Cell-site triangulation closed a 9-suspect narcotics syndicate.", sub: "23 devices imaged · 4 burner phones decrypted.", type: "Narcotics" },
  { id: "CE/2024/032", sector: "government", sectorLabel: "Government · Insider", title: "Traced a ministry document leak to a single endpoint in 9 days.", sub: "USB telemetry · classified handling · auditor accepted.", type: "Ministry leak" },
  { id: "CE/2023/118", sector: "healthcare", sectorLabel: "Healthcare · Malware", title: "Contained a hospital ransomware attack — restored ICU systems in 18 hours.", sub: "No patient data lost · CERT-In incident filing closed.", type: "Hospital" },
];

export const courses: Course[] = [
  { id: "ce-101", code: "CE-101", audience: "police", title: "Mobile Triage for First Responders", sub: "How to safely seize, document and preserve a mobile device under field conditions.", duration: "2 days", format: "in-person", price: "₹18,000" },
  { id: "ce-204", code: "CE-204", audience: "counsel", title: "Cross-Examining a Forensic Expert", sub: "A litigator's playbook — what to ask, what to challenge, what concedes the case.", duration: "1 day", format: "hybrid", price: "₹14,000" },
  { id: "ce-307", code: "CE-307", audience: "corporate", title: "Insider Threat Hunting", sub: "Detection, evidence collection and legal handoff for in-house security teams.", duration: "3 days", format: "online", price: "₹32,000" },
  { id: "ce-115", code: "CE-115", audience: "police", title: "Cell-Site Analysis Foundations", sub: "Reading CDRs, mapping tower geometry, building a defensible movement timeline.", duration: "2 days", format: "in-person", price: "₹22,000" },
  { id: "ce-211", code: "CE-211", audience: "counsel", title: "§ 65B in Practice", sub: "Drafting, challenging and defending § 65B certificates under current case law.", duration: "1 day", format: "hybrid", price: "₹14,000" },
  { id: "ce-314", code: "CE-314", audience: "corporate", title: "Ransomware Tabletop", sub: "Live-fire exercise for boards and incident teams. Realistic scenarios, hot debrief.", duration: "1 day", format: "in-person", price: "₹48,000" },
];

export const articles: Article[] = [
  { id: "ios18-apfs", type: "Tutorial", readTime: "6 min", date: "May 01, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.", sub: "Apple's File System tweaks in iOS 18 quietly shifted what we can carve from unallocated space." },
  { id: "bec-header", type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel.", sub: "" },
  { id: "m365-logs", type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?", sub: "" },
  { id: "ai-forensics", type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't.", sub: "" },
  { id: "signal-android", type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data.", sub: "" },
  { id: "65b-sc", type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026.", sub: "" },
];

export const roles: Role[] = [
  { id: "r-01", code: "R-01", title: "Senior Mobile Forensics Examiner", location: "Mumbai", type: "Full-time", seniority: "5+ yrs", comp: "₹18–28 LPA", desc: "Lead acquisitions on iOS 18 / Android 15, parse encrypted app artefacts, draft § 65B-grade reports and testify in High Court matters.", tools: "Cellebrite · AXIOM" },
  { id: "r-02", code: "R-02", title: "Incident Response Lead", location: "Bengaluru", type: "Full-time", seniority: "7+ yrs", comp: "₹24–36 LPA", desc: "Own the 24/7 IR rota. First-responder on ransomware, BEC and intrusion engagements.", tools: "DFIR · SIEM" },
  { id: "r-03", code: "R-03", title: "Digital Intelligence Analyst (OSINT)", location: "Mumbai", type: "Full-time", seniority: "3+ yrs", comp: "₹14–22 LPA", desc: "Build attribution dossiers from open and deep-web sources. Pivot across infrastructure, identities and crypto wallets.", tools: "OSINT · Maltego" },
  { id: "r-04", code: "R-04", title: "Malware Reverse Engineer", location: "Delhi", type: "Full-time", seniority: "4+ yrs", comp: "₹20–32 LPA", desc: "Static + dynamic analysis of native and Android samples. Build YARA, write technical addenda, support attribution work.", tools: "IDA · Ghidra" },
  { id: "r-05", code: "R-05", title: "Forensic Tooling Engineer", location: "Mumbai", type: "Full-time", seniority: "3+ yrs", comp: "₹18–28 LPA", desc: "Ship our in-house SQLite carvers, log correlators and chain-of-custody systems. Python + Rust shop.", tools: "Python · Rust" },
  { id: "r-06", code: "R-06", title: "Forensic Apprentice (Graduate)", location: "Mumbai", type: "Apprentice", seniority: "0–1 yrs", comp: "₹8–10 LPA", desc: "12-month structured rotation across mobile, host and network forensics. Mentored by senior examiners.", tools: "B.Tech / B.Sc" },
];
