"use client";

import { useEffect, useState } from "react";
import Accordion, { AccordionItem } from "./Accordion";
import LessonBlock from "./LessonBlock";
import WhatsAppButton from "./WhatsAppButton";
import type { Niveau } from "@/lib/data/programme";
import { waMessages } from "@/lib/whatsapp";

export default function ProgrammeContent({ niveaux }: { niveaux: Niveau[] }) {
  const [activeId, setActiveId] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const match = niveaux.find((n) => n.slug === hash);
    if (match) setActiveId(match.id);
  }, [niveaux]);

  const active = niveaux.find((n) => n.id === activeId) ?? niveaux[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sélection du niveau"
        className="flex flex-col gap-2 rounded-xl border border-forest-800/10 bg-white p-1.5 sm:flex-row"
      >
        {niveaux.map((n) => (
          <button
            key={n.id}
            id={n.slug}
            role="tab"
            type="button"
            aria-selected={active.id === n.id}
            onClick={() => setActiveId(n.id)}
            className={`flex-1 rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors sm:text-center ${
              active.id === n.id
                ? "bg-forest-500 text-white"
                : "text-ink-soft hover:bg-forest-50 hover:text-forest-700"
            }`}
          >
            {n.title}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-forest-800/10 bg-forest-50 p-6 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-500">Objectif du niveau</p>
        <p className="mt-2 text-base leading-relaxed text-forest-900">{active.objectif}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {active.downloads.map((d) => (
            <a
              key={d.href}
              href={d.href}
              download
              className="inline-flex items-center gap-2 rounded-full border border-forest-500/30 bg-white px-4 py-2 text-sm font-medium text-forest-700 hover:border-forest-500 hover:bg-forest-50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
              {d.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Accordion>
          {active.modules.map((m) => (
            <AccordionItem
              key={m.number}
              title={`Module ${m.number} — ${m.title}`}
              subtitle={`Exercice pratique : ${m.exercice}`}
            >
              <div className="flex flex-col gap-8">
                {m.lessons.map((lesson, i) => (
                  <LessonBlock key={i} lesson={lesson} />
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-forest-800/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          Une question sur le contenu de ce niveau avant de vous inscrire ?
        </p>
        <WhatsAppButton message={waMessages.question}>Poser une question</WhatsAppButton>
      </div>
    </div>
  );
}
