import { Hero } from "@/components/home/Hero";
import { FeaturedArtworks } from "@/components/home/FeaturedArtworks";
import { LocationMap } from "@/components/home/LocationMap";
import { Newsletter } from "@/components/home/Newsletter";
import { Partners } from "@/components/home/Partners";
import { ImageCarousel } from "@/components/carousel/ImageCarousel";
import { UpcomingExhibitions } from "@/components/exhibitions/UpcomingExhibitions";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArtworks />
      <ServicesSection />
      {/* <UpcomingExhibitions /> */}
      {/* <ImageCarousel /> */}
      <Partners />
      <LocationMap />
      <Newsletter />
    </>
  );
}