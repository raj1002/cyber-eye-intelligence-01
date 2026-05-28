# Cyber-Eye Intelligence — Next.js Template

A finished, dummy-content-filled Next.js 14 (App Router) template based on the Cyber-Eye Intelligence site wireframes.

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS 3 · Inter + JetBrains Mono.

## Quick start

```bash
cd nextjs-template
npm install
npm run dev
```

Open http://localhost:3000.

## Design tokens (see `tailwind.config.ts`)

| Token | Value |
|---|---|
| `ink` (background) | `#050505` |
| `surface` (card) | `#18181B` |
| `line` (borders) | `#2A2A2D` |
| `mute` (secondary text) | `#A1A1AA` |
| `accent` (primary) | `#10B981` |
| Display font | Inter (300-700) |
| Mono / labels | JetBrains Mono (400/500/600) |
| Card / control radius | `8px` |
| Pill radius | `9999px` |

Utility component classes (`label`, `pill`, `pill-on`, `btn-primary`, `btn-ghost`, `card`, `card-hover`, `display`, `hex`, `num`, `ph`, `ph-grid`) live in `app/globals.css`.

## File map

```
nextjs-template/
├── app/
│   ├── layout.tsx              Root layout · fonts · Header/Footer
│   ├── globals.css             Tailwind + component utility classes
│   ├── page.tsx                / — Homepage
│   ├── not-found.tsx           404
│   ├── about/page.tsx          /about
│   ├── contact/page.tsx        /contact
│   ├── services/
│   │   ├── page.tsx            /services
│   │   └── [slug]/page.tsx     /services/[slug] (7 services)
│   ├── sectors/
│   │   ├── page.tsx            /sectors
│   │   └── [slug]/page.tsx     /sectors/[slug] (5 sectors)
│   ├── case-files/
│   │   ├── page.tsx            /case-files
│   │   └── [slug]/page.tsx     /case-files/[slug]
│   ├── training/page.tsx       /training
│   ├── insights/page.tsx       /insights
│   └── legal/[slug]/page.tsx   /legal/privacy · /legal/terms · /legal/disclaimers
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Primitives.tsx          Hex · Pulse · Stat · Section · Placeholder · Breadcrumb
├── lib/
│   └── data.ts                 Services · Sectors · Case files · Courses · Articles
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Data — replace the dummy content

All catalog content (services, sectors, case files, courses, articles) lives in `lib/data.ts`. Edit there to update every page that consumes it.

## Image placeholders

Image slots render as `ph-grid` placeholder blocks with a tiny mono caption (`"evidence workstation"`, `"founders · lab interior"`, etc). Replace with `next/image` once you have real assets:

```tsx
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Forensic workstation"
  width={800}
  height={600}
  className="aspect-[4/3] object-cover"
/>
```

## Routes shipped

| Path | Source |
|---|---|
| `/` | `app/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/services/[slug]` | `app/services/[slug]/page.tsx` × 7 |
| `/sectors` | `app/sectors/page.tsx` |
| `/sectors/[slug]` | `app/sectors/[slug]/page.tsx` × 5 |
| `/case-files` | `app/case-files/page.tsx` |
| `/case-files/[slug]` | `app/case-files/[slug]/page.tsx` × 6 |
| `/training` | `app/training/page.tsx` |
| `/insights` | `app/insights/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/legal/[slug]` | `app/legal/[slug]/page.tsx` × 3 |
| `*` | `app/not-found.tsx` |

## Not yet wired (next steps)

- Real `/services/[slug]` content differentiation (currently shares scaffold + per-service title)
- Individual `/insights/[slug]` article pages
- Search index + `/search` route
- `/team` (examiners), `/locations` (local SEO), `/lab`, `/expert-witness`
- FAQPage / BreadcrumbList / Article JSON-LD schema generators
- `robots.txt` + dynamic `sitemap.xml` (use `app/robots.ts` + `app/sitemap.ts`)
- `/llms.txt` for AI discoverability (per original wireframe spec)

## License

Dummy content is original; design tokens are yours. Brand assets, fonts and tool names referenced in copy belong to their respective owners.
