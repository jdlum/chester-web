import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chester started with a Shih-Poo named Chester and a decade of tech experience. Learn the story behind the platform built for pet care providers.",
};

/* ──────────────────────────────────────────────
   PHOTO DIRECTORY — real Chester photos
   Save these to chester-web/public/chester/
   ────────────────────────────────────────────── */
const PHOTOS = {
  justinChester: "/chester/justin-chester.jpg",    // Christmas tree photo — founder + Chester
  chesterPark1: "/chester/chester-park-1.jpg",      // Chester at park, smiling
  chesterPuppy: "/chester/chester-puppy.jpg",       // Puppy Chester by cabinet
  chesterPark2: "/chester/chester-park-2.jpg",      // Chester at park, tongue out
  chesterSmile: "/chester/chester-smile.jpg",       // Chester close-up, big smile
};

const values = [
  {
    title: "Zero Friction Before Value",
    description:
      "No demo calls, no credit cards, no 30-minute onboarding flows. You should be managing your first booking within 5 minutes of signing up.",
  },
  {
    title: "Mobile Is the Product",
    description:
      "Pet pros work on their feet, between walks, in the park. Chester is built mobile-first — not a desktop app squeezed onto a small screen.",
  },
  {
    title: "Simplicity Is the Feature",
    description:
      "The best tool is the one you actually use. Chester is designed to get out of your way, so managing your business feels effortless, not like another job.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ Header ═══ */}
      <Section bg="green" animate="none">
        <div className="text-center">
          <h1 className="hero-animate hero-animate-1 text-4xl text-white sm:text-5xl">
            It Started With a Dog
          </h1>
          <p className="hero-animate hero-animate-2 mx-auto mt-4 max-w-xl text-chester-green-mid">
            Every great product has an origin story. Ours has four paws, a curly coat, and an opinion about everything.
          </p>
        </div>
      </Section>

      {/* ═══ Meet the Dog ═══ */}
      <Section bg="parchment">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Chester + Justin photo */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg md:h-[28rem]">
            <Image
              src={PHOTOS.justinChester}
              alt="Justin and Chester — the founder and the dog who started it all"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Story */}
          <div>
            <span className="mb-3 inline-block rounded-full bg-honey/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-honey">
              Meet Chester
            </span>
            <h2 className="text-3xl sm:text-4xl">
              The Dog Behind It All
            </h2>
            <div className="mt-5 space-y-4 text-slate leading-relaxed">
              <p>
                Chester is a Shih-Poo with more personality than most people I know. He&apos;s my firstborn, my co-founder in spirit, and the entire reason this company exists.
              </p>
              <p>
                When I got Chester, I did what any first-time dog parent does: I went all in. Dog walkers, groomers, trainers, sitters. But every provider used a different system. Bookings over text. Invoices via email. Updates through a mix of apps that never talked to each other. I was managing Chester&apos;s care across five platforms and a dozen message threads.
              </p>
              <p className="font-medium text-deep-forest">
                I thought: there has to be a better way.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ Chester photo gallery strip ═══ */}
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { src: PHOTOS.chesterPark1, alt: "Chester enjoying a sunny day at the park", pos: "object-center" },
            { src: PHOTOS.chesterPuppy, alt: "Chester as a puppy — the early days", pos: "object-center" },
            { src: PHOTOS.chesterSmile, alt: "Chester's signature smile", pos: "object-top" },
          ].map((img) => (
            <div key={img.alt} className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-transform duration-700 hover:scale-105 ${img.pos}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ═══ The Founder ═══ */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="mb-3 inline-block rounded-full bg-chester-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-chester-green">
              The Founder
            </span>
            <h2 className="text-3xl">From Dog Dad to Builder</h2>
            <div className="mt-5 space-y-4 text-slate leading-relaxed">
              <p>
                I&apos;m Justin. I&apos;ve spent the last decade in tech, primarily in operational roles. Through Chester, I got to know his walkers, his groomer, his trainer, and his sitter as people who genuinely love what they do. They&apos;re incredible at their craft, but buried in logistics. And the tools they had weren&apos;t built for how they actually work: on their feet, between walks, needing something that runs from their phone in under a minute.
              </p>
              <p className="font-medium text-deep-forest">
                So I built Chester — the platform I wished existed as a pet owner, designed for the providers I admire most.
              </p>
            </div>
          </div>

          {/* Chester at the park */}
          <div className="relative order-1 h-80 w-full overflow-hidden rounded-2xl shadow-lg md:order-2 md:h-[28rem]">
            <Image
              src={PHOTOS.chesterPark2}
              alt="Chester at the park — where the idea for the platform was born"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* ═══ What We Believe ═══ */}
      <Section bg="surface">
        <div className="text-center">
          <h2 className="text-3xl">What We Believe</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate">
            The principles that guide every feature, every screen, every decision.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-hover rounded-2xl border border-linen bg-off-white p-6"
            >
              <h3 className="text-lg">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ Why This Matters ═══ */}
      <Section bg="parchment">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl">Why This Matters</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate">
            <p>
              The pet care industry is booming, but the people who power it are underserved. They deserve tools that are as thoughtful, reliable, and beautiful as the care they provide.
            </p>
            <p>
              Chester is our attempt to build something people actually love to use - a platform that feels like it was made by someone who gets it, because it was. We&apos;re not trying to replace everything overnight. We&apos;re trying to earn the trust of one provider at a time.
            </p>
            <p className="font-medium text-deep-forest text-xl">
              We&apos;re building this in Toronto, and we&apos;re just getting started.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <Section bg="green" animate="scale">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl">
            Built for the People Who Care
            <span className="block text-honey">for Our Pets</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-chester-green-mid">
            Join the community of providers who chose a better tool -
            built by someone who knows their work from the other side of the leash.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started Free
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
