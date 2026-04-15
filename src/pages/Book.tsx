import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import HeroParticleCanvas from "@/components/HeroParticleCanvas";
import { useHeroSpotlight } from "@/hooks/useHeroSpotlight";
import {
  ArrowLeft, ArrowRight, CalendarDays, CheckCircle2,
  Clock3, Globe2, MessageCircle, Search, Send, Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import {
  budgetOptions, buildGmailComposeHref, buildLeadWhatsAppHref,
  BookingFormData, initialBookingForm, latestLeadStorageKey,
  serviceOptions, siteConfig, sourceOptions, timelineOptions,
} from "@/lib/siteConfig";
import CalendlyInlineEmbed from "@/components/CalendlyInlineEmbed";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ErrorState = Partial<Record<keyof BookingFormData, string>>;

const validateForm = (values: BookingFormData): ErrorState => {
  const errors: ErrorState = {};
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim())    errors.email    = "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.whatsapp.trim()) errors.whatsapp = "WhatsApp or phone is required.";
  return errors;
};

const nextSteps = [
  { Icon: Search,       title: "We review your brief",          desc: "We read every submission carefully before reaching out." },
  { Icon: CalendarDays, title: "30-min call, no pitch",         desc: "We discuss scope, stack, and realistic next steps together." },
  { Icon: Sparkles,     title: "Clear proposal follows",        desc: "Scope, timeline, and cost — in plain language, within 24h." },
];

const BookPage = () => {
  const pageMeta = usePageMeta(
    "Book a Strategy Call | DEVIK DIGITAL SOLUTIONS",
    "Tell us about your project and book a free 30-minute strategy call.",
  );

  const heroRef = useHeroSpotlight<HTMLDivElement>();
  const navigate = useNavigate();
  const [form, setForm]     = useState<BookingFormData>(initialBookingForm);
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange =
    (field: keyof BookingFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((p)   => ({ ...p,   [field]: event.target.value }));
      setErrors((p) => ({ ...p,   [field]: undefined }));
    };

  const handleSelectChange = (field: keyof BookingFormData) => (value: string) => {
    setForm((p)   => ({ ...p,   [field]: value }));
    setErrors((p) => ({ ...p,   [field]: undefined }));
  };

  const whatsappHref = useMemo(() => buildLeadWhatsAppHref(form), [form]);
  const gmailHref    = useMemo(() => buildGmailComposeHref(form),  [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length > 0) { setErrors(nextErrors); return; }
    localStorage.setItem(latestLeadStorageKey, JSON.stringify(form));
    toast({ title: "Project brief ready", description: "Choose your contact channel on the next step." });
    navigate("/thank-you", { state: form });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {pageMeta}

      {/* ── Hero ── */}
      <div ref={heroRef} className="hero-section-bg hero-spotlight relative overflow-hidden pb-20 pt-28">
        <HeroParticleCanvas />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[440px] w-[440px] rounded-full bg-[#1a4a82]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -right-28 top-0 h-[360px] w-[360px] rounded-full bg-sky-600/15 blur-[90px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#040e1c] to-transparent" />

        {/* Back breadcrumb */}
        <Link to="/" className="absolute left-6 top-[72px] z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/18 hover:text-white sm:left-10 lg:left-16">
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>

        <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-sky-300">
                <CalendarDays className="h-3.5 w-3.5" />
                Free 30-Min Strategy Call
              </span>
              <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                Tell us about the<br className="hidden sm:block" />
                <span className="animate-hero-glow bg-gradient-to-r from-sky-400 via-[#3a8fd4] to-[#2d6fb0] bg-clip-text text-transparent">
                  {" "}product you want to build.
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/50">
                Share the basics — we'll help you scope the right build, stack, and next steps. No pressure, no generic pitch. Just practical guidance.
              </p>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
              {[
                { Icon: CheckCircle2, text: "No commitment required" },
                { Icon: Clock3,       text: "Reply within 24 hours"  },
                { Icon: Globe2,       text: "Remote-first team"       },
              ].map(({ Icon, text }) => (
                <div key={text} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-xs font-heading font-semibold text-white/70 backdrop-blur-sm">
                  <Icon className="h-3.5 w-3.5 text-sky-400" />{text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">

          {/* ── Form card ── */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-8 py-6">
              <h2 className="font-heading text-xl font-extrabold text-[#0a1f3d]">Your project brief</h2>
              <p className="mt-1 text-sm text-slate-500">Fill this in and we'll review it before your call.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-6 px-8 py-7">

              {/* Contact details */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">01 · Your Details</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <LightField label="Full Name"      value={form.fullName} onChange={handleChange("fullName")} placeholder="Your full name"    error={errors.fullName} />
                  <LightField label="Email Address"  type="email" value={form.email} onChange={handleChange("email")} placeholder="you@company.com" error={errors.email} />
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <LightField label="WhatsApp / Phone"      value={form.whatsapp} onChange={handleChange("whatsapp")} placeholder="+44... / +1... / +92..." error={errors.whatsapp} />
                  <LightField label="Company / Project Name" value={form.company}  onChange={handleChange("company")}  placeholder="Optional" />
                </div>
              </div>

              {/* Service type */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">02 · What Do You Need Built?</p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {serviceOptions.map((option) => (
                    <label
                      key={option}
                      className={`cursor-pointer rounded-xl border px-3.5 py-3 text-[13px] font-heading font-semibold transition-all ${
                        form.serviceType === option
                          ? "border-[#1a4a82]/35 bg-[#1a4a82]/5 text-[#0a1f3d] shadow-sm"
                          : "border-slate-200 bg-white text-slate-500 hover:border-[#1a4a82]/20 hover:bg-slate-50"
                      }`}
                    >
                      <input type="radio" name="serviceType" value={option} checked={form.serviceType === option} onChange={handleChange("serviceType")} className="sr-only" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget / Timeline / Source */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">03 · Project Details</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <LightSelect label="Approximate Budget"     value={form.budget}   onChange={handleSelectChange("budget")}   options={budgetOptions}   />
                  <LightSelect label="When to start?"         value={form.timeline} onChange={handleSelectChange("timeline")} options={timelineOptions} />
                  <LightSelect label="How did you find us?"   value={form.source}   onChange={handleSelectChange("source")}   options={sourceOptions}   />
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">04 · Project Brief</p>
                <label className="mb-2 block text-[13px] font-heading font-semibold text-[#0a1f3d]">
                  Describe your project or idea
                </label>
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={handleChange("description")}
                  placeholder="E.g. I want to build a Flutter app for a health startup — authentication, subscriptions, and an admin dashboard. Early MVP stage."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm leading-relaxed text-[#0a1f3d] placeholder:text-slate-400 focus:border-[#1a4a82]/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a4a82]/20 transition-all"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#0a1f3d] via-[#1a4a82] to-[#2d8fcf] px-6 py-4 text-sm font-heading font-bold text-white shadow-[0_6px_24px_-8px_rgba(26,74,130,0.5)] transition hover:brightness-110 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  Review &amp; Send My Brief
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-[12px] text-slate-400">
                  We'll review your brief and route you to the fastest contact option.
                </p>
              </div>

            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4 lg:sticky lg:top-28">

            {/* What happens next */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071629] to-[#1a4a82] p-7 shadow-[0_20px_60px_-20px_rgba(26,74,130,0.55)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:22px_22px]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-[55px]" />

              <div className="relative">
                <p className="mb-5 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-sky-400/80">What happens next?</p>
                <div className="space-y-5">
                  {nextSteps.map(({ Icon, title, desc }, i) => (
                    <div key={title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                        <Icon className="h-4 w-4 text-sky-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-heading font-extrabold text-white/30">0{i + 1}</span>
                          <p className="font-heading text-[13px] font-bold text-white">{title}</p>
                        </div>
                        <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Response time */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-heading font-semibold text-emerald-300">We reply within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Just a quick question? */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1a4a82]/10">
                  <MessageCircle className="h-4 w-4 text-[#1a4a82]" />
                </div>
                <div>
                  <p className="font-heading text-[13px] font-bold text-[#0a1f3d]">Just have a quick question?</p>
                  <p className="text-[12px] text-slate-500">Use our Contact page instead — it's faster.</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#1a4a82]/20 bg-[#1a4a82]/5 py-2.5 text-[13px] font-heading font-bold text-[#1a4a82] transition hover:bg-[#1a4a82]/10"
              >
                Go to Contact Us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Also send via */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-3 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-slate-400">Send brief directly via</p>
              <div className="flex gap-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-[13px] font-heading font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle className="h-3.5 w-3.5" />WhatsApp
                </a>
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-[13px] font-heading font-bold text-slate-600 transition hover:bg-slate-100"
                >
                  Email
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Calendly embed ── */}
        {siteConfig.socialLinks.calendly && (
          <div className="mt-12">
            <div className="mb-6 text-center">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">Or pick a time directly</p>
              <h3 className="mt-1 font-heading text-xl font-extrabold text-[#0a1f3d]">See open slots on our calendar</h3>
            </div>
            <CalendlyInlineEmbed url={siteConfig.socialLinks.calendly} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" />
          </div>
        )}
      </div>

    </div>
  );
};

/* ── Light-theme field components ── */

type FieldProps = {
  label: string; value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; error?: string; type?: string;
};
const LightField = ({ label, value, onChange, placeholder, error, type = "text" }: FieldProps) => (
  <div>
    <label className="mb-2 block text-[13px] font-heading font-semibold text-[#0a1f3d]">{label}</label>
    <input
      type={type} value={value} onChange={onChange} placeholder={placeholder}
      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#0a1f3d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a4a82]/20 transition-all ${
        error ? "border-red-300 bg-red-50/30" : "border-slate-200 bg-slate-50/50 focus:border-[#1a4a82]/30 focus:bg-white"
      }`}
    />
    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
  </div>
);

type SelectProps = { label: string; value: string; onChange: (v: string) => void; options: string[] };
const LightSelect = ({ label, value, onChange, options }: SelectProps) => (
  <div>
    <label className="mb-2 block text-[13px] font-heading font-semibold text-[#0a1f3d]">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-auto rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-left text-sm text-[#0a1f3d] ring-offset-transparent focus:border-[#1a4a82]/30 focus:ring-2 focus:ring-[#1a4a82]/20 focus:ring-offset-0">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-xl border border-slate-200 bg-white shadow-lg" position="popper">
        {options.map((opt) => (
          <SelectItem key={opt} value={opt} className="rounded-lg py-2.5 text-sm text-slate-700 focus:bg-[#1a4a82]/8 focus:text-[#0a1f3d]">
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default BookPage;
