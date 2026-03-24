import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Chester offers — scheduling, payments, messaging, pet insights, team management, and more.",
};

/* ──────────────────────────────────────────────
   STOCK IMAGE DIRECTORY — swap with app screenshots
   ────────────────────────────────────────────── */
const IMAGES = {
  scheduling: "https://images.unsplash.com/photo-1450778869180-e20fcaa15659?w=600&q=80",
  payments: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  messaging: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600&q=80",
  operations: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=600&q=80",
};

const pillars = [
  {
    label: "Scheduling",
    title: "Booking & Schedule Management",
    description:
      "A calendar built for pet professionals. See pending requests, upcoming walks, and completed sessions at a glance.",
    features: [
      "Calendar view with pending, upcoming, and completed bookings",
      "One-tap request approval or decline",
      "Cohort-based group walk management",
      "Recurring booking support",
      "Cancellation policy enforcement",
      "Quick actions from dashboard",
    ],
    bg: "surface" as const,
    blend: "white" as const,
    img: IMAGES.scheduling,
    imgAlt: "PLACEHOLDER: Replace with Chester schedule screen screenshot",
  },
  {
    label: "Payments",
    title: "Payments & Invoicing",
    description:
      "Stripe Connect handles everything. Create invoices, accept payments, and track revenue — no accounting degree required.",
    features: [
      "Stripe Connect onboarding in minutes",
      "Automatic invoice generation",
      "One-tap client checkout",
      "Revenue dashboard with daily and weekly totals",
      "Payment history and status tracking",
      "No hidden fees — transparent platform pricing",
    ],
    bg: "white" as const,
    blend: "surface" as const,
    img: IMAGES.payments,
    imgAlt: "PLACEHOLDER: Replace with Chester billing screen screenshot",
  },
  {
    label: "Communication",
    title: "Messaging & Report Cards",
    description:
      "Stay connected with clients in real-time. Send updates, photos, and detailed report cards after every visit.",
    features: [
      "Real-time messaging with push notifications",
      "Report cards with per-pet observations",
      "Photo attachments (before, during, after)",
      "Mood, energy, and appetite tracking",
      "Automated pet insights and trend detection",
      "Delivery confirmation for report cards",
    ],
    bg: "surface" as const,
    blend: "white" as const,
    img: IMAGES.messaging,
    imgAlt: "PLACEHOLDER: Replace with Chester messaging screen screenshot",
  },
  {
    label: "Operations",
    title: "Team & Client Management",
    description:
      "From solo operators to growing teams — Chester scales with your business.",
    features: [
      "Client directory organized by pet, searchable A-Z",
      "Team member management with role assignments",
      "Service agreement creation and tracking",
      "Partner and vendor marketplace",
      "Health and compliance document storage",
      "Notification preferences per client and provider",
    ],
    bg: "white" as const,
    blend: "parchment" as const,
    img: IMAGES.operations,
    imgAlt: "PLACEHOLDER: Replace with Chester clients screen screenshot",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <Section bg="green" animate="none">
        <div className="text-center">
          <h1 className="hero-animate hero-animate-1 text-4xl text-white sm:text-5xl">
            Built for How You Actually Work
          </h1>
          <p className="hero-animate hero-animate-2 mx-auto mt-4 max-w-xl text-chester-green-mid">
            Every feature designed to save you time, earn you money, and keep
            your clients coming back.
          </p>
        </div>
      </Section>

      {/* Pillars — alternating reveal directions */}
      {pillars.map((pillar, i) => (
        <Section
          key={pillar.label}
          bg={pillar.bg}
          blend={pillar.blend}
          animate={i % 2 === 0 ? "left" : "right"}
        >
          <div
            className={`grid items-center gap-10 md:grid-cols-2 ${
              i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
            }`}
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg md:h-80">
              <Image
                src={pillar.img}
                alt={pillar.imgAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-chester-green">
                  {pillar.imgAlt.replace("PLACEHOLDER: ", "")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="mb-2 inline-block rounded-full bg-chester-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-chester-green">
                {pillar.label}
              </span>
              <h2 className="text-3xl">{pillar.title}</h2>
              <p className="mt-3 text-slate">{pillar.description}</p>
              <ul className="mt-5 space-y-2.5">
                {pillar.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-deep-forest"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-chester-green"
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
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section bg="parchment" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Ready to See It in Action?</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate">
            Start your free trial today. No credit card required.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
