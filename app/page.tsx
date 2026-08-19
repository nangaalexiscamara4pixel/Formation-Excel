import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import Accordion, { AccordionItem } from "@/components/Accordion";
import { niveaux, recapitulatif } from "@/lib/data/programme";
import { PORTFOLIO_URL, formateur } from "@/lib/constants";

const STATS = [
  { value: "3", label: "niveaux progressifs" },
  { value: "16", label: "modules complets" },
  { value: "100%", label: "gratuit, en ligne" },
  { value: "Sept. 2026", label: "démarrage cohorte" },
];

const BENEFITS = [
  {
    icon: "trend",
    title: "Zéro à avancé, un seul parcours",
    text: "Aucune base requise pour démarrer : le programme part de l'interface Excel et monte progressivement jusqu'aux tableaux croisés dynamiques avancés et aux fonctions matricielles.",
  },
  {
    icon: "grid",
    title: "Des cas pratiques réels",
    text: "Tous les exercices utilisent des données réalistes — ventes, RH, finance, stock — pour un transfert direct et immédiat en entreprise.",
  },
  {
    icon: "check",
    title: "Une progression validée",
    text: "Chaque niveau se termine par une évaluation notée (QCM, seuil 70%) qui conditionne l'accès au niveau suivant : vous avancez avec de vrais acquis.",
  },
  {
    icon: "badge",
    title: "Un certificat à la clé",
    text: "Un certificat global est délivré après validation des 3 niveaux, à valoriser directement sur un CV ou un profil LinkedIn.",
  },
  {
    icon: "gift",
    title: "100% gratuit, sans piège",
    text: "Pas de frais caché, pas de compte à créer, pas de formulaire à remplir. Tout se passe simplement, par message, sur WhatsApp.",
  },
  {
    icon: "chat",
    title: "Un accompagnement direct",
    text: "Sessions live sur Google Meet ou Zoom, avec un groupe WhatsApp de cohorte pour poser vos questions et suivre le calendrier exact.",
  },
];

const BENEFIT_ICON_PATHS: Record<string, string> = {
  trend: "M3 17l5-5 4 4 8-8M21 9v4h-4",
  grid: "M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z",
  check: "M4.5 12.75l6 6 9-13.5",
  badge: "M12 3l2.6 1.9 3.2-.3 1 3.1 2.6 1.9-1.3 3 1.3 3-2.6 1.9-1 3.1-3.2-.3L12 21l-2.6-1.9-3.2.3-1-3.1-2.6-1.9 1.3-3-1.3-3 2.6-1.9 1-3.1 3.2.3L12 3ZM9.5 12.5l1.8 1.8 3.2-3.8",
  gift: "M12 8v13M4 12v9h16v-9M2 8h20v4H2V8Zm5-4c-1.5 0-2.5 1-2.5 2s1 2 2.5 2h5c0-2.5-1.5-4-2.5-4Zm10 0c1.5 0 2.5 1 2.5 2s-1 2-2.5 2h-5c0-2.5 1.5-4 2.5-4Z",
  chat: "M4 5h16v10H8l-4 4V5Z",
};

function BenefitIcon({ slug }: { slug: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={BENEFIT_ICON_PATHS[slug]} />
    </svg>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Explication",
    text: "Chaque module commence par une explication claire de la notion ou de la fonction Excel abordée.",
  },
  {
    n: "02",
    title: "Démonstration",
    text: "La notion est démontrée en direct sur des données concrètes, pour bien voir la mécanique à l'œuvre.",
  },
  {
    n: "03",
    title: "Exercice guidé",
    text: "Vous reproduisez la démonstration pas à pas, avec un jeu de données fourni dans le classeur pratique.",
  },
  {
    n: "04",
    title: "Cas pratique autonome",
    text: "Vous appliquez seul(e) la notion sur un nouveau cas, pour vérifier que l'acquis est vraiment installé.",
  },
];

const FAQ = [
  {
    q: "La formation est-elle vraiment 100% gratuite ?",
    a: "Oui. L'ensemble du programme — les 3 niveaux, les 16 modules, les classeurs pratiques et les fiches d'évaluation — est entièrement gratuit. Aucun frais caché, aucune carte bancaire demandée.",
  },
  {
    q: "Faut-il déjà connaître Excel pour commencer ?",
    a: "Non, aucune connaissance préalable n'est requise pour démarrer le Niveau 1. Le programme est conçu pour partir d'une découverte totale d'Excel.",
  },
  {
    q: "De quel matériel ai-je besoin ?",
    a: "Un ordinateur (Windows ou Mac) avec Excel 2016 ou une version ultérieure, ou Microsoft 365. Aucune autre installation n'est nécessaire.",
  },
  {
    q: "Comment se déroulent les sessions live ?",
    a: "Les sessions live se déroulent sur Google Meet ou Zoom. Le lien et le calendrier exact seront communiqués directement dans le groupe WhatsApp de la cohorte, une fois l'effectif connu.",
  },
  {
    q: "Comment s'inscrire à la cohorte de septembre 2026 ?",
    a: "Uniquement via WhatsApp au +40 757 256 574. Il n'y a pas de formulaire d'inscription classique ni de compte à créer : un simple message suffit pour démarrer les démarches.",
  },
  {
    q: "Qu'est-ce que j'obtiens à la fin de la formation ?",
    a: "Après validation des 3 niveaux (QCM à 70% de seuil de réussite pour chacun), un certificat global est délivré. Vous pouvez le valoriser directement sur un CV ou un profil LinkedIn.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grid-surface relative overflow-hidden border-b border-forest-800/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-forest-900 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                100% gratuit
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-forest-700">
                <span className="h-1.5 w-1.5 rounded-full bg-forest-500" aria-hidden="true" />
                Cohorte de septembre 2026 · inscriptions ouvertes
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-forest-900 sm:text-5xl md:text-6xl">
              Formez-vous en <span className="text-forest-500">Excel</span>, gratuitement, du zéro
              à l&apos;avancé.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Un programme complet en 3 niveaux et 16 modules, 100% en ligne : interface Excel,
              formules, tableaux croisés dynamiques, fonctions matricielles — jusqu&apos;au
              certificat. Aucune base requise pour démarrer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton groupInvite size="lg">
                S&apos;inscrire sur WhatsApp
              </WhatsAppButton>
              <Link
                href="/programme"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-800/15 px-7 py-3.5 text-base font-medium text-forest-800 transition-colors hover:border-forest-500 hover:text-forest-600"
              >
                Voir le programme complet
              </Link>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-forest-800/10 bg-forest-800/10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-5 py-6 text-center sm:text-left">
                <dd className="font-display text-2xl font-bold text-forest-700 sm:text-3xl">{s.value}</dd>
                <dt className="mt-1 text-xs text-ink-soft sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            Pourquoi cette formation
          </h2>
          <p className="mt-3 text-ink-soft">
            Un programme pensé pour un vrai transfert de compétences, pas pour empiler des vidéos.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="cell-card rounded-xl bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                <BenefitIcon slug={b.icon} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-forest-800">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT CA MARCHE */}
      <section className="border-y border-forest-800/10 bg-forest-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Comment ça marche</h2>
            <p className="mt-3 text-forest-200">
              Chaque module — sans exception — suit la même logique pédagogique en 4 étapes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl font-bold text-sand-400">{step.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-200">{step.text}</p>
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-forest-500 lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO DU FORMATEUR */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-forest-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-forest-700">
            Le formateur
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            Qui vous accompagne
          </h2>
          <p className="mt-3 text-ink-soft">
            Une pédagogie construite par un praticien de la donnée, pas seulement un enseignant.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="group cell-card relative overflow-hidden rounded-2xl bg-white p-7 transition-shadow hover:shadow-lg sm:p-9">
            <span
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sand-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70 motion-reduce:hidden"
              aria-hidden="true"
            />

            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-forest-400 to-forest-800 font-display text-lg font-bold text-white shadow-md shadow-forest-900/20">
                NC
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-forest-900 sm:text-2xl">
                  {formateur.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-forest-500">{formateur.role}</p>
              </div>
            </div>

            <p className="relative mt-5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
              {formateur.bio}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {formateur.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-forest-200 bg-forest-50 px-3 py-1.5 text-xs font-medium text-forest-700 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-forest-100 motion-reduce:hover:translate-y-0"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="relative mt-7">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center justify-center gap-2 rounded-full bg-forest-500 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-forest-600"
              >
                Voir le portfolio complet
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 rounded-2xl bg-forest-900 p-7 sm:p-9">
            {formateur.highlights.map((h, i) => (
              <div
                key={h}
                className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10"
              >
                <span className="font-display text-2xl font-bold text-sand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm leading-relaxed text-forest-100">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APERCU NIVEAUX */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              Les 3 niveaux du parcours
            </h2>
            <p className="mt-3 text-ink-soft">
              16 modules au total, du premier contact avec Excel jusqu&apos;aux analyses les plus
              avancées.
            </p>
          </div>
          <Link href="/programme" className="text-sm font-semibold text-forest-600 hover:text-forest-700">
            Voir le détail des 16 modules →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {niveaux.map((n, i) => (
            <Link
              key={n.id}
              href={`/programme#${n.slug}`}
              className="group cell-card flex flex-col rounded-xl bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-forest-600">
                {recapitulatif[i].modules} modules
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-forest-900">{n.title}</h3>
              <p className="text-sm font-medium text-forest-500">{n.subtitle}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{n.objectif}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 group-hover:text-forest-700">
                Explorer ce niveau
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CERTIFICATION / PREREQUIS */}
      <section className="border-y border-forest-800/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              Certification &amp; prérequis
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-400 text-xs font-bold text-forest-900">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Chaque niveau comprend un QCM de validation des connaissances avec un seuil de
                  réussite de 70%, qui conditionne l&apos;accès au niveau suivant.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-400 text-xs font-bold text-forest-900">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Un certificat global est délivré après validation des 3 niveaux, à valoriser
                  directement sur un CV ou un profil LinkedIn.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-forest-900">Prérequis matériel</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" aria-hidden="true" />
                Un ordinateur Windows ou Mac, avec Excel 2016 ou une version ultérieure, ou
                Microsoft 365.
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" aria-hidden="true" />
                Aucune connaissance préalable requise pour démarrer le Niveau 1.
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" aria-hidden="true" />
                Une connexion pour suivre les sessions live sur Google Meet ou Zoom (calendrier
                communiqué dans le groupe WhatsApp).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
          Questions fréquentes
        </h2>
        <div className="mt-8">
          <Accordion>
            {FAQ.map((item) => (
              <AccordionItem key={item.q} title={item.q}>
                <p className="text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="grid-surface border-t border-forest-800/10 bg-forest-50">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            Prêt(e) à démarrer avec la cohorte de septembre 2026 ?
          </h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            Un seul geste : envoyer un message sur WhatsApp. Pas de formulaire, pas de compte, pas
            de frais.
          </p>
          <div className="mt-7">
            <WhatsAppButton groupInvite size="lg">
              S&apos;inscrire maintenant sur WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
