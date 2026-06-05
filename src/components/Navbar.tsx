import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LivePlayer } from "./LivePlayer";
import { InstagramIcon, YoutubeIcon } from "./BrandIcons";
import { withBase } from "../utils/url";
import { NAV_LINKS, SOCIALS } from "../utils/site";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function Socials({ className = "" }: { className?: string }) {
  const cls =
    "p-2 rounded-lg text-muted hover:text-blue hover:bg-white/5 transition-colors";
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cls}><InstagramIcon /></a>
      <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={cls}><YoutubeIcon /></a>
      <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className={cls}>
        <span className="font-display text-lg leading-none w-5 h-5 flex items-center justify-center">𝕏</span>
      </a>
    </div>
  );
}

export function Navbar() {
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setLocation(BASE && path.startsWith(BASE) ? path.slice(BASE.length) || "/" : path);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-4">
        {/* Logo (left) */}
        <a href={withBase("/")} className="flex items-center gap-3 shrink-0">
          <img
            src={withBase("/images/logo.webp")}
            alt="Decades Worldwide Radio"
            className={logoOk ? "h-12 w-auto" : "hidden"}
            onLoad={() => setLogoOk(true)}
            onError={() => setLogoOk(false)}
          />
          {!logoOk && (
            <span className="font-display text-[26px] leading-none tracking-wide text-foreground">
              DECADES<span className="text-gold"> WORLDWIDE</span>
            </span>
          )}
        </a>

        {/* Nav (centre) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={withBase(link.path)}
              className={`text-[15px] font-medium transition-colors hover:text-blue ${
                location === link.path ? "text-blue" : "text-muted"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social + CTA (right) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Socials />
          <LivePlayer />
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-[76px] left-0 right-0 glass border-t-0 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <a
                  href={withBase(link.path)}
                  className={`block text-lg font-medium transition-colors ${
                    location === link.path ? "text-blue" : "text-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
            <Socials />
            <LivePlayer />
          </div>
        </div>
      </div>
    </header>
  );
}
