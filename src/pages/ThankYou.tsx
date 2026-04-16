import { useMemo } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  BookingFormData,
  buildGmailComposeHref,
  buildLeadSummary,
  buildLeadWhatsAppHref,
  latestLeadStorageKey,
  siteConfig,
} from "@/lib/siteConfig";
import { usePageMeta } from "@/hooks/usePageMeta";

const ThankYouPage = () => {
  const pageMeta = usePageMeta(
    "Your Project Brief Is Ready | DEVIK DIGITAL SOLUTIONS",
    "Your project brief is prepared. Send it to the DEVIK DIGITAL SOLUTIONS team via WhatsApp, email, or book a strategy call to start your build.",
    "noindex, nofollow"
  );

  const location = useLocation();
  const latestLead =
    (location.state as BookingFormData | null) ??
    (() => {
      if (typeof window === "undefined") return null;
      const raw = localStorage.getItem(latestLeadStorageKey);
      return raw ? (JSON.parse(raw) as BookingFormData) : null;
    })();

  const contactLinks = useMemo(() => {
    if (!latestLead) return null;

    return {
      whatsapp: buildLeadWhatsAppHref(latestLead),
      gmail: buildGmailComposeHref(latestLead),
    };
  }, [latestLead]);

  return (
    <div className="min-h-screen bg-background px-4 pb-6 pt-24 sm:px-6 lg:px-8">
      {pageMeta}
      <div className="mx-auto max-w-[1080px]">
        <div className="rounded-[32px] border border-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(21,77,127,0.12),_transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,249,253,0.96)_100%)] p-6 shadow-[0_32px_90px_-44px_rgba(8,24,46,0.5)] sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.28em] text-primary/70 mb-3">
                What Happens Next
              </p>
              <h1 className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">
                Your project brief is ready.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Use the fastest communication channel below and your brief will already be structured. This removes the
                back-and-forth and gets you to the important part faster: planning the right build.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Step 1",
                    desc: "Share your brief",
                  },
                  {
                    title: "Step 2",
                    desc: "We review and reply",
                  },
                  {
                    title: "Step 3",
                    desc: "Strategy call or scoped proposal",
                  },
                ].map((step) => (
                  <div key={step.title} className="card-3d rounded-2xl p-4">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-xs font-heading font-bold text-sky-700">
                      {step.title.replace("Step ", "")}
                    </div>
                    <p className="font-heading font-semibold text-primary text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {contactLinks && (
                  <>
                    <a
                      href={contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-heading font-bold text-white transition hover:scale-[1.02]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Continue on WhatsApp
                    </a>
                    <a
                      href={contactLinks.gmail}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-3 text-sm font-heading font-semibold text-primary transition hover:bg-primary/5"
                    >
                      <Mail className="h-4 w-4" />
                      Open Email Draft
                    </a>
                  </>
                )}
                {siteConfig.socialLinks.calendly && (
                  <a
                    href={siteConfig.socialLinks.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-100 px-5 py-3 text-sm font-heading font-semibold text-sky-700 transition hover:bg-sky-200"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Calendar Slot
                  </a>
                )}
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-heading font-semibold text-foreground transition hover:bg-white"
                >
                  Back to website
                </Link>
              </div>
            </div>

            <div className="card-3d rounded-[28px] p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-primary text-base">Brief summary</p>
                  <p className="text-sm text-muted-foreground">Use this as your confirmation before sending.</p>
                </div>
              </div>

              {latestLead ? (
                <pre className="whitespace-pre-wrap break-words rounded-2xl bg-slate-950/[0.03] p-4 text-sm leading-relaxed text-foreground">
                  {buildLeadSummary(latestLead)}
                </pre>
              ) : (
                <div className="rounded-2xl bg-slate-950/[0.03] p-4 text-sm text-muted-foreground">
                  No recent brief was found in this browser. Start from the booking form to prepare one.
                </div>
              )}

              <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.22em] text-primary/70 mb-2">
                  Direct contact
                </p>
                <p className="text-sm text-foreground">{siteConfig.email}</p>
                <p className="text-sm text-foreground">{siteConfig.phoneDisplay}</p>
                <p className="text-sm text-muted-foreground mt-2">{siteConfig.responsePromise}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-primary/10 bg-gradient-to-r from-primary to-secondary px-6 py-5 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-heading text-lg font-bold">Need a quick answer before booking?</p>
                <p className="text-sm text-white/75">Message on WhatsApp and we&apos;ll guide you to the right next step.</p>
              </div>
              {contactLinks && (
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-heading font-semibold text-primary transition hover:scale-[1.02]"
                >
                  Message now
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
