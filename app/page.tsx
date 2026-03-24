import Image from "next/image";
import Button from "@/components/Button";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureTabs from "@/components/FeatureTabs";
import Marquee from "@/components/Marquee";
import ConvergenceVisual from "@/components/ConvergenceVisual";
import MarketplaceHub from "@/components/MarketplaceHub";
import LifestyleStrip from "@/components/LifestyleStrip";

/* ──────────────────────────────────────────────
   STOCK IMAGE DIRECTORY — swap these with real assets
   ────────────────────────────────────────────── */
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=80",
  provider: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
  client: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80",
  avatar1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  avatar2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  avatar3: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
};

/* ── SVG Icons ── */
function CalendarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  );
}

function ChatBubbleIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-chester-green">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="PLACEHOLDER: Replace with Chester brand photography"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-forest via-chester-green to-chester-green/90" />
        </div>

        <div className="parallax-orb absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-honey/5 blur-3xl" />
        <div className="parallax-orb absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-chester-green-mid/10 blur-3xl" style={{ animationDelay: "-10s" }} />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="hero-animate hero-animate-1 mb-4 inline-block rounded-full border border-chester-green-mid/30 bg-chester-green-mid/10 px-4 py-1.5 text-sm font-medium text-chester-green-light">
                For Dog Walkers, Sitters, Trainers, Groomers &amp; Boarders
              </span>
              <h1 className="hero-animate hero-animate-2 font-heading text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Run Your Pet Care Business
                <span className="block text-honey">in 10 Minutes a Day</span>
              </h1>
              <p className="hero-animate hero-animate-3 mt-6 max-w-lg text-lg leading-relaxed text-chester-green-mid">
                Booking, payments, report cards, GPS tracking, pet health records,
                team management, and insights — all in one app. You focus on the dogs.
              </p>
              <div className="hero-animate hero-animate-4 mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary" size="lg">
                  Start Free Trial
                </Button>
                <Button
                  href="/features"
                  variant="outline"
                  size="lg"
                  className="border-chester-green-mid/50 text-chester-green-light hover:border-honey hover:bg-honey/10 hover:text-white"
                >
                  See All Features
                </Button>
              </div>
              <p className="hero-animate hero-animate-5 mt-4 text-xs text-chester-green-mid/60">
                No credit card required &bull; Setup in under 5 minutes
              </p>
            </div>

            <div className="hero-animate hero-animate-5 flex justify-center md:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Marquee — expanded capability ticker ═══ */}
      <div className="border-b border-linen bg-off-white py-4">
        <Marquee
          items={[
            "Smart Scheduling",
            "Stripe Payments",
            "Report Cards",
            "GPS Walk Tracking",
            "Pet Health Records",
            "Real-Time Messaging",
            "Pet Insights",
            "Team Management",
            "Client Portal",
            "Cancellation Policies",
            "Service Agreements",
            "Pay Reports",
            "Vaccination Tracking",
            "Push Notifications",
            "Revenue Dashboard",
            "Photo Sharing",
          ]}
        />
      </div>

      {/* ═══ Social proof ═══ */}
      <Section bg="surface" blend="white">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { value: "500+", label: "Pet Pros Trust Chester" },
            { value: "10,000+", label: "Pets Managed" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              className="reveal text-center rounded-2xl border border-linen bg-off-white p-8"
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <p className="font-heading text-4xl text-chester-green md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ Lifestyle strip ═══ */}
      <LifestyleStrip variant="trio" />

      {/* ═══ Feature highlights — 8 cards in 2 rows ═══ */}
      <Section blend="parchment">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Chester replaces your calendar, payment app, messaging tool, spreadsheets,
            and filing cabinet with one beautiful platform.
          </p>
        </div>

        <div className="mt-10">
          <ConvergenceVisual />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <CalendarIcon />,
              title: "Smart Scheduling",
              description: "One-off and recurring bookings, group walks, request approval, and cancellation enforcement.",
            },
            {
              icon: <CreditCardIcon />,
              title: "Payments & Invoicing",
              description: "Stripe-powered invoicing with tax tracking, refunds, and automatic cancellation fee billing.",
            },
            {
              icon: <ClipboardIcon />,
              title: "Report Cards",
              description: "Per-pet mood, energy, appetite, and potty tracking with photos, templates, and scheduled delivery.",
            },
            {
              icon: <MapIcon />,
              title: "GPS Walk Tracking",
              description: "Real-time location tracking with distance, route history, and weather context on every walk.",
            },
            {
              icon: <HeartIcon />,
              title: "Pet Health & Profiles",
              description: "Vaccinations, vet info, medical notes, grooming profiles, and document management for every pet.",
            },
            {
              icon: <UsersIcon />,
              title: "Team Management",
              description: "Invite staff, assign roles with 10 granular permissions, configure pay rates, and export CSV reports.",
            },
            {
              icon: <ChatBubbleIcon />,
              title: "Messaging & Notifications",
              description: "Real-time chat, push notifications, photo sharing, and per-type notification preferences.",
            },
            {
              icon: <ChartIcon />,
              title: "Insights & Analytics",
              description: "AI-powered pet trend analysis, provider briefings, revenue dashboard, and period-over-period comparisons.",
            },
          ].map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/features" variant="outline" size="md">
            See All 120+ Features
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          FEATURE TABS — expanded to 8
          ═══════════════════════════════════════════ */}
      <Section bg="parchment" blend="white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            See Chester in Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Tap a feature to see how it works — right from your phone.
          </p>
        </div>
        <div className="mt-10">
          <FeatureTabs />
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          WHY CHESTER — the 3 differentiators
          ═══════════════════════════════════════════ */}
      <Section blend="parchment">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">What Makes Chester Different</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Other apps handle bookings. Chester understands pets.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              emoji: "📋",
              title: "Report Cards That Build Trust",
              description:
                "Structured per-pet observations — mood, energy, appetite, potty, photos — delivered automatically after every visit. The update every pet parent wants to receive. Three new referrals a month from parents sharing them.",
            },
            {
              emoji: "📍",
              title: "GPS Tracking on Every Walk",
              description:
                "Show pet parents exactly where you went, how far you walked, and what the weather was like. Routes are stored and attached to the report card automatically. No extra steps.",
            },
            {
              emoji: "📊",
              title: "Pet Insights Engine",
              description:
                "Chester analyzes report card data across visits to detect trends in mood, energy, and appetite. Providers get pre-session briefings. Clients get peace of mind. No other platform does this.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="reveal rounded-2xl border border-linen bg-off-white p-6"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-chester-green/10 text-2xl">
                {item.emoji}
              </div>
              <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ Two-sided marketplace ═══ */}
      <Section bg="parchment" blend="white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Two Portals, One Platform</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Chester connects pet owners with the providers they need —
            and gives providers a single place to manage their entire business.
          </p>
        </div>
        <div className="mt-10">
          <MarketplaceHub />
        </div>
      </Section>

      {/* ═══ Testimonials ═══ */}
      <Section blend="green">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Loved by Pet Pros</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Hear from providers who switched to Chester.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              quote: "Chester cut my admin time in half. I used to spend an hour every night on invoices — now it's automatic.",
              name: "Sarah M.",
              role: "Dog Walker, Austin TX",
              avatar: IMAGES.avatar1,
            },
            {
              quote: "My clients love the report cards. Three new referrals last month just from parents sharing them.",
              name: "James K.",
              role: "Pet Sitter, Denver CO",
              avatar: IMAGES.avatar2,
            },
            {
              quote: "Finally an app that doesn't look like it was built in 2010. My clients actually enjoy using it.",
              name: "Mia R.",
              role: "Dog Trainer, Portland OR",
              avatar: IMAGES.avatar3,
            },
          ].map((t, i) => (
            <div
              key={t.name}
              className="reveal card-hover rounded-2xl border border-linen bg-off-white p-6"
              style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <div className="mb-3 flex gap-0.5 text-honey">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={`PLACEHOLDER: Replace with real photo of ${t.name}`}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-deep-forest">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ Lifestyle duo strip ═══ */}
      <LifestyleStrip variant="duo" />

      {/* ═══ Final CTA ═══ */}
      <Section bg="green" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to Simplify Your
            <span className="block text-honey">Pet Care Business?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-chester-green-mid">
            Join hundreds of pet professionals who spend less time on admin and
            more time doing what they love.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started Free
            </Button>
            <Button
              href="/features"
              variant="outline"
              size="lg"
              className="border-chester-green-mid/50 text-chester-green-light hover:border-honey hover:bg-honey/10 hover:text-white"
            >
              See All Features
            </Button>
          </div>
          <p className="mt-4 text-xs text-chester-green-mid/60">
            Free plan available &bull; No credit card required
          </p>
        </div>
      </Section>
    </>
  );
}
