import { Hero } from "@/components/home/Hero";
import { FeaturedArtworks } from "@/components/home/FeaturedArtworks";
import { LocationMap } from "@/components/home/LocationMap";
import { Newsletter } from "@/components/home/Newsletter";
import { Partners } from "@/components/home/Partners";
import { ImageCarousel } from "@/components/carousel/ImageCarousel";
import { UpcomingExhibitions } from "@/components/exhibitions/UpcomingExhibitions";
import { ServicesSection } from "@/components/home/ServicesSection";
import Script from 'next/script'



function InstagramWidget() {
  return (
    <>
     <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
      <div className="elfsight-app-bbb2c86e-006b-4961-b31d-6cc1bbad43d1" data-elfsight-app-lazy></div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArtworks />
      <ServicesSection />
      <InstagramWidget />
      {/* <UpcomingExhibitions /> */}
      {/* <ImageCarousel /> */}
      <Partners />
      <LocationMap />
      <Newsletter />
    </>
  );
}