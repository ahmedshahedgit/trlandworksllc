import { Reveal, SectionLabel } from "./primitives";

const PRINCIPLES = [
  { title: "Reliable", copy: "Professional service with attention to the job." },
  { title: "Fully Insured", copy: "Confidence and peace of mind for customers." },
  {
    title: "Built for Tough Work",
    copy: "Capable of handling demanding land and property projects.",
  },
  {
    title: "Local & Responsive",
    copy: "Serving communities throughout North Alabama and surrounding areas.",
  },
];

export function WhyUs() {
  return (
    <section className="grain border-y border-border bg-graphite-warm py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <SectionLabel>Why Us</SectionLabel>
        <Reveal delay={0.1}>
          <h2 className="mt-7 max-w-2xl text-[2.4rem] text-ivory md:text-6xl">
            Why T&amp;R Landworks?
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:mt-24 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="bg-graphite-warm">
              <div className="h-full px-0 py-8 md:px-8">
                <span className="font-display text-sm text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl text-ivory uppercase">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgray">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
