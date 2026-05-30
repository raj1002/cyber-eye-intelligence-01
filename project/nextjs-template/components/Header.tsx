'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'light') setTheme('light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('ce-theme', next); } catch (_) {}
  };

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
    return () => document.body.classList.remove('nav-open');
  }, [navOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 glass-nav">
        <div className="max-w-page mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="logo-mark" aria-hidden="true" style={{ width: 36, height: 36 }} />
            <span className="brand-wordmark">
              <span className="b-mark">Cyber Eye Intelligence</span>
              <span className="b-sub">Forensics<span className="sep">|</span>Investigations<span className="sep">|</span>Security</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {/* Services */}
            <div className="nav-item">
              <Link href="/services" className="nav-link nav-trigger mono uppercase text-xs tracking-wider">
                Services <sup className="text-accent">5</sup>
                <span className="caret" aria-hidden="true" />
              </Link>
              <div className="nav-menu" role="menu">
                <div className="menu-head">
                  <span className="label">Practice families</span>
                  <span className="count">05 / 05</span>
                </div>
                {[
                  { idx: '01', href: '/services#fam-digital-forensics', title: 'Digital Forensics', desc: 'Acquisition, analysis, § 65B reports & expert testimony.' },
                  { idx: '02', href: '/services#fam-digital-intelligence', title: 'Digital Intelligence', desc: 'OSINT, social-graph, deep & dark web monitoring.' },
                  { idx: '03', href: '/services#fam-managed-security', title: 'Managed Security', desc: 'SOC, threat hunting, vulnerability management.' },
                  { idx: '04', href: '/services#fam-managed-forensics', title: 'Managed Forensics', desc: 'On-premises labs, dedicated examiners, agile IR.' },
                  { idx: '05', href: '/services#fam-data-recovery', title: 'Data Recovery', desc: 'Disk, RAID, mobile, cloud — physical & logical.' },
                ].map(item => (
                  <Link key={item.idx} href={item.href} className="menu-link">
                    <span className="idx">{item.idx}</span>
                    <span className="body">
                      <span className="ttl">{item.title}</span>
                      <span className="desc">{item.desc}</span>
                    </span>
                    <span className="arr">→</span>
                  </Link>
                ))}
                <div className="menu-foot">
                  <Link href="/services">All services →</Link>
                  <Link href="/contact">Open a case</Link>
                </div>
              </div>
            </div>

            {/* Sectors */}
            <div className="nav-item">
              <Link href="/sectors" className="nav-link nav-trigger mono uppercase text-xs tracking-wider">
                Sectors
                <span className="caret" aria-hidden="true" />
              </Link>
              <div className="nav-menu" role="menu">
                <div className="menu-head">
                  <span className="label">Who we serve</span>
                  <span className="count">05 / 05</span>
                </div>
                {[
                  { idx: 'S/01', href: '/sectors/law-enforcement', title: 'Law Enforcement', desc: 'Cyber cells, anti-fraud units, SIT support.' },
                  { idx: 'S/02', href: '/sectors/legal-litigation', title: 'Legal & Litigation', desc: 'eDiscovery, expert witness, § 65B certificates.' },
                  { idx: 'S/03', href: '/sectors/corporate-enterprise', title: 'Corporate Enterprise', desc: 'Internal investigations, IP theft, misconduct.' },
                  { idx: 'S/04', href: '/sectors/government', title: 'Government', desc: 'CERT-aligned, classified handling, audits.' },
                  { idx: 'S/05', href: '/sectors/bfsi-insurance', title: 'BFSI & Insurance', desc: 'Fraud, AML, customer-data investigations.' },
                ].map(item => (
                  <Link key={item.idx} href={item.href} className="menu-link">
                    <span className="idx">{item.idx}</span>
                    <span className="body">
                      <span className="ttl">{item.title}</span>
                      <span className="desc">{item.desc}</span>
                    </span>
                    <span className="arr">→</span>
                  </Link>
                ))}
                <div className="menu-foot">
                  <Link href="/sectors">All sectors →</Link>
                </div>
              </div>
            </div>

            {/* Knowledge Centre */}
            <div className="nav-item">
              <Link href="/knowledge" className="nav-link nav-trigger mono uppercase text-xs tracking-wider" style={{ minWidth: 'max-content' }}>
                Knowledge Centre
                <span className="caret" aria-hidden="true" />
              </Link>
              <div className="nav-menu" role="menu" style={{ minWidth: 300 }}>
                <div className="menu-head">
                  <span className="label">Resources</span>
                  <span className="count">04</span>
                </div>
                {[
                  { idx: 'K/01', href: '/knowledge?tab=insights', title: 'Field Notes & Articles', desc: 'Tutorials, references, post-mortems.' },
                  { idx: 'K/02', href: '/knowledge?tab=cases', title: 'Case Studies', desc: 'Redacted exhibits & outcomes.' },
                  { idx: 'K/03', href: '/knowledge?tab=whitepapers', title: 'Whitepapers', desc: 'Standards, methodology, compliance.' },
                  { idx: 'K/04', href: '/knowledge?tab=blogs', title: 'FAQ', desc: 'Common forensic questions answered.' },
                ].map(item => (
                  <Link key={item.idx} href={item.href} className="menu-link">
                    <span className="idx">{item.idx}</span>
                    <span className="body">
                      <span className="ttl">{item.title}</span>
                      <span className="desc">{item.desc}</span>
                    </span>
                    <span className="arr">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Academy */}
            <div className="nav-item">
              <Link href="/training" className="nav-link nav-trigger mono uppercase text-xs tracking-wider">
                Academy
                <span className="caret" aria-hidden="true" />
              </Link>
              <div className="nav-menu" role="menu" style={{ minWidth: 320 }}>
                <div className="menu-head">
                  <span className="label">Cyber Eye Academy</span>
                  <span className="count">14 courses</span>
                </div>
                {[
                  { idx: 'A/01', href: '/training', title: 'All Courses', desc: 'Full catalogue across police, counsel & corporate.' },
                  { idx: 'A/02', href: '/training#audience-police', title: 'For Police', desc: 'Mobile triage, cell-site analysis, seizure protocol.' },
                  { idx: 'A/03', href: '/training#audience-counsel', title: 'For Legal Counsel', desc: '§ 65B, cross-examining experts, eDiscovery.' },
                  { idx: 'A/04', href: '/training#audience-corporate', title: 'For Corporate', desc: 'Insider threat, ransomware tabletop, IR.' },
                  { idx: 'A/05', href: '/training', title: 'Schedule & Cohorts', desc: 'Upcoming dates · in-person, hybrid, online.' },
                ].map(item => (
                  <Link key={item.idx} href={item.href} className="menu-link">
                    <span className="idx">{item.idx}</span>
                    <span className="body">
                      <span className="ttl">{item.title}</span>
                      <span className="desc">{item.desc}</span>
                    </span>
                    <span className="arr">→</span>
                  </Link>
                ))}
                <div className="menu-foot">
                  <Link href="/training">Course catalogue →</Link>
                  <Link href="/contact">Enrol</Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="nav-item">
              <Link href="/about" className="nav-link nav-trigger mono uppercase text-xs tracking-wider">
                About
                <span className="caret" aria-hidden="true" />
              </Link>
              <div className="nav-menu" role="menu" style={{ minWidth: 300, left: 'auto', right: 0 }}>
                <div className="menu-head">
                  <span className="label">The firm</span>
                  <span className="count">03</span>
                </div>
                {[
                  { idx: 'B/01', href: '/about', title: 'About Us', desc: 'Founders, methodology, accreditations.' },
                  { idx: 'B/02', href: '/careers', title: 'Hiring', desc: "Open roles. We're growing the examiner bench." },
                  { idx: 'B/03', href: '/contact', title: 'Contact Us', desc: 'Mumbai · Bengaluru · Delhi. 24/7 incident line.' },
                ].map(item => (
                  <Link key={item.idx} href={item.href} className="menu-link">
                    <span className="idx">{item.idx}</span>
                    <span className="body">
                      <span className="ttl">{item.title}</span>
                      <span className="desc">{item.desc}</span>
                    </span>
                    <span className="arr">→</span>
                  </Link>
                ))}
                <div className="menu-foot">
                  <Link href="/contact">Open a case →</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M12.2 8.7A5.2 5.2 0 0 1 5.3 1.8a5.2 5.2 0 1 0 6.9 6.9z" fill="currentColor"/>
                </svg>
              )}
            </button>
            <a href="tel:+919833565665" className="hidden md:inline-flex btn-ghost text-xs px-4 py-2">
              +91 98335 65665
            </a>
            <Link href="/contact" className="hidden lg:inline-flex btn-primary text-xs px-4 py-2">
              Open a Case →
            </Link>
            <button
              type="button"
              className="nav-mobile-toggle"
              aria-label="Open menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(true)}
            >
              <span className="bars" aria-hidden="true" style={{ position: 'relative', width: 18, height: 14, display: 'block' }}>
                <span style={{ position: 'absolute', left: 0, right: 0, height: '1.5px', background: 'currentColor', borderRadius: 2, top: 0 }} />
                <span style={{ position: 'absolute', left: 0, right: 0, height: '1.5px', background: 'currentColor', borderRadius: 2, top: '6.25px' }} />
                <span style={{ position: 'absolute', left: 0, right: 0, height: '1.5px', background: 'currentColor', borderRadius: 2, top: '12.5px' }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        className="mobile-drawer-backdrop"
        aria-hidden="true"
        onClick={() => setNavOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`mobile-drawer${navOpen ? '' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        style={{ transform: navOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" className="flex items-center gap-3" onClick={() => setNavOpen(false)}>
            <span className="logo-mark" aria-hidden="true" style={{ width: 28, height: 28 }} />
            <span className="brand-wordmark">
              <span className="b-mark">Cyber Eye Intelligence</span>
              <span className="b-sub">Forensics<span className="sep">|</span>Investigations<span className="sep">|</span>Security</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setNavOpen(false)}
            aria-label="Close menu"
            style={{ width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.10)', color: '#A1A1AA', cursor: 'pointer', background: 'transparent' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 12px 20px' }}>
          {/* Services */}
          <details className="md-group" open>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 12px', cursor: 'pointer', listStyle: 'none', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Services <sup className="text-accent">5</sup></span>
              <span className="md-chev" aria-hidden="true" style={{ width: 8, height: 8, borderRight: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor', transform: 'rotate(45deg) translate(-1px,-1px)', opacity: 0.55, display: 'inline-block' }} />
            </summary>
            <div className="md-children">
              {[
                { idx: '01', href: '/services#fam-digital-forensics', label: 'Digital Forensics' },
                { idx: '02', href: '/services#fam-digital-intelligence', label: 'Digital Intelligence' },
                { idx: '03', href: '/services#fam-managed-security', label: 'Managed Security' },
                { idx: '04', href: '/services#fam-managed-forensics', label: 'Managed Forensics' },
                { idx: '05', href: '/services#fam-data-recovery', label: 'Data Recovery' },
              ].map(item => (
                <Link key={item.idx} href={item.href} onClick={() => setNavOpen(false)}>
                  <span className="idx-mini">{item.idx}</span>{item.label}
                </Link>
              ))}
            </div>
          </details>
          {/* Sectors */}
          <details className="md-group">
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 12px', cursor: 'pointer', listStyle: 'none', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Sectors</span>
              <span className="md-chev" aria-hidden="true" style={{ width: 8, height: 8, borderRight: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor', transform: 'rotate(45deg) translate(-1px,-1px)', opacity: 0.55, display: 'inline-block' }} />
            </summary>
            <div className="md-children">
              {[
                { idx: 'S/01', href: '/sectors/law-enforcement', label: 'Law Enforcement' },
                { idx: 'S/02', href: '/sectors/legal-litigation', label: 'Legal & Litigation' },
                { idx: 'S/03', href: '/sectors/corporate-enterprise', label: 'Corporate Enterprise' },
                { idx: 'S/04', href: '/sectors/government', label: 'Government' },
                { idx: 'S/05', href: '/sectors/bfsi-insurance', label: 'BFSI & Insurance' },
              ].map(item => (
                <Link key={item.idx} href={item.href} onClick={() => setNavOpen(false)}>
                  <span className="idx-mini">{item.idx}</span>{item.label}
                </Link>
              ))}
            </div>
          </details>
          {/* Knowledge Centre */}
          <details className="md-group">
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 12px', cursor: 'pointer', listStyle: 'none', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Knowledge Centre</span>
              <span className="md-chev" aria-hidden="true" style={{ width: 8, height: 8, borderRight: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor', transform: 'rotate(45deg) translate(-1px,-1px)', opacity: 0.55, display: 'inline-block' }} />
            </summary>
            <div className="md-children">
              {[
                { idx: 'K/01', href: '/knowledge?tab=insights', label: 'Field Notes & Articles' },
                { idx: 'K/02', href: '/knowledge?tab=cases', label: 'Case Studies' },
                { idx: 'K/03', href: '/knowledge?tab=whitepapers', label: 'Whitepapers' },
                { idx: 'K/04', href: '/knowledge?tab=blogs', label: 'Blogs' },
              ].map(item => (
                <Link key={item.idx} href={item.href} onClick={() => setNavOpen(false)}>
                  <span className="idx-mini">{item.idx}</span>{item.label}
                </Link>
              ))}
            </div>
          </details>
          {/* Academy */}
          <details className="md-group">
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 12px', cursor: 'pointer', listStyle: 'none', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Academy</span>
              <span className="md-chev" aria-hidden="true" style={{ width: 8, height: 8, borderRight: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor', transform: 'rotate(45deg) translate(-1px,-1px)', opacity: 0.55, display: 'inline-block' }} />
            </summary>
            <div className="md-children">
              {[
                { idx: 'A/01', href: '/training', label: 'All Courses' },
                { idx: 'A/02', href: '/training#audience-police', label: 'For Police' },
                { idx: 'A/03', href: '/training#audience-counsel', label: 'For Legal Counsel' },
                { idx: 'A/04', href: '/training#audience-corporate', label: 'For Corporate' },
              ].map(item => (
                <Link key={item.idx} href={item.href} onClick={() => setNavOpen(false)}>
                  <span className="idx-mini">{item.idx}</span>{item.label}
                </Link>
              ))}
            </div>
          </details>
          {/* About */}
          <details className="md-group">
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 12px', cursor: 'pointer', listStyle: 'none', color: '#FFFFFF', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>About</span>
              <span className="md-chev" aria-hidden="true" style={{ width: 8, height: 8, borderRight: '1.5px solid currentColor', borderBottom: '1.5px solid currentColor', transform: 'rotate(45deg) translate(-1px,-1px)', opacity: 0.55, display: 'inline-block' }} />
            </summary>
            <div className="md-children">
              {[
                { idx: 'B/01', href: '/about', label: 'About Us' },
                { idx: 'B/02', href: '/careers', label: 'Hiring' },
                { idx: 'B/03', href: '/contact', label: 'Contact Us' },
              ].map(item => (
                <Link key={item.idx} href={item.href} onClick={() => setNavOpen(false)}>
                  <span className="idx-mini">{item.idx}</span>{item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
        <div style={{ margin: '16px 12px 4px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link href="/contact" onClick={() => setNavOpen(false)} className="btn-primary text-center justify-center">Open a case →</Link>
          <a href="tel:+919833565665" className="btn-ghost text-center justify-center">+91 98335 65665</a>
        </div>
      </aside>
    </>
  );
}
