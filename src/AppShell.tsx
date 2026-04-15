import type { ReactNode } from "react";
import MobileBottomNav   from "./components/MobileBottomNav";
import PageTransition    from "./components/PageTransition";
import RocketNav         from "./components/RocketNav";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop       from "./components/ScrollToTop";
import SiteFooter        from "./components/SiteFooter";
import StickyNav         from "./components/StickyNav";
import WhatsAppFloat     from "./components/WhatsAppFloat";
import { useScrollReveal } from "./hooks/useScrollReveal";

const AppShell = ({ children }: { children: ReactNode }) => {
  useScrollReveal();
  return (
    <>
      <ScrollProgressBar />
      <ScrollToTop />
      <StickyNav />
      <RocketNav />
      <WhatsAppFloat />
      <div className="pb-16 lg:pb-0">
        <PageTransition>
          {children}
        </PageTransition>
        <SiteFooter />
      </div>
      <MobileBottomNav />
    </>
  );
};

export default AppShell;
