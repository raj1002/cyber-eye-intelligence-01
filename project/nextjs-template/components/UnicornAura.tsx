"use client";

import { useEffect } from "react";

/**
 * Unicorn Studio background animation, tinted via CSS in globals.css.
 * Place inside a `position: relative` parent (e.g. the hero <section>).
 *
 * Usage:
 *   <section className="relative overflow-hidden">
 *     <UnicornAura projectId="bKN5upvoulAmWvInmHza" />
 *     ...content (must be z-indexed above)...
 *   </section>
 */
export default function UnicornAura({
  projectId,
  showGrid = true,
}: {
  projectId: string;
  showGrid?: boolean;
}) {
  useEffect(() => {
    // Guard against double-init across client navigations
    const w = window as unknown as { UnicornStudio?: { isInitialized: boolean; init: () => void } };
    if (w.UnicornStudio?.isInitialized) return;
    w.UnicornStudio = { isInitialized: false, init: () => {} };

    const s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    s.async = true;
    s.onload = () => {
      if (w.UnicornStudio && !w.UnicornStudio.isInitialized) {
        w.UnicornStudio.init();
        w.UnicornStudio.isInitialized = true;
      }
    };
    document.head.appendChild(s);
  }, []);

  return (
    <div className="aura-wrap" aria-hidden="true">
      <div data-us-project={projectId} />
      <div className="aura-tint" />
      {showGrid && <div className="absolute inset-0 ph-grid opacity-30" />}
    </div>
  );
}
