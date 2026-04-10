import { ArrowRight, BookOpen, Clock, Layers3, Lightbulb, Star, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";
import { siteConfig } from "@/lib/siteConfig";

const publishedArticles = [
  {
    slug: siteConfig.featuredArticleSlug,
    featured: true,
    tag: "SaaS Architecture",
    category: "Engineering",
    readTime: "8 min read",
    title: "How We Structure Multi-Tenant SaaS Products With Next.js And PostgreSQL",
    excerpt: "A practical breakdown of tenant-aware architecture, access control, billing boundaries, and the delivery decisions that keep SaaS products maintainable after launch.",
    chips: ["Next.js", "PostgreSQL", "Multi-tenancy", "SaaS"],
  },
  {
    slug: "#",
    featured: false,
    tag: "Mobile Development",
    category: "Engineering",
    readTime: "6 min read",
    title: "Building Production-Ready Flutter Apps with Firebase & Clean Architecture",
    excerpt: "How we structure Flutter projects for scale — feature-based folders, BLoC state management, Firebase Auth, Firestore, and push notifications without the spaghetti.",
    chips: ["Flutter", "Firebase", "BLoC", "Clean Architecture"],
  },
  {
    slug: "#",
    featured: false,
    tag: "E-Commerce",
    category: "Product Strategy",
    readTime: "5 min read",
    title: "E-Commerce Checkout Optimisation: Stripe, Next.js, and Reducing Cart Drop-off",
    excerpt: "The technical and UX decisions that cut checkout abandonment — from Stripe Elements integration to order state management and post-payment confirmation flows.",
    chips: ["Next.js", "Stripe", "UX", "Conversion"],
  },
];

const comingSoon = [
  {
    Icon: Zap,
    gradient: "from-amber-500 to-orange-400",
    tag: "Engineering",
    title: "Performance-first delivery",
    desc: "Why we tune loading, UX responsiveness, and deployment quality early instead of treating them as cleanup.",
  },
  {
    Icon: BookOpen,
    gradient: "from-violet-600 to-[#2d8fcf]",
    tag: "Product Strategy",
    title: "Founder-friendly technical planning",
    desc: "How non-technical teams can scope an MVP without creating delivery debt from day one.",
  },
  {
    Icon: TrendingUp,
    gradient: "from-emerald-500 to-[#1a4a82]",
    tag: "Architecture",
    title: "Scaling with the right tech stack",
    desc: "Choosing the right technologies for different growth stages — and when to rebuild vs. extend.",
  },
];

const InsightsPage = () => (
  <div id="insights" className="section-target">
    <DocumentPage className="bg-slate-50">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Lightbulb className="h-3.5 w-3.5" />
          Insights
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Recent Writing &amp; Insights
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-48" />
        </div>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-500">
          Technical perspectives on building products the right way — from architecture decisions to founder-friendly delivery.
        </p>
      </div>

      {/* ── Featured article ── */}
      <div className="mb-5" data-reveal="reveal-fade">
        <Link to={publishedArticles[0].slug} className="group block">
          <div className="overflow-hidden rounded-2xl border border-[#1a4a82]/15 shadow-sm transition-all duration-300 group-hover:border-[#1a4a82]/30 group-hover:shadow-[0_16px_52px_-12px_rgba(26,74,130,0.2)]">
            <div className="grid lg:grid-cols-[5fr_7fr]">

              {/* Left — dark editorial panel */}
              <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-[#071629] to-[#1a4a82] p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-[60px]" />
                <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#2d8fcf]/15 blur-[50px]" />

                <div className="relative flex h-full flex-col justify-between gap-6">
                  {/* Top */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 self-start">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-amber-300">Featured Article</span>
                  </div>

                  {/* Middle — title preview */}
                  <p className="font-heading text-[15px] font-bold leading-snug text-white/70 line-clamp-3">
                    {publishedArticles[0].title}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-heading font-semibold text-sky-300">
                      {publishedArticles[0].tag}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-white/40">
                      <Clock className="h-3 w-3" />
                      {publishedArticles[0].readTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — article content */}
              <div className="flex flex-col justify-center bg-white p-8 sm:p-10">
                <p className="mb-3 text-[10px] font-heading font-bold uppercase tracking-[0.25em] text-[#2d8fcf]">
                  Published · {publishedArticles[0].category}
                </p>
                <h3 className="font-heading text-xl font-extrabold leading-tight text-[#0a1f3d] sm:text-2xl">
                  {publishedArticles[0].title}
                </h3>
                <p className="mt-4 text-[13.5px] leading-relaxed text-slate-500">
                  {publishedArticles[0].excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {publishedArticles[0].chips.map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 font-heading text-sm font-bold text-[#1a4a82] transition-all duration-200 group-hover:gap-3">
                  Read the article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ── 2 more published articles ── */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2" data-reveal="reveal-fade">
        {publishedArticles.slice(1).map((article) => (
          <Link key={article.title} to={article.slug} className="group block">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1a4a82]/25 hover:shadow-[0_12px_36px_-10px_rgba(26,74,130,0.15)]">
              {/* Top accent */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf]" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#2d8fcf]">
                    Published · {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="font-heading text-[15px] font-extrabold leading-snug text-[#0a1f3d]">
                  {article.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {article.chips.map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10.5px] font-medium text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-heading text-xs font-bold text-[#1a4a82] transition-all duration-200 group-hover:gap-2.5">
                  Read the article <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Coming soon cards ── */}
      <div className="grid gap-4 sm:grid-cols-3">
        {comingSoon.map(({ Icon, gradient, tag, title, desc }, i) => (
          <div
            key={title}
            data-reveal={`reveal-scale reveal-delay-${i + 1}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <div className={`h-[3px] w-full bg-gradient-to-r ${gradient}`} />
            <div className="p-5">
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="mb-2.5 flex items-center justify-between gap-2">
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-slate-400">{tag}</span>
                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-heading font-semibold text-slate-500">
                  Coming Soon
                </span>
              </div>
              <h3 className="font-heading text-[14px] font-extrabold leading-snug text-[#0a1f3d]">{title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-slate-400">{desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-300">
                <Layers3 className="h-3 w-3" />
                Publishing soon
              </div>
            </div>
          </div>
        ))}
      </div>

    </DocumentPage>
  </div>
);

export default InsightsPage;
