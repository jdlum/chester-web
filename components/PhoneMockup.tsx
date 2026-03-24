/**
 * Floating phone mockup that displays app content.
 * Creates the Flighty-style "device as hero" effect.
 *
 * PLACEHOLDER: Replace the inner content with real Chester
 * app screenshots once available.
 */
export default function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`phone-float ${className}`}>
      {/* Glow behind phone */}
      <div className="glow-pulse absolute -inset-8 rounded-[3rem] bg-honey/20 blur-3xl" />

      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-[6px] border-deep-forest/90 bg-deep-forest shadow-2xl sm:w-[300px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-deep-forest" />

        {/* Screen content — PLACEHOLDER for real app screenshot */}
        <div className="overflow-hidden rounded-[2rem] bg-off-white">
          <div className="px-4 pb-6 pt-10">
            {/* Status bar */}
            <div className="mb-4 flex items-center justify-between text-[10px] text-slate">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="h-2 w-3 rounded-sm bg-chester-green" />
                <div className="h-2 w-3 rounded-sm bg-chester-green/60" />
                <div className="h-2 w-2 rounded-full bg-chester-green" />
              </div>
            </div>

            {/* App header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate">Good morning</p>
                <p className="font-heading text-base text-deep-forest">Dashboard</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-chester-green text-[10px] font-bold text-white">
                A
              </div>
            </div>

            {/* Quick stats */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="rounded-xl bg-chester-green-surface p-3">
                <p className="text-[9px] uppercase tracking-wider text-slate">Today</p>
                <p className="font-heading text-xl text-chester-green">8</p>
                <p className="text-[9px] text-sage">bookings</p>
              </div>
              <div className="rounded-xl bg-honey-light p-3">
                <p className="text-[9px] uppercase tracking-wider text-slate">Revenue</p>
                <p className="font-heading text-xl text-honey">$340</p>
                <p className="text-[9px] text-sage">this week</p>
              </div>
            </div>

            {/* Upcoming walk */}
            <div className="rounded-xl border border-linen bg-white p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-deep-forest">Bella &amp; Max</p>
                  <p className="text-[9px] text-slate">Group walk &bull; 30 min</p>
                </div>
                <span className="rounded-full bg-chester-green px-2 py-0.5 text-[8px] font-semibold text-white">
                  9:00 AM
                </span>
              </div>
            </div>

            {/* Report card preview */}
            <div className="mt-2 rounded-xl border border-linen bg-white p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold text-deep-forest">Report Card Sent</p>
                  <p className="text-[9px] text-slate">Luna &bull; Great day!</p>
                </div>
                <span className="text-[9px] text-chester-green">&#10003;</span>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="mt-4 flex items-center justify-around rounded-xl bg-chester-green-surface px-2 py-2">
              {["Home", "Schedule", "Clients", "Messages"].map((tab, i) => (
                <div key={tab} className={`text-center ${i === 0 ? "text-chester-green" : "text-slate/50"}`}>
                  <div className={`mx-auto mb-0.5 h-4 w-4 rounded-md ${i === 0 ? "bg-chester-green/20" : ""}`} />
                  <p className="text-[7px] font-medium">{tab}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}
