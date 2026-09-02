import { Counter, Reveal } from "./primitives";

export function TrustStrip() {
  return (
    <section id="trust" className="grain border-y border-border bg-graphite-warm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {[
          { top: <><Counter value={100} suffix="%" /></>, label: "Insured" },
          { top: <><Counter value={13} suffix="+" /></>, label: "Recommendations" },
          { top: "North", label: "Alabama" },
          { top: "Pro", label: "Landwork" },
        ].map((s, i) => (
          <Reveal key={s.label} delay={i * 0.12} className="px-6 py-10 md:px-10 md:py-14">
            <div className="font-display text-4xl text-ivory md:text-5xl">{s.top}</div>
            <div className="mt-3 text-[0.65rem] font-semibold tracking-[0.28em] text-taupe uppercase">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
