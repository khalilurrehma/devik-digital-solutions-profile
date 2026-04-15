import { useState } from "react";
import { ArrowLeft, ArrowRight, Briefcase, CalendarDays, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard, allProjects } from "@/components/PortfolioPage";
import { buildWhatsAppHref } from "@/lib/siteConfig";
import HeroParticleCanvas from "@/components/HeroParticleCanvas";
import { useHeroSpotlight } from "@/hooks/useHeroSpotlight";
import { usePageMeta } from "@/hooks/usePageMeta";

const FILTER_TAGS = ["All", "Mobile", "Web", "HealthTech", "EdTech"] as const;

const WorkPage = () => {
  const heroRef = useHeroSpotlight<HTMLElement>();
  const [active, setActive] = useState<string>("All");
  const pageMeta = usePageMeta(
    "Our Work | DEVIK DIGITAL SOLUTIONS",
    "Browse 500+ shipped projects — web apps, mobile apps, AI tools, and SaaS platforms built by DEVIK DIGITAL SOLUTIONS."
  );

  const filtered = active === "All"
    ? allProjects
    : allProjects.filter((p) => p.filterTag === active);

  return (
    <div className="min-h-screen bg-white">
      {pageMeta}

      {/* ── Hero ── */}
      <section ref={heroRef} className="hero-spotlight relative overflow-hidden bg-gradient-to-br from-[#040e1c] via-[#071629] to-[#0a1f3d] pb-20 pt-36">
        <HeroParticleCanvas />
        {/* Grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]" />
        {/* Glow */}
        <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#1a4a82]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-sky-600/15 blur-[80px]" />

        {/* Back breadcrumb */}
        <Link
          to="/"
          className="absolute left-6 top-[72px] z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/18 hover:text-white sm:left-10 lg:left-16"
        >
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>

        <div className="relative mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/40 bg-[#1a4a82]/15 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-sky-300">
            <Briefcase className="h-3.5 w-3.5" />
            Our Work
          </span>

          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Products We've{" "}
            <span className="animate-hero-glow bg-gradient-to-r from-sky-400 to-[#2d8fcf] bg-clip-text text-transparent">
              Shipped
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/50">
            Real builds across mobile, web, HealthTech, EdTech, marketplaces, and more.
            All delivered with production-quality code and clear communication.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { val: `${allProjects.length}+`, label: "Projects Listed" },
              { val: "500+",  label: "Total Shipped" },
              { val: "15+",   label: "Countries Reached" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-extrabold text-white">{s.val}</p>
                <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + grid ── */}
      <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-16">

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-slate-400">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filter:
          </div>
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={`rounded-full px-4 py-1.5 text-xs font-heading font-bold transition-all ${
                active === tag
                  ? "bg-[#1a4a82] text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-[#1a4a82]/30 hover:text-[#1a4a82]"
              }`}
            >
              {tag}
              {tag === "All" && (
                <span className="ml-1.5 rounded-full bg-white/20 px-1.5 text-[10px]">
                  {allProjects.length}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-400">
            Showing <span className="font-semibold text-slate-600">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1f3d] via-[#1a4a82] to-[#2d8fcf] p-px shadow-[0_8px_40px_-12px_rgba(26,74,130,0.5)]">
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#071629] px-8 py-12 text-center sm:px-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-sky-300">
              Start a Project
            </span>
            <h2 className="max-w-lg font-heading text-2xl font-extrabold text-white sm:text-3xl">
              Want to build something like this?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/50">
              Share what you're building — we'll tell you honestly if we're the right fit and what
              it would take to ship it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] px-6 py-3 text-sm font-heading font-bold text-white shadow-lg transition hover:brightness-110"
              >
                <CalendarDays className="h-4 w-4" />
                Book a Free Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={buildWhatsAppHref("Hi, I saw your portfolio and want to discuss a project.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/15"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default WorkPage;
