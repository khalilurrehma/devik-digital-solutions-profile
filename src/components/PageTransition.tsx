import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Wraps page content with a CSS fade-up transition on every route change.
 * No external dependencies — uses a single CSS class + requestAnimationFrame.
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Remove then re-add the class so the animation replays on each navigation
    el.classList.remove("page-transition");
    // Force reflow so the removal is committed before re-adding
    void el.offsetHeight;
    el.classList.add("page-transition");
  }, [pathname]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
