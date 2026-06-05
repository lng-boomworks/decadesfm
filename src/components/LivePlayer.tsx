import { Radio } from "lucide-react";
import { STREAM_URL } from "../utils/site";

interface LivePlayerProps {
  variant?: "solid" | "outline" | "block";
  label?: string;
  className?: string;
}

/**
 * The persistent Listen-Live launcher. Opens the Citrus3 stream in a new tab.
 * Used in the navbar and as the closing CTA on every page.
 */
export function LivePlayer({ variant = "solid", label = "Listen Live", className = "" }: LivePlayerProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variants: Record<string, string> = {
    solid:
      "bg-red text-white hover:bg-red-deep shadow-[0_0_28px_-8px_var(--color-red)] hover:shadow-[0_0_46px_-6px_var(--color-red)]",
    outline: "border-[1.5px] border-red text-red hover:bg-red/10 hover:shadow-[0_0_32px_-12px_var(--color-red)]",
    block:
      "w-full bg-red text-white hover:bg-red-deep shadow-[0_0_28px_-8px_var(--color-red)]",
  };

  return (
    <a
      href={STREAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
      </span>
      <Radio className="w-4 h-4" strokeWidth={2} />
      {label}
    </a>
  );
}
