import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-16 mt-12">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="#10B981" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="6" fill="#10B981" />
                <circle cx="14" cy="14" r="2" fill="#050505" />
              </svg>
              <span className="font-medium tracking-tight text-lg">
                Cyber-Eye<span className="text-accent">·</span>Intelligence
              </span>
            </div>
            <p className="text-mute text-sm max-w-xs leading-relaxed mb-8">
              Digital forensics, fraud investigation and training. Mumbai · Bengaluru · Delhi.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="pill">ISO 17025 aligned</span>
              <span className="pill">CERT-In empanelled</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterCol
              title="Services"
              items={[
                { label: "Mobile", href: "/services/mobile-forensics" },
                { label: "Cloud", href: "/services/cloud-forensics" },
                { label: "Insider", href: "/services/insider-investigation" },
                { label: "Malware", href: "/services/malware-intrusion" },
                { label: "Email", href: "/services/email-forensics" },
                { label: "Fraud", href: "/services/fraud-investigation" },
                { label: "Disk", href: "/services/disk-forensics" },
              ]}
            />
            <FooterCol
              title="Sectors"
              items={[
                { label: "Law Enforcement", href: "/sectors/law-enforcement" },
                { label: "Legal", href: "/sectors/legal-litigation" },
                { label: "Corporate", href: "/sectors/corporate-enterprise" },
                { label: "Government", href: "/sectors/government" },
                { label: "BFSI", href: "/sectors/bfsi-insurance" },
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                { label: "About", href: "/about" },
                { label: "Case files", href: "/case-files" },
                { label: "Academy", href: "/training" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <div>
              <div className="label mb-4">24/7</div>
              <p className="text-sm text-mute leading-relaxed">
                Incident line<br />
                <a href="tel:+918045678910" className="text-white">+91 80 4567 8910</a>
              </p>
              <p className="text-sm text-mute mt-4 leading-relaxed">
                Cases<br />
                <span className="text-white">
                  cases<span className="text-accent">@</span>cybereye.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-wrap justify-between gap-4 label">
          <div>© 2026 Cyber-Eye Intelligence Pvt Ltd · CIN: U72200MH2018PTC000000</div>
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

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="label mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="nav-link">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
