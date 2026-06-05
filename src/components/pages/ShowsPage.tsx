import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { PresenterCard } from "../PresenterCard";

// v1 placeholder presenters. Swap names / shows / slots / bios / photos when the
// client supplies real presenter details. `image` paths live in public/images/.
const presenters = [
  { name: "{{PRESENTER_1_NAME}}", show: "Morning Glory", slot: "Weekdays · 06:00–10:00", bio: "{{PRESENTER_1_BIO — a line on who they are and what they bring to the morning show.}}" },
  { name: "{{PRESENTER_2_NAME}}", show: "Mid-Morning Mix", slot: "Weekdays · 10:00–13:00", bio: "{{PRESENTER_2_BIO}}" },
  { name: "{{PRESENTER_3_NAME}}", show: "Lunchtime Classics", slot: "Weekdays · 13:00–16:00", bio: "{{PRESENTER_3_BIO}}" },
  { name: "{{PRESENTER_4_NAME}}", show: "Drive Time Decades", slot: "Weekdays · 16:00–19:00", bio: "{{PRESENTER_4_BIO}}" },
  { name: "{{PRESENTER_5_NAME}}", show: "Evening Sessions", slot: "Weekdays · 19:00–22:00", bio: "{{PRESENTER_5_BIO}}" },
  { name: "{{PRESENTER_6_NAME}}", show: "After Dark", slot: "Nightly · 22:00–06:00", bio: "{{PRESENTER_6_BIO}}" },
];

export function ShowsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-12 md:pt-44 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-amber">Shows &amp; Presenters</span>
              <h1 className="mb-6">Meet the voices of Decades.</h1>
              <p className="text-xl text-muted">
                Real presenters who live and breathe this music — on air through the day, hand-picking
                the hits that connect every generation. This is what an algorithm can't do.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {presenters.map((p, i) => (
                <FadeIn key={i} delay={(i % 3) * 0.1}>
                  <PresenterCard {...p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-night-line">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(255,178,62,0.16), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">Hear them live, right now.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Someone's always on air. Tune in and say hello.</p>
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
