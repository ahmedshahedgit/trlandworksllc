import { motion } from "motion/react";
import { EASE, Reveal, SectionLabel } from "./primitives";

const SLOTS = [1, 2, 3];

export function Reels() {
  return (
    <section className="grain bg-graphite py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel>From the Field</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">
              Real work. Real machines. Real results.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.14, ease: EASE }}
              className={`group relative aspect-9/16 overflow-hidden rounded-lg border border-champagne/25 bg-graphite-warm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-champagne/60 ${
                n === 3 ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:mx-0 lg:w-auto" : ""
              }`}
            >
              {/* Replace this container's contents with a Facebook Reel embed (iframe). */}
              <div
                data-reel-slot={n}
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-slate-dark/40 via-transparent to-ink/60"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-champagne/60 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="ml-1 h-5 w-5 fill-champagne"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-[0.62rem] font-semibold tracking-[0.28em] text-stone uppercase">
                  Watch Reel
                </span>
              </div>
              <span className="absolute bottom-5 left-5 text-[0.6rem] font-semibold tracking-[0.28em] text-taupe uppercase">
                Reel {String(n).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
