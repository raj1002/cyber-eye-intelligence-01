import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-ink/80 border-b border-line">
      <div className="max-w-page mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-medium tracking-tight">
            Cyber-Eye<span className="text-accent">·</span>Intelligence
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="/services" className="nav-link font-mono uppercase text-xs tracking-wider">
            Services <sup className="text-accent">7</sup>
          </Link>
          <Link href="/sectors" className="nav-link font-mono uppercase text-xs tracking-wider">
            Sectors
          </Link>
          <Link href="/case-files" className="nav-link font-mono uppercase text-xs tracking-wider">
            Case Files
          </Link>
          <Link href="/training" className="nav-link font-mono uppercase text-xs tracking-wider">
            Academy
          </Link>
          <Link href="/insights" className="nav-link font-mono uppercase text-xs tracking-wider">
            Insights
          </Link>
          <Link href="/about" className="nav-link font-mono uppercase text-xs tracking-wider">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918045678910"
            className="hidden md:inline-flex btn-ghost"
          >
            +91 80 4567 8910
          </a>
          <Link href="/contact" className="btn-primary">
            Open a Case →
          </Link>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="6" fill="#10B981" />
      <circle cx="14" cy="14" r="2" fill="#050505" />
    </svg>
  );
}
