import { ArrowRight, CalendarDays, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import DocumentPage from "@/components/DocumentPage";
import HeadingUnderline from "@/components/ui/HeadingUnderline";

const testimonials = [
  {
    text: "DEVIK DIGITAL SOLUTIONS is a true master, the project was completed on time and on budget. I hope to work with the team again soon.",
    name: "Simon H.",
    role: "AJAX & Laravel Development",
    country: "🇬🇧",
    avatar: "from-[#1a4a82] to-[#2d8fcf]",
  },
  {
    text: "The team delivered the project as discussed, very professional in their work, and also very competent in their skills. I highly recommend them to anyone who needs their work done professionally and to the point.",
    name: "Kenneth N.",
    role: "Node.js & React Directory",
    country: "🇺🇸",
    avatar: "from-sky-500 to-[#1a4a82]",
  },
  {
    text: "They organized and fixed a messy frontend codebase, improved communication throughout the work, and handled the process with patience and professionalism.",
    name: "Ruben E.",
    role: "React Refactor & Bug Fixing",
    country: "🇪🇺",
    avatar: "from-violet-600 to-[#2d8fcf]",
  },
  {
    text: "Across multiple projects, they delivered complex web, mobile, and backend work on time and within budget while keeping the process clear and customer-focused.",
    name: "Joseph S.",
    role: "Enterprise Platform Delivery",
    country: "🇦🇺",
    avatar: "from-emerald-500 to-[#1a4a82]",
  },
  {
    text: "Highly recommended. The team is very responsible, understands process logic deeply, and consistently delivers accurate, timely, outstanding-quality work.",
    name: "Rafael T.",
    role: "Node.js & Angular Portal",
    country: "🇨🇦",
    avatar: "from-amber-500 to-orange-500",
  },
  {
    text: "They do not only develop what is required but also advise the client on the best solution available, which makes them a valuable technical partner.",
    name: "Sserubiri U.",
    role: "API Integration Project",
    country: "🇿🇦",
    avatar: "from-pink-500 to-rose-500",
  },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials.slice(2), ...testimonials.slice(0, 2), ...testimonials.slice(2), ...testimonials.slice(0, 2)];

type T = typeof testimonials[0];

const TestimonialCard = ({ t }: { t: T }) => (
  <article className="testimonial-card-item group inline-flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_rgba(26,74,130,0.18)] hover:border-[#1a4a82]/30 sm:w-[370px]">
    {/* Colored top accent bar */}
    <div className={`h-[3px] w-full bg-gradient-to-r ${t.avatar}`} />

    <div className="flex flex-1 flex-col p-5">
      {/* Stars + quote icon row */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {[0,1,2,3,4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="h-7 w-7 text-slate-100 rotate-180" />
      </div>

      {/* Quote */}
      <p className="mb-5 flex-1 text-[13.5px] italic leading-relaxed text-slate-600">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatar} text-sm font-extrabold text-white shadow-sm`}>
          {t.name[0]}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="font-heading text-[13px] font-bold text-[#0a1f3d]">{t.name}</p>
            <span className="text-sm">{t.country}</span>
          </div>
          <p className="truncate text-[11px] text-slate-400">{t.role}</p>
        </div>
      </div>
    </div>
  </article>
);

const TestimonialsPage = () => (
  <div id="testimonials" className="section-target">
    <DocumentPage className="bg-white pb-0">

      {/* ── Section header ── */}
      <div className="mb-12 text-center" data-reveal="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1a4a82]/20 bg-[#1a4a82]/5 px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-[0.22em] text-[#1a4a82]">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          Client Testimonials
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold text-[#0a1f3d] sm:text-4xl">
          What Clients Say
        </h2>
        <div className="flex justify-center">
          <HeadingUnderline className="mb-3 w-36" />
        </div>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-500">
          Real feedback from founders, agencies, and product teams across 15+ countries.
          Every review was left on a live project.
        </p>

        {/* Rating pill */}
        <div className="mt-6 inline-flex items-center gap-4 rounded-full border border-amber-200 bg-amber-50 px-6 py-2.5">
          <div className="flex items-center gap-1">
            {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
          </div>
          <div className="h-4 w-px bg-amber-200" />
          <span className="font-heading text-sm font-extrabold text-amber-700">5.0 Average</span>
          <div className="h-4 w-px bg-amber-200" />
          <span className="text-xs text-amber-600">100+ Happy Clients</span>
        </div>
      </div>

      {/* ── Featured hero testimonial ── */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-[#1a4a82]/15 shadow-sm" data-reveal="reveal-fade">
        <div className="grid lg:grid-cols-[1fr_2fr]">
          {/* Left accent panel */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#071629] to-[#1a4a82] p-8 lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div>
              <div className="mb-4 flex gap-1">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="font-serif text-6xl font-bold leading-none text-white/10">"</p>
              <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                Featured Review
              </p>
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1a4a82] to-[#2d8fcf] text-lg font-extrabold text-white shadow-md">
                J
              </div>
              <p className="mt-3 font-heading text-base font-extrabold text-white">Joseph S.</p>
              <p className="text-xs text-white/50">Enterprise Platform Delivery</p>
              <span className="mt-1 block text-sm">🇦🇺</span>
            </div>
          </div>

          {/* Right quote */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-[#f8faff] to-white p-8 sm:p-10">
            <Quote className="mb-4 h-10 w-10 text-[#1a4a82]/15" />
            <blockquote className="font-heading text-xl font-semibold leading-[1.65] text-[#0a1f3d] sm:text-2xl">
              &ldquo;Across multiple projects, they delivered complex web, mobile, and backend work on time and within budget while keeping the process clear and customer-focused.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-[#1a4a82] text-sm font-extrabold text-white">J</div>
              <div>
                <p className="font-heading text-sm font-bold text-[#0a1f3d]">Joseph S. 🇦🇺</p>
                <p className="text-xs text-slate-400">Enterprise Platform Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </DocumentPage>

    {/* ── Mobile: swipeable card list ── */}
    <div className="lg:hidden w-full bg-white py-4 px-4">
      <div className="testimonial-swipe-track flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
        {testimonials.map((t, i) => (
          <div key={`mob-${i}`} className="snap-start shrink-0 w-[300px] first:pl-0 last:pr-4">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
        {testimonials.map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#1a4a82]/20" />
        ))}
      </div>
    </div>

    {/* ── Desktop: animated marquee rows — edge-to-edge on white ── */}
    <div className="hidden lg:block w-full overflow-hidden bg-white py-4">

      {/* Row 1 */}
      <div className="testimonial-marquee mb-4">
        <div className="testimonial-fade-mask overflow-hidden">
          <div className="testimonial-track flex gap-4 px-4 py-2">
            {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
          </div>
        </div>
      </div>

      {/* Row 2 reverse */}
      <div className="testimonial-marquee">
        <div className="testimonial-fade-mask overflow-hidden">
          <div className="testimonial-track-reverse flex gap-4 px-4 py-2">
            {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
          </div>
        </div>
      </div>
    </div>

    {/* ── CTA strip ── */}
    <div className="w-full bg-white pb-16 pt-10">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-5 px-6 text-center sm:px-10 lg:px-16">
        <p className="text-sm text-slate-400">
          Join <span className="font-semibold text-[#0a1f3d]">100+ clients</span> who've shipped with us
        </p>
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1a4a82] via-sky-500 to-[#2d8fcf] px-8 py-3.5 text-sm font-heading font-bold text-white shadow-[0_8px_28px_-8px_rgba(45,143,207,0.55)] transition hover:brightness-110 hover:-translate-y-0.5"
        >
          <CalendarDays className="h-4 w-4" />
          Book a Free Strategy Call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

  </div>
);

export default TestimonialsPage;
