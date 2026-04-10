import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";
import {
  ArrowRight, ArrowUpRight, Briefcase, GraduationCap, ShieldCheck,
  Smartphone, Sparkles, Stethoscope, Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";

export type ProjectLink = { label: string; url: string };
export type Project = {
  icon: typeof Smartphone;
  name: string;
  category: string;
  filterTag: string;
  year: string;
  problem: string;
  outcome: string;
  stack: string[];
  gradient: string;
  links: ProjectLink[];
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    icon: Smartphone,
    name: "Eladde",
    category: "Mobile + Web Platform",
    filterTag: "Mobile",
    year: "2024",
    problem: "A consumer brand needed a connected mobile experience plus a marketing website sharing the same identity and flow.",
    outcome: "Delivered a Flutter app on iOS & Android alongside the public web presence — users see one consistent product.",
    stack: ["Flutter", "Dart", "Firebase", "Web"],
    gradient: "from-[#0a3878] via-[#1f6fb8] to-[#3aa6ff]",
    links: [
      { label: "App Store",    url: "https://apps.apple.com/ng/app/eladde/id6747427099" },
      { label: "Google Play",  url: "https://play.google.com/store/search?q=eladde&c=apps&hl=en" },
      { label: "Website",      url: "https://www.eladde.com/" },
    ],
    featured: true,
  },
  {
    icon: ShieldCheck,
    name: "Maiguard",
    category: "Security Mobile App",
    filterTag: "Mobile",
    year: "2024",
    problem: "A security service needed a mobile app for residents and offices to request guards, raise alerts, and stay protected.",
    outcome: "Built a Flutter app focused on quick access, clear status, and trust-first UI for sensitive security workflows.",
    stack: ["Flutter", "Dart", "REST API", "Push Notifications"],
    gradient: "from-[#0c4a6e] via-[#0369a1] to-[#38bdf8]",
    links: [
      { label: "App Store", url: "https://apps.apple.com/ng/app/maiguard-safe-homes-offices/id6743394041" },
    ],
    featured: true,
  },
  {
    icon: Stethoscope,
    name: "RockGarden EHR",
    category: "Healthcare Platform",
    filterTag: "HealthTech",
    year: "2023",
    problem: "A clinic group needed an electronic health records system with both clinician mobile access and a full admin web panel.",
    outcome: "Delivered a Flutter mobile EHR for staff and a structured admin dashboard for managing patients and operations.",
    stack: ["Flutter", "React", "Node.js", "PostgreSQL"],
    gradient: "from-[#0e7490] via-[#0891b2] to-[#22d3ee]",
    links: [
      { label: "App Store",   url: "https://apps.apple.com/ng/app/rockgarden-ehr/id1638329540" },
      { label: "Admin Panel", url: "https://admin.rockgardenehr.com/" },
    ],
    featured: true,
  },
  {
    icon: Utensils,
    name: "Zabor / Zabor Eats",
    category: "Marketplace + Delivery",
    filterTag: "Web",
    year: "2023",
    problem: "A food brand needed a public marketplace, a customer-facing eats site, and an admin app for end-to-end operations.",
    outcome: "Shipped both web platforms with a Flutter admin app that keeps day-to-day operations under one workflow.",
    stack: ["Flutter", "Web", "REST API", "Admin"],
    gradient: "from-[#15407f] via-[#2563eb] to-[#22d3ee]",
    links: [
      { label: "Zabor",      url: "https://zabor.com.co/" },
      { label: "Zabor Eats", url: "https://zaboreats.com/" },
      { label: "Admin App",  url: "https://play.google.com/store/apps/details?id=com.zaborapp.admin&hl=en" },
    ],
    featured: true,
  },
  {
    icon: GraduationCap,
    name: "Sukuul Assessment",
    category: "EdTech Platform",
    filterTag: "EdTech",
    year: "2023",
    problem: "An education product needed a reliable assessment platform with separate environments for live use and demo previews.",
    outcome: "Delivered an assessment experience built around clarity, fairness, and a clean review workflow for educators.",
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    gradient: "from-[#1e3a8a] via-[#1d4ed8] to-[#60a5fa]",
    links: [
      { label: "Live", url: "https://assessment.sukuul.com/" },
      { label: "Demo", url: "https://demoassess.sukuul.com/" },
    ],
    featured: true,
  },
  {
    icon: Sparkles,
    name: "Nextop — Replay & Echong",
    category: "Product Suite",
    filterTag: "Web",
    year: "2024",
    problem: "A growing product team needed two connected web experiences shipped on the same stack with consistent quality.",
    outcome: "Built and launched both products with shared design language, faster iteration, and a clear release process.",
    stack: ["React", "Next.js", "Node.js", "Vercel"],
    gradient: "from-[#0a3878] via-[#1259a8] to-[#3aa6ff]",
    links: [
      { label: "Replay-A", url: "https://replay-a.nextop.com.pe/" },
      { label: "Echong",   url: "https://echong.nextop.com.pe/" },
    ],
    featured: true,
  },
  // ── Below shown only on /work ──
  {
    icon: Sparkles,
    name: "Appran Glossary",
    category: "Knowledge Platform",
    filterTag: "Web",
    year: "2023",
    problem: "A team needed a searchable glossary that scales with content and is easy to extend with new terms over time.",
    outcome: "Delivered a clean, fast glossary surface optimized for browsing, search, and maintainability.",
    stack: ["React", "Tailwind", "Node.js"],
    gradient: "from-[#0c4a6e] via-[#1f6fb8] to-[#5ba9d6]",
    links: [{ label: "Live", url: "https://glossary.appran.com/" }],
  },
  {
    icon: Sparkles,
    name: "Cooperate Emaishapay",
    category: "Cooperative Platform",
    filterTag: "Web",
    year: "2022",
    problem: "A cooperative platform needed a member-facing site that explains the offering and converts visitors into signups.",
    outcome: "Built a marketing experience focused on trust, clarity, and a clean entry point into the cooperative service.",
    stack: ["React", "Tailwind", "Netlify"],
    gradient: "from-[#15407f] via-[#1f6fb8] to-[#3aa6ff]",
    links: [{ label: "Live", url: "https://cooperate-emaishapay.netlify.app/" }],
  },
  {
    icon: GraduationCap,
    name: "Kids University",
    category: "Education Microsite",
    filterTag: "EdTech",
    year: "2022",
    problem: "An education brand needed a friendly, fast microsite to introduce its program and capture interest.",
    outcome: "Shipped a playful but structured site focused on parents and students, built for speed and easy updates.",
    stack: ["React", "Tailwind", "Netlify"],
    gradient: "from-[#0e7490] via-[#0369a1] to-[#38bdf8]",
    links: [{ label: "Live", url: "https://kidsuniversity.netlify.app/" }],
  },
  {
    icon: Smartphone,
    name: "Our Kids Read",
    category: "Nonprofit Content",
    filterTag: "Web",
    year: "2022",
    problem: "A nonprofit needed a polished newsletter experience to share updates with supporters in a clear, mobile-friendly way.",
    outcome: "Delivered a structured newsletter layout that protects readability, brand, and accessibility across devices.",
    stack: ["Web", "Content", "Responsive"],
    gradient: "from-[#1e3a8a] via-[#2563eb] to-[#60a5fa]",
    links: [{ label: "Live", url: "https://www.ourkidsread.org/newsletter-24-oct" }],
  },
];

const featured = allProjects.filter((p) => p.featured);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;
  return (
    <article
      data-reveal={`reveal-scale reveal-delay-${(index % 3) + 1}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-12px_rgba(26,74,130,0.22)] hover:border-[#1a4a82]/30"
    >
      {/* ── Thumbnail ── */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_55%)]" />
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-white drop-shadow" strokeWidth={1.5} />
          </div>
        </div>

        {/* Year badge top-left */}
        <div className="absolute left-3 top-3 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-mono font-bold text-white/80 backdrop-blur-sm">
          {project.year}
        </div>

        {/* Category bottom */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/50 to-transparent">
          <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.2em] text-white/90">
            {project.category}
          </span>
          <span className="font-mono text-[10px] font-bold text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-[15px] font-extrabold text-[#0a1f3d] mb-1">{project.name}</h3>

        {/* Outcome — hero line */}
        <p className="text-[12.5px] font-medium leading-relaxed text-emerald-700 mb-3 border-l-2 border-emerald-400 pl-2.5">
          {project.outcome}
        </p>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#1a4a82]/15 bg-[#f0f5ff] px-2.5 py-0.5 text-[11px] font-heading font-semibold text-[#1a4a82]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live links */}
        {project.links.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-heading font-semibold text-slate-600 transition hover:border-[#1a4a82]/30 hover:text-[#1a4a82]"
              >
                {link.label} <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          to="/book"
          className="mt-auto inline-flex items-center gap-2 text-[12.5px] font-heading font-bold text-[#1a4a82] transition-all group-hover:gap-3"
        >
          Discuss a similar build <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
};

const PortfolioPage = () => (
  <div id="portfolio" className="section-target">
    <DocumentPage className="bg-white">

      {/* ── Section header ── */}
      <div className="mb-10 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Briefcase className="h-3.5 w-3.5" />
          Real, Live Client Projects
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Recent Work
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-36" />
        </div>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
          Selected projects delivered across mobile, web, healthcare, education, marketplace, and nonprofit verticals.
          Most are live products you can open right now.
        </p>

        {/* Quick stats */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[
            { val: "10+", label: "Live Products" },
            { val: "6+",  label: "Industries" },
            { val: "3",   label: "Continents" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-xl font-extrabold text-[#0a1f3d]">{s.val}</p>
              <p className="text-[11px] text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured cards ── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      {/* ── View all CTA ── */}
      <div className="mt-10 flex flex-col items-center gap-4 text-center" data-reveal="reveal-fade">
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-[#0a1f3d]">{featured.length} featured</span> of <span className="font-semibold text-[#0a1f3d]">{allProjects.length}+</span> delivered projects
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1a4a82] bg-white px-8 py-3 text-sm font-heading font-bold text-[#1a4a82] shadow-sm transition hover:bg-[#1a4a82] hover:text-white hover:shadow-[0_8px_28px_-8px_rgba(26,74,130,0.45)]"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </DocumentPage>
  </div>
);

export { ProjectCard };
export default PortfolioPage;
