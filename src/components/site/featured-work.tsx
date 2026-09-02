import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import clearing from "@/assets/work-clearing.jpg";
import excavation from "@/assets/work-excavation.jpg";
import grading from "@/assets/work-grading.jpg";
import driveway from "@/assets/work-driveway.jpg";
import storm from "@/assets/work-storm.jpg";
import { MaskImage, Reveal, SectionLabel } from "./primitives";

function ParallaxPanel({
  src,
  alt,
  caption,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`group ${className ?? ""}`}>
      <motion.div style={{ y }}>
        <MaskImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full"
          imgClassName="group-hover:scale-[1.06]"
        />
      </motion.div>
      <div className="mt-4 flex items-center gap-3">
        <span className="h-1 w-1 bg-champagne" />
        <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-warmgray uppercase">
          {caption}
        </span>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section id="projects" className="grain bg-graphite py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>In the Field</SectionLabel>
            <Reveal delay={0.1}>
              <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">
                Heavy work.
                <br />
                Clean results.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-warmgray md:text-base">
              Clearing, excavation, grading, driveways and storm cleanup across North Alabama
              properties.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-x-8 md:gap-y-20">
          <ParallaxPanel
            src={clearing}
            alt="Forestry mulcher clearing thick brush"
            caption="Land Clearing"
            width={1600}
            height={1000}
            className="md:col-span-7 [&_img]:aspect-16/10"
          />
          <ParallaxPanel
            src={excavation}
            alt="Excavator bucket digging a trench in red clay"
            caption="Excavation"
            width={1280}
            height={1600}
            className="md:col-span-4 md:col-start-9 md:mt-24 [&_img]:aspect-4/5"
          />
          <ParallaxPanel
            src={grading}
            alt="Dozer grading a large dirt site"
            caption="Grading"
            width={1600}
            height={1000}
            className="md:col-span-5 md:col-start-2 [&_img]:aspect-4/3"
          />
          <ParallaxPanel
            src={driveway}
            alt="New gravel driveway curving through trees"
            caption="Driveway Work"
            width={1280}
            height={1600}
            className="md:col-span-5 md:col-start-8 md:mt-16 [&_img]:aspect-4/5"
          />
          <ParallaxPanel
            src={storm}
            alt="Storm damaged trees being cleared with heavy equipment"
            caption="Storm Cleanup"
            width={1280}
            height={1600}
            className="md:col-span-8 md:col-start-3 [&_img]:aspect-16/10"
          />
        </div>
      </div>
    </section>
  );
}
