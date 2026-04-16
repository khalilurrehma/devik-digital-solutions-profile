import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
        <WhatsAppIcon className="h-7 w-7" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold ring-2 ring-white">
          1
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
