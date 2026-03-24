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

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Floating phone + animated text
          Inspired by Flighty & Wispr Flow
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-chester-green">
        {/* Background image with heavy overlay */}
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

        {/* Floating ambient orbs */}
        <div className="parallax-orb absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-honey/5 blur-3xl" />
        <div className="parallax-orb absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-chester-green-mid/10 blur-3xl" style={{ animationDelay: "-10s" }} />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text side — staggered entrance */}
            <div>
              <span className="hero-animate hero-animate-1 mb-4 inline-block rounded-full border border-chester-green-mid/30 bg-chester-green-mid/10 px-4 py-1.5 text-sm font-medium text-chester-green-light">
                For Dog Walkers, Sitters, Trainers &amp; Groomers
              </span>
              <h1 className="hero-animate hero-animate-2 font-heading text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Run Your Pet Care Business
                <span className="block text-honey">in 10 Minutes a Day</span>
              </h1>
              <p className="hero-animate hero-animate-3 mt-6 max-w-lg text-lg leading-relaxed text-chester-green-mid">
                Chester handles booking, payments, messaging, and insights.
                You focus on the dogs.
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
                  See Features
                </Button>
              </div>
              <p className="hero-animate hero-animate-5 mt-4 text-xs text-chester-green-mid/60">
                No credit card required &bull; Setup in under 5 minutes
              </p>
            </div>

            {/* Phone — floating with glow */}
            <div className="hero-animate hero-animate-5 flex justify-center md:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Marquee — capability ticker ═══ */}
      <div className="border-b border-linen bg-off-white py-4">
        <Marquee
          items={[
            "Smart Scheduling",
            "Stripe Payments",
            "Real-Time Messaging",
            "Pet Insights",
            "Report Cards",
            "Team Management",
            "Client Portal",
            "Photo Sharing",
            "Push Notifications",
            "Revenue Dashboard",
          ]}
        />
      </div>

      {/* ═══ Social proof — counter cards ═══ */}
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

      {/* ═══ Lifestyle photo strip — warmth ═══ */}
      <LifestyleStrip variant="trio" />

      {/* ═══ Feature highlights — convergence visual + cards ═══ */}
      <Section blend="parchment">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Chester replaces your calendar, payment app, messaging tool, and
            spreadsheets with one beautiful platform.
          </p>
        </div>

        {/* Convergence animation */}
        <div className="mt-10">
          <ConvergenceVisual />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <CalendarIcon />,
              title: "Smart Scheduling",
              description: "Calendar with pending requests, upcoming walks, and completed sessions. Manage your whole week at a glance.",
            },
            {
              icon: <CreditCardIcon />,
              title: "Instant Payments",
              description: "Stripe-powered invoicing and checkout. Clients pay in one tap, funds land in your account automatically.",
            },
            {
              icon: <ChatBubbleIcon />,
              title: "Real-Time Messaging",
              description: "Chat directly with clients. Share updates, photos, and report cards without leaving the app.",
            },
            {
              icon: <ChartIcon />,
              title: "Pet Insights",
              description: "Automatically track mood, energy, and appetite trends across visits. Spot changes before they become problems.",
            },
          ].map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          FEATURE TABS — Superhuman-style deep dive
          Interactive tabs with animated phone screen
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

      {/* ═══ Two-sided marketplace — Owners ↔ Chester ↔ Providers ═══ */}
      <Section blend="parchment">
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
      <Section bg="parchment" blend="green">
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
              See Features
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
