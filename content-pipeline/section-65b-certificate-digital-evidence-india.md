---
title: "Section 65B Certificate for Digital Evidence in India: Complete Legal Guide (2025)"
seoTitle: "Section 65B Certificate Digital Evidence India – Complete Guide 2025"
seoDescription: "Everything advocates and legal heads need to know about Section 65B certificates: who can issue them, what courts require, common cross-examination pitfalls, and the latest Supreme Court rulings."
slug: "section-65b-certificate-digital-evidence-india"
type: "article"
readTime: "9 min"
publishedAt: "2025-07-01"
primaryKeyword: "section 65B certificate digital evidence"
secondaryKeywords:
  - "65B Indian Evidence Act"
  - "electronic evidence admissibility India"
  - "digital evidence certificate India"
  - "section 65B compliance"
  - "electronic record court admissible"
targetAudience: "Advocates, corporate legal heads, compliance officers"
---

# Section 65B Certificate for Digital Evidence in India: Complete Legal Guide (2025)

Electronic evidence now dominates Indian litigation — from WhatsApp screenshots in matrimonial disputes to server logs in BFSI fraud cases. Yet the single most common reason digital evidence fails in Indian courts is not the evidence itself, but a defective or absent Section 65B certificate.

This guide explains exactly what a Section 65B certificate is, who has the legal standing to sign one, what courts scrutinise during cross-examination, and how the Supreme Court's recent rulings have sharpened the requirements.

---

> **Key Takeaways**
> - Section 65B of the Indian Evidence Act 1872 is the mandatory gateway for admitting any computer-generated electronic record as secondary evidence.
> - Only the "responsible official" who was in control of the computer at the time the record was produced can sign the certificate — not any IT employee.
> - A defective certificate cannot be cured after the fact; it results in the evidence being inadmissible.
> - The Supreme Court in *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal* (2020) confirmed that a 65B certificate is mandatory at the time of tendering — not as an afterthought.
> - Forensic examiners who create a certified true copy from original media must themselves comply with 65B before handing evidence to counsel.

---

## What Is a Section 65B Certificate?

Section 65B of the Indian Evidence Act 1872 (as amended by the Information Technology Act 2000) provides the statutory framework for admitting "electronic records" as evidence. Because an electronic record is inherently intangible, the law requires a printed or otherwise reproduced version — the secondary evidence — to be accompanied by a certificate that authenticates its origin and integrity.

The certificate must state:
1. That the computer output was produced by a computer that was in regular use during the relevant period.
2. That the computer was operating properly during that period (or, if not, that any malfunction did not affect the output).
3. That the information was fed into the computer in the ordinary course of the relevant activity.
4. That the output reproduces or is derived from information supplied to the computer.

Without satisfying all four limbs, the certificate — and therefore the evidence — will not survive a serious objection.

---

## Who Can Sign the Certificate?

### The "Responsible Official" Requirement

This is where most corporate and government certificates fail. Section 65B(4) specifies that the certificate must be signed by a person "occupying a responsible official position in relation to the operation of the relevant device or management of the relevant activities."

In practical terms:

- **For a corporate server log**: the CISO, Head of IT Operations, or the system administrator who managed the server — not external counsel, not a third-party auditor.
- **For a mobile device**: the person responsible for managing the device fleet (in a BYOD context, this becomes legally complex).
- **For cloud-hosted data (AWS, Azure, GCP)**: the authorised representative of the Indian entity that controls the cloud account, not the cloud provider.
- **For seized devices in police custody**: the police officer who took custody of the device and, separately, the forensic examiner who produced the output from it.

### Can a Forensic Examiner Sign?

Yes — if the forensic examiner was the one who operated the computer (forensic workstation) that produced the output (the forensic report or extracted data). In practice, well-run forensic labs produce a 65B certificate as a routine deliverable alongside each report. This is distinct from the certificate that must accompany the original evidence at the point of seizure.

---

## The Supreme Court's Key Rulings

### *Anvar P.V. v. P.K. Basheer* (2014)

The Supreme Court overruled earlier precedent and held that electronic records **cannot** be admitted as primary evidence without a 65B certificate. The certificate is a condition precedent, not a procedural technicality.

### *Shafhi Mohammad v. State of Himachal Pradesh* (2018)

A two-judge bench created confusion by allowing courts to dispense with 65B where the original device was before the court. This was widely misapplied.

### *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal* (2020)

A three-judge bench authoritatively settled the position:
- The *Shafhi Mohammad* relaxation applies **only** when the original device is produced before the court and the court can inspect it directly.
- Where secondary evidence (printouts, copies, screenshots) is produced, a 65B certificate is non-negotiable.
- The certificate must be furnished at the time of tendering the evidence — not later, not as a reply to an objection.

### Post-2024 Developments

Indian courts have increasingly scrutinised the technical accuracy of 65B certificates, particularly regarding hash values. Several High Court judgements (including from the Bombay HC) have held that where a forensic examiner produces a hash-verified copy of a hard drive, the 65B certificate must include the hash values of both the original and the copy, along with the algorithm used (typically SHA-256 or MD5).

> **AEO Snippet:** A Section 65B certificate in India must be signed by the person who was in control of the computer that produced the electronic record, must address all four statutory conditions in Section 65B(2), and must be produced at the time of tendering the evidence — not at a later stage. Post-2020 Supreme Court rulings make this requirement absolute.

---

## What Courts Scrutinise in Cross-Examination

### 1. Signatory's Actual Authority
Opposing counsel will probe whether the signatory genuinely "occupied a responsible official position." HR letters, employment contracts, and system-access logs are routinely demanded.

### 2. Continuity of System Operation
The certificate must cover the entire period during which the relevant data was generated and stored. A gap — even a routine maintenance window — must be explained.

### 3. Hash Value Integrity
Modern cross-examination regularly challenges whether the output being tendered matches the original. Without documented hash verification, this challenge is hard to defeat.

### 4. Chain of Custody Pre-Certificate
Courts are increasingly asking: who had access to the device or data between the event and the time the output was produced? Any undocumented access breaks the integrity argument.

### 5. Software and Hardware Specification
Section 65B(4)(c) requires the certificate to describe the computer. Courts have excluded certificates that give vague descriptions ("company server") rather than verifiable hardware/software specifications.

---

## Common Certificate Failures and How to Avoid Them

| Failure Mode | Why It Happens | Prevention |
|---|---|---|
| Wrong signatory | Legal team drafts certificate and asks nearest IT person to sign | Identify responsible official before evidence is collected |
| Missing hash values | In-house IT lacks forensic discipline | Engage a certified forensic examiner with 65B experience |
| Incorrect date range | Certificate covers report date, not event date | Certificate must cover the period of data generation |
| Vague device description | Boilerplate template used | Forensic examiner documents hardware/software at time of imaging |
| Tendered late | Certificate produced after objection is raised | 65B certificate must accompany the evidence from the outset |

---

## 65B in Practice: A Forensic Examiner's Checklist

A properly documented 65B certificate package from a forensic lab should include:

1. The certificate itself, addressing all four conditions in 65B(2).
2. Full hardware and software inventory of the forensic workstation.
3. Hash values (MD5 and SHA-256) of the original evidence and the forensic copy.
4. Write-blocker usage log confirming no writes were made to the original.
5. Chain of custody documentation from seizure to output.
6. Forensic tool validation logs (e.g., EnCase or FTK acquisition verification reports).
7. Examiner's credentials (certifications such as CHFI, CCE, or equivalent).

---

## Frequently Asked Questions

**Q: Is a Section 65B certificate required for WhatsApp screenshots?**
Yes. A WhatsApp screenshot is a computer output — it is produced by a device (smartphone) operating a computer program. It requires a 65B certificate from the person who operated the device and produced the screenshot, addressing all four statutory conditions.

**Q: Can a 65B certificate be filed after the evidence is tendered?**
No. The Supreme Court in *Arjun Panditrao Khotkar* (2020) held that the certificate must be produced at the time of tendering. However, if the other party does not object at that stage, the objection may be waived. Do not rely on this — always file the certificate with the evidence.

**Q: What happens if the original device is available?**
Under the *Arjun Panditrao* judgment, if the original device is physically produced before the court for inspection, the court may dispense with the 65B certificate for that specific evidence. In practice, this is rare and risky — producing the original device may create its own custody and integrity problems.

**Q: Does a 65B certificate guarantee admissibility?**
No. The certificate is a gateway condition. The court will still consider relevance, probative value, and potential prejudice. The certificate satisfies the admissibility requirement under the Evidence Act; it does not determine the weight the court gives the evidence.

**Q: Who should engage a forensic expert for a 65B certificate — the client or the advocate?**
The advocate typically identifies the need and advises the client, but the certificate must be signed by someone with direct knowledge of the computer system — not the advocate. Engaging a certified forensic examiner ensures the technical and legal requirements are simultaneously met.

**Q: Can a 65B certificate be challenged even if it appears technically correct?**
Yes. Courts may look behind the certificate to verify that the signatory genuinely had the requisite authority and knowledge. A certificate signed by a person who merely holds a title without operational control can be challenged successfully.

---

## Work with a Certified Section 65B Expert

Cyber Eye Intelligence provides court-ready Section 65B certification as a standard deliverable on every forensic engagement. Our examiners hold CHFI, CCE, and Cellebrite certifications, and our certificates have been accepted in proceedings before the Bombay High Court and multiple Sessions Courts across Maharashtra. We work directly with advocates and in-house legal teams — no account managers, examiner-led engagement from instruction to testimony.

Contact us to discuss your matter in confidence.
