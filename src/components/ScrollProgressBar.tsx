import { useEffect, useRef } from "react";

/**
 * Fixed full-width progress bar pinned to the very top of the viewport.
 * Width is updated via a DOM ref (no React re-render per scroll tick).
 */
const ScrollProgressBar = () => {
  const fillRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (fillRef.current) fillRef.current.style.width = `${pct}%`;
      if (glowRef.current) glowRef.current.style.left  = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* z-[200] — above the sticky nav (z-50) */
    <div className="no-print pointer-events-none fixed left-0 right-0 top-0 z-[200] h-[5px]">
      {/* Faint track — always visible */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Filled bar */}
      <div
        ref={fillRef}
        className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#1a4a82] via-sky-400 to-amber-400"
      />

      {/* Glowing tip that travels with the bar */}
      <div
        ref={glowRef}
        className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 opacity-80 blur-[6px]"
      />
    </div>
  );
};

export default ScrollProgressBar;
