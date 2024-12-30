"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const notableWorks = [
  {
    title: "Rancho de Tabaco",
    category: "Obras",
    description: "Obra artística",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/obra1.jpg",
    details: "Pieza de la colección"
  },
  {
    title: "Carretas y Bueyes",
    category: "Obras", 
    description: "Obra artística",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/obra3.jpg",
    details: "Pieza de la colección"
  },
  {
    title: "Cañaveral",
    category: "Obras",
    description: "Obra artística",
    image: "https://guillermo-galeria.s3.us-east-1.amazonaws.com/obras/obra4.jpg",
    details: "Pieza de la colección"
  }
 ];

export function NotableWorks() {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedWork(prev => 
      prev !== null ? (prev - 1 + notableWorks.length) % notableWorks.length : null
    );
  };

  const handleNext = () => {
    setSelectedWork(prev => 
      prev !== null ? (prev + 1) % notableWorks.length : null
    );
  };

  return (
    <section>
      <h2 className="text-3xl font-serif mb-8">Algunas de sus Obras Destacadas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notableWorks.map((work, index) => (
          <Card 
            key={index} 
            className="overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedWork(index)}
          >
            <div className="aspect-square relative">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{work.title}</h3>
                <span className="text-sm text-muted-foreground">{work.year}</span>
              </div>
              <p className="text-muted-foreground mb-2">{work.description}</p>
              <p className="text-sm text-primary">{work.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedWork !== null} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl">
          {selectedWork !== null && (
            <div className="relative">
              <DialogTitle className="sr-only">
                {notableWorks[selectedWork].title}
              </DialogTitle>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 z-10"
                onClick={() => setSelectedWork(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <Image
                    src={notableWorks[selectedWork].image}
                    alt={notableWorks[selectedWork].title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-serif mb-2">
                    {notableWorks[selectedWork].title}
                  </h2>
                  {/* <p className="text-muted-foreground mb-4">
                    {notableWorks[selectedWork].year}
                  </p> */}
                  <p className="mb-4">
                    {notableWorks[selectedWork].details}
                  </p>
                  {/* <p className="text-sm text-primary">
                    {notableWorks[selectedWork].location}
                  </p> */}
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="transform -translate-x-4"
                  onClick={handlePrevious}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transform translate-x-4"
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