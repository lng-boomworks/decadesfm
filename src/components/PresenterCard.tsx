import { Mic } from "lucide-react";
import { withBase } from "../utils/url";

interface PresenterCardProps {
  name: string;
  show: string;
  slot: string;
  bio: string;
  image?: string;
}

/**
 * Presenter profile card for the /shows team grid. `image` is optional - until
 * real presenter photos exist, the card shows a branded monogram placeholder.
 */
export function PresenterCard({ name, show, slot, bio, image }: PresenterCardProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="glow-card group h-full overflow-hidden" style={{ ["--accent" as string]: "var(--color-pink)" }}>
      <div className="aspect-[4/3] bg-bg flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={withBase(image)} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center text-pink/70">
            <span className="font-display text-6xl tracking-wide">{initials}</span>
            <Mic className="w-5 h-5 mt-2" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-widest text-blue mb-1">{slot}</p>
        <h3 className="text-2xl tracking-wide text-foreground mb-1">{name}</h3>
        <p className="text-gold font-medium text-[15px] mb-3">{show}</p>
        <p className="text-muted text-[15px] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
