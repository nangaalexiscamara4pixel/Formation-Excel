"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { PORTFOLIO_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/ressources", label: "Ressources" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-800/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-forest-600 ${
                  active ? "text-forest-700" : "text-ink/70"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink/70 transition-colors hover:text-forest-600"
          >
            Portfolio du formateur
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton groupInvite>S&apos;inscrire</WhatsAppButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-forest-800 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[61px] z-40 h-[calc(100vh-61px)] overflow-y-auto bg-paper md:hidden"
        >
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 text-base font-medium ${
                    active ? "bg-forest-50 text-forest-700" : "text-ink"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-3 text-base font-medium text-ink"
            >
              Portfolio du formateur
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            <div className="mt-4 border-t border-forest-800/10 pt-5">
              <WhatsAppButton groupInvite size="lg" className="w-full">
                S&apos;inscrire via WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
