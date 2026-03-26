import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import PhoneMockup from "@/components/PhoneMockup";

export const metadata: Metadata = {
  title: "For Pet Owners",
  description:
    "Chester is free for pet owners. Request bookings, view report cards, track your pet's health, and message your provider — all in one app.",
};

const benefits = [
  {
    emoji: "📅",
    title: "Request Bookings in Seconds",
    description:
      "Submit one-off or recurring schedule requests directly to your provider. Get instant confirmation when they approve.",
  },
  {
    emoji: "📋",
    title: "Detailed Report Cards After Every Visit",
    description:
      "See exactly how your pet's day went — mood, energy, appetite, potty, photos, and a personal note from your provider. Delivered automatically.",
  },
  {
    emoji: "📍",
    title: "See Where Your Dog Walked",
    description:
      "GPS routes show exactly where your provider went, how far they walked, and what the weather was like. Peace of mind, every time.",
  },
  {
    emoji: "📊",
    title: "Track Health Trends Over Time",
    description:
      "Chester analyzes your pet's mood, energy, and appetite across visits. See trends over 30, 60, or 90 days — spot changes before they become problems.",
  },
  {
    emoji: "💳",
    title: "Pay Invoices in One Tap",
    description:
      "Secure Stripe-powered checkout. View your payment history, see what's due, and pay instantly — no cash, no checks, no Venmo.",
  },
  {
    emoji: "🐾",
    title: "Manage Your Pet's Profile",
    description:
      "Keep breed, weight, medical notes, vaccinations, vet info, and emergency contacts all in one place. Upload documents and track due dates.",
  },
  {
    emoji: "💬",
    title: "Message Your Provider Directly",
    description:
      "Real-time chat with photo and document sharing. No more texting from your personal number. Everything stays organized in one thread.",
  },
  {
    emoji: "✍️",
    title: "Sign Agreements Digitally",
    description:
      "Review and e-sign service agreements from your phone. Your signature, IP address, and timestamp are recorded automatically.",
  },
  {
    emoji: "🔔",
    title: "Notifications You Actually Want",
    description:
      "Get push notifications for report cards, invoices, messages, and booking updates. Control exactly what you receive and how.",
  },
];

export default function ForPetOwnersPage() {
  return (
    <>
      {/* Header */}
      <Section bg="green" animate="none">
        <div className="text-center">
          <span className="hero-animate hero-animate-1 mb-4 inline-block rounded-full border border-honey/30 bg-honey/10 px-4 py-1.5 text-sm font-medium text-honey">
            Free Forever for Pet Owners
          </span>
          <h1 className="hero-animate hero-animate-2 text-4xl text-white sm:text-5xl">
            Everything You Need to
            <span className="block text-honey">Care for Your Pet</span>
          </h1>
          <p className="hero-animate hero-animate-3 mx-auto mt-4 max-w-xl text-chester-green-mid">
            Chester connects you with your pet care provider and keeps you in the
            loop — bookings, report cards, health tracking, payments, and messaging,
            all in one beautiful app.
          </p>
        </div>
      </Section>

      {/* Benefits grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-linen bg-off-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-honey/10 text-2xl">
                {benefit.emoji}
              </div>
              <h3 className="mt-4 font-heading text-lg">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section bg="parchment">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">How It Works</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            Your provider invites you to Chester. From there, everything is automatic.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Sign Up with Your Provider's Code",
              description: "Your provider gives you a business code. Sign up in under a minute — no credit card, no subscription.",
            },
            {
              step: "2",
              title: "Add Your Pets",
              description: "Create profiles with breed, weight, medical notes, vaccinations, and vet info. Everything your provider needs.",
            },
            {
              step: "3",
              title: "Book, Pay, and Stay in the Loop",
              description: "Request bookings, receive report cards with photos, track health trends, pay invoices, and message your provider.",
            },
          ].map((item, i) => (
            <div key={item.step} className="text-center">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-chester-green text-lg font-bold text-white"
              >
                {item.step}
              </div>
              <h3 className="mt-4 font-heading text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* App showcase */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            See What You Get
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate">
            A beautiful app designed around your pet&apos;s care.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <PhoneMockup src="/screenshots/client-dashboard.png" alt="Your dashboard" size="sm" animate={false} glow={false} />
            <p className="mt-4 font-heading text-sm text-deep-forest">Your Dashboard</p>
          </div>
          <div className="text-center">
            <PhoneMockup src="/screenshots/client-booking.png" alt="Book a service" size="sm" animate={false} glow={false} />
            <p className="mt-4 font-heading text-sm text-deep-forest">Book a Service</p>
          </div>
          <div className="text-center">
            <PhoneMockup src="/screenshots/client-payments.png" alt="Pay invoices" size="sm" animate={false} glow={false} />
            <p className="mt-4 font-heading text-sm text-deep-forest">Pay Invoices</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="green" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl">
            Your Provider Uses Chester?
            <span className="block text-honey">Download the App.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-chester-green-mid">
            It&apos;s free, it takes 60 seconds, and your provider will love you for it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
            <Button
              href="/features"
              variant="outline"
              size="lg"
              className="border-chester-green-mid/50 text-chester-green-light hover:border-honey hover:bg-honey/10 hover:text-white"
            >
              I&apos;m a Provider
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
