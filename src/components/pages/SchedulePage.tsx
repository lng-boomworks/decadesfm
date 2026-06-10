import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { Button } from "../Button";

export function SchedulePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-12 md:pt-44 md:pb-16">
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
              <div className="glow-card overflow-hidden p-2 sm:p-4" style={{ ["--accent" as string]: "var(--color-teal)" }}>
                <iframe
                  src="https://s6.citrus3.com/controller/Event/1194/upcomingWeek?start=00:00:00&end=24:00:00"
                  title="Decades Worldwide Radio weekly schedule"
                  scrolling="auto"
                  className="block w-full rounded-xl"
                  style={{ border: "none", filter: "invert(0.92) hue-rotate(180deg)", aspectRatio: "1.3", maxHeight: "80vh" }}
                ></iframe>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-night-line">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, rgba(52,214,200,0.14), transparent 60%)" }} />
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">On air right now.</h2>
              <p className="text-muted text-lg mb-10 max-w-xl mx-auto">Don't wait for your slot - there's great music playing this second.</p>
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
