import { SERVICE_AREAS } from "@/lib/site-data";
import { Reveal, SectionLabel } from "./primitives";

export function ServiceArea() {
  return (
    <section id="service-area" className="grain relative overflow-hidden bg-graphite py-24 md:py-40">
      {/* Map-inspired background treatment (not a real map) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 60% 40%, black, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--champagne) 14%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Service Area</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">
              Proudly serving North Alabama.
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-border bg-border md:mt-20 md:grid-cols-5">
          {SERVICE_AREAS.map((area, i) => (
            <Reveal key={area} delay={(i % 5) * 0.07} className="bg-graphite">
              <li className="group flex items-center justify-between px-5 py-7 transition-colors duration-700 hover:bg-graphite-warm md:px-6">
                <span className="text-sm tracking-[0.06em] text-ivory md:text-base">{area}</span>
                <span className="h-1 w-1 bg-champagne opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.24em] text-taupe uppercase">
            Serving Tennessee and surrounding areas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
