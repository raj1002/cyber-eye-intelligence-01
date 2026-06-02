# IMAGE UPLOAD CONTEXT
# Cyber-Eye Intelligence — Replace All Placeholders
# Use this file at the start of a new session to wire generated images into the site.

---

## TASK SUMMARY

Replace every `<Placeholder>` component and `div.ph` element with `next/image`.
Images live in `public/images/`. The manifest is at `lib/image-manifest.ts`.
Run `pnpm images` after adding files to regenerate WebP + blur hashes.

---

## HOW REPLACEMENT WORKS

1. Copy generated image into `public/images/<filename>.jpg`
2. Run `pnpm images` — outputs WebP variants + updates `lib/image-blur.ts`
3. Update `lib/image-manifest.ts` — add/edit the slot entry
4. In the page file: replace `<Placeholder label="..." className="..." />`
   with `<Image>` using the manifest entry

### Replacement pattern

```tsx
// BEFORE
<Placeholder label="classroom · hands-on forensic lab" className="aspect-[5/4] lg:aspect-auto border-l border-line" />

// AFTER
import Image from "next/image"
import { img } from "@/lib/image-manifest"

<Image
  {...img("home-classroom")}
  className="aspect-[5/4] lg:aspect-auto border-l border-line object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
/>
```

`img()` returns `{ src, alt, width, height, blurDataURL }` from the manifest.

---

## COMPLETE PLACEHOLDER MAP

Each row = one image to upload and one placeholder to replace.

### HOME PAGE — `app/page.tsx`

| Slot ID | Line | Current code | File to upload | Size px | Aspect |
|---|---|---|---|---|---|
| `home-classroom` | 374 | `<Placeholder label="classroom · hands-on forensic lab" ...>` | `home-classroom.jpg` | 1600×900 | 16:9 |
| `home-case-featured` | 411 | `<div class="absolute inset-0 ph ph-grid" data-label="case file · redacted exhibit">` | `home-case-featured.jpg` | 1200×900 | 4:3 |

> Line 279 and 472 `ph-grid` divs are **decorative CSS grid patterns — do NOT replace**, they are intentional design elements.

---

### ABOUT PAGE — `app/about/page.tsx`

| Slot ID | Line | Current code | File to upload | Size px | Aspect |
|---|---|---|---|---|---|
| `about-founders` | 44 | `<Placeholder label="founders · lab interior" ...>` | `about-founders.jpg` | 960×1200 | 4:5 |
| `team-r01` | 137 (first card) | `<Placeholder label="examiner" ...>` | `team-r01.jpg` | 800×800 | 1:1 |
| `team-r02` | 137 (second card) | `<Placeholder label="examiner" ...>` | `team-r02.jpg` | 800×800 | 1:1 |
| `team-r03` | 137 (third card) | `<Placeholder label="examiner" ...>` | `team-r03.jpg` | 800×800 | 1:1 |
| `team-r04` | 137 (fourth card) | `<Placeholder label="examiner" ...>` | `team-r04.jpg` | 800×800 | 1:1 |
| `team-r05` | 137 (fifth card) | `<Placeholder label="examiner" ...>` | `team-r05.jpg` | 800×800 | 1:1 |
| `team-r06` | 137 (sixth card) | `<Placeholder label="examiner" ...>` | `team-r06.jpg` | 800×800 | 1:1 |
| `team-r07` | 137 (seventh card) | `<Placeholder label="examiner" ...>` | `team-r07.jpg` | 800×800 | 1:1 |
| `team-r08` | 137 (eighth card) | `<Placeholder label="examiner" ...>` | `team-r08.jpg` | 800×800 | 1:1 |
| `team-r09` | 137 (ninth card) | `<Placeholder label="examiner" ...>` | `team-r09.jpg` | 800×800 | 1:1 |
| `team-r10` | 137 (tenth card) | `<Placeholder label="examiner" ...>` | `team-r10.jpg` | 800×800 | 1:1 |

> Line 161 (`label=""`) is hidden behind `{false && ...}` — skip it entirely.

---

### CASE FILES LIST — `app/case-files/page.tsx`

All cards share `className="aspect-[5/4] rounded-card mb-5 card-hover"`. Line 58 — dynamic `{c.imgLabel}`.

| Slot ID | Sanity imgLabel value | File to upload | Size px | Aspect |
|---|---|---|---|---|
| `case-ce2025-014` | matches `c.imgLabel` for CE/2025/014 | `case-ce2025-014.jpg` | 1000×800 | 5:4 |
| `case-ce2025-008` | matches `c.imgLabel` for CE/2025/008 | `case-ce2025-008.jpg` | 1000×800 | 5:4 |
| `case-ce2025-003` | matches `c.imgLabel` for CE/2025/003 | `case-ce2025-003.jpg` | 1000×800 | 5:4 |
| `case-ce2024-097` | matches `c.imgLabel` for CE/2024/097 | `case-ce2024-097.jpg` | 1000×800 | 5:4 |
| `case-ce2024-082` | matches `c.imgLabel` for CE/2024/082 | `case-ce2024-082.jpg` | 1000×800 | 5:4 |
| `case-ce2024-061` | matches `c.imgLabel` for CE/2024/061 | `case-ce2024-061.jpg` | 1000×800 | 5:4 |
| `case-ce2024-048` | matches `c.imgLabel` for CE/2024/048 | `case-ce2024-048.jpg` | 1000×800 | 5:4 |
| `case-ce2024-032` | matches `c.imgLabel` for CE/2024/032 | `case-ce2024-032.jpg` | 1000×800 | 5:4 |
| `case-ce2023-118` | matches `c.imgLabel` for CE/2023/118 | `case-ce2023-118.jpg` | 1000×800 | 5:4 |

**Implementation note:** The case files page pulls `imgLabel` from Sanity. The cleanest approach is to add an `image` field to the `caseFile` Sanity schema and upload images there via the Studio — then the `<Placeholder>` becomes a Sanity `<Image>` that resolves automatically. Alternative: add slug-keyed entries to `image-manifest.ts` and match by slug.

---

### CASE FILE DETAIL PAGE — `app/case-files/[slug]/page.tsx`

| Slot ID | Line | Current code | File to upload | Size px | Aspect |
|---|---|---|---|---|---|
| `case-detail-hero` | 36 | `<Placeholder label="case file · redacted exhibit" className="absolute inset-0">` | `case-detail-hero.jpg` | 1920×1080 | 16:9 |

This is a shared full-bleed hero used on ALL case detail pages.

---

### SECTOR DETAIL PAGES — `app/sectors/[slug]/page.tsx`

Line 67 — dynamic `label={\`${sector.title} · sector\`}`, `className="aspect-[4/5] rounded-card"`.

| Slot ID | Sector slug | File to upload | Size px | Aspect |
|---|---|---|---|---|
| `sector-law-enforcement` | `law-enforcement` | `sector-law-enforcement.jpg` | 960×1200 | 4:5 |
| `sector-legal-litigation` | `legal-litigation` | `sector-legal-litigation.jpg` | 960×1200 | 4:5 |
| `sector-corporate-enterprise` | `corporate-enterprise` | `sector-corporate-enterprise.jpg` | 960×1200 | 4:5 |
| `sector-government` | `government` | `sector-government.jpg` | 960×1200 | 4:5 |
| `sector-bfsi-insurance` | `bfsi-insurance` | `sector-bfsi-insurance.jpg` | 960×1200 | 4:5 |

**Implementation note:** Same approach as case files — add `image` field to Sanity `sector` schema for cleanest solution, or use slug-keyed manifest entries.

---

### INSIGHTS LIST PAGE — `app/insights/page.tsx`

| Slot ID | Line | Current code | File to upload | Size px | Aspect |
|---|---|---|---|---|---|
| `insight-featured-hero` | 49 | `<Placeholder label={\`featured · ${featured.slug}\`} className="aspect-[5/4] md:aspect-auto">` | `insight-featured-hero.jpg` | 1200×960 | 5:4 |
| `article-ios18-apfs` | 64 | dynamic `article · ios18-apfs` | `article-ios18-apfs.jpg` | 1000×600 | 5:3 |
| `article-bec-header` | 64 | dynamic `article · bec-header` | `article-bec-header.jpg` | 1000×600 | 5:3 |
| `article-m365-logs` | 64 | dynamic `article · m365-logs` | `article-m365-logs.jpg` | 1000×600 | 5:3 |
| `article-ai-forensics` | 64 | dynamic `article · ai-forensics` | `article-ai-forensics.jpg` | 1000×600 | 5:3 |
| `article-signal-android` | 64 | dynamic `article · signal-android` | `article-signal-android.jpg` | 1000×600 | 5:3 |
| `article-65b-sc` | 64 | dynamic `article · 65b-sc` | `article-65b-sc.jpg` | 1000×600 | 5:3 |

---

### INSIGHTS ROW (horizontal scroll) — `components/parallax/InsightsRow.tsx`

Line 47 — `<div className="ph aspect-[5/3] ..." data-label={a.label ?? 'article'}>` — uses same article images as above, same slugs. No separate files needed — reuse `article-*.jpg`.

---

### KNOWLEDGE CENTRE — `app/knowledge/KnowledgeContent.tsx`

Line 117 — case file tab (`ph aspect-[5/4]`, `data-label={c.imgLabel}`) — reuses `case-*.jpg`.
Line 139 — insights tab (`ph aspect-[5/3]`, `data-label={a.label}`) — reuses `article-*.jpg`.

**No new files needed here** — same assets as case files and articles.

---

## TOTAL FILE COUNT

| Category | Count |
|---|---|
| Home | 2 |
| About — founders hero | 1 |
| Team headshots | 10 |
| Case file cards | 9 |
| Case detail hero (shared) | 1 |
| Sector portraits | 5 |
| Article / insight images | 7 |
| **Total new files** | **35** |

---

## PUBLIC FOLDER STRUCTURE

```
public/
└── images/
    ├── home-classroom.jpg
    ├── home-case-featured.jpg
    ├── about-founders.jpg
    ├── team-r01.jpg
    ├── team-r02.jpg
    ├── team-r03.jpg
    ├── team-r04.jpg
    ├── team-r05.jpg
    ├── team-r06.jpg
    ├── team-r07.jpg
    ├── team-r08.jpg
    ├── team-r09.jpg
    ├── team-r10.jpg
    ├── case-detail-hero.jpg
    ├── case-ce2025-014.jpg
    ├── case-ce2025-008.jpg
    ├── case-ce2025-003.jpg
    ├── case-ce2024-097.jpg
    ├── case-ce2024-082.jpg
    ├── case-ce2024-061.jpg
    ├── case-ce2024-048.jpg
    ├── case-ce2024-032.jpg
    ├── case-ce2023-118.jpg
    ├── sector-law-enforcement.jpg
    ├── sector-legal-litigation.jpg
    ├── sector-corporate-enterprise.jpg
    ├── sector-government.jpg
    ├── sector-bfsi-insurance.jpg
    ├── insight-featured-hero.jpg
    ├── article-ios18-apfs.jpg
    ├── article-bec-header.jpg
    ├── article-m365-logs.jpg
    ├── article-ai-forensics.jpg
    ├── article-signal-android.jpg
    └── article-65b-sc.jpg
```

---

## IMAGE MANIFEST SCHEMA (`lib/image-manifest.ts`)

This file needs to be created or extended. Shape:

```ts
export const imageManifest = {
  "home-classroom":           { src: "/images/home-classroom.jpg",           alt: "Forensic training classroom with hands-on lab workstations",  width: 1600, height: 900  },
  "home-case-featured":       { src: "/images/home-case-featured.jpg",       alt: "Forensic examiner reviewing redacted case file evidence",       width: 1200, height: 900  },
  "about-founders":           { src: "/images/about-founders.jpg",           alt: "Cyber-Eye Intelligence founders in the forensic lab",           width: 960,  height: 1200 },
  "team-r01":                 { src: "/images/team-r01.jpg",                 alt: "Senior Mobile Forensics Examiner",                             width: 800,  height: 800  },
  "team-r02":                 { src: "/images/team-r02.jpg",                 alt: "Incident Response Lead",                                       width: 800,  height: 800  },
  "team-r03":                 { src: "/images/team-r03.jpg",                 alt: "Digital Intelligence Analyst",                                 width: 800,  height: 800  },
  "team-r04":                 { src: "/images/team-r04.jpg",                 alt: "Malware Reverse Engineer",                                     width: 800,  height: 800  },
  "team-r05":                 { src: "/images/team-r05.jpg",                 alt: "Forensic Tooling Engineer",                                    width: 800,  height: 800  },
  "team-r06":                 { src: "/images/team-r06.jpg",                 alt: "Forensic Apprentice",                                          width: 800,  height: 800  },
  "team-r07":                 { src: "/images/team-r07.jpg",                 alt: "Legal Head",                                                   width: 800,  height: 800  },
  "team-r08":                 { src: "/images/team-r08.jpg",                 alt: "Marketing Head",                                               width: 800,  height: 800  },
  "team-r09":                 { src: "/images/team-r09.jpg",                 alt: "Co-Founder & Business Strategy Lead",                          width: 800,  height: 800  },
  "team-r10":                 { src: "/images/team-r10.jpg",                 alt: "Co-Founder & Finance Head",                                    width: 800,  height: 800  },
  "case-detail-hero":         { src: "/images/case-detail-hero.jpg",         alt: "Forensic evidence table with numbered exhibit bags",            width: 1920, height: 1080 },
  "case-ce2025-014":          { src: "/images/case-ce2025-014.jpg",          alt: "Mobile device forensic extraction — deleted data recovery",     width: 1000, height: 800  },
  "case-ce2025-008":          { src: "/images/case-ce2025-008.jpg",          alt: "BEC fraud email header analysis across jurisdictions",          width: 1000, height: 800  },
  "case-ce2025-003":          { src: "/images/case-ce2025-003.jpg",          alt: "Insider threat cloud exfiltration investigation",               width: 1000, height: 800  },
  "case-ce2024-097":          { src: "/images/case-ce2024-097.jpg",          alt: "Ransomware dwell time analysis timeline",                       width: 1000, height: 800  },
  "case-ce2024-082":          { src: "/images/case-ce2024-082.jpg",          alt: "Geolocation timeline reconstruction for legal proceedings",     width: 1000, height: 800  },
  "case-ce2024-061":          { src: "/images/case-ce2024-061.jpg",          alt: "Microsoft 365 mailbox rule reversal — breach containment",      width: 1000, height: 800  },
  "case-ce2024-048":          { src: "/images/case-ce2024-048.jpg",          alt: "Cell-site triangulation narcotics syndicate investigation",     width: 1000, height: 800  },
  "case-ce2024-032":          { src: "/images/case-ce2024-032.jpg",          alt: "Ministry document leak traced to single endpoint",             width: 1000, height: 800  },
  "case-ce2023-118":          { src: "/images/case-ce2023-118.jpg",          alt: "Hospital ransomware response — ICU systems restored",          width: 1000, height: 800  },
  "sector-law-enforcement":   { src: "/images/sector-law-enforcement.jpg",   alt: "Law enforcement digital forensics support",                    width: 960,  height: 1200 },
  "sector-legal-litigation":  { src: "/images/sector-legal-litigation.jpg",  alt: "Legal and litigation digital evidence services",               width: 960,  height: 1200 },
  "sector-corporate-enterprise": { src: "/images/sector-corporate-enterprise.jpg", alt: "Corporate enterprise internal investigation support",    width: 960,  height: 1200 },
  "sector-government":        { src: "/images/sector-government.jpg",        alt: "Government agency forensic and intelligence services",         width: 960,  height: 1200 },
  "sector-bfsi-insurance":    { src: "/images/sector-bfsi-insurance.jpg",    alt: "BFSI and insurance fraud investigation services",             width: 960,  height: 1200 },
  "insight-featured-hero":    { src: "/images/insight-featured-hero.jpg",    alt: "Featured forensic intelligence insight",                      width: 1200, height: 960  },
  "article-ios18-apfs":       { src: "/images/article-ios18-apfs.jpg",       alt: "iOS 18 APFS encryption and WhatsApp data recovery",           width: 1000, height: 600  },
  "article-bec-header":       { src: "/images/article-bec-header.jpg",       alt: "BEC fraud email header forensics workflow",                   width: 1000, height: 600  },
  "article-m365-logs":        { src: "/images/article-m365-logs.jpg",        alt: "Microsoft 365 cloud forensics log retention analysis",        width: 1000, height: 600  },
  "article-ai-forensics":     { src: "/images/article-ai-forensics.jpg",     alt: "Critical analysis of AI-powered forensics tools",             width: 1000, height: 600  },
  "article-signal-android":   { src: "/images/article-signal-android.jpg",   alt: "Signal sealed-sender artefact carving on Android 14",        width: 1000, height: 600  },
  "article-65b-sc":           { src: "/images/article-65b-sc.jpg",           alt: "Supreme Court ruling on Section 65B digital evidence",        width: 1000, height: 600  },
} as const

export type ImageSlot = keyof typeof imageManifest
export function img(slot: ImageSlot) { return imageManifest[slot] }
```

---

## PAGES THAT NEED blur IMPORT ADDED

After running `pnpm images`, `lib/image-blur.ts` will contain base64 blurDataURLs keyed by slot id.
Import it and pass `blurDataURL` + `placeholder="blur"` to every `<Image>`.

---

## SKIP LIST (do NOT replace)

| Location | Why |
|---|---|
| `app/page.tsx:279` — `ph-grid opacity-30` | Decorative CSS grid pattern, intentional |
| `app/page.tsx:472` — `ph-grid opacity-40` | Decorative CSS grid pattern, intentional |
| `app/services/[slug]/page.tsx:118` — `ph-grid opacity-40` | Decorative CSS grid pattern, intentional |
| `app/about/page.tsx:161` — `label=""` | Hidden behind `{false && ...}`, not rendered |

---

## SESSION PROMPT TO USE

Paste this at the start of the new session:

```
Read IMAGE_UPLOAD_CONTEXT.md at the repo root. I have uploaded all 31 generated
images into public/images/ using the exact filenames listed in that file.

Tasks:
1. Create lib/image-manifest.ts using the manifest schema in the context file
2. Run `pnpm images` to generate WebP variants and lib/image-blur.ts
3. Replace every Placeholder listed in the COMPLETE PLACEHOLDER MAP section
   with next/image using the img() helper from the manifest
4. For dynamic placeholders (case files, sectors, articles) that loop over
   Sanity data — match images by slug using the manifest key pattern
5. Do NOT touch the four items in the SKIP LIST
6. Run `pnpm typecheck` and `pnpm build` — both must pass before committing
```
