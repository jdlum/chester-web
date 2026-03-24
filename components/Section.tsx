"use client";

import { useEffect, useRef } from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "parchment" | "green" | "surface";
  /** Animate direction: "up" (default), "left", "right", "scale" */
  animate?: "up" | "left" | "right" | "scale" | "none";
  /** Blend gradient into next section — set nextBg to match the following section */
  blend?: "white" | "parchment" | "green" | "surface";
};

const bgs: Record<string, string> = {
  white: "bg-off-white",
  parchment: "bg-parchment",
  green: "bg-chester-green text-white",
  surface: "bg-chester-green-surface",
};

const blendColors: Record<string, string> = {
  white: "#FAFAF6",
  parchment: "#EDE5D4",
  green: "#2C3D28",
  surface: "#F0F4EE",
};

const revealClasses: Record<string, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  none: "",
};

export default function Section({
  children,
  className = "",
  id,
  bg = "white",
  animate = "up",
  blend,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || animate === "none") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.02, rootMargin: "0px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section
      ref={ref}
      id={id}
      className={`${revealClasses[animate]} relative py-14 md:py-20 ${bgs[bg]} ${className}`}
      style={
        blend
          ? ({ "--next-bg": blendColors[blend] } as React.CSSProperties)
          : undefined
      }
    >
      {/* Gradient blend into next section */}
      {blend && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to bottom, transparent, ${blendColors[blend]})`,
          }}
        />
      )}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
