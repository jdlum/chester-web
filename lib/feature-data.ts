/**
 * Canonical feature domain data — shared by /features (overview) and /features/[slug] (detail).
 *
 * Each domain has:
 *   - slug: URL segment
 *   - hero bullets: the 3-4 that sell (shown on overview)
 *   - full features: the exhaustive list (shown on detail page)
 *   - scenario: a short use-case vignette for the detail page
 */

export interface FeatureDomain {
  slug: string;
  label: string;
  title: string;
  hook: string;          // One-line hook for overview cards
  description: string;   // Longer description for detail page
  icon: string;
  heroBullets: string[];
  fullFeatures: string[];
  scenario: {
    title: string;
    description: string;
  };
  seoTitle: string;
  seoDescription: string;
}

export const featureDomains: FeatureDomain[] = [
  {
    slug: "booking-scheduling",
    label: "Booking & Scheduling",
    title: "A calendar built for pet professionals",
    hook: "Manage your entire week from one screen — approvals, recurring schedules, and group walks.",
    description:
      "Manage your entire week from one screen. Approve requests, track recurring schedules, handle group walks, and reassign bookings when life happens.",
    icon: "calendar",
    heroBullets: [
      "One-tap request approval with client-initiated booking",
      "Recurring weekly schedules with up to 60 occurrences",
      "Group walk cohort management",
      "Booking reassignment with handoff notes",
    ],
    fullFeatures: [
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
    scenario: {
      title: "A typical Monday morning",
      description:
        "You open Chester and see 3 pending requests from the weekend. Approve two with one tap, decline one with a note. Your recurring Tuesday group walk auto-populates. Jordan calls in sick — you reassign their afternoon walks to Sam with handoff notes. Total admin time: 4 minutes.",
    },
    seoTitle: "Booking & Scheduling for Pet Professionals | Chester",
    seoDescription:
      "Manage bookings, recurring schedules, group walks, and client requests from one calendar. Built for dog walkers, sitters, trainers, and groomers.",
  },
  {
    slug: "cancellation-policies",
    label: "Cancellation Policies",
    title: "Protect your time and income",
    hook: "Late cancellations and no-shows automatically generate fee invoices — no awkward conversations.",
    description:
      "Set clear boundaries with configurable cancellation policies. Late cancellations and no-shows automatically generate fee invoices — no awkward conversations needed.",
    icon: "shield",
    heroBullets: [
      "Configurable policies per service type",
      "Automatic late cancellation and no-show fee invoicing",
      "Free cancellation window you define",
      "Fee waiver workflow with reason tracking",
    ],
    fullFeatures: [
      "Configurable cancellation policies per service type",
      "Free cancellation window — set how many hours before service",
      "Late cancellation fees — fixed amount or percentage of booking",
      "No-show fee enforcement",
      "Automatic cancellation fee invoice generation",
      "Fee waiver workflow with reason tracking",
      "Track who cancelled and why — provider, client, or system",
      "Policy fallback logic — service-specific overrides with business-wide default",
    ],
    scenario: {
      title: "The 6 AM cancellation text",
      description:
        "A client cancels 2 hours before their morning walk. Your policy requires 24 hours notice. Chester automatically generates a $25 late cancellation fee invoice and sends it to the client. No awkward text. No lost revenue.",
    },
    seoTitle: "Cancellation Policies for Pet Service Providers | Chester",
    seoDescription:
      "Protect your income with configurable cancellation policies. Late fees and no-show charges are invoiced automatically.",
  },
  {
    slug: "payments-invoicing",
    label: "Payments & Invoicing",
    title: "Get paid without thinking about it",
    hook: "Stripe-powered invoicing with tax tracking, refunds, and a revenue dashboard.",
    description:
      "Stripe Connect handles everything. Create invoices, accept payments, issue refunds, and track revenue — no accounting degree required.",
    icon: "credit-card",
    heroBullets: [
      "Stripe Connect — onboard in minutes, get paid to your bank",
      "Full invoice lifecycle: draft → sent → paid → overdue → refunded",
      "Tax tracking with configurable rates (HST, GST, Sales Tax)",
      "Revenue dashboard with daily and weekly totals",
    ],
    fullFeatures: [
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
    scenario: {
      title: "End of the week, zero admin",
      description:
        "Friday at 5 PM. You've completed 22 walks this week. Chester has already sent invoices for all of them. 18 are paid. 4 are due Monday. Your revenue dashboard shows $1,840 — up 12% from last week. You didn't open a spreadsheet once.",
    },
    seoTitle: "Payments & Invoicing for Pet Businesses | Chester",
    seoDescription:
      "Accept payments, send invoices, track revenue, and manage refunds with Stripe Connect. Built for pet service providers.",
  },
  {
    slug: "report-cards",
    label: "Report Cards",
    title: "The update every pet parent wants to receive",
    hook: "Per-pet observations with photos, mood tracking, and scheduled delivery after every visit.",
    description:
      "Structured, beautiful report cards with per-pet observations, photos, and a personal note. Configurable templates, scheduled delivery, and the highlight moment that makes clients share you with friends.",
    icon: "clipboard",
    heroBullets: [
      "Per-pet mood, energy, appetite, and potty tracking",
      "Photo and video attachments with captions",
      "Scheduled delivery — automatic after every visit",
      "Grooming and training-specific observation fields",
    ],
    fullFeatures: [
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
    scenario: {
      title: "The report card that gets you 3 referrals",
      description:
        "You finish a walk with Bella. In 90 seconds you log her mood (great), energy (4/5), appetite (normal), snap two photos, and add a highlight: 'Bella made a new friend at the park today!' The report card delivers at 4 PM. Her owner screenshots it and sends it to three friends. Two of them DM you by Friday.",
    },
    seoTitle: "Pet Report Cards for Dog Walkers & Sitters | Chester",
    seoDescription:
      "Send beautiful report cards after every visit — mood, energy, appetite tracking, photos, and scheduled delivery. The feature that gets referrals.",
  },
  {
    slug: "gps-tracking",
    label: "GPS Walk Tracking",
    title: "Show pet parents exactly where you went",
    hook: "Real-time location tracking with distance, route history, and weather context on every walk.",
    description:
      "Real-time location tracking during every walk. Distance is computed automatically, routes are stored, and weather context is captured — all attached to the report card.",
    icon: "map",
    heroBullets: [
      "Real-time location tracking during active walks",
      "Automatic distance computation",
      "Weather and environmental context captured at start",
      "Route stored and attached to the report card",
    ],
    fullFeatures: [
      "Real-time location tracking during active walks",
      "Automatic distance computation in kilometers",
      "Full GPS route history stored with every walk",
      "Accuracy filtering — discards low-quality readings automatically",
      "Smart deduplication — skips redundant points for clean routes",
      "Crash recovery — session backed up locally every 30 seconds",
      "Weather and environmental context captured at service start",
      "Route and distance attached to report card on completion",
    ],
    scenario: {
      title: "Peace of mind, every single walk",
      description:
        "A new client is nervous about leaving their puppy. After the first walk, they get a report card with a map showing the exact 2.4 km route through the park, the weather (14°C, partly cloudy), and 3 photos. They never worry again.",
    },
    seoTitle: "GPS Walk Tracking for Dog Walkers | Chester",
    seoDescription:
      "Track every walk in real-time with GPS routes, distance, and weather. Attach to report cards automatically. Peace of mind for pet parents.",
  },
  {
    slug: "pet-profiles-health",
    label: "Pet Profiles & Health",
    title: "Know every pet inside and out",
    hook: "Vaccinations, vet info, medical notes, and service-specific profiles for every pet.",
    description:
      "Detailed profiles with breed, medical history, vaccinations, vet info, and service-specific notes. Everything a provider needs before every visit.",
    icon: "heart",
    heroBullets: [
      "Vaccination tracking with due date reminders",
      "Vet information — name, clinic, phone number",
      "Grooming and training-specific profiles",
      "Pet document upload with approval workflow",
    ],
    fullFeatures: [
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
    scenario: {
      title: "Before the first visit",
      description:
        "A new client adds their dog. You see: Golden Retriever, 3 years, 70 lbs, neutered, allergic to chicken treats, vet is Dr. Patel at Happy Paws Clinic. Rabies vaccine current, Bordetella due next month. You show up prepared. The client is impressed.",
    },
    seoTitle: "Pet Profiles & Health Records for Pet Businesses | Chester",
    seoDescription:
      "Track vaccinations, vet info, medical notes, and health records for every pet. Grooming and training profiles included.",
  },
  {
    slug: "team-management",
    label: "Team Management & Pay",
    title: "From solo operator to growing team",
    hook: "Invite staff, assign roles with granular permissions, and export pay reports.",
    description:
      "Invite staff and contractors, assign roles with granular permissions, configure pay rates, and export pay reports — all without a spreadsheet in sight.",
    icon: "users",
    heroBullets: [
      "Owner, staff, and contractor roles",
      "10 granular permissions — manage billing, create bookings, issue refunds, and more",
      "Pay reports with CSV export for QuickBooks and Gusto",
      "Background check and insurance tracking",
    ],
    fullFeatures: [
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
    scenario: {
      title: "Hiring your first walker",
      description:
        "You bring on Jordan as a contractor. You invite them via email, set their role to 'Contractor' with permissions to create bookings and edit report cards (but not manage billing or issue refunds). You set their rate to $22/hr for walks. At the end of the month, you export a CSV with every booking, hours, and pay amount — and send it to your accountant.",
    },
    seoTitle: "Team Management for Pet Service Businesses | Chester",
    seoDescription:
      "Invite staff, assign roles with 10 granular permissions, configure pay rates, and export CSV pay reports. Built for growing pet businesses.",
  },
  {
    slug: "client-portal",
    label: "Client Portal",
    title: "An experience pet parents actually enjoy",
    hook: "Your clients get their own portal — free, forever. Book, pay, message, and manage pets.",
    description:
      "Your clients get their own portal — free, forever. They can request bookings, pay invoices, manage their pets, sign agreements, and message you directly.",
    icon: "user",
    heroBullets: [
      "Free for pet owners — no subscription, no fees, ever",
      "Book, pay, and message from one app",
      "Pet profile and vaccination management",
      "Push notifications for report cards, invoices, and messages",
    ],
    fullFeatures: [
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
    scenario: {
      title: "A client's first week",
      description:
        "Sarah downloads Chester, enters your business code, adds her dog Luna with vaccination records, and requests a recurring Tuesday/Thursday walk. You approve it in one tap. After the first walk, she gets a report card with photos. She pays the invoice in 10 seconds. She messages you to say Luna loved it. All from one app.",
    },
    seoTitle: "Client Portal for Pet Service Providers | Chester",
    seoDescription:
      "Give your clients a free portal to book services, pay invoices, manage pets, and message you directly. Built for pet service businesses.",
  },
  {
    slug: "messaging-notifications",
    label: "Messaging & Notifications",
    title: "Stay connected, in real time",
    hook: "Direct messaging with clients, push notifications, and granular delivery preferences.",
    description:
      "Direct messaging with clients, push notifications for everything that matters, and granular control over what gets sent and how.",
    icon: "message",
    heroBullets: [
      "Real-time messaging with photo and document sharing",
      "Push notifications via Expo Push API",
      "Per-type notification preferences — bookings, invoices, report cards, messages",
      "Multi-device support",
    ],
    fullFeatures: [
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
    scenario: {
      title: "The 3 PM check-in",
      description:
        "A client messages 'How was Bella today?' at 3 PM. You see it instantly, reply with a photo of Bella at the park and 'She had a great day — full report card coming at 4!' At 4 PM, the report card delivers automatically via push notification. The client taps to read it. Zero effort on your end.",
    },
    seoTitle: "Messaging & Notifications for Pet Businesses | Chester",
    seoDescription:
      "Real-time messaging, push notifications, and granular delivery preferences. Stay connected with your pet care clients.",
  },
  {
    slug: "insights-analytics",
    label: "Insights & Analytics",
    title: "Know every dog better than their owner",
    hook: "Automatic trend analysis across mood, energy, and appetite. Pre-session briefings for providers.",
    description:
      "Chester automatically analyzes report card data to detect trends in mood, energy, appetite, and more. Providers get pre-session briefings. Clients get peace of mind.",
    icon: "chart",
    heroBullets: [
      "Automatic trend detection — mood, energy, appetite, and more",
      "Provider pre-session briefings before every visit",
      "Revenue dashboard with period-over-period comparisons",
      "Minimum 5 bookings before insights — no noise, only signal",
    ],
    fullFeatures: [
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
    scenario: {
      title: "Catching what the owner missed",
      description:
        "Chester flags that Max's energy has been declining over the past 3 weeks. Before your next walk, you see the briefing: 'Energy trend: declining. Watch for lethargy.' You mention it to the owner. They take Max to the vet. Turns out he had a mild infection — caught early because of the data. The owner tells everyone about Chester.",
    },
    seoTitle: "Pet Insights & Business Analytics | Chester",
    seoDescription:
      "Automatic trend analysis for pet mood, energy, and appetite. Revenue dashboards and pre-session briefings for providers.",
  },
];

/* Cross-cutting capabilities */
export const crossCutting = [
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

export function getFeatureBySlug(slug: string): FeatureDomain | undefined {
  return featureDomains.find((d) => d.slug === slug);
}

export function getAllFeatureSlugs(): string[] {
  return featureDomains.map((d) => d.slug);
}
