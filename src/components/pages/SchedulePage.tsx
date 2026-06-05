import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { ScheduleGrid } from "../ScheduleGrid";
import { Button } from "../Button";

export function SchedulePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl">
              <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] mb-4 text-teal">Schedule</span>
              <h1 className="mb-6">What's on, when.</h1>
              <p className="text-xl text-muted">
                Your daily guide to Decades Worldwide Radio. Find your favourite show, set your reminder,
                and never miss a beat.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <ScheduleGrid />
            </FadeIn>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-night-line">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(52,214,200,0.14), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">On air right now.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Don't wait for your slot — there's great music playing this second.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <LivePlayer label="Listen Live" />
                <Button variant="ghost" href="/shows">Meet the presenters</Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
