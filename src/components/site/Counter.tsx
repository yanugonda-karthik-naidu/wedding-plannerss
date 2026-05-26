import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useCounter(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, val };
}

export function Counter({ to, suffix = "+", label }: { to: number; suffix?: string; label: string }) {
  const { ref, val } = useCounter(to);
  return (
    <div className="text-center md:text-left">
      <div className="flex items-baseline gap-1 justify-center md:justify-start">
        <span ref={ref} className="font-serif text-5xl md:text-6xl text-gradient-gold font-semibold">
          {val}
        </span>
        <span className="font-serif text-3xl text-gradient-gold">{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">{label}</p>
    </div>
  );
}
