import Button from "./Button";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta = "Get Started",
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
        highlighted
          ? "border-honey bg-off-white shadow-md"
          : "border-linen bg-off-white"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-honey px-4 py-1 text-xs font-bold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-xl">{name}</h3>
      <p className="mt-1 text-sm text-slate">{description}</p>

      <div className="mt-6 mb-6">
        <span className="font-heading text-4xl text-deep-forest">{price}</span>
        <span className="ml-1 text-sm text-slate">{period}</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-chester-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={highlighted ? "secondary" : "primary"}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  );
}
