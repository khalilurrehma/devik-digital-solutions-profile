import pptxgen from "pptxgenjs";
import logoUrl from "@/assets/logo.jpg";

// Convert image import to base64 for pptxgenjs
async function getBase64FromUrl(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

// Brand colors
const NAVY = "1a3348";
const BLUE = "4a7fa0";
const STEEL = "5a90b0";
const LIGHT_BLUE = "6a9fbf";
const SKY = "7aaec8";
const WHITE = "FFFFFF";
const LIGHT_BG = "F0F4F8";

function addHeaderStripes(slide: pptxgen.Slide) {
  // Right: Large dark navy
  slide.addShape("rect", { x: 5.0, y: 0, w: 5.0, h: 0.6, fill: { color: NAVY } });
  // Right: Medium blue band
  slide.addShape("rect", { x: 5.5, y: 0.6, w: 4.5, h: 0.18, fill: { color: BLUE } });
  // Right: Thin navy accent
  slide.addShape("rect", { x: 6.2, y: 0.8, w: 3.8, h: 0.08, fill: { color: NAVY } });
  // Center: Steel blue band
  slide.addShape("rect", { x: 1.5, y: 0.3, w: 3.8, h: 0.2, fill: { color: STEEL } });
  // Center-left: Light steel blue
  slide.addShape("rect", { x: 1.2, y: 0.45, w: 3.8, h: 0.18, fill: { color: LIGHT_BLUE } });
  // Left: Dark navy block
  slide.addShape("rect", { x: 0, y: 0, w: 1.1, h: 0.85, fill: { color: NAVY } });
  // Bottom thin lines
  slide.addShape("rect", { x: 0, y: 0.9, w: 5.5, h: 0.03, fill: { color: NAVY } });
  slide.addShape("rect", { x: 0, y: 0.96, w: 5.0, h: 0.03, fill: { color: SKY } });
}

function addFooterStripes(slide: pptxgen.Slide) {
  const y = 7.1;
  // Thin horizontal lines
  slide.addShape("rect", { x: 0, y: y, w: 7.2, h: 0.03, fill: { color: SKY } });
  slide.addShape("rect", { x: 0, y: y + 0.08, w: 7.0, h: 0.04, fill: { color: STEEL } });
  slide.addShape("rect", { x: 0, y: y + 0.16, w: 6.8, h: 0.03, fill: { color: LIGHT_BLUE } });
  // Right angular accent
  slide.addShape("rect", { x: 7.8, y: y, w: 2.2, h: 0.32, fill: { color: NAVY } });
  slide.addShape("rect", { x: 7.9, y: y + 0.32, w: 2.1, h: 0.08, fill: { color: BLUE } });
  // Full-width dark bottom bar
  slide.addShape("rect", { x: 0, y: y + 0.42, w: 10, h: 0.05, fill: { color: NAVY } });
}

function addFooterContact(slide: pptxgen.Slide) {
  slide.addText(
    [
      { text: "Phone: +92 336 8158979", options: { fontSize: 8, color: "666666" } },
      { text: "     Email: devikdigitalsolutions@gmail.com", options: { fontSize: 8, color: "666666" } },
      { text: "     Location: Gulistan-e-Johar, Karachi, Pakistan", options: { fontSize: 8, color: "666666" } },
    ],
    { x: 0.5, y: 6.8, w: 9, h: 0.25 }
  );
}

export async function exportToPptx() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "DEVIK DIGITAL SOLUTIONS";
  pres.title = "DEVIK DIGITAL SOLUTIONS - Company Profile";

  const logoBase64 = await getBase64FromUrl(logoUrl);

  // ============== SLIDE 1: COVER ==============
  const slide1 = pres.addSlide();
  addHeaderStripes(slide1);
  addFooterStripes(slide1);

  // Logo
  slide1.addImage({ data: logoBase64, x: 3.9, y: 1.5, w: 1.8, h: 1.8 });

  // Title
  slide1.addText("DEVIK DIGITAL", {
    x: 1, y: 3.5, w: 8, h: 0.7,
    fontSize: 36, fontFace: "Arial", bold: true, color: NAVY,
    align: "center",
  });
  slide1.addText("SOLUTIONS", {
    x: 1, y: 4.1, w: 8, h: 0.5,
    fontSize: 20, fontFace: "Arial", bold: true, color: BLUE,
    align: "center", charSpacing: 8,
  });

  // Tagline
  slide1.addText("Your Vision, Our Code", {
    x: 1, y: 4.7, w: 8, h: 0.4,
    fontSize: 12, fontFace: "Arial", italic: true, color: "888888",
    align: "center",
  });

  // Subtitle box
  slide1.addShape("roundRect", {
    x: 3.2, y: 5.2, w: 3.2, h: 0.8,
    fill: { color: LIGHT_BG }, line: { color: SKY, width: 1 }, rectRadius: 0.05,
  });
  slide1.addText([
    { text: "Company Profile\n", options: { fontSize: 13, bold: true, color: NAVY } },
    { text: "Innovative, Secure & Scalable Digital Solutions", options: { fontSize: 9, color: "666666" } },
  ], { x: 3.3, y: 5.25, w: 3.0, h: 0.7, align: "center" });

  // CEO info
  slide1.addText([
    { text: "MUHAMMAD SULIMAN - CEO\n", options: { fontSize: 10, bold: true, color: NAVY } },
    { text: "Gulistan-e-Johar, Karachi, Pakistan\n", options: { fontSize: 8, color: "888888" } },
    { text: "devikdigitalsolutions@gmail.com  |  +92 336 8158979", options: { fontSize: 8, color: "888888" } },
  ], { x: 1, y: 6.2, w: 8, h: 0.6, align: "center" });

  // ============== SLIDE 2: ABOUT US ==============
  const slide2 = pres.addSlide();
  addHeaderStripes(slide2);
  addFooterStripes(slide2);
  addFooterContact(slide2);

  // Logo small
  slide2.addImage({ data: logoBase64, x: 0.5, y: 1.0, w: 0.7, h: 0.7 });
  slide2.addText("Your Vision, Our Code", {
    x: 1.3, y: 1.15, w: 3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: "888888", charSpacing: 3,
  });

  slide2.addText("About Us", {
    x: 0.5, y: 1.9, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: NAVY, fontFace: "Arial",
  });

  slide2.addText(
    "DEVIK DIGITAL SOLUTIONS is a premier software development company providing innovative, secure, and scalable digital solutions. We specialize in creating high-quality, performance-driven web and mobile applications tailored to meet the unique needs of our clients. Our mission is to transform your ideas into seamless digital experiences that deliver real-world business impact.",
    { x: 0.5, y: 2.5, w: 9, h: 0.9, fontSize: 11, color: "333333", fontFace: "Arial" }
  );

  slide2.addText("Why Choose Us?", {
    x: 0.5, y: 3.5, w: 9, h: 0.4,
    fontSize: 18, bold: true, color: NAVY, fontFace: "Arial",
  });

  const whyItems = [
    { title: "Experience", desc: "7+ years of hands-on experience delivering digital solutions across diverse industries." },
    { title: "Quality Code", desc: "We build clean, scalable, and future-ready code that stands the test of time." },
    { title: "Agile Communication", desc: "Transparent, agile communication ensuring every project is delivered on time." },
    { title: "Comprehensive Support", desc: "From ideation to deployment, we offer full support for your digital projects." },
  ];

  whyItems.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 0.5 + col * 4.6;
    const yPos = 4.0 + row * 0.85;

    slide2.addShape("roundRect", {
      x: xPos, y: yPos, w: 4.3, h: 0.7,
      fill: { color: LIGHT_BG }, rectRadius: 0.05,
    });
    slide2.addText([
      { text: `${item.title}\n`, options: { fontSize: 11, bold: true, color: NAVY } },
      { text: item.desc, options: { fontSize: 9, color: "555555" } },
    ], { x: xPos + 0.15, y: yPos + 0.05, w: 4.0, h: 0.6 });
  });

  // Stats
  const stats = [
    { num: "7+", label: "Years" },
    { num: "500+", label: "Projects" },
    { num: "100+", label: "Clients" },
    { num: "10+", label: "Team" },
  ];

  stats.forEach((s, i) => {
    const xPos = 0.8 + i * 2.25;
    slide2.addShape("roundRect", {
      x: xPos, y: 5.9, w: 1.8, h: 0.75,
      fill: { color: LIGHT_BG }, line: { color: SKY, width: 0.5 }, rectRadius: 0.05,
    });
    slide2.addText([
      { text: `${s.num}\n`, options: { fontSize: 22, bold: true, color: NAVY } },
      { text: s.label, options: { fontSize: 9, color: "888888" } },
    ], { x: xPos, y: 5.95, w: 1.8, h: 0.65, align: "center" });
  });

  // ============== SLIDE 3: SERVICES ==============
  const slide3 = pres.addSlide();
  addHeaderStripes(slide3);
  addFooterStripes(slide3);
  addFooterContact(slide3);

  slide3.addImage({ data: logoBase64, x: 0.5, y: 1.0, w: 0.7, h: 0.7 });
  slide3.addText("Your Vision, Our Code", {
    x: 1.3, y: 1.15, w: 3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: "888888", charSpacing: 3,
  });

  slide3.addText("Core Services", {
    x: 0.5, y: 1.9, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: NAVY, fontFace: "Arial",
  });

  const services = [
    { title: "🌐 Web Development", items: "HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap • React.js, Next.js, Vue.js, Angular • WordPress, Shopify, WooCommerce • Mobile-first UI/UX • OAuth Integration" },
    { title: "📱 Mobile App Development", items: "Flutter & Dart (Cross-platform) • Firebase Integration • REST & GraphQL APIs • Push Notifications & Analytics" },
    { title: "⚙️ Backend Development", items: "Laravel, CodeIgniter, Node.js • RESTful APIs & SOAP • OAuth2, JWT Auth • MySQL, PostgreSQL, MongoDB • Stripe, PayPal, Razorpay" },
    { title: "🎨 UI/UX & Graphic Design", items: "Figma, Adobe XD, Canva • Wireframes & Prototypes • Visual Storytelling & Logo Design" },
    { title: "☁️ Cloud & DevOps", items: "Vercel, Firebase, AWS, Netlify • CI/CD Pipelines • Version Control & Optimization" },
  ];

  services.forEach((s, i) => {
    const yPos = 2.5 + i * 0.88;
    slide3.addShape("roundRect", {
      x: 0.5, y: yPos, w: 9, h: 0.78,
      fill: { color: LIGHT_BG }, rectRadius: 0.05,
    });
    slide3.addText([
      { text: `${s.title}\n`, options: { fontSize: 12, bold: true, color: NAVY } },
      { text: s.items, options: { fontSize: 9, color: "555555" } },
    ], { x: 0.7, y: yPos + 0.05, w: 8.6, h: 0.68 });
  });

  // ============== SLIDE 4: TESTIMONIALS ==============
  const slide4 = pres.addSlide();
  addHeaderStripes(slide4);
  addFooterStripes(slide4);
  addFooterContact(slide4);

  slide4.addImage({ data: logoBase64, x: 0.5, y: 1.0, w: 0.7, h: 0.7 });
  slide4.addText("Your Vision, Our Code", {
    x: 1.3, y: 1.15, w: 3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: "888888", charSpacing: 3,
  });

  slide4.addText("Client Testimonials", {
    x: 0.5, y: 1.9, w: 9, h: 0.5,
    fontSize: 24, bold: true, color: NAVY, fontFace: "Arial",
  });

  slide4.addText("5.0 | 66 Reviews", {
    x: 0.5, y: 2.45, w: 9, h: 0.2,
    fontSize: 10, color: "666666", fontFace: "Arial",
  });

  const testimonials = [
    {
      text: "DEVIK DIGITAL SOLUTIONS is a true master, the project was completed on-time and on-budget. I hope to work with the team again soon.",
      name: "Simon H.",
      role: "Anvildigitaluk",
    },
    {
      text: "The team delivered the project as discussed, very professional in their work, and also very competent in their skills. I highly recommend them to anyone who needs their work done professionally and to the point.",
      name: "Kenneth N.",
      role: "MCUAonline",
    },
    {
      text: "DEVIK DIGITAL SOLUTIONS did an amazing job. The first React dev I hired made a complete mess of the front-end code, and the team was able to organize and fix all of the bugs.",
      name: "Ruben E.",
      role: "Resquivel",
    },
  ];

  testimonials.forEach((t, i) => {
    const yPos = 2.65 + i * 1.15;
    slide4.addShape("roundRect", {
      x: 0.5, y: yPos, w: 9, h: 1.0,
      fill: { color: LIGHT_BG }, rectRadius: 0.05,
    });
    slide4.addText([
      { text: `"${t.text}"\n\n`, options: { fontSize: 9, italic: true, color: "444444" } },
      { text: `${t.name}`, options: { fontSize: 9, bold: true, color: NAVY } },
      { text: ` - ${t.role}`, options: { fontSize: 8, color: "888888" } },
    ], { x: 0.7, y: yPos + 0.08, w: 8.6, h: 0.85 });
  });

  // Closing section
  slide4.addText("Let's Build Something Great Together", {
    x: 0.5, y: 6.0, w: 9, h: 0.35,
    fontSize: 14, bold: true, color: NAVY, fontFace: "Arial",
  });
  slide4.addText([
    { text: "MUHAMMAD SULIMAN", options: { fontSize: 10, bold: true, color: NAVY } },
    { text: " - CEO, DEVIK DIGITAL SOLUTIONS", options: { fontSize: 9, color: "888888" } },
  ], { x: 0.5, y: 6.35, w: 9, h: 0.3 });

  // Save
  await pres.writeFile({ fileName: "DEVIK_DIGITAL_SOLUTIONS_PROFILE.pptx" });
}
