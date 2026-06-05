import { useState } from "react";
import { Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./BrandIcons";
import { withBase } from "../utils/url";
import { NAV_LINKS, SOCIALS, EMAIL, PLATFORMS } from "../utils/site";

export function Footer() {
  // Show the real logo if /images/logo.png loads; otherwise keep the wordmark.
  const [logoOk, setLogoOk] = useState(false);
  const socialCls =
    "p-2.5 rounded-lg glass text-muted hover:text-blue hover:shadow-[0_0_24px_-10px_var(--color-blue)] transition-all";

  return (
    <footer className="relative border-t border-border bg-bg-2/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand + socials + contact */}
          <div className="col-span-2 md:col-span-1">
            <a href={withBase("/")} className="inline-flex items-center mb-5">
              <img
                src={withBase("/images/logo.webp")}
                alt="Decades Worldwide Radio"
                className={logoOk ? "h-14 w-auto" : "hidden"}
                onLoad={() => setLogoOk(true)}
                onError={() => setLogoOk(false)}
              />
              {!logoOk && (
                <span className="font-display text-[28px] leading-none tracking-wide text-foreground">
                  DECADES<span className="text-gold"> WORLDWIDE</span>
                </span>
              )}
            </a>
            <p className="text-[15px] leading-relaxed mb-6 max-w-sm text-muted">
              The Soundtrack of Your Life. Five decades of the greatest hits, live 24/7 —
              keeping generations connected through music.
            </p>
            <div className="flex items-center gap-2">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialCls}><InstagramIcon /></a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialCls}><YoutubeIcon /></a>
              <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={socialCls}>
                <span className="font-display text-lg leading-none w-5 h-5 flex items-center justify-center">𝕏</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-xl tracking-wide text-foreground mb-5">Explore</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href={withBase("/")} className="text-muted hover:text-blue transition-colors">Home</a></li>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a href={withBase(link.path)} className="text-muted hover:text-blue transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen anywhere + contact */}
          <div>
            <h4 className="font-display text-xl tracking-wide text-foreground mb-5">Listen Anywhere</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {PLATFORMS.map((p) => (
                <span key={p} className="inline-flex items-center px-3 py-1 rounded-lg glass text-xs font-medium text-foreground/80">
                  {p}
                </span>
              ))}
            </div>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-blue transition-colors">
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-xl tracking-wide text-foreground mb-5">Legal</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href={withBase("/privacy")} className="text-muted hover:text-blue transition-colors">Privacy Notice</a></li>
              <li><a href={withBase("/terms")} className="text-muted hover:text-blue transition-colors">Terms of Use</a></li>
              <li><a href={withBase("/contact")} className="text-muted hover:text-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Decades Worldwide Radio. All rights reserved.</p>
          <p className="font-display text-sm tracking-[0.3em] text-muted/70">60s · 70s · 80s · 90s · TODAY</p>
        </div>
      </div>
    </footer>
  );
}
