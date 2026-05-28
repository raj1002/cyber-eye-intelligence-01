import { Section, Pulse } from "@/components/Primitives";

export const metadata = {
  title: "Contact — Cyber-Eye Intelligence",
  description: "Talk to a certified forensic examiner. 24/7 incident line. NDA on request.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 border-b border-line">
        <Section>
          <div className="label mb-6">Home / <span className="text-white">Contact</span></div>
          <h1 className="display text-6xl lg:text-7xl mb-6">Talk to an<br /><span className="text-accent">examiner.</span></h1>
          <p className="text-lg text-mute max-w-xl">
            No call centres. No bots. Your first call is with a certified forensic examiner. NDA on request.
          </p>
        </Section>
      </section>

      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <form className="card p-8 lg:p-10 space-y-5">
              <h2 className="display text-3xl mb-4">Open a case.</h2>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your name" placeholder="Full name" />
                <Field label="Organisation" placeholder="Firm or company" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Email" placeholder="name@firm.com" type="email" />
                <Field label="Phone" placeholder="+91 ····· ·····" type="tel" />
              </div>

              <div>
                <div className="label mb-2">Practice area</div>
                <div className="flex flex-wrap gap-2">
                  {["Mobile", "Cloud", "Insider", "Malware", "Email", "Fraud", "Disk"].map((p, i) => (
                    <label key={p} className={`pill cursor-pointer ${i === 0 ? "pill-on" : ""}`}>
                      <input type="radio" name="practice" className="sr-only" defaultChecked={i === 0} />
                      {p}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <div className="label mb-2">Tell us about the matter</div>
                <textarea
                  className="w-full card p-4 text-sm bg-surface focus:outline-none focus:border-accent placeholder:text-zinc-600 min-h-32"
                  placeholder="Brief — no privileged details. We'll send an NDA before specifics."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <label className="flex items-center gap-2 text-sm text-mute">
                  <input type="checkbox" className="w-4 h-4 accent-accent" />
                  Send me a sample report (PDF)
                </label>
                <button type="submit" className="btn-primary">Submit →</button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="card p-6 border-accent">
              <div className="flex items-start justify-between mb-4">
                <div className="label">[ 24/7 Incident Line ]</div>
                <Pulse />
              </div>
              <a href="tel:+918045678910" className="display text-3xl mb-2 block">+91 80 4567 8910</a>
              <p className="text-sm text-mute">Active breach? Lost data? Time-sensitive seizure? Call now. Triage analyst on the line within 30 minutes.</p>
            </div>
            <div className="card p-6">
              <div className="label mb-3">Email</div>
              <div className="text-lg mb-1">cases<span className="text-accent">@</span>cybereye.com</div>
              <div className="text-sm text-mute mb-4">Encrypted attachments welcome. PGP key on request.</div>
              <div className="label mb-3 mt-6">Press & media</div>
              <div className="text-lg">press<span className="text-accent">@</span>cybereye.com</div>
            </div>
            <div className="card p-6">
              <div className="label mb-3">Mumbai (HQ)</div>
              <p className="text-sm text-mute">
                Lab 04, Floor 12, Maker Maxity<br />
                Bandra Kurla Complex<br />
                Mumbai 400051 · India
              </p>
              <div className="label mb-3 mt-6">Satellite labs</div>
              <p className="text-sm text-mute">Bengaluru · Delhi · Gurugram</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full card p-4 text-sm bg-surface focus:outline-none focus:border-accent placeholder:text-zinc-600"
      />
    </div>
  );
}
