import {
  BookOpen, Briefcase, Check, Clock, Code2, Cpu,
  FileCheck2, LifeBuoy, Lock, Monitor, Palette,
  Plug, Rocket, Search, Settings2, ShieldCheck, Smartphone, Users, Zap,
} from "lucide-react";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const processSteps = [
  { title: "Discover",  desc: "Requirements, scope, and success metrics.", Icon: Search     },
  { title: "Design",   desc: "Wireframes, UI systems, and user flows.",    Icon: Palette    },
  { title: "Build",    desc: "Agile sprints with clean, scalable code.",   Icon: Code2      },
  { title: "Test",     desc: "QA, performance, and security checks.",      Icon: ShieldCheck },
  { title: "Launch",   desc: "Deployment, stores, and monitoring.",        Icon: Rocket     },
  { title: "Support",  desc: "Ongoing improvements and maintenance.",      Icon: LifeBuoy   },
];

const capabilities = [
  {
    title: "Web Platforms",
    Icon: Monitor,
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
    points: ["Responsive, accessible UI", "Admin dashboards & analytics", "SEO and performance tuning"],
  },
  {
    title: "Mobile Apps",
    Icon: Smartphone,
    gradient: "from-violet-600 to-[#2d8fcf]",
    points: ["iOS and Android builds", "Offline mode and sync", "Push notifications & in-app flows"],
  },
  {
    title: "Integrations",
    Icon: Plug,
    gradient: "from-emerald-500 to-[#1a4a82]",
    points: ["Payments and subscriptions", "3rd-party API hookups", "AI automation pipelines"],
  },
];

const qualityPoints = [
  { Icon: Code2,       text: "Code reviews and clean architecture"          },
  { Icon: ShieldCheck, text: "Automated testing and QA coverage"            },
  { Icon: Zap,         text: "Performance optimization and monitoring"       },
  { Icon: Lock,        text: "Security best practices and data protection"   },
  { Icon: LifeBuoy,    text: "Post-launch maintenance and support"           },
];

const industries = [
  {
    group: "Tech & Software",
    Icon: Cpu,
    pill: "bg-sky-500/10 text-sky-700 border-sky-200",
    tag: "bg-sky-50 text-sky-600 border-sky-100 hover:border-sky-300",
    items: ["SaaS", "AI Automation", "Fintech", "Healthcare", "IoT & Tracking"],
  },
  {
    group: "Business & Services",
    Icon: Briefcase,
    pill: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:border-emerald-300",
    items: ["E-commerce", "Food & Retail", "Logistics", "Real Estate", "Professional Services", "Travel", "Manufacturing"],
  },
  {
    group: "Education & Training",
    Icon: BookOpen,
    pill: "bg-violet-500/10 text-violet-700 border-violet-200",
    tag: "bg-violet-50 text-violet-700 border-violet-100 hover:border-violet-300",
    items: ["EdTech", "Corporate Training", "LMS & Coaching", "Certification Bodies", "Workforce Enablement"],
  },
];

const engagementModels = [
  {
    title: "Fixed Price",
    desc: "Clear scope, milestones, and timeline. Best for well-defined projects.",
    Icon: FileCheck2,
    tag: "Most Predictable",
    featured: false,
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
  },
  {
    title: "Dedicated Team",
    desc: "Full-time engineers embedded in your product roadmap.",
    Icon: Users,
    tag: "Most Popular",
    featured: true,
    gradient: "from-[#071629] to-[#1a4a82]",
  },
  {
    title: "Hourly / Retainer",
    desc: "Flexible ongoing support for enhancements and growth work.",
    Icon: Clock,
    tag: "Most Flexible",
    featured: false,
    gradient: "from-emerald-600 to-[#1a4a82]",
  },
];

const CapabilitiesPage = () => (
  <div id="capabilities" className="section-target">
    <DocumentPage className="bg-white">

      {/* ── Section header ── */}
      <div className="mb-14 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Settings2 className="h-3.5 w-3.5" />
          How We Work
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Capabilities &amp; Approach
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-52" />
        </div>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
          A structured delivery process, full-stack technical depth, and engagement models built around how serious product teams actually work.
        </p>
      </div>

      {/* ── Delivery Process ── */}
      <div className="mb-16" data-reveal="reveal-fade">
        {/* Sub-header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Delivery Process</p>
            <h3 className="mt-0.5 font-heading text-lg font-extrabold text-[#0a1f3d]">From brief to live — 6 clear steps</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-3.5 py-1.5 text-[11px] font-heading font-bold uppercase tracking-widest text-[#1a4a82]">
            Agile Method
          </span>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-px bg-gradient-to-r from-transparent via-[#1a4a82]/15 to-transparent lg:block" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {processSteps.map(({ title, desc, Icon }, idx) => (
              <div
                key={title}
                data-reveal={`reveal reveal-delay-${idx + 1}`}
                className="group flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf] text-white shadow-[0_6px_18px_-6px_rgba(26,74,130,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                  {/* Step number badge */}
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-heading font-extrabold text-[#1a4a82] shadow-sm ring-1 ring-[#1a4a82]/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-heading text-[13px] font-bold text-[#0a1f3d]">{title}</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Capabilities + Quality ── */}
      <div className="mb-16 grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">

        {/* Capability cards */}
        <div>
          <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Core Capabilities</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {capabilities.map(({ title, Icon, gradient, points }, i) => (
              <div
                key={title}
                data-reveal={`reveal-scale reveal-delay-${i + 1}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1a4a82]/25 hover:shadow-[0_12px_36px_-10px_rgba(26,74,130,0.15)]"
              >
                {/* Top gradient bar */}
                <div className={`h-[3px] w-full bg-gradient-to-r ${gradient}`} />
                <div className="flex flex-1 flex-col p-5">
                  {/* Icon */}
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mb-3 font-heading text-[13px] font-extrabold text-[#0a1f3d]">{title}</p>
                  <ul className="space-y-2">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <Check className="h-2.5 w-2.5 text-emerald-600" />
                        </div>
                        <span className="text-[12px] leading-snug text-slate-500">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Standards */}
        <div data-reveal="reveal-fade">
          <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Quality Standards</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white">
            {qualityPoints.map(({ Icon, text }, i) => (
              <div
                key={text}
                className={`flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[#1a4a82]/5 ${i < qualityPoints.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1a4a82]/10 ring-1 ring-[#1a4a82]/15">
                  <Icon className="h-4 w-4 text-[#1a4a82]" />
                </div>
                <span className="text-[13px] font-medium text-slate-600">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Industries Served ── */}
      <div className="mb-16" data-reveal="reveal-fade">
        <div className="mb-8 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Industries Served</p>
          <h3 className="mt-1 font-heading text-xl font-extrabold text-[#0a1f3d]">Built for your vertical</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {industries.map(({ group, Icon, pill, tag, items }, i) => (
            <div key={group} data-reveal={`reveal-scale reveal-delay-${i + 1}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              {/* Category header */}
              <div className="mb-4 flex items-center gap-2.5">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-heading font-bold ${pill}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {group}
                </div>
              </div>
              {/* Industry tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-2.5 py-1 text-[11.5px] font-medium transition-colors ${tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Engagement Models ── */}
      <div data-reveal="reveal-fade">
        <div className="mb-8 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Engagement Models</p>
          <h3 className="mt-1 font-heading text-xl font-extrabold text-[#0a1f3d]">Work with us your way</h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 sm:items-center">
          {engagementModels.map(({ title, desc, Icon, tag, featured, gradient }, i) => (
            <div
              key={title}
              data-reveal={`reveal-scale reveal-delay-${i + 1}`}
              className={`relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                featured
                  ? "bg-gradient-to-br from-[#071629] to-[#1a4a82] shadow-[0_16px_48px_-12px_rgba(26,74,130,0.55)] sm:scale-105 sm:z-10 hover:-translate-y-1"
                  : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-[#1a4a82]/25 hover:shadow-[0_12px_36px_-10px_rgba(26,74,130,0.12)]"
              }`}
            >
              {/* Top accent bar */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${gradient}`} />

              {featured && (
                <div className="absolute right-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-sky-400/20 px-2.5 py-0.5 text-[10px] font-heading font-extrabold uppercase tracking-widest text-sky-300 ring-1 ring-sky-400/30">
                    {tag}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {/* Icon circle */}
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h4 className={`font-heading text-base font-extrabold ${featured ? "text-white" : "text-[#0a1f3d]"}`}>
                  {title}
                </h4>
                <p className={`mt-2 text-[13px] leading-relaxed ${featured ? "text-white/55" : "text-slate-500"}`}>
                  {desc}
                </p>

                {!featured && (
                  <div className="mt-4">
                    <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wide text-slate-500">
                      {tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </DocumentPage>
  </div>
);

export default CapabilitiesPage;
