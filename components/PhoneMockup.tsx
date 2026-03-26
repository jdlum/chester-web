/**
 * Phone mockup component that displays real app screenshots
 * inside a realistic iPhone-style CSS frame.
 *
 * Usage:
 *   <PhoneMockup src="/screenshots/schedule.png" alt="Schedule screen" />
 *   <PhoneMockup src="/screenshots/dashboard.png" alt="Dashboard" size="sm" />
 *   <PhoneMockup />  ← falls back to placeholder UI
 */
import Image from "next/image";

type PhoneMockupProps = {
  /** Path to screenshot image (e.g. "/screenshots/schedule.png") */
  src?: string;
  /** Alt text for the screenshot */
  alt?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Whether to animate with floating effect */
  animate?: boolean;
  /** Whether to show the glow behind the phone */
  glow?: boolean;
  /** Additional className on the outer wrapper */
  className?: string;
};

const sizes = {
  sm: { wrapper: "w-[220px] sm:w-[240px]", radius: "rounded-[2rem]", screen: "rounded-[1.6rem]", notch: "h-5 w-20" },
  md: { wrapper: "w-[280px] sm:w-[300px]", radius: "rounded-[2.5rem]", screen: "rounded-[2rem]", notch: "h-6 w-24" },
  lg: { wrapper: "w-[320px] sm:w-[360px]", radius: "rounded-[3rem]", screen: "rounded-[2.4rem]", notch: "h-7 w-28" },
};

export default function PhoneMockup({
  src,
  alt = "Chester app screenshot",
  size = "md",
  animate = true,
  glow = true,
  className = "",
}: PhoneMockupProps) {
  const s = sizes[size];

  return (
    <div className={`${animate ? "phone-float" : ""} relative ${className}`}>
      {/* Glow behind phone */}
      {glow && (
        <div className="glow-pulse absolute -inset-8 rounded-[3rem] bg-honey/20 blur-3xl" />
      )}

      {/* Phone frame */}
      <div
        className={`relative mx-auto ${s.wrapper} ${s.radius} border-[6px] border-deep-forest/90 bg-deep-forest shadow-2xl`}
      >
        {/* Dynamic Island / Notch */}
        <div
          className={`absolute left-1/2 top-2 z-10 ${s.notch} -translate-x-1/2 rounded-full bg-deep-forest`}
        />

        {/* Screen */}
        <div className={`overflow-hidden ${s.screen} bg-off-white`}>
          {src ? (
            <Image
              src={src}
              alt={alt}
              width={750}
              height={1624}
              className="h-auto w-full"
              priority
            />
          ) : (
            <PlaceholderScreen />
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

/** Fallback placeholder — used when no screenshot is provided */
function PlaceholderScreen() {
  return (
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
  );
}
