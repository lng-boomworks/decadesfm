import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";

interface Section { heading: string; body: string; }

interface LegalPageProps {
  title: string;
  intro: string;
  sections: Section[];
}

/** Shared layout for simple legal pages (Privacy, Terms). */
export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h1 className="mb-6">{title}</h1>
              <p className="text-xl text-muted">{intro}</p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {sections.map((s) => (
              <FadeIn key={s.heading}>
                <div className="glow-card p-7" style={{ ["--accent" as string]: "var(--color-blue)" }}>
                  <h3 className="text-2xl tracking-wide text-foreground mb-3">{s.heading}</h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </div>
              </FadeIn>
            ))}
            <p className="text-sm text-muted/70 pt-4">
              This is placeholder legal copy for launch. Replace with your reviewed Privacy Notice / Terms before relying on it.
            </p>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden border-t border-border">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="mb-6">Back To The Music.</h2>
              <div className="flex justify-center"><LivePlayer label="Listen Live" /></div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
