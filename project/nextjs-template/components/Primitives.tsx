import { ReactNode } from "react";

export function Hex({ className = "" }: { className?: string }) {
  return <span className={`hex ${className}`} aria-hidden />;
}

export function Pulse() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
    </span>
  );
}

export function Stat({ value, label, accent }: { value: string; label: string; accent?: string }) {
  return (
    <div>
      <div className="display text-4xl num">
        {value}
        {accent && <span className="text-accent">{accent}</span>}
      </div>
      <div className="label mt-2">{label}</div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="label">
      {items.map((it, idx) => (
        <span key={idx}>
          {it.label}
          {idx < items.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-page mx-auto px-6 lg:px-10 ${className}`}>{children}</section>
  );
}

export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return <div className={`ph ${className}`} data-label={label} />;
}
