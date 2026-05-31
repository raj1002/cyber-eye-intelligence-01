import Link from "next/link";
import { Hex, Placeholder } from "@/components/Primitives";
import UnicornAura from "@/components/UnicornAura";
import VoicesMarquee from "@/components/parallax/VoicesMarquee";
import InsightsRow from "@/components/parallax/InsightsRow";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import { getServiceFamilies, getSectors, getTestimonials, getArticles, getSiteSettings } from "@/lib/sanity";

// Icon map keyed by service slug — controls appearance while content comes from Sanity
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "digital-forensics": <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke="#10B981" strokeWidth="1.2"/><circle cx="10" cy="10" r="2" fill="#10B981"/></svg>,
  "digital-intelligence": <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10c2-4 5-6 7-6s5 2 7 6c-2 4-5 6-7 6s-5-2-7-6z" stroke="#10B981" strokeWidth="1.2"/><circle cx="10" cy="10" r="2.5" fill="#10B981"/></svg>,
  "managed-security": <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z" stroke="#10B981" strokeWidth="1.2"/><path d="M7 10l2 2 4-4" stroke="#10B981" strokeWidth="1.4"/></svg>,
  "managed-forensics": <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" stroke="#10B981" strokeWidth="1.2"/><path d="M3 7h14M7 3v14" stroke="#10B981" strokeWidth="1.2"/></svg>,
  "data-recovery": <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><ellipse cx="10" cy="5" rx="6" ry="2" stroke="#10B981" strokeWidth="1.2"/><path d="M4 5v10c0 1 3 2 6 2s6-1 6-2V5M4 10c0 1 3 2 6 2s6-1 6-2" stroke="#10B981" strokeWidth="1.2"/></svg>,
};

const FALLBACK_SERVICES = [
  { num: "01 / 05", title: "Digital Forensics", sub: "Evidence collection, incident response, data recovery, malware analysis, mobile & network forensics — with court-grade chain of custody.", tags: ["Evidence", "IR", "Mobile", "Network"], cta: "8 services →", icon: SERVICE_ICONS["digital-forensics"], href: "/services#fam-digital-forensics" },
  { num: "02 / 05", title: "Digital Intelligence", sub: "OSINT, SOCMINT, dark web monitoring, threat intelligence, data mining and predictive analytics — turning the open digital world into actionable signal.", tags: ["OSINT", "SOCMINT", "Dark web", "Threat intel"], cta: "7 services →", icon: SERVICE_ICONS["digital-intelligence"], href: "/services#fam-digital-intelligence" },
  { num: "03 / 05", title: "Managed Security Services", sub: "24/7 SOC, XDR, vulnerability management, EDR, SIEM, IAM, UEBA and compliance — across on-prem, cloud and hybrid infrastructures.", tags: ["SOC 24/7", "XDR", "SIEM", "IAM"], cta: "13 services →", icon: SERVICE_ICONS["managed-security"], href: "/services#fam-managed-security" },
  { num: "04 / 05", title: "Managed Digital Forensic Services", sub: "On-premises forensic infrastructure, dedicated examiners, agile incident response and tailored training — delivered inside your facility.", tags: ["On-prem lab", "Agile IR", "Training"], cta: "5 services →", icon: SERVICE_ICONS["managed-forensics"], href: "/services#fam-managed-forensics" },
  { num: "05 / 05", title: "Data Recovery", sub: "Hard drive, file system, database, removable media, ransomware-encrypted, mobile and chain-of-custody forensic recovery — across all major brands and formats.", tags: ["HDD / SSD", "RAID", "Ransomware", "Mobile"], cta: "6 services →", icon: SERVICE_ICONS["data-recovery"], href: "/services#fam-data-recovery" },
];

const FALLBACK_SECTORS = [
  { num: "S/01", title: "Law Enforcement", sub: "Cyber cells, anti-fraud units, SIT support.", slug: "law-enforcement" },
  { num: "S/02", title: "Legal & Litigation", sub: "eDiscovery, expert witness, § 65B certification.", slug: "legal-litigation" },
  { num: "S/03", title: "Corporate Enterprise", sub: "Internal investigations, IP theft, misconduct.", slug: "corporate-enterprise" },
  { num: "S/04", title: "Government", sub: "CERT-aligned, classified-handling, audits.", slug: "government" },
  { num: "S/05", title: "BFSI & Insurance", sub: "Wire fraud, claims, AML, KYC investigations.", slug: "bfsi-insurance" },
];

const FALLBACK_STATS = [
  { value: "40+", label: "Cases closed" },
  { value: "100%", label: "Admissibility rate" },
  { value: "24/7", label: "Incident response" },
  { value: "5", label: "Certified examiners" },
];

export default async function Home() {
  const [rawServices, rawSectors, testimonials, articles, settings] = await Promise.all([
    getServiceFamilies(),
    getSectors(),
    getTestimonials(),
    getArticles(),
    getSiteSettings(),
  ]);

  const total = rawServices.length;
  const serviceFamilies = rawServices.length > 0
    ? rawServices.map((s, i) => ({
        num: `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
        title: s.title,
        sub: s.tagline ?? s.description ?? '',
        tags: (s.services ?? []).slice(0, 4).map((sv) => sv.title.split(' ')[0]),
        cta: s.services?.length ? `${s.services.length} services →` : 'View →',
        icon: SERVICE_ICONS[s.slug.current] ?? SERVICE_ICONS["digital-forensics"],
        href: `/services#fam-${s.slug.current}`,
      }))
    : FALLBACK_SERVICES;

  const sectors = rawSectors.length > 0
    ? rawSectors.map((s, i) => ({
        num: `S/${String(i + 1).padStart(2, '0')}`,
        title: s.title,
        sub: s.tagline ?? s.description ?? '',
        slug: s.slug.current,
      }))
    : FALLBACK_SECTORS;

  const heroStats = settings?.heroStats && settings.heroStats.length > 0
    ? settings.heroStats
    : FALLBACK_STATS;

  const caseQuote = settings?.featuredCaseQuote ?? "Recovered 14 deleted chats from a wiped iPhone. Conviction secured in 9 months.";
  const caseAttribution = settings?.featuredCaseAttribution ?? "Sr. Counsel, listed manufacturing company";
  const caseLabel = settings?.featuredCaseLabel ?? "Mumbai · Corporate IP Theft";

  return (
    <>
      {/* HERO */}
      <section id="hero-parallax" className="relative overflow-hidden">
        <UnicornAura projectId="bKN5upvoulAmWvInmHza" />
        <div className="max-w-page mx-auto px-6 lg:px-10 pt-14 pb-16 lg:pt-20 lg:pb-24 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="hero-eyebrow flex items-center gap-3 mb-6 lg:mb-8">
                <Hex />
                <span className="label">[ 01 — Digital Forensics ]</span>
              </div>
              <h1 className="display text-[40px] sm:text-[56px] lg:text-[88px] leading-[1.02] lg:leading-[0.95]">
                Digital forensics<br />
                that holds up<br />
                <span className="text-accent">in court.</span>
              </h1>
              <p className="hero-lede mt-6 lg:mt-8 text-base lg:text-lg text-mute max-w-lg leading-relaxed">
                We recover, preserve and present digital evidence for police, prosecutors and enterprise legal teams.{" "}
                <strong className="text-white font-semibold">AI-assisted triage</strong> across mobile, cloud and endpoint &mdash;{" "}
                <strong className="text-white font-semibold">machine-learning anomaly detection</strong> that surfaces the artefact, not the noise. Court-admissible reports. Chain of custody. 24/7 incident response.
              </p>
              <div className="hero-cta-row flex flex-wrap items-center gap-3 mt-8 lg:mt-10">
                <Link href="/contact" className="btn-primary mono text-sm uppercase tracking-wider px-6 py-3 rounded-control font-medium">Open a case →</Link>
                <Link href="/services" className="btn-ghost mono text-sm uppercase tracking-wider px-6 py-3 rounded-control">Browse services</Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="globe-stage">
                <div className="chip-fl chip-anim-1" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }}>
                  <span className="pulse-dot" />{" "}820 MB/s · ingest
                </div>
                <div className="chip-fl" style={{ top: "10%", right: "0%" }}>
                  <span className="icn">⌂</span> +418 · devices
                </div>
                <div className="chip-fl chip-anim-2" style={{ top: "22%", left: "-10%" }}>
                  <span className="icn">
                    <svg viewBox="0 0 10 10" fill="none"><ellipse cx="5" cy="3" rx="3.2" ry="0.9" stroke="currentColor" strokeWidth="1.2"/><path d="M1.8 3v4c0 .55 1.4.95 3.2.95s3.2-.4 3.2-.95V3" stroke="currentColor" strokeWidth="1.2"/></svg>
                  </span>
                  19.5 TB · imaged
                </div>
                <div className="chip-fl lg" style={{ top: "30%", left: "8%" }}>
                  <span className="ava" />
                  <div className="stack">
                    <span className="nm">Hash verified · SHA-256</span>
                    <span className="hd">@p_ranganathan / lead</span>
                  </div>
                </div>
                <div className="chip-fl chip-anim-3" style={{ top: "36%", right: "-6%" }}>
                  <span className="icn">
                    <svg viewBox="0 0 10 10" fill="none"><path d="M1 2.5l4-1.3 4 1.3L5 3.8 1 2.5z" stroke="currentColor" strokeWidth="1.1"/><path d="M1 5l4 1.3L9 5M1 7.3l4 1.3L9 7.3" stroke="currentColor" strokeWidth="1.1"/></svg>
                  </span>
                  2.41 PB · archive
                </div>
                <div className="chip-fl" style={{ top: "44%", right: "4%" }}>
                  <span className="icn">
                    <svg viewBox="0 0 10 10" fill="none"><path d="M1 5l3 3 5-6" stroke="currentColor" strokeWidth="1.4"/></svg>
                  </span>
                  § 65B · certified
                </div>
                <div className="chip-fl" style={{ top: "60%", left: "-4%" }}>
                  <span className="icn">●</span> CoC · sealed
                </div>
                <div className="chip-fl chip-anim-1" style={{ top: "66%", right: "2%" }}>
                  <span className="icn">
                    <svg viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5 2v6" stroke="currentColor" strokeWidth="1.4"/></svg>
                  </span>
                  Write-blocker on
                </div>
                <div className="chip-fl chip-anim-3" style={{ top: "52%", left: "14%" }}>
                  <span className="pulse-dot" />
                  <strong style={{ color: "#10B981", fontWeight: 600 }}>AI</strong>&nbsp;triage · running
                </div>
                <div className="chip-fl lg chip-anim-2" style={{ bottom: "4%", left: "4%" }}>
                  <span className="ava" />
                  <div className="stack">
                    <span className="nm">M. Khan</span>
                    <span className="hd">@triage_03 · online</span>
                  </div>
                </div>
                <div className="chip-fl lg" style={{ bottom: "0%", left: "50%", transform: "translateX(-50%)" }}>
                  <span className="ava" />
                  <div className="stack">
                    <span className="nm">P. Ranganathan</span>
                    <span className="hd">@lead_exam · imaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-line" id="hero-stats">
            {heroStats.map((stat) => {
              // Parse numeric value and suffix for CountUp; non-numeric (e.g. "24/7") renders static
              const match = stat.value.match(/^(\d+(?:\.\d+)?)(\D*)$/);
              return (
                <div key={stat.label} data-stat>
                  <div className="display text-3xl lg:text-4xl num">
                    {match ? (
                      <CountUp to={parseFloat(match[1])} suffix={match[2]} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="label mt-2">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-line py-6 overflow-hidden space-y-3">
        <div className="max-w-page mx-auto px-6 lg:px-10 mb-4">
          <div className="label">Trusted by police, prosecutors &amp; enterprise legal teams</div>
        </div>
        {/* Row 1 — left to right */}
        <div className="relative overflow-hidden">
          <div className="marquee">
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-16 items-center mono text-mute text-lg uppercase tracking-widest pr-16" aria-hidden={i > 0 ? true : undefined}>
                <span>State Police Cyber Cell</span><span className="text-accent">◇</span>
                <span>Economic Offences Wing</span><span className="text-accent">◇</span>
                <span>High Court Litigation Practice</span><span className="text-accent">◇</span>
                <span>Listed Corporate Group</span><span className="text-accent">◇</span>
                <span>National Investigation Agency</span><span className="text-accent">◇</span>
                <span>Scheduled Commercial Bank</span><span className="text-accent">◇</span>
                <span>Central Govt. Ministry</span><span className="text-accent">◇</span>
                <span>Disputes Law Firm</span><span className="text-accent">◇</span>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — right to left */}
        <div className="relative overflow-hidden">
          <div className="marquee-reverse">
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-16 items-center mono text-stone text-base uppercase tracking-widest pr-16" aria-hidden={i > 0 ? true : undefined}>
                <span>Insurance Regulatory Body</span><span className="text-accent">◇</span>
                <span>Private Equity Fund</span><span className="text-accent">◇</span>
                <span>Anti-Corruption Bureau</span><span className="text-accent">◇</span>
                <span>NBFC &amp; Fintech Firm</span><span className="text-accent">◇</span>
                <span>Family Office</span><span className="text-accent">◇</span>
                <span>Mid-Market Law Firm</span><span className="text-accent">◇</span>
                <span>Public Sector Undertaking</span><span className="text-accent">◇</span>
                <span>District &amp; Sessions Court</span><span className="text-accent">◇</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="label mb-4">[ Services / 5 practice families ]</div>
              <h2 className="display text-5xl lg:text-6xl">Forensic services<br /><span className="text-accent">end to end.</span></h2>
            </div>
            <Link href="/services" className="mono text-sm uppercase tracking-wider text-accent hover:underline">All services →</Link>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceFamilies.map((s, i) => (
              <FadeIn key={s.num} delay={i * 60}>
                <Link href={s.href} className="card card-hover p-7 block h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="mono text-accent text-xs">{s.num}</div>
                    {s.icon}
                  </div>
                  <h3 className="text-xl mb-3 font-medium">{s.title}</h3>
                  <p className="text-sm text-mute leading-relaxed mb-6">{s.sub}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.tags.map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                  <div className="mono text-xs text-accent uppercase tracking-wider">{s.cta}</div>
                </Link>
              </FadeIn>
            ))}
            <FadeIn delay={serviceFamilies.length * 60}>
            <Link href="/contact" className="card card-hover card-accent p-7 text-ink block">
              <div className="flex items-start justify-between mb-6">
                <div className="mono text-xs opacity-70">→ Not sure?</div>
                <span className="hex" style={{ background: "#050505" }} />
              </div>
              <h3 className="text-xl mb-3 font-medium">Talk to an examiner.</h3>
              <p className="text-sm leading-relaxed mb-6 opacity-80">30-minute scoping call. Free, examiner-led. We&rsquo;ll match you to the right practice family — or tell you if it isn&rsquo;t us.</p>
              <div className="mono text-xs uppercase tracking-wider font-medium">Open scoping call →</div>
            </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI METHODOLOGY */}
      <section id="ai-methodology" className="py-24 border-t border-line relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 ph-grid opacity-30 pointer-events-none" />
        <div className="max-w-page mx-auto px-6 lg:px-10 relative">
          <FadeIn className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="label">[ Proprietary · CE/VectorAI ]</span>
                <span className="divider-dot" />
                <span className="label">AI-assisted forensics</span>
              </div>
              <h2 className="display text-5xl lg:text-6xl">Forensics, accelerated.<br /><span className="text-accent">Admissibility, preserved.</span></h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-mute leading-relaxed">CE/VectorAI is the examiner-supervised AI methodology we&rsquo;re building — designed to compress weeks of forensic discovery into days, with every artefact kept chain-of-custody clean and court-admissible. Grounded in years of redacted casework no public model can legally access.</p>
            </div>
          </FadeIn>
          <FadeIn className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" delay={100}>
            <div className="card p-7">
              <div className="flex items-center justify-between mb-8">
                <div className="mono text-accent text-xs">STAGE 01 · TRIAGE</div>
                <span className="mono text-[10px] text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />In pilot
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">Classify in minutes.</h3>
              <p className="text-sm text-mute leading-relaxed">A working classifier on a single artefact type — surfacing relevance, file type and risk in minutes, so the examiner reaches the 2% that matters first.</p>
            </div>
            <div className="card p-7">
              <div className="flex items-center justify-between mb-8">
                <div className="mono text-accent text-xs">STAGE 02 · CARVE</div>
                <span className="mono text-[10px] text-stone uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone/50 ring-1 ring-stone" />Roadmap
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">Recover what&rsquo;s gone.</h3>
              <p className="text-sm text-mute leading-relaxed">Adaptive parsers, designed to reconstruct deleted artefacts across APFS, ext4, SQLite WAL and proprietary app stores — including chats already wiped.</p>
            </div>
            <div className="card p-7">
              <div className="flex items-center justify-between mb-8">
                <div className="mono text-accent text-xs">STAGE 03 · CORRELATE</div>
                <span className="mono text-[10px] text-stone uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone/50 ring-1 ring-stone" />Roadmap
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">Connect the dots.</h3>
              <p className="text-sm text-mute leading-relaxed">Graph models, planned to surface actor / account / device links across exhibits and flag inconsistencies for the examiner to interrogate.</p>
            </div>
            <div className="card p-7">
              <div className="flex items-center justify-between mb-8">
                <div className="mono text-accent text-xs">STAGE 04 · VERIFY</div>
                <span className="mono text-[10px] text-stone uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone/50 ring-1 ring-stone" />Roadmap
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">Examiner signs.</h3>
              <p className="text-sm text-mute leading-relaxed">Every inference reviewed and signed by a certified examiner. Reports compile from the chain-of-custody log — never from the model itself.</p>
            </div>
          </FadeIn>
          <FadeIn delay={200}><div className="card card-hover mt-12 p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="label mb-4">[ For investors ]</div>
              <h3 className="display text-2xl lg:text-3xl mb-3">Examiner-led IP. <span className="text-accent">A casework moat the foundation models can&rsquo;t touch.</span></h3>
              <p className="text-mute leading-relaxed max-w-2xl">CE/VectorAI will be grounded in data no public model can legally access — and validated against courtroom admissibility, not public benchmarks. We&rsquo;re raising to ship the engine end-to-end, partner with our first three pilot labs, and grow the examiner-AI bench.</p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <Link href="/contact" className="btn-primary mono text-sm uppercase tracking-wider px-6 py-3 rounded-control font-medium inline-flex justify-center">Request investor brief →</Link>
              <Link href="/contact" className="btn-ghost mono text-sm uppercase tracking-wider px-6 py-3 rounded-control inline-flex justify-center">Schedule a call</Link>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* TRAINING CALLOUT */}
      <section className="py-16 border-t border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="card overflow-hidden grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <div className="label mb-6">[ Cyber Eye Academy ]</div>
              <h2 className="display text-4xl lg:text-5xl mb-6">
                Train your officers<br />
                <span className="text-accent">&amp; security team.</span>
              </h2>
              <p className="text-mute leading-relaxed mb-8 max-w-md">
                Hands-on courses in mobile, cloud and network forensics — built for police investigators, in-house counsel and corporate security teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/training?audience=police" className="pill">For Police</Link>
                <Link href="/training?audience=corporate" className="pill">For Corporate</Link>
                <Link href="/training" className="pill pill-on">Course catalogue →</Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line">
                <div><div className="display text-2xl num"><CountUp to={14} /></div><div className="label mt-1">Courses</div></div>
                <div><div className="display text-2xl num"><CountUp to={120} suffix="+" /></div><div className="label mt-1">Officers trained</div></div>
                <div><div className="display text-2xl num"><CountUp to={4.9} suffix="" /></div><div className="label mt-1">Avg rating</div></div>
              </div>
            </div>
            <Placeholder label="classroom · hands-on forensic lab" className="aspect-[5/4] lg:aspect-auto border-l border-line" />
          </div></FadeIn>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 border-y border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <div className="label mb-4">[ Sectors ]</div>
              <h2 className="display text-5xl lg:text-6xl">Who we<br /><span className="text-accent">serve.</span></h2>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <p className="text-lg text-mute leading-relaxed">
                Our examiners are trained for adversarial environments — courtrooms, boardrooms, and active threat scenarios. We work shoulder-to-shoulder with investigators on cases where the evidence has to stand up to the toughest cross-examination.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={100} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((s) => (
              <Link key={s.slug} href={`/sectors/${s.slug}`} className="card card-hover p-6 block">
                <div className="mono text-xs text-accent mb-12">{s.num}</div>
                <h3 className="text-xl font-medium mb-2">{s.title}</h3>
                <p className="text-xs text-mute leading-relaxed">{s.sub}</p>
              </Link>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* FEATURED CASE FILE */}
      <section className="py-24 relative">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-line">
                <div className="absolute inset-0 ph ph-grid" data-label="case file · redacted exhibit" />
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-accent z-10" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-accent z-10" />
                <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-between mono text-[10px] uppercase tracking-widest text-stone">
                  <span>CE / 2025 / 014</span>
                  <span className="text-accent">ADMITTED</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="label mb-6">[ Case File · #CE-2025-014 ]</div>
              <blockquote className="display text-3xl lg:text-4xl leading-tight mb-8">
                &ldquo;{caseQuote}&rdquo;
              </blockquote>
              <div className="text-mute mb-10">
                — {caseAttribution}<br />
                <span className="label">{caseLabel}</span>
              </div>
              <div className="grid grid-cols-3 gap-6 pb-8 border-b border-line mb-8">
                <div>
                  <div className="display text-3xl num">2.4<span className="text-accent text-xl">TB</span></div>
                  <div className="label mt-1">Data examined</div>
                </div>
                <div>
                  <div className="display text-3xl num">14</div>
                  <div className="label mt-1">Artefacts recovered</div>
                </div>
                <div>
                  <div className="display text-3xl num">9<span className="text-accent text-xl">mo</span></div>
                  <div className="label mt-1">To conviction</div>
                </div>
              </div>
              <Link href="/knowledge" className="btn-ghost mono text-sm uppercase tracking-wider px-6 py-3 rounded-control inline-flex">Read the full case file →</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-y border-line bg-surface/30 overflow-hidden">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="flex items-end justify-between mb-14">
            <div>
              <div className="label mb-4">[ Voices · 6 ]</div>
              <h2 className="display text-5xl">What clients <span className="text-accent">say.</span></h2>
            </div>
            <div className="label hidden md:block">→ drift · hover to pause</div>
          </FadeIn>
        </div>
        <VoicesMarquee testimonials={testimonials} />
      </section>

      {/* INSIGHTS */}
      <section className="py-24">
        <InsightsRow articles={articles} />
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="card relative overflow-hidden">
            <div className="absolute inset-0 ph-grid opacity-40" />
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative p-12 lg:p-20 text-center">
              <div className="label mb-6">[ 24/7 — Incident Line ]</div>
              <h2 className="display text-5xl lg:text-6xl mb-6">Active incident<br />or open <span className="text-accent">case?</span></h2>
              <p className="text-mute text-lg max-w-xl mx-auto mb-10">
                Speak to a certified examiner. No call centres. No bots. Live triage from a forensic analyst in 30 minutes or less.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary">Open a case →</Link>
                <a href="tel:+918045678910" className="btn-ghost">+91 80 4567 8910</a>
              </div>
            </div>
          </div></FadeIn>
        </div>
      </section>
    </>
  );
}
