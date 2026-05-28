'use client';

import Link from 'next/link';
import { useRef } from 'react';

const articles = [
  { type: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.", label: "article · ios 18 acquisitions" },
  { type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel.", label: "article · bec headers" },
  { type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?", label: "article · m365 logs" },
  { type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't.", label: "article · ai forensics" },
  { type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data.", label: "article · signal android" },
  { type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026.", label: "article · § 65b ruling" },
];

export default function InsightsRow() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <>
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="label mb-4">[ Insights · From the lab ]</div>
            <h2 className="display text-5xl lg:text-6xl">Latest <span className="text-accent">writing.</span></h2>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" className="insights-arrow" onClick={() => scroll(-1)} aria-label="Previous">←</button>
            <button type="button" className="insights-arrow" onClick={() => scroll(1)} aria-label="Next">→</button>
            <Link href="/knowledge" className="mono text-sm uppercase tracking-wider text-accent ml-2">All →</Link>
          </div>
        </div>
      </div>
      <div className="insights-track-wrap" ref={trackRef}>
        <div className="insights-track">
          {articles.map((a, i) => (
            <Link key={i} href="/knowledge" className="insight-card group">
              <div className="ph aspect-[5/3] rounded-card mb-5 card-hover" data-label={a.label} />
              <div className="label mb-3">{a.type} · {a.readTime} · {a.date}</div>
              <h3 className="text-xl font-medium leading-snug group-hover:text-accent transition">{a.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
