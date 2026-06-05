import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { Users, Mic2, Radio } from "lucide-react";
import { PLATFORMS } from "../../utils/site";

const values = [
  { icon: Users, title: "Every generation", desc: "From the 60s to today, there's a place on the dial for everyone. We bring the family together around the music they grew up with — and the music they're discovering now.", tint: "var(--color-gold)" },
  { icon: Mic2, title: "Real presenters", desc: "Live, human-hosted radio. Our presenters choose every track with care, share the stories behind the songs, and make the station feel like a friend in the room.", tint: "var(--color-pink)" },
  { icon: Radio, title: "Always on", desc: "24 hours a day, 7 days a week, in crystal-clear HD. Wherever you are and whenever you tune in, the soundtrack of your life is already playing.", tint: "var(--color-green)" },
];

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,178,62,0.14), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-amber">About</span>
              <h1 className="mb-6">Keeping generations connected through music.</h1>
              <p className="text-xl text-muted">
                Decades Worldwide Radio brings the greatest music from every era into one place —
                the timeless classics of the 60s, 70s, 80s and 90s, right through to today's biggest hits.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="mb-6">Our story</h2>
              <div className="space-y-5 text-lg text-cream/90 leading-relaxed">
                <p>
                  Some songs are time machines. The first dance, the long drive, the summer that never
                  seemed to end — the right track can take you straight back. That's the feeling
                  Decades Worldwide Radio was built to give you, around the clock.
                </p>
                <p>
                  We're a live radio station, not a playlist. Five decades of the greatest hits, hand-picked
                  and hosted by real presenters who love this music as much as you do. It's the soundtrack
                  of your life — and it's playing right now.
                </p>
                <p className="text-muted">
                  {/* {{ABOUT_STORY_EXTRA — optional: founding story, where the station broadcasts from, the team's history.}} */}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-night">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-12">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-teal">What we stand for</span>
              <h2>The Decades promise</h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="glow-card h-full p-8" style={{ ["--accent" as string]: v.tint }}>
                    <v.icon className="w-9 h-9 mb-6" strokeWidth={1.5} style={{ color: v.tint }} />
                    <h3 className="text-2xl tracking-wide mb-3">{v.title}</h3>
                    <p className="text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Listen anywhere */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="mb-4">Listen anywhere</h2>
              <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
                Tune in on the web player, or find us on your favourite platform — at home, in the car, or on the move.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {PLATFORMS.map((p) => (
                  <span key={p} className="inline-flex items-center px-5 py-2.5 rounded-full bg-night-soft border border-night-line text-cream font-medium">
                    {p}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-night-line">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,178,62,0.16), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">Join thousands of daily listeners.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">There's a whole community tuned in right now. Pull up a chair.</p>
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
