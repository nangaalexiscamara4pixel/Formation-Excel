import Link from "next/link";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { PORTFOLIO_URL, WHATSAPP_GROUP_URL, CONTACT_EMAIL, FACEBOOK_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-forest-800/10 bg-forest-900 text-forest-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-sand-400 font-display text-base font-bold text-forest-900">
                X
              </span>
              <span className="font-display text-base font-semibold text-white">
                FORMEZ-VOUS EN EXCEL GRATUITEMENT
              </span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-200">
              Formation Excel 100% gratuite et en ligne, du niveau zéro à avancé. Cohorte de
              septembre 2026 — inscriptions et suivi uniquement par WhatsApp.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <WhatsAppButton groupInvite variant="outline" className="!border-sand-400 !text-sand-300 hover:!bg-sand-400/10">
                Rejoindre le groupe WhatsApp
              </WhatsAppButton>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Envoyer un email"
                title="Envoyer un email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-forest-200 transition-colors hover:border-sand-400 hover:text-sand-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook"
                title="Page Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-forest-200 transition-colors hover:border-sand-400 hover:text-sand-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.53-1.5H16.5V4.3c-.27-.04-1.2-.11-2.28-.11-2.26 0-3.8 1.38-3.8 3.9V10.5H8v3h2.42V21h3.08Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-sand-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-200">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/programme" className="hover:text-white">Programme</Link></li>
              <li><Link href="/ressources" className="hover:text-white">Ressources</Link></li>
              <li>
                <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Portfolio du formateur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-sand-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-forest-200">
              <li>
                <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sand-300">
                  +40 757 256 574 (WhatsApp)
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Page Facebook
                </a>
              </li>
              <li>Pas de compte, pas de formulaire</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-forest-300">
          © {new Date().getFullYear()} Formez-vous en Excel Gratuitement. Formation en ligne, gratuite,
          sans inscription classique — tout se passe sur WhatsApp.
        </div>
      </div>
    </footer>
  );
}
