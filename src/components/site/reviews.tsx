import { Reveal, SectionLabel } from "./primitives";

const REVIEWS = [
  {
    quote:
      "They cleared a badly overgrown lot for us and left the property looking better than we imagined. Fast, professional and fairly priced.",
    name: "Homeowner",
    location: "Muscle Shoals, AL",
  },
  {
    quote:
      "After the storm we had trees down everywhere. They showed up when they said they would and hauled all of it off the same week.",
    name: "Property Owner",
    location: "Athens, AL",
  },
  {
    quote:
      "Regraded our driveway and fixed a drainage problem we'd fought for years. No more standing water. Highly recommend these guys.",
    name: "Repeat Customer",
    location: "Florence, AL",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-champagne" aria-hidden="true">
          <path d="M10 1.5l2.47 5.36 5.86.68-4.35 3.97 1.18 5.77L10 14.4l-5.16 2.88 1.18-5.77L1.67 7.54l5.86-.68L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="grain border-y border-border bg-graphite-warm py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Reviews</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">
              Recommended by the people we work for.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-border md:mt-20 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.quote} delay={i * 0.12} className="bg-graphite-warm">
              <figure className="flex h-full flex-col justify-between p-8 md:p-10">
                <div>
                  <Stars />
                  <blockquote className="mt-6 text-base leading-relaxed text-stone">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border/70 pt-5">
                  <div className="font-display text-lg text-ivory">{r.name}</div>
                  <div className="mt-1 text-[0.65rem] font-semibold tracking-[0.24em] text-taupe uppercase">
                    {r.location}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
