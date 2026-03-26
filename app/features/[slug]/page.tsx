import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FeatureIcon from "@/components/FeatureIcon";
import PhoneMockup from "@/components/PhoneMockup";
import { featureDomains, getFeatureBySlug, getAllFeatureSlugs } from "@/lib/feature-data";

/** Map feature slugs to screenshot paths */
const featureScreenshots: Record<string, string> = {
  "booking-scheduling": "/screenshots/schedule.png",
  "cancellation-policies": "/screenshots/feat-cancellation.png",
  "payments-invoicing": "/screenshots/billing.png",
  "report-cards": "/screenshots/feat-report-cards.png",
  "gps-tracking": "/screenshots/gps-tracking.png",
  "pet-profiles-health": "/screenshots/health.png",
  "team-management": "/screenshots/team.png",
  "client-portal": "/screenshots/client-dashboard.png",
  "messaging-notifications": "/screenshots/messages.png",
  "insights-analytics": "/screenshots/insights.png",
};

/* ── Static params for SSG ── */
export function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return { title: "Feature Not Found" };
  return {
    title: feature.seoTitle.replace(/ \| Chester$/, ""),
    description: feature.seoDescription,
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  // Find prev/next for navigation
  const currentIndex = featureDomains.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? featureDomains[currentIndex - 1] : null;
  const next = currentIndex < featureDomains.length - 1 ? featureDomains[currentIndex + 1] : null;

  return (
    <>
      {/* Breadcrumb + header */}
      <Section bg="green" animate="none">
        <div>
          {/* Breadcrumb */}
          <nav className="hero-animate hero-animate-1 mb-6 flex items-center gap-2 text-sm text-chester-green-mid">
            <Link href="/features" className="hover:text-honey transition-colors">
              Features
            </Link>
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-chester-green-light">{feature.label}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hero-animate hero-animate-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-chester-green-mid/20 text-white">
              <FeatureIcon type={feature.icon} />
            </div>
            <div>
              <span className="hero-animate hero-animate-1 inline-flex items-center gap-2 rounded-full bg-honey/10 px-3 py-1 text-xs font-semibold text-honey">
                {feature.fullFeatures.length} features
              </span>
            </div>
          </div>

          <h1 className="hero-animate hero-animate-2 mt-4 text-4xl text-white sm:text-5xl">
            {feature.title}
          </h1>
          <p className="hero-animate hero-animate-3 mt-4 max-w-2xl text-lg text-chester-green-mid">
            {feature.description}
          </p>
        </div>
      </Section>

      {/* Use case scenario */}
      <Section bg="parchment">
        <div className="mx-auto max-w-2xl rounded-2xl border border-honey/20 bg-honey/5 p-8">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-honey">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            Real-world scenario
          </div>
          <h3 className="font-heading text-xl text-deep-forest">{feature.scenario.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            {feature.scenario.description}
          </p>
        </div>
      </Section>

      {/* See it in action — phone mockup */}
      {featureScreenshots[slug] && (
        <Section>
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <h2 className="mb-8 text-center text-2xl sm:text-3xl">
              See It in Action
            </h2>
            <PhoneMockup
              src={featureScreenshots[slug]}
              alt={`${feature.label} screenshot`}
              size="lg"
              animate={false}
              glow={false}
            />
          </div>
        </Section>
      )}

      {/* Full feature list */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl">
            Everything Included
          </h2>
          <p className="mt-3 text-slate">
            Every capability within {feature.label}.
          </p>

          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {feature.fullFeatures.map((f, i) => (
              <li
                key={f}
                className="flex items-start gap-3 text-sm text-deep-forest"
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

      {/* Prev/Next navigation */}
      <Section bg="surface">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/features/${prev.slug}`}
              className="group rounded-2xl border border-linen bg-off-white p-5 transition-all hover:border-honey/40 hover:shadow-md"
            >
              <span className="text-xs text-slate">← Previous</span>
              <p className="mt-1 font-heading text-lg transition-colors group-hover:text-honey">
                {prev.label}
              </p>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/features/${next.slug}`}
              className="group rounded-2xl border border-linen bg-off-white p-5 text-right transition-all hover:border-honey/40 hover:shadow-md"
            >
              <span className="text-xs text-slate">Next →</span>
              <p className="mt-1 font-heading text-lg transition-colors group-hover:text-honey">
                {next.label}
              </p>
            </Link>
          ) : <div />}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="green" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl">
            Ready to Try {feature.label}?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-chester-green-mid">
            Start your free trial today. No credit card required.
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
              View All Features
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
