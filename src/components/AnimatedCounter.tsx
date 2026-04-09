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
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setValue(end);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              setValue(Math.round(end * easeOutCubic(progress)));
              if (progress < 1) {
                requestAnimationFrame(tick);
              }
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
