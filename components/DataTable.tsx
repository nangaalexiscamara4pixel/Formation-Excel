import type { LessonTable } from "@/lib/data/programme";

export default function DataTable({ table }: { table: LessonTable }) {
  return (
    <div className="cell-card overflow-x-auto rounded-lg">
      <table className="w-full min-w-[420px] border-collapse text-sm">
        <thead>
          <tr className="bg-forest-50">
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border-b border-forest-800/10 px-3 py-2 text-left font-display font-semibold text-forest-800"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? "bg-forest-50/40" : ""}>
              {row.map((cell, ci) => (
                <td key={ci} className="border-b border-forest-800/5 px-3 py-2 font-mono text-[13px] text-ink">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
