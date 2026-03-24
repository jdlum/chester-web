"use client";

import { useState } from "react";

type FaqAccordionProps = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ question, answer }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-linen">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4 font-medium text-deep-forest">{question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-slate transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-slate">{answer}</p>
      </div>
    </div>
  );
}
