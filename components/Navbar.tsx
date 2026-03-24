"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const links = [
  { href: "/features", label: "Features" },
  // { href: "/pricing", label: "Pricing" },  // Hidden until revenue model finalized
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-linen bg-off-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl text-chester-green">
          Chester
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate hover:text-chester-green transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contact" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-chester-green"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-linen bg-off-white px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-slate hover:text-chester-green"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contact" size="sm" className="mt-2 w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
