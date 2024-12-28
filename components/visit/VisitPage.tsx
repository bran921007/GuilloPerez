"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { OpeningHours } from "./sections/OpeningHours";
import { ContactInfo } from "./sections/ContactInfo";
import { VisitMap } from "./sections/VisitMap";
import { DirectionsInfo } from "./sections/DirectionsInfo";

export function VisitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Planea tu Visita</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Te invitamos a explorar nuestra galería y sumergirte en el mundo del arte contemporáneo.
        Aquí encontrarás toda la información necesaria para hacer tu visita memorable.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <Card>
          <CardContent className="p-8">
            <OpeningHours />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <ContactInfo />
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <DirectionsInfo />
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif mb-8">Ubicación</h2>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <VisitMap />
        </div>
      </div>

      <Card>
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-4">¿Necesitas más información?</h2>
            <p className="text-muted-foreground mb-6">
              Estamos aquí para ayudarte a planificar tu visita y responder cualquier pregunta que tengas.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = `mailto:linaresamalia@gmail.com`}
            >
              Contáctanos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}