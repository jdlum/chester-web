import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every feature Chester offers — booking, report cards, GPS tracking, payments, pet health, team management, insights, and more.",
};

/* ──────────────────────────────────────────────
   FEATURE DOMAIN DATA — mirrors actual codebase
   ────────────────────────────────────────────── */

const domains = [
  {
    id: "booking",
    label: "Booking & Scheduling",
    title: "A calendar built for pet professionals",
    description:
      "Manage your entire week from one screen. Approve requests, track recurring schedules, handle group walks, and reassign bookings when life happens.",
    features: [
      "Calendar view with pending, upcoming, and completed bookings",
      "One-tap request approval or decline with reason notes",
      "Recurring booking support — weekly schedules with up to 60 occurrences",
      "One-off bookings for single sessions",
      "Multi-pet bookings with per-pet billing amounts",
      "Group walk cohort management",
      "Booking reassignment with handoff notes for staff substitution",
      "Actual start and end time tracking",
      "Full booking lifecycle: draft → pending → confirmed → active → completed",
      "Client-initiated schedule requests with approval workflow",
      "Pause and resume recurring schedules",
      "Service-type-specific bookings: walking, sitting, grooming, boarding, training",
    ],
    icon: "calendar",
  },
  {
    id: "cancellations",
    label: "Cancellation Policies",
    title: "Protect your time and income",
    description:
      "Set clear boundaries with configurable cancellation policies. Late cancellations and no-shows automatically generate fee invoices — no awkward conversations needed.",
    features: [
      "Configurable cancellation policies per service type",
      "Free cancellation window — set how many hours before service",
      "Late cancellation fees — fixed amount or percentage of booking",
      "No-show fee enforcement",
      "Automatic cancellation fee invoice generation",
      "Fee waiver workflow with reason tracking",
      "Track who cancelled and why — provider, client, or system",
      "Policy fallback logic — service-specific overrides with business-wide default",
    ],
    icon: "shield",
  },
  {
    id: "payments",
    label: "Payments & Invoicing",
    title: "Get paid without thinking about it",
    description:
      "Stripe Connect handles everything. Create invoices, accept payments, issue refunds, and track revenue — no accounting degree required.",
    features: [
      "Stripe Connect onboarding in minutes",
      "Express Dashboard — providers manage their Stripe account directly",
      "Full invoice lifecycle: draft → sent → paid → overdue → refunded",
      "Multi-pet, multi-booking invoice line items",
      "Tax tracking with configurable rates and labels (HST, GST, Sales Tax)",
      "One-tap client checkout via Stripe",
      "Partial and full refunds with reason tracking",
      "Due date management with overdue detection",
      "Revenue dashboard with daily and weekly totals",
      "Payment history and status tracking for providers and clients",
      "Automatic cancellation fee invoicing",
      "Transparent platform pricing — no hidden fees",
    ],
    icon: "credit-card",
  },
  {
    id: "report-cards",
    label: "Report Cards",
    title: "The update every pet parent wants to receive",
    description:
      "Structured, beautiful report cards with per-pet observations, photos, and a personal note. Configurable templates, scheduled delivery, and the highlight moment that makes clients share you with friends.",
    features: [
      "Structured per-pet observations after every visit",
      "Mood tracking — great, good, tired, anxious, or unwell",
      "Energy level rating on a 1–5 scale",
      "Appetite tracking — ate normally, ate less, refused food",
      "Potty tracking with consistency notes",
      "Provider narrative — warm, personal message to the pet parent",
      "Highlight moment — one sentence, perfect for push notifications",
      "Internal notes — provider-only, never shown to clients",
      "Photo and video attachments with captions",
      "Two capture phases — during service and after service",
      "Configurable report card templates per service type",
      "Required vs. optional field configuration",
      "Grooming-specific fields — coat condition, products used, next visit recommendation",
      "Training-specific fields — session progress, homework assigned",
      "Scheduled delivery — default 1 hour after service, customizable",
      "Multi-channel delivery — push notification, email, and SMS",
      "Sent, delivered, and read tracking",
      "Billing exceptions — link mid-service adjustments directly to the report card",
    ],
    icon: "clipboard",
  },
  {
    id: "gps",
    label: "GPS Walk Tracking",
    title: "Show pet parents exactly where you went",
    description:
      "Real-time location tracking during every walk. Distance is computed automatically, routes are stored, and weather context is captured — all attached to the report card.",
    features: [
      "Real-time location tracking during active walks",
      "Automatic distance computation in kilometers",
      "Full GPS route history stored with every walk",
      "Accuracy filtering — discards low-quality readings automatically",
      "Smart deduplication — skips redundant points for clean routes",
      "Crash recovery — session backed up locally every 30 seconds",
      "Weather and environmental context captured at service start",
      "Route and distance attached to report card on completion",
    ],
    icon: "map",
  },
  {
    id: "pets",
    label: "Pet Profiles & Health",
    title: "Know every pet inside and out",
    description:
      "Detailed profiles with breed, medical history, vaccinations, vet info, and service-specific notes. Everything a provider needs before every visit.",
    features: [
      "Detailed pet profiles — breed, age, weight, sex, color, neutered status",
      "Emergency contact information",
      "Medical notes and behavior notes",
      "Vaccination tracking with due date reminders",
      "Proof of vaccination document upload",
      "Vet information — name, clinic, phone number",
      "Grooming profile — coat type, last groomed, preferred styles, products used",
      "Training profile — current level, behavior concerns, certifications earned",
      "Pet documents with approval workflow — pending, approved, expired, rejected",
      "Pet avatar and photo",
      "Multi-species support — dogs, cats, and other animals",
    ],
    icon: "heart",
  },
  {
    id: "team",
    label: "Team Management & Pay",
    title: "From solo operator to growing team",
    description:
      "Invite staff and contractors, assign roles with granular permissions, configure pay rates, and export pay reports — all without a spreadsheet in sight.",
    features: [
      "Invite staff and contractors via email",
      "Three roles — owner, staff, contractor",
      "10 granular permissions — manage staff, view all clients, manage billing, edit settings, view reporting, create bookings, cancel bookings, issue refunds, view insights, edit report cards",
      "Provider availability — set weekly time slots",
      "Blocked dates and blackout days",
      "Pay rate configuration per service type — fixed or hourly",
      "Pay report generation for any date range",
      "Per-booking itemization — date, service type, client, duration, rate, pay amount",
      "CSV export compatible with QuickBooks and Gusto",
      "Background check status tracking",
      "Insurance verification with expiration dates",
    ],
    icon: "users",
  },
  {
    id: "client-portal",
    label: "Client Portal",
    title: "An experience pet parents actually enjoy",
    description:
      "Your clients get their own portal — free, forever. They can request bookings, pay invoices, manage their pets, sign agreements, and message you directly.",
    features: [
      "Dedicated client signup with your unique business code",
      "Schedule request submission — one-off and recurring",
      "View and pay invoices in one tap",
      "Pet profile management — add and edit pets anytime",
      "Vaccination and health document uploads",
      "Service agreement review and e-signature",
      "Real-time messaging with their provider",
      "Full booking history",
      "Push notifications for report cards, invoices, and messages",
      "Granular notification preference management",
    ],
    icon: "user",
  },
  {
    id: "messaging",
    label: "Messaging & Notifications",
    title: "Stay connected, in real time",
    description:
      "Direct messaging with clients, push notifications for everything that matters, and granular control over what gets sent and how.",
    features: [
      "Real-time messaging powered by Supabase Realtime",
      "Unread message counters — separate for provider and client",
      "Photo, document, and video attachments",
      "Thread-based conversations scoped to each client relationship",
      "Push notifications via Expo Push API",
      "Multi-device support — multiple devices per user",
      "Per-type notification preferences — booking reminders, report cards, invoices, messages, pet insights, marketing",
      "Per-channel control — push, SMS, email",
      "Business-level notification defaults inherited by all clients",
      "Android notification channel with Chester branding",
    ],
    icon: "message",
  },
  {
    id: "insights",
    label: "Insights & Analytics",
    title: "Know every dog better than their owner",
    description:
      "Chester automatically analyzes report card data to detect trends in mood, energy, appetite, and more. Providers get pre-session briefings. Clients get peace of mind.",
    features: [
      "Pet Insights engine — system-generated trend analysis",
      "Metrics tracked: mood, energy, appetite, potty frequency, walk distance, coat condition, training engagement",
      "Trend detection — improving, stable, declining, fluctuating, or insufficient data",
      "Rolling window analysis — 30, 60, or 90 days configurable",
      "Minimum 5 bookings required before insight generation — no noise, only signal",
      "Human-readable trend summaries",
      "Provider pre-session briefing — what to watch for today",
      "Client-facing trend reports — what we've noticed over time",
      "Provider acknowledgement of insights before report card submission",
      "Dashboard metrics — revenue, bookings, active clients, average rating, cancellation rate, no-show rate, report card completion rate",
      "Period comparison — current vs. previous day, week, or month",
    ],
    icon: "chart",
  },
];

/* ── Additional capabilities that cut across domains ── */
const crossCutting = [
  {
    title: "Service Agreements",
    features: [
      "Template-based agreements per business and service type",
      "Version tracking with effective dates",
      "Client e-signature with IP address and timestamp",
      "Status lifecycle — pending, signed, expired, revoked",
      "Agreement expiration management",
    ],
  },
  {
    title: "Business Configuration",
    features: [
      "Five service types — walking, sitting, grooming, boarding, training",
      "Timezone and currency support (CAD, USD)",
      "Customizable report card templates per service type",
      "Configurable cancellation policies per service type",
      "Business-wide notification defaults",
      "Verification status tracking",
    ],
  },
];

/* ── SVG Icons ── */
function DomainIcon({ type }: { type: string }) {
  const shared = "h-6 w-6 shrink-0";
  const props = { className: shared, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5 };

  switch (type) {
    case "calendar":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>;
    case "shield":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    case "credit-card":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>;
    case "clipboard":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>;
    case "map":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0l-3-3m3 3l3-3m6-7.5v13.5M15 12l3-3m-3 3l-3-3M3 5.25l6-2.25 6 2.25 6-2.25v15l-6 2.25-6-2.25L3 20.25V5.25z" /></svg>;
    case "heart":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
    case "users":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>;
    case "user":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
    case "message":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>;
    case "chart":
      return <svg {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
    default:
      return null;
  }
}

/* ── Feature count badge ── */
function FeatureCount({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-honey/10 px-2.5 py-0.5 text-xs font-semibold text-honey">
      {count} features
    </span>
  );
}

export default function FeaturesPage() {
  const totalFeatures = domains.reduce((sum, d) => sum + d.features.length, 0) +
    crossCutting.reduce((sum, c) => sum + c.features.length, 0);

  return (
    <>
      {/* Header */}
      <Section bg="green" animate="none">
        <div className="text-center">
          <h1 className="hero-animate hero-animate-1 text-4xl text-white sm:text-5xl">
            Built for How You Actually Work
          </h1>
          <p className="hero-animate hero-animate-2 mx-auto mt-4 max-w-xl text-chester-green-mid">
            {totalFeatures}+ features across {domains.length} categories — every one designed
            to save you time, earn you money, and keep your clients coming back.
          </p>
        </div>

        {/* Quick-nav pills */}
        <div className="hero-animate hero-animate-3 mt-8 flex flex-wrap justify-center gap-2">
          {domains.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="rounded-full border border-chester-green-mid/30 bg-chester-green-mid/10 px-3 py-1.5 text-xs font-medium text-chester-green-light transition-colors hover:border-honey hover:bg-honey/10 hover:text-white"
            >
              {d.label}
            </a>
          ))}
        </div>
      </Section>

      {/* Feature domains — alternating backgrounds */}
      {domains.map((domain, i) => (
        <Section
          key={domain.id}
          bg={i % 2 === 0 ? "surface" : "white"}
          blend={i % 2 === 0 ? "white" : "surface"}
          animate={i % 2 === 0 ? "left" : "right"}
        >
          <div id={domain.id} className="scroll-mt-24">
            {/* Domain header */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chester-green/10 text-chester-green">
                <DomainIcon type={domain.icon} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-chester-green">
                {domain.label}
              </span>
              <FeatureCount count={domain.features.length} />
            </div>

            <h2 className="mt-4 text-3xl">{domain.title}</h2>
            <p className="mt-3 max-w-2xl text-slate">{domain.description}</p>

            {/* Feature grid — 2 columns on desktop */}
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {domain.features.map((f) => (
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
        </Section>
      ))}

      {/* Cross-cutting capabilities */}
      <Section bg="parchment" blend="white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Plus, Everything Else</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Capabilities that work across every part of Chester.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {crossCutting.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-linen bg-off-white p-6"
            >
              <h3 className="font-heading text-xl">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-deep-forest"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-honey"
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
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="green" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            {totalFeatures}+ Features.
            <span className="block text-honey">One Platform.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-chester-green-mid">
            Start your free trial today. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started Free
            </Button>
            <Button
              href="/for-pet-owners"
              variant="outline"
              size="lg"
              className="border-chester-green-mid/50 text-chester-green-light hover:border-honey hover:bg-honey/10 hover:text-white"
            >
              I&apos;m a Pet Owner
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
