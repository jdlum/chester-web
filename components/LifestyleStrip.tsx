import Image from "next/image";

/**
 * Full-width lifestyle photo strip that breaks up content sections
 * with warm, human+animal imagery. Inspired by Juno Vet's approach
 * of using candid photography to create emotional connection.
 *
 * PLACEHOLDER: Replace all URLs with real Chester photography —
 * ideally candid shots of providers with dogs, grooming sessions,
 * training moments, and happy pet owners.
 */

const LIFESTYLE_IMAGES = {
  // Dog walker with multiple dogs in a park — golden hour warmth
  walkGroup: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
  // Close-up happy dog portrait
  happyDog: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
  // Person sitting with dog — cozy, warm
  ownerDog: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
  // Dog being groomed
  grooming: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
  // Dog training session
  training: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80",
};

type LifestyleStripProps = {
  variant?: "trio" | "single" | "duo";
};

export default function LifestyleStrip({ variant = "trio" }: LifestyleStripProps) {
  if (variant === "single") {
    return (
      <div className="relative h-48 w-full overflow-hidden sm:h-64 md:h-72">
        <Image
          src={LIFESTYLE_IMAGES.walkGroup}
          alt="PLACEHOLDER: Replace with real Chester provider photography"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-off-white via-transparent to-off-white" />
      </div>
    );
  }

  if (variant === "duo") {
    return (
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
            <Image
              src={LIFESTYLE_IMAGES.ownerDog}
              alt="PLACEHOLDER: Replace with pet owner + dog photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
            <Image
              src={LIFESTYLE_IMAGES.training}
              alt="PLACEHOLDER: Replace with provider working with dog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // trio — three rounded photos in a row
  return (
    <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          {
            src: LIFESTYLE_IMAGES.walkGroup,
            alt: "PLACEHOLDER: Replace with dog walker + dogs",
            aspectClass: "h-44 sm:h-52",
          },
          {
            src: LIFESTYLE_IMAGES.happyDog,
            alt: "PLACEHOLDER: Replace with happy dog close-up",
            aspectClass: "h-44 sm:h-52",
          },
          {
            src: LIFESTYLE_IMAGES.ownerDog,
            alt: "PLACEHOLDER: Replace with pet owner with dog",
            aspectClass: "h-44 sm:h-52",
          },
        ].map((img) => (
          <div
            key={img.alt}
            className={`relative overflow-hidden rounded-2xl ${img.aspectClass}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
