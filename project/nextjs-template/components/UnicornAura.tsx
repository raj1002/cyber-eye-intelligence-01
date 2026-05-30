"use client";

import { useEffect } from "react";

export default function UnicornAura({
  projectId,
  showGrid = true,
}: {
  projectId: string;
  showGrid?: boolean;
}) {
  useEffect(() => {
    const w = window as unknown as {
      UnicornStudio?: { isInitialized: boolean; init: () => void };
    };

    // Script already loaded from a prior mount — re-init for the fresh DOM element
    if (w.UnicornStudio?.isInitialized) {
      w.UnicornStudio.init();
      return;
    }

    // Script tag already injected (loading in progress) — don't duplicate it
    if (document.querySelector(`script[src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"]`)) {
      return;
    }

    // First visit — load the library
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
