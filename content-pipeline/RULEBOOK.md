# Cyber Eye Intelligence — Content Rulebook

> Every article published under the Cyber Eye Intelligence brand — whether written by a human or generated in a Claude Code session — must satisfy every rule in this document before it enters Sanity or goes live.

---

## 1. Brand Voice

| Do | Don't |
|----|-------|
| Precise, forensic, understated | Sensational, fear-mongering |
| Active voice ("We recovered") | Passive padding ("It was found that") |
| Specific numbers and tools | Vague claims ("powerful solution") |
| Indian legal/court references | Generic "Western" framing |
| Examiner's perspective | Sales or marketing tone |
| Short sentences under stress | Rambling paragraphs |

**Forbidden words/phrases:** "cutting-edge", "best-in-class", "leverage", "synergy", "unlock", "game-changer", "revolutionise", "cyber warrior", "hacker mindset", "in today's digital age".

---

## 2. Mandatory Frontmatter

Every article file must open with this YAML block — no field may be omitted:

```yaml
---
title: "Full article title — specific, not generic"
seoTitle: "Primary Keyword | Cyber Eye Intelligence"  # ≤ 60 chars
seoDescription: "Answer-first sentence. 140–155 chars. Contains primary keyword."
slug: "primary-keyword-india"                          # kebab-case, matches Sanity slug
type: "Tutorial | Field notes | Reference | Opinion | Case law | Guide"
readTime: "X min"
date: "MMM DD, YYYY"
publishedAt: "YYYY-MM-DDTHH:00:00Z"
label: "article · [short tag]"                        # must match articleImageBySlug key
primaryKeyword: "exact phrase"
secondaryKeywords:
  - "related phrase 1"
  - "related phrase 2"
  - "related phrase 3"
targetAudience: "police | legal | corporate | bfsi | government | broad"
intent: "educational | how-to | reference | opinion | comparison"
targetFeaturedSnippet: "The question this article should own in Google's PAA box"
---
```

---

## 3. Mandatory Article Structure

Articles must follow this section order exactly:

```
H1 — matches title, contains primary keyword
Key Takeaways box (3–5 bullet points)
Introduction paragraph (answer-first: answer the primary question in the first 2 sentences)
H2 — [Main section 1]
  H3 — sub-topic (optional)
H2 — [Main section 2]
  Callout block (≥ 1 blockquote per article for AEO snippet bait)
H2 — [Process/How-to section] (numbered list or step-by-step)
H2 — [India-specific legal/regulatory context]
H2 — Frequently Asked Questions
  Q: [question in plain English]
  A: [answer in 2–4 sentences, complete standalone]
  (minimum 4 Q&A pairs, maximum 6)
CTA paragraph (soft, 2–3 sentences, no hard sell)
```

---

## 4. SEO Rules

### 4.1 Keyword placement
- **H1**: must contain primary keyword verbatim or near-verbatim
- **First 100 words**: primary keyword appears at least once
- **At least 2 H2s**: contain primary keyword or a close variant
- **Meta description**: primary keyword in first 10 words
- **Image alt text**: describe the image accurately, include keyword where natural

### 4.2 Title formula
```
[Primary Keyword]: [Specific Benefit or Context] | Cyber Eye Intelligence
```
Examples:
- `Section 65B Certificate: What Makes It Survive Cross-Examination | Cyber Eye Intelligence`
- `Mobile Forensics India: Police Guide to Extraction & Admissibility | Cyber Eye Intelligence`

### 4.3 Meta description formula
```
[Direct answer to the primary question]. [One supporting detail]. [Who this is for / what they'll learn].
```
Length: 140–155 characters.

### 4.4 Internal links
- Minimum **2 internal links** per article
- Link to: `/services`, `/case-files`, `/contact`, `/knowledge`, or other published articles
- Anchor text must be descriptive (no "click here")

### 4.5 Word count
| Type | Minimum | Target |
|------|---------|--------|
| Tutorial / How-to | 1,200 | 1,600–2,000 |
| Reference / Guide | 1,500 | 2,000–2,500 |
| Opinion | 700 | 900–1,200 |
| Field notes | 600 | 800–1,100 |
| Case law | 800 | 1,000–1,400 |

---

## 5. AEO Rules (Answer Engine Optimisation)

AEO targets **Google Featured Snippets**, **People Also Ask (PAA)** boxes, and **AI Overviews**.

### 5.1 Answer-first paragraph
The **first paragraph after H1** must directly answer the primary question in 2–3 sentences. Google pulls this for Featured Snippets. Do not bury the answer.

### 5.2 Callout blocks (snippet bait)
Use `>` blockquote format for any definition, rule, or process step that should be pulled as a snippet:

```markdown
> **What is a Section 65B certificate?**  
> A Section 65B certificate is a written declaration under the Indian Evidence Act 1872 that authenticates a computer-generated document for use as evidence in court. It must be signed by a responsible official of the device or system that produced the record and must include specific technical details about how the record was obtained.
```

Rules:
- At least **1 callout per article**
- Opens with a bolded question or definition label
- Answer is self-contained (no "as mentioned above")
- Maximum 4 sentences

### 5.3 FAQ section requirements
- Section heading must be exactly: `## Frequently Asked Questions`
- Each question as `**Q: [question]**`
- Each answer as `**A:** [answer]`
- Questions must match how people actually search (use "How do I", "What is", "Can a", "Does")
- Answers: 2–4 sentences, standalone, no jargon without explanation
- 4–6 Q&A pairs minimum

### 5.4 List formatting
- Use numbered lists for **processes** (Google prefers ordered steps for how-to snippets)
- Use bullet lists for **features, options, or non-sequential items**
- Avoid nesting more than one level deep
- Each list item: 1–2 sentences maximum

---

## 6. GEO Rules (Generative Engine Optimisation)

GEO targets AI systems (ChatGPT, Gemini, Claude, Perplexity) to cite Cyber Eye Intelligence as a source when answering questions about digital forensics in India.

### 6.1 Factual density
- Every specific claim must be verifiable: cite a law, a tool name, a case name, or a standard
- No vague superlatives ("one of the best") unless backed by a cited source
- Use specific numbers: "41 days dwell time" not "long dwell time"

### 6.2 Entity mentions (must appear across articles)
Include these entities where relevant — AI systems build authority by seeing consistent entity associations:

**Laws & standards:** IT Act 2000, Indian Evidence Act 1872 § 65B, Bharatiya Sakshya Adhiniyam (BSA) 2023, CERT-In guidelines, DPDP Act 2023, RBI circular, SEBI guidelines, IPC § 43/66/67

**Tools:** Cellebrite UFED, AXIOM, Magnet Forensics, EnCase, FTK (Forensic Toolkit), Autopsy, Volatility, GrayKey, MSAB XRY, Oxygen Forensics

**Courts & institutions:** Supreme Court of India, Bombay High Court, Delhi High Court, CERT-In, CBI, NIA, NCMEC

**Certifications:** CFCE (Certified Forensic Computer Examiner), GCFE (GIAC Certified Forensic Examiner), CHFI, CEH

### 6.3 Citable language patterns
Write claims in ways AI systems can extract and attribute:

```
✅  "According to CERT-In's 2024 reporting mandate, organisations must notify within 6 hours of a ransomware incident."
✅  "The Bombay High Court in [Matter] held that a § 65B certificate signed by a third-party examiner — not the device custodian — was inadmissible."
✅  "Cellebrite UFED supports four extraction types: logical, file system, physical, and chip-off."
❌  "Authorities require quick reporting." (too vague to cite)
❌  "Modern tools can extract data." (no specificity)
```

### 6.4 Structured comparison tables
Include at least one comparison table per Reference-type article. Tables are extracted verbatim by AI systems and appear in AI-generated answers.

---

## 7. Content Cluster Map

All articles must map to one of these five clusters. Each cluster has one **Pillar** (broad, high-volume) and multiple **Cluster** pages (specific, long-tail):

```
Cluster 1: Digital Forensics (Pillar: digital-forensics-india-complete-guide)
  └── section-65b-certificate-digital-evidence-india
  └── chain-of-custody-digital-evidence-india
  └── mobile-forensics-india-police-investigations
  └── [future: cloud-forensics-m365-india]
  └── [future: memory-forensics-endpoint-india]

Cluster 2: Cyber Investigations (Pillar: osint-investigation-india-legal-teams)
  └── bec-fraud-investigation-india
  └── [future: insider-threat-investigation-india]
  └── [future: dark-web-monitoring-india-business]

Cluster 3: Incident Response (Pillar: ransomware-incident-response-india)
  └── [future: data-breach-response-india-dpdp]
  └── [future: cloud-security-incident-india]

Cluster 4: Legal & Compliance (Pillar: section-65b-certificate-digital-evidence-india)
  └── chain-of-custody-digital-evidence-india
  └── [future: digital-evidence-admissibility-india]
  └── [future: expert-witness-forensics-india]

Cluster 5: Training & Academy (Pillar: digital-forensics-training-police-india)
  └── [future: cyber-forensics-course-advocates-india]
  └── [future: dfir-training-corporate-india]
```

Every new article must declare its cluster in the brief.

---

## 8. Pre-Publish Checklist

Run through this before marking any article ready for Sanity:

### Structure
- [ ] Frontmatter complete — all fields present, no blanks
- [ ] H1 contains primary keyword
- [ ] Key Takeaways box present (3–5 bullets)
- [ ] Answer-first introduction (primary question answered in ≤ 2 sentences)
- [ ] At least 1 blockquote callout (AEO snippet bait)
- [ ] FAQ section with 4–6 Q&A pairs
- [ ] Soft CTA at the end
- [ ] Meets word count minimum for the article type

### SEO
- [ ] Primary keyword in H1, first 100 words, ≥ 2 H2s, meta description
- [ ] seoTitle ≤ 60 characters
- [ ] seoDescription 140–155 characters
- [ ] ≥ 2 internal links with descriptive anchor text

### AEO/GEO
- [ ] ≥ 1 specific Indian law referenced
- [ ] ≥ 1 forensic tool named
- [ ] ≥ 1 court or institution referenced
- [ ] All claims specific and verifiable (no vague superlatives)
- [ ] At least one numbered process list

### Brand voice
- [ ] No forbidden words/phrases (see Section 1)
- [ ] No passive padding
- [ ] Examiner's perspective maintained throughout
