import DocumentPage from "@/components/DocumentPage";
import { Globe, Smartphone, Server, Palette, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    items: [
      "HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap",
      "React.js, Next.js, Vue.js, Nuxt.js, Angular.js",
      "Progressive Web Apps (PWA) and responsive UI",
      "Performance optimization and SEO readiness",
      "WordPress, Shopify, WooCommerce",
      "Mobile-first, accessible UI/UX Design",
      "OAuth Integration: Google, Facebook, Apple",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    items: [
      "Flutter & Dart (Cross-platform iOS & Android)",
      "React Native, Swift (iOS), Kotlin (Android)",
      "Firebase Integration: Auth, Firestore, Storage",
      "REST & GraphQL API Integration",
      "Offline mode, local storage, background sync",
      "Push Notifications & Analytics",
      "App Store / Play Store deployment support",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: [
      "Laravel, CodeIgniter, Core PHP, Node.js",
      "RESTful APIs & SOAP Web Services",
      "Microservices and scalable architecture",
      "Real-time systems: WebSockets, MQTT",
      "GPS tracking & fleet platforms (Traccar, Flespi)",
      "AI automation, workflow orchestration, and integrations",
      "OAuth2, JWT, Session-based Auth",
      "MySQL, PostgreSQL, MongoDB",
      "Payment Gateways: Stripe, PayPal, Razorpay",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX & Graphic Design",
    items: [
      "Figma, Adobe XD, Canva",
      "Wireframes, Prototypes, Branding Kits",
      "Design systems and component libraries",
      "Usability testing and UX audits",
      "Visual Storytelling & Logo Design",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: [
      "Docker and containerized deployments",
      "Vercel, Firebase, AWS, Netlify, Heroku",
      "CI/CD Pipelines & Scalable Deployment",
      "Version Control & Optimization",
    ],
  },
];

const ServicesPage = () => {
  return (
    <DocumentPage>
      <h2 className="font-heading font-bold text-2xl text-primary mb-1">Core Services</h2>
      <div className="section-divider w-20 mb-6" />

      <div className="space-y-5">
        {services.map((s) => (
          <div key={s.title} className="service-card card-3d rounded-r-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-base text-primary">{s.title}</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5 ml-12">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocumentPage>
  );
};

export default ServicesPage;
