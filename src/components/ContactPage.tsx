import { ArrowRight, CalendarDays, Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

const ContactPage = () => (
  <div id="contact" className="section-target">
    {/* ── Full-width dark CTA band ── */}
    <div className="relative overflow-hidden bg-gradient-to-br from-[#040e1c] via-[#071629] to-[#0a1f3d]">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#1a4a82]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-sky-600/15 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

          {/* Left: copy */}
          <div data-reveal="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for new projects
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-400 via-[#3a8fd4] to-[#2d6fb0] bg-clip-text text-transparent">
                {" "}something great?
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/50">
              Whether you have a spec or just an idea — send us a message and we'll help define the right next step. Free consultation, no commitment.
            </p>

            {/* Quick contact row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/35">
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 transition hover:text-white/70">
                <Mail className="h-3.5 w-3.5" />{siteConfig.email}
              </a>
              <span className="h-4 w-px bg-white/15" />
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-1.5 transition hover:text-white/70">
                <Phone className="h-3.5 w-3.5" />{siteConfig.phoneDisplay}
              </a>
              <span className="h-4 w-px bg-white/15" />
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5" />UK · USA · UAE · CA · AU
              </span>
            </div>
          </div>

          {/* Right: CTAs */}
          <div data-reveal="reveal-scale" className="flex flex-col gap-3 lg:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-7 py-3.5 text-sm font-heading font-bold text-white shadow-[0_8px_28px_-8px_rgba(45,143,207,0.6)] transition hover:brightness-110 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Send a Message
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Free Strategy Call
            </Link>
            <a
              href={buildWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-7 py-3.5 text-sm font-heading font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
