# CLAUDE.md

Persistent instructions for Claude Code working in the **Cyber-Eye Intelligence** repo. Read this on every session.

---

## What this repo is

A Next.js 14 (App Router) marketing site for a digital forensics firm. Five top-level information architectures: **Services**, **Sectors**, **Case Files**, **Training**, **Insights**, plus **About** and **Contact**. Content is sourced from **Sanity** (decision locked in May 2026). Hosted on Vercel, region `bom1` (Mumbai).

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind 3 · Sanity v3 · Supabase · Resend.

---

## Hard rules

1. **One PR per task.** Never bundle "while I'm here" refactors. Reviews stay surgical, reverts stay cheap.
2. **Never push to `main` directly** — even with branch protection off. Open a PR, get CI green, request review.
3. **Never commit secrets.** `.env*` is gitignored. New env vars go into `.env.example` (placeholder values only) AND into the Vercel project (prod/preview/dev).
4. **Typecheck before you finish.** `pnpm typecheck` must pass. No `any`, no `@ts-ignore`, no `@ts-expect-error` without a comment explaining why.
5. **Manifests, not magic.** Anything that touches many files (image manifest, JSON-LD generators, sitemap, route catalog) must read from a single typed source — never inline duplicated lists.
6. **Sanity is the source of truth for content.** Do not hardcode services, sectors, case files, courses, articles, testimonials, or team bios in TSX. If a page needs content, it queries Sanity. Period.
7. **Server Actions for mutations.** No client-side fetch to `/api/*` for form submission, intake, or anything that touches the DB. Use Server Actions with Zod validation.
8. **Accessibility is not optional.** Every interactive element must be keyboard-reachable. Color contrast ≥ 4.5:1 for body, ≥ 3:1 for large text. Run `pnpm a11y` (axe) before opening a PR.

---

## Design tokens (do not invent new ones)

Defined in `tailwind.config.ts` and globalised in `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `ink` | `#050505` | Background |
| `surface` | `#18181B` | Cards, section bands |
| `surface-2` | `#27272A` | Quieter inner surfaces |
| `line` | `#2A2A2D` | Default 1px borders |
| `line-soft` | `#1F1F22` | Quieter dividers |
| `mute` | `#A1A1AA` | Secondary text |
| `stone` | `#71717A` | Tertiary text, captions |
| `accent` | `#10B981` | Mint green — accent CTAs, active states, signature only |
| `accent-deep` | `#0A6E51` | Pressed/active variant |

**Type:** Inter (300–700) for everything · **Geist Mono** for code, labels, mono captions. No third typeface. Ever.

**Radius:** `xs 4px · sm 6px · md 8px · card 12px · xl 16px · xxl 24px · pill 9999px`. Buttons are always `pill`. Cards are `card`. No in-between values.

**Spacing:** 4px base, 8px primary increment. Section rhythm = `64–96px` between bands; hero = `120px`.

---

## File map

```
nextjs-template/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx                  / — Homepage
│   ├── not-found.tsx
│   ├── og/[slug]/route.tsx       Dynamic OG image generator
│   ├── sitemap.ts                Dynamic; sources from Sanity
│   ├── robots.ts
│   ├── about/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── actions.ts            Server Actions for intake
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── sectors/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── case-files/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── training/page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── legal/[slug]/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Primitives.tsx            Hex · Pulse · Stat · Section · Breadcrumb · Placeholder
│   ├── parallax/
│   │   ├── HeroChips.tsx         EXP 01 — layered depth
│   │   ├── ClipReveal.tsx        EXP 04 — clip-path reveal
│   │   ├── PinnedScrub.tsx       EXP 03 — engagement workflow scrub
│   │   ├── StatCounter.tsx       EXP 06 — count-up on entry
│   │   ├── VoicesMarquee.tsx     Testimonials horizontal drift
│   │   └── InsightsRow.tsx       Drag-scroll horizontal row
│   └── ForensicGlobe.tsx
├── lib/
│   ├── sanity.ts                 Typed client + per-collection helpers
│   ├── schemas/
│   │   └── contact.ts            Zod schema for intake
│   ├── image-manifest.ts         Typed map: slot id → src, alt, aspectRatio
│   ├── image-blur.ts             Generated: id → base64 blurDataURL
│   ├── jsonld.ts                 Factories: orgLd, serviceLd, articleLd, faqLd, breadcrumbLd
│   └── utils.ts
├── studio/                       Embedded Sanity Studio (route /studio)
│   ├── sanity.config.ts
│   └── schemas/
│       ├── service.ts
│       ├── sector.ts
│       ├── caseFile.ts
│       ├── course.ts
│       ├── article.ts
│       ├── testimonial.ts
│       └── teamMember.ts
├── scripts/
│   └── optimise-images.ts        sharp pipeline: WebP × 3 sizes + blur
├── public/
│   ├── images/                   Generated outputs
│   └── llms.txt
├── tailwind.config.ts
├── next.config.js                Security headers (CSP, HSTS, etc.)
├── vercel.json                   Region: bom1
├── .env.example
└── package.json
```

---

## Sanity conventions

### Schemas

Every content type has:
- `_id`, `_type`, `_createdAt`, `_updatedAt` (Sanity defaults)
- `slug` (required, unique, indexed) — kebab-case
- `title` (required)
- `seoTitle`, `seoDescription`, `ogImage` (for `generateMetadata()`)
- `publishedAt` (date, used for ordering and revalidation triggers)

### Querying

Always use the typed helpers in `lib/sanity.ts`, never raw GROQ in pages:

```ts
// ❌ Don't
const data = await client.fetch(`*[_type=="service" && slug.current==$slug][0]`, { slug })

// ✅ Do
const service = await getServiceBySlug(slug)
```

### Revalidation

- Marketing pages: `revalidate: 300` (5 min)
- Insights / articles: `revalidate: 60`
- Legal: `revalidate: 3600` (1 hour, edited rarely)
- On-demand revalidation via webhook from Sanity → `/api/revalidate?secret=…&path=…`

### Image handling

All Sanity images go through `next/image` + `@sanity/image-url` builder. Always pass `width`, `height`, `sizes`, `alt`, and a `placeholder="blur"` with the asset's LQIP from Sanity.

---

## Common tasks → exact prompts

### Add a new service family

```
claude "Add a new service family 'cryptocurrency-forensics' end-to-end:
  1. Sanity schema field updates if needed; otherwise just create the document via studio
  2. Update navigation in components/Header.tsx (add it to the Services dropdown, slot 06)
  3. Update homepage Services section in app/page.tsx (add the 6th card)
  4. Confirm /services/cryptocurrency-forensics renders via the existing [slug] route
  5. Add a redirect from /crypto-forensics → /services/cryptocurrency-forensics in next.config.js
Open one PR."
```

### Add a new insight (article)

Author edits Sanity → publishes → webhook revalidates `/insights` and `/insights/[slug]`. No code change needed unless schema evolves.

### Wire a new form

```
claude "Wire a new contact-style form at /partner-with-us:
  1. New page app/partner-with-us/page.tsx using the Contact pattern
  2. Server Action in actions.ts with Zod schema in lib/schemas/partner.ts
  3. Persist to Supabase table 'partner_intakes' (encrypted narrative)
  4. Send 2 emails via Resend (internal + ack)
  5. Cloudflare Turnstile + Upstash rate-limit (3/IP/hour)
  6. Add the new keys to .env.example AND Vercel env"
```

### Replace a placeholder image

```
claude "Replace the placeholder at slot id 'home-classroom':
  1. Source file is at /uploads/classroom-shot.jpg (committed)
  2. Run pnpm images to generate WebP + blur
  3. Update lib/image-manifest.ts entry with new src + alt
  4. The page already imports from the manifest — no JSX change should be needed"
```

---

## Things to never do

- Don't introduce a new color outside the design-token table. If a design needs one, propose it in a comment on the PR — don't merge until tokens are extended.
- Don't import from `@/lib/data.ts` — that file does not exist anymore. Sanity is the source.
- Don't write inline styles for layout. Use Tailwind utilities or component variants.
- Don't use `next/image`'s `fill` without an explicit `sizes` attribute. Vercel will warn; LCP will suffer.
- Don't add a third typeface, a gradient hero, hooded-hacker imagery, padlock icons, binary rain, or blue HUD overlays. The brief is forensic, not "cybersecurity".
- Don't enable analytics that set cookies without prior consent. Plausible is cookieless — keep it that way.
- Don't add a `useEffect` that calls a Server Action. Use `<form action={serverAction}>`.
- Don't expose Sanity write tokens or Resend API keys to the client. Anything prefixed `NEXT_PUBLIC_` is public.
- Don't store the matter narrative or any privileged client content in plain text in third-party tools. Encrypt at rest using the libsodium sealed-box pattern in `lib/crypto.ts`.

---

## Performance gates

Every PR runs Lighthouse-CI on the preview URL. Fail conditions:
- Performance < 90
- LCP > 2500 ms
- CLS > 0.1
- Accessibility < 95

If you can't hit these, don't merge — fix the regression in the same PR.

---

## Forensic hygiene rules (industry-specific)

This is a forensics firm. Treat the codebase like an evidence locker:
- **Every form submission gets an audit log row** (request id, IP, UA, timestamp, hash). Retention 2 years.
- **Never console.log PII** — names, emails, phone numbers, matter details. Strip at the source.
- **Source maps in prod**: upload to Sentry, do NOT serve to the browser (`productionBrowserSourceMaps: false`).
- **CSP is strict by default**. Adding a new third-party script requires updating `next.config.js` headers AND a comment justifying it.

---

## Useful commands

```bash
pnpm dev               # local dev server
pnpm build             # prod build
pnpm typecheck         # tsc --noEmit
pnpm lint              # eslint
pnpm test              # vitest
pnpm test:e2e          # playwright
pnpm a11y              # axe scan against built site
pnpm images            # regenerate optimised images + blur manifest
pnpm sanity:dev        # local Sanity studio
pnpm sanity:deploy     # deploy schema changes to hosted studio
pnpm lhci              # local Lighthouse CI run
```

---

## When in doubt

Read `RUNBOOK.md` for operational stuff (deploys, incidents, restores). Read `design.md` for the visual system. Ping the founder before doing anything irreversible (DNS, prod DB writes, Sanity dataset deletion).
