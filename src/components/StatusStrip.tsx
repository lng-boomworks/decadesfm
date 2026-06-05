import { Disc3, Mic, Clock } from "lucide-react";
import { withBase } from "../utils/url";

/**
 * Status / featured-content strip — three horizontal glass cards:
 * current content (Now Playing), featured profile (On Air presenter), upcoming.
 *
 * v1: STATIC PLACEHOLDER content. Live track/show data needs a Citrus3 metadata
 * feed (planned for v2). {{TOKENS}} mark values to fill.
 */
const cards = [
  {
    icon: Disc3,
    label: "Now Playing",
    primary: "{{NOW_PLAYING_TRACK}}",
    secondary: "{{NOW_PLAYING_ARTIST}}",
    tint: "var(--color-blue)",
    spin: true,
    cta: null as null | { label: string; href: string },
  },
  {
    icon: Mic,
    label: "On Air Now",
    primary: "{{ON_AIR_SHOW}}",
    secondary: "with {{ON_AIR_PRESENTER}}",
    tint: "var(--color-pink)",
    spin: false,
    cta: { label: "Meet the presenters", href: "/shows" },
  },
  {
    icon: Clock,
    label: "Up Next",
    primary: "{{UP_NEXT_SHOW}}",
    secondary: "{{UP_NEXT_TIME}}",
    tint: "var(--color-gold)",
    spin: false,
    cta: { label: "Full schedule", href: "/schedule" },
  },
];

export function StatusStrip() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {cards.map((c) => (
        <div key={c.label} className="glow-card flex items-center gap-4 p-5" style={{ ["--accent" as string]: c.tint }}>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `color-mix(in srgb, ${c.tint} 16%, transparent)`, color: c.tint }}
          >
            <c.icon className={`w-6 h-6 ${c.spin ? "animate-spin [animation-duration:4s]" : ""}`} strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{c.label}</p>
            <p className="font-display text-lg tracking-wide text-foreground truncate">{c.primary}</p>
            <p className="text-sm text-muted truncate">{c.secondary}</p>
            {c.cta && (
              <a href={withBase(c.cta.href)} className="text-xs font-semibold mt-1 inline-block hover:underline" style={{ color: c.tint }}>
                {c.cta.label} →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
