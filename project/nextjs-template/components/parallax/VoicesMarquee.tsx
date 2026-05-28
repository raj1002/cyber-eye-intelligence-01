'use client';

const testimonials = [
  { q: "Their § 65B certificate held under cross-examination. The opposing expert couldn't dent a single hash.", name: "Adv. R. Subramanian", role: "Senior Counsel · Bombay HC" },
  { q: "Cyber Eye trained 40 of our investigators on mobile triage. We've cleared our backlog of seized devices for the first time in three years.", name: "Inspector M. Khan", role: "Cyber Crime · State Police" },
  { q: "Discreet, fast, methodical. Their insider investigation report became our HR action playbook for the next two years.", name: "P. Mehrotra", role: "CISO · Listed Bank" },
  { q: "Their cloud forensics work surfaced an audit trail nobody on our team thought still existed. M365 retention has never looked the same.", name: "S. Iyer", role: "Head of Legal · SaaS firm" },
  { q: "BEC fraud worth ₹4.6 crore traced across three jurisdictions in eleven days. The funds were frozen in time.", name: "N. Rao", role: "CFO · Listed NBFC" },
  { q: "Twin-examiner review caught a discrepancy our internal team missed. That single line in their report changed the matter outcome.", name: "Adv. K. Joshi", role: "Partner · Disputes practice" },
];

export default function VoicesMarquee() {
  const cards = [...testimonials, ...testimonials];
  return (
    <div className="voices-track-wrap">
      <div className="voices-track">
        {cards.map((t, i) => (
          <div key={i} className="voice-card" aria-hidden={i >= testimonials.length ? true : undefined}>
            <div className="text-accent text-5xl leading-none mb-4">&ldquo;</div>
            <p className="text-lg leading-relaxed mb-8">{t.q}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-line">
              <div className="w-10 h-10 rounded-pill bg-surface2 border border-line flex-shrink-0" />
              <div>
                <div className="text-sm">{t.name}</div>
                <div className="label">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
