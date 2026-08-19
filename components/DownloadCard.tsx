type Props = {
  label: string;
  hint: string;
  href: string;
  fileType: "xlsx" | "docx";
};

export default function DownloadCard({ label, hint, href, fileType }: Props) {
  return (
    <a
      href={href}
      download
      className="cell-card group flex items-start gap-4 rounded-xl bg-white p-5 transition-shadow hover:shadow-md sm:p-6"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-display text-xs font-bold ${
          fileType === "xlsx" ? "bg-forest-100 text-forest-700" : "bg-sand-100 text-sand-700"
        }`}
        aria-hidden="true"
      >
        {fileType.toUpperCase()}
      </span>
      <span className="flex-1">
        <span className="block font-display text-sm font-semibold text-forest-900 sm:text-base">
          {label}
        </span>
        <span className="mt-1 block text-sm text-ink-soft">{hint}</span>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 group-hover:text-forest-700">
          Télécharger
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
          </svg>
        </span>
      </span>
    </a>
  );
}
