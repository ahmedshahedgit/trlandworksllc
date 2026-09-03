import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { BeforeAfter } from "@/components/site/before-after";
import { Contact } from "@/components/site/contact";
import { FeaturedWork } from "@/components/site/featured-work";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Reels } from "@/components/site/reels";
import { Reviews } from "@/components/site/reviews";
import { ServiceArea } from "@/components/site/service-area";
import { Services } from "@/components/site/services";
import { TrustStrip } from "@/components/site/trust-strip";
import { WhyUs } from "@/components/site/why-us";
import { useLenis } from "@/hooks/use-lenis";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/site-data";

const TITLE = "T&R Landworks LLC | Land Clearing & Excavation, Muscle Shoals AL";
const DESCRIPTION =
  "Fully insured land clearing, excavation, grading, drainage, storm cleanup and gravel driveway work in Muscle Shoals and North Alabama. Free estimates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BUSINESS.name,
          description: DESCRIPTION,
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Muscle Shoals",
            addressRegion: "AL",
            postalCode: "35661",
            addressCountry: "US",
          },
          areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a })),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Land & Property Services",
            itemListElement: SERVICES.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.description },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();

  return (
    <div className="min-h-screen bg-graphite">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <WhyUs />
        <FeaturedWork />
        <Reels />
        <BeforeAfter />
        <Reviews />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
