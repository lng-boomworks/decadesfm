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
 * Category card for the home grid. The decade image fills the whole card as a
 * full-bleed background; the era numeral, title, blurb and CTA sit on top over a
 * legibility scrim. Falls back to a tinted gradient when no photo exists yet
 * (drop one into public/images/decades/). Neon hover glow tinted per decade.
 */
export function CategoryCard({ label, sub, blurb, tint, image, href }: CategoryCardProps) {
  return (
    <a href={href} className="glow-card group relative block overflow-hidden aspect-[3/4]" style={{ ["--accent" as string]: tint }}>
      {/* Tinted gradient fallback (always present, behind the photo) */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(155deg, color-mix(in srgb, ${tint} 40%, transparent), transparent 60%), var(--color-surface)` }}
      />

      {/* Full-bleed background image (visible by default; hidden only if it fails to load) */}
      {image && (
        <img
          src={withBase(image)}
          alt={`${label} — ${sub}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}

      {/* Legibility scrim — dark at the foot, lighter up top */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/10" />

      {/* Content overlay */}
      <div className="relative h-full flex flex-col justify-between p-5">
        <span
          className="font-display leading-none tracking-wide text-[clamp(48px,6vw,76px)] transition-transform duration-300 group-hover:scale-105 origin-top-left"
          style={{ color: tint, textShadow: `0 2px 20px rgba(0,0,0,0.6), 0 0 28px color-mix(in srgb, ${tint} 55%, transparent)` }}
        >
          {label}
        </span>
        <div>
          <p className="font-display text-xl tracking-wide text-foreground">{sub}</p>
          <p className="text-sm text-foreground/70 leading-relaxed mt-1 mb-4">{blurb}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: tint }}>
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  );
}
