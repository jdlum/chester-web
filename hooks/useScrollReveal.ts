"use client";

import { useEffect, useRef } from "react";

/**
 * Observes child elements with [data-reveal] and staggers their
 * entrance animation. Each child gets an incremental delay based
 * on its DOM index within the container.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref}>
 *     <div data-reveal>...</div>
 *     <div data-reveal>...</div>
 *   </div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  staggerMs = 80,
  threshold = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Find all [data-reveal] children and the container itself
    const targets = container.querySelectorAll("[data-reveal]");
    const allTargets = targets.length > 0 ? targets : [container];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger delay based on index
            const index = Array.from(allTargets).indexOf(el);
            el.style.setProperty(
              "--reveal-delay",
              `${index * staggerMs}ms`
            );
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    allTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [staggerMs, threshold]);

  return ref;
}
