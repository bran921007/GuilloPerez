"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Link from "next/link";

export function CurrentExhibition() {
  const phoneNumber = "18493610323"; // Removed spaces and special characters
  const message = "Hola, me gustaría reservar una visita guiada para la exposición OLEAJE.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="./oleaje-afiche2.jpg"
              alt="Exposición actual: OLEAJE"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
              En Exhibición
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-serif mb-2">OLEAJE</h2>
            <p className="text-xl text-primary mb-6">Exposición Colectiva de 12 Artistas</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <span>30 Noviembre 2024 - 12 Enero 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span>D'Guillermo Galeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span>09:00 am - 6:00 pm</span>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-5 h-5 text-muted-foreground mt-1" />
                <span className="text-sm">
                  Gabrielle Pérez • Joel Conell • Jose Sejo • Jose Somavilla • 
                  Willy Pérez • Miguel Gómez • Miguel Hernández • Miriam Miniño • 
                  Muriel Venne • Persio Checo Alonzo • Manuel Sepúlveda • Josefina Barceló
                </span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              Un impresionante homenaje al movimiento, la fuerza y la conexión que evocan 
              las olas. Doce artistas excepcionales se unen para presentar obras que tocan 
              el alma y despiertan emociones, transformando sus diversas visiones artísticas 
              en una experiencia colectiva única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href="https://www.instagram.com/p/DDOCckhPKCP/" rel="noreferrer noopener" target="_blank">
                  Más Información
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Reservar Visita Guiada
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}