import {
  ArrowRight, BadgeCheck, BriefcaseBusiness, CalendarDays,
  Globe2, Rocket, ShoppingCart, Target, Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const clientProfiles = [
  {
    id: "01",
    icon: Rocket,
    title: "SaaS Founders",
    tagline: "From MVP to scale",
    desc: "MVPs, dashboards, onboarding flows, subscriptions, and product iterations — built with a clear technical roadmap from day one.",
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
    bg: "from-[#f0f5ff]",
    tags: ["MVP Builds", "SaaS Dashboards", "Subscriptions"],
  },
  {
    id: "02",
    icon: BriefcaseBusiness,
    title: "Agencies",
    tagline: "White-label delivery partner",
    desc: "Reliable frontend, backend, and full-stack delivery support when client deadlines are tight and capacity runs short.",
    gradient: "from-sky-500 to-[#1a4a82]",
    bg: "from-sky-50",
    tags: ["White-Label Dev", "Overflow Capacity", "Fast Turnaround"],
  },
  {
    id: "03",
    icon: Users,
    title: "Non-Technical Founders",
    tagline: "Idea to launch, guided",
    desc: "Strategy, scope definition, product decisions, and execution support for founders who know what they want to build — not how.",
    gradient: "from-violet-600 to-[#2d8fcf]",
    bg: "from-violet-50",
    tags: ["Idea Validation", "Scope Planning", "Full Execution"],
  },
  {
    id: "04",
    icon: ShoppingCart,
    title: "E-Commerce Brands",
    tagline: "Built for conversion",
    desc: "Faster storefronts, custom integrations, conversion improvements, and post-launch optimisation that moves revenue metrics.",
    gradient: "from-[#2d8fcf] to-emerald-400",
    bg: "from-emerald-50",
    tags: ["Shopify / WooCommerce", "Custom Integrations", "CRO"],
  },
];

const fitSignals = [
  "You need a partner who handles both product thinking and implementation.",
  "You want direct communication — no account management layers.",
  "You need a clean, scalable build that can grow well after launch.",
  "You value delivery discipline, weekly updates, and realistic timelines.",
];

const regions = [
  { name: "United Kingdom", flag: "🇬🇧", primary: true  },
  { name: "USA",            flag: "🇺🇸", primary: true  },
  { name: "UAE",            flag: "🇦🇪", primary: true  },
  { name: "Canada",         flag: "🇨🇦", primary: true  },
  { name: "Australia",      flag: "🇦🇺", primary: true  },
  { name: "Europe",         flag: "🇪🇺", primary: false },
  { name: "Pakistan",       flag: "🇵🇰", primary: false },
  { name: "South Africa",   flag: "🇿🇦", primary: false },
];

const IdealClientsPage = () => (
  <div id="ideal-clients" className="section-target">
    <DocumentPage className="bg-slate-50">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Target className="h-3.5 w-3.5" />
          Ideal Clients
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Who We Work Best With
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-52" />
        </div>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
          The strongest projects happen when the fit is clear from day one. We work with founders,
          teams, and agencies that need a technical partner who moves from planning to delivery
          without losing momentum.
        </p>
      </div>

      {/* ── Client profile cards ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {clientProfiles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              data-reveal={`reveal-scale reveal-delay-${(idx % 4) + 1}`}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${p.bg} to-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1a4a82]/30 hover:shadow-[0_14px_40px_-12px_rgba(26,74,130,0.18)]`}
            >
              {/* Top accent */}
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${p.gradient}`} />

              {/* Icon + number */}
              <div className="mb-4 flex items-start justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient} shadow-md`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-mono text-[11px] font-bold text-slate-300">{p.id}</span>
              </div>

              {/* Text */}
              <p className="mb-1 text-[10px] font-heading font-extrabold uppercase tracking-[0.2em] text-[#2d8fcf]">{p.tagline}</p>
              <h3 className="font-heading text-[17px] font-extrabold text-[#0a1f3d] mb-2">{p.title}</h3>
              <p className="text-[13px] leading-relaxed text-slate-500 mb-4">{p.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1a4a82]/15 bg-white/80 px-2.5 py-1 text-[11px] font-heading font-semibold text-[#1a4a82] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom row ── */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Fit signals */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1a4a82]/15 bg-gradient-to-br from-[#edf2ff] to-white p-7 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf]" />
          <div className="mb-5 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a4a82] text-[10px] font-extrabold text-white">✓</span>
            <p className="text-[11px] font-heading font-extrabold uppercase tracking-[0.2em] text-[#1a4a82]">
              You&apos;re A Great Fit If…
            </p>
          </div>
          <div className="grid gap-4">
            {fitSignals.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <p className="text-[13.5px] leading-relaxed text-[#374151]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#2d8fcf] to-sky-400" />
          <div className="mb-5 flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-[#1a4a82]" />
            <p className="text-[11px] font-heading font-extrabold uppercase tracking-[0.2em] text-[#1a4a82]">
              Countries We Serve
            </p>
          </div>

          {/* Primary markets */}
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Primary markets</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {regions.filter(r => r.primary).map((r) => (
              <span
                key={r.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1a4a82]/20 bg-[#f0f5ff] px-3 py-1.5 text-[12px] font-heading font-bold text-[#0a1f3d] shadow-sm transition hover:bg-[#e0eaff]"
              >
                <span className="text-base leading-none">{r.flag}</span>
                {r.name}
              </span>
            ))}
          </div>

          {/* Secondary markets */}
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Also serving</p>
          <div className="mb-5 flex flex-wrap gap-2">
            {regions.filter(r => !r.primary).map((r) => (
              <span
                key={r.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[12px] font-heading font-semibold text-slate-600 transition hover:border-[#1a4a82]/20 hover:bg-[#f0f5ff]"
              >
                <span className="text-base leading-none">{r.flag}</span>
                {r.name}
              </span>
            ))}
          </div>

          <p className="text-[12px] leading-relaxed text-slate-400">
            Async-friendly delivery aligned with Western business hours, communication standards, and documentation practices.
          </p>
        </div>

      </div>

      {/* ── CTA banner ── */}
      <div
        data-reveal="reveal-fade"
        className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#1a4a82]/20 bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] px-8 py-6 text-center sm:flex-row sm:text-left"
      >
        <div>
          <p className="font-heading text-base font-extrabold text-white">Sound like the right fit?</p>
          <p className="mt-0.5 text-sm text-white/60">Book a free 30-min call — no commitment, just a conversation.</p>
        </div>
        <Link
          to="/book"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-heading font-bold text-[#0a1f3d] shadow-sm transition hover:bg-sky-50"
        >
          <CalendarDays className="h-4 w-4" />
          Book a Call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </DocumentPage>
  </div>
);

export default IdealClientsPage;
