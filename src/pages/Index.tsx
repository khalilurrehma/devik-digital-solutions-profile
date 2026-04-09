import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutPage from "@/components/AboutPage";
import BrandsStrip from "@/components/BrandsStrip";
import StatsBar from "@/components/StatsBar";
import CapabilitiesPage from "@/components/CapabilitiesPage";
import PreFooterCta from "@/components/PreFooterCta";
import CoverPage from "@/components/CoverPage";
import FaqPage from "@/components/FaqPage";
import IdealClientsPage from "@/components/IdealClientsPage";
import InsightsPage from "@/components/InsightsPage";
import PortfolioPage from "@/components/PortfolioPage";
import PricingPage from "@/components/PricingPage";
import ServicesPage from "@/components/ServicesPage";
import TestimonialsPage from "@/components/TestimonialsPage";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  const location = useLocation();

  usePageMeta(
    "DEVIK DIGITAL SOLUTIONS | Web, Mobile & AI Development",
    "DEVIK DIGITAL SOLUTIONS builds web applications, mobile apps, backend systems, and AI-enabled products for startups, agencies, and growing companies.",
  );

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const element = document.querySelector(location.hash);
    if (!element) {
      return;
    }

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <CoverPage />
      <StatsBar />
      <BrandsStrip />
      <AboutPage />
      <ServicesPage />
      <IdealClientsPage />
      <PortfolioPage />
      <PricingPage />
      <CapabilitiesPage />
      <TestimonialsPage />
      <FaqPage />
      <InsightsPage />
      <PreFooterCta />
    </div>
  );
};

export default Index;
