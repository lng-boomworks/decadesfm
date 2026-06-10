import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { LivePlayer } from "../LivePlayer";
import { PresenterCard } from "../PresenterCard";

// Presenters - photo, name and a short bio. Add/remove entries freely.
// `image` paths live in public/images/presenters/. Fill each `bio:` below.
// A presenter with no photo yet shows a branded monogram placeholder.
const presenters = [
  { name: "Chris Kelly", image: "/images/presenters/chris-kelly.png", bio: "Chris started his DJ career in Bradford, West Yorkshire in 1975, launching his own company, The Disco Roadshow, by the age of 20. That grew into a lifelong full-time DJ career that's still going strong today, alongside True Media Group - the team behind the hugely successful True Radio. Now a formidable presence on Decades FM, Chris brings the full party experience to the airwaves, spinning the very best music from the sixties right through to the present day." },
  { name: "Dave Cooper", image: "/images/presenters/dave-cooper.png", bio: "Dave brings a vibrant mix of nostalgia and musical joy to the airwaves with his Hits from the Sixties to the Nineties show. From rock 'n' roll to eighties anthems and nineties favourites, he celebrates four decades of unforgettable music with warmth, enthusiasm and a brilliant sense of fun. Dave's show is a feelgood journey through the songs that shaped generations - the perfect soundtrack for anyone who loves a classic track with a great story behind it." },
  { name: "Jim Stevens", image: "/images/presenters/jim-stevens.png", bio: "Jim's radio career stretches back to the nineties, when he presented the weekday morning show on Eclipse FM - a station whose directors included the legendary Dave Cash - followed more recently by weekday afternoons on a commercial station in East Sussex. Along the way he's interviewed everyone from Bo Diddley (who insisted on being called \"Mr Diddley\") to comedian Richard Digance. Today Jim brings all that experience and good humour to his Happy Hour show on Decades Worldwide Radio." },
  { name: "John Holman", image: "/images/presenters/john-holman.png", bio: "John's roots run deep in the golden era of British songwriting, having worked as a researcher for legendary names including Tony Hiller, Roger Cook, Barry Mason, Roger Greenaway and The Fortunes. He channels that encyclopaedic knowledge into his Blasts from the Past: Non-Hit Wonders show - unearthing the brilliant records that somehow slipped through the net, and giving them the airtime they always deserved." },
  { name: "Ian Lee", image: "/images/presenters/ian-lee.png", bio: "{{IAN_LEE_BIO}}" },
  { name: "Lee Howard", image: "/images/presenters/lee-howard.png", bio: "Lee has spent most of his life in the music business - as a guitarist and vocalist on a wealth of well-known records by famous artists, with three singles of his own, and as an executive at Decca and Chrysalis Records. He brings that insider knowledge and deep musical pedigree to prime-time radio, presenting shows that span everything from the sixties to the present day, with a loyal following all over the globe." },
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
                Real presenters who live and breathe this music - on air through the day, hand-picking
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
