export type BookingFormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  company: string;
  serviceType: string;
  budget: string;
  timeline: string;
  source: string;
  description: string;
};

export const siteConfig = {
  companyName: "DEVIK DIGITAL SOLUTIONS",
  founderName: "Khalil Ur Rehman",
  founderRole: "CEO",
  tagline: "Your vision, our code",
  email: "devikdigitalsolutions@gmail.com",
  phoneDisplay: "+92 341 5202903",
  phoneHref: "tel:+923415202903",
  whatsappNumber: "923415202903",
  location: "Gulistan-e-Johar, Karachi, Pakistan",
  siteUrl: "https://devikdigitalsolutions.vercel.app/",
  responsePromise: "Response within 24 hours",
  workingRegions: ["UK", "EU", "USA", "UAE", "Canada", "Australia"],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/khalil-ur-rehman-487a04139/",
    github: "https://github.com/khalilurrehma",
    behance: "https://www.behance.net/khalilurrehman16",
    calendly: "https://calendly.com/deviktech0/30min",
  },
  featuredArticleSlug: "/insights/multi-tenant-saas-architecture",
  defaultWhatsAppMessage:
    "Hi DEVIK DIGITAL SOLUTIONS team, I found your website and I'd like to discuss a project.",
};

export const serviceOptions = [
  "Web Application",
  "Mobile App (Flutter)",
  "AI / ML Feature",
  "E-Commerce Store",
  "Full Product Build",
  "Not sure yet",
];

export const budgetOptions = [
  "Under $1,500",
  "$1,500-$5,000",
  "$5,000-$15,000",
  "$15,000+",
  "Let's discuss",
];

export const timelineOptions = [
  "Immediately",
  "Within 1 month",
  "1-3 months",
  "Just exploring",
];

export const sourceOptions = ["LinkedIn", "Google", "Referral", "Upwork", "Other"];

export const initialBookingForm: BookingFormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  company: "",
  serviceType: "Web Application",
  budget: "$1,500-$5,000",
  timeline: "Within 1 month",
  source: "Google",
  description: "",
};

export const buildWhatsAppHref = (message = siteConfig.defaultWhatsAppMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildLeadSummary = (data: BookingFormData) =>
  [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `WhatsApp / Phone: ${data.whatsapp}`,
    `Company / Project: ${data.company || "Not provided"}`,
    `Service Type: ${data.serviceType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    `How they found us: ${data.source}`,
    "",
    "Project brief:",
    data.description || "No extra details provided.",
  ].join("\n");

export const buildLeadEmailHref = (data: BookingFormData) => {
  const subject = `Project Inquiry from ${data.fullName} | ${siteConfig.companyName}`;
  const body = `Hello ${siteConfig.companyName} team,\n\nI would like to discuss a project.\n\n${buildLeadSummary(data)}\n\nRegards,\n${data.fullName}`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const buildGmailComposeHref = (data: BookingFormData) => {
  const subject = `Project Inquiry from ${data.fullName} | ${siteConfig.companyName}`;
  const body = `Hello ${siteConfig.companyName} team,\n\nI would like to discuss a project.\n\n${buildLeadSummary(data)}\n\nRegards,\n${data.fullName}`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const buildLeadWhatsAppHref = (data: BookingFormData) =>
  buildWhatsAppHref(
    [
      `Hi ${siteConfig.companyName} team, I found your website and I'd like to discuss a project.`,
      "",
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `WhatsApp / Phone: ${data.whatsapp}`,
      `Company / Project: ${data.company || "Not provided"}`,
      `Need built: ${data.serviceType}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      `Found you via: ${data.source}`,
      "",
      `Brief: ${data.description || "I will share details on the call."}`,
    ].join("\n")
  );

export const latestLeadStorageKey = "devik-latest-lead";
