/**
 * Wireframe rotating globe with floating digital-forensics jargon chips.
 * Pure SVG + CSS; no client-side JS needed (SMIL animations).
 *
 * Usage:
 *   <div className="aspect-square">
 *     <ForensicGlobe />
 *   </div>
 */
export default function ForensicGlobe() {
  return (
    <div className="globe-stage" aria-hidden="true">
      <svg
        className="globe-svg"
        viewBox="-220 -220 440 440"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#10B981" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle className="halo" cx="0" cy="0" r="210" fill="url(#globe-glow)" />
        <circle className="ring" cx="0" cy="0" r="178" />

        {/* Static latitudes */}
        <g>
          <ellipse className="lat lat-acc" cx="0" cy="0" rx="170" ry="170" />
          <ellipse className="lat" cx="0" cy="0" rx="170" ry="48" />
          <ellipse className="lat" cx="0" cy="-70" rx="155" ry="40" />
          <ellipse className="lat" cx="0" cy="70" rx="155" ry="40" />
          <ellipse className="lat" cx="0" cy="-118" rx="122" ry="28" />
          <ellipse className="lat" cx="0" cy="118" rx="122" ry="28" />
          <ellipse className="lat" cx="0" cy="-148" rx="80" ry="16" />
          <ellipse className="lat" cx="0" cy="148" rx="80" ry="16" />
        </g>

        {/* Rotating meridians: rx oscillation simulates 3D spin */}
        <g>
          {[0, -3.5, -7, -10.5].map((begin, i) => (
            <ellipse key={i} className="mer" cx="0" cy="0" rx="0" ry="170">
              <animate
                attributeName="rx"
                values="0;170;0"
                dur="14s"
                repeatCount="indefinite"
                begin={`${begin}s`}
              />
            </ellipse>
          ))}
        </g>

        {/* Dots */}
        <g>
          {[
            ["-140", "-22", 2.2, "blink-1"],
            ["-92", "-110", 2.6, "bright"],
            ["-20", "-150", 1.8, "blink-2"],
            ["62", "-130", 3, "accent"],
            ["130", "-90", 2, ""],
            ["160", "-10", 2.2, "blink-3"],
            ["138", "55", 2.4, "bright"],
            ["92", "118", 2, "blink-1"],
            ["-10", "155", 3, "accent"],
            ["-95", "120", 2, ""],
            ["-150", "50", 2.2, "blink-2"],
            ["-50", "-60", 1.6, ""],
            ["40", "-30", 1.6, "blink-3"],
            ["-10", "50", 1.6, ""],
            ["80", "20", 1.8, "blink-1"],
            ["-60", "90", 1.6, ""],
            ["20", "100", 2, "bright"],
            ["-110", "-65", 1.8, "blink-2"],
            ["115", "-35", 1.8, ""],
            ["55", "60", 1.6, "blink-3"],
          ].map(([cx, cy, r, kind], i) => {
            const base =
              kind === "bright"
                ? "globe-dot-bright"
                : kind === "accent"
                ? "globe-dot-accent"
                : "globe-dot";
            const blink =
              typeof kind === "string" && kind.startsWith("blink") ? ` ${kind}` : "";
            return (
              <circle
                key={i}
                className={`${base}${blink}`}
                cx={cx as string}
                cy={cy as string}
                r={r as number}
              />
            );
          })}
        </g>
      </svg>

      {/* Chips */}
      <div className="chip-fl chip-anim-1" style={{ top: "4%", left: "50%", transform: "translateX(-50%)" }}>
        <span className="pulse-dot" /> 820 MB/s · ingest
      </div>
      <div className="chip-fl" style={{ top: "10%", right: "0%" }}>
        <span className="icn">⌂</span> +418 · devices
      </div>
      <div className="chip-fl chip-anim-2" style={{ top: "22%", left: "-10%" }}>
        19.5 TB · imaged
      </div>
      <div className="chip-fl lg" style={{ top: "30%", left: "8%" }}>
        <span className="ava" />
        <div className="stack">
          <span className="nm">Hash verified · SHA-256</span>
          <span className="hd">@p_ranganathan / lead</span>
        </div>
      </div>
      <div className="chip-fl chip-anim-3" style={{ top: "36%", right: "-6%" }}>
        2.41 PB · archive
      </div>
      <div className="chip-fl" style={{ top: "44%", right: "4%" }}>
        <span className="icn">
          <svg viewBox="0 0 10 10" fill="none">
            <path d="M1 5l3 3 5-6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
        § 65B · certified
      </div>
      <div className="chip-fl" style={{ top: "60%", left: "-4%" }}>
        <span className="icn">●</span> CoC · sealed
      </div>
      <div className="chip-fl chip-anim-1" style={{ top: "66%", right: "2%" }}>
        <span className="icn">
          <svg viewBox="0 0 10 10" fill="none">
            <path d="M2 5h6M5 2v6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
        Write-blocker on
      </div>
      <div className="chip-fl lg chip-anim-2" style={{ bottom: "4%", left: "4%" }}>
        <span className="ava" />
        <div className="stack">
          <span className="nm">M. Khan</span>
          <span className="hd">@triage_03 · online</span>
        </div>
      </div>
      <div className="chip-fl lg" style={{ bottom: "0%", left: "50%", transform: "translateX(-50%)" }}>
        <span className="ava" />
        <div className="stack">
          <span className="nm">P. Ranganathan</span>
          <span className="hd">@lead_exam · imaging</span>
        </div>
      </div>
    </div>
  );
}
