"use client";

import { useEffect } from "react";

const SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

type US = { init: () => void; destroy?: () => void };
const getUS = () =>
  (window as unknown as { UnicornStudio?: US }).UnicornStudio;

/** Returns a promise that resolves once the UnicornStudio library is ready. */
function loadUS(): Promise<void> {
  // Already on window — resolve immediately
  if (getUS()) return Promise.resolve();

  // Script tag already injected (e.g. previous mount) — wait for it
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
  if (existing) {
    return new Promise((resolve) => {
      const iv = setInterval(() => {
        if (getUS()) { clearInterval(iv); resolve(); }
      }, 50);
    });
  }

  // First time — inject script
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("UnicornStudio failed to load"));
    document.head.appendChild(s);
  });
}

export default function UnicornAura({
  projectId,
  showGrid = true,
}: {
  projectId: string;
  showGrid?: boolean;
}) {
  useEffect(() => {
    let alive = true;

    loadUS()
      .then(() => { if (alive) getUS()?.init(); })
      .catch(() => {});

    return () => {
      alive = false;
      getUS()?.destroy?.();
    };
  }, []);

  return (
    <div className="aura-wrap" aria-hidden="true">
      <div data-us-project={projectId} />
      <div className="aura-tint" />
      {showGrid && <div className="absolute inset-0 ph-grid opacity-30" />}
    </div>
  );
}
