"use client";

import { useState } from "react";
import { ArtworkCard } from "./ArtworkCard";
import { ArtworkDialog } from "./ArtworkDialog";
import { collections } from "@/lib/content/collections";

interface Artwork {
  id: string;
  title: string;
  url: string;
  year: string;
  technique: string;
  description: string;
}

export function CollectionPage() {
  const [selectedWork, setSelectedWork] = useState<Artwork | null>(null);
  const allWorks = [...collections.paintings, ...collections.sculptures];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Nuestra Colección</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Explore nuestra colección de obras destacadas del maestro Guillermo Pérez.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allWorks.map((work) => (
          <ArtworkCard
            key={work.id}
            artwork={work}
            onSelect={setSelectedWork}
          />
        ))}
      </div>

      <ArtworkDialog
        artwork={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}