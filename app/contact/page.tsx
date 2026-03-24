"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      type: formData.get("type") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Something went wrong.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Header */}
      <Section bg="green">
        <div className="text-center">
          <h1 className="text-4xl text-white sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-chester-green-mid">
            Ready to get started? Have a question? We&apos;d love to hear from
            you.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-xl">
          {/* Form */}
          <div>
            <h2 className="text-2xl">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate">
              We typically respond within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-chester-green/20 bg-chester-green-surface p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-chester-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-xl">Message Sent!</h3>
                <p className="mt-2 text-sm text-slate">
                  Thanks for reaching out. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-deep-forest"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-linen bg-off-white px-4 py-3 text-sm text-deep-forest outline-none transition-colors focus:border-chester-green focus:ring-1 focus:ring-chester-green"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-deep-forest"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-linen bg-off-white px-4 py-3 text-sm text-deep-forest outline-none transition-colors focus:border-chester-green focus:ring-1 focus:ring-chester-green"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="mb-1 block text-sm font-medium text-deep-forest"
                  >
                    I am a...
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full rounded-xl border border-linen bg-off-white px-4 py-3 text-sm text-deep-forest outline-none transition-colors focus:border-chester-green focus:ring-1 focus:ring-chester-green"
                  >
                    <option value="provider">Pet Service Provider</option>
                    <option value="client">Pet Owner</option>
                    <option value="team">Team / Multi-staff Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-deep-forest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-linen bg-off-white px-4 py-3 text-sm text-deep-forest outline-none transition-colors focus:border-chester-green focus:ring-1 focus:ring-chester-green"
                    placeholder="Tell us about your business or ask us anything..."
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className={`w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* "Other Ways to Reach Us" sidebar — hidden until email aliases are set up
          <div>
            <h2 className="text-2xl">Other Ways to Reach Us</h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-linen bg-off-white p-6">
                <h3 className="text-lg">Email</h3>
                <p className="mt-1 text-sm text-slate">
                  For general inquiries and support
                </p>
                <a
                  href="mailto:support@chester.pet"
                  className="mt-2 inline-block text-sm font-medium text-chester-green hover:text-honey transition-colors"
                >
                  support@chester.pet
                </a>
              </div>

              <div className="rounded-2xl border border-linen bg-off-white p-6">
                <h3 className="text-lg">Sales</h3>
                <p className="mt-1 text-sm text-slate">
                  For Business plan inquiries and team onboarding
                </p>
                <a
                  href="mailto:sales@chester.pet"
                  className="mt-2 inline-block text-sm font-medium text-chester-green hover:text-honey transition-colors"
                >
                  sales@chester.pet
                </a>
              </div>

              <div className="rounded-2xl border border-linen bg-chester-green-surface p-6">
                <h3 className="text-lg">Ready to Get Started?</h3>
                <p className="mt-1 text-sm text-slate">
                  Skip the form — create your free account and start managing
                  your pet care business today.
                </p>
                <Button
                  href="/features"
                  variant="primary"
                  size="sm"
                  className="mt-4"
                >
                  See Features
                </Button>
              </div>
            </div>
          </div>
          */}
        </div>
      </Section>
    </>
  );
}
