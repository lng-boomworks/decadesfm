import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { Button } from "../Button";
import { HeroTimeline } from "../HeroTimeline";
import { StatusStrip } from "../StatusStrip";
import { CategoryCard } from "../CategoryCard";
import { FeatureCard } from "../FeatureCard";
import { Radio, Mic2, Disc3, Globe2 } from "lucide-react";
import { withBase } from "../../utils/url";
import { DECADES, STREAM_URL } from "../../utils/site";

const features = [
  { icon: Radio, title: "Live 24/7 in HD", desc: "Crystal-clear 320kbps streaming, around the clock. The music never stops.", ctaLabel: "Listen Live", href: STREAM_URL, tint: "var(--color-red)", external: true },
  { icon: Mic2, title: "Real Presenters", desc: "Human-hosted shows from voices who live and breathe this music — not an algorithm.", ctaLabel: "Meet the team", href: "/shows", tint: "var(--color-pink)" },
  { icon: Disc3, title: "Five Decades", desc: "From the 60s to today's biggest hits. Tune the era to your mood with the decade browser.", ctaLabel: "Browse decades", href: "/decades", tint: "var(--color-purple)" },
  { icon: Globe2, title: "Listen Anywhere", desc: "On the web, plus TuneIn, Alexa, Spotify and myTuner. Wherever you are, we're with you.", ctaLabel: "How to listen", href: "/about", tint: "var(--color-green)" },
];

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — split layout */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-6">
                  Broadcasting worldwide · 24/7
                </span>
                <h1 className="mb-6">
                  The Soundtrack<br />of Your Life
                </h1>
                <p className="text-xl text-muted mb-9 max-w-xl">
                  Five decades of the greatest hits — 60s, 70s, 80s, 90s to today — live and
                  hosted by real presenters, streaming in crystal-clear HD.
                </p>
                <div className="flex flex-wrap gap-4">
                  <LivePlayer />
                  <Button variant="ghost" href="/decades">Browse by Decade</Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.15} direction="left">
                <HeroTimeline />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 2. Status / featured content strip */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn><StatusStrip /></FadeIn>
          </div>
        </section>

        {/* 3. Category grid — five decades */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-12">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-3 text-blue">Pick your era</span>
              <h2 className="mb-4">Music By Decades</h2>
              <p className="text-lg text-muted">Jump straight to the sound of your generation — or wander through them all.</p>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {DECADES.map((d, i) => (
                <FadeIn key={d.id} delay={(i % 5) * 0.08}>
                  <CategoryCard label={d.label} sub={d.sub} blurb={d.blurb} tint={d.tint} image={d.image} href={withBase(`/decades#${d.id}`)} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Feature grid — four informational cards */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-12">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-3 text-gold">Why Decades</span>
              <h2 className="mb-4">Not A Playlist. A Radio Station.</h2>
              <p className="text-lg text-muted">Keeping generations connected through music — the way radio was meant to feel.</p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={(i % 4) * 0.08}>
                  <FeatureCard {...f} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,43,43,0.16), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">Press Play On Five Decades.</h2>
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
