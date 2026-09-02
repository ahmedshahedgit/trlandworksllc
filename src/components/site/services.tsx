import { motion } from "motion/react";
import { SERVICES } from "@/lib/site-data";
import { EASE, Reveal, SectionLabel } from "./primitives";

export function Services() {
  return (
    <section id="services" className="grain relative border-y border-border bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <SectionLabel>What We Do</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">
              From overgrown land to a finished site.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:mt-24 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.number}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.1 + 0.05, ease: EASE }}
              className="group relative bg-graphite p-8 transition-colors duration-700 hover:bg-graphite-warm md:p-12"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-display text-sm text-champagne">{s.number}</span>
                <span className="mt-2 h-px flex-1 origin-right scale-x-0 bg-champagne transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
              </div>
              <h3 className="mt-8 text-xl leading-tight text-ivory uppercase md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-warmgray md:text-base">
                {s.description}
              </p>
              <span className="mt-8 inline-block text-[0.65rem] font-semibold tracking-[0.28em] text-taupe uppercase transition-colors duration-500 group-hover:text-champagne">
                Available Now
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
