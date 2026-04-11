import { ArrowLeft, ArrowRight, CalendarDays, Check, MessageCircle, Sparkles, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppHref } from "@/lib/siteConfig";
import HeroParticleCanvas from "@/components/HeroParticleCanvas";
import { useHeroSpotlight } from "@/hooks/useHeroSpotlight";

type Tier = {
  name: string;
  price: string;
  per?: string;
  badge?: string;
  highlight?: boolean;
  points: string[];
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  accentFrom: string;
  tiers: Tier[];
};

const categories: Category[] = [
  {
    id: "web",
    title: "Web Development",
    subtitle: "From landing pages to full-stack platforms",
    emoji: "🌐",
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
    accentFrom: "#1a4a82",
    tiers: [
      {
        name: "Starter",
        price: "$1,500",
        points: ["Responsive landing / brochure site", "Up to 5 sections", "Basic contact form", "2 revision rounds", "2–3 week delivery", "30-day support"],
      },
      {
        name: "Growth",
        price: "$2,800",
        points: ["Custom React / Next.js frontend", "CMS or headless integration", "Forms, tracking & SEO", "Up to 10 pages", "3–4 week delivery", "45-day support"],
        highlight: true,
        badge: "Popular",
      },
      {
        name: "Standard",
        price: "$4,500",
        points: ["Full-stack web application", "REST API & database setup", "Auth & core workflows", "Admin panel & dashboards", "4–6 week delivery", "60-day support"],
      },
      {
        name: "Premium",
        price: "$8,000+",
        points: ["Complex platform build", "Advanced integrations & AI flows", "Payment, billing & notifications", "Deployment pipeline & QA", "8–12 week delivery", "90-day support"],
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "iOS, Android & cross-platform — App Store ready",
    emoji: "📱",
    gradient: "from-sky-500 to-[#1a4a82]",
    accentFrom: "#0ea5e9",
    tiers: [
      {
        name: "MVP",
        price: "$3,500",
        points: ["Single platform (iOS or Android)", "Core feature set only", "Firebase backend", "Basic push notifications", "4–5 week delivery", "30-day support"],
      },
      {
        name: "Standard",
        price: "$6,500",
        points: ["Flutter cross-platform (iOS + Android)", "Custom UI/UX design", "REST API integration", "Auth, storage & notifications", "6–8 week delivery", "60-day support"],
        highlight: true,
        badge: "Most Shipped",
      },
      {
        name: "Full Platform",
        price: "$12,000+",
        points: ["Mobile app + web admin panel", "Custom backend & database", "Payment gateway integration", "Analytics & crash monitoring", "10–14 week delivery", "90-day support"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "LLMs, agents, workflows and intelligent systems",
    emoji: "🤖",
    gradient: "from-violet-600 to-[#2d8fcf]",
    accentFrom: "#7c3aed",
    tiers: [
      {
        name: "Integration",
        price: "$1,500",
        points: ["Single AI feature (chatbot / summariser)", "OpenAI or Anthropic API hookup", "Basic prompt engineering", "Connected to your existing app", "1–2 week delivery"],
      },
      {
        name: "Automation Suite",
        price: "$4,500",
        points: ["Multi-step workflow automation", "LangChain / agent pipelines", "Twilio, Stripe, Slack integrations", "Custom data pipeline", "4–6 week delivery", "60-day support"],
        highlight: true,
        badge: "Best Value",
      },
      {
        name: "Custom AI System",
        price: "$10,000+",
        points: ["Full agentic architecture", "RAG with custom knowledge base", "Fine-tuning or custom models", "Dashboard & monitoring layer", "8–14 week delivery", "Ongoing retainer option"],
      },
    ],
  },
  {
    id: "design",
    title: "UI/UX & Brand Design",
    subtitle: "Figma design systems, brand identities and prototypes",
    emoji: "🎨",
    gradient: "from-pink-500 to-[#1a4a82]",
    accentFrom: "#ec4899",
    tiers: [
      {
        name: "Starter",
        price: "$500",
        points: ["Logo design (3 concepts)", "Basic brand colour palette", "Typography selection", "2 revision rounds", "Source files included"],
      },
      {
        name: "Brand Kit",
        price: "$1,200",
        points: ["Full brand identity package", "Logo, colours & typography", "Business card & letterhead", "Social media templates", "Brand guidelines PDF"],
        highlight: true,
        badge: "Popular",
      },
      {
        name: "Design System",
        price: "$2,500+",
        points: ["End-to-end Figma UI kit", "Component library (50+ elements)", "Wireframes & interactive prototype", "Usability review", "Dev-ready handoff files"],
      },
    ],
  },
  {
    id: "retainer",
    title: "Care Retainer",
    subtitle: "Ongoing maintenance, monitoring, and small improvements",
    emoji: "🛡️",
    gradient: "from-emerald-500 to-[#1a4a82]",
    accentFrom: "#10b981",
    tiers: [
      {
        name: "Basic",
        price: "$400",
        per: "/ mo",
        points: ["Up to 4 hours of dev time", "Bug fixes & small features", "Monthly status report", "Dependency updates", "Email support"],
      },
      {
        name: "Standard",
        price: "$600",
        per: "/ mo",
        points: ["Up to 8 hours of dev time", "Bug fixes & new features", "Uptime & error monitoring", "Security & dependency updates", "Priority email + WhatsApp"],
        highlight: true,
        badge: "Recommended",
      },
      {
        name: "Priority",
        price: "$1,200",
        per: "/ mo",
        points: ["Up to 20 hours of dev time", "Feature development included", "24h response window", "Performance tuning", "Monthly video call", "Dedicated Slack channel"],
      },
    ],
  },
];

const TierCard = ({ tier, gradient }: { tier: Tier; gradient: string }) => (
  <div className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
    tier.highlight
      ? `bg-gradient-to-br ${gradient} border-transparent shadow-[0_12px_40px_-12px_rgba(26,74,130,0.35)]`
      : "border-slate-200 bg-white shadow-sm hover:border-[#1a4a82]/30 hover:shadow-[0_8px_32px_-8px_rgba(26,74,130,0.15)]"
  }`}>
    {/* Top bar */}
    <div className={`h-[3px] w-full ${tier.highlight ? "bg-white/30" : `bg-gradient-to-r ${gradient}`}`} />

    {tier.badge && (
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <span className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-heading font-extrabold uppercase tracking-[0.18em] shadow-sm ${
          tier.highlight ? "bg-white text-[#0a1f3d]" : "bg-[#1a4a82] text-white"
        }`}>
          <Sparkles className="h-2.5 w-2.5" /> {tier.badge}
        </span>
      </div>
    )}

    <div className="flex flex-1 flex-col p-6 pt-7">
      <p className={`text-[10px] font-heading font-bold uppercase tracking-[0.2em] mb-1 ${tier.highlight ? "text-white/60" : "text-[#2d8fcf]"}`}>
        Package
      </p>
      <div className="flex items-baseline gap-1 mb-0.5">
        <span className={`font-heading text-3xl font-extrabold ${tier.highlight ? "text-white" : "text-[#0a1f3d]"}`}>{tier.price}</span>
        {tier.per && <span className={`text-sm font-semibold ${tier.highlight ? "text-white/50" : "text-slate-400"}`}>{tier.per}</span>}
      </div>
      <h3 className={`font-heading text-base font-extrabold mb-5 ${tier.highlight ? "text-white" : "text-[#0a1f3d]"}`}>{tier.name}</h3>

      <ul className="flex-1 space-y-2.5 mb-6">
        {tier.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5">
            <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
              tier.highlight ? "bg-white/25" : "bg-emerald-100"
            }`}>
              <Check className={`h-2.5 w-2.5 ${tier.highlight ? "text-white" : "text-emerald-600"}`} />
            </div>
            <span className={`text-[12.5px] leading-relaxed ${tier.highlight ? "text-white/80" : "text-slate-600"}`}>{p}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/book"
        className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-xs font-heading font-bold transition-all ${
          tier.highlight
            ? "bg-white text-[#0a1f3d] hover:bg-slate-50"
            : "bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] text-white hover:brightness-110"
        }`}
      >
        Get Started <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  </div>
);

const PricingFullPage = () => {
  const heroRef = useHeroSpotlight<HTMLElement>();
  return (
  <div className="min-h-screen bg-slate-50">

    {/* ── Hero ── */}
    <section ref={heroRef} className="hero-spotlight relative overflow-hidden bg-gradient-to-br from-[#040e1c] via-[#071629] to-[#0a1f3d] pb-24 pt-36">
      <HeroParticleCanvas />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-[#1a4a82]/25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-sky-600/15 blur-[80px]" />

      {/* Back breadcrumb — sits below sticky nav, outside main content flow */}
      <Link to="/" className="absolute left-6 top-[72px] z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/18 hover:text-white sm:left-10 lg:left-16">
        <ArrowLeft className="h-3 w-3" /> Home
      </Link>

      <div className="relative mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/40 bg-[#1a4a82]/15 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-sky-300">
          <Tag className="h-3.5 w-3.5" />
          Pricing
        </span>
        <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Transparent{" "}
          <span className="animate-hero-glow bg-gradient-to-r from-sky-400 to-[#2d8fcf] bg-clip-text text-transparent">Pricing</span>
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/45">
          Budget anchors, not hard ceilings. Every project gets a custom scope — these packages
          exist so you can gauge fit before reaching out.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/book" className="animate-glow-pulse inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] px-6 py-3 text-sm font-heading font-bold text-white shadow-lg transition hover:brightness-110">
            <CalendarDays className="h-4 w-4" /> Book a Free Call
          </Link>
          <a href={buildWhatsAppHref("Hi, I'd like to discuss pricing for my project.")} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-heading font-semibold text-white/80 transition hover:bg-white/15">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        {/* Category quick-jump pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a key={c.id} href={`#pricing-${c.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] font-heading font-semibold text-white/60 backdrop-blur-sm transition hover:border-white/25 hover:text-white">
              <span>{c.emoji}</span> {c.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* ── Category sections ── */}
    <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-16 space-y-16">
      {categories.map((cat) => (
        <section key={cat.id} id={`pricing-${cat.id}`} className="scroll-mt-24">

          {/* Category header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-xl shadow-md`}>
                {cat.emoji}
              </div>
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-[#0a1f3d] sm:text-3xl">{cat.title}</h2>
                <p className="mt-0.5 text-sm text-slate-500">{cat.subtitle}</p>
              </div>
            </div>
            <Link to="/book"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#1a4a82]/25 bg-[#1a4a82]/5 px-4 py-2 text-xs font-heading font-semibold text-[#1a4a82] transition hover:bg-[#1a4a82]/10">
              Custom quote <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Tier cards */}
          <div className={`grid gap-5 ${cat.tiers.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {cat.tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} gradient={cat.gradient} />
            ))}
          </div>
        </section>
      ))}

      {/* ── Enterprise banner ── */}
      <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] p-px shadow-[0_8px_40px_-12px_rgba(26,74,130,0.4)]">
        <div className="flex flex-col gap-8 rounded-2xl bg-gradient-to-br from-[#071629] to-[#0d2548] px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-amber-300">
              Enterprise
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">Need something bigger?</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/45">
              Dedicated engineers, long-running engagements, complex platforms, and SLA-backed delivery cadence.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {["Dedicated team", "Architecture review", "Custom integrations", "SLA-backed cadence", "Quarterly roadmap"].map((f) => (
                <span key={f} className="flex items-center gap-2 text-sm text-white/55">
                  <Check className="h-3.5 w-3.5 text-amber-400" /> {f}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <Link to="/book" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] px-7 py-3 text-sm font-heading font-bold text-white shadow-lg transition hover:brightness-110">
              <CalendarDays className="h-4 w-4" /> Book a Call
            </Link>
            <a href={buildWhatsAppHref("Hi, I have an enterprise project to discuss.")} target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-heading font-semibold text-white/70 transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  </div>
);

export default PricingFullPage;
