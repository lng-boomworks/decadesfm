import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { NowPlayingStrip } from "../NowPlayingStrip";
import { DecadeGrid } from "../DecadeGrid";
import { Button } from "../Button";
import { Radio, Mic2, Globe2, ArrowRight } from "lucide-react";
import { withBase } from "../../utils/url";
import { PLATFORMS } from "../../utils/site";

const reasons = [
  {
    icon: Radio,
    title: "Five decades, one dial",
    desc: "From the 60s to today's biggest hits — all the music you love in one place, 24/7. Tune the era to your mood with our decade browser.",
  },
  {
    icon: Mic2,
    title: "Real presenters, live",
    desc: "Human curation, not an algorithm. Our presenters know and love this music as much as you do — and they're on air through the day.",
  },
  {
    icon: Globe2,
    title: "Listen anywhere, in HD",
    desc: "Crystal-clear 320kbps streaming on the web, plus TuneIn, Alexa, Spotify and myTuner. Wherever you are, Decades is with you.",
  },
];

const featuredShows = [
  { slot: "Weekdays · Drive", show: "Drive Time Decades", line: "The big hits to soundtrack your journey home." },
  { slot: "Weekdays · Evenings", show: "Evening Sessions", line: "Deeper cuts and timeless classics after dark." },
  { slot: "Weekends · Mornings", show: "Weekend Throwbacks", line: "A nostalgic start to the weekend, every era welcome." },
];

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,178,62,0.16), transparent 60%), radial-gradient(ellipse 70% 50% at 90% 20%, rgba(232,70,110,0.12), transparent 60%)" }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-night-soft border border-night-line text-xs font-medium uppercase tracking-widest text-amber mb-6">
                  60s · 70s · 80s · 90s · to Today
                </span>
                <h1 className="mb-6 text-balance">
                  The Soundtrack of Your Life — <span className="text-amber">Live, 24/7.</span>
                </h1>
                <p className="text-xl text-muted mb-9 text-balance max-w-2xl">
                  Five decades of the greatest hits — 60s, 70s, 80s, 90s to today — hosted by
                  real presenters and streaming in crystal-clear HD.
                </p>
                <div className="flex flex-wrap gap-4">
                  <LivePlayer />
                  <Button variant="ghost" href="/decades">Browse by Decade</Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Live-state strip */}
        <NowPlayingStrip />

        {/* Decade browser */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-10 max-w-2xl">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-teal">Pick your era</span>
              <h2 className="mb-4">Browse by decade</h2>
              <p className="text-lg text-muted">Jump straight to the sound of your generation — or wander through them all.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <DecadeGrid />
            </FadeIn>
          </div>
        </section>

        {/* Why Decades */}
        <section className="py-20 md:py-24 bg-night">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-14">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-amber">Why Decades</span>
              <h2 className="mb-4">Not a playlist. A radio station.</h2>
              <p className="text-lg text-muted">Keeping generations connected through music — the way radio was meant to feel.</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {reasons.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.1}>
                  <div className="h-full p-8 rounded-2xl bg-night-soft border border-night-line hover:border-amber/40 transition-colors">
                    <r.icon className="w-9 h-9 mb-6 text-amber" strokeWidth={1.5} />
                    <h3 className="text-xl mb-3">{r.title}</h3>
                    <p className="text-muted leading-relaxed">{r.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Featured shows */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div className="max-w-2xl">
                <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-magenta">On the air</span>
                <h2 className="mb-0">Shows worth tuning in for</h2>
              </div>
              <a href={withBase("/shows")} className="inline-flex items-center gap-1.5 text-amber font-medium hover:gap-2.5 transition-all">
                All shows & presenters <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredShows.map((s, i) => (
                <FadeIn key={s.show} delay={i * 0.1}>
                  <a href={withBase("/shows")} className="group block h-full p-8 rounded-2xl bg-night-soft border border-night-line hover:-translate-y-1 hover:border-amber/40 transition-all duration-300">
                    <p className="text-[11px] uppercase tracking-widest text-teal mb-3">{s.slot}</p>
                    <h3 className="text-xl mb-3 group-hover:text-amber transition-colors">{s.show}</h3>
                    <p className="text-muted leading-relaxed">{s.line}</p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className="py-12 border-y border-night-line bg-night">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            <span className="font-display font-bold text-cream">Thousands of daily listeners</span>
            <span className="w-1 h-1 rounded-full bg-muted hidden sm:block" />
            <span className="font-display font-bold text-cream">HD 320kbps audio</span>
            <span className="w-1 h-1 rounded-full bg-muted hidden sm:block" />
            <span className="text-muted">Heard on {PLATFORMS.join(" · ")}</span>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,178,62,0.18), transparent 60%)" }}
          />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">Press play on five decades.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                The music you love is already playing. Tune in now and make it the soundtrack of your day.
              </p>
              <div className="flex justify-center">
                <LivePlayer label="Tune in now" />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
