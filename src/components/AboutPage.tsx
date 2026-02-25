import DocumentPage from "@/components/DocumentPage";

const AboutPage = () => {
  return (
    <DocumentPage>
      <h2 className="font-heading font-bold text-2xl text-primary mb-1">About Us</h2>
      <div className="section-divider w-20 mb-6" />

      <p className="text-foreground leading-relaxed mb-6">
        <strong className="text-primary">DEVIK DIGITAL SOLUTIONS</strong> is a premier software development company providing innovative, secure, and scalable digital solutions. We specialize in creating high-quality, performance-driven web and mobile applications tailored to meet the unique needs of our clients. Our mission is to transform your ideas into seamless digital experiences that deliver real-world business impact.
      </p>

      <h3 className="font-heading font-bold text-lg text-primary mb-3 mt-8">Why Choose Us?</h3>
      <div className="section-divider w-16 mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "Experience",
            desc: "7+ years of hands-on experience delivering digital solutions across diverse industries.",
          },
          {
            title: "Quality Code",
            desc: "We build clean, scalable, and future-ready code that stands the test of time.",
          },
          {
            title: "Agile Communication",
            desc: "Transparent, agile communication ensuring every project is delivered on time.",
          },
          {
            title: "Comprehensive Support",
            desc: "From ideation to deployment, we offer full support for your digital projects.",
          },
        ].map((item) => (
          <div key={item.title} className="service-card card-3d rounded-r-lg p-4">
            <h4 className="font-heading font-bold text-sm text-primary mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
        {[
          { num: "7+", label: "Years" },
          { num: "500+", label: "Projects" },
          { num: "100+", label: "Clients" },
          { num: "10+", label: "Team" },
        ].map((s) => (
          <div
            key={s.label}
            className="stat-card stat-3d card-3d rounded-xl py-5 px-4 transition-transform duration-200"
          >
            <div className="relative z-10 font-heading font-extrabold text-2xl text-primary">{s.num}</div>
            <div className="relative z-10 text-muted-foreground text-xs font-heading font-medium mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </DocumentPage>
  );
};

export default AboutPage;
