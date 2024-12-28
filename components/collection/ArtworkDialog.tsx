"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface Artwork {
  id: string;
  title: string;
  url: string;
  year: string;
  technique: string;
  description: string;
}

interface ArtworkDialogProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkDialog({ artwork, onClose }: ArtworkDialogProps) {
  if (!artwork) return null;

  return (
    <Dialog open={!!artwork} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogTitle className="text-2xl font-serif mb-4">{artwork.title}</DialogTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src={artwork.url}
              alt={artwork.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p><strong>Año:</strong> {artwork.year}</p>
            <p><strong>Técnica:</strong> {artwork.technique}</p>
            <p>{artwork.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}