import { ArrowRight, Check, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const featured = [
  {
    name: "Starter",
    price: "$1,500",
    note: "starting from",
    tagline: "Landing pages, simple web apps, and focused integrations.",
    points: ["Responsive UI build", "Small backend or API hookup", "2 revision rounds", "2–3 week delivery", "30-day support"],
    dark: false,
  },
  {
    name: "Standard",
    price: "$4,500",
    note: "starting from",
    tagline: "Full-stack web or mobile products with backend and auth.",
    points: ["React or Flutter frontend", "REST API & database setup", "Auth & core workflows", "Admin panel & dashboards", "4–6 week delivery", "60-day support"],
    dark: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "tailored quote",
    tagline: "Long-running engagements, dedicated team, and complex platforms.",
    points: ["Dedicated full-stack engineers", "Architecture & security review", "Custom integrations", "Quarterly roadmap", "SLA-backed delivery", "Ongoing retainer option"],
    dark: false,
  },
];

const PricingPage = () => (
  <div id="pricing" className="section-target">
    <DocumentPage className="bg-slate-50">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1a4a82]" />
          Pricing
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          Simple, Transparent Packages
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-52" />
        </div>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500">
          Budget anchors, not hard ceilings. Real scope always gets a custom quote — these exist
          so serious buyers can gauge fit before reaching out.
        </p>
      </div>

      {/* ── 3 featured cards ── */}
      <div className="grid gap-5 lg:grid-cols-3 lg:items-center">
        {featured.map((pkg, i) => (
          <div
            key={pkg.name}
            data-reveal={`reveal-scale reveal-delay-${i + 1}`}
            className={`relative flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 ${
              pkg.dark
                ? "bg-gradient-to-br from-[#071629] to-[#1a4a82] hover:shadow-[0_16px_48px_-12px_rgba(26,74,130,0.55)]"
                : "border border-slate-200 bg-white hover:border-[#1a4a82]/30 hover:shadow-[0_12px_40px_-12px_rgba(26,74,130,0.15)]"
            } ${pkg.dark ? "lg:scale-105 lg:z-10" : ""}`}
          >
            {/* Top accent bar */}
            <div className={`h-[3px] w-full ${pkg.dark ? "bg-gradient-to-r from-sky-400 to-[#3ab5f5]" : "bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf]"}`} />

            {pkg.badge && (
              <div className="absolute right-5 top-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/20 px-3 py-1 text-[10px] font-heading font-extrabold uppercase tracking-[0.18em] text-sky-300 ring-1 ring-sky-400/30">
                  <Sparkles className="h-3 w-3" /> {pkg.badge}
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col p-7">
              <p className={`text-[10px] font-heading font-bold uppercase tracking-[0.2em] mb-1 ${pkg.dark ? "text-sky-400/70" : "text-[#2d8fcf]"}`}>
                {pkg.note}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`font-heading text-4xl font-extrabold ${pkg.dark ? "text-white" : "text-[#0a1f3d]"}`}>
                  {pkg.price}
                </span>
              </div>
              <h3 className={`font-heading text-lg font-extrabold mb-2 ${pkg.dark ? "text-white" : "text-[#0a1f3d]"}`}>{pkg.name}</h3>
              <p className={`text-[13px] leading-relaxed mb-6 ${pkg.dark ? "text-white/55" : "text-slate-500"}`}>{pkg.tagline}</p>

              <ul className="flex-1 space-y-2.5 mb-8">
                {pkg.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${pkg.dark ? "bg-sky-400/20" : "bg-emerald-100"}`}>
                      <Check className={`h-2.5 w-2.5 ${pkg.dark ? "text-sky-400" : "text-emerald-600"}`} />
                    </div>
                    <span className={`text-[13px] ${pkg.dark ? "text-white/70" : "text-slate-600"}`}>{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book"
                className={`inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-heading font-bold transition-all ${
                  pkg.dark
                    ? "bg-white text-[#0a1f3d] hover:bg-sky-50"
                    : "bg-gradient-to-r from-[#0a1f3d] to-[#1a4a82] text-white hover:brightness-110"
                }`}
              >
                Book a Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── View all CTA ── */}
      <div className="mt-10 flex flex-col items-center gap-3 text-center" data-reveal="reveal-fade">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Zap className="h-4 w-4 text-[#2d8fcf]" />
          6 packages across Web, Mobile, AI, Design & Retainer plans
        </div>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#1a4a82] bg-white px-8 py-3 text-sm font-heading font-bold text-[#1a4a82] shadow-sm transition hover:bg-[#1a4a82] hover:text-white hover:shadow-[0_8px_28px_-8px_rgba(26,74,130,0.45)]"
        >
          View Full Pricing
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </DocumentPage>
  </div>
);

export default PricingPage;
