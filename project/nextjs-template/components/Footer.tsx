import Link from 'next/link';

const GoogleStars = () => (
  <div className="flex items-center gap-0.5" aria-label="4.9 of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#10B981" aria-hidden="true">
        <path d="M10 1l2.6 5.6 6.1.8-4.5 4.2 1.2 6L10 14.8 4.6 17.6l1.2-6L1.3 7.4l6.1-.8L10 1z"/>
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M19 10c0-.7-.1-1.4-.2-2H10v3.8h5c-.2 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.8-1.7 2.8-4.1 2.8-7.1z" fill="#4285F4"/>
    <path d="M10 19c2.6 0 4.7-.8 6.3-2.3l-3.1-2.4c-.8.6-1.9 1-3.2 1-2.5 0-4.6-1.7-5.3-3.9H1.5v2.5C3.1 16.9 6.3 19 10 19z" fill="#34A853"/>
    <path d="M4.7 11.4c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V5.1H1.5C.5 6.5 0 8.2 0 10s.5 3.5 1.5 4.9l3.2-2.5z" fill="#FBBC05"/>
    <path d="M10 4c1.4 0 2.7.5 3.7 1.4l2.8-2.8C14.7 1 12.6 0 10 0 6.3 0 3.1 2.1 1.5 5.1l3.2 2.5C5.4 5.4 7.5 4 10 4z" fill="#EA4335"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-12 mt-12">
      <div className="max-w-page mx-auto px-6 lg:px-10">

        {/* Trust band: FAQ + GMB + Map */}
        <div className="grid lg:grid-cols-3 gap-4 mb-16">
          {/* FAQ teaser */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="label">[ FAQs · Quick answers ]</div>
              <span className="hex" />
            </div>
            <div className="space-y-3">
              <details className="border-b border-line pb-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm font-medium">Are your reports admissible in court?</span>
                  <span className="chev text-accent text-xl leading-none">+</span>
                </summary>
                <p className="text-xs text-mute leading-relaxed mt-3">Yes — drafted under § 65B of the Indian Evidence Act, twin-examiner reviewed, hashed end-to-end. 98% admissibility across 600+ cases.</p>
              </details>
              <details className="border-b border-line pb-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm font-medium">How fast can you respond?</span>
                  <span className="chev text-accent text-xl leading-none">+</span>
                </summary>
                <p className="text-xs text-mute leading-relaxed mt-3">Triage analyst within 30 minutes on the 24/7 line. On-site within 4 hours in Tier 1 cities, 12 hours elsewhere in India.</p>
              </details>
              <details className="pb-1">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm font-medium">Can you recover wiped iPhones / Androids?</span>
                  <span className="chev text-accent text-xl leading-none">+</span>
                </summary>
                <p className="text-xs text-mute leading-relaxed mt-3">Often, yes — depending on OS, encryption mode and time since wipe. We image, parse and reconstruct from SQLite remnants and unallocated space.</p>
              </details>
            </div>
            <Link href="/knowledge" className="mono text-xs text-accent uppercase tracking-wider mt-5 inline-flex">All FAQs →</Link>
          </div>

          {/* Google Business */}
          {/* TODO: add real Google Business URL */}
        <a href="#" target="_blank" rel="noopener" className="card card-hover p-6 block">
            <div className="flex items-start justify-between mb-4">
              <div className="label">[ Rated on Google ]</div>
              <GoogleIcon />
            </div>
            <div className="flex items-end gap-3 mb-3">
              <span className="display text-5xl num leading-none">4.9</span>
              <div className="pb-1">
                <div className="mb-1"><GoogleStars /></div>
                <div className="text-xs text-mute">214 verified reviews</div>
              </div>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-4">&ldquo;Their § 65B certificate held under cross-examination. The opposing expert couldn&rsquo;t dent a single hash.&rdquo; <span className="text-mute">— Adv. R. Subramanian, Bombay HC</span></p>
            <div className="mono text-xs text-accent uppercase tracking-wider">Read all reviews on Google →</div>
          </a>

          {/* Map */}
          <a href="https://www.google.com/maps/search/WeWork+Lightbridge+Powai+Mumbai" target="_blank" rel="noopener" className="card overflow-hidden block">
            <div className="relative">
              <iframe
                title="Cyber Eye Intelligence — Mumbai HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8056347800366!2d72.88669447593686!3d19.116180850708506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9006c244d05%3A0xff1c276ccac506af!2sWeWork%20Lightbridge%20-%20Coworking%20%26%20Office%20Space%20in%20Powai%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1779997622943!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.05) invert(0.92) hue-rotate(180deg)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="true"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.7) 100%)' }} />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="label">[ Find us ]</div>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 1c-3.3 0-6 2.7-6 6 0 4 6 12 6 12s6-8 6-12c0-3.3-2.7-6-6-6z" stroke="#10B981" strokeWidth="1.4"/>
                  <circle cx="10" cy="7" r="2" fill="#10B981"/>
                </svg>
              </div>
              <div className="text-sm mb-1">6th Floor, Light Bridge, H.B.P</div>
              <p className="text-xs text-mute mb-3">Saki Vihar Road, Powai, Mumbai 400072</p>
              <div className="mono text-xs text-accent uppercase tracking-wider">Open in Google Maps →</div>
            </div>
          </a>
        </div>

        {/* Nav columns */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 border-t border-line pt-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="logo-mark" aria-hidden="true" />
              <span className="brand-wordmark lg">
                <span className="b-mark">Cyber Eye Intelligence</span>
                <span className="b-sub">Forensics<span className="sep">|</span>Investigations<span className="sep">|</span>Security</span>
              </span>
            </div>
            <p className="text-mute text-sm max-w-xs leading-relaxed mb-8">Digital forensics, intelligence and managed security. Mumbai · Bengaluru · Delhi.</p>
            <div className="flex flex-wrap gap-2">
              <span className="pill">ISO 17025 aligned</span>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="label mb-4">Services</div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Digital Forensics', href: '/services#fam-digital-forensics' },
                  { label: 'Digital Intelligence', href: '/services#fam-digital-intelligence' },
                  { label: 'Managed Security', href: '/services#fam-managed-security' },
                  { label: 'Managed Forensics', href: '/services#fam-managed-forensics' },
                  { label: 'Data Recovery', href: '/services#fam-data-recovery' },
                ].map(s => (
                  <li key={s.label}><Link href={s.href} className="nav-link">{s.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label mb-4">Sectors</div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Law Enforcement', href: '/sectors/law-enforcement' },
                  { label: 'Legal', href: '/sectors/legal-litigation' },
                  { label: 'Corporate', href: '/sectors/corporate-enterprise' },
                  { label: 'Government', href: '/sectors/government' },
                  { label: 'BFSI', href: '/sectors/bfsi-insurance' },
                ].map(s => (
                  <li key={s.label}><Link href={s.href} className="nav-link">{s.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label mb-4">Knowledge</div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'Case Files', href: '/knowledge?tab=cases' },
                  { label: 'Insights', href: '/knowledge?tab=insights' },
                  { label: 'White Papers', href: '/knowledge?tab=whitepapers' },
                  { label: 'Blogs', href: '/knowledge?tab=blogs' },
                  { label: 'FAQs', href: '/knowledge' },
                ].map(s => (
                  <li key={s.label}><Link href={s.href} className="nav-link">{s.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label mb-4">Company</div>
              <ul className="space-y-2 text-sm">
                {[
                  { label: 'About', href: '/about' },
                  { label: 'Academy', href: '/training' },
                  { label: 'Hiring', href: '/careers' },
                  { label: 'Contact', href: '/contact' },
                ].map(s => (
                  <li key={s.label}><Link href={s.href} className="nav-link">{s.label}</Link></li>
                ))}
              </ul>
              <div className="label mb-2 mt-6">24/7</div>
              <p className="text-sm text-mute leading-relaxed">
                <a href="tel:+919833565665" className="text-white hover:text-accent transition-colors">+91 98335 65665</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line pt-8 flex flex-wrap justify-between gap-4 label">
          <div>© 2026 Cyber Eye Intelligence LLP · LLPIN: ACT-8209 · GSTIN: 27AWFC0340D1ZN</div>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="nav-link">Privacy</Link>
            <Link href="/legal/terms" className="nav-link">Terms</Link>
            <Link href="/legal/disclaimers" className="nav-link">§ 65B disclaimers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
