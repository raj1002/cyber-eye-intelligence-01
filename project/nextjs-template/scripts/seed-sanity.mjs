// Run: SANITY_WRITE_TOKEN=your_token node scripts/seed-sanity.mjs
import { createClient } from '@sanity/client';

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN. Run: SANITY_WRITE_TOKEN=your_token node scripts/seed-sanity.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'f36piw8r',
  dataset: 'production',
  apiVersion: '2024-05-01',
  token,
  useCdn: false,
});

// ─── Services ────────────────────────────────────────────────────────────────

const services = [
  {
    _id: 'seed-service-digital-forensics',
    _type: 'service',
    title: 'Digital Forensics',
    slug: { _type: 'slug', current: 'digital-forensics' },
    description: 'Cyber Eye Intelligence leads digital investigations end-to-end. In an era where digital evidence is decisive — for prosecutors, regulators and corporate boards — our examiners deliver meticulous, court-defensible findings across mobile, network, cloud and malware-borne incidents.',
    tagline: 'Partner with us in your digital forensic journey. Rely on Cyber Eye Intelligence to unveil the truth, deliver actionable insights and stand by your organisation in the pursuit of justice and security.',
    publishedAt: '2026-01-01T00:00:00Z',
    services: [
      { _key: 'df-01', title: 'Digital Evidence Collection & Preservation', description: 'Meticulous acquisition from computers, mobiles, cloud and network infrastructure. Integrity-first handling for admissibility.' },
      { _key: 'df-02', title: 'Incident Response Forensics', description: 'Rapid root-cause identification, containment and actionable insight to prevent recurrence — when minutes matter.' },
      { _key: 'df-03', title: 'Data Recovery & Reconstruction', description: 'Restore information lost to accident or tampering. Advanced reconstruction of digital artefacts and timelines.' },
      { _key: 'df-04', title: 'Malware Analysis', description: 'Dissect behaviour, origins and impact. Empower your team to fortify and proactively defend.' },
      { _key: 'df-05', title: 'Mobile Device Forensics', description: 'Targeted extraction from smartphones, tablets and wearables. Court-grade insight from the device in their pocket.' },
      { _key: 'df-06', title: 'Network Forensics', description: 'Trace digital communications, identify breaches and reconstruct events across your infrastructure.' },
      { _key: 'df-07', title: 'Compliance & Chain of Custody', description: '§ 65B-aligned documentation that survives cross-examination. Audit-grade evidence integrity end-to-end.' },
      { _key: 'df-08', title: 'Empowerment Through Knowledge', description: 'Tailored training programmes and workshops to upskill your team in defensible forensic processes.' },
    ],
  },
  {
    _id: 'seed-service-digital-intelligence',
    _type: 'service',
    title: 'Digital Intelligence',
    slug: { _type: 'slug', current: 'digital-intelligence' },
    description: 'Extract actionable insights from vast digital landscapes. Our solutions empower organisations to make informed decisions, uncover hidden patterns and stay one step ahead — where knowledge becomes power in an era of information overload.',
    tagline: 'Partner with us in your digital intelligence empowerment journey. From revealing concealed threats to strategic insights, our services elevate your intelligence capabilities in the digital age.',
    publishedAt: '2026-01-02T00:00:00Z',
    services: [
      { _key: 'di-01', title: 'Open-Source Intelligence (OSINT)', description: 'Navigate online sources to inform threat assessments, due diligence and strategic decision-making with precision.' },
      { _key: 'di-02', title: 'Social Media Intelligence (SOCMINT)', description: 'Monitor sentiment, emerging trends and risk across the social landscape.' },
      { _key: 'di-03', title: 'Dark Web Monitoring', description: 'Identify risk, monitor illicit activity and protect your digital assets from underground threats proactively.' },
      { _key: 'di-04', title: 'Digital Threat Intelligence', description: 'Timely, actionable intelligence sourced from a wide range of data feeds — to anticipate and mitigate cyber risk.' },
      { _key: 'di-05', title: 'Data Mining & Analysis', description: 'Unlock hidden value in large datasets. Advanced techniques to drive strategic decisions.' },
      { _key: 'di-06', title: 'Predictive Analytics', description: 'Machine learning and statistical modelling to anticipate trends and risks.' },
      { _key: 'di-07', title: 'Digital Reconnaissance', description: 'Comprehensive understanding of your digital footprint. Uncover exposure with precision; mitigate with confidence.' },
    ],
  },
  {
    _id: 'seed-service-managed-security',
    _type: 'service',
    title: 'Managed Security Services',
    slug: { _type: 'slug', current: 'managed-security' },
    description: 'Unparalleled cybersecurity for on-premises, cloud and hybrid infrastructures — integrated with cutting-edge SOC and eXtended Detection & Response (XDR). Fortify your defences, detect and respond proactively, and ensure continuous security monitoring.',
    tagline: 'Establish a robust defence, detect threats in real time, and respond to evolving cyber risk on a global scale. Fortify your security posture with the unwavering expertise of Cyber Eye Intelligence.',
    publishedAt: '2026-01-03T00:00:00Z',
    services: [
      { _key: 'mss-01', title: 'Comprehensive Managed Security', description: 'End-to-end MSS with integrated SOC and XDR. From assessment to ongoing management — a complete cybersecurity solution.' },
      { _key: 'mss-02', title: '24/7 Security Monitoring & IR', description: 'Round-the-clock surveillance and rapid incident response.' },
      { _key: 'mss-03', title: 'Managed Network Security', description: 'Firewall management, intrusion detection and access control.' },
      { _key: 'mss-04', title: 'Vulnerability Management', description: 'Continuous assessment, penetration testing and proactive patch management.' },
      { _key: 'mss-05', title: 'Endpoint Protection & Response (EDR)', description: 'Advanced endpoint security to detect and respond to malicious activity.' },
      { _key: 'mss-06', title: 'Managed SIEM', description: 'Centralise and analyse security data. Real-time correlation for sharper threat detection.' },
      { _key: 'mss-07', title: 'Advanced Threat Detection', description: 'Machine learning, behavioural analytics and threat-intel feeds.' },
      { _key: 'mss-08', title: 'IR Planning & Automation', description: 'Robust runbooks and automated response.' },
      { _key: 'mss-09', title: 'Unified Security Across Environments', description: 'Continuous coverage across on-prem, cloud and hybrid.' },
      { _key: 'mss-10', title: 'XDR Technology Integration', description: 'Unified visibility and control across endpoints, networks and cloud.' },
      { _key: 'mss-11', title: 'Cloud Security Monitoring', description: 'Visibility and control over cloud assets with XDR integration.' },
      { _key: 'mss-12', title: 'Identity & Access Management (IAM)', description: 'Implement and manage access controls.' },
      { _key: 'mss-13', title: 'User & Entity Behaviour Analytics (UEBA)', description: 'Mitigate insider threats. Detect compromised accounts and abnormal behaviour.' },
      { _key: 'mss-14', title: 'Compliance Monitoring & Reporting', description: 'Continuous alignment with industry regulations and proactive reporting.' },
    ],
  },
  {
    _id: 'seed-service-managed-forensics',
    _type: 'service',
    title: 'Managed Digital Forensic Services',
    slug: { _type: 'slug', current: 'managed-forensics' },
    description: 'Tailored on-premises managed digital forensic services — strategically crafted to provide dedicated expertise and infrastructure for precise digital investigations within the confines of your own facilities.',
    tagline: 'Choose Cyber Eye Intelligence as your trusted partner for on-premises managed digital forensic services. Localised expertise, unparalleled confidentiality and tailor-made solutions.',
    publishedAt: '2026-01-04T00:00:00Z',
    services: [
      { _key: 'mdf-01', title: 'Dedicated Localised Expertise', description: 'Embedded examiners working alongside your team for thorough understanding of your environment.' },
      { _key: 'mdf-02', title: 'Infrastructure for Confidentiality & Control', description: 'On-prem deployment for unparalleled control, confidentiality and regulatory adherence.' },
      { _key: 'mdf-03', title: 'End-to-End Digital Investigations', description: 'Evidence collection, deep analysis, incident response and reporting.' },
      { _key: 'mdf-04', title: 'Tailored Training Solutions', description: 'Hands-on training and workshops — arm your team with essential skills.' },
      { _key: 'mdf-05', title: 'Agile Incident Response', description: 'Specialised rapid-response team for swift, precise action.' },
    ],
  },
  {
    _id: 'seed-service-data-recovery',
    _type: 'service',
    title: 'Data Recovery',
    slug: { _type: 'slug', current: 'data-recovery' },
    description: 'World-class data recovery to protect your critical information. Cutting-edge technology and seasoned engineers retrieve data across physical damage, file corruption and malicious attacks — across all major brands and formats.',
    tagline: 'Partner with us for data recovery. Access state-of-the-art recovery technology, expert engineering and a dedicated team ready to help in critical data-loss scenarios.',
    publishedAt: '2026-01-05T00:00:00Z',
    services: [
      { _key: 'dr-01', title: 'Hard Drive Recovery', description: 'HDD, SSD and complex RAID arrays — recovery from spindle failures, damaged heads and electronic malfunction.' },
      { _key: 'dr-02', title: 'File System & Database Recovery', description: 'NTFS, FAT, HFS+, Ext3/4 — plus SQL and Oracle database recoveries.' },
      { _key: 'dr-03', title: 'Removable Media Recovery', description: 'USB drives, memory cards and external HDDs.' },
      { _key: 'dr-04', title: 'Ransomware Data Recovery', description: 'Decryption and file restoration after cyberattack — paired with incident response.' },
      { _key: 'dr-05', title: 'Mobile Device Recovery', description: 'iOS and Android — recover contacts, photos, messages and app data.' },
      { _key: 'dr-06', title: 'Forensic Recovery Services', description: 'Chain-of-custody-compliant recovery for litigation, audit and compliance.' },
    ],
  },
];

// ─── Sectors ─────────────────────────────────────────────────────────────────

const sectors = [
  {
    _id: 'seed-sector-law-enforcement',
    _type: 'sector',
    title: 'Law Enforcement & Police',
    slug: { _type: 'slug', current: 'law-enforcement' },
    description: 'Cyber cells, anti-fraud units, SIT support. Backlog clearance, mobile triage, specialist training for investigators.',
    tagline: 'Court-ready evidence from day one. We work alongside cyber cells, SITs and anti-fraud units — from first seizure to High Court testimony.',
    publishedAt: '2026-01-01T00:00:00Z',
  },
  {
    _id: 'seed-sector-legal-litigation',
    _type: 'sector',
    title: 'Legal & Litigation',
    slug: { _type: 'slug', current: 'legal-litigation' },
    description: 'eDiscovery, § 65B certification, expert witness testimony, hostile cross-examination preparation.',
    tagline: 'Digital evidence that survives cross-examination. We support litigators from disclosure to the witness box.',
    publishedAt: '2026-01-02T00:00:00Z',
  },
  {
    _id: 'seed-sector-corporate-enterprise',
    _type: 'sector',
    title: 'Corporate Enterprise',
    slug: { _type: 'slug', current: 'corporate-enterprise' },
    description: 'Internal investigations, IP theft, misconduct, exit forensics and insider threat analysis.',
    tagline: 'Boardroom-ready findings. We handle sensitive internal matters with complete discretion and legal precision.',
    publishedAt: '2026-01-03T00:00:00Z',
  },
  {
    _id: 'seed-sector-government',
    _type: 'sector',
    title: 'Government Agencies',
    slug: { _type: 'slug', current: 'government' },
    description: 'CERT-In aligned, classified handling, audit-ready procedures and classified-environment forensics.',
    tagline: 'Cleared for classified. We operate under the strictest evidence-handling protocols for government and regulatory engagements.',
    publishedAt: '2026-01-04T00:00:00Z',
  },
  {
    _id: 'seed-sector-bfsi-insurance',
    _type: 'sector',
    title: 'BFSI & Insurance',
    slug: { _type: 'slug', current: 'bfsi-insurance' },
    description: 'Wire fraud, claims investigation, AML, KYC investigations and UPI / payments fraud.',
    tagline: 'From BEC to UPI fraud — we trace digital trails across jurisdictions, freeze assets and deliver admissible findings.',
    publishedAt: '2026-01-05T00:00:00Z',
  },
];

// ─── Case Files ───────────────────────────────────────────────────────────────

const caseFiles = [
  {
    _id: 'seed-case-ce2025014',
    _type: 'caseFile',
    ref: 'CE/2025/014',
    sector: 'corporate',
    label: 'Corporate · Mobile',
    title: 'Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.',
    sub: '2.4 TB examined · § 65B admitted · Mumbai sessions.',
    imgLabel: 'case · IP theft',
    publishedAt: '2025-06-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2025008',
    _type: 'caseFile',
    ref: 'CE/2025/008',
    sector: 'bfsi',
    label: 'BFSI · Email',
    title: 'Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.',
    sub: 'Attribution to Lagos-based ring · funds frozen.',
    imgLabel: 'case · BEC fraud',
    publishedAt: '2025-03-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2025003',
    _type: 'caseFile',
    ref: 'CE/2025/003',
    sector: 'corporate',
    label: 'Corporate · Insider',
    title: 'Identified data exfiltration through personal cloud — termination upheld.',
    sub: '17 USB events · 2 SaaS exports · labour tribunal accepted.',
    imgLabel: 'case · insider',
    publishedAt: '2025-01-15T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2024097',
    _type: 'caseFile',
    ref: 'CE/2024/097',
    sector: 'corporate',
    label: 'Corporate · Malware',
    title: 'Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.',
    sub: 'Conti-affiliated · attribution upheld in arbitration.',
    imgLabel: 'case · ransomware',
    publishedAt: '2024-11-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2024082',
    _type: 'caseFile',
    ref: 'CE/2024/082',
    sector: 'legal',
    label: 'Legal · Mobile',
    title: 'Reconstructed 6-week location timeline in a contested custody matter.',
    sub: 'Geofencing · cell-site verification · family court accepted.',
    imgLabel: 'case · custody',
    publishedAt: '2024-09-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2024061',
    _type: 'caseFile',
    ref: 'CE/2024/061',
    sector: 'ngo',
    label: 'NGO · Cloud',
    title: 'Reversed unauthorised mailbox rules — donor data breach contained in 36 h.',
    sub: 'M365 audit log · attribution to compromised contractor.',
    imgLabel: 'case · m365',
    publishedAt: '2024-07-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2024048',
    _type: 'caseFile',
    ref: 'CE/2024/048',
    sector: 'law-enforcement',
    label: 'Law Enforcement · Mobile',
    title: 'Cell-site triangulation closed a 9-suspect narcotics syndicate.',
    sub: '23 devices imaged · 4 burner phones decrypted.',
    imgLabel: 'case · narcotics ring',
    publishedAt: '2024-05-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2024032',
    _type: 'caseFile',
    ref: 'CE/2024/032',
    sector: 'government',
    label: 'Government · Insider',
    title: 'Traced a ministry document leak to a single endpoint in 9 days.',
    sub: 'USB telemetry · classified handling · auditor accepted.',
    imgLabel: 'case · ministry leak',
    publishedAt: '2024-03-01T00:00:00Z',
  },
  {
    _id: 'seed-case-ce2023118',
    _type: 'caseFile',
    ref: 'CE/2023/118',
    sector: 'healthcare',
    label: 'Healthcare · Malware',
    title: 'Contained a hospital ransomware attack — restored ICU systems in 18 hours.',
    sub: 'No patient data lost · CERT-In incident filing closed.',
    imgLabel: 'case · hospital',
    publishedAt: '2023-12-01T00:00:00Z',
  },
];

// ─── Courses ──────────────────────────────────────────────────────────────────

const courses = [
  { _id: 'seed-course-ce101', _type: 'course', code: 'CE-101', audience: 'police', title: 'Mobile Device Forensics for Investigators', sub: 'Extraction, parsing and evidence handling from iOS and Android in a live lab environment.', duration: '3 days', format: 'In-person', price: '₹18,000' },
  { _id: 'seed-course-ce102', _type: 'course', code: 'CE-102', audience: 'police', title: 'Digital Evidence Handling & § 65B Compliance', sub: 'Correct acquisition, labelling and certification so evidence holds under cross-examination.', duration: '2 days', format: 'In-person', price: '₹12,000' },
  { _id: 'seed-course-ce103', _type: 'course', code: 'CE-103', audience: 'police', title: 'Network Forensics & Log Analysis', sub: 'PCAP analysis, log correlation and ISP coordination for cyber-crime investigations.', duration: '4 days', format: 'In-person', price: '₹22,000' },
  { _id: 'seed-course-ce104', _type: 'course', code: 'CE-104', audience: 'police', title: 'Open Source Intelligence (OSINT) for Police', sub: 'Structured OSINT techniques for criminal investigations — social media, dark web, GEOINT.', duration: '2 days', format: 'In-person / Online', price: '₹14,000' },
  { _id: 'seed-course-ce201', _type: 'course', code: 'CE-201', audience: 'counsel', title: 'Digital Evidence for Lawyers — Foundations', sub: 'Understand how digital evidence is acquired, what makes it admissible and how to challenge it.', duration: '1 day', format: 'In-person', price: '₹8,500' },
  { _id: 'seed-course-ce202', _type: 'course', code: 'CE-202', audience: 'counsel', title: '§ 65B Masterclass for Litigators', sub: 'Deep-dive into the certification regime — drafting, challenging and cross-examining digital evidence.', duration: '1 day', format: 'In-person / Online', price: '₹9,500' },
  { _id: 'seed-course-ce203', _type: 'course', code: 'CE-203', audience: 'counsel', title: 'eDiscovery & Cloud Evidence', sub: "M365, Gmail and cloud storage in litigation. What logs survive, what doesn't, and how to request it.", duration: '1 day', format: 'Online', price: '₹7,500' },
  { _id: 'seed-course-ce204', _type: 'course', code: 'CE-204', audience: 'counsel', title: 'Expert Witness Cross-Examination Prep', sub: 'Work alongside a forensic examiner to prepare and challenge expert evidence in mock cross.', duration: '1 day', format: 'In-person', price: '₹12,000' },
  { _id: 'seed-course-ce301', _type: 'course', code: 'CE-301', audience: 'corporate', title: 'Insider Threat Investigation — Practitioner', sub: "Identify, contain and investigate an insider incident without tipping your hand.", duration: '2 days', format: 'In-person', price: '₹16,000' },
  { _id: 'seed-course-ce302', _type: 'course', code: 'CE-302', audience: 'corporate', title: 'Incident Response for Corporate Security', sub: 'Hands-on IR drills: ransomware, BEC, data exfiltration. NIST and CERT-In aligned.', duration: '3 days', format: 'In-person', price: '₹24,000' },
  { _id: 'seed-course-ce303', _type: 'course', code: 'CE-303', audience: 'corporate', title: 'Forensic Readiness Programme', sub: 'Build a defensible evidence collection plan before an incident — policies, tools, chain of custody.', duration: '2 days', format: 'In-person / Online', price: '₹18,000' },
  { _id: 'seed-course-ce304', _type: 'course', code: 'CE-304', audience: 'corporate', title: 'Cloud Forensics & SaaS Evidence', sub: 'Acquire, preserve and present evidence from AWS, Azure, M365 and Google Workspace.', duration: '2 days', format: 'In-person / Online', price: '₹20,000' },
  { _id: 'seed-course-ce401', _type: 'course', code: 'CE-401', audience: 'police', title: 'Malware Reverse Engineering Basics', sub: 'Static and dynamic analysis for investigators — identify ransomware families, C2 infrastructure.', duration: '3 days', format: 'In-person', price: '₹20,000' },
  { _id: 'seed-course-ce402', _type: 'course', code: 'CE-402', audience: 'corporate', title: 'OSINT for Corporate Due Diligence', sub: 'Vendor risk, competitor intelligence, fraudulent identity detection — structured OSINT workflow.', duration: '1 day', format: 'Online', price: '₹9,000' },
];

// ─── Articles ─────────────────────────────────────────────────────────────────

const articles = [
  { _id: 'seed-article-ios18-apfs', _type: 'article', type: 'Tutorial', readTime: '6 min', date: 'May 01, 2026', title: 'Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.', label: 'article · ios 18', publishedAt: '2026-05-01T00:00:00Z' },
  { _id: 'seed-article-bec-header', _type: 'article', type: 'Field notes', readTime: '8 min', date: 'Apr 14, 2026', title: 'BEC fraud: a five-step header forensics workflow for in-house counsel.', label: 'article · bec', publishedAt: '2026-04-14T00:00:00Z' },
  { _id: 'seed-article-m365-logs', _type: 'article', type: 'Reference', readTime: '11 min', date: 'Mar 30, 2026', title: 'Cloud forensics in M365: which logs actually survive a 90-day retention window?', label: 'article · m365', publishedAt: '2026-03-30T00:00:00Z' },
  { _id: 'seed-article-ai-forensics', _type: 'article', type: 'Opinion', readTime: '4 min', date: 'Mar 22, 2026', title: 'Why "AI-powered forensics" is mostly marketing — and the two places it isn\'t.', label: 'article · ai', publishedAt: '2026-03-22T00:00:00Z' },
  { _id: 'seed-article-signal-android', _type: 'article', type: 'Tutorial', readTime: '9 min', date: 'Mar 10, 2026', title: 'Carving Signal sealed-sender artefacts from Android 14 user data.', label: 'article · signal', publishedAt: '2026-03-10T00:00:00Z' },
  { _id: 'seed-article-65b-sc', _type: 'article', type: 'Case law', readTime: '5 min', date: 'Feb 28, 2026', title: 'SC ruling on § 65B: what it changes for digital evidence in 2026.', label: 'article · 65b', publishedAt: '2026-02-28T00:00:00Z' },
];

// ─── Whitepapers ──────────────────────────────────────────────────────────────

const whitepapers = [
  { _id: 'seed-wp-01', _type: 'whitepaper', code: 'WP-01', title: 'Mobile Forensic Acquisition Standards for Indian Courts', sub: "A practitioner's guide to § 65B compliance across iOS and Android extraction workflows.", year: '2026' },
  { _id: 'seed-wp-02', _type: 'whitepaper', code: 'WP-02', title: 'AI in Digital Forensics — Promise, Peril and the Admissibility Problem', sub: "Where machine learning helps, where it doesn't, and how to keep the examiner in the loop.", year: '2025' },
  { _id: 'seed-wp-03', _type: 'whitepaper', code: 'WP-03', title: 'Ransomware Attribution: From Malware to the Indictment', sub: 'Tracing a full kill chain — infrastructure, crypto wallets, dark web and cross-border coordination.', year: '2025' },
];

// ─── Blogs ────────────────────────────────────────────────────────────────────

const blogs = [
  { _id: 'seed-blog-01', _type: 'blog', date: 'May 12, 2026', title: "What the Bombay HC's WhatsApp admissibility ruling means for your next matter.", readTime: '4 min', publishedAt: '2026-05-12T00:00:00Z' },
  { _id: 'seed-blog-02', _type: 'blog', date: 'Apr 5, 2026', title: "We trained 200 UP Police cyber-crime investigators. Here's what they didn't know.", readTime: '6 min', publishedAt: '2026-04-05T00:00:00Z' },
  { _id: 'seed-blog-03', _type: 'blog', date: 'Mar 1, 2026', title: 'Cellebrite UFED vs. GrayKey in 2026: a practitioner\'s honest comparison.', readTime: '8 min', publishedAt: '2026-03-01T00:00:00Z' },
];

// ─── Seed runner ──────────────────────────────────────────────────────────────

const all = [
  ...services.map((d) => ({ ...d, _label: 'service' })),
  ...sectors.map((d) => ({ ...d, _label: 'sector' })),
  ...caseFiles.map((d) => ({ ...d, _label: 'caseFile' })),
  ...courses.map((d) => ({ ...d, _label: 'course' })),
  ...articles.map((d) => ({ ...d, _label: 'article' })),
  ...whitepapers.map((d) => ({ ...d, _label: 'whitepaper' })),
  ...blogs.map((d) => ({ ...d, _label: 'blog' })),
];

console.log(`\nSeeding ${all.length} documents into Sanity (project f36piw8r · dataset production)...\n`);

let ok = 0;
let fail = 0;

for (const { _label, ...doc } of all) {
  try {
    await client.createOrReplace(doc);
    console.log(`  ✓  ${_label.padEnd(12)} ${doc._id}`);
    ok++;
  } catch (err) {
    console.error(`  ✗  ${_label.padEnd(12)} ${doc._id}  —  ${err.message}`);
    fail++;
  }
}

console.log(`\nDone. ${ok} created/updated, ${fail} failed.\n`);
if (fail > 0) process.exit(1);
