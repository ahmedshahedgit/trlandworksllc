import { motion } from "motion/react";
import aboutImg from "@/assets/about.jpg";
import { EASE, MaskImage, Reveal, SectionLabel } from "./primitives";

export function About() {
  return (
    <section id="about" className="grain relative bg-graphite py-24 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
        <MaskImage
          src={aboutImg}
          alt="Operator running a track loader on a graded site at dusk"
          width={1024}
          height={1280}
          className="aspect-4/5 w-full lg:aspect-3/4"
          imgClassName="hover:scale-105"
        />

        <div>
          <SectionLabel>Who We Are</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.6rem] text-ivory md:text-6xl">
              Built for the
              <br />
              tough jobs.
            </h2>
          </Reveal>
          <motion.span
            className="mt-8 block h-px bg-champagne"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
          />
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-warmgray md:text-lg">
              <p>
                T&amp;R Landworks LLC is a professional landworks company serving property owners
                and communities throughout North Alabama. From overgrown acreage to finished,
                usable ground, we handle the heavy-duty site work most people would rather not
                take on themselves.
              </p>
              <p>
                Property preparation, land improvement, cleanup and grading — done with reliable
                work, professional service and the equipment to see the job through. We are fully
                insured, so the work is backed from the first pass to the final grade.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Reliable work",
                "Professional service",
                "Fully insured",
                "Property preparation",
                "Land improvement",
                "Heavy-duty site work",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.14em] text-stone uppercase"
                >
                  <span className="h-1 w-1 shrink-0 bg-champagne" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
