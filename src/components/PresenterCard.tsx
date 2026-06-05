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
 * Presenter profile card for the /shows team grid. `image` is optional — until
 * real presenter photos exist, the card shows a branded monogram placeholder.
 */
export function PresenterCard({ name, show, slot, bio, image }: PresenterCardProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group h-full rounded-2xl bg-night-soft border border-night-line overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber/50">
      <div className="aspect-[4/3] bg-night flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={withBase(image)} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center text-amber/70">
            <span className="font-display font-black text-5xl tracking-tight">{initials}</span>
            <Mic className="w-5 h-5 mt-2" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-widest text-teal mb-1">{slot}</p>
        <h3 className="text-cream mb-1">{name}</h3>
        <p className="text-amber font-medium text-[15px] mb-3">{show}</p>
        <p className="text-muted text-[15px] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
