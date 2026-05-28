import Link from "next/link";
import { Section } from "@/components/Primitives";

export default function NotFound() {
  return (
    <Section className="py-32 text-center">
      <div className="label mb-6">[ 404 — File not found ]</div>
      <h1 className="display text-7xl lg:text-8xl mb-6">
        Cold<br /><span className="text-accent">case.</span>
      </h1>
      <p className="text-mute text-lg max-w-md mx-auto mb-10">
        We checked the registry, the cache and the unallocated space. This URL doesn&apos;t exist on cybereye.com.
      </p>
      <div className="flex gap-3 justify-center">
        <Link href="/" className="btn-primary">← Back to base</Link>
        <Link href="/contact" className="btn-ghost">Talk to an examiner</Link>
      </div>
    </Section>
  );
}
