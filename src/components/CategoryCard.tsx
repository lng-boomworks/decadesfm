import { ArrowRight } from "lucide-react";
import { withBase } from "../utils/url";

interface CategoryCardProps {
  label: string;
  sub: string;
  blurb: string;
  tint: string;
  image?: string;
  href: string;
}

/**
 * Category card for the home grid — large imagery, giant era numeral, CTA, and a
 * neon hover glow tinted to the decade's accent. Falls back to a tinted gradient
 * when no photo exists yet (drop one into public/images/decades/).
 */
export function CategoryCard({ label, sub, blurb, tint, image, href }: CategoryCardProps) {
  return (
    <a href={href} className="glow-card group flex flex-col overflow-hidden" style={{ ["--accent" as string]: tint }}>
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Tinted gradient backdrop (always present) */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${tint} 35%, transparent), transparent 55%), var(--color-surface)` }}
        />
        {/* Optional real photo on top */}
        {image && (
          <img
            src={withBase(image)}
            alt={`${label} — ${sub}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
            onLoad={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span
          className="absolute top-3 left-4 font-display leading-none tracking-wide text-[clamp(56px,7vw,84px)] transition-transform duration-300 group-hover:scale-105"
          style={{ color: tint, textShadow: `0 0 28px color-mix(in srgb, ${tint} 60%, transparent)` }}
        >
          {label}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-xl tracking-wide text-foreground">{sub}</p>
        <p className="text-sm text-muted leading-relaxed mt-1 mb-4 flex-1">{blurb}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: tint }}>
          Explore <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}
