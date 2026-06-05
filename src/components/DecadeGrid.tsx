import { withBase } from "../utils/url";
import { DECADES } from "../utils/site";

/**
 * The signature decade-browser. Six cards (60s → Today), each deep-linking into
 * the /decades page anchor for that era.
 */
export function DecadeGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {DECADES.map((d) => (
        <a
          key={d.id}
          href={withBase(`/decades#${d.id}`)}
          className="group relative overflow-hidden rounded-2xl bg-night-soft border border-night-line p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
          style={{ ["--tint" as string]: d.tint }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "radial-gradient(circle at 50% 120%, color-mix(in srgb, var(--tint) 35%, transparent), transparent 70%)" }}
          />
          <span
            className="relative block font-display font-black leading-none tracking-tight text-[clamp(34px,5vw,52px)] transition-colors"
            style={{ color: "var(--tint)" }}
          >
            {d.label}
          </span>
          <span className="relative block mt-2 text-[11px] uppercase tracking-widest text-muted group-hover:text-cream transition-colors">
            {d.sub}
          </span>
        </a>
      ))}
    </div>
  );
}
