import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RocketNav from "./components/RocketNav";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import StickyNav from "./components/StickyNav";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useScrollReveal } from "./hooks/useScrollReveal";
import BookPage from "./pages/Book";
import ContactFullPage from "./pages/Contact";
import Index from "./pages/Index";
import InsightArticlePage from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";
import ThankYouPage from "./pages/ThankYou";
import WorkPage from "./pages/Work";
import PricingFullPage from "./pages/Pricing";

const queryClient = new QueryClient();

const AppShell = () => {
  useScrollReveal();

  return (
    <>
      <ScrollProgressBar />
      <ScrollToTop />
      <StickyNav />
      <RocketNav />
      <WhatsAppFloat />
      {/* <AiChatWidget /> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/pricing" element={<PricingFullPage />} />
        <Route path="/contact" element={<ContactFullPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/insights/multi-tenant-saas-architecture" element={<InsightArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
