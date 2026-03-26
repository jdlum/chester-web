"use client";

import { useState } from "react";
import PhoneMockup from "./PhoneMockup";

const features = [
  {
    id: "scheduling",
    label: "Scheduling",
    title: "Your week, at a glance",
    description:
      "See pending requests, upcoming walks, and completed sessions on one calendar. Approve bookings in one tap.",
    bullets: [
      "Pending request management",
      "Recurring booking support",
      "Group walk cohorts",
      "Cancellation enforcement",
    ],
    screenshot: "/screenshots/schedule.png",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Get paid without thinking about it",
    description:
      "Stripe-powered invoicing with tax tracking, refunds, and automatic cancellation fee billing.",
    bullets: [
      "Automatic invoice generation",
      "One-tap client checkout",
      "Revenue dashboard",
      "Tax tracking (HST, GST)",
    ],
    screenshot: "/screenshots/billing.png",
  },
  {
    id: "report-cards",
    label: "Report Cards",
    title: "The update every parent wants",
    description:
      "Per-pet mood, energy, appetite, and potty observations with photos, highlight moments, and scheduled delivery.",
    bullets: [
      "Mood & energy tracking",
      "Photo & video attachments",
      "Scheduled delivery",
      "Grooming & training fields",
    ],
    screenshot: "/screenshots/report-card.png",
  },
  {
    id: "gps",
    label: "GPS Tracking",
    title: "Show exactly where you went",
    description:
      "Real-time location tracking with distance, route history, and weather context on every walk.",
    bullets: [
      "Live walk tracking",
      "Auto distance calculation",
      "Weather context captured",
      "Route stored with report card",
    ],
    screenshot: "/screenshots/gps-tracking.png",
  },
  {
    id: "pets",
    label: "Pet Health",
    title: "Know every pet inside and out",
    description:
      "Vaccinations, vet info, medical notes, grooming profiles, and document management for every pet.",
    bullets: [
      "Vaccination due dates",
      "Vet info on file",
      "Grooming & training profiles",
      "Document approval workflow",
    ],
    screenshot: "/screenshots/health.png",
  },
  {
    id: "team",
    label: "Team",
    title: "From solo to growing team",
    description:
      "Invite staff, assign roles with granular permissions, configure pay rates, and export CSV pay reports.",
    bullets: [
      "Owner, staff, contractor roles",
      "10 granular permissions",
      "Pay reports with CSV export",
      "Background check tracking",
    ],
    screenshot: "/screenshots/team.png",
  },
  {
    id: "messaging",
    label: "Messages",
    title: "Stay connected, in real time",
    description:
      "Direct messaging with clients, photo sharing, push notifications, and granular notification preferences.",
    bullets: [
      "Real-time push notifications",
      "Photo & document sharing",
      "Unread counters",
      "Per-type preferences",
    ],
    screenshot: "/screenshots/messages.png",
  },
  {
    id: "insights",
    label: "Insights",
    title: "Know every dog better than their owner",
    description:
      "Trend analysis across mood, energy, and appetite. Pre-session briefings for providers. Peace of mind for clients.",
    bullets: [
      "Mood & energy trends",
      "Appetite pattern detection",
      "Provider pre-session briefing",
      "Dashboard metrics",
    ],
    screenshot: "/screenshots/insights.png",
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const feat = features[active];

  return (
    <div>
      {/* Tab bar — wraps on mobile */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {features.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              i === active
                ? "bg-chester-green text-white shadow-lg shadow-chester-green/20"
                : "bg-chester-green-surface text-slate hover:bg-chester-green-light hover:text-chester-green"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Content + phone */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div
          key={feat.id}
          className="animate-[hero-slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        >
          <h3 className="font-heading text-3xl sm:text-4xl">{feat.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            {feat.description}
          </p>
          <ul className="mt-6 space-y-3">
            {feat.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-deep-forest">
                <svg
                  className="h-5 w-5 shrink-0 text-honey"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone mockup with real screenshot */}
        <div
          key={feat.id + "-phone"}
          className="flex justify-center animate-[hero-slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        >
          <PhoneMockup
            src={feat.screenshot}
            alt={`${feat.label} screen`}
            animate={false}
          />
        </div>
      </div>
    </div>
  );
}
