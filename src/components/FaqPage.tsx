import { useState } from "react";
import {
  ArrowRight, ChevronDown, Globe2, HelpCircle,
  Layers, Lightbulb, MessageCircle, Shield, Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";
import { buildWhatsAppHref } from "@/lib/siteConfig";

const faqs = [
  {
    num: "01",
    question: "How quickly can you start a new project?",
    answer:
      "Smaller builds can usually move quickly after scope approval. Larger products begin with planning so the roadmap, architecture, and milestones are clear before development starts.",
    tag: "Timeline",
    Icon: Zap,
  },
  {
    num: "02",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. The delivery flow is structured for remote clients in the UK, EU, USA, UAE, and other international markets through email, WhatsApp, calls, and structured updates.",
    tag: "Remote",
    Icon: Globe2,
  },
  {
    num: "03",
    question: "Can you handle both design and development?",
    answer:
      "Yes. Projects can cover discovery, UI direction, frontend, backend, integrations, QA, deployment, and support. If you already have designs or specs, we can work from those too.",
    tag: "Capabilities",
    Icon: Layers,
  },
  {
    num: "04",
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. Every project can include a post-launch support window, and longer retainers are available for monitoring, enhancements, optimization, and issue response.",
    tag: "Support",
    Icon: Shield,
  },
  {
    num: "05",
    question: "What if I only have an idea and not a full specification?",
    answer:
      "That is common. We can help shape the scope, recommend the right stack, define phases, and align the build with business goals before development begins.",
    tag: "Discovery",
    Icon: Lightbulb,
  },
];

const FaqPage = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div id="faq" className="section-target">
      <DocumentPage className="bg-slate-50">

        {/* ── Section header ── */}
        <div className="mb-12 text-center" data-reveal="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
            Common Client Questions
          </h2>
          <div className="flex justify-center">
            <HeadingUnderline className="mb-3 w-48" />
          </div>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-500">
            Serious buyers want clarity before they reach out. These are the questions that most often block a first conversation.
          </p>
        </div>

        {/* ── Main 2-column layout ── */}
        <div className="grid gap-8 lg:grid-cols-[5fr_8fr] lg:items-start lg:gap-12">

          {/* Left: Sidebar card */}
          <div className="lg:sticky lg:top-28" data-reveal="reveal">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071629] to-[#1a4a82] shadow-[0_24px_64px_-20px_rgba(26,74,130,0.55)]">
              {/* Subtle grid texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Glow orb */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-[60px]" />

              <div className="relative p-7 sm:p-8">
                {/* Icon badge */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <HelpCircle className="h-6 w-6 text-sky-300" />
                </div>

                <h3 className="font-heading text-xl font-extrabold leading-tight text-white">
                  Still have<br />questions?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Don't see your question here? Send us a message — we respond within 24 hours.
                </p>

                {/* Topic pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Timeline", "Remote", "Capabilities", "Support", "Discovery"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-heading font-semibold text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Response time pill */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-heading font-semibold text-emerald-300">Avg. response under 24h</span>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-heading font-bold text-[#0a1f3d] shadow-sm transition hover:bg-sky-50 hover:-translate-y-0.5"
                  >
                    Book a Free Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={buildWhatsAppHref()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-heading font-semibold text-white/80 transition hover:bg-white/15 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Custom accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = open === faq.num;
              const { Icon } = faq;
              return (
                <div
                  key={faq.num}
                  data-reveal={`reveal reveal-delay-${i + 1}`}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#1a4a82]/25 shadow-[0_8px_32px_-8px_rgba(26,74,130,0.14)]"
                      : "border-slate-200 hover:border-[#1a4a82]/20 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : faq.num)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    {/* Number badge */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-heading font-extrabold tracking-wide transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf] text-white shadow-[0_4px_12px_-4px_rgba(26,74,130,0.45)]"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {faq.num}
                    </div>

                    {/* Question text */}
                    <span
                      className={`flex-1 font-heading text-[14.5px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#0a1f3d]" : "text-slate-700"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Tag + chevron */}
                    <div className="flex shrink-0 items-center gap-2.5 pl-2">
                      <span
                        className={`hidden rounded-full px-2.5 py-0.5 text-[10px] font-heading font-bold uppercase tracking-wide transition-colors sm:inline-flex ${
                          isOpen
                            ? "bg-[#1a4a82]/10 text-[#1a4a82]"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        {faq.tag}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isOpen ? "rotate-180 text-[#1a4a82]" : "text-slate-300"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-52" : "max-h-0"
                    }`}
                  >
                    <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1a4a82]/10 ring-1 ring-[#1a4a82]/15">
                          <Icon className="h-4 w-4 text-[#1a4a82]" />
                        </div>
                        <p className="text-[13.5px] leading-relaxed text-slate-500">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </DocumentPage>
    </div>
  );
};

export default FaqPage;
