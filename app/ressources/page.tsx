import type { Metadata } from "next";
import DownloadCard from "@/components/DownloadCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { niveaux, programmeDownload } from "@/lib/data/programme";
import { waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ressources à télécharger",
  description:
    "Téléchargez gratuitement les classeurs pratiques, les fiches d'évaluation et le programme complet de la formation Excel gratuite.",
};

export default function RessourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-forest-600">Ressources</span>
        <h1 className="mt-2 font-display text-3xl font-bold text-forest-900 sm:text-4xl">
          Tous les fichiers de la formation, en téléchargement libre
        </h1>
        <p className="mt-4 text-ink-soft">
          Les classeurs d&apos;exercices pratiques, les fiches d&apos;évaluation notées de chaque
          niveau, et le programme complet de la formation — tous gratuits, sans inscription.
        </p>
      </div>

      <div className="mt-10">
        <DownloadCard
          label={programmeDownload.label}
          hint={programmeDownload.hint}
          href={programmeDownload.href}
          fileType="docx"
        />
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {niveaux.map((n) => (
          <div key={n.id}>
            <h2 className="font-display text-xl font-bold text-forest-900">{n.title}</h2>
            <p className="mt-1 text-sm text-ink-soft">{n.objectif}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {n.downloads.map((d) => (
                <DownloadCard key={d.href} label={d.label} hint={d.hint} href={d.href} fileType="xlsx" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 cell-card rounded-xl bg-forest-50 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-forest-900">
              Calendrier des sessions live
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              Les sessions live se déroulent sur Google Meet ou Zoom. Le lien et le calendrier
              exact des séances seront communiqués directement dans le groupe WhatsApp de la
              cohorte, une fois l&apos;effectif connu — aucune date n&apos;est fixée à l&apos;avance
              ici.
            </p>
          </div>
          <WhatsAppButton message={waMessages.calendrier} className="shrink-0">
            Demander le calendrier
          </WhatsAppButton>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-forest-800/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          Vous avez téléchargé les ressources et souhaitez rejoindre la cohorte de septembre 2026 ?
        </p>
        <WhatsAppButton groupInvite>Rejoindre sur WhatsApp</WhatsAppButton>
      </div>
    </div>
  );
}
