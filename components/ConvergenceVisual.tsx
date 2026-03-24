"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Convergence animation: cluttered tools in center → Chester reveal.
 *
 * Phase 1 (scattered): All 4 tools clustered in the CENTER, overlapping
 *   slightly, feeling messy and overwhelming. Devices hidden.
 * Phase 2 (converging): Tools shrink and fade out in all directions.
 *   Devices fade in simultaneously — the "reveal" moment.
 * Phase 3 (resolved): Clean laptop + phone, label appears.
 */

type Phase = "scattered" | "converging" | "resolved";

export default function ConvergenceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("scattered");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Let the clutter sit for 3s so user absorbs the mess
          setTimeout(() => setPhase("converging"), 3000);
          // Smooth crossfade into Chester
          setTimeout(() => setPhase("resolved"), 5200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isConverging = phase === "converging" || phase === "resolved";
  const isResolved = phase === "resolved";
  const devicesVisible = phase === "converging" || phase === "resolved";

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-4xl" style={{ height: "400px" }}>

      {/* ═══ CLUSTERED TOOLS — all positioned near center, overlapping ═══ */}

      {/* Calendar — center-left, tilted slightly */}
      <ClutteredTool
        scatteredPos="left-[12%] top-[12%] sm:left-[18%] sm:top-[8%]"
        converging={isConverging}
        scatterDirection="translate(-80px, -40px) scale(0.5) rotate(-8deg)"
        delay={0}
        rotation="-3deg"
      >
        <div className="w-[130px] rounded-xl border border-linen bg-off-white p-3 shadow-lg sm:w-[150px]">
          <div className="mb-2 flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <div className="h-2 w-2 rounded-full bg-honey" />
            <div className="h-2 w-2 rounded-full bg-chester-green" />
          </div>
          <p className="mb-2 text-[10px] font-semibold text-deep-forest">Calendar</p>
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm text-[6px] ${
                  [4, 11, 15, 22].includes(i) ? "bg-honey/30 text-honey font-bold" : "text-slate/50"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-[8px] font-medium text-slate/50">Google Calendar</p>
        </div>
      </ClutteredTool>

      {/* Invoices — center-top, overlapping calendar slightly */}
      <ClutteredTool
        scatteredPos="left-[30%] top-[2%] sm:left-[34%] sm:top-[0%]"
        converging={isConverging}
        scatterDirection="translate(0, -60px) scale(0.5) rotate(4deg)"
        delay={80}
        rotation="2deg"
      >
        <div className="w-[130px] rounded-xl border border-linen bg-off-white p-3 shadow-lg sm:w-[150px]">
          <p className="mb-2 text-[10px] font-semibold text-deep-forest">Invoices</p>
          <div className="space-y-2">
            {[
              { name: "Sarah K.", amount: "$85", status: "Paid" },
              { name: "Mike R.", amount: "$120", status: "Due" },
              { name: "Lisa T.", amount: "$45", status: "Late" },
            ].map((inv) => (
              <div key={inv.name} className="flex items-center justify-between">
                <span className="text-[8px] text-slate">{inv.name}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${
                  inv.status === "Paid" ? "bg-chester-green/10 text-chester-green" :
                  inv.status === "Late" ? "bg-red-100 text-red-600" : "bg-honey/10 text-honey"
                }`}>
                  {inv.status} &middot; {inv.amount}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 h-px bg-linen" />
          <p className="mt-1.5 text-center text-[8px] font-medium text-slate/50">QuickBooks</p>
        </div>
      </ClutteredTool>

      {/* Messages — center-right */}
      <ClutteredTool
        scatteredPos="right-[10%] top-[8%] sm:right-[16%] sm:top-[5%]"
        converging={isConverging}
        scatterDirection="translate(80px, -30px) scale(0.5) rotate(6deg)"
        delay={160}
        rotation="2deg"
      >
        <div className="w-[140px] space-y-1.5 sm:w-[155px]">
          <div className="rounded-xl rounded-bl-sm border border-linen bg-off-white p-2.5 shadow-lg">
            <p className="text-[9px] font-semibold text-deep-forest">Sarah K.</p>
            <p className="text-[8px] text-slate">How was Bella&apos;s walk today?</p>
          </div>
          <div className="ml-4 rounded-xl rounded-br-sm border border-chester-green/20 bg-chester-green-surface p-2.5 shadow-lg">
            <p className="text-[8px] text-chester-green">Great walk! She played with Max</p>
          </div>
          <div className="rounded-xl rounded-bl-sm border border-linen bg-off-white p-2.5 shadow-lg">
            <p className="text-[9px] font-semibold text-deep-forest">Mike R.</p>
            <p className="text-[8px] text-slate">Can we reschedule Friday?</p>
          </div>
          <p className="text-center text-[8px] font-medium text-slate/50">iMessage + Email</p>
        </div>
      </ClutteredTool>

      {/* Spreadsheet — center-bottom */}
      <ClutteredTool
        scatteredPos="left-[22%] bottom-[8%] sm:left-[28%] sm:bottom-[6%]"
        converging={isConverging}
        scatterDirection="translate(-40px, 60px) scale(0.5) rotate(-5deg)"
        delay={240}
        rotation="-2deg"
      >
        <div className="w-[140px] rounded-xl border border-linen bg-off-white p-3 shadow-lg sm:w-[160px]">
          <p className="mb-2 text-[10px] font-semibold text-deep-forest">Client Tracker</p>
          <div className="overflow-hidden rounded-md border border-linen">
            <div className="grid grid-cols-3 bg-chester-green-surface">
              {["Pet", "Owner", "Notes"].map((h) => (
                <span key={h} className="border-r border-linen px-1.5 py-1 text-[7px] font-semibold text-deep-forest last:border-r-0">{h}</span>
              ))}
            </div>
            {[
              ["Bella", "Sarah", "Allergies"],
              ["Max", "Sarah", "Pulls leash"],
              ["Luna", "Mike", "Shy w/ dogs"],
              ["Cooper", "Lisa", "High energy"],
            ].map(([pet, owner, note]) => (
              <div key={pet} className="grid grid-cols-3 border-t border-linen">
                <span className="border-r border-linen px-1.5 py-0.5 text-[7px] text-slate">{pet}</span>
                <span className="border-r border-linen px-1.5 py-0.5 text-[7px] text-slate">{owner}</span>
                <span className="px-1.5 py-0.5 text-[7px] text-slate">{note}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-[8px] font-medium text-slate/50">Google Sheets</p>
        </div>
      </ClutteredTool>

      {/* ═══ DEVICES: Laptop + Phone (the reveal) ═══ */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: devicesVisible ? 1 : 0,
          transform: devicesVisible ? "scale(1)" : "scale(0.9)",
          transitionProperty: "opacity, transform",
          transitionDuration: "2s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.3s",
          pointerEvents: devicesVisible ? "auto" : "none",
        }}
      >
        <div className="flex items-end gap-4">
          {/* Glow */}
          <div
            className="absolute -inset-10 rounded-3xl"
            style={{
              background: isResolved
                ? "radial-gradient(ellipse at center, rgba(196,120,58,0.12) 0%, transparent 70%)"
                : "transparent",
              transitionProperty: "background",
              transitionDuration: "1.5s",
              transitionDelay: "0.8s",
            }}
          />

          {/* Laptop */}
          <div className="relative hidden sm:block">
            <div className="w-[320px] rounded-t-lg border-[4px] border-b-0 border-deep-forest/85 bg-deep-forest shadow-xl">
              <div className="overflow-hidden rounded-t-[4px] bg-off-white">
                <div className="px-3 pb-3 pt-3">
                  <div className="mb-2 flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-honey/60" />
                    <div className="h-1.5 w-1.5 rounded-full bg-chester-green/60" />
                    <div className="ml-2 flex-1 rounded-sm bg-chester-green-surface px-2 py-0.5">
                      <p className="text-[6px] text-slate/60">app.chester.pet</p>
                    </div>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-heading text-[10px] text-deep-forest">Chester Dashboard</p>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-chester-green text-[6px] font-bold text-white">A</div>
                  </div>
                  <div className="mb-2 grid grid-cols-4 gap-1">
                    {[
                      { label: "Today", value: "8", color: "text-chester-green" },
                      { label: "Revenue", value: "$340", color: "text-honey" },
                      { label: "Reports", value: "12", color: "text-chester-green" },
                      { label: "Clients", value: "34", color: "text-chester-green" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-md bg-chester-green-surface p-1.5 text-center">
                        <p className="text-[5px] text-slate">{s.label}</p>
                        <p className={`font-heading text-[10px] ${s.color}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: "Bella & Max", time: "9:00 AM", type: "Group Walk" },
                      { name: "Luna", time: "11:30 AM", type: "Solo Walk" },
                      { name: "Cooper", time: "2:00 PM", type: "Training" },
                    ].map((b) => (
                      <div key={b.name} className="flex items-center justify-between rounded-md border border-linen bg-white px-2 py-1">
                        <div>
                          <p className="text-[7px] font-semibold text-deep-forest">{b.name}</p>
                          <p className="text-[5px] text-slate">{b.type}</p>
                        </div>
                        <span className="rounded-full bg-chester-green/10 px-1.5 py-0.5 text-[6px] font-medium text-chester-green">{b.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-2 w-[340px] rounded-b-lg bg-gradient-to-b from-deep-forest/80 to-deep-forest/60 shadow-md" />
            <div className="mx-auto h-1 w-[360px] rounded-b-xl bg-deep-forest/30" />
          </div>

          {/* Phone */}
          <div className="relative -mb-1">
            <div className="w-[140px] rounded-[1.6rem] border-[4px] border-deep-forest/90 bg-deep-forest shadow-2xl sm:w-[140px]">
              <div className="absolute left-1/2 top-1 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-deep-forest" />
              <div className="overflow-hidden rounded-[1.2rem] bg-off-white">
                <div className="px-2.5 pb-3 pt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-heading text-[9px] text-deep-forest">Chester</p>
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-chester-green text-[5px] font-bold text-white">A</div>
                  </div>
                  <div className="mb-1.5 grid grid-cols-2 gap-1">
                    <div className="rounded-md bg-chester-green-surface p-1.5">
                      <p className="text-[5px] text-slate">Today</p>
                      <p className="font-heading text-[10px] text-chester-green">8</p>
                    </div>
                    <div className="rounded-md bg-honey-light p-1.5">
                      <p className="text-[5px] text-slate">Revenue</p>
                      <p className="font-heading text-[10px] text-honey">$340</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="rounded-md border border-linen bg-white p-1.5">
                      <p className="text-[6px] font-semibold text-deep-forest">Bella &amp; Max</p>
                      <p className="text-[5px] text-slate">9:00 AM</p>
                    </div>
                    <div className="rounded-md border border-linen bg-white p-1.5">
                      <p className="text-[6px] font-semibold text-deep-forest">New message</p>
                      <p className="text-[5px] text-slate">Sarah K.</p>
                    </div>
                  </div>
                  <div className="mt-1.5 flex justify-around rounded-md bg-chester-green-surface px-1 py-1">
                    {["Home", "Schedule", "Clients", "Chat"].map((t, i) => (
                      <span key={t} className={`text-[4px] font-medium ${i === 0 ? "text-chester-green" : "text-slate/40"}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0.5 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Label ═══ */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center"
        style={{
          opacity: isResolved ? 1 : 0,
          transform: isResolved ? "translateY(0)" : "translateY(12px)",
          transitionProperty: "opacity, transform",
          transitionDuration: "0.8s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.8s",
        }}
      >
        <p className="text-sm font-semibold text-chester-green">One product. Every surface.</p>
        <p className="mt-1 text-xs text-slate">Desktop for the office. Mobile for the field.</p>
      </div>
    </div>
  );
}

/**
 * Tool card that starts clustered in the center area (with slight rotation
 * for a "messy desk" feel), then scatters outward and fades when converging.
 */
function ClutteredTool({
  children,
  scatteredPos,
  converging,
  scatterDirection,
  delay,
  rotation = "0deg",
}: {
  children: React.ReactNode;
  scatteredPos: string;
  converging: boolean;
  scatterDirection: string;
  delay: number;
  rotation?: string;
}) {
  return (
    <div
      className={`absolute ${scatteredPos}`}
      style={{
        opacity: converging ? 0 : 1,
        transform: converging ? scatterDirection : `rotate(${rotation})`,
        transitionProperty: "opacity, transform",
        transitionDuration: "1.8s",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
