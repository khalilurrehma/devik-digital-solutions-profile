import DocumentPage from "@/components/DocumentPage";

const processSteps = [
  { title: "Discover", desc: "Requirements, scope, and success metrics." },
  { title: "Design", desc: "Wireframes, UI systems, and user flows." },
  { title: "Build", desc: "Agile sprints with clean, scalable code." },
  { title: "Test", desc: "QA, performance, and security checks." },
  { title: "Launch", desc: "Deployment, stores, and monitoring." },
  { title: "Support", desc: "Ongoing improvements and maintenance." },
];

const industries = [
  {
    group: "Tech & Software",
    items: [
      {
        name: "SaaS",
        desc: "Scalable platforms with secure access, billing, and analytics.",
      },
      {
        name: "AI Automation",
        desc: "Smart workflows, data processing, and operational efficiency.",
      },
      {
        name: "Fintech",
        desc: "Secure, compliant financial products with great UX.",
      },
      {
        name: "Healthcare",
        desc: "Reliable systems designed for privacy and data protection.",
      },
      {
        name: "IoT & Tracking",
        desc: "Real-time device data, monitoring, and location insights.",
      },
    ],
  },
  {
    group: "Business & Services",
    items: [
      {
        name: "E-commerce",
        desc: "High-performance stores with seamless checkout and growth tools.",
      },
      {
        name: "Food & Retail",
        desc: "POS, inventory, delivery, and loyalty experiences.",
      },
      {
        name: "Logistics",
        desc: "Tracking, automation, and optimization for operations.",
      },
      {
        name: "Real Estate",
        desc: "Property platforms with smart search and lead management.",
      },
      {
        name: "Professional Services",
        desc: "Portals, scheduling, and client management tools.",
      },
      {
        name: "Travel",
        desc: "Booking flows, integrations, and rich user experiences.",
      },
      {
        name: "Manufacturing",
        desc: "ERP extensions, dashboards, and workflow automation.",
      },
    ],
  },
  {
    group: "Education & Training",
    items: [
      {
        name: "Education",
        desc: "Learning platforms, portals, and content delivery.",
      },
      {
        name: "EdTech",
        desc: "Interactive learning experiences with progress tracking.",
      },
      {
        name: "Corporate Training",
        desc: "Internal academies and compliance learning systems.",
      },
      {
        name: "Coaching & LMS",
        desc: "Course delivery, assessments, and certifications.",
      },
      {
        name: "Certification Bodies",
        desc: "Exam flows, proctoring, and credential management.",
      },
      {
        name: "Workforce Enablement",
        desc: "Onboarding, skills tracking, and performance insights.",
      },
    ],
  },
];

const highlights = [
  {
    title: "Web Platforms",
    points: ["Responsive, accessible UI", "Admin dashboards and analytics", "SEO and performance tuning"],
  },
  {
    title: "Mobile Apps",
    points: ["iOS and Android builds", "Offline mode and sync", "Push notifications and in-app flows"],
  },
  {
    title: "Integrations",
    points: [
      "Payments and subscriptions",
      "3rd-party APIs",
      "AI automation and workflow tooling",
      "Custom automation pipelines",
    ],
  },
];

const engagementModels = [
  { title: "Fixed Price", desc: "Clear scope, timeline, and milestones." },
  { title: "Dedicated Team", desc: "Full-time engineers for your product." },
  { title: "Hourly / Retainer", desc: "Flexible support and enhancements." },
];

const CapabilitiesPage = () => {
  return (
    <DocumentPage>
      <h2 className="font-heading font-bold text-2xl text-primary mb-1">Capabilities & Approach</h2>
      <div className="section-divider w-24 mb-6" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-3d rounded-2xl p-5">
          <h3 className="font-heading font-bold text-base text-primary mb-4">Delivery Process</h3>
          <div className="mb-4 rounded-xl border border-primary/10 bg-primary/5 px-3 py-2">
            <div className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary/80">
              Agile Method
            </div>
            <p className="text-xs text-muted-foreground">
              We work in short sprints with clear milestones, weekly updates, and continuous feedback.
            </p>
          </div>
          <div className="grid gap-3">
            {processSteps.map((step, idx) => (
              <div key={step.title} className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-heading font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-heading font-semibold text-foreground text-sm">{step.title}</div>
                  <div className="text-muted-foreground text-xs">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-3d rounded-2xl p-5">
          <h3 className="font-heading font-bold text-base text-primary mb-4">Quality, Security & Support</h3>
          <ul className="space-y-2 text-sm text-foreground">
            {[
              "Code reviews and clean architecture",
              "Automated testing and QA coverage",
              "Performance optimization and monitoring",
              "Security best practices and data protection",
              "Post-launch maintenance and support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-heading font-bold text-base text-primary mb-3">Web & Mobile Highlights</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="card-3d rounded-2xl p-4">
              <div className="font-heading font-semibold text-primary text-sm mb-2">{item.title}</div>
              <ul className="space-y-1.5 text-sm text-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-heading font-bold text-base text-primary mb-3">Industries Served</h3>
        <p className="text-sm text-muted-foreground mb-6">
          We provide tailored digital solutions to a wide range of industries, helping businesses innovate and grow with
          clear, measurable results.
        </p>
        <div className="grid gap-4 md:grid-cols-3 items-start">
          {industries.map((group) => (
            <div key={group.group} className="card-3d rounded-2xl p-4 self-start">
              <div className="font-heading font-semibold text-primary text-sm mb-3">{group.group}</div>
              <div className="grid gap-3">
                {group.items.map((item) => (
                  <div key={item.name} className="rounded-xl border border-border/70 bg-white/70 p-3">
                    <div className="font-heading font-semibold text-foreground text-xs">{item.name}</div>
                    <div className="text-muted-foreground text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-heading font-bold text-base text-primary mb-3">Engagement Models</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {engagementModels.map((model) => (
            <div key={model.title} className="card-3d rounded-2xl p-4">
              <div className="font-heading font-semibold text-primary text-sm mb-1">{model.title}</div>
              <div className="text-muted-foreground text-xs">{model.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </DocumentPage>
  );
};

export default CapabilitiesPage;
