import type { Metadata } from "next";
import ProgrammeContent from "@/components/ProgrammeContent";
import { niveaux } from "@/lib/data/programme";

export const metadata: Metadata = {
  title: "Programme complet — 16 modules",
  description:
    "Le détail complet des 16 modules de la formation Excel gratuite : leçons, formules exactes, exemples de données et résultats, organisés en 3 niveaux.",
};

export default function ProgrammePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          Programme complet
        </span>
        <h1 className="mt-2 font-display text-3xl font-bold text-forest-900 sm:text-4xl">
          16 modules, du niveau zéro à avancé
        </h1>
        <p className="mt-4 text-ink-soft">
          Chaque module suit la même logique pédagogique : Explication → Démonstration → Exercice
          guidé → Cas pratique. Les formules Excel sont présentées avec leur syntaxe exacte, un
          exemple de données et le résultat obtenu.
        </p>
      </div>

      <div className="mt-10">
        <ProgrammeContent niveaux={niveaux} />
      </div>
    </div>
  );
}
