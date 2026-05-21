"use client";

import { useEffect } from "react";

/**
 * Activates .fade-up elements when they scroll into view.
 * Mount once in the root layout or per-page.
 */
export function FadeInObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.fadeDelay;
            if (delay) {
              el.style.transitionDelay = delay;
            }
            el.classList.add("fade-up-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback for users with reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("fade-up-visible"));
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
