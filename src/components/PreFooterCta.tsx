import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Rss, Send, Star } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const perks = [
  "Monthly product & tech insights",
  "Case studies from real builds",
  "No spam — unsubscribe anytime",
];

const PreFooterCta = () => {
  const [email, setEmail] = useState("");
  const [done, setDone]   = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const subject = `Newsletter Subscription — ${email}`;
    const body    = `Hi ${siteConfig.companyName},\n\nPlease add me to your newsletter.\n\nEmail: ${email}\n\nThanks!`;
    window.open(`mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setDone(true);
  };

  return (
    <section className="border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">

        {/* Pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-sky-600">
          <Rss className="h-3.5 w-3.5" />
          Stay Updated
        </span>

        {/* Heading */}
        <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-[#0a1f3d] sm:text-4xl">
          Get monthly insights on{" "}
          <span className="bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] bg-clip-text text-transparent">
            building digital products.
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
          Product development decisions, tech deep-dives, and case studies from real builds — from our team to your inbox.
        </p>

        {/* Perks */}
        <ul className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-slate-500">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200">
                <Star className="h-2.5 w-2.5 fill-emerald-500 text-emerald-500" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Form */}
        <div className="mt-8 flex justify-center">
          {done ? (
            <div className="inline-flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <p className="text-sm font-heading font-semibold text-emerald-700">
                Thanks! Your email client should open — just hit send.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); setError(""); }}
                    placeholder="your@email.com"
                    className={`w-full rounded-xl border py-3 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300/50 transition-all ${
                      error
                        ? "border-red-300 bg-red-50"
                        : "border-slate-200 bg-white focus:border-sky-300"
                    }`}
                  />
                </div>
                {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn-brand-animated inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-heading font-bold text-white shadow-[0_4px_16px_-4px_rgba(26,74,130,0.4)] transition hover:-translate-y-0.5"
              >
                <Send className="h-3.5 w-3.5" />
                Subscribe
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default PreFooterCta;
