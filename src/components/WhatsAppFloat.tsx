import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="no-print fixed bottom-[88px] right-4 z-[60] flex flex-col items-end gap-2 lg:bottom-5 lg:right-5">
      {showTooltip && !dismissed && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 relative max-w-[260px] rounded-2xl bg-white px-4 py-3 pr-8 text-xs font-medium text-foreground shadow-2xl ring-1 ring-black/5">
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setDismissed(true)}
            className="absolute right-1.5 top-1.5 rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="font-semibold text-primary">Hi! Need a developer?</p>
          <p className="text-muted-foreground">Chat with {siteConfig.companyName} on WhatsApp. We usually reply quickly.</p>
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white" />
        </div>
      )}

      <a
        href={buildWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${siteConfig.companyName} on WhatsApp`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] ring-4 ring-white/40 transition-transform duration-200 hover:scale-110 hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold ring-2 ring-white">
          1
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
