"use client";

import Script from "next/script";
import { useEffect } from "react";

const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

type USApi = { init: () => void; destroy?: () => void };

function getUS(): USApi | undefined {
  return (window as unknown as { UnicornStudio?: USApi }).UnicornStudio;
}

export default function UnicornAura({
  projectId,
  showGrid = true,
}: {
  projectId: string;
  showGrid?: boolean;
}) {
  useEffect(() => {
    // Script may already be loaded from a previous mount — re-init immediately
    const us = getUS();
    if (us) us.init();

    return () => {
      // Destroy on unmount so the next mount gets a clean canvas slot
      getUS()?.destroy?.();
    };
  }, []);

  return (
    <>
      <Script
        src={SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => getUS()?.init()}
      />
      <div className="aura-wrap" aria-hidden="true">
        <div data-us-project={projectId} />
        <div className="aura-tint" />
        {showGrid && <div className="absolute inset-0 ph-grid opacity-30" />}
      </div>
    </>
  );
}
