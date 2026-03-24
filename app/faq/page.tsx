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
      "Yes! The Professional plan supports up to 3 team members, and the Business plan supports unlimited. Assign roles, distribute bookings, and manage your team from one dashboard.",
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
      "Absolutely. Chester supports dog walking, pet sitting, training, grooming, and any other pet service. You define your service types and pricing.",
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
      "Yes! Add as many pets as you need. Each pet gets its own profile with medical notes, behavior information, and visit history.",
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
