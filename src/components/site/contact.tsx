import { BUSINESS, SERVICES } from "@/lib/site-data";
import { Reveal, SectionLabel } from "./primitives";

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-ink py-24 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--champagne) 12%, transparent), transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-7 text-[2.6rem] leading-[0.92] text-ivory md:text-7xl">
              Get a free
              <br />
              <span className="text-champagne-light">estimate.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
              Tell us about your property and what you need done. We&rsquo;ll get back to you with a
              straightforward quote — no pressure, no surprises.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <dl className="mt-12 space-y-px border border-border bg-border">
              {[
                { label: "Phone", value: BUSINESS.phone, href: BUSINESS.phoneHref },
                { label: "Email", value: BUSINESS.email, href: BUSINESS.emailHref },
                { label: "Based In", value: BUSINESS.location },
                { label: "Status", value: BUSINESS.status },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-center justify-between gap-3 bg-ink px-5 py-6 md:px-7"
                >
                  <dt className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-ivory md:text-base">
                    {row.href ? (
                      <a href={row.href} className="link-underline hover:text-champagne-light">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={BUSINESS.phoneHref} className="btn-base btn-primary">
                Call Now
              </a>
              <a href={BUSINESS.emailHref} className="btn-base btn-ghost">
                Email Us
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            className="border border-border bg-graphite p-6 md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const body = [
                `Name: ${data.get("name")}`,
                `Phone: ${data.get("phone")}`,
                `Service: ${data.get("service")}`,
                "",
                String(data.get("details") ?? ""),
              ].join("\n");
              window.location.href = `${BUSINESS.emailHref}?subject=${encodeURIComponent(
                "Estimate Request — T&R Landworks",
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <p className="label-micro">Request an Estimate</p>
            <div className="mt-8 space-y-6">
              {[
                { name: "name", label: "Name", type: "text", autoComplete: "name" },
                { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
                { name: "email", label: "Email", type: "email", autoComplete: "email" },
              ].map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 text-ivory transition-colors duration-500 outline-none placeholder:text-taupe focus:border-champagne"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="service"
                  className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-3 w-full border-b border-border bg-transparent pb-3 text-ivory transition-colors duration-500 outline-none focus:border-champagne"
                >
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title} className="bg-graphite text-ivory">
                      {s.title}
                    </option>
                  ))}
                  <option value="Other" className="bg-graphite text-ivory">
                    Something else
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="details"
                  className="text-[0.62rem] font-semibold tracking-[0.28em] text-taupe uppercase"
                >
                  Project Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 text-ivory transition-colors duration-500 outline-none focus:border-champagne"
                />
              </div>

              <button type="submit" className="btn-base btn-primary w-full">
                Send Request
              </button>
              <p className="text-xs leading-relaxed text-taupe">
                Prefer to talk? Call{" "}
                <a href={BUSINESS.phoneHref} className="text-champagne">
                  {BUSINESS.phone}
                </a>
                .
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
