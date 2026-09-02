import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { EASE } from "./primitives";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Excavator clearing overgrown land at golden hour in North Alabama"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28"
      >
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="block h-px w-10 bg-champagne" />
            <span className="label-micro">Fully Insured • North Alabama</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-[3.4rem] leading-[0.88] text-ivory sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Land work.
            <br />
            <span className="text-champagne-light">Done right.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-stone md:text-lg"
          >
            Professional land clearing, excavation, grading, drainage, storm cleanup and property
            services built to get the job done right.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-base btn-primary">
              Get a Free Estimate
            </a>
            <a href="#services" className="btn-base btn-ghost">
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-14 flex items-end justify-between border-t border-border/60 pt-6">
          <motion.a
            href="#trust"
            aria-label="Scroll to content"
            className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.28em] text-warmgray uppercase"
          >
            Scroll
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="block h-6 w-px bg-champagne"
            />
          </motion.a>
          <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-warmgray uppercase">
            Muscle Shoals, AL
          </span>
        </div>
      </motion.div>
    </section>
  );
}
