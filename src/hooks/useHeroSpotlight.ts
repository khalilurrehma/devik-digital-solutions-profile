import { useEffect, useRef } from "react";

/**
 * Attaches the cursor-spotlight CSS variable listeners to a hero section.
 * Add class "hero-spotlight" on the element and drop <HeroParticleCanvas /> inside it.
 */
export const useHeroSpotlight = <T extends HTMLElement = HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove  = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--spotlight-x", `${((e.clientX - r.left) / r.width)  * 100}%`);
      el.style.setProperty("--spotlight-y", `${((e.clientY - r.top)  / r.height) * 100}%`);
    };
    const onEnter = () => el.style.setProperty("--spotlight-opacity", "1");
    const onLeave = () => el.style.setProperty("--spotlight-opacity", "0");
    el.addEventListener("mousemove",  onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove",  onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
};
