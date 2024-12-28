"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { biographyPhotos } from "@/lib/content/biography-photos";

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedPhoto(prev => 
      prev !== null ? (prev - 1 + biographyPhotos.length) % biographyPhotos.length : null
    );
  };

  const handleNext = () => {
    setSelectedPhoto(prev => 
      prev !== null ? (prev + 1) % biographyPhotos.length : null
    );
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif mb-8">Galería Fotográfica</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biographyPhotos.map((photo, index) => (
          <Card 
            key={index}
            className="group cursor-pointer overflow-hidden"
            onClick={() => setSelectedPhoto(index)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl">
          {selectedPhoto !== null && (
            <div className="relative">
              <DialogTitle className="sr-only">
                {biographyPhotos[selectedPhoto].title}
              </DialogTitle>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 z-10"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="space-y-4">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={biographyPhotos[selectedPhoto].url}
                    alt={biographyPhotos[selectedPhoto].title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2">
                    {biographyPhotos[selectedPhoto].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {biographyPhotos[selectedPhoto].description}
                  </p>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="transform -translate-x-12"
                  onClick={handlePrevious}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transform translate-x-12"
                  onClick={handleNext}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}