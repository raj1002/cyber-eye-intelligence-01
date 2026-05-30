'use client';

import { useRef } from 'react';

const STAGES = [
  {
    n: '01',
    t: 'Intake & Triage',
    d: 'Free 30-minute scoping call with a certified examiner — no sales filter. We sign an NDA, agree scope and hand you a custody handoff plan before anything moves.',
    tags: ['NDA at intake', 'Scope agreed', 'Custody plan'],
  },
  {
    n: '02',
    t: 'Acquire & Preserve',
    d: 'Evidence collected with write-blockers, hashed (SHA-256 + MD5), twin-witnessed and sealed. Chain of custody starts here — every artefact logged, labelled and signed.',
    tags: ['Write-blocked', 'SHA-256 hash', 'Twin-witnessed'],
  },
  {
    n: '03',
    t: 'Examine & Analyse',
    d: 'Lab analysis with CE/VectorAI-assisted triage. A second certified examiner reviews every finding independently before it enters the report.',
    tags: ['CE/VectorAI triage', 'Twin-examiner review', 'Artefact log'],
  },
  {
    n: '04',
    t: 'Report & Testify',
    d: 'Court-ready § 65B certificate, hashed exhibits and a defensible written report. We attend cross-examination and provide expert testimony when needed.',
    tags: ['§ 65B cert', 'Hashed exhibits', 'Expert testimony'],
  },
];

export default function PinnedScrub() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 border-t border-line" ref={sectionRef}>
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">

          {/* Sticky heading panel */}
          <div className="lg:col-span-4 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <div className="label mb-4">[ Process / 4 stages ]</div>
              <h2 className="display text-5xl lg:text-6xl mb-6">
                How an engagement <span className="text-accent">works.</span>
              </h2>
              <p className="text-mute leading-relaxed mb-8">
                Every case follows the same rigorous four-stage process — so your evidence is
                court-ready from the moment we touch it.
              </p>
              {/* Progress connector visible on large screens */}
              <div className="hidden lg:flex items-center gap-2 mono text-xs text-stone uppercase tracking-wider">
                <span className="w-4 h-px bg-line" />
                Scroll to walk through
              </div>
            </div>
          </div>

          {/* Stages */}
          <div className="lg:col-span-8 space-y-4">
            {STAGES.map((s) => (
              <div
                key={s.n}
                className="card p-8 lg:p-10 grid md:grid-cols-12 gap-6 items-start
                           opacity-0 translate-y-4
                           [.in-view_&]:opacity-100 [.in-view_&]:translate-y-0
                           transition-all duration-700 ease-out"
                style={{ transitionDelay: `${STAGES.indexOf(s) * 80}ms` }}
                ref={(el) => {
                  if (!el) return;
                  const obs = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        el.classList.add('!opacity-100', '!translate-y-0');
                        obs.disconnect();
                      }
                    },
                    { threshold: 0.15 }
                  );
                  obs.observe(el);
                }}
              >
                <div className="md:col-span-1">
                  <div className="mono text-accent text-xs">{s.n}</div>
                </div>
                <div className="md:col-span-11">
                  <h3 className="display text-2xl mb-3">{s.t}</h3>
                  <p className="text-mute leading-relaxed mb-5">{s.d}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
