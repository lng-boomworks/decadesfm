import { useEffect } from "react";
import { Disc3, Radio, Users } from "lucide-react";
import { withBase } from "../utils/url";

/**
 * Status / featured-content strip - three horizontal glass cards driven by the
 * Citrus3 live metadata widgets (widgets.js). The script scans the DOM for
 * [data-widget] elements and populates / refreshes them, so we load it from a
 * useEffect after this client:load island has hydrated and rendered the markup.
 */
const STATION = "decadesfmworldwideradio";
const WIDGET_SRC = "https://s6.citrus3.com:2020/dist/widgets.js";

export function StatusStrip() {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = WIDGET_SRC;
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {/* Now Playing - cover art + live track */}
      <div className="glow-card flex items-center gap-4 p-5 min-w-0" style={{ ["--accent" as string]: "var(--color-blue)" }}>
        <div
          className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
          style={{ background: "color-mix(in srgb, var(--color-blue) 16%, transparent)", color: "var(--color-blue)" }}
        >
          <img
            data-widget="mcp-cover-image"
            data-name={STATION}
            alt="Now playing artwork"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Now Playing</p>
          <p className="font-display text-lg tracking-wide text-foreground truncate">
            <span data-widget="mcp-custom-text" data-name={STATION} data-format="%nowplaying%"></span>
          </p>
        </div>
      </div>

      {/* On Air status */}
      <div className="glow-card flex items-center gap-4 p-5 min-w-0" style={{ ["--accent" as string]: "var(--color-pink)" }}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "color-mix(in srgb, var(--color-pink) 16%, transparent)", color: "var(--color-pink)" }}
        >
          <Radio className="w-6 h-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Status</p>
          <p className="font-display text-lg tracking-wide text-foreground truncate">
            <span
              data-widget="mcp-stream-status"
              data-name={STATION}
              data-online-text="🟢 On Air"
              data-offline-text="🔴 Off Air"
            ></span>
          </p>
          <a href={withBase("/shows")} className="text-xs font-semibold mt-1 inline-block hover:underline" style={{ color: "var(--color-pink)" }}>
            Meet the presenters →
          </a>
        </div>
      </div>

      {/* Listeners */}
      <div className="glow-card flex items-center gap-4 p-5 min-w-0" style={{ ["--accent" as string]: "var(--color-gold)" }}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "color-mix(in srgb, var(--color-gold) 16%, transparent)", color: "var(--color-gold)" }}
        >
          <Users className="w-6 h-6" strokeWidth={1.75} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Listeners</p>
          <p className="font-display text-lg tracking-wide text-foreground truncate">
            <span data-widget="mcp-custom-text" data-name={STATION} data-format="%connections%"></span>
          </p>
          <a href={withBase("/schedule")} className="text-xs font-semibold mt-1 inline-block hover:underline" style={{ color: "var(--color-gold)" }}>
            Full schedule →
          </a>
        </div>
      </div>
    </div>
  );
}
