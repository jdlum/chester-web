import type { Metadata } from "next";
import Section from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Chester for providers and pet owners.",
};

const providerFaqs = [
  {
    question: "How long does it take to set up Chester?",
    answer:
      "Under 5 minutes. Create your account, add your services and pricing, and you're ready to accept bookings. No demo call required.",
  },
  {
    question: "Do my clients need to create an account?",
    answer:
      "Clients create a free account to book services, message you, and pay invoices. There's no cost or subscription for them — ever.",
  },
  {
    question: "How do payments work?",
    answer:
      "Chester uses Stripe Connect. You complete a quick onboarding (takes about 2 minutes), then clients can pay invoices with one tap. Funds are deposited directly to your bank account.",
  },
  {
    question: "What fees does Chester charge?",
    answer:
      "Chester charges a 5% platform fee on payments processed through the app. Stripe's standard processing fees (2.9% + 30¢ per transaction) also apply. There are no hidden fees or surprise charges.",
  },
  {
    question: "Can I manage a team?",
    answer:
      "Yes. The Professional plan supports up to 3 team members, and the Business plan supports unlimited. Assign roles, distribute bookings, and manage your team from one dashboard.",
  },
  {
    question: "What are report cards?",
    answer:
      "Report cards are detailed summaries you send to clients after each visit. They include per-pet observations (mood, energy, appetite), photos, and notes. Clients love them — they build trust and keep people coming back.",
  },
  {
    question: "What are pet insights?",
    answer:
      "Chester automatically analyzes report card data over time to detect trends in each pet's mood, energy, and appetite. If a dog's energy has been declining over the past few visits, you'll see it highlighted — helping you provide better care and communicate proactively with owners.",
  },
  {
    question: "Can I use Chester for different service types?",
    answer:
      "Yes. Chester supports dog walking, pet sitting, training, grooming, and boarding. Each service type gets its own booking settings, report card templates, cancellation policies, and pay rates.",
  },
  {
    question: "How does GPS walk tracking work?",
    answer:
      "When you start a walk, Chester tracks your route in real-time using your phone's GPS. Distance is computed automatically, and the route is attached to the report card when you finish. Weather context is captured at the start. Pet parents can see exactly where you went.",
  },
  {
    question: "How do cancellation policies work?",
    answer:
      "You configure cancellation policies per service type. Set a free cancellation window (e.g., 24 hours before), a late cancellation fee (fixed or percentage), and a no-show fee. When a client cancels late or no-shows, Chester automatically generates a fee invoice. You can also waive fees with a reason on a case-by-case basis.",
  },
  {
    question: "What's included in a report card?",
    answer:
      "Report cards include per-pet observations for mood, energy, appetite, and potty, plus a personal provider note, a highlight moment (used in push notifications), photos and videos, and optional internal notes only you can see. Grooming visits can include coat condition and products used. Training visits can include session progress and homework. Templates are configurable per service type.",
  },
  {
    question: "Can I generate pay reports for my team?",
    answer:
      "Yes. On Professional and Business plans, you can generate pay reports for any date range. Reports show per-booking itemization with date, service type, client, duration, rate, and pay amount. Export to CSV for QuickBooks or Gusto.",
  },
  {
    question: "How do service agreements work?",
    answer:
      "Create agreement templates per service type. When a client signs up, they review and e-sign the agreement from their phone. Chester tracks the signature, IP address, timestamp, and version. Agreements can expire and be re-signed as needed.",
  },
  {
    question: "Can I reassign a booking to another team member?",
    answer:
      "Yes. If a staff member can't make a booking, you can reassign it to another team member with handoff notes so they have full context. The booking history tracks the reassignment.",
  },
];

const clientFaqs = [
  {
    question: "Is Chester free for pet owners?",
    answer:
      "Yes, completely free. There's no subscription, no per-booking fee, and no hidden charges for pet owners. You only pay for the services your provider offers.",
  },
  {
    question: "How do I see what my dog did during a visit?",
    answer:
      "Your provider sends report cards after each visit with photos, mood/energy/appetite observations, and notes. You can also see trend data over time in the pet insights section.",
  },
  {
    question: "Can I message my provider directly?",
    answer:
      "Yes. Chester includes real-time messaging so you can communicate with your provider anytime. You'll also get push notifications for new messages and report cards.",
  },
  {
    question: "How do I pay for services?",
    answer:
      "When your provider sends an invoice, you'll see it in the Payments section. Tap 'Pay Now' and complete the checkout securely through Stripe. It takes about 10 seconds.",
  },
  {
    question: "Can I manage multiple pets?",
    answer:
      "Yes. Add as many pets as you need. Each pet gets its own profile with medical notes, behavior information, vaccination tracking, vet info, and visit history.",
  },
  {
    question: "Can I upload vaccination records?",
    answer:
      "Yes. Upload proof of vaccination documents directly from your phone. Your provider can review and approve them. Chester tracks due dates so you never miss a renewal.",
  },
  {
    question: "Can I see where my dog walked?",
    answer:
      "Yes. If your provider uses GPS tracking during walks, you'll see the route, distance, and weather conditions attached to the report card. You can see exactly where they went.",
  },
  {
    question: "What are pet insights?",
    answer:
      "Chester analyzes your pet's report card data over time to detect trends in mood, energy, appetite, and more. You'll see a summary of how your pet is doing across visits — improving, stable, or something to watch. It takes at least 5 visits before insights are generated.",
  },
];

const generalFaqs = [
  {
    question: "Is my data secure?",
    answer:
      "Chester uses Supabase with enterprise-grade encryption, Row Level Security (RLS) on every table, and regular backups. Your data is protected with the same standards used by major tech companies.",
  },
  {
    question: "Does Chester work on iOS and Android?",
    answer:
      "Yes. Chester is a cross-platform mobile app available on both iOS and Android. It's built with modern technology to feel native on both platforms.",
  },
  {
    question: "How do I get support?",
    answer:
      "Starter plan users get email support. Professional and Business plan users get priority support with faster response times. You can reach us at support@chester.pet.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no contracts or cancellation fees. You can downgrade to the free Starter plan or cancel your subscription at any time. Your data is yours.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <Section bg="green">
        <div className="text-center">
          <h1 className="text-4xl text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-chester-green-mid">
            Everything you need to know about Chester, in one place.
          </p>
        </div>
      </Section>

      {/* Provider FAQs */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl">For Providers</h2>
          <div className="mt-6">
            {providerFaqs.map((faq) => (
              <FaqAccordion key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Section>

      {/* Client FAQs */}
      <Section bg="surface">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl">For Pet Owners</h2>
          <div className="mt-6">
            {clientFaqs.map((faq) => (
              <FaqAccordion key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Section>

      {/* General FAQs */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl">General</h2>
          <div className="mt-6">
            {generalFaqs.map((faq) => (
              <FaqAccordion key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="parchment">
        <div className="text-center">
          <h2 className="text-3xl">Still Have Questions?</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate">
            We&apos;d love to hear from you. Reach out and we&apos;ll get back
            to you within 24 hours.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
