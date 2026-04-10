import {
  Building2, CheckCircle2, Globe2, MessageSquare, Rocket, Shield, Target, Users2, Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const differentiators = [
  {
    icon: Target,
    title: "Business-first delivery",
    desc: "We plan around outcomes, user flows, and scale requirements before deciding how the code should be shaped.",
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
  },
  {
    icon: Shield,
    title: "Clean engineering standards",
    desc: "Readable architecture, maintainable code, and implementation choices that support growth after launch.",
    gradient: "from-sky-500 to-[#1a4a82]",
  },
  {
    icon: MessageSquare,
    title: "Fast, direct communication",
    desc: "Clear updates, practical decisions, and fewer layers between the client and the people building the product.",
    gradient: "from-[#0a1f3d] to-[#2d8fcf]",
  },
  {
    icon: Rocket,
    title: "End-to-end support",
    desc: "From discovery and design through deployment, handover, and post-launch improvements.",
    gradient: "from-[#2d8fcf] to-sky-400",
  },
];

const values = [
  "Direct access to the team doing the work — no sales handoffs",
  "Transparent, milestone-based project tracking",
  "Code you own outright — no vendor lock-in",
  "Async-friendly delivery across multiple time zones",
];

const stats = [
  { value: 7,   suffix: "+", label: "Years in delivery",  Icon: Zap      },
  { value: 500, suffix: "+", label: "Projects shipped",   Icon: Rocket   },
  { value: 100, suffix: "+", label: "Clients served",     Icon: Users2   },
  { value: 10,  suffix: "+", label: "Team strength",      Icon: Globe2   },
];

const AboutPage = () => (
  <div id="about" className="section-target">
    <DocumentPage className="bg-white">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Building2 className="h-3.5 w-3.5" />
          About Us
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Built by engineers who care about outcomes
        </h2>
        <HeadingUnderline className="mx-auto w-64 sm:w-80" />
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
          A registered software house helping startups and growing companies ship reliable
          digital products — faster, with less technical debt and more honest communication.
        </p>
      </div>

      {/* ── Main grid ── */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

        {/* Left — company story */}
        <div data-reveal="reveal" className="relative rounded-2xl border border-slate-100 bg-gradient-to-br from-[#f8faff] to-white p-8 shadow-sm">
          {/* Brand accent bar */}
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf]" />

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#1a4a82]/8 px-3 py-1.5">
            <Users2 className="h-3.5 w-3.5 text-[#1a4a82]" />
            <span className="text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-[#1a4a82]">Who we are</span>
          </div>

          <p className="text-[15px] leading-[1.75] text-[#374151] mb-5">
            DEVIK Digital Solutions helps founders, agencies, and growing companies turn ideas into
            reliable digital products. We build web applications, mobile apps, backend systems,
            e-commerce experiences, and AI-enabled workflows with the level of communication and
            delivery discipline serious clients expect.
          </p>
          <p className="text-[15px] leading-[1.75] text-slate-500 mb-8">
            The goal is not just to ship features — it's to help clients launch with confidence,
            scale with less technical debt, and work with a team that thinks beyond a task list
            when product decisions matter.
          </p>

          {/* Value checklist */}
          <div className="grid gap-3">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a4a82]/10 ring-1 ring-[#1a4a82]/20">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1a4a82]" />
                </div>
                <span className="text-sm font-medium leading-relaxed text-[#374151]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — differentiator cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-reveal={`reveal-scale reveal-delay-${idx + 1}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a4a82]/40 hover:shadow-[0_8px_32px_-8px_rgba(26,74,130,0.18)]"
              >
                {/* Hover tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0f5ff] to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-sm`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="mb-2 font-heading text-[14px] font-bold text-[#0a1f3d]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            data-reveal={`reveal-blur stagger-${idx + 1}`}
            className="group relative overflow-hidden rounded-2xl border-2 border-[#1a4a82]/15 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1a4a82]/40 hover:shadow-[0_8px_32px_-8px_rgba(26,74,130,0.2)]"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-3 flex justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf] shadow-sm">
                <stat.Icon className="h-4 w-4 text-white" />
              </div>
            </div>
            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix}
              className="font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl"
            />
            <p className="mt-1.5 text-xs font-heading font-bold text-[#1a4a82]">{stat.label}</p>
          </div>
        ))}
      </div>

    </DocumentPage>
  </div>
);

export default AboutPage;
