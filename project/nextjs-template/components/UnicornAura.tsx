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

// True only for hardware-accelerated WebGL. Software renderers (SwiftShader, llvmpipe,
// Microsoft Basic Render Driver) draw every frame on the CPU and freeze the page: on GitHub's
// CI runners Lighthouse measured over 160 s of blocking time with the aura running.
function hasFastWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}

// Visitors who asked for less motion or less data get the static CSS aura.
function prefersLite(): boolean {
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches || conn?.saveData === true
  );
}

// Run once the page has loaded and the main thread is idle, so the aura's ~2 s of script
// never competes with first paint or hydration.
function whenIdleAfterLoad(cb: () => void): () => void {
  let cancelled = false;
  let idleId: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const schedule = () => {
    if (cancelled) return;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => { if (!cancelled) cb(); }, { timeout: 3000 });
    } else {
      timer = setTimeout(() => { if (!cancelled) cb(); }, 1500);
    }
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", schedule);
    if (idleId !== undefined) window.cancelIdleCallback(idleId);
    if (timer !== undefined) clearTimeout(timer);
  };
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
    // No hardware WebGL, reduced motion or Save-Data: skip the library and use the CSS fallback
    if (prefersLite() || !hasFastWebGL()) {
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

    return whenIdleAfterLoad(() => {
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
    });
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
