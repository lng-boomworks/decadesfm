import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { Mail, Music2 } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "../BrandIcons";
import { EMAIL, SOCIALS } from "../../utils/site";

const requestMailto =
  `mailto:${EMAIL}` +
  `?subject=${encodeURIComponent("Song request for Decades Worldwide Radio")}` +
  `&body=${encodeURIComponent(
    "Hi Decades team,\n\nPlease could you play:\n\nSong:\nArtist:\n\nDedication (optional):\n\nFrom:\n"
  )}`;

export function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,70,110,0.14), transparent 60%)" }} />
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-magenta">Get in touch</span>
              <h1 className="mb-6">Say hello - or request a song.</h1>
              <p className="text-xl text-muted">
                We love hearing from listeners. Drop us a line, send us your dedications,
                or just let us know what you want to hear next.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Request a song - primary action */}
              <FadeIn>
                <a href={requestMailto} className="group flex flex-col h-full p-8 rounded-2xl bg-amber text-night-deep transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_-10px_var(--color-amber)]">
                  <Music2 className="w-10 h-10 mb-6" strokeWidth={1.75} />
                  <h3 className="text-2xl mb-2 text-night-deep">Request a song</h3>
                  <p className="text-night-deep/80 leading-relaxed mb-6">
                    Got a track you're dying to hear? Send us your request and a dedication -
                    we'll do our best to get it on air.
                  </p>
                  <span className="mt-auto font-semibold underline underline-offset-4">Open a request email →</span>
                </a>
              </FadeIn>

              {/* Email + social */}
              <FadeIn delay={0.1} className="flex flex-col gap-6">
                <a href={`mailto:${EMAIL}`} className="glow-card flex items-center gap-4 p-6 group" style={{ ["--accent" as string]: "var(--color-blue)" }}>
                  <div className="w-12 h-12 rounded-xl bg-bg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted mb-1">Email us</div>
                    <div className="font-medium text-foreground truncate group-hover:text-blue transition-colors">{EMAIL}</div>
                  </div>
                </a>

                <div className="glow-card p-6" style={{ ["--accent" as string]: "var(--color-purple)" }}>
                  <div className="text-sm text-muted mb-4">Follow the station</div>
                  <div className="flex items-center gap-3">
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-night border border-night-line text-cream hover:text-amber hover:border-amber transition-colors">
                      <InstagramIcon /> <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-night border border-night-line text-cream hover:text-amber hover:border-amber transition-colors">
                      <YoutubeIcon /> <span className="text-sm font-medium">YouTube</span>
                    </a>
                    <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-night border border-night-line text-cream hover:text-amber hover:border-amber transition-colors">
                      <span className="font-display font-bold text-lg leading-none">𝕏</span> <span className="text-sm font-medium">X</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-night-line">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,178,62,0.16), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">While you're here - tune in.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">The music's already playing. Press play and listen along.</p>
              <div className="flex justify-center">
                <LivePlayer label="Listen Live" />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
