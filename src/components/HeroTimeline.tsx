import { withBase } from "../utils/url";
import { DECADES } from "../utils/site";

/**
 * Five decade panels connected by an illuminated vertical timeline. Each node
 * pulses (staggered), and each panel glows in its decade's accent on hover.
 * Panels deep-link into the /decades page anchors.
 */
export function HeroTimeline() {
  return (
    <div className="relative pl-9">
      {/* Illuminated timeline spine */}
      <div
        className="absolute left-[14px] top-3 bottom-3 w-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, var(--color-gold), var(--color-pink), var(--color-blue), var(--color-purple), var(--color-green))",
          boxShadow: "0 0 18px -2px rgba(44,196,255,0.5)",
        }}
      />

      <div className="flex flex-col gap-3">
        {DECADES.map((d, i) => (
          <a
            key={d.id}
            href={withBase(`/decades#${d.id}`)}
            className="group relative flex items-center"
            style={{ ["--accent" as string]: d.tint }}
          >
            {/* Node on the spine */}
            <span className="absolute left-[14px] -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-70 motion-safe:animate-ping"
                style={{ background: d.tint, animationDelay: `${i * 0.35}s`, animationDuration: "2.4s" }}
              />
              <span className="relative h-3.5 w-3.5 rounded-full border-2 border-bg" style={{ background: d.tint, boxShadow: `0 0 12px ${d.tint}` }} />
            </span>

            {/* Panel */}
            <div className="glow-card ml-7 flex flex-1 items-center justify-between gap-4 px-5 py-3.5">
              <span
                className="font-display leading-none tracking-wide text-[clamp(34px,4vw,48px)]"
                style={{ color: d.tint, textShadow: `0 0 22px color-mix(in srgb, ${d.tint} 55%, transparent)` }}
              >
                {d.label}
              </span>
              <span className="text-right text-sm text-muted group-hover:text-foreground transition-colors">{d.sub}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
