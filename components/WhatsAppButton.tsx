import { waLink } from "@/lib/whatsapp";
import { WHATSAPP_GROUP_URL } from "@/lib/constants";

type Props = {
  message?: string;
  groupInvite?: boolean;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export default function WhatsAppButton({
  message,
  groupInvite = false,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none";
  const sizes = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm";
  const variants: Record<string, string> = {
    solid: "bg-forest-500 text-white hover:bg-forest-600",
    outline: "border-2 border-forest-500 text-forest-700 hover:bg-forest-50",
    ghost: "text-forest-700 hover:bg-forest-50",
  };
  const href = groupInvite ? WHATSAPP_GROUP_URL : waLink(message ?? "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.15em] w-[1.15em] shrink-0" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.84.5 3.56 1.44 5.05L2 22l5.2-1.53a9.83 9.83 0 0 0 4.84 1.28h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.42 1.32-1.95 1.4-.5.08-1.13.11-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.2-1.18-1.57-1.18-3s.75-2.12 1.02-2.41c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 1.99.88 2.13.07.15.12.32.02.52-.1.19-.16.32-.31.49-.15.17-.31.38-.45.51-.15.14-.3.29-.13.58.17.29.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.14.47.12.65-.07.18-.2.75-.85.95-1.15.2-.29.4-.24.66-.15.27.1 1.68.8 1.97.94.29.15.48.22.55.34.07.13.07.72-.17 1.41Z" />
      </svg>
      {children}
    </a>
  );
}
