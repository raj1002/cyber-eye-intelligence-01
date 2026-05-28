'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const caseFiles = [
  { id: "CE/2025/014", sector: "corporate", label: "Corporate · Mobile", title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.", sub: "2.4 TB examined · § 65B admitted · Mumbai sessions.", imgLabel: "case · IP theft" },
  { id: "CE/2025/008", sector: "bfsi", label: "BFSI · Email", title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.", sub: "Attribution to Lagos-based ring · funds frozen.", imgLabel: "case · BEC fraud" },
  { id: "CE/2025/003", sector: "corporate", label: "Corporate · Insider", title: "Identified data exfiltration through personal cloud — termination upheld.", sub: "17 USB events · 2 SaaS exports · labour tribunal accepted.", imgLabel: "case · insider" },
  { id: "CE/2024/097", sector: "corporate", label: "Corporate · Malware", title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.", sub: "Conti-affiliated · attribution upheld in arbitration.", imgLabel: "case · ransomware" },
  { id: "CE/2024/082", sector: "legal", label: "Legal · Mobile", title: "Reconstructed 6-week location timeline in a contested custody matter.", sub: "Geofencing · cell-site verification · family court accepted.", imgLabel: "case · custody" },
  { id: "CE/2024/061", sector: "ngo", label: "NGO · Cloud", title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.", sub: "M365 audit log · attribution to compromised contractor.", imgLabel: "case · m365" },
  { id: "CE/2024/048", sector: "law-enforcement", label: "Law Enforcement · Mobile", title: "Cell-site triangulation closed a 9-suspect narcotics syndicate.", sub: "23 devices imaged · 4 burner phones decrypted.", imgLabel: "case · narcotics ring" },
  { id: "CE/2024/032", sector: "government", label: "Government · Insider", title: "Traced a ministry document leak to a single endpoint in 9 days.", sub: "USB telemetry · classified handling · auditor accepted.", imgLabel: "case · ministry leak" },
  { id: "CE/2023/118", sector: "healthcare", label: "Healthcare · Malware", title: "Contained a hospital ransomware attack — restored ICU systems in 18 hours.", sub: "No patient data lost · CERT-In incident filing closed.", imgLabel: "case · hospital" },
];

const articles = [
  { type: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.", label: "article · ios 18" },
  { type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel.", label: "article · bec" },
  { type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?", label: "article · m365" },
  { type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't.", label: "article · ai" },
  { type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data.", label: "article · signal" },
  { type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026.", label: "article · 65b" },
];

const whitepapers = [
  { code: "WP-01", title: "Mobile Forensic Acquisition Standards for Indian Courts", sub: "A practitioner's guide to § 65B compliance across iOS and Android extraction workflows.", year: "2026" },
  { code: "WP-02", title: "AI in Digital Forensics — Promise, Peril and the Admissibility Problem", sub: "Where machine learning helps, where it doesn't, and how to keep the examiner in the loop.", year: "2025" },
  { code: "WP-03", title: "Ransomware Attribution: From Malware to the Indictment", sub: "Tracing a full kill chain — infrastructure, crypto wallets, dark web and cross-border coordination.", year: "2025" },
];

const blogs = [
  { date: "May 12, 2026", title: "What the Bombay HC's WhatsApp admissibility ruling means for your next matter.", readTime: "4 min" },
  { date: "Apr 5, 2026", title: "We trained 200 UP Police cyber-crime investigators. Here's what they didn't know.", readTime: "6 min" },
  { date: "Mar 1, 2026", title: "Cellebrite UFED vs. GrayKey in 2026: a practitioner's honest comparison.", readTime: "8 min" },
];

const sectorFilters = [
  { key: "all", label: "All sectors" },
  { key: "law-enforcement", label: "Law Enforcement" },
  { key: "legal", label: "Legal & Litigation" },
  { key: "corporate", label: "Corporate" },
  { key: "government", label: "Government" },
  { key: "bfsi", label: "BFSI & Insurance" },
  { key: "healthcare", label: "Healthcare" },
  { key: "ngo", label: "NGO" },
];

type Tab = 'cases' | 'insights' | 'whitepapers' | 'blogs';

function KnowledgeContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as Tab | null);
  const [tab, setTab] = useState<Tab>(
    initialTab && ['cases', 'insights', 'whitepapers', 'blogs'].includes(initialTab) ? initialTab : 'cases'
  );
  const [sector, setSector] = useState('all');

  useEffect(() => {
    const t = searchParams.get('tab') as Tab | null;
    if (t && ['cases', 'insights', 'whitepapers', 'blogs'].includes(t)) {
      setTab(t);
    }
  }, [searchParams]);

  const visibleCases = sector === 'all' ? caseFiles : caseFiles.filter((c) => c.sector === sector);

  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">Knowledge Centre</span></div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h1 className="display text-6xl lg:text-7xl">Knowledge<br /><span className="text-accent">Centre.</span></h1>
            <p className="text-lg text-mute max-w-md">Casework, field notes, deep references and the occasional opinion — published by working examiners between acquisitions.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(['cases', 'insights', 'whitepapers', 'blogs'] as Tab[]).map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={`pill ${tab === t ? 'pill-on' : ''}`}>
                {t === 'cases' ? 'Case Files' : t === 'insights' ? 'Insights' : t === 'whitepapers' ? 'White Papers' : 'Blogs'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Files tab */}
      {tab === 'cases' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <div className="label mb-3">[ Case Files · Redacted ]</div>
                <h2 className="display text-4xl">Filter by <span className="text-accent">sector.</span></h2>
              </div>
              <div className="text-sm text-mute"><span className="text-white num">{visibleCases.length}</span> of <span className="num">{caseFiles.length}</span> files</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {sectorFilters.map((f) => (
                <button key={f.key} type="button" onClick={() => setSector(f.key)} className={`pill ${sector === f.key ? 'pill-on' : ''}`}>{f.label}</button>
              ))}
            </div>
            {visibleCases.length === 0 ? (
              <div className="text-center py-16 text-mute">
                <div className="display text-3xl mb-2">No matching cases.</div>
                <p className="text-sm">Try a different sector — or <Link href="/contact" className="text-accent">contact us</Link> about a precedent like yours.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCases.map((c) => (
                  <Link key={c.id} href="/contact" className="group block">
                    <div className="ph aspect-[5/4] rounded-card mb-5 card-hover" data-label={c.imgLabel} />
                    <div className="flex items-center gap-3 label mb-3">
                      <span className="text-accent">{c.id}</span><span>·</span><span>{c.label}</span>
                    </div>
                    <h3 className="text-xl leading-snug group-hover:text-accent transition">{c.title}</h3>
                    <p className="text-sm text-mute mt-2">{c.sub}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Insights tab */}
      {tab === 'insights' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="label mb-10">[ Insights · From the lab ]</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a, i) => (
                <Link key={i} href="/contact" className="group block">
                  <div className="ph aspect-[5/3] rounded-card mb-5 card-hover" data-label={a.label} />
                  <div className="label mb-3">{a.type} · {a.readTime} · {a.date}</div>
                  <h3 className="text-xl font-medium leading-snug group-hover:text-accent transition">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* White Papers tab */}
      {tab === 'whitepapers' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="label mb-10">[ White Papers · Technical reference ]</div>
            <div className="grid md:grid-cols-2 gap-6">
              {whitepapers.map((w) => (
                <div key={w.code} className="card card-hover p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="mono text-accent text-xs">{w.code} · {w.year}</div>
                    <span className="hex" />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 leading-snug">{w.title}</h3>
                  <p className="text-mute leading-relaxed mb-8">{w.sub}</p>
                  <Link href="/contact" className="mono text-xs text-accent uppercase tracking-wider">Download PDF →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blogs tab */}
      {tab === 'blogs' && (
        <section className="py-16">
          <div className="max-w-page mx-auto px-6 lg:px-10">
            <div className="label mb-10">[ Blog · Lab notes ]</div>
            <div className="space-y-4">
              {blogs.map((b, i) => (
                <Link key={i} href="/contact" className="card card-hover p-7 flex items-center justify-between gap-6 group block">
                  <div className="flex-1">
                    <div className="label mb-3">{b.date} · {b.readTime}</div>
                    <h3 className="text-xl font-medium group-hover:text-accent transition">{b.title}</h3>
                  </div>
                  <div className="mono text-accent text-sm flex-shrink-0">Read →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function KnowledgePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-mute">Loading…</div>}>
      <KnowledgeContent />
    </Suspense>
  );
}
