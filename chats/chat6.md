# Backend & Production Plan

_Started 2026-05-21 11:45 UTC_

---

## User

First, I want to populate the images. Second, I want the backend and production work to be done. Kindly put forthe step-by-step plan for the same using claude code.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

I'll put together a comprehensive Claude Code playbook for both phases — image population and backend/production — styled to match the Cyber-Eye dark forensic aesthetic. Let me first scan the placeholder inventory so the plan is concrete.

_[tool: grep]_

_[tool: write_file]_

I have what I need. Now I'll build a focused Claude Code playbook — styled in the Cyber-Eye dark forensic aesthetic (ink/surface/line/accent green tokens, Inter + JetBrains Mono) so it reads like a project artifact, not a generic doc. It covers the two phases with copy-paste prompts and a concrete file/route inventory.

_[tool: done]_

Delivered → **Claude Code Playbook.html**

A two-phase engineering brief styled in the Cyber-Eye dark forensic aesthetic (ink/surface/line tokens, accent green, Inter + JetBrains Mono).

**Phase 1 — Populate images** (1–2 days):
1.1 Audit — grep every `<Placeholder>` into a typed `image-manifest.ts`
1.2 Source — decide photo / editorial / SVG per slot, with creative guard-rails (no hooded-hacker tropes)
1.3 Process — `sharp` pipeline → WebP × 3 sizes + blurDataURL
1.4 Swap — mechanical `<Placeholder>` → `next/image` pass, one PR per route group
1.5 Verify — Playwright snapshots + Lighthouse gate

**Phase 2 — Backend & production** (2–3 weeks):
2.1 Content — replace `lib/data.ts` with Sanity / Payload / MDX (with copy-paste prompt for Sanity scaffold)
2.2 Intake — `/contact` Server Action + Zod + Turnstile + Upstash rate-limit + Resend + encrypted Supabase persistence
2.3 SEO — sitemap, robots, JSON-LD, `@vercel/og`, `llms.txt`
2.4 Telemetry — Plausible / Sentry / BetterStack
2.5 Hardening — CSP, HSTS, DPDP Act, counsel-reviewed legal copy
2.6 Deploy — Vercel `bom1`, GH Actions CI, Cloudflare DNS
2.7 Go-live checklist

Each step ships with a **copy-paste Claude Code prompt** you can run verbatim. Appendix codifies repo conventions (one PR per step, manifests over magic, branch protection, `CLAUDE.md`).

Caveats / next moves:
- The CMS choice (Sanity vs Payload vs MDX) needs your call before Phase 2 starts — that decision changes 2.1 and 2.3.
- Image inventory in 1.1 is the table from the audit I just ran; the manifest prompt will let Claude Code extend it with anything I missed.
- Want me to draft the actual `CLAUDE.md` + `RUNBOOK.md` starter files next, or build a checklist version of this as a printable PDF?

_[tool: fork_verifier_agent]_

Playbook is live at **Claude Code Playbook.html**. Let me know which way you want to go on the CMS decision and whether to draft the `CLAUDE.md` + `RUNBOOK.md` starters next.

## User

i would be using the sanity CMS. Draft both md file. But before that i want to experiment on the parallax scroll for the website.

## Assistant

_[tool: update_todos]_

Let me build a parallax exploration first — several techniques you can scroll through and compare, with a Tweaks panel to dial parameters. Then we'll do the docs.

_[tool: copy_starter_component]_

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

Delivered → **Parallax Experiments.html**

Six techniques in a single scrollable lab — each labeled `EXP / 0X`, right-side jump dots, live tweaks panel:

- **01 · Layered depth** — three planes (atmosphere / lattice / hex field / floating cards) translate at independent rates around viewport center
- **02 · Sticky stack** — three workflow panels (Seize / Image / Examine) pin and slide over each other
- **03 · Pinned scrub** — left workflow list drives the right preview frame; scroll selects the active stage
- **04 · Clip-path reveal** — case-file backdrop opens from a thin horizontal strip to full-bleed
- **05 · Horizontal pin** — all seven services scroll sideways while page scrolls vertically
- **06 · Stat scrub** — `600+ / 98% / 24/7 / 12` count up with bar fills when they enter view

Tweaks panel (bottom-right) — toggle on via the toolbar:
- Parallax intensity (0–2×)
- Sticky stack offset
- Horizontal speed
- Reduce motion (respects `prefers-reduced-motion` automatically)
- Debug grid

Honest read on each:
- **01** and **04** feel right for Cyber-Eye — disciplined, no theatrics
- **02** and **05** are more SaaS-coded; great storytelling but ask whether a forensics firm should lean that performative
- **03** is the sleeper hit if you want the services page to feel like a real workflow
- **06** is cheap to ship and almost universally pleasant

Scroll all the way through, dial intensity, and tell me which 2–3 to bake into the Next.js build. After that I'll draft the `CLAUDE.md` (Sanity-aware) and `RUNBOOK.md`.

_[tool: fork_verifier_agent]_

Parallax lab is live. Scroll through, dial the tweaks, and tell me which techniques to keep — then I'll roll those into the Next.js build and draft `CLAUDE.md` + `RUNBOOK.md`.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

Verifier caught a real bug — `overflow: hidden` on the base `.exp` class becomes the scroll container for every sticky descendant, cancelling them. Fix is surgical: drop it from the base, keep it on the elements that actually need clipping (intro grid, EXP1 layers, and each sticky stage itself, which is allowed).

_[tool: done]_

Fixed. Sticky now works across EXP 02 / 03 / 04 / 05 — the offending `overflow: hidden` is off the base `.exp` and only applied where it doesn't trap stickies (intro, exp1, exp6, and each sticky stage itself).

_[tool: fork_verifier_agent]_

Sticky fix is in. Awaiting your verdict on which techniques to keep, then I'll wire them into the Next.js build alongside the `CLAUDE.md` + `RUNBOOK.md` drafts.

## User

okay. except 02 and 05, adapt the for cyber eye website.

## Assistant

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: copy_files]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now append the parallax engine before `</body>`:

_[tool: done]_

Delivered → **Cyber-Eye Intelligence v2.html**

Four parallax techniques adapted from the lab and wired into the real site (EXP 02 sticky-stack and EXP 05 horizontal-pin dropped, per your call):

| # | Technique | Where it lands |
|---|---|---|
| **01** | Layered depth | Home **hero** — aura backdrop, floating forensic chips (820 MB/s · ingest, +418 devices, § 65B certified, etc.) drift at independent speeds. Large "person" chips drift slower (depth-far); small jargon chips drift faster (depth-near). |
| **04** | Clip-path reveal | Home **Featured Case File** — the redacted exhibit image opens from a horizontal slit to full-bleed as you scroll into the section. Added corner registration marks + frame meta (`CE / 2025 / 014 · ADMITTED`). |
| **03** | Pinned scrub | Services hub **"How an engagement works"** — replaced the 4-card grid with a sticky stage: left = scroll-driven step list (Intake / Acquire / Examine / Report), right = matching frame stage (NDA card → write-block progress → twin-review readout → § 65B certificate). |
| **06** | Stat scrub | Home **hero stats** — `600+ / 98% / 24/7 / 12` now count up from zero when the band enters view. |

Engine is a single self-contained `<script>` block at the end of `body` — no external deps, rAF-throttled, respects `prefers-reduced-motion`, no console errors.

A couple of things to verify yourself:
- The engagement section now adds ~280vh of scroll height on the services page. If that feels long, dial the section's `min-height: 280vh` down to `220vh` or `180vh`.
- The hero chips drift may be louder than you want — the speed range is `0.35–0.60` for small chips, `0.15–0.25` for large. Tell me your preference and I'll tighten.

Verify on your end. Once you sign off, I'll move to `CLAUDE.md` + `RUNBOOK.md` for the Sanity-backed build.

_[tool: fork_verifier_agent]_

Parallax baked into v2. Confirm it looks right and I'll cut the `CLAUDE.md` + `RUNBOOK.md` next.

## User

Verifier agent check completed

## Assistant

Verifier confirmed all four techniques are live. Ready to draft `CLAUDE.md` + `RUNBOOK.md` whenever you give the word.

## User

for the testimonials and latest writings, you can put horizontal movement and also the numbers can be put as counters. I also want you to cross-check all the back-links please.

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

Found the broken links. Let me fix them and add the horizontal sections + extra counters.

**Link audit results:**
- ❌ **`data-route="service-detail"`** (used 11× across nav dropdowns + mobile drawer + home service cards) — no `page-service-detail` exists → clicking these blanks the page. Fix: remap to `data-route="services" data-anchor="fam-{family}"` since the services hub already has `id="fam-digital-forensics"` etc.
- ⚠️ Footer **Privacy / Terms / § 65B disclaimers** have no `href` — they look clickable but go nowhere. Flagging — these need real legal pages later (covered in your Phase 2 Step 2.5).
- ✅ All other routes wire correctly. `case-files` and `insights` legacy hashes are aliased to `knowledge`. FAQ anchor resolves.

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I'll restructure testimonials (continuous marquee) and insights (drag-scroll row), add counters to case-file stats, and bolster the router so bookmarks to `#service-detail` don't blank the page.Now replace testimonials with a continuous marquee (6 voices, pause-on-hover) and insights with a drag-scroll horizontal row (6 articles):

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: grep]_

_[tool: str_replace_edit]_

Now patch the parallax engine for decimal counters + custom suffix-class, add insights drag/arrow controls, and add the `service-detail` router alias:

_[tool: str_replace_edit]_

Now add the insights drag-scroll + arrow logic to the engine's `init()`:

_[tool: str_replace_edit]_

Now add the `service-detail` alias to the router so any bookmarked URL still resolves:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

The "empty #root" warning is a false positive — this page is vanilla HTML/Tailwind, not React. No console errors, all changes landed cleanly.

Summary of changes shipped to v2:

**Link audit + fixes**
- ✅ 15× broken `data-route="service-detail"` links rewritten to `data-route="services" data-anchor="fam-{family}"` — every services dropdown / mobile drawer / home service card now scrolls to the right family section on the services hub
- ✅ Router gained a `service-detail → services` alias so legacy bookmarks don't blank the page
- ⚠️ Flagged: footer **Privacy / Terms / § 65B disclaimers** still have no `href` — needs real legal pages (already on Phase 2 step 2.5)

**Testimonials → horizontal continuous marquee**
- Expanded from 3 → 6 voices
- 80s linear drift, pauses on hover, edges fade with a mask gradient
- Duplicate set for seamless loop, aria-hidden on the clones

**Insights → drag-scroll horizontal row**
- Expanded from 3 → 6 articles
- Native pointer drag, snap-to-card, mouse-wheel scroll, ←/→ arrow buttons that disable at the ends
- Arrows + "All →" CTA now route to `knowledge` with `data-tab="insights"`

**Counters added to case file mini-stats**
- `2.4TB` / `14` / `9mo` now count up on viewport entry (decimal-safe; custom suffix class so the `text-xl` styling on TB/mo is preserved)

Let me know if anything looks off, then I'll cut the `CLAUDE.md` + `RUNBOOK.md`.Awaiting verifier. Once it confirms, I'll move to `CLAUDE.md` + `RUNBOOK.md` for the Sanity-backed Next.js build.

## User

Verifier agent check completed

## Assistant

Verified clean. Cutting `CLAUDE.md` + `RUNBOOK.md` for the Sanity-backed build now.

_[tool: update_todos]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: update_todos]_

Both files written into `nextjs-template/`:

**📄 `nextjs-template/CLAUDE.md`** — Persistent guide every Claude Code session reads on boot.
- Hard rules (one PR per task, no secrets, Sanity is source-of-truth, Server Actions for mutations, a11y non-negotiable)
- Design tokens (locked color/type/radius/spacing — no inventing new values)
- Full file map including the `studio/`, `lib/sanity.ts`, `components/parallax/` (the four techniques from v2 each as their own component), the image manifest + blur layer
- Sanity conventions (schema base fields, query patterns — typed helpers only, no raw GROQ, revalidation strategy by content type)
- Copy-paste prompts for the three most-common ops: add a service family, wire a new form, swap a placeholder image
- "Never do" list — gradient heroes, hooded-hacker imagery, third typefaces, `any`, console.log PII, raw client fetches to Server Actions
- Performance gates that CI enforces (LCP, CLS, a11y, perf scores)
- Forensic-specific hygiene (audit logs, no source maps to browser, strict CSP, encrypt matter narratives)

**📄 `nextjs-template/RUNBOOK.md`** — Operational playbook for the on-call human.
- Architecture diagram (Cloudflare → Vercel `bom1` → Sanity / Supabase / Resend)
- Environments & access matrix (prod / staging / preview / local)
- Deploy flow (standard + high-risk path with staging-first and a Tuesday-morning IST merge window)
- **Rollback** — Vercel instant promote (<60s) + git revert + when neither works (schema-locked content, applied DB migrations)
- **Restore content** from Sanity nightly snapshots (full dataset swap via alias + single-doc via Studio history)
- **Restore intake** from Supabase backups + the libsodium decrypt procedure with audit logging
- **Secret rotation** — quarterly + emergency-leak playbooks
- Common incidents catalogue (5xx everywhere, contact form 500, Studio won't load, stale ISR, LCP regression, Sentry alerts) — each with a numbered "do this" checklist
- Routine maintenance cadence: weekly / monthly / quarterly / annually
- Escalation contacts table + public-communication thresholds + a copy-paste incident report template

Quick caveats:
- Replace `<set at deploy>` placeholders in the contacts table once the on-call rotation and founder details are confirmed.
- Both docs assume the Phase-2 backend pieces (Sanity studio, Supabase intake table with `matter_encrypted`, Resend, Upstash, Turnstile, the decrypt script) actually exist. They will once Claude Code executes the Phase-2 prompts from the playbook. Today they're spec.

Want me to also generate the matching `.env.example` skeleton and the GitHub Actions CI workflow stub now, or pause here?

## User

now deploy it to claude code.

## Assistant

_[tool: present_fs_item_for_download]_

I can't directly hand a project to Claude Code from here — Claude Code runs on your machine against your repo. What I CAN do is package everything so you can spin it up in one go.

Here's the handoff:

**Step 1 — Download the package****Step 2 — Get it onto your machine + into git**

```bash
unzip nextjs-template.zip
cd nextjs-template
git init && git add . && git commit -m "init: cyber-eye scaffold"
gh repo create cyber-eye-intelligence --private --source=. --push
```

**Step 3 — Install Claude Code (if you haven't)**

```bash
npm install -g @anthropic-ai/claude-code
```

**Step 4 — Run Claude Code in the repo**

```bash
cd cyber-eye-intelligence
claude
```

On first launch it'll authenticate. Once you're in, it will automatically read `CLAUDE.md` at the repo root — that's the persistent context I wrote, so every session knows the rules, tokens, file map, and Sanity conventions.

**Step 5 — Kick off the first task**

Open the Claude Code Playbook I delivered earlier (`Claude Code Playbook.html`). Each numbered step (1.1, 1.2, 2.1, 2.2…) has a copy-paste prompt. Start with **1.1 Audit** to generate the image manifest, then go in order.

If anything in `CLAUDE.md` or `RUNBOOK.md` reads off once you're actually executing — tighten the wording back here, and I'll fold the revisions in.

