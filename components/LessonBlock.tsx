import type { Lesson } from "@/lib/data/programme";
import DataTable from "./DataTable";
import FormulaCard from "./FormulaCard";

export default function LessonBlock({ lesson }: { lesson: Lesson }) {
  return (
    <div className="border-l-2 border-forest-200 pl-4 sm:pl-5">
      <h3 className="font-display text-base font-semibold text-forest-900 sm:text-lg">{lesson.title}</h3>

      {lesson.paragraphs?.map((p, i) => (
        <p key={i} className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
          {p}
        </p>
      ))}

      {lesson.bullets && (
        <ul className="mt-3 space-y-2">
          {lesson.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {lesson.table && (
        <div className="mt-4">
          <DataTable table={lesson.table} />
        </div>
      )}

      {lesson.formulas && (
        <div className="mt-4 flex flex-col gap-4">
          {lesson.formulas.map((f, i) => (
            <FormulaCard key={i} formula={f} />
          ))}
        </div>
      )}

      {lesson.note && (
        <p className="mt-3 rounded-md bg-sand-100 px-3 py-2 text-xs leading-relaxed text-forest-800 sm:text-sm">
          <span className="font-semibold">À retenir — </span>
          {lesson.note}
        </p>
      )}
    </div>
  );
}
