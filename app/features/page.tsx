import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { featureDomains, crossCutting } from "@/lib/feature-data";
import FeatureIcon from "@/components/FeatureIcon";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Chester offers — booking, report cards, GPS tracking, payments, pet health, team management, insights, and more.",
};

export default function FeaturesPage() {
  const totalFeatures = featureDomains.reduce((sum, d) => sum + d.fullFeatures.length, 0) +
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
            {totalFeatures}+ features across {featureDomains.length} categories.
            Here&apos;s what matters most.
          </p>
        </div>
      </Section>

      {/* Feature domain cards — concise, scannable */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureDomains.map((domain, i) => (
            <Link
              key={domain.slug}
              href={`/features/${domain.slug}`}
              className="group rounded-2xl border border-linen bg-off-white p-6 transition-all hover:border-honey/40 hover:shadow-lg hover:shadow-honey/5"
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-chester-green/10 text-chester-green transition-colors group-hover:bg-honey/10 group-hover:text-honey">
                  <FeatureIcon type={domain.icon} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-chester-green">
                  {domain.label}
                </span>
              </div>

              {/* Title + hook */}
              <h2 className="mt-4 font-heading text-xl">{domain.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {domain.hook}
              </p>

              {/* Hero bullets — the 3-4 that sell */}
              <ul className="mt-4 space-y-2">
                {domain.heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-deep-forest">
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
                    {b}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-chester-green transition-colors group-hover:text-honey">
                Learn more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

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
