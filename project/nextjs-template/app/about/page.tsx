import Image from "next/image";
import { img, type ImageSlot } from "@/lib/image-manifest";

const TEAM_SLOTS: (ImageSlot | null)[] = ["team-r01","team-r02","team-r03","team-r04","team-r05","team-r06","team-r07","team-r08",null];
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import { getTeamMembers } from "@/lib/sanity";

export const metadata = {
  title: "About — Cyber Eye Intelligence",
  description: "Founded in 2025 by certified forensic examiners. Fully accredited lab. Examiner-led, never sold.",
};

const FALLBACK_TEAM = [
  { _id: 'f1', name: 'Abhishek Mane', role: 'Certified Forensic Examiner', bio: 'Certified forensic examiner with experience across police labs and contested courtrooms. Leads all DFIR engagements.' },
  { _id: 'f2', name: 'Kiran Pawar', role: 'Digital Intelligence Lead', bio: 'Specialist in OSINT, SOCMINT and dark web investigations. Previously with a national cybercrime unit.' },
  { _id: 'f3', name: 'Parag Zalke', role: 'Managed Security Head', bio: 'SOC architect and XDR specialist. Oversees 24/7 monitoring and incident response across enterprise clients.' },
  { _id: 'f4', name: 'Akshad Veer', role: 'Forensic Examiner', bio: 'Mobile and cloud forensics specialist. CFCE certified. Expert witness in multiple HC proceedings.' },
  { _id: 'f5', name: 'Lakhan Handebag', role: 'Academy Director', bio: 'Designs and delivers training programmes for police investigators, legal teams and corporate security.' },
  { _id: 'f6', name: 'Pooja R. Mankoj', role: 'Legal Head', bio: 'Practising advocate specialising in cyber law, digital evidence admissibility and § 65B certification. Advises on evidence strategy across HC and SC matters.' },
  { _id: 'f7', name: 'Avin Chakravarthy', role: 'Marketing Head', bio: 'Leads brand, content and go-to-market for Cyber Eye Intelligence. Background in B2B marketing across legal-tech and enterprise security.' },
  { _id: 'f8', name: 'Madhubala A. Waghmare', role: 'Co-Founder & Head of Finance', bio: 'Co-founder and Head of Finance. Oversees P&L, fundraising, investor relations and regulatory compliance.' },
  { _id: 'f9', name: 'Raj K. Shailey', role: 'Co-Founder & Head of Business Strategy', bio: 'Co-founder and Head of Business Strategy. Shapes business strategy, market positioning and partnership architecture for growth.' },
];

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();
  const team = teamMembers.length > 0 ? teamMembers : FALLBACK_TEAM;
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <div className="label mb-6">Home / <span className="text-white">About</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-10 max-w-4xl">
            We find what others<br />miss — and prove it <span className="text-accent">in court.</span>
          </h1>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-lg text-mute leading-relaxed">
              <p>
                Cyber Eye Intelligence was founded in 2025 by certified forensic examiners who had spent years across police labs, Big Four practices and contested courtrooms. Each had walked out of an engagement where good evidence was undone by sloppy custody, or a case lost on a technicality that an extra hour of imaging would have prevented.
              </p>
              <p>
                We started Cyber Eye to do the work the way it should be done — slowly when it matters, fast when lives are on the line, and always documented to a standard that survives the most hostile cross-examination.
              </p>
              <p>
                We operate out of Mumbai with satellite operations in Bengaluru and Delhi. Every engagement is led by a named examiner. No sales filter, no account managers, no &ldquo;we&apos;ll loop in the team&rdquo;.
              </p>
            </div>
            <div className="lg:col-span-5">
              <Image {...img("about-founders")} alt={img("about-founders").alt} className="aspect-[4/5] rounded-card object-cover w-full" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn className="grid md:grid-cols-4 gap-4">
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={2025} duration={1200} />
              </div>
              <div className="label mt-2">Founded</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={40} suffix="+" />
              </div>
              <div className="label mt-2">Cases handled</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={120} suffix="+" />
              </div>
              <div className="label mt-2">Officers trained</div>
            </div>
            <div className="card p-6">
              <div className="display text-4xl num">
                <CountUp to={5} />
              </div>
              <div className="label mt-2">Certified examiners</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three Rules */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="label mb-6">[ How we operate ]</div>
          <h2 className="display text-5xl mb-12">Three <span className="text-accent">rules.</span></h2></FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Court-first methodology.", d: "Every step documented. Every artefact hashed. Every report defensible — even when nothing ever reaches a courtroom." },
              { t: "Examiner-led, never sold.", d: "You speak to the analyst handling your case. Quotes are scoped by examiners, not commercial leads." },
              { t: "Discretion by default.", d: "NDAs at intake, encrypted transit, sealed handling for sensitive matters. Some clients we'll never name." },
            ].map((v) => (
              <div key={v.t} className="card p-8">
                <div className="hex mb-8" />
                <h3 className="display text-2xl mb-3">{v.t}</h3>
                <p className="text-mute leading-relaxed">{v.d}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn><div className="label mb-6">[ Why choose us ]</div>
          <h2 className="display text-5xl mb-12">The brief on <span className="text-accent">Cyber Eye.</span></h2></FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: "01", t: "Court-admissible by design", d: "§ 65B certification, hashed exhibits and twin-examiner sign-off on every engagement — not just the contested ones." },
              { code: "02", t: "Named examiners, not account managers", d: "You know who's handling your case. Their name goes on the report. Their phone rings if the opposing expert calls." },
              { code: "03", t: "Turnaround with integrity", d: "CE/VectorAI-assisted triage compresses discovery. Speed without cutting corners on chain of custody." },
              { code: "04", t: "Cross-sector depth", d: "Police labs, HC litigation, listed-company boardrooms and government audit — our team has operated in each, not just studied them." },
              { code: "05", t: "Discretion is structural", d: "Encrypted intake, sealed handling, redacted case files. We advise clients we can never publicly name — and they stay." },
              { code: "06", t: "Training as a force multiplier", d: "120+ officers trained through the Academy. Your team learns the same methods our examiners use in the lab." },
            ].map((r) => (
              <div key={r.code} className="card p-7">
                <div className="mono text-accent text-xs mb-8">{r.code}</div>
                <h3 className="text-lg font-medium mb-3">{r.t}</h3>
                <p className="text-sm text-mute leading-relaxed">{r.d}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 border-b border-line">
        <div className="max-w-page mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="label mb-6">[ The team ]</div>
            <h2 className="display text-5xl mb-12">Named examiners. <span className="text-accent">No middlemen.</span></h2>
          </FadeIn>
          <FadeIn delay={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => {
              const slot = TEAM_SLOTS[i] ?? null;
              return (
                <div key={member._id} className="card p-7">
                  {slot && <Image {...img(slot)} alt={img(slot).alt} className="w-16 h-16 rounded-card object-cover mb-5" sizes="64px" />}
                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  {member.role && <div className="label mb-3">{member.role}</div>}
                  {member.bio && <p className="text-sm text-mute leading-relaxed">{member.bio}</p>}
                </div>
              );
            })}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
