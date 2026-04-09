import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Globe2, Mail, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import {
  budgetOptions,
  buildGmailComposeHref,
  buildLeadWhatsAppHref,
  BookingFormData,
  initialBookingForm,
  latestLeadStorageKey,
  serviceOptions,
  siteConfig,
  sourceOptions,
  timelineOptions,
} from "@/lib/siteConfig";
import CalendlyInlineEmbed from "@/components/CalendlyInlineEmbed";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ErrorState = Partial<Record<keyof BookingFormData, string>>;

const validateForm = (values: BookingFormData): ErrorState => {
  const errors: ErrorState = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.whatsapp.trim()) errors.whatsapp = "WhatsApp or phone is required.";

  return errors;
};

const BookPage = () => {
  usePageMeta(
    "Book a Strategy Call | DEVIK DIGITAL SOLUTIONS",
    "Tell DEVIK DIGITAL SOLUTIONS about your project, budget, and timeline to start a focused strategy call."
  );

  const navigate = useNavigate();
  const [form, setForm] = useState<BookingFormData>(initialBookingForm);
  const [errors, setErrors] = useState<ErrorState>({});

  const handleChange =
    (field: keyof BookingFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value;
      setForm((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSelectChange = (field: keyof BookingFormData) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const contactOptions = useMemo(
    () => ({
      whatsapp: buildLeadWhatsAppHref(form),
      gmail: buildGmailComposeHref(form),
    }),
    [form]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    localStorage.setItem(latestLeadStorageKey, JSON.stringify(form));
    toast({
      title: "Project brief ready",
      description: "Choose the fastest contact channel on the next step.",
    });

    navigate("/thank-you", { state: form });
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-6 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-[radial-gradient(circle_at_top_left,_rgba(21,77,127,0.18),_transparent_42%),linear-gradient(145deg,#0f2440_0%,#17345e_52%,#0f2440_100%)] px-6 py-10 text-white shadow-[0_40px_120px_-48px_rgba(7,19,38,0.95)] sm:px-8 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(58,166,255,0.22),transparent_32%),radial-gradient(circle_at_20%_100%,rgba(56,189,248,0.18),transparent_34%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-white/80 transition hover:text-white"
              >
                Back to site
              </Link>
              <p className="mt-6 text-xs font-heading font-semibold uppercase tracking-[0.28em] text-sky-300/90">
                Book Your Free 30-Minute Strategy Call
              </p>
              <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Tell us about the product you want to build.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Share the basics of your project and we&apos;ll help you scope the right build, stack, and next steps.
                No pressure, no generic pitch, just practical guidance.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: CheckCircle2, label: "Private project discussion" },
                  { icon: Clock3, label: "Fast reply window" },
                  { icon: Globe2, label: "Clients worldwide" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                    <item.icon className="h-5 w-5 text-sky-300 mb-3" />
                    <p className="text-sm font-medium text-white/90">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.22em] text-white/60 mb-3">
                  Prefer direct contact?
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contactOptions.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-heading font-semibold text-white transition hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href={contactOptions.gmail}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-heading font-semibold text-white transition hover:bg-white/14"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  {siteConfig.socialLinks.calendly && (
                    <a
                      href={siteConfig.socialLinks.calendly}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2.5 text-sm font-heading font-semibold text-sky-100 transition hover:bg-sky-400/15"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Calendly
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_32px_64px_-40px_rgba(0,0,0,0.9)] backdrop-blur-lg sm:p-7">
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    placeholder="Your full name"
                    error={errors.fullName}
                  />
                  <Field
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@company.com"
                    error={errors.email}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="WhatsApp / Phone"
                    value={form.whatsapp}
                    onChange={handleChange("whatsapp")}
                    placeholder="+44..., +1..., +92..."
                    error={errors.whatsapp}
                  />
                  <Field
                    label="Company / Project Name"
                    value={form.company}
                    onChange={handleChange("company")}
                    placeholder="Optional"
                  />
                </div>

                <OptionGroup
                  label="What do you need built?"
                  value={form.serviceType}
                  onChange={handleChange("serviceType")}
                  options={serviceOptions}
                />

                <div className="grid gap-5 lg:grid-cols-3">
                  <SelectField
                    label="Approximate Budget"
                    value={form.budget}
                    onChange={handleSelectChange("budget")}
                    options={budgetOptions}
                  />
                  <SelectField
                    label="When do you want to start?"
                    value={form.timeline}
                    onChange={handleSelectChange("timeline")}
                    options={timelineOptions}
                  />
                  <SelectField
                    label="How did you find us?"
                    value={form.source}
                    onChange={handleSelectChange("source")}
                    options={sourceOptions}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-heading font-semibold text-white/90">
                    Briefly describe your project or idea
                  </label>
                  <textarea
                    rows={5}
                    value={form.description}
                    onChange={handleChange("description")}
                    placeholder="For example: I want to build a Flutter app for a health startup, with authentication, subscriptions, and an admin dashboard."
                    className="w-full rounded-2xl border border-white/12 bg-[#102441] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/30"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-brand inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-heading font-bold"
                >
                  Review & Send Your Brief
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs text-white/60">
                  We prepare your project brief for the next step and route you to the fastest contact option.
                </p>
              </form>
            </div>
          </div>
        </div>

        {siteConfig.socialLinks.calendly && (
          <CalendlyInlineEmbed url={siteConfig.socialLinks.calendly} className="mt-8" />
        )}
      </div>
    </div>
  );
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  type?: string;
};

const Field = ({ label, value, onChange, placeholder, error, type = "text" }: FieldProps) => (
  <div>
    <label className="mb-2 block text-sm font-heading font-semibold text-white/90">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-2xl border px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-sky-300/30 ${
        error
          ? "border-red-300/70 bg-[#2a1830]"
          : "border-white/12 bg-[#102441] focus:border-sky-300"
      }`}
    />
    {error && <p className="mt-2 text-xs text-red-200">{error}</p>}
  </div>
);

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

const SelectField = ({ label, value, onChange, options }: SelectFieldProps) => (
  <div>
    <label className="mb-2 block text-sm font-heading font-semibold text-white/90">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-auto rounded-2xl border border-white/12 bg-[#102441] px-4 py-3 text-left text-sm text-white ring-offset-transparent focus:ring-2 focus:ring-sky-300/30 focus:ring-offset-0 data-[placeholder]:text-white/35">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="rounded-2xl border border-sky-300/20 bg-[#102441] text-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]"
        position="popper"
      >
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="rounded-xl py-2.5 pl-8 pr-3 text-sm text-white/85 focus:bg-sky-400/15 focus:text-white"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

type OptionGroupProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: string[];
};

const OptionGroup = ({ label, value, onChange, options }: OptionGroupProps) => (
  <div>
    <label className="mb-3 block text-sm font-heading font-semibold text-white/90">{label}</label>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <label
          key={option}
          className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm transition ${
            value === option
              ? "border-sky-300/70 bg-sky-400/15 text-white"
              : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
          }`}
        >
          <input type="radio" name={label} value={option} checked={value === option} onChange={onChange} className="sr-only" />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default BookPage;
