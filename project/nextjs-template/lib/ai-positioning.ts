// Single typed source for the AI-era positioning copy (spec: chats/ai-positioning.md, Phase 1).
// Used by the homepage hero and AI band, the DF-09 page, JSON-LD, /llms.txt and the sitemap.
// Copy is final unless marked [PLACEHOLDER]; those are for the founders.

export const SITE_URL = 'https://cybereyeintelligence.com';
export const PHONE_DISPLAY = '+91 98335 65665';
export const PHONE_TEL = '+919833565665';

// P1.2 intro. Reused word for word in metadata, /llms.txt and external profiles (P1.6).
// [Founders: confirm the office list — the contact page also lists Gurugram.]
export const FIRM_DESCRIPTION =
  "Cyber Eye Intelligence is an Indian digital forensics and incident response firm, with labs in Mumbai, Bengaluru and Delhi, that uses AI to investigate faster and investigates AI when it's used against you.";

export const OFFICES = ['Mumbai', 'Bengaluru', 'Delhi'] as const;

export const HOME_SEO = {
  title: 'Digital Forensics & Incident Response for the AI Era | Cyber Eye Intelligence',
  description:
    "Digital forensics that holds up in court. We use AI to investigate faster, and we investigate AI when it's used against you. Mumbai, Bengaluru and Delhi.",
};

export const HERO = {
  eyebrow: 'Digital Forensics and Incident Response for the AI era',
  h1Line1: 'Digital forensics that holds up in court.',
  h1Line2: "We use AI to investigate faster, and we investigate AI when it's used against you.",
  reportLinkLead: 'Facing a deepfake or AI attack?',
};

export const HOW_WE_USE_AI = [
  { title: 'AI-assisted triage', body: 'Across mobile, cloud and endpoint, so examiners start with the artefacts that matter, not the noise.' },
  { title: 'Deepfake and tampering detection', body: 'Image, video and audio checked for synthetic content and edits, using spectral, error-level, sensor-noise (PRNU) and C2PA provenance analysis.' },
  { title: 'Timeline reconstruction', body: 'Events linked across devices, logs and accounts to show exactly what happened and when.' },
  { title: 'Financial transaction analysis', body: 'Patterns across accounts and payments that point to fraud, mule accounts and money trails.' },
] as const;

export interface AiThreat {
  code: string;
  title: string;
  summary: string;
  whatWeDo: string;
  whatYouGet: string;
}

export const AI_THREATS: AiThreat[] = [
  {
    code: 'AI/01',
    title: 'Deepfake & synthetic fraud',
    summary: 'Cloned voices authorising payments, deepfake Video-KYC, forged documents in loan and claims files.',
    whatWeDo: 'Audio spectral analysis, error-level analysis, PRNU sensor-noise matching, C2PA and metadata provenance checks, transaction trail',
    whatYouGet: 'Signed forensic report with BSA s.63 certificate, examiner available to testify',
  },
  {
    code: 'AI/02',
    title: 'AI-powered attacks & malware',
    summary: 'LLM-written phishing, malware that rewrites itself, automated intrusion.',
    whatWeDo: 'Memory and disk forensics, behavioural analysis of self-modifying code, timeline of the intrusion',
    whatYouGet: 'Root cause, indicators to block, clean-up plan',
  },
  {
    code: 'AI/03',
    title: 'Enterprise AI & LLM breaches',
    summary: 'Prompt injection, poisoned data, leaked prompts, embeddings and API keys.',
    whatWeDo: 'Isolate the model and its connectors, preserve prompt and retrieval logs, vector stores and access records, trace the injection path and what was exposed',
    whatYouGet: 'Containment plan, exposure report, input for CERT-In and other notifications',
  },
];

export const AI_BAND_STRIP = {
  lead: 'AI assists. Examiners decide.',
  points: [
    { label: 'Faster', body: 'AI triage, cross-device timelines, transaction patterns' },
    { label: 'Explainable', body: 'every method documented and open to challenge' },
    { label: 'Admissible', body: 'twin-examiner review, chain of custody, BSA s.63' },
  ],
  smallPrint:
    'Sensitive evidence is never sent to public AI services. CE/VectorAI, our air-gapped triage methodology, is being built in stages; Stage 1 is in pilot.',
};

// ─── DF-09 ───────────────────────────────────────────────────────────────────

export const DF09 = {
  code: 'DF-09',
  slug: 'ai-incident-response',
  path: '/services/ai-incident-response',
  title: 'AI Incident Response & Forensics',
  cardLine: 'Prove deepfake fraud in court and contain AI-driven attacks.',
  seo: {
    title: 'AI Incident Response & Deepfake Forensics | Cyber Eye Intelligence',
    description:
      'Deepfake and synthetic-fraud forensics, AI malware investigation and LLM breach response, with twin-examiner reports prepared for BSA s.63.',
  },
  h1: 'Prove deepfake fraud in court. Contain AI-driven attacks.',
  sub: 'From a cloned voice that moved money to a compromised enterprise chatbot, we contain the incident, investigate it end to end and deliver findings an examiner will sign and defend.',
  trustTags: ['Twin-examiner', 'Signed reports', 'CoC, hash-verified', 'Sensitive evidence never sent to public AI services'],
  reviewedBy: '[PLACEHOLDER: examiner name, role]',
  lastUpdated: '[date]',
  whenToCall: [
    'A payment or approval was made on a voice or video call that may have been cloned.',
    'A customer passed Video-KYC and you now suspect the face or document was synthetic.',
    'Audio, video or documents in a case or dispute may have been generated or altered by AI.',
    'An attack moved faster or adapted more than your tools expected, and you suspect AI-generated code.',
    "Your chatbot or copilot is revealing data or following instructions it shouldn't, or prompts, embeddings or API keys may have leaked.",
    "You're an insurer and need to know whether claim photos, video or documents were generated or altered by AI.",
  ],
  howWeUseAi:
    "CE/VectorAI is the air-gapped triage methodology we're building in stages. Stage 1 (triage on local models, every flag reviewed by an examiner) is in pilot. Sensitive evidence is never sent to public AI services.",
  // Founders supply a real, cleared case. Until then `caseFile` stays null and the page
  // shows a holding note rather than an invented case (spec P1.3).
  caseFile: null as null | { code: string; title: string; situation: string; whatWeDid: string; outcome: string },
  process: [
    { step: 'Contain', body: 'cut the model, keys, account or payment channel off from the attacker without destroying evidence.' },
    { step: 'Preserve', body: 'capture media, logs, prompts, embeddings and devices, hash them and open the chain of custody.' },
    { step: 'Investigate', body: 'reconstruct what happened, with examiners on every finding.' },
    { step: 'Report and stand behind it', body: 'a signed report with twin-examiner review, regulator-ready summaries and expert testimony if it goes to court.' },
  ],
  deadlines: [
    { label: 'CERT-In', body: 'reportable cyber incidents must be reported within 6 hours of noticing them (CERT-In directions, April 2022).' },
    { label: 'DPDP', body: 'the DPDP Act and Rules require personal-data breaches to be intimated to the Data Protection Board and affected people, as those obligations come into force. We can help you prepare now.' },
    { label: 'Courts', body: 'electronic evidence needs a certificate under BSA s.63, which replaced §65B of the Evidence Act from 1 July 2024.' },
  ],
  answers: [
    {
      q: 'How do you tell if a voice or video is a deepfake?',
      a: 'No single test is enough. Examiners combine audio spectral analysis, error-level analysis, sensor-noise (PRNU) matching and C2PA or metadata provenance checks, then state how confident the result is and why. Cyber Eye reports every method and its limits, so the finding can be defended under cross-examination.',
    },
    {
      q: 'Is deepfake evidence admissible in Indian courts?',
      a: 'Yes, if it is handled correctly. Electronic evidence needs a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, which replaced Section 65B of the Evidence Act from 1 July 2024, and the analysis is presented as expert opinion. Chain of custody and a documented method decide whether it holds up.',
    },
    {
      q: 'What is AI incident response?',
      a: 'AI incident response is the containment and forensic investigation of attacks that use or target artificial intelligence: deepfake fraud, AI-generated malware, hijacked enterprise chatbots and leaked AI data. Cyber Eye Intelligence contains the incident, preserves evidence with a hash-verified chain of custody, and reports findings for use in Indian courts.',
    },
    {
      q: 'What should we do first if our chatbot or LLM leaks data?',
      a: "Don't retrain, wipe or redeploy anything. Revoke exposed API keys, take the model's connectors offline, keep prompt, retrieval and access logs, and call an incident responder. Reportable incidents must go to CERT-In within 6 hours.",
    },
    {
      q: 'How quickly must a cyber incident be reported in India?',
      a: 'Reportable cyber incidents must be reported to CERT-In within 6 hours of being noticed, under its April 2022 directions. Personal-data breaches also have to be intimated to the Data Protection Board and affected people under the DPDP Act and Rules, as those duties come into force.',
    },
  ],
  faq: [
    { q: 'Will our data be fed into an AI model?', a: 'Not a public one. Any AI-assisted triage runs on local models under our control, and examiners review every result.' },
    { q: 'Do you only work after an incident?', a: 'No. Under our AI Incident Readiness Retainer we review your response plan, run deepfake-fraud tabletop exercises and, on the AI Critical tier, hunt for AI threats every quarter.' },
    { q: 'Do you still handle conventional cases?', a: "Yes. Mobile, computer, network and fraud forensics remain our core work. Use Open a case for anything that isn't AI-related." },
  ],
  closing: {
    h2: 'Something AI-shaped just went wrong?',
    body: 'Talk to an examiner now. The first call is about containment, not a sales pitch.',
  },
};

// P1.8
export const RETAINER = {
  eyebrow: 'Be ready before it happens',
  h2: 'AI Incident Readiness Retainer',
  intro: 'Agree terms now, so that when something goes wrong you make one call and an examiner starts work, with no contracts or procurement in the way.',
  tiers: ['AI Ready', 'AI Assured', 'AI Critical'] as const,
  rows: [
    { label: 'Best for', values: ['Mid-size firms starting to use AI tools', 'Banks, NBFCs and enterprises running customer-facing AI', 'Regulated firms where AI and payments are core to the business'] },
    { label: 'Response hours a year', values: ['40', '100', '200'] },
    { label: '24/7 examiner hotline', values: ['Yes', 'Yes', 'Yes'] },
    { label: 'Covers', values: ['All AI threat areas and conventional DFIR', 'All AI threat areas and conventional DFIR', 'All AI threat areas and conventional DFIR'] },
    { label: 'Readiness work included', values: ['AI incident response plan review', 'Plan review, plus one deepfake-fraud tabletop exercise for finance and KYC teams', 'Plan review, tabletop, LLM exposure review and a quarterly AI threat hunt'] },
    { label: 'Court support', values: ['BSA s.63 certificates and signed reports', 'BSA s.63 certificates and signed reports', 'BSA s.63 certificates, signed reports and priority expert testimony'] },
    { label: 'On-site response', values: ['[PLACEHOLDER] hours', '[PLACEHOLDER] hours', '[PLACEHOLDER] hours'] },
    { label: 'Price', values: ['On request', 'On request', 'On request'] },
  ],
  note: 'Unused hours can go toward readiness work or Cyber Eye Academy training. Extra hours are billed at the agreed hourly rate.',
};
