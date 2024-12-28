"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Artwork {
  id: string;
  title: string;
  url: string;
  year: string;
  technique: string;
  description: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
  onSelect: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
  return (
    <Card 
      className="overflow-hidden group cursor-pointer"
      onClick={() => onSelect(artwork)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={artwork.url}
            alt={artwork.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2">{artwork.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {artwork.year} • {artwork.technique}
          </p>
          <Button variant="outline" size="sm">Ver Detalles</Button>
        </div>
      </CardContent>
    </Card>
  );
}