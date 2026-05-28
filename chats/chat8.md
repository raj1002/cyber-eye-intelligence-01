# Blurred Text Correction

_Started 2026-05-28 12:28 UTC_

---

## User

there are still blurred text i can see. Correct them and also add some AI related text in bold to highlight.

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll fix the blur effect on text animations and add bold AI-related text in the hero section.Now let me update the hero lede to add bold AI-related text:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Let me also add an AI chip to the floating chips for visual consistency:

_[tool: done]_

Done. Changes:

- **Removed `filter: blur()` from all scroll animations** (`ce-rise`, `ce-hero-exit`, `ce-word-rise`) — text now stays sharp throughout entry/exit transitions, only fade + translateY remain.
- **Added bold AI highlights in the hero lede**: "AI-assisted triage" and "machine-learning anomaly detection" rendered in `text-white font-semibold`.
- **Added an "AI triage · running" floating chip** near the globe for visual reinforcement.

The empty `#root` warning is unrelated — this page mounts its content directly in `<body>`, not in `#root`.

## User

so the text are notin motion on scroll but i need them. Also, the Hero Digital Forenesics that holds up in court in not appearing clear. check and iterate.

## Assistant

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: grep]_

_[tool: read_file]_

Let me check the current hero/animation state and beef up motion + hero clarity:

_[tool: str_replace_edit]_

Now let me strengthen the hero headline visual clarity — boost weight, add a text-shadow for crispness against the aura, and make the aura darker beneath the headline:

_[tool: str_replace_edit]_

Now let me darken the aura tint slightly behind the hero text area so the headline reads cleaner:

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: done]_

Done. Iterated:

**Motion is back & more visible**
- `ce-rise` (section entries) now translates **48px** instead of 28 — clearly perceptible glide.
- `ce-word-rise` (per-word stagger on headlines) now from **52px**.
- Hero exit reworked: stays at full opacity through the first 60% of scroll-out, just drifting up subtly, then fades — so the headline reads crisp much longer before it leaves.

**Hero headline clarity**
- `#hero-parallax .display` boosted to **font-weight 700** with a layered text-shadow (dark base + soft halo) so "Digital forensics that holds up in court." reads crisp against the aura.
- Accent ("in court.") gets an emerald glow shadow.
- Hero lede color brightened (`#D4D4D8`) and the bold AI phrases lift to pure white.
- Aura tint adds a dark radial behind the left text column so the headline sits on a deeper background.

## User

Apply comment

## Assistant

_[tool: eval_js_user_view]_

_[tool: str_replace_edit]_

Found it — the label has the hero-exit animation but the hex marker next to it doesn't, so they drift apart on scroll. Let me animate the whole row together:

_[tool: str_replace_edit]_

_[tool: done]_

Fixed. The hex marker and "[ 01 — Digital Forensics ]" label now sit in a shared `.hero-eyebrow` row that animates as a single unit on scroll, so they stay locked together instead of the label drifting up while the hex stays put.

## User

Apply comment

## Assistant

_[tool: grep]_

_[tool: eval_js_user_view]_

_[tool: str_replace_edit]_

The eyebrow and heading each have their own view() timeline, so the smaller eyebrow drifts faster than the big headline. Fix: use a shared timeline anchored to the hero section so everything moves in sync.

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: eval_js_user_view]_

_[tool: done]_

The eyebrow and headline now share the same animation timeline anchored to the hero section, so they're locked at identical transforms and opacities throughout the scroll-out. The eyebrow sits 48px above the headline and stays there.Fixed. The hero eyebrow ("[ 01 — Digital Forensics ]") now stays locked above the heading throughout the scroll-out — they share a single `view-timeline` named `--hero` anchored to the hero section, so every hero element progresses at the exact same rate instead of each element running its own per-element timeline (which was making the smaller eyebrow finish its exit way before the headline).

## User

sperate the training part from AI brief withe section break.

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

Added a clean section break between the AI Methodology investor strip and the Cyber Eye Academy training callout — a horizontal rule with the hex marker and bracketed mono labels (`[ End · §AI Methodology ]` ↔ `[ Begin · §Cyber Eye Academy ]`), plus a hairline `border-t` on the training section so the two sections read as distinct chapters rather than running into each other.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Removed the labelled section break. The hairline `border-t` on the training section stays, so the two sections still read as distinct chapters.

