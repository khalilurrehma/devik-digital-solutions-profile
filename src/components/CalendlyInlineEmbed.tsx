import { CalendarDays, ExternalLink } from "lucide-react";
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
      const handleLoad = () => {
        cleanup();
        resolve();
      };

      const handleError = () => {
        cleanup();
        reject(new Error("Calendly widget failed to load."));
      };

      const cleanup = () => {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };

      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);
    };

    if (window.Calendly) {
      resolve();
      return;
    }

    if (existingScript) {
      finishWithExistingScript(existingScript);
      return;
    }

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
        window.Calendly.initInlineWidget({
          url,
          parentElement: embedRef.current,
          resize: true,
        });
        setStatus("ready");
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    mountCalendly();

    return () => {
      cancelled = true;

      if (embedRef.current) {
        embedRef.current.innerHTML = "";
      }
    };
  }, [url]);

  return (
    <section
      className={cn(
        "overflow-hidden rounded-[32px] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(244,248,252,0.98)_100%)] shadow-[0_32px_90px_-44px_rgba(8,24,46,0.45)]",
        className
      )}
    >
      <div className="flex flex-col gap-4 border-b border-primary/10 px-6 py-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.24em] text-primary/70">
            Live Availability
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-primary sm:text-3xl">
            See open booking times on this page.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            This is the live Calendly scheduler. Selectable dates and slots are available now. Disabled dates, or times
            that do not appear, are currently unavailable.
          </p>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-primary/15 bg-white px-4 py-2.5 text-sm font-heading font-semibold text-primary transition hover:bg-primary/5"
        >
          <ExternalLink className="h-4 w-4" />
          Open in Calendly
        </a>
      </div>

      <div className="px-4 pb-4 pt-5 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
        {status === "error" ? (
          <div className="rounded-[28px] border border-dashed border-primary/20 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <CalendarDays className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-primary">Calendly could not load here.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The direct booking page is still available and will show the same live scheduling availability.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-heading font-semibold text-white transition hover:opacity-90"
            >
              <CalendarDays className="h-4 w-4" />
              Open Booking Page
            </a>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-white">
            {status === "loading" && (
              <div className="absolute inset-x-4 top-4 z-10 rounded-full border border-primary/10 bg-white/95 px-4 py-2 text-center text-sm font-medium text-primary shadow-sm backdrop-blur">
                Loading live booking availability...
              </div>
            )}
            <div ref={embedRef} className="min-h-[700px] w-full" />
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendlyInlineEmbed;
