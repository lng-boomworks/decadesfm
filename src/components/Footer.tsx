import { Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./BrandIcons";
import { withBase } from "../utils/url";
import { NAV_LINKS, SOCIALS, EMAIL, PLATFORMS } from "../utils/site";

export function Footer() {
  return (
    <footer className="bg-night text-muted border-t border-night-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <a href={withBase("/")} className="inline-flex items-center gap-3 mb-5">
              <span className="font-display text-[24px] font-extrabold text-cream tracking-tight">
                DECADES<span className="text-amber"> WORLDWIDE</span>
              </span>
            </a>
            <p className="text-[15px] leading-relaxed mb-6 max-w-sm">
              The Soundtrack of Your Life. Five decades of the greatest hits, live 24/7 —
              keeping generations connected through music.
            </p>
            <div className="flex items-center gap-3">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-night-line text-muted hover:text-amber hover:border-amber transition-colors">
                <InstagramIcon />
              </a>
              <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-full border border-night-line text-muted hover:text-amber hover:border-amber transition-colors">
                <YoutubeIcon />
              </a>
              <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="p-2 rounded-full border border-night-line text-muted hover:text-amber hover:border-amber transition-colors">
                <span className="font-display font-bold text-[15px] leading-none w-5 h-5 flex items-center justify-center">𝕏</span>
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="p-2 rounded-full border border-night-line text-muted hover:text-amber hover:border-amber transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Explore</h4>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li><a href={withBase("/")} className="hover:text-amber transition-colors">Home</a></li>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a href={withBase(link.path)} className="hover:text-amber transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen anywhere */}
          <div>
            <h4 className="text-cream font-semibold mb-6">Listen Anywhere</h4>
            <p className="text-[15px] mb-4">Find Decades Worldwide Radio on every platform:</p>
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <span key={p} className="inline-flex items-center px-3 py-1 rounded-full bg-night-soft border border-night-line text-xs font-medium text-cream/80">
                  {p}
                </span>
              ))}
            </div>
            <a href={`mailto:${EMAIL}`} className="inline-block mt-6 text-[14px] hover:text-amber transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-night-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Decades Worldwide Radio. All rights reserved.</p>
          <p className="text-xs uppercase tracking-widest text-muted/70">60s · 70s · 80s · 90s · to Today</p>
        </div>
      </div>
    </footer>
  );
}
