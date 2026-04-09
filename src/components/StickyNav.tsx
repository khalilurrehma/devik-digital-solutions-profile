import { useEffect, useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "About",     href: "#about"     },
  { label: "Services",  href: "#services"  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing",   href: "#pricing"   },
  { label: "Insights",  href: "#insights"  },
  { label: "FAQ",       href: "#faq"       },
  { label: "Contact",   href: "/contact"   },
];

const StickyNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    // Full-page routes (start with "/", not "#")
    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_-4px_rgba(10,31,61,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Thin brand accent line under nav when scrolled */}
      <div className={`h-[2px] w-full bg-gradient-to-r from-[#1a4a82]/40 via-sky-400/30 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => { setOpen(false); if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
            <img src={logo} alt={siteConfig.companyName} className="h-8 w-8 rounded-lg object-cover" />
          </div>
          <div className="leading-tight">
            <p className={`font-heading text-[13px] font-extrabold tracking-[0.15em] ${scrolled ? "text-[#0a1f3d]" : "text-white"}`}>
              DEVIK DIGITAL
            </p>
            <p className={`font-heading text-[10px] font-semibold tracking-[0.22em] ${scrolled ? "text-[#1a4a82]" : "text-sky-300"}`}>
              SOLUTIONS
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`relative text-[13px] font-heading font-semibold transition-colors
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full
                after:bg-[#1a4a82] after:transition-all after:duration-300 hover:after:w-full
                ${scrolled ? "text-[#374151] hover:text-[#0a1f3d]" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-heading font-bold transition sm:inline-flex ${
              scrolled
                ? "bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] text-white shadow-[0_4px_16px_-4px_rgba(26,74,130,0.45)] hover:brightness-110"
                : "border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Book a Call
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${
              scrolled
                ? "border border-slate-200 bg-white text-[#0a1f3d]"
                : "border border-white/20 bg-white/10 text-white"
            }`}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-screen-xl flex-col px-6 py-4 sm:px-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="border-b border-slate-100 py-3 text-sm font-heading font-semibold text-[#374151] transition hover:text-[#0a1f3d] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] px-4 py-3 text-sm font-heading font-bold text-white"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default StickyNav;
