'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

// Renders the final value on the server (and with JavaScript off), so crawlers and
// no-JS visitors see real figures, not zeros. On the client it counts up only for
// counters that start below the fold; counters already on screen keep their value.
export default function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    setCount(0);
    let frame = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        const isDecimal = !Number.isInteger(to);
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const raw = easeOutQuart(progress) * to;
          setCount(isDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));
          if (progress < 1) frame = requestAnimationFrame(tick);
        }
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
      setCount(to);
    };
  }, [to, duration]);

  const display = Number.isInteger(to) ? count : count.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
