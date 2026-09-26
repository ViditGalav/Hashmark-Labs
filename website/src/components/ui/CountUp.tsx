"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up once when visible. Renders the final value on the server so SEO and no-JS see the real number. */
export function CountUp({ to, decimals = 0, suffix = "", final }: { to: number; decimals?: number; suffix?: string; final: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(final);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 4);
          setText((to * eased).toFixed(decimals) + suffix);
          if (t < 1) raf = requestAnimationFrame(tick);
          else setText(final);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, decimals, suffix, final]);

  return (
    <span ref={ref}>
      <span className="sr-only">{final}</span>
      <span aria-hidden="true">{text}</span>
    </span>
  );
}
