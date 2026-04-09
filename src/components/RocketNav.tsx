import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Rocket } from "lucide-react";

const RocketNav = () => {
  const [visible, setVisible]   = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y      = window.scrollY;
      const max    = document.documentElement.scrollHeight - window.innerHeight;
      const pct    = max > 0 ? Math.round((y / max) * 100) : 0;
      setProgress(pct);
      setVisible(y > 320);
      setAtBottom(pct >= 98);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop    = () => window.scrollTo({ top: 0,                                         behavior: "smooth" });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight,     behavior: "smooth" });

  /* SVG circle maths */
  const R          = 18;
  const CIRC       = 2 * Math.PI * R;
  const dashOffset = CIRC - (progress / 100) * CIRC;

  return (
    <div
      className={`no-print fixed bottom-6 left-5 z-50 flex flex-col items-center gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* ── Scroll-to-top button ── */}
      <div className="relative flex items-center justify-center">
        {/* Progress ring */}
        <svg
          width="44"
          height="44"
          className="absolute -rotate-90"
          viewBox="0 0 44 44"
          aria-hidden
        >
          {/* Track ring */}
          <circle
            cx="22" cy="22" r={R}
            fill="none"
            strokeWidth="2.5"
            className="stroke-slate-200/60"
          />
          {/* Progress arc */}
          <circle
            cx="22" cy="22" r={R}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={dashOffset}
            className="stroke-sky-400 transition-[stroke-dashoffset] duration-150"
          />
        </svg>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title={`Back to top · ${progress}% read`}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#0a1f3d] text-white shadow-[0_6px_24px_-6px_rgba(10,31,61,0.7)] ring-1 ring-white/10 transition-all duration-200 hover:scale-110 hover:bg-[#1a4a82] hover:shadow-[0_8px_28px_-6px_rgba(26,74,130,0.7)] active:scale-95"
        >
          <Rocket className="h-4 w-4 -rotate-45" />
        </button>
      </div>

      {/* Progress label */}
      <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-heading font-bold tabular-nums text-slate-500 shadow-sm">
        {progress}%
      </span>

      {/* ── Scroll-to-bottom button (hidden when at bottom) ── */}
      <button
        type="button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Scroll to bottom"
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:border-[#1a4a82]/30 hover:bg-[#1a4a82]/5 hover:text-[#1a4a82] active:scale-95 ${
          atBottom ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"
        }`}
      >
        <ChevronDown className="h-4 w-4" />
      </button>

      {/* Up chevron (always visible as a hint when near top) */}
      {progress < 5 && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Already at top"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 shadow-sm"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default RocketNav;
