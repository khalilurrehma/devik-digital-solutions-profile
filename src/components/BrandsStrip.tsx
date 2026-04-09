import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const brands = [
  { name: "Eladde",          industry: "E-Commerce"  },
  { name: "Maiguard",        industry: "Security"    },
  { name: "RockGarden EHR",  industry: "HealthTech"  },
  { name: "Zabor",           industry: "Marketplace" },
  { name: "Sukuul",          industry: "Education"   },
  { name: "Nextop",          industry: "SaaS"        },
  { name: "Appran",          industry: "Mobile App"  },
  { name: "Emaishapay",      industry: "FinTech"     },
  { name: "Kids University", industry: "EdTech"      },
  { name: "Our Kids Read",   industry: "Nonprofit"   },
];

type Tech = { name: string; icon: string; isImg?: boolean };

const techCategories: { id: string; label: string; techs: Tech[] }[] = [
  {
    id: "01", label: "Frontend",
    techs: [
      { name: "React",        icon: `${D}/react/react-original.svg`,               isImg: true },
      { name: "Next.js",      icon: `${D}/nextjs/nextjs-original.svg`,             isImg: true },
      { name: "Vue.js",       icon: `${D}/vuejs/vuejs-original.svg`,               isImg: true },
      { name: "TypeScript",   icon: `${D}/typescript/typescript-original.svg`,     isImg: true },
      { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-original.svg`,   isImg: true },
      { name: "Angular",      icon: `${D}/angularjs/angularjs-original.svg`,       isImg: true },
    ],
  },
  {
    id: "02", label: "Mobile",
    techs: [
      { name: "Flutter",       icon: `${D}/flutter/flutter-original.svg`,          isImg: true },
      { name: "React Native",  icon: `${D}/react/react-original.svg`,              isImg: true },
      { name: "Dart",          icon: `${D}/dart/dart-original.svg`,                isImg: true },
      { name: "Swift",         icon: `${D}/swift/swift-original.svg`,              isImg: true },
      { name: "Kotlin",        icon: `${D}/kotlin/kotlin-original.svg`,            isImg: true },
    ],
  },
  {
    id: "03", label: "Backend",
    techs: [
      { name: "Node.js",  icon: `${D}/nodejs/nodejs-original.svg`,                 isImg: true },
      { name: "Laravel",  icon: `${D}/laravel/laravel-original.svg`,               isImg: true },
      { name: "FastAPI",  icon: `${D}/fastapi/fastapi-original.svg`,               isImg: true },
      { name: "Django",   icon: `${D}/django/django-plain.svg`,                    isImg: true },
      { name: "Express",  icon: `${D}/express/express-original.svg`,               isImg: true },
      { name: "PHP",      icon: `${D}/php/php-original.svg`,                       isImg: true },
    ],
  },
  {
    id: "04", label: "Database",
    techs: [
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg`,       isImg: true },
      { name: "MongoDB",    icon: `${D}/mongodb/mongodb-original.svg`,             isImg: true },
      { name: "MySQL",      icon: `${D}/mysql/mysql-original.svg`,                 isImg: true },
      { name: "Firebase",   icon: `${D}/firebase/firebase-original.svg`,           isImg: true },
      { name: "Redis",      icon: `${D}/redis/redis-original.svg`,                 isImg: true },
    ],
  },
  {
    id: "05", label: "Cloud & DevOps",
    techs: [
      { name: "AWS",     icon: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, isImg: true },
      { name: "Docker",  icon: `${D}/docker/docker-original.svg`,                  isImg: true },
      { name: "GCP",     icon: `${D}/googlecloud/googlecloud-original.svg`,        isImg: true },
      { name: "Vercel",  icon: `${D}/vercel/vercel-original.svg`,                  isImg: true },
      { name: "Netlify", icon: `${D}/netlify/netlify-original.svg`,                isImg: true },
      { name: "CI/CD",   icon: "CI",                                               isImg: false },
    ],
  },
  {
    id: "06", label: "AI & Integrations",
    techs: [
      { name: "GraphQL",      icon: `${D}/graphql/graphql-plain.svg`,              isImg: true  },
      { name: "OpenAI",       icon: "AI",                                          isImg: false },
      { name: "LangChain",    icon: "LC",                                          isImg: false },
      { name: "AI Automation",icon: "⚙",                                          isImg: false },
      { name: "Stripe",       icon: "ST",                                          isImg: false },
      { name: "Twilio",       icon: "TW",                                          isImg: false },
      { name: "REST APIs",    icon: "API",                                         isImg: false },
    ],
  },
];

const BrandsStrip = () => (
  <div id="trusted-by" className="section-target">
    <DocumentPage className="bg-white">

      {/* ── Section header ── */}
      <div className="mb-10 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1a4a82]" />
          Trusted By Builders Worldwide
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Brands We&apos;ve Built For
        </h2>
        <HeadingUnderline className="mx-auto w-56 sm:w-72" />
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 leading-relaxed">
          Real products, live in the market — spanning e-commerce, healthtech, fintech, education,
          SaaS and nonprofit across 15+ countries.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
          {[
            { val: "500+", label: "Products Shipped" },
            { val: "100+", label: "Happy Clients"    },
            { val: "15+",  label: "Countries"        },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-2xl font-extrabold text-[#0a1f3d]">{s.val}</p>
              <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee row 1 ── */}
      <div className="marquee-mask overflow-hidden" data-reveal="reveal-fade">
        <div className="marquee-track gap-3 py-1.5">
          {[...brands, ...brands].map((b, i) => (
            <span key={`r1-${i}`} className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm transition hover:border-[#1a4a82]/40 hover:shadow-md">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#1a4a82] to-sky-400" />
              <span className="font-heading text-[13px] font-bold text-[#0a1f3d]">{b.name}</span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">{b.industry}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Marquee row 2 reverse ── */}
      <div className="marquee-mask mt-3 overflow-hidden" data-reveal="reveal-fade">
        <div className="marquee-track-reverse gap-3 py-1.5">
          {[...brands, ...brands].map((b, i) => (
            <span key={`r2-${i}`} className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#1a4a82]/15 bg-[#f0f5ff] px-5 py-2.5 transition hover:border-[#1a4a82]/35">
              <span className="h-2 w-2 rounded-full bg-[#1a4a82]" />
              <span className="font-heading text-[13px] font-bold text-[#0a1f3d]">{b.name}</span>
              <span className="rounded-full border border-[#1a4a82]/20 px-2 py-0.5 text-[10px] font-semibold text-[#1a4a82]">{b.industry}</span>
            </span>
          ))}
        </div>
      </div>

    </DocumentPage>

    {/* ── Tech Stack — white section ── */}
    <div className="w-full bg-white border-t border-slate-100 py-16 sm:py-20" data-reveal="reveal-fade">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#1a4a82]">
              Technology Stack
            </span>
            <h3 className="mt-3 font-heading text-2xl font-extrabold text-[#0a1f3d] sm:text-3xl">
              Tools We Ship With Every Week
            </h3>
            <p className="mt-2 text-sm text-slate-500">Hand-picked for performance, scalability, and long-term maintainability.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Used in production daily
          </div>
        </div>

        {/* Category rows */}
        <div className="flex flex-col divide-y divide-slate-100">
          {techCategories.map((cat) => (
            <div key={cat.id} className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-8">

              {/* Category label */}
              <div className="flex w-full shrink-0 items-center gap-3 sm:w-44 sm:flex-col sm:items-start sm:gap-1">
                <span className="font-mono text-[11px] font-bold text-slate-300">{cat.id}</span>
                <div className="h-px flex-1 bg-slate-100 sm:hidden" />
                <span className="font-heading text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#0a1f3d]">
                  {cat.label}
                </span>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="tech-chip inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm transition-all duration-200 hover:border-[#1a4a82]/40 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {tech.isImg ? (
                      <img src={tech.icon} alt={tech.name} className="tech-chip-icon h-4 w-4 object-contain" loading="lazy" />
                    ) : (
                      <span className="tech-chip-icon flex h-4 w-4 items-center justify-center rounded bg-[#0a1f3d] text-[8px] font-extrabold text-white">
                        {tech.icon}
                      </span>
                    )}
                    <span className="text-[12px] font-heading font-semibold text-slate-700">{tech.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>

  </div>
);

export default BrandsStrip;
