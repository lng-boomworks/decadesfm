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
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200";

  const variants: Record<string, string> = {
    solid:
      "bg-amber text-night-deep hover:bg-amber-deep hover:-translate-y-px shadow-[0_0_24px_-6px_var(--color-amber)]",
    outline: "border-[1.5px] border-amber text-amber hover:bg-amber/10",
    block:
      "w-full bg-amber text-night-deep hover:bg-amber-deep shadow-[0_0_24px_-6px_var(--color-amber)]",
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
