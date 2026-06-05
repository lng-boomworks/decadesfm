import { Disc3, Mic, Clock } from "lucide-react";

/**
 * Now Playing · On Air Now · Up Next — the "live state" strip under the hero.
 *
 * v1: STATIC PLACEHOLDER content. Wiring real live track/show metadata needs a
 * feed from the Citrus3 stream (planned for v2). Values below are placeholders.
 */
const items = [
  {
    icon: Disc3,
    label: "Now Playing",
    primary: "{{NOW_PLAYING_TRACK}}",
    secondary: "{{NOW_PLAYING_ARTIST}}",
    accent: "text-amber",
    spin: true,
  },
  {
    icon: Mic,
    label: "On Air Now",
    primary: "{{ON_AIR_SHOW}}",
    secondary: "with {{ON_AIR_PRESENTER}}",
    accent: "text-magenta",
    spin: false,
  },
  {
    icon: Clock,
    label: "Up Next",
    primary: "{{UP_NEXT_SHOW}}",
    secondary: "{{UP_NEXT_TIME}}",
    accent: "text-teal",
    spin: false,
  },
];

export function NowPlayingStrip() {
  return (
    <div className="bg-night-soft/70 border-y border-night-line backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-night-line">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
              <item.icon className={`w-7 h-7 shrink-0 ${item.accent} ${item.spin ? "animate-spin [animation-duration:4s]" : ""}`} strokeWidth={1.75} />
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-widest text-muted">{item.label}</p>
                <p className="font-display font-semibold text-cream truncate">{item.primary}</p>
                <p className="text-sm text-muted truncate">{item.secondary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
