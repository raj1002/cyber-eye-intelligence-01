'use client';

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  style?: CSSProperties;
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.12,
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('fade-in--visible');
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in fade-in--${direction} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
