import AnimatedCounter from "@/components/AnimatedCounter";

const stats = [
  { value: 7,   suffix: "+", label: "Years Delivering",  sub: "Consistent quality since 2017", icon: "⚡" },
  { value: 500, suffix: "+", label: "Projects Shipped",   sub: "Web, mobile & AI systems",       icon: "🚀" },
  { value: 100, suffix: "+", label: "Happy Clients",      sub: "Startups to enterprise",         icon: "🤝" },
  { value: 15,  suffix: "+", label: "Countries Served",   sub: "UK, USA, UAE & beyond",          icon: "🌍" },
];

const StatsBar = () => (
  <div className="no-print w-full bg-white">
    {/* top brand accent */}
    <div className="h-[4px] w-full bg-gradient-to-r from-[#0a1f3d] via-[#1a4a82] to-[#2d8fcf]" />

    <div className="mx-auto max-w-screen-xl px-6 py-14 sm:px-10 lg:px-16">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            data-reveal="reveal-blur"
            className={`stagger-${index + 1} group relative overflow-hidden rounded-2xl border-2 border-[#1a4a82]/20 bg-white p-6 text-center shadow-[0_4px_24px_-8px_rgba(26,74,130,0.12)] transition-all duration-300 hover:border-[#1a4a82]/50 hover:shadow-[0_8px_32px_-8px_rgba(26,74,130,0.25)] hover:-translate-y-1`}
          >
            {/* top colour strip per card */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#1a4a82] to-[#2d8fcf] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-3 text-2xl">{stat.icon}</div>

            <AnimatedCounter
              end={stat.value}
              suffix={stat.suffix}
              className="font-heading text-4xl font-extrabold text-[#0a1f3d] sm:text-5xl"
            />
            <p className="mt-2 font-heading text-sm font-bold text-[#1a4a82]">
              {stat.label}
            </p>
            <p className="mt-1 text-xs text-slate-500">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StatsBar;
