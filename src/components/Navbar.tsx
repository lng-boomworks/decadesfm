import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LivePlayer } from "./LivePlayer";
import { withBase } from "../utils/url";
import { NAV_LINKS } from "../utils/site";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Navbar() {
  const [location, setLocation] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Show the real logo if /images/logo.png loads; otherwise keep the wordmark.
  const [logoOk, setLogoOk] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setLocation(BASE && path.startsWith(BASE) ? path.slice(BASE.length) || "/" : path);
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-night-deep/90 backdrop-blur-md shadow-lg border-b border-night-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Brand / logo. Drop a real logo at public/images/logo.png to replace the wordmark. */}
        <a href={withBase("/")} className="flex items-center gap-3 group">
          <img
            src={withBase("/images/logo.png")}
            alt="Decades Worldwide Radio"
            className={logoOk ? "h-10 w-auto" : "hidden"}
            onLoad={() => setLogoOk(true)}
            onError={() => setLogoOk(false)}
          />
          {!logoOk && (
            <span className="font-display text-[22px] font-extrabold text-cream tracking-tight leading-none">
              DECADES<span className="text-amber"> WORLDWIDE</span>
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <a
                  href={withBase(link.path)}
                  className={`text-[15px] font-medium transition-colors hover:text-amber ${
                    location === link.path ? "text-amber" : "text-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <LivePlayer />
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-cream"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 bg-night-deep/98 backdrop-blur-xl border-b border-night-line transition-all duration-300 overflow-hidden ${
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
                    location === link.path ? "text-amber" : "text-muted"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-night-line">
            <LivePlayer variant="block" />
          </div>
        </div>
      </div>
    </header>
  );
}
