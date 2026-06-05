import { useEffect, useState } from "react";
import { Radio, Pause, Loader2, RotateCcw } from "lucide-react";
import { radio, type RadioState } from "../utils/radio";

interface LivePlayerProps {
  variant?: "solid" | "outline" | "block";
  label?: string;
  className?: string;
}

/**
 * Listen-Live control. Plays the Citrus3 stream inline (no new tab) via the
 * shared `radio` controller, so every instance on the page stays in sync.
 */
export function LivePlayer({ variant = "solid", label = "Listen Live", className = "" }: LivePlayerProps) {
  const [state, setState] = useState<RadioState>("idle");

  useEffect(() => radio.subscribe(setState), []);

  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variants: Record<string, string> = {
    solid:
      "bg-red text-white hover:bg-red-deep shadow-[0_0_28px_-8px_var(--color-red)] hover:shadow-[0_0_46px_-6px_var(--color-red)]",
    outline: "border-[1.5px] border-red text-red hover:bg-red/10 hover:shadow-[0_0_32px_-12px_var(--color-red)]",
    block: "w-full bg-red text-white hover:bg-red-deep shadow-[0_0_28px_-8px_var(--color-red)]",
  };

  let icon = <Radio className="w-4 h-4" strokeWidth={2} />;
  let text = label;
  let aria = `${label} — start the live stream`;

  if (state === "loading") {
    icon = <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />;
    text = "Connecting…";
    aria = "Connecting to the live stream";
  } else if (state === "playing") {
    icon = (
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
      </span>
    );
    text = "Pause";
    aria = "Pause the live stream";
  } else if (state === "error") {
    icon = <RotateCcw className="w-4 h-4" strokeWidth={2} />;
    text = "Try again";
    aria = "Retry the live stream";
  }

  return (
    <button
      type="button"
      onClick={() => radio.toggle()}
      aria-label={aria}
      aria-pressed={state === "playing"}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {state === "playing" && <Pause className="w-4 h-4" strokeWidth={2} />}
      {icon}
      {text}
    </button>
  );
}
