"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[16/9] md:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
              alt="Exposición destacada"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                15 Abril, 2024
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                María González
              </span>
            </div>
            
            <h2 className="text-2xl font-serif mb-4">
              Tendencias Emergentes en el Arte Contemporáneo
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Exploramos las últimas tendencias que están definiendo el panorama 
              del arte contemporáneo en 2024, desde el arte digital hasta las 
              instalaciones inmersivas.
            </p>
            
            <Button asChild>
              <Link href="/blog/tendencias-arte-contemporaneo">
                Leer Más
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}