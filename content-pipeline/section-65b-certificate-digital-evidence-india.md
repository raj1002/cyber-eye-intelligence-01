---
title: "Section 65B Certificate for Digital Evidence: The Complete Legal Guide (2025)"
seoTitle: "Section 65B Certificate Digital Evidence India — Complete Guide 2025"
seoDescription: "Everything advocates and legal heads need to know about Section 65B certificates — who can issue them, what courts require, common failures, and 2024–2025 Supreme Court rulings."
slug: "section-65b-certificate-digital-evidence-india"
type: "article"
readTime: "9 min"
publishedAt: "2025-06-01"
primaryKeyword: "section 65B certificate digital evidence"
secondaryKeywords:
  - "section 65B Indian Evidence Act"
  - "digital evidence admissibility India"
  - "electronic evidence certificate India"
  - "65B certificate cross-examination"
  - "Arjun Panditrao Supreme Court"
targetAudience: "Advocates, corporate legal heads, compliance officers"
---

# Section 65B Certificate for Digital Evidence: The Complete Legal Guide (2025)

Digital evidence — call detail records, WhatsApp messages, email threads, CCTV footage — appears in virtually every commercial dispute, criminal prosecution, and matrimonial matter in India today. Yet cases are routinely dismissed, or prosecution collapses at the appellate stage, not because evidence was fabricated, but because the Section 65B certificate was defective. This guide explains what the certificate must contain, who can lawfully issue it, and how opposing counsel will attack it.

---

> **Key Takeaways**
> - A Section 65B(4) certificate is a mandatory precondition for admitting any computer-generated document as secondary evidence in an Indian court.
> - The certificate must be issued by a *responsible official* with lawful control over the computer that produced the output — not by a forensic examiner or IT vendor.
> - The Supreme Court in *Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal* (2020) made the certificate a non-waivable requirement.
> - Common failure modes: wrong certifier, missing hash values, vague system description, absent operational continuity declaration.
> - Forensic examiners support certification through hash verification and chain-of-custody documentation — but cannot replace the Section 65B certifier.

---

## What Is Section 65B of the Indian Evidence Act?

Section 65B was inserted into the Indian Evidence Act 1872 by the Information Technology Act 2000, recognising that original electronic records cannot always be physically produced before a court. The section creates a mechanism to admit a *computer output* (a printout, screenshot, or exported log) as secondary evidence, provided four conditions under sub-section (2) are met and a certificate under sub-section (4) accompanies the production.

### The Four Conditions Under Section 65B(2)

1. **Regular use** — The computer was used regularly to store or process information for activities that produced the document in question.
2. **Proper working order** — The computer functioned correctly, or any malfunction did not affect the accuracy of the relevant output.
3. **Consistent input** — Information was fed into the computer in the ordinary course of those activities.
4. **Accurate reproduction** — The output accurately reproduces the information stored in the computer.

If any condition cannot be honestly certified, the output is inadmissible under Section 65B.

---

## Who Can Issue a Section 65B Certificate?

This is where most certificates fail. Section 65B(4) specifies the certifier must be a person *occupying a responsible official position in relation to the operation of the relevant device or the management of relevant activities*.

### Persons Who CAN Certify
- A bank's Chief Technology Officer certifying a transaction log from the bank's core banking system.
- A telecom company's nodal officer certifying call detail records (CDRs).
- An organisation's IT head certifying email server exports from their own Exchange or Google Workspace environment.
- A government department's officer in charge of the relevant computer system.

### Persons Who CANNOT Certify
- A private forensic examiner who received a hard disk copy.
- An IT vendor who performed data migration.
- An advocate or their client who simply received the output.
- A police officer who seized a device but does not manage the original source system.

> **What makes a Section 65B certificate valid in India?** A valid certificate must be signed by a person with lawful authority and technical responsibility over the computer system that generated the output — identifying the system by hardware and software details, declaring its operational continuity, and including SHA-256 hash values of the exported file. The Supreme Court confirmed in *Arjun Panditrao* (2020) that this is a non-waivable condition precedent to admissibility.

---

## Supreme Court Rulings: The Evolving Landscape

### Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020)

The Supreme Court's three-judge bench settled a decade of conflicting High Court decisions. Key holdings:

- The certificate under Section 65B(4) is a condition precedent to admissibility — not a technicality that can be waived.
- The certificate may be obtained at any time before the document is formally exhibited in evidence, including at the appellate stage.
- Courts cannot invoke Section 65 of the Evidence Act as an alternative route to admit electronic evidence without a Section 65B certificate.

### Bombay High Court Developments Post-2020

The Bombay HC has held in several post-2021 matters that a certificate accompanying a WhatsApp screenshot must specifically identify: (a) the device from which the export was made, (b) the software used to export, and (c) the IMEI or device serial number. Screenshots taken by photographing a screen — rather than exported via WhatsApp's own "Export Chat" function — have been excluded as failing the "computer output" requirement.

### The Bharatiya Sakshya Adhiniyam 2023 (Effective 1 July 2024)

The BSA, which replaces the Indian Evidence Act, preserves and expands the Section 65B framework under Section 63. Additions include:
- A requirement to disclose the software environment used to generate the output.
- Explicit coverage of cloud-stored electronic records.
- Transitional note: cases filed before 1 July 2024 continue to be governed by the Indian Evidence Act.

---

## Anatomy of a Compliant Section 65B Certificate

A robust certificate should contain these eight elements:

1. **Identity of certifier** — full name, designation, and role demonstrating "responsible official" status.
2. **Description of the computer system** — make, model, OS, software version; for servers: hostname, IP, virtualisation environment.
3. **Period of operation** — date range during which the computer was in regular use producing the relevant data.
4. **Operational continuity declaration** — affirmation of correct operation, or disclosure of any malfunction and its effect on accuracy.
5. **Description of the output** — precise identification of the certified document (file name, hash value, page count, export date).
6. **Hash values** — SHA-256 or MD5 hash of the exported file. This is the forensic anchor connecting the certificate to a specific, unaltered file.
7. **Input accuracy statement** — confirmation that data was entered in the ordinary course of activity.
8. **Signature and date** — executed under penalty of providing false evidence under Section 229 BNS (formerly Section 193 IPC).

---

## How Section 65B Certificates Fail Cross-Examination

### Attack 1: Wrong Person Certifying
Opposing counsel will probe whether the certifier truly had lawful operational responsibility over the source system. An outsourced vendor or forensic lab that received a copy is vulnerable.

### Attack 2: Missing or Mismatched Hash Values
Without a hash value, there is no mechanism to prove the document tendered in court is identical to what was exported. A hash stated in the certificate that does not match the filed exhibit is frequently leveraged to allege tampering.

### Attack 3: Vague System Description
A certificate describing only "the company's computer system" cannot allow the court to assess the four Section 65B(2) conditions. Courts have returned documents on this ground alone.

### Attack 4: No Operational Continuity Declaration
Ignoring system malfunctions, maintenance windows, or NTP clock-synchronisation errors during the relevant period opens the door to attacking the accuracy of timestamps — often the most critical element in fraud and conspiracy matters.

### Attack 5: Cloud and Third-Party Systems
Where data originates in a third-party cloud — Google Workspace, Microsoft 365, or WhatsApp's servers — opposing counsel will argue the original record remains with the cloud provider, requiring either a separate custodian certificate or a court-directed production order.

---

## The Role of a Forensic Examiner

A certified forensic examiner does not issue the Section 65B certificate but provides indispensable technical support:

- **Write-blocked imaging** of the source device before any export, preserving original state.
- **Hash generation and verification** at every stage of the evidence lifecycle.
- **Chain-of-custody documentation** supporting the certifier's operational continuity declaration.
- **Expert report** explaining the forensic process, filed alongside the certificate.
- **Certifier preparation** — briefing the IT officer on precisely what they are attesting to, so cross-examination cannot dislodge the certificate on technical grounds.

---

## Frequently Asked Questions

**Q: Is a Section 65B certificate required when the original device itself is produced in court?**
A: No. The Supreme Court in *Arjun Panditrao* clarified that if the original device or storage medium is produced under Section 65 of the Evidence Act, no Section 65B certificate is needed. In practice, however, courts almost always receive an *output* — a printout or export — making the certificate mandatory.

**Q: Can a Section 65B certificate be obtained after the document has already been filed?**
A: Yes. The Supreme Court held the certificate may be provided at any stage before the document is formally exhibited. Obtaining it early nonetheless avoids adjournments and demonstrates evidentiary discipline.

**Q: What if the opposing party does not object to electronic evidence tendered without a certificate?**
A: Post-*Arjun Panditrao*, admissibility under Section 65B is a mandatory statutory condition. Courts are expected to enforce it regardless of whether the opposing party objects at trial.

**Q: Does the Bharatiya Sakshya Adhiniyam 2023 change the certificate requirements?**
A: Section 63 BSA retains the Section 65B framework and adds a requirement to disclose the software environment and explicitly covers cloud-stored records. Cases filed from 1 July 2024 are governed by the BSA.

**Q: Can WhatsApp chats be admitted as evidence in Indian courts?**
A: Yes, but the route to admissibility is technical. The export must use WhatsApp's own "Export Chat" function (not a screenshot), a Section 65B certificate must be issued by the person who controlled the device at export, and hash verification should accompany the certificate.

**Q: What should a corporate legal head do when anticipating litigation involving internal emails?**
A: Engage a forensic firm immediately — before any IT changes are made to the mail server. A qualified examiner can image the relevant mailboxes in a forensically sound manner, generate hash values, and brief your IT head on what the Section 65B certificate must cover.

---

Cyber Eye Intelligence works with advocates and corporate legal teams across India to build Section 65B-compliant evidence packages that withstand adversarial cross-examination. Our certified examiners work directly with your client's responsible IT officers, draft certificate language that satisfies the eight-element standard, provide hash verification reports, and are available to give expert testimony in the Bombay High Court, Supreme Court, and commercial courts nationwide. If digital evidence is central to your matter, speak with one of our examiners before you file.
