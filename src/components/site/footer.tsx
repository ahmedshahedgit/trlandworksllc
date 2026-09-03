import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="grain border-t border-border bg-graphite">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              className="font-display text-lg tracking-[0.14em] text-ivory uppercase"
            >
              T&amp;R <span className="text-champagne">Landworks</span> LLC
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warmgray">
              Land clearing, excavation, grading, drainage, storm cleanup and property services
              across North Alabama. Fully insured.
            </p>
            <div className="mt-7 flex flex-col gap-2 text-sm text-stone">
              <a href={BUSINESS.phoneHref} className="link-underline w-fit hover:text-champagne-light">
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.emailHref} className="link-underline w-fit hover:text-champagne-light">
                {BUSINESS.email}
              </a>
              <span className="text-warmgray">{BUSINESS.location}</span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase">
              Navigate
            </h2>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-stone transition-colors duration-500 hover:text-champagne-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase">
              Services
            </h2>
            <ul className="mt-6 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title} className="text-sm text-stone">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-taupe uppercase">
            © {new Date().getFullYear()} T&amp;R Landworks LLC — All rights reserved
          </p>
          <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-taupe uppercase">
            Fully Insured • North Alabama
          </p>
        </div>
      </div>
    </footer>
  );
}
