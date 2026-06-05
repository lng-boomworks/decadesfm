import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { withBase } from "../utils/url";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  ctaLabel: string;
  href?: string;
  tint: string;
  external?: boolean;
  onClick?: () => void;
}

/**
 * Informational feature card - icon, heading, description and a CTA. Neon hover
 * glow tinted per-card via --accent. Renders as a button when `onClick` is
 * given (e.g. to trigger the inline radio player), otherwise as a link.
 */
export function FeatureCard({ icon: Icon, title, desc, ctaLabel, href, tint, external, onClick }: FeatureCardProps) {
  const inner = (
    <>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `color-mix(in srgb, ${tint} 16%, transparent)`, color: tint }}
      >
        <Icon className="w-6 h-6" strokeWidth={1.75} />
      </div>
      <h3 className="text-2xl tracking-wide text-foreground mb-2">{title}</h3>
      <p className="text-[15px] text-muted leading-relaxed flex-1 mb-5">{desc}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: tint }}>
        {ctaLabel} <ArrowRight className="w-4 h-4" />
      </span>
    </>
  );

  const cls = "glow-card group flex flex-col p-7 text-left w-full";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={cls} style={{ ["--accent" as string]: tint }}>
        {inner}
      </button>
    );
  }

  const resolved = external ? href! : withBase(href!);
  return (
    <a
      href={resolved}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cls}
      style={{ ["--accent" as string]: tint }}
    >
      {inner}
    </a>
  );
}
