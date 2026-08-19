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
    title: "Zéro à avancé, un seul parcours",
    text: "Aucune base requise pour démarrer : le programme part de l'interface Excel et monte progressivement jusqu'aux tableaux croisés dynamiques avancés et aux fonctions matricielles.",
  },
  {
    title: "Des cas pratiques réels",
    text: "Tous les exercices utilisent des données réalistes — ventes, RH, finance, stock — pour un transfert direct et immédiat en entreprise.",
  },
  {
    title: "Une progression validée",
    text: "Chaque niveau se termine par une évaluation notée (QCM, seuil 70%) qui conditionne l'accès au niveau suivant : vous avancez avec de vrais acquis.",
  },
  {
    title: "Un certificat à la clé",
    text: "Un certificat global est délivré après validation des 3 niveaux, à valoriser directement sur un CV ou un profil LinkedIn.",
  },
  {
    title: "100% gratuit, sans piège",
    text: "Pas de frais caché, pas de compte à créer, pas de formulaire à remplir. Tout se passe simplement, par message, sur WhatsApp.",
  },
  {
    title: "Un accompagnement direct",
    text: "Sessions live sur Google Meet ou Zoom, avec un groupe WhatsApp de cohorte pour poser vos questions et suivre le calendrier exact.",
  },
];

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
            <span className="inline-flex items-center rounded-full bg-forest-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-forest-700">
              Cohorte de septembre 2026 · inscriptions ouvertes
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-forest-900 sm:text-5xl md:text-6xl">
              Formez-vous en Excel,{" "}
              <span className="text-forest-500">gratuitement</span>, du zéro à l&apos;avancé.
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
              <h3 className="font-display text-base font-semibold text-forest-800">{b.title}</h3>
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
        <div className="cell-card grid gap-10 rounded-2xl bg-white p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-forest-600">
              Le formateur
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              {formateur.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-forest-500">{formateur.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
              {formateur.bio}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {formateur.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-forest-50 px-3 py-1.5 text-xs font-medium text-forest-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-500 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-forest-600"
              >
                Voir le portfolio complet
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {formateur.highlights.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl bg-forest-50 p-4 text-sm leading-relaxed text-forest-900">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand-400 text-xs font-bold text-forest-900">
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>
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
                Un ordinateur Windows ou Mac, avec Excel 2016 ou version ultérieure, ou Microsoft
                365.
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
