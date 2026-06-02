---
title: "Ransomware Incident Response in India: The 72-Hour Playbook for CISOs and Corporate Counsel"
seoTitle: "Ransomware Incident Response India — 72-Hour Playbook for CISOs 2025"
seoDescription: "A structured ransomware response guide for Indian organisations — 72-hour playbook, forensic preservation vs recovery tension, dwell time analysis, ransom payment under Indian law, and evidence for FIR and CERT-In reporting."
slug: "ransomware-incident-response-india"
type: "article"
readTime: "11 min"
publishedAt: "2025-06-01"
primaryKeyword: "ransomware incident response India"
secondaryKeywords:
  - "ransomware attack India"
  - "CERT-In incident reporting India"
  - "ransomware forensics India"
  - "cyber insurance ransomware India"
  - "ransomware FIR India"
targetAudience: "CISOs, IT heads, corporate counsel, board members"
---

# Ransomware Incident Response in India: The 72-Hour Playbook for CISOs and Corporate Counsel

India ranked among the top five most ransomware-targeted nations in 2024, with attacks on manufacturing, healthcare, BFSI, and government infrastructure making front-page news. The average ransom demand in India-targeted attacks exceeded USD 2.5 million, and dwell time — the period attackers spent in the network before deploying the encryption payload — averaged 21 days. That last figure is the critical one: by the time the ransom note appears on your screen, the attackers have almost certainly exfiltrated data, established persistence mechanisms, and compromised backup systems. This guide provides Indian CISOs, IT heads, and corporate counsel with a structured, legally informed response playbook.

---

> **Key Takeaways**
> - CERT-In's 2022 direction requires incident reporting within **6 hours** of discovery — a non-negotiable legal obligation.
> - Contain first, preserve second, recover third. The sequence matters: recovery before forensic preservation can permanently destroy evidence needed for prosecution and insurance claims.
> - Forensic investigation must establish: initial access vector, dwell time, data exfiltrated, and whether backups were compromised — before any recovery decision is made.
> - Ransom payment is not explicitly illegal in India but carries sanctions risk, regulatory disclosure obligations, and no guarantee of decryption. Engage legal counsel before any payment.
> - Cyber insurance policies routinely deny claims where the insured cannot demonstrate incident response discipline — which means a documented forensic process.

---

## The First 30 Minutes: Triage and Isolation

The most consequential decisions in a ransomware incident are made in the first thirty minutes — often in a state of shock, with incomplete information and enormous pressure to "just restore from backup." Resisting that pressure long enough to follow the correct sequence can be the difference between a contained incident and a catastrophic one.

### Immediate Actions (0–30 Minutes)

1. **Do not power off affected systems** — Powering off destroys volatile memory (RAM), which may contain the encryption keys, the malware binary itself, and active network connections to the attacker. Memory forensics (Volatility Framework) can recover this critical evidence from a running or recently suspended system.
2. **Isolate from the network, not the power** — Disconnect affected systems from the network (unplug the network cable, disable the switch port) without powering them down. Use the network kill switch, not the power button.
3. **Identify the blast radius** — Determine which systems are affected and which are not, without touching potentially affected systems further. This often means checking the network monitoring dashboard, not the affected endpoints themselves.
4. **Preserve one encrypted system untouched** — Designate at least one affected system as a forensic evidence system. Do not attempt recovery on this system. It will be used for forensic examination.
5. **Notify legal counsel and the CISO immediately** — Do not notify the broader organisation until the communication strategy is decided. Panicked communications create secondary problems.

---

## The 72-Hour Playbook

### Hours 0–6: Triage, Isolation, and Mandatory Notification

**CERT-In Reporting:** Under the CERT-In directions of April 2022 (issued under Section 70B of the IT Act 2000), all organisations — including private entities — must report a ransomware attack to CERT-In within **6 hours** of detection. Required disclosure includes: nature of incident, affected systems, data involved, and initial mitigations taken. Failure to report is a compliance offence. The reporting portal is at **https://www.cert-in.org.in**.

**CERT-In notification does not preclude parallel actions** — filing an FIR, notifying insurers, or engaging forensic experts can proceed simultaneously.

**Engage forensic incident response** — An IR team should be on-site or remote within this window to begin memory acquisition, log preservation, and network capture.

### Hours 6–24: Forensic Preservation

This phase is the most contested in practice, because the business wants to restore operations and the forensic team needs time to gather evidence. The correct answer is a structured compromise:

1. **Memory acquisition** — RAM dumps from all affected servers that are still running, using **Magnet RAM Capture** or **WinPmem**. This takes minutes per system.
2. **Network traffic preservation** — Capture and preserve firewall logs, proxy logs, DNS query logs, and any available NetFlow data for at least 90 days prior to the incident.
3. **Log preservation** — Windows Event Logs, Sysmon logs, Active Directory authentication logs, VPN logs, and email security gateway logs for the 30 days prior to the incident. These are the primary evidence of the initial access and lateral movement.
4. **Forensic imaging of selected systems** — Full disk images (via **FTK Imager** or **EnCase**) of the most forensically significant systems: the first encrypted system identified, Active Directory domain controllers, and any system with the ransom note.
5. **Backup assessment** — Are backups intact? Are they offline (air-gapped), or were they also encrypted? If backup infrastructure is on the same domain, assume it is compromised.

### Hours 24–72: Threat Actor Identification and Recovery Decision

- **Malware analysis** — Identify the ransomware variant. Known variants (LockBit, BlackCat/ALPHV, Cl0p) have known decryptors for older versions available at **nomoreransom.org** — check before paying.
- **Dwell time analysis** — Using preserved logs and Volatility analysis, establish when the attacker first gained access. This tells you how far back your backup restore point must be to avoid restoring already-compromised systems.
- **Exfiltration assessment** — Review outbound network traffic and DLP logs to determine whether data was exfiltrated before encryption. This drives the data breach notification obligations.
- **Attack vector identification** — Was the initial access via a phishing email, an unpatched RDP exposure, a compromised VPN credential, or a supply-chain compromise? This determines your remediation steps.

> **What should an Indian company do in the first 6 hours of a ransomware attack?** Isolate affected systems from the network without powering them down (to preserve RAM forensics), preserve logs and memory dumps, notify CERT-In within the 6-hour mandatory window, engage a forensic incident response team, and do not attempt recovery on any system that will be forensically examined. The sequence — contain, preserve, then recover — is critical.

---

## Forensic Preservation vs Recovery: Managing the Tension

The most operationally tense moment in any ransomware response is the conflict between the business's demand for rapid recovery and the forensic team's need for evidence preservation. Both imperatives are legitimate and legally significant — and both can be satisfied, with a structured approach.

**What the business needs:** Production systems back online as fast as possible. Every hour of downtime has a measurable cost, which is why ransomware operators time attacks for weekends or payroll periods.

**What forensic preservation needs:** An unmodified copy of the affected environment — memory, logs, and disk images — before any recovery actions contaminate the evidence.

**The resolution:** Forensic imaging of the most critical systems (typically 4–8 hours for a well-resourced IR team) can proceed in parallel with recovery of the lowest-priority systems. The key is a written triage decision — agreed between the CISO, legal counsel, and the forensic team — on which systems are forensically designated and which can be rebuilt immediately.

---

## Ransom Payment: Legal and Practical Considerations in India

### Is Paying a Ransom Illegal in India?
There is no provision of the IT Act 2000, the BNS, or any specific regulation that makes payment of a ransom to a cybercriminal explicitly illegal. However:

- **OFAC sanctions risk (US):** If the attacker is a sanctioned entity (common — LockBit, Cl0p, and BlackCat operators have been sanctioned by OFAC), payment by an Indian entity that has US touchpoints, uses USD, or transacts through US correspondent banks may trigger OFAC violations. Legal counsel with US sanctions expertise should be engaged before any payment.
- **PMLA implications:** Large cryptocurrency payments could trigger PMLA (Prevention of Money Laundering Act) scrutiny, particularly for BFSI entities.
- **Insurance implications:** Many cyber insurance policies exclude ransom payments made without prior insurer approval, or exclude decryption failures after payment.
- **No guarantee of decryption:** Research consistently shows that roughly 20% of organisations that pay a ransom do not receive a working decryptor. And paying signals to the attacker that you will pay again.

**Practical guidance:** Treat ransom payment as a last resort after all decryptor, backup, and reconstruction options have been exhausted, and only after legal counsel, the insurer, and a forensic advisor have all been consulted.

---

## Evidence Required for FIR and Insurance Claim

### For Filing an FIR
The FIR should be filed with the local cyber cell or economic offences wing. Required evidence:
- Forensic report identifying the ransomware variant, initial access vector, and attack timeline.
- Preserved ransom note (with hash verification).
- Network logs and malware samples.
- Financial loss calculation.
- CERT-In complaint number.

### For Insurance Claim
Cyber insurance underwriters in India now require:
- CERT-In notification acknowledgement.
- Forensic IR report from a reputable firm documenting the incident scope and response.
- Evidence that reasonable security controls were in place pre-incident (firewall logs, patch management records, EDR deployment).
- Chain-of-custody documentation for preserved evidence.

Insurers have denied claims where the organisation's own actions post-attack (e.g., wiping affected systems before any forensic preservation) made the scope of the incident impossible to establish.

---

## Post-Incident: Hardening and Regulatory Obligations

### Regulatory Notifications Beyond CERT-In
- **RBI-regulated entities:** Must notify the RBI's Cyber Security and IT Examination (CSITE) cell within 6 hours.
- **SEBI-regulated entities:** Material cyber incidents require disclosure under SEBI's cybersecurity framework for market infrastructure institutions.
- **IRDAI-regulated entities:** Insurance companies must notify IRDAI as a material operational risk event.
- **DPDP Act 2023:** A ransomware attack almost always constitutes a personal data breach under the Digital Personal Data Protection Act 2023 — triggering notification obligations to the Data Protection Board of India when it becomes operational.

---

## Frequently Asked Questions

**Q: Does CERT-In really enforce the 6-hour reporting window?**
A: CERT-In has issued notices to organisations for non-compliance with its 2022 direction. The regulatory exposure for non-reporting is real, and it is compounded if the failure to report is later characterised as deliberate concealment — relevant in insurance and civil litigation contexts.

**Q: Should we restore from backup before the forensic team finishes?**
A: Not from the forensically designated systems. For systems that are clearly not in scope for the forensic investigation, recovery can proceed in parallel. The forensic team should provide a written triage decision within 4–6 hours of engagement specifying which systems are designated evidence systems.

**Q: How do attackers typically get into Indian corporate networks?**
A: The three most common initial access vectors in India-targeted ransomware: (1) phishing emails with malicious attachments or links, exploiting remote desktop protocol (RDP) exposed to the internet with weak or stolen credentials, and (3) compromised VPN credentials (often from stealer malware or prior phishing). Unpatched vulnerabilities in public-facing applications (Fortinet, Citrix, Ivanti) have also been heavily exploited by ransomware groups.

**Q: What is "double extortion" and does it affect the evidence strategy?**
A: Double extortion — where attackers both encrypt files and exfiltrate data, threatening to publish it if ransom is not paid — is now the norm rather than the exception. It means that even if you have intact backups and do not need to pay for decryption, you still face a data breach scenario. The forensic investigation must determine what data was exfiltrated and when.

**Q: Can we trace where the ransom demand came from?**
A: The ransom note typically includes a Tor (.onion) address for negotiation. Threat actor identification is possible through malware analysis (code similarities to known variants), infrastructure analysis (C2 server characteristics), and OSINT on the leak site where exfiltrated data is threatened to be published. Law enforcement agencies including CBI and state cyber cells have international cooperation channels with Europol, Interpol, and FBI for major ransomware cases.

---

Cyber Eye Intelligence provides 24/7 ransomware incident response from Mumbai, with satellite coverage in Bengaluru and Delhi. Our IR team deploys memory acquisition, log preservation, and malware analysis within hours of engagement — before recovery actions contaminate the evidence. We deliver the forensic report and CERT-In compliance documentation, support the FIR filing, and prepare the evidence package for your insurer. Call our incident response line the moment you see the ransom note — do not wait until business hours.
