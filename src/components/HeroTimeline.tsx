import { withBase } from "../utils/url";
import { DECADES } from "../utils/site";

/**
 * A left-to-right row of tall decade panels. Each panel uses its decade's image
 * as a full-bleed background with a scrim for legibility, glows in its accent on
 * hover, and deep-links into the matching /decades page anchor.
 */
export function HeroTimeline() {
  return (
    <div className="grid grid-cols-5 gap-1 lg:h-full">
      {DECADES.map((d) => (
        <a
          key={d.id}
          href={withBase(`/decades#${d.id}`)}
          className="glow-card group relative flex aspect-[9/16] items-end overflow-hidden lg:aspect-auto lg:h-full"
          style={{ ["--accent" as string]: d.tint }}
        >
          {/* Decade image background */}
          <img
            src={withBase(d.image)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Scrim for label legibility */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(0deg, rgba(8,10,20,0.94) 0%, rgba(8,10,20,0.35) 45%, transparent 80%)` }}
          />
          {/* Label */}
          <div className="relative z-10 w-full p-2 sm:p-3 text-center">
            <span
              className="block font-display leading-none tracking-wide text-[clamp(20px,2.4vw,38px)]"
              style={{ color: d.tint, textShadow: `0 0 18px color-mix(in srgb, ${d.tint} 55%, transparent)` }}
            >
              {d.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
