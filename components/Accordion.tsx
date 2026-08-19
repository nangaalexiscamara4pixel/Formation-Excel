"use client";

import { useState, type ReactNode } from "react";

type AccordionItemProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function AccordionItem({ title, subtitle, defaultOpen = false, children }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="cell-card overflow-hidden rounded-xl bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-forest-50/60 sm:px-6"
      >
        <span>
          <span className="block font-display text-base font-semibold text-forest-900 sm:text-lg">
            {title}
          </span>
          {subtitle && <span className="mt-0.5 block text-sm text-ink-soft">{subtitle}</span>}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`h-5 w-5 shrink-0 text-forest-600 transition-transform motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && <div className="border-t border-forest-800/10 px-5 py-6 sm:px-6">{children}</div>}
    </div>
  );
}

export default function Accordion({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>;
}
