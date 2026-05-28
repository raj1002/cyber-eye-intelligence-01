export type Service = {
  slug: string;
  num: string;
  title: string;
  sub: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-forensics",
    num: "01",
    title: "Mobile Forensics",
    sub: "iOS · Android · feature phones · SIM · IMEI tracing · locked & damaged devices",
    tags: ["Cellebrite UFED", "MSAB XRY", "Magnet AXIOM"],
  },
  {
    slug: "cloud-forensics",
    num: "02",
    title: "Cloud Forensics",
    sub: "Google Workspace · M365 · AWS · Dropbox · SaaS applications",
    tags: ["Audit logs", "Mailbox dumps", "CloudTrail"],
  },
  {
    slug: "insider-investigation",
    num: "03",
    title: "Insider Investigation",
    sub: "Data exfiltration · IP theft · misconduct · ghost employees",
    tags: ["USB telemetry", "UAM", "Discretion"],
  },
  {
    slug: "malware-intrusion",
    num: "04",
    title: "Malware & Intrusion",
    sub: "Triage · scoping · attribution · remediation · IOCs",
    tags: ["DFIR", "Reversal", "YARA"],
  },
  {
    slug: "email-forensics",
    num: "05",
    title: "Email Authentication",
    sub: "Header analysis · spoof detection · BEC · phishing chains",
    tags: ["SPF", "DKIM", "DMARC"],
  },
  {
    slug: "fraud-investigation",
    num: "06",
    title: "Fraud Investigation",
    sub: "Financial · identity · claims · KYC · UPI / wire fraud",
    tags: ["AML", "UPI trace", "Forensic acctg"],
  },
  {
    slug: "disk-forensics",
    num: "07",
    title: "Disk & Computer Forensics",
    sub: "Imaging · deleted-file recovery · timeline reconstruction · RAM analysis",
    tags: ["EnCase", "FTK", "Volatility", "X-Ways"],
  },
];

export type Sector = {
  slug: string;
  code: string;
  title: string;
  blurb: string;
};

export const sectors: Sector[] = [
  { slug: "law-enforcement", code: "S/01", title: "Law Enforcement & Police", blurb: "Cyber cells, anti-fraud units, SIT support. Backlog clearance, mobile triage, training." },
  { slug: "legal-litigation", code: "S/02", title: "Legal & Litigation", blurb: "eDiscovery, § 65B certification, expert witness, hostile cross-prep." },
  { slug: "corporate-enterprise", code: "S/03", title: "Corporate Enterprise", blurb: "Internal investigations, IP theft, misconduct, exit forensics." },
  { slug: "government", code: "S/04", title: "Government Agencies", blurb: "CERT-In aligned, classified handling, audit-ready procedures." },
  { slug: "bfsi-insurance", code: "S/05", title: "BFSI & Insurance", blurb: "Wire fraud, claims, AML, KYC investigations. UPI / payments fraud." },
];

export type CaseFile = {
  slug: string;
  ref: string;
  category: string;
  title: string;
  blurb: string;
};

export const caseFiles: CaseFile[] = [
  {
    slug: "ce-2025-014",
    ref: "CE/2025/014",
    category: "Mobile · Corporate",
    title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.",
    blurb: "2.4 TB examined · § 65B admitted · Mumbai sessions.",
  },
  {
    slug: "ce-2025-008",
    ref: "CE/2025/008",
    category: "Email · BFSI",
    title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.",
    blurb: "Attribution to Lagos-based ring · funds frozen.",
  },
  {
    slug: "ce-2025-003",
    ref: "CE/2025/003",
    category: "Insider · Tech",
    title: "Identified data exfiltration through personal cloud — termination upheld.",
    blurb: "17 USB events · 2 SaaS exports · labour tribunal accepted.",
  },
  {
    slug: "ce-2024-097",
    ref: "CE/2024/097",
    category: "Malware · Manufacturing",
    title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.",
    blurb: "Conti-affiliated · attribution upheld in arbitration.",
  },
  {
    slug: "ce-2024-082",
    ref: "CE/2024/082",
    category: "Mobile · Family",
    title: "Reconstructed 6-week location timeline in a contested custody matter.",
    blurb: "Geofencing · cell-site verification · family court accepted.",
  },
  {
    slug: "ce-2024-061",
    ref: "CE/2024/061",
    category: "Cloud · NGO",
    title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.",
    blurb: "M365 audit log · attribution to compromised contractor.",
  },
];

export type Course = {
  code: string;
  audience: "For Police" | "For Counsel" | "For Corporate";
  title: string;
  blurb: string;
  format: string;
  price: string;
};

export const courses: Course[] = [
  { code: "CE-101", audience: "For Police", title: "Mobile Triage for First Responders", blurb: "How to safely seize, document and preserve a mobile device under field conditions.", format: "2 days · in-person", price: "₹18,000" },
  { code: "CE-204", audience: "For Counsel", title: "Cross-Examining a Forensic Expert", blurb: "A litigator's playbook — what to ask, what to challenge, what concedes the case.", format: "1 day · hybrid", price: "₹14,000" },
  { code: "CE-307", audience: "For Corporate", title: "Insider Threat Hunting", blurb: "Detection, evidence collection and legal handoff for in-house security teams.", format: "3 days · online", price: "₹32,000" },
  { code: "CE-115", audience: "For Police", title: "Cell-Site Analysis Foundations", blurb: "Reading CDRs, mapping tower geometry, building a defensible movement timeline.", format: "2 days · in-person", price: "₹22,000" },
  { code: "CE-211", audience: "For Counsel", title: "§ 65B in Practice", blurb: "Drafting, challenging and defending § 65B certificates under current case law.", format: "1 day · hybrid", price: "₹14,000" },
  { code: "CE-314", audience: "For Corporate", title: "Ransomware Tabletop", blurb: "Live-fire exercise for boards and incident teams. Realistic scenarios, hot debrief.", format: "1 day · in-person", price: "₹48,000" },
];

export type Article = {
  slug: string;
  kind: string;
  readTime: string;
  date: string;
  title: string;
};

export const articles: Article[] = [
  { slug: "ios18-whatsapp", kind: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes." },
  { slug: "bec-headers", kind: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel." },
  { slug: "m365-logs", kind: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?" },
  { slug: "ai-forensics-marketing", kind: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't." },
  { slug: "signal-android", kind: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data." },
  { slug: "sc-65b-ruling", kind: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026." },
];
