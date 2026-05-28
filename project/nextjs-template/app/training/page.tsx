import { Section } from "@/components/Primitives";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Cyber Eye Academy — Training",
  description: "Hands-on forensic training for police, prosecutors, counsel and corporate security teams.",
};

export default function TrainingPage() {
  return (
    <>
      <section className="py-20 border-b border-line relative overflow-hidden">
        <div className="absolute inset-0 ph-grid opacity-40" />
        <Section className="relative">
          <div className="label mb-6">Home / <span className="text-white">Cyber Eye Academy</span></div>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h1 className="display text-6xl lg:text-7xl mb-6">
                Cyber Eye<br /><span className="text-accent">Academy.</span>
              </h1>
              <p className="text-lg text-mute leading-relaxed max-w-xl">
                Hands-on forensic training for police, prosecutors, in-house counsel and corporate security teams. Taught by working examiners — every cohort runs alongside live casework.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="card p-5"><div className="display text-3xl num">14</div><div className="label mt-1">Courses</div></div>
                <div className="card p-5"><div className="display text-3xl num">2,400<span className="text-accent text-base">+</span></div><div className="label mt-1">Officers trained</div></div>
                <div className="card p-5"><div className="display text-3xl num">4.9<span className="text-accent text-base">/5</span></div><div className="label mt-1">Avg rating</div></div>
                <div className="card p-5"><div className="display text-3xl num">12<span className="text-accent text-base"> mo</span></div><div className="label mt-1">CPE valid</div></div>
              </div>
            </div>
          </div>
        </Section>
      </section>

      <Section className="py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {["All courses", "For Police", "For Counsel", "For Corporate", "Beginner", "Advanced"].map((f, i) => (
            <span key={f} className={`pill ${i === 0 ? "pill-on" : ""}`}>{f}</span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <div key={c.code} className="card card-hover p-6">
              <div className="flex items-center justify-between mb-6">
                <span className={`pill ${c.audience === "For Police" ? "pill-on" : ""}`}>{c.audience}</span>
                <span className="font-mono text-xs">{c.code}</span>
              </div>
              <h3 className="text-2xl font-medium mb-2">{c.title}</h3>
              <p className="text-sm text-mute mb-6">{c.blurb}</p>
              <div className="flex items-center justify-between text-xs label">
                <span>{c.format}</span>
                <span className="text-accent">{c.price}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
