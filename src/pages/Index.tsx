import CoverPage from "@/components/CoverPage";
import AboutPage from "@/components/AboutPage";
import ServicesPage from "@/components/ServicesPage";
import CapabilitiesPage from "@/components/CapabilitiesPage";
import TestimonialsPage from "@/components/TestimonialsPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-4 px-4">
      <CoverPage />
      <AboutPage />
      <ServicesPage />
      <CapabilitiesPage />
      <TestimonialsPage />
    </div>
  );
};

export default Index;
