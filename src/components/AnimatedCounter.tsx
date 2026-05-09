import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({
  end,
  duration = 1600,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  // Initial state is the final value so SSG/SSR pre-renders the correct number.
  // If JS fails to load, IO never fires, or hydration is delayed, the user
  // still sees the right value — no "stuck at 0+" regression.
  const [value, setValue] = useState(end);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion preference: keep the SSR value, no animation.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // If the element is already in (or above) the viewport at mount, don't
    // animate — flashing from 7 → 0 → 7 looks worse than no animation.
    const rect = node.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) return;

    // Element is below the fold: reset to 0 and animate up when scrolled into view.
    setValue(0);

    let cancelled = false;
    let rafId: number | null = null;

    const animate = () => {
      if (cancelled) return;
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const progress = Math.min(1, (now - start) / duration);
        setValue(Math.round(end * easeOutCubic(progress)));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return () => {
        cancelled = true;
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (started) return;
        if (entries.some((e) => e.isIntersecting)) {
          started = true;
          observer.disconnect();
          animate();
        }
      },
      // threshold:0 fires on any pixel overlap; previous 0.4 was too strict for
      // small inline number spans and could miss firing in some viewports.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);

    // Safety net: if IO never fires within 4s (rare browser/stacking quirks),
    // animate anyway so the value still resolves correctly.
    const fallback = window.setTimeout(() => {
      if (!started) {
        started = true;
        observer.disconnect();
        animate();
      }
    }, 4000);

    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(fallback);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
