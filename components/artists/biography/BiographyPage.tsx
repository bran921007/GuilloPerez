"use client";

import { Timeline } from "./sections/Timeline";
import { ArtisticStyle } from "./sections/ArtisticStyle";
import { Achievements } from "./sections/Achievements";
import { NotableWorks } from "./sections/NotableWorks";
import { CriticQuotes } from "./sections/CriticQuotes";
import { CurrentProjects } from "./sections/CurrentProjects";
import { Biography } from "./sections/Biography";
import { PhotoGallery } from "./sections/PhotoGallery";
import { DetailedBio } from "./sections/DetailedBio";
import { HeroSection } from "./sections/HeroSection";

export function BiographyPage() {
  return (
    <div>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <DetailedBio />
            <PhotoGallery />
            <Timeline />
            <ArtisticStyle />
            <NotableWorks />
            <CriticQuotes />
          </div>

          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <Achievements />
            <CurrentProjects />
            <Biography />
          </div>
        </div>
      </div>
    </div>
  );
}