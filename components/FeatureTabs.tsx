"use client";

import { useState } from "react";

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
    screen: {
      header: "Schedule",
      items: [
        { time: "9:00 AM", name: "Bella & Max", type: "Group Walk", status: "confirmed" },
        { time: "11:30 AM", name: "Luna", type: "Solo Walk", status: "pending" },
        { time: "2:00 PM", name: "Cooper", type: "Training", status: "confirmed" },
        { time: "4:30 PM", name: "Daisy & Rosie", type: "Group Walk", status: "confirmed" },
      ],
    },
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
    screen: {
      header: "Billing",
      items: [
        { time: "Today", name: "Sarah K.", type: "$85.00 · Walk", status: "paid" },
        { time: "Today", name: "Mike R.", type: "$120.00 · Grooming", status: "paid" },
        { time: "Yesterday", name: "Lisa T.", type: "$45.00 · Walk", status: "pending" },
        { time: "Mar 20", name: "Anna M.", type: "$90.00 · Training", status: "paid" },
      ],
    },
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
    screen: {
      header: "Report Card",
      items: [
        { time: "Great", name: "Bella · Mood", type: "Happy & playful today", status: "up" },
        { time: "4/5", name: "Bella · Energy", type: "Very active on walk", status: "up" },
        { time: "Normal", name: "Bella · Appetite", type: "Ate full meal", status: "stable" },
        { time: "✓", name: "Bella · Potty", type: "Normal consistency", status: "stable" },
      ],
    },
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
    screen: {
      header: "Walk Tracker",
      items: [
        { time: "Active", name: "Bella & Max", type: "Group Walk · 2.4 km", status: "confirmed" },
        { time: "32 min", name: "Duration", type: "Started 9:00 AM", status: "stable" },
        { time: "14°C", name: "Weather", type: "Partly cloudy", status: "stable" },
        { time: "Route", name: "High Park Loop", type: "Saved to report card", status: "up" },
      ],
    },
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
    screen: {
      header: "Pet Profile",
      items: [
        { time: "Current", name: "Rabies", type: "Due: Sep 2026", status: "up" },
        { time: "Current", name: "Bordetella", type: "Due: Jun 2026", status: "up" },
        { time: "Expiring", name: "DHPP", type: "Due: Apr 2026", status: "pending" },
        { time: "On file", name: "Vet: Dr. Patel", type: "Happy Paws Clinic", status: "stable" },
      ],
    },
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
    screen: {
      header: "Team",
      items: [
        { time: "Owner", name: "Alex D.", type: "All permissions", status: "confirmed" },
        { time: "Staff", name: "Jordan L.", type: "$22/hr · Walking", status: "confirmed" },
        { time: "Staff", name: "Sam T.", type: "$25/hr · Training", status: "confirmed" },
        { time: "Contractor", name: "Riley M.", type: "$30/session · Grooming", status: "pending" },
      ],
    },
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
    screen: {
      header: "Messages",
      items: [
        { time: "Just now", name: "Sarah K.", type: "How was Bella today?", status: "unread" },
        { time: "1h ago", name: "Mike R.", type: "Thanks for the report card!", status: "read" },
        { time: "2h ago", name: "Lisa T.", type: "Can we reschedule Friday?", status: "read" },
        { time: "Yesterday", name: "Anna M.", type: "Luna loved the walk!", status: "read" },
      ],
    },
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
    screen: {
      header: "Pet Insights",
      items: [
        { time: "Improving", name: "Bella", type: "Energy: High ↑", status: "up" },
        { time: "Stable", name: "Max", type: "Mood: Happy →", status: "stable" },
        { time: "Watch", name: "Luna", type: "Appetite: Low ↓", status: "down" },
        { time: "Improving", name: "Cooper", type: "Training: Engaged ↑", status: "up" },
      ],
    },
  },
];

const statusColors: Record<string, string> = {
  confirmed: "bg-chester-green/15 text-chester-green",
  pending: "bg-honey/15 text-honey",
  paid: "bg-chester-green/15 text-chester-green",
  unread: "bg-honey/15 text-honey",
  read: "bg-slate/10 text-slate",
  up: "bg-chester-green/15 text-chester-green",
  stable: "bg-slate/10 text-slate",
  down: "bg-red-100 text-red-700",
};

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

        {/* Animated phone screen */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="glow-pulse absolute -inset-6 rounded-[3rem] bg-honey/15 blur-2xl" />

            <div className="relative w-[280px] rounded-[2.5rem] border-[6px] border-deep-forest/90 bg-deep-forest shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-deep-forest" />

              <div className="overflow-hidden rounded-[2rem] bg-off-white">
                <div className="px-4 pb-5 pt-10">
                  <div className="mb-4">
                    <p className="font-heading text-base text-deep-forest">
                      {feat.screen.header}
                    </p>
                  </div>

                  <div key={feat.id + "-items"} className="space-y-2">
                    {feat.screen.items.map((item, idx) => (
                      <div
                        key={item.name + idx}
                        className="flex items-center justify-between rounded-xl border border-linen bg-white p-3 animate-[hero-slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0"
                        style={{ animationDelay: `${idx * 80 + 100}ms` }}
                      >
                        <div>
                          <p className="text-[11px] font-semibold text-deep-forest">
                            {item.name}
                          </p>
                          <p className="text-[9px] text-slate">{item.type}</p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${
                            statusColors[item.status] || "bg-slate/10 text-slate"
                          }`}
                        >
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav — show first 4 tabs */}
                  <div className="mt-4 flex items-center justify-around rounded-xl bg-chester-green-surface px-2 py-2">
                    {features.slice(0, 4).map((f, i) => (
                      <div
                        key={f.id}
                        className={`text-center ${
                          i === (active < 4 ? active : -1) ? "text-chester-green" : "text-slate/40"
                        }`}
                      >
                        <div
                          className={`mx-auto mb-0.5 h-4 w-4 rounded-md ${
                            i === (active < 4 ? active : -1) ? "bg-chester-green/20" : ""
                          }`}
                        />
                        <p className="text-[7px] font-medium">{f.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
