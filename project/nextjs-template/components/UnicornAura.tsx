"use client";

import { useEffect, useState } from "react";

// Official CDN first; jsDelivr as fallback if the primary ever fails
const PRIMARY_SRC = "https://cdn.unicornstudio.app/unicornstudio.umd.js";
const FALLBACK_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";

type US = { isInitialized?: boolean; init: () => void };

function getUS(): US | undefined {
  return (window as unknown as { UnicornStudio?: US }).UnicornStudio;
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function injectScript(src: string, onLoad: () => void, onError: () => void) {
  if (document.querySelector(`script[src="${src}"]`)) {
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
  // null = loading, true = webgl loaded, false = use CSS fallback
  const [webglReady, setWebglReady] = useState<boolean | null>(null);

  useEffect(() => {
    // No WebGL = skip the library entirely and use CSS fallback
    if (!hasWebGL()) {
      setWebglReady(false);
      return;
    }

    const callInit = () => {
      const lib = getUS();
      if (lib) {
        lib.init();
        setWebglReady(true);
      } else {
        setWebglReady(false);
      }
    };

    const onBothFailed = () => {
      console.warn("UnicornStudio: both CDN sources failed to load");
      setWebglReady(false);
    };

    const us = getUS();
    if (us) {
      us.init();
      setWebglReady(true);
      return;
    }

    injectScript(
      PRIMARY_SRC,
      callInit,
      () => injectScript(FALLBACK_SRC, callInit, onBothFailed)
    );
  }, []);

  return (
    <div className="aura-wrap" aria-hidden="true">
      {/* CSS fallback: shown when WebGL unavailable or library fails to load */}
      {webglReady === false && <div className="aura-css-fallback" />}

      {/* Unicorn Studio canvas: rendered when WebGL is available */}
      {webglReady !== false && <div data-us-project={projectId} />}

      <div className="aura-tint" />
      {showGrid && <div className="absolute inset-0 ph-grid opacity-30" />}
    </div>
  );
}
