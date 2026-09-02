import { useCallback, useRef, useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import { Reveal, SectionLabel } from "./primitives";

function Compare({
  before,
  after,
  label,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  label: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <Reveal>
      <figure>
        <div
          ref={ref}
          className="relative aspect-4/3 w-full cursor-ew-resize overflow-hidden border border-border select-none"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) setFromClientX(e.clientX);
          }}
          onPointerUp={() => (dragging.current = false)}
          onPointerCancel={() => (dragging.current = false)}
        >
          <img
            src={after}
            alt={afterAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={before}
              alt={beforeAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="pointer-events-none absolute top-4 left-4 bg-ink/70 px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.28em] text-ivory uppercase backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute top-4 right-4 bg-ink/70 px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.28em] text-champagne uppercase backdrop-blur-sm">
            After
          </span>

          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-champagne"
            style={{ left: `${pos}%`, boxShadow: "0 0 24px 2px rgba(198,161,91,0.45)" }}
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne bg-ink/85">
              <span className="text-champagne text-xs tracking-widest">‹ ›</span>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            aria-label={`${label} before and after comparison slider`}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
          />
        </div>
        <figcaption className="mt-4 text-[0.65rem] font-semibold tracking-[0.28em] text-warmgray uppercase">
          {label}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function BeforeAfter() {
  return (
    <section id="our-work" className="grain border-y border-border bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Before &amp; After</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.4rem] text-ivory md:text-6xl">Drag to see the change.</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-10">
          <Compare
            before={before1}
            after={after1}
            beforeAlt="Overgrown brush along a rural property line"
            afterAlt="Same property cleared and graded"
            label="Land Clearing & Grading"
          />
          <Compare
            before={before2}
            after={after2}
            beforeAlt="Washed out rutted dirt driveway"
            afterAlt="Freshly installed gravel driveway"
            label="Gravel Driveway"
          />
        </div>
      </div>
    </section>
  );
}
