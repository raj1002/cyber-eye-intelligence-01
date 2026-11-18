# Cyber Eye Intelligence — Website Copy Spec

Nov 17, 2026 · @raj

## Handoff brief

**Goal:** make AI-era threats the first thing a visitor sees, led by deepfake and synthetic fraud, where our court-ready strengths are proven, so the site hooks people in the first screen. Who we're writing for, in priority order: banks and NBFCs, law firms, insurers, and IT and enterprise companies on retainers. Police and government are still served, but the copy isn't aimed at them.

**Held back for now:** new global or cross-border content. Don't add overseas offices, markets or pages. Existing copy is handled case by case in P1.7.

**Version 3.** This version takes in Claude Code's review of the real Next.js codebase (`project/nextjs-template`): service codes, routes, file locations, Sanity content, phasing and a few accuracy fixes. **Version 4** fixes the contact-form spec to match the real form, makes all `?type=` values consistent, flags the office list for the founders and tidies phase names, numbering and checks.

### Rules for Claude Code

1. Build **Phase 1 only**, on a feature branch off `develop`. Phases 2 and 3 follow once Phase 1 is reviewed.
2. Change only what this doc lists. If a page or section isn't named here, leave it untouched.
3. Reuse the site's existing components, classes and styles. Check every new code (DF-09, AI/0x, WP-04, CE-305) is unused before using it; if one is taken, use the next free code and tell us.
4. Much of the copy lives in Sanity (`scripts/seed-sanity.mjs` and the dataset). Make content fixes there as well as in code.
5. Copy is final unless it shows `[PLACEHOLDER]`; leave those for the founders.
6. The accuracy fixes in P1.7 override any copy that conflicts with them.

### Rollout

| Phase | Items | Purpose |
| --- | --- | --- |
| **Phase 1: positioning and offer** | P1.1 Homepage hero · P1.2 AI threats band · P1.3 DF-09 AI Incident Response & Forensics page, with one AI case file · P1.4 Services menu and hub · P1.5 Contact case types · P1.6 SEO, AEO and GEO for these pages · P1.7 Accuracy fixes · P1.8 AI Incident Readiness Retainer · P1.9 Who we serve: order | Land the AI-first message with BFSI, law firms, insurers and enterprises, and give them a retainer to sign |
| **Phase 2: depth** | P2.1 Added lines on Managed Security and Managed Forensics · P2.2 Academy course · P2.3 Whitepaper WP-04 · P2.4 Emergency strip · P2.5 Site-wide structured data · P3.1 services block for S/05 BFSI & Insurance, S/02 Legal & Litigation and S/03 Corporate Enterprise | Proof and detail for the target buyers |
| **Phase 3: other sectors** | P3.1 services block for S/01 Law Enforcement and S/04 Government · P3.2 New sector pages S/06–S/08 | Wider coverage |

Not changing in any phase: nav labels and order, existing service-family pages (apart from P2.1), existing sector copy (apart from P3.1), About copy, investor section, existing courses and articles, testimonials, footer layout.

# Phase 1: positioning and offer

## P1.1 Homepage hero

One hero for every buyer: the promise we're known for first, then AI on both sides, the AI we use and the AI we investigate. The sub-copy stays exactly as it is on the live site. Approved by the founders on 17 Nov 2026.

| Element | Copy |
| --- | --- |
| Eyebrow | Digital Forensics and Incident Response for the AI era |
| H1, line 1 | **Digital forensics that holds up in court.** |
| H1, line 2 (same H1, on its own line, lighter weight or accent colour) | **We use AI to investigate faster, and we investigate AI when it's used against you.** |
| Sub-copy | Keep the current website sub-copy exactly as it is, word for word and with its existing bold. |
| Primary CTA | Open a case → (existing button and route) |
| Secondary CTA | Talk about a retainer → (to `/contact?type=retainer`; replaces "Browse services") |
| Text link under CTAs | Facing a deepfake or AI attack? Report an AI incident → (to `/contact?type=ai-incident`) |
| Chips | Keep the existing hero chips; change "§ 65B · certified" to "BSA s.63 · certified" |

No phone button in the hero: the number stays in the header as today, and moves to the emergency strip in P2.4.

## P1.2 Homepage: AI threats band

Insert directly below the hero, above the existing service families. Two columns side by side (stacked on mobile), using the existing card components, with one strip underneath. Threat codes use the **AI/0x** prefix, because A/0x is already used for Academy audiences in `Header.tsx`.

| Element | Copy |
| --- | --- |
| Eyebrow | AI in our work |
| H2 | **AI on both sides of the investigation.** |
| Intro | Cyber Eye Intelligence is an Indian digital forensics and incident response firm, with labs in Mumbai, Bengaluru, Delhi and Noida, that uses AI to investigate faster and investigates AI when it's used against you. |

`[Founders confirmed on 18 Nov 2026: offices are Mumbai (HQ), Bengaluru, Delhi and Noida. Gurugram is removed from the contact page; About, footer, header and metadata list Noida.]`

**Left column: How we use AI**

| Card | Copy |
| --- | --- |
| AI-assisted triage | Across mobile, cloud and endpoint, so examiners start with the artefacts that matter, not the noise. |
| Deepfake and tampering detection | Image, video and audio checked for synthetic content and edits, using spectral, error-level, sensor-noise (PRNU) and C2PA provenance analysis. |
| Timeline reconstruction | Events linked across devices, logs and accounts to show exactly what happened and when. |
| Financial transaction analysis | Patterns across accounts and payments that point to fraud, mule accounts and money trails. |

**Right column: AI threats we investigate**

| Card | Copy |
| --- | --- |
| AI/01 Deepfake & synthetic fraud | Cloned voices authorising payments, deepfake Video-KYC, forged documents in loan and claims files. |
| AI/02 AI-powered attacks & malware | LLM-written phishing, malware that rewrites itself, automated intrusion. |
| AI/03 Enterprise AI & LLM breaches | Prompt injection, poisoned data, leaked prompts, embeddings and API keys. |
| Link | See AI Incident Response & Forensics → (to `/services/ai-incident-response`) |

**Strip under both columns**

| Element | Copy |
| --- | --- |
| Lead line | **AI assists. Examiners decide.** |
| Three points | **Faster:** AI triage, cross-device timelines, transaction patterns · **Explainable:** every method documented and open to challenge · **Admissible:** twin-examiner review, chain of custody, BSA s.63 |
| Small print | Sensitive evidence is never sent to public AI services. CE/VectorAI, our air-gapped triage methodology, is being built in stages; Stage 1 is in pilot. |
| Links | Why "AI-powered forensics" is mostly marketing → · WP-02 AI in Digital Forensics → (existing article and whitepaper) |

No speed figures (e.g. "hours instead of weeks") until we can show one from our own cases.

Everything below this on the homepage stays as it is, apart from P1.7 fixes.

## P1.3 New page: DF-09 AI Incident Response & Forensics

Services are coded DF-01…DF-08 in `lib/data.ts`, and `app/services/[slug]/page.tsx` renders family pages only. So:

- Add DF-09 to the services data, under the Digital Forensics family.
- Create its own route, `app/services/ai-incident-response/page.tsx`, reusing the service-page layout and components. Make sure the existing family slugs still resolve.
- Breadcrumb: Services › Digital Forensics › DF-09.

### Hero

| Element | Copy |
| --- | --- |
| Code | DF-09 — AI Incident Response & Forensics |
| H1 | **Prove deepfake fraud in court. Contain AI-driven attacks.** |
| Sub-copy | From a cloned voice that moved money to a compromised enterprise chatbot, we contain the incident, investigate it end to end and deliver findings an examiner will sign and defend. |
| CTAs | Report an AI incident → · Speak to an examiner · 24/7: +91 98335 65665 |
| Trust tags | Twin-examiner · Signed reports · CoC, hash-verified · Sensitive evidence never sent to public AI services |
| Under hero | "Reviewed by Lakhan Handebag, Academy Director · Last updated 18 Nov 2026" |

### When to call us

- A payment or approval was made on a voice or video call that may have been cloned.
- A customer passed Video-KYC and you now suspect the face or document was synthetic.
- Audio, video or documents in a case or dispute may have been generated or altered by AI.
- An attack moved faster or adapted more than your tools expected, and you suspect AI-generated code.
- Your chatbot or copilot is revealing data or following instructions it shouldn't, or prompts, embeddings or API keys may have leaked.
- You're an insurer and need to know whether claim photos, video or documents were generated or altered by AI.

### What we do

| Area | What we do | What you get |
| --- | --- | --- |
| AI/01 Deepfake & synthetic fraud | Audio spectral analysis, error-level analysis, PRNU sensor-noise matching, C2PA and metadata provenance checks, transaction trail | Signed forensic report with BSA s.63 certificate, examiner available to testify |
| AI/02 AI-powered attacks & malware | Memory and disk forensics, behavioural analysis of self-modifying code, timeline of the intrusion | Root cause, indicators to block, clean-up plan |
| AI/03 Enterprise AI & LLM breaches | Isolate the model and its connectors, preserve prompt and retrieval logs, vector stores and access records, trace the injection path and what was exposed | Containment plan, exposure report, input for CERT-In and other notifications |

**How we use AI ourselves:** CE/VectorAI is the air-gapped triage methodology we're building in stages. Stage 1 (triage on local models, every flag reviewed by an examiner) is in pilot. Sensitive evidence is never sent to public AI services.

### From our casework (required before launch)

One anonymised AI or deepfake case file, in the same format as the existing case files (e.g. CE/2025/0xx). It must be a real engagement; the founders supply it. Prefer a bank, NBFC, insurance or enterprise case, since those are the buyers we're targeting.

| Element | Content |
| --- | --- |
| Case code and title | `[PLACEHOLDER]` e.g. "CE/2026/0xx · Voice-clone payment approval, mid-size NBFC" |
| Situation | `[PLACEHOLDER]` 1–2 lines |
| What we did | `[PLACEHOLDER]` 2–3 lines, naming the methods used |
| Outcome | `[PLACEHOLDER]` 1–2 lines, with any figure the client allows |

**Interim (18 Nov 2026):** at the founders' request the page carries a sample case (voice-clone payment approval, mid-size NBFC), labelled on the page as "Example only — not a real engagement". It must be replaced with a real, cleared case before launch.

If no AI case can be published yet, use a short "What we're seeing" note from our examiners on deepfake fraud in India instead, and add the case file as soon as one is cleared. Don't invent one.

### How an AI engagement runs

1. **Contain:** cut the model, keys, account or payment channel off from the attacker without destroying evidence.
2. **Preserve:** capture media, logs, prompts, embeddings and devices, hash them and open the chain of custody.
3. **Investigate:** reconstruct what happened, with examiners on every finding.
4. **Report and stand behind it:** a signed report with twin-examiner review, regulator-ready summaries and expert testimony if it goes to court.

### Deadlines you may be facing

- **CERT-In:** reportable cyber incidents must be reported within 6 hours of noticing them (CERT-In directions, April 2022).
- **DPDP:** the DPDP Act and Rules require personal-data breaches to be intimated to the Data Protection Board and affected people, as those obligations come into force. We can help you prepare now.
- **Courts:** electronic evidence needs a certificate under BSA s.63, which replaced §65B of the Evidence Act from 1 July 2024.

`[Counsel for this wording: Pooja R. Mankoj (Legal Head). Founders: have Pooja confirm the DPDP breach-intimation commencement date before launch. Research note (18 Nov 2026, not legal advice): the DPDP Rules, 2025 were notified on 13 Nov 2025; Rule 7 (breach intimation) is in the group that comes into force 18 months after publication, which most commentary puts at 13 May 2027 (some say 14 May). Rule 7 expects an initial intimation to the Board without delay and a detailed report within 72 hours of becoming aware. The site copy says "as those obligations come into force", which stays accurate either way; counsel should check the Gazette text (G.S.R. 846(E)) and decide whether to name the date.]`

### Answer blocks (AEO)

Each as a visible H2 question with a 40–60 word answer directly under it, placed above the FAQ. The first sentence must make sense quoted on its own.

| Question (H2) | Answer |
| --- | --- |
| How do you tell if a voice or video is a deepfake? | No single test is enough. Examiners combine audio spectral analysis, error-level analysis, sensor-noise (PRNU) matching and C2PA or metadata provenance checks, then state how confident the result is and why. Cyber Eye reports every method and its limits, so the finding can be defended under cross-examination. |
| Is deepfake evidence admissible in Indian courts? | Yes, if it is handled correctly. Electronic evidence needs a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, which replaced Section 65B of the Evidence Act from 1 July 2024, and the analysis is presented as expert opinion. Chain of custody and a documented method decide whether it holds up. |
| What is AI incident response? | AI incident response is the containment and forensic investigation of attacks that use or target artificial intelligence: deepfake fraud, AI-generated malware, hijacked enterprise chatbots and leaked AI data. Cyber Eye Intelligence contains the incident, preserves evidence with a hash-verified chain of custody, and reports findings for use in Indian courts. |
| What should we do first if our chatbot or LLM leaks data? | Don't retrain, wipe or redeploy anything. Revoke exposed API keys, take the model's connectors offline, keep prompt, retrieval and access logs, and call an incident responder. Reportable incidents must go to CERT-In within 6 hours. |
| How quickly must a cyber incident be reported in India? | Reportable cyber incidents must be reported to CERT-In within 6 hours of being noticed, under its April 2022 directions. Personal-data breaches also have to be intimated to the Data Protection Board and affected people under the DPDP Act and Rules, as those duties come into force. |

### FAQ

| Question | Answer |
| --- | --- |
| Will our data be fed into an AI model? | Not a public one. Any AI-assisted triage runs on local models under our control, and examiners review every result. |
| Do you only work after an incident? | No. Under our AI Incident Readiness Retainer we review your response plan, run deepfake-fraud tabletop exercises and, on the AI Critical tier, hunt for AI threats every quarter. |
| Do you still handle conventional cases? | Yes. Mobile, computer, network and fraud forensics remain our core work. Use Open a case for anything that isn't AI-related. |

### Closing CTA

| Element | Copy |
| --- | --- |
| H2 | **Something AI-shaped just went wrong?** |
| Body | Talk to an examiner now. The first call is about containment, not a sales pitch. |
| Buttons | Report an AI incident → · +91 98335 65665 |

## P1.4 Services menu and hub

List DF-09 AI Incident Response & Forensics first under Digital Forensics in the services menu and on `/services`, with a "New" tag. Card line: *Prove deepfake fraud in court and contain AI-driven attacks.*

## P1.5 Contact form

The form in `app/contact/page.tsx` has no "case type" field today: it has a **Practice area** row of radio pills (Mobile, Cloud, Insider, Malware, Email, Fraud, Disk) whose values map to service families, and it doesn't read the URL. So this item has two parts:

1. **New options.** Add these to the Practice area row, keeping the existing pills and their values:

| Pill label | Value (`?type=`) | Position |
| --- | --- | --- |
| AI incident (deepfake, AI-enabled fraud, LLM breach) | `ai-incident` | First |
| Free 30-minute AI risk call | `ai-risk-call` | Second |
| Retainer enquiry | `retainer` | After the existing pills |

2. **Preselect from the URL.** Read the `type` search parameter and preselect the matching pill; with no parameter (or an unknown one) keep today's default. Make sure the server action and the email/Sanity record carry the new values.

Every `?type=` link in this doc must use a value from this table. P2.4 adds `incident` (*Active incident*) when the emergency strip ships.

## P1.6 SEO, AEO and GEO for Phase 1 pages

| Page | Title | Meta description |
| --- | --- | --- |
| Homepage | Digital Forensics & Incident Response for the AI Era \| Cyber Eye Intelligence | Digital forensics that holds up in court. We use AI to investigate faster, and we investigate AI when it's used against you. Mumbai, Bengaluru and Delhi. |
| `/services/ai-incident-response` | AI Incident Response & Deepfake Forensics \| Cyber Eye Intelligence | Deepfake and synthetic-fraud forensics, AI malware investigation and LLM breach response, with twin-examiner reports prepared for BSA s.63. |

- **Structured data on these two pages:** `Organization` and `WebSite` on the homepage; `Service`, `FAQPage` (answer blocks plus FAQ) and `BreadcrumbList` on DF-09. Don't add `aggregateRating`, because Google ignores self-served ratings on Organization and LocalBusiness markup. Values must match the visible copy.
- **Server-rendered content:** the hero, the AI band, the answer blocks and the counters must be in the HTML with JavaScript off. `CountUp.tsx` starts at `useState(0)`, so crawlers see zeros: render the final value on the server and animate only on the client.
- **AI crawlers:** `robots.ts` already allows all user agents, so no change; just confirm no host-level rule blocks GPTBot, ClaudeBot, PerplexityBot or Google-Extended.
- **`/llms.txt`:** new short Markdown file with the firm's one-line description (the AI band intro), the three AI threat areas, offices and phone, and links to the homepage, DF-09, `/services`, `/training`, `/knowledge` and `/contact`.
- **Sitemap:** add `/services/ai-incident-response` with `lastmod`; submit in Google Search Console and Bing Webmaster Tools.
- **Consistent description:** use the AI band intro sentence word for word on the Google Business Profile, LinkedIn and directories (founders' task).

## P1.7 Accuracy fixes

| Find | Where | Do this |
| --- | --- | --- |
| "Fully accredited lab" | `/about` metadata (`app/about/page.tsx`) | Remove; replace with "Working toward ISO/IEC 17025 (NABL) accreditation" |
| "ISO 17025 aligned" | Wherever it appears | Change to "Working toward ISO/IEC 17025 (NABL)" |
| §65B / "Section 65B" | About 20 places: footer FAQ, hero chip, globe chip, course titles and descriptions, Sanity seed data | Change to "BSA s.63 (formerly §65B)" or just "BSA s.63" where space is short. Leave testimonials as quoted. |
| Counters showing 0 | `CountUp.tsx` | Render final values server-side (see P1.6). Figures stay as they are. |
| "14 courses" | Academy header | Show the real number of courses, taken from the course data rather than hard-coded |
| "freeze assets" | S/05 BFSI & Insurance card and page | Change to "help you move fast to freeze funds"; keep "trace digital trails across jurisdictions". Leave "funds frozen" in the case file and testimonial as they are: they describe what happened. |
| "global scale" | Managed Security tagline | Change to "at scale" |
| "Lagos-based ring" (case file CE/2025/008), "cross-border coordination" (WP-03) | Case file, whitepaper | Leave as they are: they describe past work, not a market we're selling into |
| "Evidence never leaves our lab" or similar absolute | Any new copy | Use "Sensitive evidence is never sent to public AI services" |
| Any copy implying CE/VectorAI is live | Any page | Keep "the methodology we're building" and "Stage 1 in pilot" |
| "Autonomous containment" or similar | Any page | Don't use; examiners make every containment call |

## P1.8 AI Incident Readiness Retainer

On the DF-09 page, between "Deadlines you may be facing" and the answer blocks.

| Element | Copy |
| --- | --- |
| Eyebrow | Be ready before it happens |
| H2 | **AI Incident Readiness Retainer** |
| Intro | Agree terms now, so that when something goes wrong you make one call and an examiner starts work, with no contracts or procurement in the way. |

|  | AI Ready | AI Assured | AI Critical |
| --- | --- | --- | --- |
| Best for | Mid-size firms starting to use AI tools | Banks, NBFCs and enterprises running customer-facing AI | Regulated firms where AI and payments are core to the business |
| Response hours a year | 80 | 100 | 150 |
| 24/7 examiner hotline | Yes | Yes | Yes |
| Covers | All AI threat areas and conventional DFIR | All AI threat areas and conventional DFIR | All AI threat areas and conventional DFIR |
| Readiness work included | AI incident response plan review | Plan review, plus one deepfake-fraud tabletop exercise for finance and KYC teams | Plan review, tabletop, LLM exposure review and a quarterly AI threat hunt |
| Court support | BSA s.63 certificates and signed reports | BSA s.63 certificates and signed reports | BSA s.63 certificates, signed reports and priority expert testimony |
| On-site response | Within 4 hours in Tier 1 cities, 12 hours elsewhere in India | Within 4 hours in Tier 1 cities, 12 hours elsewhere in India | Within 4 hours in Tier 1 cities, 12 hours elsewhere in India |
| Price | On request | On request | On request |

| Element | Copy |
| --- | --- |
| Note under table | Unused hours can go toward readiness work or Cyber Eye Academy training. Extra hours are billed at the agreed hourly rate. |
| CTA | Talk about a retainer → (to `/contact?type=retainer`; the *Retainer enquiry* option is defined in P1.5) |

**Hours (18 Nov 2026):** the founders asked to base the hours on Kyndryl's published incident-response retainer tiers (80, 100 and 150 hours a year). Kyndryl doesn't publish on-site times, so on-site response uses the site's existing promise from the footer FAQ (4 hours in Tier 1 cities, 12 hours elsewhere). Founders: confirm both, and revisit the price card below, which was set for 40–200 hours.

**For the founders, not for the site:** the strategy doc's price card puts the DFIR retainer at ₹6–25 lakh a year for 40–200 hours, roughly ₹6, ₹12 and ₹25 lakh for these tiers. Confirm the unused-hours terms and on-site times before launch.

## P1.9 Who we serve: order

Reorder the sector cards to match who we're selling to. Codes, URLs and copy stay the same; only the order changes, on the homepage "Who we serve" grid, `/sectors`, the nav flyout and the footer.

1. S/05 BFSI & Insurance
2. S/02 Legal & Litigation
3. S/03 Corporate Enterprise
4. S/01 Law Enforcement & Police
5. S/04 Government Agencies

# Phase 2: depth

## P2.1 Added service lines

| Where | Add |
| --- | --- |
| Managed Security, service list | **AI Threat Hunting.** Continuous hunting for prompt-injection attempts, unusual LLM and AI-API use, and AI-generated phishing across your estate. |
| Managed Forensics, service list | **Air-gapped AI-assisted triage (pilot).** CE/VectorAI Stage 1 triage on local models, inside your network or our lab, with examiner review. Available to pilot clients. |

## P2.2 Academy course

**CE-305 Investigating & Containing AI-Driven Cyberattacks.** For SOC teams, investigators and fraud units: deepfake detection, LLM breach response and how to preserve AI evidence for court. 3 days · ₹24,000 · In-person / Online, in line with CE-302 Incident Response for Corporate Security. Add it to the course data and Sanity, with a link to DF-09.

## P2.3 Whitepaper WP-04

Card **WP-04: Admissibility of Deepfake & Synthetic Media Analysis Under Indian Evidence Law.** Tag "Coming soon" with a "Notify me" email field until it's published. Link WP-02 next to it.

## P2.4 Emergency strip

A slim, dismissible bar above the header on every page, in the site's alert colour. Once it's live, keep the phone CTA only in the strip and the DF-09 page, not repeated in every section.

| Element | Copy |
| --- | --- |
| Text | **Under attack right now?** An examiner is on the line 24/7. |
| Links | Open an incident → (to `/contact?type=incident`) · +91 98335 65665 |

Add an *Active incident* pill (value `incident`) to the contact form's Practice area row, following the P1.5 pattern, so this link preselects it.

## P2.5 Site-wide structured data

| Page | Schema types | Key fields |
| --- | --- | --- |
| Site-wide | `Organization` | legalName "Cyber Eye Intelligence LLP", foundingDate 2025, logo, telephone, `sameAs` (official profiles `[PLACEHOLDER]`), `knowsAbout` |
| `/contact` | `ProfessionalService`, one per office | name, address (`[PLACEHOLDER]` full addresses), geo, openingHours. No `aggregateRating`. |
| Other service pages | `Service` + `BreadcrumbList` | same pattern as DF-09 |
| Academy | `Course` for each course | name, courseCode, description, provider, `offers` (price, INR), `hasCourseInstance` (courseMode, duration, e.g. P3D) |
| Articles and whitepapers | `Article` | headline, author (named examiner, with credentials), datePublished, dateModified |

# Phase 3: other sectors

## P3.1 Services block on existing sector pages

Keep the five sector pages and their copy. On each, add a block called **What we do for you** below the intro. No prices or deal sizes. Each block ends with *Talk to an examiner about your sector →* (to `/contact`).

Build the blocks for S/05 BFSI & Insurance, S/02 Legal & Litigation and S/03 Corporate Enterprise in **Phase 2**; S/01 and S/04 follow in Phase 3. (P3.1 sits in this section so all sector copy is in one place, even though part of it ships in Phase 2.)

| Sector page | What we do for you | AI threats we handle | How to engage us |
| --- | --- | --- | --- |
| S/01 Law Enforcement & Police | Overflow examinations of seized phones, computers and locked devices · Scene-response teams for BNSS s.176(3) · Examiners embedded in your cyber cell · CDR and IPDR analysis · BSA s.63 certificates and court testimony | Deepfake and voice-clone evidence in extortion, sextortion and impersonation cases | Rate contracts, GeM, police modernisation funds |
| S/02 Legal & Litigation | Independent expert examination and reports · BSA s.63 certificates · Expert testimony and cross-examination support · eDiscovery and cloud evidence | Testing whether audio, video or documents in a matter are synthetic; challenging or defending AI-generated evidence | Direct engagement or through your panel |
| S/03 Corporate Enterprise | Insider-threat and IP-theft investigations · Digital evidence for POSH and HR matters · Breach investigation and reporting support · Forensic readiness programme · DFIR and AI Incident Readiness retainers | Voice-clone payment fraud, compromised enterprise chatbots and copilots, AI-written phishing | Direct, or through your law firm or cyber insurer |
| S/04 Government Agencies | Overflow rate contracts for state and central forensic labs · Embedded examiners · Lab Operate: we staff and run a lab for you (3–4 examiners plus QA) · Incident response for departments | Deepfakes of officials, AI-driven attacks on public systems | Tender, rate contract, GeM |
| S/05 BFSI & Insurance | Fraud Desk: managed fraud investigation · Loan-fraud forensic audits · Mule-account and UPI trail tracing · Claims forensics for photo and video fraud · Breach investigation for cyber-insurance panels | Deepfake Video-KYC, cloned voices approving payments, synthetic documents in loan and claims files | Vendor empanelment, RFP, insurer panels |

## P3.2 New sector pages

Same template as the existing sector pages. List them on `/sectors`, in the nav flyout and in the footer; the homepage keeps its five cards.

| Code and URL | Headline | Intro | What we do for you | AI angle | How to engage us |
| --- | --- | --- | --- | --- | --- |
| S/06 Power & Utilities (`/sectors/power-utilities`) | **Forensics for the grid.** | Smart meters and substation automation have brought IT-style attacks into operational technology. We investigate them without taking the grid down. | Grid Forensics: OT incident-response retainer · Readiness drills for control-room and IT teams · Investigation of smart-meter and substation incidents | AI-assisted intrusion into OT and IT networks | PSU tender |
| S/07 Telecom & ISPs (`/sectors/telecom`) | **Fraud and evidence at network scale.** | Telecom teams carry heavy IPDR workloads and a steady flow of SIM-swap fraud. We add forensic capacity without adding headcount. | IPDR analytics support · SIM-swap fraud investigation · Forensic add-on for your SOC | AI voice scams carried over your network, synthetic identities at SIM issuance | Direct |
| S/08 Education & Training (`/sectors/education`) | **Hands-on forensics training for campuses and academies.** | Most forensics courses are long on theory and short on lab time. Our examiners bring real tools and real case work to your students and officers. | Cyber Eye Academy courses on campus · Train-the-trainer programmes · Hands-on lab practice | Teaching AI-era investigation, including CE-305 | Direct |

SEO: title "\[Sector\] Digital Forensics & Incident Response | Cyber Eye Intelligence"; meta from the intro line; `Service` JSON-LD with `audience` set to the sector.

# Checks

## Phase 1 verification

- [ ] `npm run build` passes in `project/nextjs-template`; `/services/ai-incident-response` renders and every existing family slug still works
- [ ] With JavaScript off (curl the homepage and DF-09), the hero, AI band, answer blocks and real counter values are in the HTML
- [ ] Search the repo and the Sanity dataset for `65B`, `accredited`, `global`, `freeze` and `frozen`; every remaining hit is one this doc says to keep
- [ ] When Phase 1 deploys, publish the Sanity draft of `seed-service-digital-forensics` (adds DF-09 to the services list and fixes the DF-07 wording); it is held as a draft so DF-09 does not appear on the live site before its page exists
- [ ] JSON-LD passes Google's Rich Results Test and validator.schema.org, with no `aggregateRating`
- [ ] `/contact?type=ai-incident`, `?type=ai-risk-call` and `?type=retainer` preselect the right Practice area pill; `/contact` with no parameter behaves as before
- [ ] Retainer section (P1.8) sits between "Deadlines you may be facing" and the answer blocks; its CTA and the hero's secondary CTA both land on *Retainer enquiry*
- [ ] Sector order (P1.9) is S/05, S/02, S/03, S/01, S/04 on the homepage grid, `/sectors`, the nav flyout and the footer
- [ ] Founders have confirmed the office list, and the AI band intro matches the contact page and About
- [ ] `/llms.txt` is live; sitemap includes DF-09 and is submitted
- [ ] The sample AI case file is replaced by a real, cleared case (or a "What we're seeing" note) approved by the founders
- [ ] Pooja R. Mankoj (counsel) has confirmed the DPDP wording
- [ ] Hero, band and DF-09 match the site's look on desktop and mobile; nothing changed on pages this doc doesn't name

## Phase 2 and 3 checks

- [ ] Retainer on-site times and unused-hours terms confirmed by the founders
- [ ] Emergency strip on every page, dismissible; phone CTA not repeated in every section; `/contact?type=incident` preselects *Active incident*
- [ ] CE-305 and WP-04 codes confirmed free; course count updates automatically
- [ ] Phase 2: "What we do for you" block on S/05, S/02 and S/03
- [ ] Phase 2: site-wide structured data (P2.5) passes the Rich Results Test, with no `aggregateRating`
- [ ] Phase 3: "What we do for you" block on S/01 and S/04; S/06–S/08 linked from `/sectors`, nav flyout and footer
