import logo from "@/assets/logo.jpg";
import HeaderStripes from "@/components/HeaderStripes";
import FooterStripes from "@/components/FooterStripes";

const CoverPage = () => {
  return (
    <div className="doc-page w-full max-w-[850px] mx-auto my-8">
      {/* Top stripes */}
      <HeaderStripes />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
        <img src={logo} alt="" className="w-[400px] h-[400px] opacity-[0.05]" />
      </div>

      {/* Cover content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 md:py-24 text-center min-h-[600px]">
        <img src={logo} alt="DEVIK DIGITAL SOLUTIONS" className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mb-8" />

        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-primary tracking-tight mb-1">
          DEVIK DIGITAL
        </h1>
        <h2 className="font-heading font-bold text-xl md:text-2xl text-secondary tracking-[0.3em] mb-6">
          SOLUTIONS
        </h2>

        <div className="section-divider w-28 mx-auto mb-5" />

        <p className="font-heading text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase italic mb-10">
          Your Vision, Our Code
        </p>

        <div className="glass-panel card-3d rounded-xl px-6 sm:px-8 py-4 max-w-sm">
          <h3 className="font-heading font-bold text-primary text-base mb-1">Company Profile</h3>
          <p className="text-muted-foreground text-sm">Innovative, Secure & Scalable Digital Solutions</p>
        </div>

        <div className="mt-auto pt-10 sm:pt-16 text-[10px] sm:text-xs text-muted-foreground space-y-1">
          <p className="font-heading font-semibold text-foreground">MUHAMMAD SULIMAN - CEO</p>
          <p>Gulistan-e-Johar, Karachi, Pakistan</p>
          <p>devikdigitalsolutions@gmail.com &nbsp;|&nbsp; +92 336 8158979</p>
        </div>
      </div>

      {/* Bottom stripes */}
      <FooterStripes />
    </div>
  );
};

export default CoverPage;
