import { ArrowRight, CalendarDays, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppHref } from "@/lib/siteConfig";

const PreFooterCta = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#040e1c] via-[#071629] to-[#0a1f3d] py-28 text-center">
    {/* Grid texture */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px]" />

    {/* Central glow orb */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a4a82]/20 blur-[130px]" />
    {/* Side orbs */}
    <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-600/10 blur-[80px]" />
    <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#1a4a82]/15 blur-[80px]" />

    <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-10">

      {/* Availability badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-xs font-heading font-semibold text-emerald-300">
          Available for new projects
        </span>
      </div>

      {/* Headline */}
      <h2 className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
        Ready to start
        <span className="block bg-gradient-to-r from-sky-400 via-[#3a8fd4] to-[#2d6fb0] bg-clip-text text-transparent">
          something great?
        </span>
      </h2>

      {/* Sub */}
      <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/40">
        Send us a brief or book a free strategy call. We help you scope the right build, choose the right stack, and move quickly into delivery.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-8 py-3.5 text-sm font-heading font-bold text-white shadow-[0_8px_32px_-8px_rgba(45,143,207,0.65)] transition hover:brightness-110 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Get in Touch
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          to="/book"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
        >
          <CalendarDays className="h-4 w-4" />
          Book a Free Strategy Call
        </Link>
        <a
          href={buildWhatsAppHref()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-8 py-3.5 text-sm font-heading font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>

      {/* Social proof */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/25">
        <span className="inline-flex items-center gap-1.5">
          {[0,1,2,3,4].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
          <span className="ml-0.5 text-amber-300/70 font-heading font-semibold">5.0 rating</span>
        </span>
        <span className="h-4 w-px bg-white/15" />
        <span>100+ happy clients</span>
        <span className="h-4 w-px bg-white/15" />
        <span>15+ countries served</span>
      </div>

    </div>
  </section>
);

export default PreFooterCta;
