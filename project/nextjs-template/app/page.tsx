import Link from "next/link";
import { Hex, Pulse, Stat, Section, Placeholder } from "@/components/Primitives";
import UnicornAura from "@/components/UnicornAura";
import ForensicGlobe from "@/components/ForensicGlobe";
import { services } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <UnicornAura projectId="bKN5upvoulAmWvInmHza" />
        <Section className="pt-20 pb-24 relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <Hex />
                <span className="label">[ 01 — Digital Forensics ]</span>
              </div>
              <h1 className="display text-[64px] lg:text-[88px]">
                Digital forensics<br />
                that holds up<br />
                <span className="text-accent">in court.</span>
              </h1>
              <p className="mt-8 text-lg text-mute max-w-lg leading-relaxed">
                We recover, preserve and present digital evidence for police, prosecutors and enterprise legal teams. Court-admissible reports. Chain of custody. 24/7 incident response.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <Link href="/contact" className="btn-primary">Open a case →</Link>
                <Link href="/services" className="btn-ghost">Browse services</Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ForensicGlobe />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-line">
            <Stat value="600" accent="+" label="Cases closed" />
            <Stat value="98" accent="%" label="Admissibility rate" />
            <Stat value="24" accent="/7" label="Incident response" />
            <Stat value="12" label="Certified examiners" />
          </div>
        </Section>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-line py-6 overflow-hidden">
        <Section className="mb-4">
          <div className="label">Trusted by police, prosecutors & enterprise legal teams</div>
        </Section>
        <div className="relative overflow-hidden">
          <div className="marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-16 items-center font-mono text-mute text-lg uppercase tracking-widest">
                <span>Mumbai Police</span><span className="text-accent">◇</span>
                <span>State Cyber Cell</span><span className="text-accent">◇</span>
                <span>HDFC Securities</span><span className="text-accent">◇</span>
                <span>Khaitan & Co</span><span className="text-accent">◇</span>
                <span>SBI Cyber Defence</span><span className="text-accent">◇</span>
                <span>Tata Consultancy</span><span className="text-accent">◇</span>
                <span>CERT-In</span><span className="text-accent">◇</span>
                <span>Reliance Legal</span><span className="text-accent">◇</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section className="py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="label mb-4">[ Services / 7 ]</div>
            <h2 className="display text-5xl lg:text-6xl">
              Forensic services<br />
              <span className="text-mute">end to end.</span>
            </h2>
          </div>
          <Link href="/services" className="font-mono text-sm uppercase tracking-wider text-accent hover:underline">
            All services →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card card-hover p-7 block">
              <div className="flex items-start justify-between mb-6">
                <div className="font-mono text-accent text-xs">{s.num}</div>
                <Hex />
              </div>
              <h3 className="text-xl mb-3 font-medium">{s.title}</h3>
              <p className="text-sm text-mute leading-relaxed mb-6">{s.sub}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
              <div className="font-mono text-xs text-accent uppercase tracking-wider">Explore →</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TRAINING CALLOUT */}
      <Section className="py-16">
        <div className="card overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <div className="label mb-6">[ Cyber Eye Academy ]</div>
            <h2 className="display text-4xl lg:text-5xl mb-6">
              Train your officers<br />
              <span className="text-accent">& security team.</span>
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
              <div><div className="display text-2xl num">14</div><div className="label mt-1">Courses</div></div>
              <div><div className="display text-2xl num">2,400+</div><div className="label mt-1">Officers trained</div></div>
              <div><div className="display text-2xl num">4.9</div><div className="label mt-1">Avg rating</div></div>
            </div>
          </div>
          <Placeholder label="classroom · hands-on forensic lab" className="aspect-[5/4] lg:aspect-auto border-l border-line" />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-y border-line bg-surface/30">
        <Section>
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="label mb-4">[ Voices ]</div>
              <h2 className="display text-5xl">What clients say.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { q: "Their § 65B certificate held under cross-examination. The opposing expert couldn't dent a single hash.", name: "Adv. R. Subramanian", role: "Senior Counsel · Bombay HC" },
              { q: "Cyber-Eye trained 40 of our investigators on mobile triage. We've cleared our backlog of seized devices for the first time in three years.", name: "Inspector M. Khan", role: "Cyber Crime · State Police" },
              { q: "Discreet, fast, methodical. Their insider investigation report became our HR action playbook for the next two years.", name: "P. Mehrotra", role: "CISO · Listed Bank" },
            ].map((t) => (
              <div key={t.name} className="card p-7">
                <div className="text-accent text-5xl leading-none mb-4">&ldquo;</div>
                <p className="text-lg leading-relaxed mb-8">{t.q}</p>
                <div className="flex items-center gap-3 pt-6 border-t border-line">
                  <Placeholder label="" className="w-10 h-10 rounded-pill" />
                  <div>
                    <div className="text-sm">{t.name}</div>
                    <div className="label">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* FINAL CTA */}
      <Section className="py-24">
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 ph-grid opacity-40" />
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative p-12 lg:p-20 text-center">
            <div className="label mb-6">[ 24/7 — Incident Line ]</div>
            <h2 className="display text-5xl lg:text-6xl mb-6">Active incident<br />or open case?</h2>
            <p className="text-mute text-lg max-w-xl mx-auto mb-10">
              Speak to a certified examiner. No call centres. No bots. Live triage from a forensic analyst in 30 minutes or less.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">Open a case →</Link>
              <a href="tel:+918045678910" className="btn-ghost">+91 80 4567 8910</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
