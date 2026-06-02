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

export default function CountUp({
  to,
  suffix = '',
  prefix = '',
  duration = 1400,
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();

        const isDecimal = !Number.isInteger(to);
        const start = performance.now();
        function tick(now: number) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const raw = easeOutQuart(progress) * to;
          setCount(isDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  const display = Number.isInteger(to) ? count : count.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
