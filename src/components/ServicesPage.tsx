import { Bot, CheckCircle2, Cloud, Code2, Globe, Palette, Server, Smartphone } from "lucide-react";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const services = [
  {
    id: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "Fast, scalable web apps built for growth",
    gradient: "from-[#1a4a82] to-[#2d8fcf]",
    features: [
      "React.js, Next.js, Vue.js, Nuxt.js, Angular",
      "Tailwind CSS, responsive & mobile-first UI",
      "Progressive Web Apps (PWA)",
      "WordPress, Shopify, WooCommerce",
      "Performance optimisation & SEO readiness",
      "OAuth: Google, Facebook, Apple",
    ],
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Cross-platform apps for iOS & Android",
    gradient: "from-sky-500 to-[#1a4a82]",
    features: [
      "Flutter & Dart — single codebase, both stores",
      "React Native, Swift (iOS), Kotlin (Android)",
      "Firebase Auth, Firestore & Storage",
      "REST & GraphQL API integration",
      "Offline mode, push notifications & analytics",
      "App Store & Play Store deployment",
    ],
  },
  {
    id: "03",
    icon: Server,
    title: "Backend Development",
    tagline: "Robust APIs and scalable server systems",
    gradient: "from-[#0a1f3d] to-[#1a4a82]",
    features: [
      "Laravel, Node.js, FastAPI, Django",
      "RESTful APIs, GraphQL & WebSockets",
      "Microservices & scalable architecture",
      "OAuth2, JWT, session-based auth",
      "MySQL, PostgreSQL, MongoDB, Redis",
      "Payment gateways: Stripe, PayPal, Razorpay",
    ],
  },
  {
    id: "04",
    icon: Bot,
    title: "AI & Automation",
    tagline: "Intelligent workflows that run themselves",
    gradient: "from-violet-600 to-[#2d8fcf]",
    features: [
      "OpenAI, LangChain & custom LLM integrations",
      "AI-powered chatbots & virtual assistants",
      "Workflow automation & business process AI",
      "Data pipelines & intelligent reporting",
      "Twilio, Stripe & third-party API automation",
      "Agentic systems & RAG architectures",
    ],
  },
  {
    id: "05",
    icon: Palette,
    title: "UI/UX & Graphic Design",
    tagline: "Design systems that convert and delight",
    gradient: "from-pink-500 to-[#1a4a82]",
    features: [
      "Figma, Adobe XD prototypes & wireframes",
      "Full design systems & component libraries",
      "Brand identity, logos & visual storytelling",
      "Usability testing & UX audits",
      "Branding kits & marketing collateral",
    ],
  },
  {
    id: "06",
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Ship faster, scale confidently",
    gradient: "from-[#2d8fcf] to-sky-400",
    features: [
      "AWS, GCP, Vercel, Netlify, Heroku",
      "Docker & containerised deployments",
      "CI/CD pipelines & automated testing",
      "Infrastructure as code (IaC)",
      "Version control, monitoring & uptime",
    ],
  },
];

const ServicesPage = () => (
  <div id="services" className="section-target">
    <DocumentPage className="bg-slate-50">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Code2 className="h-3.5 w-3.5" />
          What We Do
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Core Services
        </h2>
        <HeadingUnderline className="mx-auto mb-3 w-44" />
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
          Six practice areas. One delivery team. From first wireframe to live production — we handle it all.
        </p>
      </div>

      {/* ── Service cards grid ── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              data-reveal={`reveal-scale reveal-delay-${(idx % 3) + 1}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1a4a82]/30 hover:shadow-[0_12px_40px_-12px_rgba(26,74,130,0.2)]"
            >
              {/* Top gradient accent */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${s.gradient}`} />

              <div className="flex flex-1 flex-col p-6">
                {/* Icon + number row */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} shadow-sm`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-300">{s.id}</span>
                </div>

                {/* Title + tagline */}
                <h3 className="font-heading text-[16px] font-extrabold text-[#0a1f3d]">{s.title}</h3>
                <p className="mt-1 mb-5 text-[13px] text-slate-400 leading-snug">{s.tagline}</p>

                {/* Feature list */}
                <ul className="mt-auto space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2d8fcf]" />
                      <span className="text-[12.5px] leading-snug text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

    </DocumentPage>
  </div>
);

export default ServicesPage;
