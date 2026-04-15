import { ArrowLeft, ArrowRight, CheckCircle2, Layers3, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const articleSections = [
  {
    icon: Layers3,
    title: "Keep tenancy explicit from day one",
    body: "We prefer explicit tenant boundaries in the data model, access layer, and admin tooling. It is much cheaper to design for tenant context early than to retrofit it once customers, permissions, and billing rules start multiplying.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access should be product-aware",
    body: "Permissions cannot live as an afterthought. Founder dashboards, operator roles, and support tooling all need different capability sets. Clear permission boundaries reduce risk and avoid fragile conditionals spread across the UI.",
  },
  {
    icon: Rocket,
    title: "Launch architecture should match growth plans",
    body: "The right stack is rarely about trend-chasing. We choose delivery patterns that are easy to extend, monitor, and hand over later, which is why we focus on predictable deployment, observability, and maintainable module boundaries.",
  },
];

const InsightArticlePage = () => {
  const pageMeta = usePageMeta(
    "Multi-tenant SaaS Architecture | DEVIK DIGITAL SOLUTIONS",
    "A practical DEVIK DIGITAL SOLUTIONS article on structuring multi-tenant SaaS products with Next.js, PostgreSQL, and role-based access."
  );

  return (
    <div className="min-h-screen bg-background px-4 pb-6 pt-24 sm:px-6 lg:px-8">
      {pageMeta}
      <article className="mx-auto max-w-[980px] rounded-[32px] border border-primary/10 bg-white/90 p-6 shadow-[0_30px_90px_-50px_rgba(8,24,46,0.45)] sm:p-8 lg:p-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-primary transition hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <p className="mt-8 text-xs font-heading font-semibold uppercase tracking-[0.28em] text-primary/70">
          Technical insight
        </p>
        <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
          How We Structure Multi-Tenant SaaS Products With Next.js And PostgreSQL
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Multi-tenant products become fragile when tenancy, permissions, and billing logic are left to grow
          organically. We prefer to design those foundations early so the product can scale without forcing a rewrite
          after the first real growth phase.
        </p>

        <div className="mt-10 grid gap-5">
          {articleSections.map((section) => (
            <section key={section.title} className="card-3d rounded-[24px] p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <section.icon className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">{section.title}</h2>
              <p className="text-base leading-relaxed text-foreground">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[24px] border border-primary/10 bg-primary/5 p-6">
          <h2 className="font-heading text-xl font-bold text-primary mb-4">What this means for founders</h2>
          <div className="grid gap-3">
            {[
              "Cleaner roadmap decisions when new tenants or plans are added.",
              "Lower risk of access-control bugs as internal teams grow.",
              "A codebase that is easier to hand off, extend, and monitor after launch.",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="text-sm text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] bg-gradient-to-r from-primary to-secondary px-6 py-6 text-white">
          <h2 className="font-heading text-2xl font-bold">Need this level of thinking in your product build?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
            We work with founders and teams who need strong architecture decisions, fast communication, and delivery
            they can trust after launch.
          </p>
          <Link
            to="/book"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-heading font-semibold text-primary transition hover:scale-[1.02]"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </article>
    </div>
  );
};

export default InsightArticlePage;
