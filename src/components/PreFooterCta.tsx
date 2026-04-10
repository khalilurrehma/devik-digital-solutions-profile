import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowRight, Briefcase, Github, Linkedin, Mail, MessageCircle, Rss, Send, Star } from "lucide-react";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";

const perks = [
  "Monthly product & tech insights",
  "Case studies from real builds",
  "No spam — unsubscribe anytime",
];

const socials = [
  { label: "LinkedIn", Icon: Linkedin, href: siteConfig.socialLinks.linkedin, color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" },
  { label: "GitHub",   Icon: Github,   href: siteConfig.socialLinks.github,   color: "hover:bg-[#1f2937] hover:border-[#1f2937]" },
  { label: "Behance",  Icon: Briefcase, href: siteConfig.socialLinks.behance,  color: "hover:bg-[#1769ff] hover:border-[#1769ff]" },
  { label: "WhatsApp", Icon: MessageCircle, href: buildWhatsAppHref(), color: "hover:bg-[#25D366] hover:border-[#25D366]" },
].filter((s) => s.href);

const PreFooterCta = () => {
  const [email, setEmail]   = useState("");
  const [done, setDone]     = useState(false);
  const [error, setError]   = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // Opens Gmail compose pre-filled — works without a backend
    const subject = `Newsletter Subscription — ${email}`;
    const body    = `Hi ${siteConfig.companyName},\n\nPlease add me to your newsletter.\n\nEmail: ${email}\n\nThanks!`;
    window.open(`mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#040e1c] via-[#071629] to-[#0a1f3d]">
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px]" />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-[#1a4a82]/18 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky-600/10 blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 rounded-full bg-[#1a4a82]/12 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* ── Left: newsletter signup ── */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-sky-300">
              <Rss className="h-3.5 w-3.5" />
              Stay Updated
            </span>

            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Get monthly insights on<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-sky-400 to-[#2d8fcf] bg-clip-text text-transparent"> building digital products.</span>
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/45">
              Product development decisions, tech deep-dives, and case studies from real builds — from our team to your inbox.
            </p>

            {/* Perks */}
            <ul className="mt-5 space-y-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-white/55">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30">
                    <Star className="h-2.5 w-2.5 fill-emerald-400 text-emerald-400" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Email form */}
            <div className="mt-8">
              {done ? (
                <div className="inline-flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm font-heading font-semibold text-emerald-300">
                    Thanks! Your email client should open — just hit send.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); setError(""); }}
                        placeholder="your@email.com"
                        className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-sky-400/30 transition-all ${
                          error ? "border-red-400/50 bg-red-500/10" : "border-white/15 bg-white/8 focus:border-sky-400/40 focus:bg-white/12"
                        }`}
                      />
                    </div>
                    {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-5 py-3 text-sm font-heading font-bold text-white shadow-[0_4px_20px_-6px_rgba(45,143,207,0.6)] transition hover:brightness-110 hover:-translate-y-0.5"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Right: social + stats ── */}
          <div className="flex flex-col gap-6">

            {/* Social links */}
            <div>
              <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-white/40">Follow our work</p>
              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, Icon, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm font-heading font-semibold text-white/70 transition-all duration-200 hover:text-white hover:scale-[1.02] ${color}`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/8" />

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "7+",   label: "Years delivering" },
                { value: "100+", label: "Projects shipped"  },
                { value: "15+",  label: "Countries served"  },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="font-heading text-2xl font-extrabold text-white">{value}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-white/40">{label}</p>
                </div>
              ))}
            </div>

            {/* Latest insight teaser */}
            <a
              href={siteConfig.featuredArticleSlug}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/8 hover:border-white/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf]">
                <Rss className="h-4.5 w-4.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-sky-400/70">Latest Article</p>
                <p className="mt-0.5 truncate text-[13px] font-heading font-semibold text-white/80 group-hover:text-white">
                  Multi-Tenant SaaS with Next.js & PostgreSQL
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-white/70 group-hover:translate-x-0.5" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCta;
