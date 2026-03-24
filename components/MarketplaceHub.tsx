"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two-sided marketplace visual showing Chester as the bridge
 * between pet owners and pet service providers.
 *
 * Each row: [Owner Need] --- dot --- line --- Chester --- line --- dot --- [Provider Service]
 * The Chester logo sits centered between all rows.
 */

type Phase = "idle" | "connecting" | "connected";

const rows = [
  {
    owner: { icon: "🐕", label: "Dog Walking", sublabel: "Daily walks & exercise" },
    provider: { icon: "🚶", label: "Dog Walkers", sublabel: "Solo & group walks" },
  },
  {
    owner: { icon: "✂️", label: "Grooming", sublabel: "Baths, haircuts & nails" },
    provider: { icon: "💈", label: "Groomers", sublabel: "Full-service grooming" },
  },
  {
    owner: { icon: "🏠", label: "Pet Sitting", sublabel: "Overnight & drop-in care" },
    provider: { icon: "🛋️", label: "Pet Sitters", sublabel: "In-home care" },
  },
  {
    owner: { icon: "🎓", label: "Training", sublabel: "Obedience & behavior" },
    provider: { icon: "🏋️", label: "Trainers", sublabel: "Private & group sessions" },
  },
];

export default function MarketplaceHub() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setPhase("connecting"), 400);
          setTimeout(() => setPhase("connected"), 1800);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isConnecting = phase === "connecting" || phase === "connected";
  const isConnected = phase === "connected";

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      {/* Column headers */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-[1fr_100px_1fr]">
        <div className="text-center md:text-right">
          <span className="inline-block rounded-full bg-honey/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-honey">
            Pet Owners
          </span>
          <p className="mt-2 text-sm text-slate">
            Find everything your pet needs
          </p>
        </div>
        {/* Spacer for center column — hidden on mobile */}
        <div className="hidden md:block" />
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-chester-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-chester-green">
            Pet Providers
          </span>
          <p className="mt-2 text-sm text-slate">
            Reach clients &amp; grow your business
          </p>
        </div>
      </div>

      {/* Rows — each row is: [owner card] [connection] [provider card] */}
      <div className="relative space-y-3">
        {rows.map((row, i) => (
          <div
            key={row.owner.label}
            className="grid grid-cols-2 gap-4 md:grid-cols-[1fr_100px_1fr]"
          >
            {/* Owner card */}
            <div
              className="flex items-center gap-3 rounded-xl border border-linen bg-off-white p-4 md:flex-row-reverse"
              style={{
                opacity: isConnecting ? 1 : 0.4,
                transform: isConnecting ? "translateX(0)" : "translateX(-16px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "0.7s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-honey-light text-lg">
                {row.owner.icon}
              </div>
              <div className="flex-1 md:text-right">
                <p className="text-sm font-semibold text-deep-forest">{row.owner.label}</p>
                <p className="text-xs text-slate">{row.owner.sublabel}</p>
              </div>
            </div>

            {/* Connection line — center column (hidden on mobile) */}
            <div className="hidden items-center justify-center md:flex">
              <div className="flex w-full items-center">
                {/* Left dot */}
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: isConnected ? "#C4783A" : "#D9D0BF",
                    transitionProperty: "background-color",
                    transitionDuration: "0.5s",
                    transitionDelay: `${i * 100 + 800}ms`,
                  }}
                />
                {/* Line */}
                <div
                  className="mx-0.5 h-px flex-1"
                  style={{
                    backgroundColor: isConnected ? "#C4783A" : "#D9D0BF",
                    transform: isConnecting ? "scaleX(1)" : "scaleX(0)",
                    transitionProperty: "transform, background-color",
                    transitionDuration: "0.6s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${i * 100 + 400}ms`,
                  }}
                />
                {/* Right dot */}
                <div
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: isConnected ? "#2C3D28" : "#D9D0BF",
                    transitionProperty: "background-color",
                    transitionDuration: "0.5s",
                    transitionDelay: `${i * 100 + 800}ms`,
                  }}
                />
              </div>
            </div>

            {/* Provider card */}
            <div
              className="flex items-center gap-3 rounded-xl border border-linen bg-off-white p-4"
              style={{
                opacity: isConnecting ? 1 : 0.4,
                transform: isConnecting ? "translateX(0)" : "translateX(16px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "0.7s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-chester-green-surface text-lg">
                {row.provider.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-deep-forest">{row.provider.label}</p>
                <p className="text-xs text-slate">{row.provider.sublabel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom label */}
      <div
        className="mt-8 text-center"
        style={{
          opacity: isConnected ? 1 : 0,
          transform: isConnected ? "translateY(0)" : "translateY(12px)",
          transitionProperty: "opacity, transform",
          transitionDuration: "0.7s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "1.2s",
        }}
      >
        <p className="text-sm font-semibold text-chester-green">
          One platform. Both sides of the relationship.
        </p>
        <p className="mt-1 text-xs text-slate">
          Pet owners find their perfect provider. Providers grow their business. Chester makes it seamless.
        </p>
      </div>
    </div>
  );
}
