import type { Formula } from "@/lib/data/programme";
import DataTable from "./DataTable";

export default function FormulaCard({ formula }: { formula: Formula }) {
  return (
    <div className="rounded-lg border border-forest-800/10 bg-paper p-4 sm:p-5">
      <h4 className="font-display text-sm font-semibold text-forest-800 sm:text-base">{formula.name}</h4>
      <pre className="mt-2 overflow-x-auto rounded-md bg-forest-900 px-4 py-3 font-mono text-[13px] leading-relaxed text-forest-100">
        <code>{formula.syntax}</code>
      </pre>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{formula.description}</p>
      {formula.example && (
        <div className="mt-3">
          <DataTable table={formula.example} />
        </div>
      )}
      <p className="mt-3 text-sm">
        <span className="font-semibold text-forest-700">Résultat obtenu : </span>
        <span className="text-ink">{formula.result}</span>
      </p>
      {formula.note && (
        <p className="mt-2 rounded-md bg-sand-100 px-3 py-2 text-xs leading-relaxed text-forest-800">
          <span className="font-semibold">À retenir — </span>
          {formula.note}
        </p>
      )}
    </div>
  );
}
