import type { MouseEvent } from "react";
import { useRef, useEffect } from "react";
import {
  ArrowRight, BadgeCheck, CalendarDays, CheckCircle2,
  Globe2, MessageCircle, Sparkles, Star, Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroParticleCanvas from "@/components/HeroParticleCanvas";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

const handleScrollToPortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const el = document.querySelector("#portfolio");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const CoverPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--spotlight-x", `${x}%`);
      section.style.setProperty("--spotlight-y", `${y}%`);
    };
    const handleMouseEnter = () => section.style.setProperty("--spotlight-opacity", "1");
    const handleMouseLeave = () => section.style.setProperty("--spotlight-opacity", "0");

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-section-bg hero-spotlight relative w-full overflow-hidden min-h-[94vh] flex items-center"
    >
      {/* ── Particle network canvas (layer 1 — deepest) ── */}
      <HeroParticleCanvas />

      {/* ── Letterhead-inspired diagonal stripes (top-left) ── */}
      <div className="pointer-events-none absolute left-0 top-0 w-[420px] overflow-hidden" aria-hidden>
        <div className="absolute -left-8 -top-4 h-[8px] w-[460px] -skew-x-[18deg] bg-[#1a4a82]/60" />
        <div className="absolute -left-8 top-[10px] h-[5px] w-[420px] -skew-x-[18deg] bg-[#2d6fb0]/40" />
        <div className="absolute -left-8 top-[20px] h-[3px] w-[380px] -skew-x-[18deg] bg-[#3a8fd4]/30" />
      </div>
      {/* Bottom-right mirror stripes */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] overflow-hidden" aria-hidden>
        <div className="absolute -right-8 bottom-[20px] h-[8px] w-[460px] -skew-x-[18deg] bg-[#1a4a82]/50" />
        <div className="absolute -right-8 bottom-[8px] h-[5px] w-[420px] -skew-x-[18deg] bg-[#2d6fb0]/35" />
        <div className="absolute -right-8 bottom-0 h-[3px] w-[380px] -skew-x-[18deg] bg-[#3a8fd4]/25" />
      </div>

      {/* ── Radial glow layers ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_45%_0%,rgba(26,74,130,0.45),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_85%,rgba(13,37,72,0.4),transparent)]" />

      {/* ── Animated blob orbs (sit on top of canvas, add depth) ── */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#1a4a82]/20 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute -right-28 top-0 h-[420px] w-[420px] rounded-full bg-sky-600/12 blur-[100px] animate-blob-delay-2" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[320px] w-[560px] rounded-full bg-[#0d3060]/25 blur-[90px] animate-blob-delay-4" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left */}
          <div>
            {/* Logo pill */}
            <div data-reveal="reveal" className="inline-flex items-center gap-3 rounded-2xl border border-[#1a4a82]/50 bg-[#071629]/90 px-3 py-2.5 backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(26,74,130,0.45)]">
              {/* Logo on white badge — intentional contrast */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <img src={logo} alt={siteConfig.companyName} className="h-9 w-9 rounded-lg object-cover" />
              </div>
              <div className="pr-1">
                <p className="font-heading text-[12px] font-extrabold tracking-[0.2em] text-white">{siteConfig.companyName}</p>
                <p className="mt-1.5 text-[10px] tracking-[0.14em] text-sky-400/80">YOUR VISION, OUR CODE</p>
              </div>
            </div>

            {/* Badges */}
            <div data-reveal="reveal reveal-delay-1" className="mt-7 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-heading font-bold text-sky-300">
                <Zap className="h-3 w-3 fill-sky-400 text-sky-400" />AI-Powered
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-heading font-semibold text-white/65">
                Full-Stack
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-heading font-semibold text-emerald-300">
                <BadgeCheck className="h-3 w-3" />Globally Delivered
              </span>
            </div>

            {/* Headline */}
            <h1 data-reveal="reveal reveal-delay-1" className="mt-5 max-w-2xl font-heading text-[2.3rem] font-extrabold leading-[1.08] text-white sm:text-[3rem] lg:text-[3.5rem]">
              We build scalable<br className="hidden sm:block" /> web and mobile apps
              <span className="block animate-hero-glow bg-gradient-to-r from-[#38bdf8] via-[#bae6fd] via-[45%] to-[#1d6fb8] bg-clip-text text-transparent">
                for startups that mean business.
              </span>
            </h1>

            {/* Sub */}
            <p data-reveal="reveal reveal-delay-2" className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/50 sm:text-base">
              Full-stack development team with 7+ years delivering React, Next.js, Flutter, Node.js,
              and AI-powered systems for startups and agencies across the UK, EU, USA, UAE, and beyond.
            </p>

            {/* CTAs */}
            <div data-reveal="reveal reveal-delay-3" className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-7 py-3.5 text-sm font-heading font-bold text-white shadow-[0_8px_28px_-8px_rgba(45,111,176,0.7)] transition hover:brightness-110 hover:-translate-y-0.5 animate-glow-pulse"
              >
                <CalendarDays className="h-4 w-4" />Free 30-Min Strategy Call<ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#portfolio"
                onClick={handleScrollToPortfolio}
                className="animate-seq-glow-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-heading font-semibold text-white/85 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
              >
                <Sparkles className="h-4 w-4" />See Our Work
              </a>
              <a
                href={buildWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="animate-seq-glow-3 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-3.5 text-sm font-heading font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4" />WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div data-reveal="reveal reveal-delay-4" className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/50 bg-[#0a1f3d]/70 px-3.5 py-2 shadow-[0_0_16px_-6px_rgba(26,74,130,0.4)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-heading font-bold text-white/80">Registered Software House · Pvt. Ltd.</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/8 px-3.5 py-2">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                <span className="ml-0.5 text-xs font-heading font-bold text-amber-300">5.0 Client Reviews</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/40 bg-[#0a1f3d]/60 px-3.5 py-2">
                <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                <span className="text-xs font-heading font-semibold text-white/55">UK · USA · UAE · CA · AU</span>
              </div>
            </div>

            {/* Mini stats */}
            <div data-reveal="reveal reveal-delay-4" className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/35">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                <AnimatedCounter end={7} suffix="+" /> years experience
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <AnimatedCounter end={500} suffix="+" /> projects delivered
              </span>
            </div>
          </div>

          {/* Right */}
          <div data-reveal="reveal-scale reveal-delay-2" className="flex flex-col gap-4">
            {/* Why buyers card */}
            <div className="rounded-2xl border border-[#1a4a82]/40 bg-[#071629]/70 p-6 backdrop-blur-sm shadow-[0_0_40px_-16px_rgba(26,74,130,0.35)]">
              <p className="mb-4 flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-[0.22em] text-sky-400/80">
                <span className="h-px flex-1 bg-gradient-to-r from-sky-400/40 to-transparent" />
                Why buyers convert here
                <span className="h-px flex-1 bg-gradient-to-l from-sky-400/40 to-transparent" />
              </p>
              <div className="grid gap-4">
                {[
                  "Direct access to the team doing the work, not a sales handoff.",
                  "Clear project planning before code starts, so timelines stay realistic.",
                  "Fast communication across WhatsApp, email, and booked calls.",
                  "Delivery focused on business outcomes, not just ticket completion.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/25">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <p className="text-sm text-white/65 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "24h", label: "Response window" },
                { value: "15+", label: "Countries served" },
                { value: "7+",  label: "Years delivering"  },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-[#1a4a82]/35 bg-[#071629]/60 p-4 text-center backdrop-blur-sm hover:border-sky-400/40 hover:bg-[#0a1f3d]/80 transition-all">
                  <p className="font-heading text-xl font-extrabold text-white">{item.value}</p>
                  <p className="mt-1 text-[11px] text-white/40 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5" aria-hidden>
        <div className="relative h-7 w-px overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400 to-transparent animate-scroll-line" />
        </div>
        <div className="h-1.5 w-1.5 rounded-full bg-sky-400/50 animate-scroll-dot" />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#040e1c] to-transparent" />
    </section>
  );
};

export default CoverPage;
