# Next.js Wireframe Template

_Started 2026-05-14 15:25 UTC_

---

## User

I have uploaded some of the system design images. Now I want you to fill the wireframe with dummy text and give a finished template in next.js

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: read_file]_

Let me look at the existing wireframe content to understand structure and naming.

_[tool: update_todos]_

I have everything I need. Let me plan this carefully. You have a comprehensive wireframe for **Cyber-Eye Intelligence** (digital forensics / investigation / training) plus a clear design system (dark mode, emerald `#10B981` accent, Inter + JetBrains Mono, 8px radius, pill controls).

I'll deliver:
1. **A live preview HTML** so you can see the finished design immediately
2. **A Next.js 14 (App Router) template** — folder of source files you can `npm install && npm run dev`

Note: I'll create an *original* design that uses your design system tokens — not a copy of the inspiration screenshot's branded UI.

_[tool: write_file]_

Let me build the preview HTML first — this will show the rendered template you'd get from the Next.js build.

_[tool: update_todos]_

Now the Next.js project. I'll scaffold all the config + shared layout + the key pages.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now the homepage:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: update_todos]_

Let me verify the preview renders cleanly, then package the Next.js folder for download.

_[tool: done]_

_[tool: present_fs_item_for_download]_

_[tool: fork_verifier_agent]_

Done. Two deliverables:

**1. Live preview** (`Cyber-Eye Intelligence.html`) — open it to navigate the rendered site: Home → Services → Service detail → Sectors → Case files → Case file detail → Training → Insights → About → Contact. Dark mode + emerald accent, Inter + JetBrains Mono, per your design tokens.

**2. Next.js 14 template** (`nextjs-template/` — download card above) — App Router, TypeScript, Tailwind, with:
- 13 page routes including dynamic `[slug]` routes for services (×7), sectors (×5), case files (×6), legal (×3)
- Shared `Header` / `Footer` / `Primitives` components
- All catalog content in one file (`lib/data.ts`) so you can swap dummy data in one place
- Tailwind config preloaded with `ink / surface / line / mute / accent` tokens and `card / pill / btn-*` component classes
- Image placeholder system you can later swap to `next/image`

Run: `cd nextjs-template && npm install && npm run dev`.

Caveats / next steps (also in the README):
- Each `/services/[slug]` shares the same scaffold — copy differs only by service title; differentiate per slug as you fill real content
- `/insights/[slug]`, `/team`, `/locations`, `/search`, `robots.ts`, `sitemap.ts` and `llms.txt` are not yet wired — they're listed in the original wireframes
- JSON-LD schema (FAQPage, BreadcrumbList, Article) is left for you to wire once copy is final

## User

can you add this react background animation. adapt the color to the website theme.
 <!-- To remix this file, use this link: https://unicorn.studio/remix/5VrCwgw3Fc530VETvedZ. Please note that publishing a remixed asset without watermark requires a Legend account in Unicorn Studio. -->
<div class="aura-background-component top-0 w-full -z-10 absolute h-full">
  <div data-us-project="bKN5upvoulAmWvInmHza" class="absolute w-full h-full left-0 top-0 -z-10"></div>
  <script type="text/javascript">
    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  </script>
</div>

## Assistant

_[tool: str_replace_edit]_

I'll add the Unicorn Studio animation as the hero background and tint it toward your emerald/dark theme using CSS filters + an overlay. Let me also add it to the Next.js layout so both deliverables stay in sync.

_[tool: grep]_

_[tool: grep]_

Good, only one `</style>`. Now replace the hero's static background layers with the Unicorn Studio scene:

_[tool: str_replace_edit]_

Now add the Unicorn Studio loader script at the end of the body:

_[tool: str_replace_edit]_

Let me verify it renders cleanly and the canvas takes the tint:

_[tool: show_html]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: eval_js]_

Screenshots use DOM re-rendering and don't capture WebGL canvases properly. Let me verify the canvas is actually loading:

_[tool: str_replace_edit]_

Canvas is rendering (908×1570) — screenshots just can't capture WebGL. You'll see the actual aura live. Now let me mirror this into the Next.js template:

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: done]_

Added the Unicorn Studio aura behind the hero in both deliverables.

**Tint approach** (in `globals.css` / inline `<style>`):
- `filter: hue-rotate(110deg) saturate(0.55) brightness(0.55)` — pushes the original aura colors toward the emerald/green family
- `mix-blend-mode: screen` — lets it layer cleanly over the dark `#050505` background
- `.aura-tint` overlay — a soft emerald radial top-right + a vertical dark gradient (35% → 85%) so the aura fades into solid ink before the next section, keeping body type fully legible
- Faint `ph-grid` at 30% opacity sits on top for a "scanner" texture

**Files touched**
- `Cyber-Eye Intelligence.html` — hero section + script loader at end of body
- `nextjs-template/components/UnicornAura.tsx` — new client component
- `nextjs-template/app/page.tsx` — hero now renders `<UnicornAura projectId="bKN5upvoulAmWvInmHza" />`
- `nextjs-template/app/globals.css` — `.aura-wrap`, `.aura-tint` rules

Tweak knobs if you want a different mood: change `hue-rotate` (try `90deg` greener, `140deg` teal), bump `saturate` toward `1.0` for more color, or drop `mix-blend-mode` if you want the original tones to show through more.

Re-download the Next.js zip above to get the new component.

## User

remove the evidence workstation/fwd-lab element. Instead, add the animation of a rotating globe taking reference from the image. in the data point information replace them with digital forensics jargons.

## Assistant

_[tool: str_replace_edit]_

Replacing the placeholder card with a wireframe rotating-globe component. Adding the styles first:Now replace the placeholder card with the globe stage:

_[tool: str_replace_edit]_

Let me also bump the hero's grid alignment so the globe shows nicely. Verify visually:

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: done]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: done]_

_[tool: write_file]_

Now mirror this to the Next.js template:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

## User

Save as standalone HTML: Cyber-Eye Intelligence.html

## Assistant

## User

i want glassmorphic fixed navigation bar.

## Assistant

