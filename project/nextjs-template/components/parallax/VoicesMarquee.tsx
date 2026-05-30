'use client';

import type { SanityTestimonial } from '@/lib/sanity';

const FALLBACK: SanityTestimonial[] = [
  { _id: '1', _type: 'testimonial', quote: "Their § 65B certificate held under cross-examination. The opposing expert couldn't dent a single hash.", author: "Adv. R. Subramanian", firm: "Senior Counsel · Bombay HC" },
  { _id: '2', _type: 'testimonial', quote: "Cyber Eye trained 40 of our investigators on mobile triage. We've cleared our backlog of seized devices for the first time in three years.", author: "Inspector M. Khan", firm: "Cyber Crime · State Police" },
  { _id: '3', _type: 'testimonial', quote: "Discreet, fast, methodical. Their insider investigation report became our HR action playbook for the next two years.", author: "P. Mehrotra", firm: "CISO · Listed Bank" },
  { _id: '4', _type: 'testimonial', quote: "Their cloud forensics work surfaced an audit trail nobody on our team thought still existed. M365 retention has never looked the same.", author: "S. Iyer", firm: "Head of Legal · SaaS firm" },
  { _id: '5', _type: 'testimonial', quote: "BEC fraud worth ₹4.6 crore traced across three jurisdictions in eleven days. The funds were frozen in time.", author: "N. Rao", firm: "CFO · Listed NBFC" },
  { _id: '6', _type: 'testimonial', quote: "Twin-examiner review caught a discrepancy our internal team missed. That single line in their report changed the matter outcome.", author: "Adv. K. Joshi", firm: "Partner · Disputes practice" },
];

export default function VoicesMarquee({ testimonials }: { testimonials?: SanityTestimonial[] }) {
  const data = testimonials && testimonials.length > 0 ? testimonials : FALLBACK;
  const cards = [...data, ...data];
  return (
    <div className="voices-track-wrap">
      <div className="voices-track">
        {cards.map((t, i) => (
          <div key={`${t._id}-${i}`} className="voice-card" aria-hidden={i >= data.length ? true : undefined}>
            <div className="text-accent text-5xl leading-none mb-4">&ldquo;</div>
            <p className="text-lg leading-relaxed mb-8">{t.quote}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-line">
              <div className="w-10 h-10 rounded-pill bg-surface2 border border-line flex-shrink-0" />
              <div>
                <div className="text-sm">{t.author}</div>
                <div className="label">{t.firm}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
