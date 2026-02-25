import DocumentPage from "@/components/DocumentPage";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const testimonials = [
  {
    text: "DEVIK DIGITAL SOLUTIONS is a true master, the project was completed on-time and on-budget. I hope to work with the team again soon.",
    name: "Simon H.",
    role: "Anvildigitaluk (AJAX, Laravel Development)",
  },
  {
    text: "The team delivered the project as discussed, very professional in their work, and also very competent in their skills. I highly recommend them to anyone who needs their work done professionally and to the point. Looking forward to many more engagements in the future.",
    name: "Kenneth N.",
    role: "MCUAonline (Node.js and React Directory Setup)",
  },
  {
    text: "DEVIK DIGITAL SOLUTIONS did an amazing job. The first React dev I hired made a complete mess of the front-end code, and the team was able to organize and fix all of the bugs. Their communication was excellent, and they were very polite and patient. I will be working with them some more as well.",
    name: "Ruben E.",
    role: "Resquivel (Refactor React Code & Fix Bugs)",
  },
  {
    text: "DEVIK DIGITAL SOLUTIONS is the best team you can ever meet. Across multiple projects, they delivered complex web, mobile, and backend work on time and within budget, often faster than expected. They listen to feedback, keep communication clear, and make sure the customer is happy without pressure. The team is professional, extremely fast at troubleshooting, and the overall quality is outstanding.",
    name: "Joseph S.",
    role: "Joseph1492 (Enterprise Platform: Mobile App, Admin Panel & Backend)",
  },
  {
    text: "Highly recommended. The team is very responsible, understands process logic deeply, and consistently delivers accurate, timely, outstanding-quality work. We definitely look forward to continuing to work with them.",
    name: "Rafael T.",
    role: "Mercy9421 (Node.js & Angular Web Portal)",
  },
  {
    text: "DEVIK DIGITAL SOLUTIONS delivered the project as stated; they integrated the API well, and even made suggestions on the best service provider to consider. They don't only develop what is required but also advise the client on the best solution available.",
    name: "Sserubiri U.",
    role: "Uhuru8 (Implementing ISBN API Integration into Book Borrowing App)",
  },
  {
    text: "An exceptional team to collaborate with, extraordinarily easy to work with. They have great patience, and I recommend them with confidence.",
    name: "Iuhasz Z.",
    role: "Iuhaszzoltan (Laravel Project Development)",
  },
];

const TestimonialsPage = () => {
  return (
    <DocumentPage>
      <h2 className="font-heading font-bold text-2xl text-primary mb-1">Client Testimonials</h2>
      <div className="section-divider w-20 mb-8" />

      <div className="space-y-6">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card card-3d rounded-b-lg p-6">
            <p className="text-foreground leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <div className="font-heading font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-12 border-t border-border pt-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-6 md:p-8 glass-panel">
          <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Contact Us
              </p>
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="text-foreground text-sm leading-relaxed mb-6">
                Ready to bring your vision to life? Contact us today to discuss your project requirements and let our expert team deliver a solution that exceeds your expectations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:devikdigitalsolutions@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-heading font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                >
                  Email Us
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+923368158979"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-white/60 px-4 py-2 text-xs font-heading font-semibold text-primary shadow-sm transition hover:bg-white"
                >
                  Call Now
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3 rounded-xl p-4 card-3d">
                <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-primary mb-1">Email</p>
                  <p className="text-sm text-foreground">devikdigitalsolutions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl p-4 card-3d">
                <div className="mt-0.5 rounded-full bg-secondary/10 p-2 text-secondary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-primary mb-1">Phone</p>
                  <p className="text-sm text-foreground">+92 336 8158979</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl p-4 card-3d">
                <div className="mt-0.5 rounded-full bg-accent/10 p-2 text-accent">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-primary mb-1">Location</p>
                  <p className="text-sm text-foreground">Gulistan-e-Johar, Karachi, Pakistan</p>
                </div>
              </div>
              <div className="pt-2 text-right">
                <p className="font-heading font-bold text-primary text-sm">MUHAMMAD SULIMAN</p>
                <p className="text-muted-foreground text-xs italic">CEO</p>
                <p className="text-muted-foreground text-xs italic">DEVIK DIGITAL SOLUTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocumentPage>
  );
};

export default TestimonialsPage;
