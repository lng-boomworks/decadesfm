import type React from "react";
import { Calendar, Phone, Mail } from "lucide-react";
import { withBase } from "../utils/url";

function AutoIcon({ href, children }: { href?: string; children: React.ReactNode }) {
  // Skip if children already contain an SVG icon (e.g. manually added)
  const hasIcon = Array.isArray(children)
    ? children.some((c) => typeof c === "object" && c !== null && "type" in c && typeof c.type !== "string")
    : typeof children === "object" && children !== null && "type" in children && typeof (children as any).type !== "string";

  if (hasIcon) return <>{children}</>;

  if (href?.includes("calendly.com")) return <><Calendar className="w-4 h-4" />{children}</>;
  if (href?.startsWith("tel:")) return <><Phone className="w-4 h-4" />{children}</>;
  if (href === "/contact") return <><Mail className="w-4 h-4" />{children}</>;

  return <>{children}</>;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline-white" | "white";
  href?: string;
  external?: boolean;
}

export function Button({ variant = "primary", href, external, className = "", children, ...props }: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200";

  const variants: Record<string, string> = {
    primary: "bg-amber text-night-deep hover:bg-amber-deep hover:-translate-y-px shadow-[0_0_24px_-6px_var(--color-amber)]",
    ghost: "border-[1.5px] border-night-line text-cream hover:border-amber hover:text-amber",
    "outline-white": "border-[1.5px] border-cream/40 text-cream hover:bg-cream/10",
    white: "bg-cream text-night-deep hover:bg-white hover:-translate-y-px shadow-sm",
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`;
  const content = <AutoIcon href={href}>{children}</AutoIcon>;

  if (href) {
    const isInternal =
      href.startsWith("/") && !href.startsWith("//") && !external;
    const resolvedHref = isInternal ? withBase(href) : href;
    if (external) {
      return (
        <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <a href={resolvedHref} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
