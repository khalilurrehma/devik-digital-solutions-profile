import { useEffect } from "react";

/**
 * Adds an `is-visible` class to every element matching the given selector
 * once it scrolls into view. Pair with `.reveal` (or any reveal-* variant)
 * styles defined in index.css to drive entrance animations.
 *
 * The observer is created once on mount and cleaned up on unmount.
 * New elements added to the DOM after mount are picked up via a
 * MutationObserver, so dynamic content animates the same way.
 */
export const useScrollReveal = (selector = "[data-reveal]") => {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document.querySelectorAll(selector).forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    };

    observeAll();

    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [selector]);
};
