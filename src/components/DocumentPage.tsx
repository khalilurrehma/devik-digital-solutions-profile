import { ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";
import HeaderStripes from "@/components/HeaderStripes";
import FooterStripes from "@/components/FooterStripes";

interface DocumentPageProps {
  children: ReactNode;
  showHeader?: boolean;
  className?: string;
}

const DocumentPage = ({ children, showHeader = true, className = "" }: DocumentPageProps) => {
  return (
    <div className={`doc-page w-full max-w-[850px] mx-auto my-8 ${className}`}>
      {/* Top stripes */}
      <HeaderStripes />

      {/* Header with logo & tagline */}
      {showHeader && (
        <div className="relative z-10 flex flex-wrap items-center gap-3 px-4 sm:px-6 md:px-10 pt-6 pb-2">
          <img src={logo} alt="DEVIK DIGITAL SOLUTIONS" className="w-16 h-16 sm:w-20 sm:h-20" />
          <div className="text-muted-foreground text-[10px] sm:text-xs tracking-[0.3em] font-heading font-medium uppercase">
            Your Vision, Our Code
          </div>
        </div>
      )}

      {/* Logo watermark centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
        <img src={logo} alt="" className="w-[360px] h-[360px] opacity-[0.05]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-6">
        {children}
      </div>

      {/* Footer contact bar */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] sm:text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="italic font-medium">+92 336 8158979</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="italic font-medium">devikdigitalsolutions@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="italic font-medium">Gulistan-e-Johar, Karachi, Pakistan</span>
        </div>
      </div>

      {/* Bottom stripes */}
      <FooterStripes />
    </div>
  );
};

export default DocumentPage;
