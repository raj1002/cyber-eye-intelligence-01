'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Section, Pulse } from '@/components/Primitives';
import FadeIn from '@/components/FadeIn';
import { submitContact } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending}>
      {pending ? 'Sending…' : 'Submit →'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContact, null);

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
        <FadeIn className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            {state?.success ? (
              <div className="card p-8 lg:p-10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ width: '40px', height: '4px', background: '#10B981' }} />
                </div>
                <h2 className="display text-3xl mb-2">Enquiry received.</h2>
                <p className="text-mute">A senior examiner will contact you within 4 hours during business hours (or via our 24/7 line for urgent matters).</p>
                <p className="text-sm text-mute mt-4">For immediate assistance, call <a href="tel:+919833565665" className="text-white hover:text-accent transition-colors">+91 98335 65665</a>.</p>
              </div>
            ) : (
              <form className="card p-8 lg:p-10 space-y-5" action={formAction}>
                <h2 className="display text-3xl mb-4">Open a case.</h2>

                {state?.success === false && state.error && (
                  <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-md px-4 py-3">
                    {state.error}
                  </div>
                )}

                {/* Hidden defaults */}
                <input type="hidden" name="urgency" value="standard" />

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" placeholder="Full name" />
                  <Field label="Organisation" name="organisation" placeholder="Firm or company" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" name="email" placeholder="name@firm.com" type="email" />
                  <Field label="Phone" name="phone" placeholder="+91 ····· ·····" type="tel" />
                </div>

                <div>
                  <div className="label mb-2">Practice area</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Mobile', value: 'digital-forensics' },
                      { label: 'Cloud', value: 'managed-security' },
                      { label: 'Insider', value: 'managed-forensics' },
                      { label: 'Malware', value: 'digital-forensics' },
                      { label: 'Email', value: 'digital-intelligence' },
                      { label: 'Fraud', value: 'digital-intelligence' },
                      { label: 'Disk', value: 'data-recovery' },
                    ].map(({ label, value }, i) => (
                      <label key={label} className={`pill cursor-pointer ${i === 0 ? 'pill-on' : ''}`}>
                        <input type="radio" name="matter" value={value} className="sr-only" defaultChecked={i === 0} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="label mb-2">Tell us about the matter</div>
                  <textarea
                    name="narrative"
                    className="w-full card p-4 text-sm bg-surface focus:outline-none focus:border-accent placeholder:text-zinc-600 min-h-32"
                    placeholder="Brief — no privileged details. We'll send an NDA before specifics."
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <label className="flex items-center gap-2 text-sm text-mute">
                    <input type="checkbox" className="w-4 h-4 accent-accent" />
                    Send me a sample report (PDF)
                  </label>
                  <SubmitButton />
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="card p-6 border-accent">
              <div className="flex items-start justify-between mb-4">
                <div className="label">[ 24/7 Incident Line ]</div>
                <Pulse />
              </div>
              <a href="tel:+919833565665" className="display text-3xl mb-2 block">+91 98335 65665</a>
              <p className="text-sm text-mute">Active breach? Lost data? Time-sensitive seizure? Call now. Triage analyst on the line within 30 minutes.</p>
            </div>
            <div className="card p-6">
              <div className="label mb-3">Email</div>
              <div className="text-lg mb-1">cases<span className="text-accent">@</span>cybereyeintelligence.com</div>
              <div className="text-sm text-mute mb-4">Encrypted attachments welcome. PGP key on request.</div>
              <div className="label mb-3 mt-6">Enquiries</div>
              <div className="text-lg">enquiry<span className="text-accent">@</span>cybereyeintelligence.com</div>
            </div>
            <div className="card p-6">
              <div className="label mb-3">Mumbai (HQ)</div>
              <p className="text-sm text-mute">
                6th Floor, Light Bridge, H.B.P<br />
                Saki Vihar Road, Powai, Thane<br />
                Mumbai, Maharashtra 400072 · India
              </p>
              <div className="label mb-3 mt-6">Satellite labs</div>
              <p className="text-sm text-mute">Bengaluru · Delhi · Gurugram</p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full card p-4 text-sm bg-surface focus:outline-none focus:border-accent placeholder:text-zinc-600"
      />
    </div>
  );
}
