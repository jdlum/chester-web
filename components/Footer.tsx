import Link from "next/link";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/for-pet-owners", label: "For Pet Owners" },
  // { href: "/pricing", label: "Pricing" },  // Hidden until revenue model finalized
  // { href: "/faq", label: "FAQ" },  // Hidden until FAQ content finalized
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-linen bg-chester-green text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-heading text-2xl">Chester</span>
            <p className="mt-3 max-w-sm text-sm text-chester-green-mid">
              The all-in-one platform for independent pet care professionals.
              Booking, payments, report cards, GPS tracking, pet health, team
              management, and insights — so you can focus on the care.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-chester-green-mid">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-chester-green-light hover:text-honey transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-chester-green-mid">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-chester-green-light hover:text-honey transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-chester-green-mid/30 pt-6 text-center text-xs text-chester-green-mid">
          &copy; {new Date().getFullYear()} Chester. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
