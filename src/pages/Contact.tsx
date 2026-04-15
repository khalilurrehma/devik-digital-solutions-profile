import { ChangeEvent, FormEvent, useState } from "react";
import {
  ArrowLeft, ArrowRight, Globe2, HelpCircle, Layers,
  Mail, MapPin, MessageCircle, Monitor, Phone,
  Smartphone, ShoppingBag, Sparkles, Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { buildWhatsAppHref, siteConfig } from "@/lib/siteConfig";
import { usePageMeta } from "@/hooks/usePageMeta";

const serviceTypes = [
  { label: "Web Application", Icon: Monitor },
  { label: "Mobile App",      Icon: Smartphone },
  { label: "AI / ML Feature", Icon: Sparkles },
  { label: "E-Commerce",      Icon: ShoppingBag },
  { label: "Full Product",    Icon: Layers },
  { label: "Not sure yet",    Icon: HelpCircle },
];

const socials = [
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin },
  { label: "GitHub",   href: siteConfig.socialLinks.github   },
  { label: "Behance",  href: siteConfig.socialLinks.behance  },
].filter((s) => s.href);

type Form = { name: string; email: string; phone: string; service: string; message: string };
type Errors = Partial<Form>;

const validate = (f: Form): Errors => {
  const e: Errors = {};
  if (!f.name.trim())    e.name    = "Full name is required";
  if (!f.email.trim())   e.email   = "Email address is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
  if (!f.message.trim()) e.message = "Please add a brief message";
  return e;
};

const ContactFullPage = () => {
  const pageMeta = usePageMeta(
    "Contact | DEVIK DIGITAL SOLUTIONS",
    "Send us a message about your project. We respond within 24 hours.",
  );

  const [form, setForm] = useState<Form>({
    name: "", email: "", phone: "", service: "Web Application", message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (field: keyof Form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const msg = [
      "Hi DEVIK team! I'd like to get in touch.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Service needed: ${form.service}`,
      "",
      `Message: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(buildWhatsAppHref(msg), "_blank");
    setSent(true);
  };

  const handleEmail = () => {
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const subject = `Project Inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      `Service: ${form.service}`,
      "",
      form.message,
    ].filter(Boolean).join("\n");
    window.open(`mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {pageMeta}
      {/* ── Hero ── */}
      <div className="hero-section-bg relative overflow-hidden pb-20 pt-28">
        {/* Grid texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[440px] w-[440px] rounded-full bg-[#1a4a82]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -right-28 top-0 h-[360px] w-[360px] rounded-full bg-sky-600/15 blur-[90px]" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#040e1c] to-transparent" />

        {/* Back breadcrumb */}
        <Link to="/" className="absolute left-6 top-[72px] z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-heading font-semibold text-white/80 backdrop-blur-sm transition hover:bg-white/18 hover:text-white sm:left-10 lg:left-16">
          <ArrowLeft className="h-3 w-3" /> Home
        </Link>

        <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-16">
          <div className="mt-8 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for new projects
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Let's build something
              <span className="block bg-gradient-to-r from-sky-400 via-[#3a8fd4] to-[#2d6fb0] bg-clip-text text-transparent">
                great together.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/50">
              Whether you have a detailed spec or just an early idea — send us a message and we'll help define the right next step. Free consultation, no commitment.
            </p>

            {/* Trust badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-heading font-semibold text-emerald-300">Response within 24h</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-3.5 py-2">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                <span className="ml-1 text-xs font-heading font-semibold text-amber-300">5.0 Rating</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2">
                <Globe2 className="h-3.5 w-3.5 text-sky-400" />
                <span className="text-xs font-heading font-semibold text-white/55">UK · USA · UAE · CA · AU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">

          {/* ── Form card ── */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Card header */}
            <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-8 py-6">
              <h2 className="font-heading text-xl font-extrabold text-[#0a1f3d]">Start the conversation</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill in the details and we'll reach out within 24 hours.
              </p>
            </div>

            <form onSubmit={handleWhatsApp} className="grid gap-6 px-8 py-7">

              {/* ── Personal details ── */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">
                  01 · Your Details
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <LightField
                    label="Full Name"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your full name"
                    error={errors.name}
                  />
                  <LightField
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@company.com"
                    error={errors.email}
                  />
                </div>
                <div className="mt-4">
                  <LightField
                    label="WhatsApp / Phone"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+44... / +1... / +92... (optional)"
                  />
                </div>
              </div>

              {/* ── Service type ── */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">
                  02 · What Do You Need Built?
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {serviceTypes.map(({ label, Icon }) => {
                    const active = form.service === label;
                    return (
                      <button
                        type="button"
                        key={label}
                        onClick={() => setForm((p) => ({ ...p, service: label }))}
                        className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[13px] font-heading font-semibold transition-all duration-200 ${
                          active
                            ? "border-[#1a4a82]/35 bg-[#1a4a82]/5 text-[#0a1f3d] shadow-sm"
                            : "border-slate-200 bg-white text-slate-500 hover:border-[#1a4a82]/20 hover:bg-slate-50"
                        }`}
                      >
                        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${active ? "bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf]" : "bg-slate-100"}`}>
                          <Icon className={`h-3.5 w-3.5 ${active ? "text-white" : "text-slate-400"}`} />
                        </div>
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Message ── */}
              <div>
                <p className="mb-4 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-[#2d8fcf]">
                  03 · Your Message
                </p>
                <label className="mb-2 block text-[13px] font-heading font-semibold text-[#0a1f3d]">
                  Briefly describe your project or question
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="For example: I want to build a SaaS platform with multi-tenant access and a billing system. I'm at the early idea stage and want to understand scope and cost."
                  className={`w-full resize-none rounded-xl border px-4 py-3 text-sm leading-relaxed text-[#0a1f3d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a4a82]/20 transition-all ${
                    errors.message
                      ? "border-red-300 bg-red-50/30 focus:border-red-300"
                      : "border-slate-200 bg-slate-50/50 focus:border-[#1a4a82]/30 focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* ── Submit ── */}
              <div>
                {sent ? (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p className="text-sm font-heading font-semibold text-emerald-700">
                      Message sent! We'll reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-6 py-3.5 text-sm font-heading font-bold text-white shadow-[0_6px_24px_-8px_rgba(26,74,130,0.5)] transition hover:brightness-110 hover:-translate-y-0.5"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Send via WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleEmail}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1a4a82]/20 bg-white px-6 py-3.5 text-sm font-heading font-bold text-[#1a4a82] transition hover:border-[#1a4a82]/40 hover:bg-[#1a4a82]/5"
                      >
                        <Mail className="h-4 w-4" />
                        Send via Email
                      </button>
                    </div>
                    <p className="mt-3 text-[12px] text-slate-400">
                      No commitment required. We'll reply within 24 hours and help you figure out the right next step.
                    </p>
                  </>
                )}
              </div>

            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4 lg:sticky lg:top-28">

            {/* Dark contact card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#071629] to-[#1a4a82] p-7 shadow-[0_20px_60px_-20px_rgba(26,74,130,0.55)]">
              {/* Grid texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:22px_22px]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/20 blur-[55px]" />

              <div className="relative space-y-5">
                {/* Response pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-xs font-heading font-semibold text-emerald-300">Avg. response under 24h</span>
                </div>

                <h3 className="font-heading text-lg font-extrabold text-white">Direct contact</h3>

                {/* Contact rows */}
                <div className="space-y-3">
                  {[
                    { Icon: Mail,   label: "Email",    value: siteConfig.email,        href: `mailto:${siteConfig.email}` },
                    { Icon: Phone,  label: "Phone",    value: siteConfig.phoneDisplay,  href: siteConfig.phoneHref },
                    { Icon: MapPin, label: "Based in", value: siteConfig.location,      href: undefined },
                  ].map(({ Icon, label, value, href }) => {
                    const inner = (
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                          <Icon className="h-4 w-4 text-sky-300" />
                        </div>
                        <div>
                          <p className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-white/40">{label}</p>
                          <p className="text-[13px] font-medium text-white/80">{value}</p>
                        </div>
                      </div>
                    );
                    return href ? (
                      <a key={label} href={href} className="block transition hover:opacity-80">{inner}</a>
                    ) : (
                      <div key={label}>{inner}</div>
                    );
                  })}
                </div>

                <div className="h-px bg-white/10" />

                {/* Book call CTA */}
                <div>
                  <p className="mb-3 text-[11px] font-heading font-semibold uppercase tracking-wider text-white/40">
                    Prefer a scheduled call?
                  </p>
                  <Link
                    to="/book"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-heading font-bold text-[#0a1f3d] shadow-sm transition hover:bg-sky-50 hover:-translate-y-0.5"
                  >
                    Book a Free Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Social links */}
                {socials.length > 0 && (
                  <div>
                    <p className="mb-2 text-[11px] font-heading font-semibold uppercase tracking-wider text-white/40">
                      Find us on
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-heading font-semibold text-white/65 transition hover:bg-white/15 hover:text-white"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Regions card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-3 text-[10px] font-heading font-bold uppercase tracking-[0.22em] text-slate-400">
                Clients we serve
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { flag: "🇬🇧", label: "UK" },
                  { flag: "🇺🇸", label: "USA" },
                  { flag: "🇦🇪", label: "UAE" },
                  { flag: "🇨🇦", label: "Canada" },
                  { flag: "🇦🇺", label: "Australia" },
                  { flag: "🇪🇺", label: "Europe" },
                  { flag: "🇵🇰", label: "Pakistan" },
                  { flag: "🇿🇦", label: "South Africa" },
                ].map(({ flag, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-600">
                    {flag} {label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

/* ── Light-theme input field ── */
type FieldProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
};

const LightField = ({ label, value, onChange, placeholder, error, type = "text" }: FieldProps) => (
  <div>
    <label className="mb-2 block text-[13px] font-heading font-semibold text-[#0a1f3d]">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#0a1f3d] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a4a82]/20 transition-all ${
        error
          ? "border-red-300 bg-red-50/30 focus:border-red-300"
          : "border-slate-200 bg-slate-50/50 focus:border-[#1a4a82]/30 focus:bg-white"
      }`}
    />
    {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
  </div>
);

export default ContactFullPage;
