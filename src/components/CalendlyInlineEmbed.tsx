import { CalendarDays, Clock, ExternalLink, Globe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CalendlyInlineEmbedProps = {
  url: string;
  className?: string;
};

type CalendlyWidgetStatus = "loading" | "ready" | "error";

type CalendlyInitOptions = {
  url: string;
  parentElement: HTMLElement;
  resize?: boolean;
};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: CalendlyInitOptions) => void;
    };
  }
}

const calendlyScriptId = "calendly-widget-script";

const loadCalendlyScript = () =>
  new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(calendlyScriptId) as HTMLScriptElement | null;

    const finishWithExistingScript = (script: HTMLScriptElement) => {
      const handleLoad = () => { cleanup(); resolve(); };
      const handleError = () => { cleanup(); reject(new Error("Calendly widget failed to load.")); };
      const cleanup = () => {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };
      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);
    };

    if (window.Calendly) { resolve(); return; }
    if (existingScript) { finishWithExistingScript(existingScript); return; }

    const script = document.createElement("script");
    script.id = calendlyScriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    finishWithExistingScript(script);
    document.body.appendChild(script);
  });

const CalendlyInlineEmbed = ({ url, className }: CalendlyInlineEmbedProps) => {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<CalendlyWidgetStatus>("loading");

  useEffect(() => {
    let cancelled = false;

    const mountCalendly = async () => {
      if (!embedRef.current) return;
      setStatus("loading");
      try {
        await loadCalendlyScript();
        if (cancelled || !embedRef.current || !window.Calendly) return;
        embedRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: embedRef.current, resize: true });
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    mountCalendly();

    return () => {
      cancelled = true;
      if (embedRef.current) embedRef.current.innerHTML = "";
    };
  }, [url]);

  return (
    <div className={cn("overflow-hidden rounded-3xl", className)}>

      {/* ── Header banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#040e1c] via-[#071629] to-[#0d2245]">
        {/* Grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sky-500/10 blur-[60px]" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-[#1a4a82]/20 blur-[50px]" />

        <div className="relative flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left: title + meta pills */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live Availability
            </span>

            <h2 className="mt-3 font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Pick a time that works for you
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-white/50">
              Book a free 30-minute strategy call — your time zone is detected automatically.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { icon: Clock,       label: "30 min session"        },
                { icon: Zap,         label: "Free consultation"      },
                { icon: Globe,       label: "Any time zone"          },
                { icon: CalendarDays,label: "Instant confirmation"   },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-heading font-semibold text-white/60">
                  <Icon className="h-3.5 w-3.5 text-sky-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: open externally */}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/20 hover:text-white lg:self-center"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open in Calendly
          </a>
        </div>

        {/* Bottom edge fade */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      </div>

      {/* ── Calendar embed ── */}
      <div className="bg-white">
        {status === "error" ? (
          <div className="flex flex-col items-center gap-5 px-8 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf] shadow-lg">
              <CalendarDays className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#0a1f3d]">
                Couldn't load the scheduler here
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                The live booking page is still available and shows the same real-time availability.
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] px-6 py-3 text-sm font-heading font-bold text-white shadow-md transition hover:brightness-110"
            >
              <CalendarDays className="h-4 w-4" />
              Open Booking Page
            </a>
          </div>
        ) : (
          <div className="relative">
            {status === "loading" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white/95">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf]">
                  <CalendarDays className="h-6 w-6 animate-pulse text-white" />
                </div>
                <div className="text-center">
                  <p className="font-heading text-sm font-bold text-[#0a1f3d]">Loading your calendar…</p>
                  <p className="mt-1 text-xs text-slate-400">Fetching live availability</p>
                </div>
                {/* Skeleton shimmer rows */}
                <div className="w-full max-w-sm space-y-3 px-4">
                  {["delay-75", "delay-150", "delay-300"].map((delay) => (
                    <div key={delay} className={`h-10 animate-pulse rounded-xl bg-slate-100 ${delay}`} />
                  ))}
                </div>
              </div>
            )}
            <div ref={embedRef} className="min-h-[700px] w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendlyInlineEmbed;
