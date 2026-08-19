export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-forest-500 font-display text-base font-bold text-white"
        aria-hidden="true"
      >
        X
      </span>
      <span className="font-display text-[0.95rem] font-semibold leading-tight tracking-tight text-forest-800 sm:text-base">
        FORMEZ-VOUS EN EXCEL
        <span className="block text-xs font-medium text-forest-600">GRATUITEMENT</span>
      </span>
    </span>
  );
}
