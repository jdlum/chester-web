import type { Metadata } from "next";
import Section from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for pet service providers. Start free, scale as you grow.",
};

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/ month",
    description: "Perfect for getting started as a solo provider.",
    features: [
      "Up to 10 active clients",
      "Booking & schedule management",
      "Real-time messaging with clients",
      "Basic report cards (text observations)",
      "Pet profiles with medical notes",
      "Push notifications",
      "Client portal access for your clients",
      "Email support",
    ],
    highlighted: false,
    cta: "Start Free",
  },
  {
    name: "Professional",
    price: "$29",
    period: "/ month",
    description: "For established providers ready to grow.",
    features: [
      "Unlimited clients",
      "Stripe Connect payments & invoicing",
      "Photo report cards with mood, energy & appetite tracking",
      "GPS walk tracking with distance & routes",
      "Pet Insights engine (trend analysis)",
      "Vaccination & health document tracking",
      "Revenue dashboard with period comparisons",
      "Cancellation policies & automatic fee invoicing",
      "Service agreements with e-signatures",
      "Team management (up to 3 members)",
      "Pay reports with CSV export",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    price: "$79",
    period: "/ month",
    description: "For growing teams and multi-service businesses.",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "10 granular role permissions",
      "Custom report card templates per service type",
      "Advanced analytics & reporting",
      "Background check & insurance tracking",
      "Grooming & training-specific observation fields",
      "Partner marketplace access",
      "Custom branding",
      "Dedicated account manager",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const pricingFaqs = [
  {
    question: "Is there really a free plan?",
    answer:
      "Yes! The Starter plan is completely free for up to 10 active clients. No credit card required, no time limit. When you're ready to grow, upgrade to Professional.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Absolutely. Upgrade, downgrade, or cancel anytime. Changes take effect at the start of your next billing cycle. No contracts, no cancellation fees.",
  },
  {
    question: "What payment processing fees apply?",
    answer:
      "Chester charges a 5% platform fee on payments processed through Stripe Connect. Stripe's standard processing fees (2.9% + 30¢) also apply. You keep the rest.",
  },
  {
    question: "Do my clients have to pay anything?",
    answer:
      "Never. Chester is free for pet owners. Your clients can book, message, view report cards, and pay invoices without any subscription or fees.",
  },
  {
    question: "What happens if I exceed 10 clients on the free plan?",
    answer:
      "Your existing clients and data are never affected. You simply won't be able to add new clients until you upgrade to Professional or remove inactive clients.",
  },
  {
    question: "Does GPS tracking cost extra?",
    answer:
      "No. GPS walk tracking, distance computation, and route history are included in the Professional plan and above at no additional cost.",
  },
  {
    question: "Can my team members have different roles?",
    answer:
      "Yes. On the Business plan, you get 10 granular permissions — control who can manage billing, create bookings, issue refunds, view insights, and more. Staff and contractor roles are supported.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section bg="green">
        <div className="text-center">
          <h1 className="text-4xl text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-chester-green-mid">
            Start free. Scale when you&apos;re ready. No surprises.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Section>

      <Section bg="parchment">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl">Pricing Questions</h2>
          <div className="mt-8">
            {pricingFaqs.map((faq) => (
              <FaqAccordion key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
