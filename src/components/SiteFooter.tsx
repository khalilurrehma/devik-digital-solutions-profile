import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const navLinks: FooterLink[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "/#faq" },
];

const serviceLinks: FooterLink[] = [
  { label: "Web Development", href: "/#services" },
  { label: "Mobile Apps (Flutter)", href: "/#services" },
  { label: "Backend & APIs", href: "/#services" },
  { label: "AI / ML Integration", href: "/#services" },
  { label: "E-Commerce Builds", href: "/#services" },
  { label: "Design & UX", href: "/#services" },
];

const resourceLinks: FooterLink[] = [
  { label: "Book a Strategy Call", href: "/book" },
  { label: "Featured Article", href: siteConfig.featuredArticleSlug },
  { label: "Contact Us", href: "/contact" },
];

const SiteFooter = () => {
  const year = new Date().getFullYear();

  const socialIcons: Array<{
    label: string;
    href: string;
    icon: typeof Linkedin;
    className: string;
  }> = [];

  if (siteConfig.socialLinks.linkedin) {
    socialIcons.push({
      label: "LinkedIn",
      href: siteConfig.socialLinks.linkedin,
      icon: Linkedin,
      className: "bg-[#0A66C2] hover:bg-[#0a5cb0]",
    });
  }
  if (siteConfig.socialLinks.github) {
    socialIcons.push({
      label: "GitHub",
      href: siteConfig.socialLinks.github,
      icon: Github,
      className: "bg-[#1f2937] hover:bg-[#111827]",
    });
  }
  if (siteConfig.socialLinks.behance) {
    socialIcons.push({
      label: "Behance",
      href: siteConfig.socialLinks.behance,
      icon: Briefcase,
      className: "bg-[#1769ff] hover:bg-[#0d54d9]",
    });
  }
  socialIcons.push({
    label: "WhatsApp",
    href: buildWhatsAppHref(),
    icon: MessageCircle,
    className: "bg-[#25D366] hover:bg-[#1fb957]",
  });
  socialIcons.push({
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    className: "bg-sky-500 hover:bg-sky-600",
  });

  return (
    <footer className="no-print w-full">
      <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(58,166,255,0.18),transparent_38%),radial-gradient(circle_at_80%_120%,rgba(34,211,238,0.14),transparent_42%),linear-gradient(160deg,#0a1f3d_0%,#0f2a52_55%,#081729_100%)] text-white">
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt={siteConfig.companyName}
                  className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/20"
                />
                <div className="leading-tight">
                  <p className="font-heading text-[12px] font-extrabold tracking-[0.18em] text-white">
                    DEVIK DIGITAL
                  </p>
                  <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-300/90">
                    SOLUTIONS
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
                Full-stack web, mobile, backend, and AI development team building serious products for startups and
                agencies across the UK, EU, USA, UAE, Canada, and Australia.
              </p>

              <div className="mt-6 space-y-2.5 text-sm text-white/80">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-sky-300" />
                  {siteConfig.email}
                </a>
                <a href={siteConfig.phoneHref} className="flex items-start gap-2.5 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 text-sky-300" />
                  {siteConfig.phoneDisplay}
                </a>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-300" />
                  {siteConfig.location}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {socialIcons.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-lg transition hover:scale-105 ${social.className}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Services
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300">
                Resources
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {siteConfig.socialLinks.behance && (
                  <li>
                    <a
                      href={siteConfig.socialLinks.behance}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition hover:text-white"
                    >
                      Behance Portfolio
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </li>
                )}
              </ul>

              <Link
                to="/book"
                className="btn-brand mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-heading font-bold"
              >
                Start a Project
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-10 border-t border-white/10 pt-6 space-y-4">

            {/* Row 1 — status + quick links */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {/* Live availability dot */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-heading font-semibold text-emerald-300">
                    Available for new projects
                  </span>
                </div>
                <span className="hidden text-[11px] text-white/25 sm:block">·</span>
                <span className="hidden text-[11px] text-white/35 sm:block">
                  24h response &nbsp;·&nbsp; Worldwide delivery
                </span>
              </div>

              {/* Legal links */}
              <div className="flex items-center gap-4 text-[11px] text-white/35">
                <Link to="/contact" className="transition hover:text-white/60">Privacy Policy</Link>
                <span className="text-white/15">|</span>
                <Link to="/contact" className="transition hover:text-white/60">Terms of Service</Link>
                <span className="text-white/15">|</span>
                <Link to="/contact" className="transition hover:text-white/60">Cookie Policy</Link>
              </div>
            </div>

            {/* Row 2 — copyright + registration */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-white/30">
                &copy; {year} <span className="text-white/45 font-semibold">{siteConfig.companyName}</span> (Pvt. Ltd.) &mdash; Karachi, Pakistan. All rights reserved.
              </p>
              <p className="text-[11px] text-white/20">
                Registered Software House &nbsp;·&nbsp; React · Flutter · Node.js · AI
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
