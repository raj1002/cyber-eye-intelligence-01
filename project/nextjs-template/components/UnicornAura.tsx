"use client";

import { useEffect } from "react";

// Official CDN first; jsDelivr as fallback if the primary ever fails
const PRIMARY_SRC = "https://cdn.unicornstudio.app/unicornstudio.umd.js";
const FALLBACK_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";

type US = { isInitialized?: boolean; init: () => void };

function getUS(): US | undefined {
  return (window as unknown as { UnicornStudio?: US }).UnicornStudio;
}

function injectScript(src: string, onLoad: () => void, onError: () => void) {
  if (document.querySelector(`script[src="${src}"]`)) {
    // Script already in DOM — fire onLoad once it's ready (or immediately)
    if (getUS()) { onLoad(); return; }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)!;
    existing.addEventListener("load", onLoad, { once: true });
    existing.addEventListener("error", onError, { once: true });
    return;
  }
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  s.addEventListener("load", onLoad, { once: true });
  s.addEventListener("error", onError, { once: true });
  document.head.appendChild(s);
}

export default function UnicornAura({
  projectId,
  showGrid = true,
}: {
  projectId: string;
  showGrid?: boolean;
}) {
  useEffect(() => {
    // Already loaded from a prior navigation — just re-init for the fresh DOM element
    const us = getUS();
    if (us) {
      us.init();
      return;
    }

    const callInit = () => {
      const lib = getUS();
      if (lib) {
        if (!lib.isInitialized) lib.init();
        else lib.init(); // always call; lib handles idempotency
      }
    };

    // Try primary CDN; fall back to jsDelivr on error
    injectScript(
      PRIMARY_SRC,
      callInit,
      () => injectScript(FALLBACK_SRC, callInit, () => {
        console.warn("UnicornStudio: both CDN sources failed to load");
      })
    );
  }, []);

  return (
    <div className="aura-wrap" aria-hidden="true">
      <div data-us-project={projectId} />
      <div className="aura-tint" />
      {showGrid && <div className="absolute inset-0 ph-grid opacity-30" />}
    </div>
  );
}
