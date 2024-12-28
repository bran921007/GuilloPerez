"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Palette, Lightbulb, Brush } from "lucide-react";

export function ArtisticStyle() {
  return (
    <section>
      <h2 className="text-2xl font-serif mb-8">Estilo Artístico</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <Palette className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Técnica Distintiva</h3>
            <p className="text-muted-foreground">
              Uso magistral del óleo sobre tela y aplicación de espátula para lograr 
              fuertes empastes, creando texturas únicas y expresivas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Lightbulb className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Influencias</h3>
            <p className="text-muted-foreground">
              Formado bajo la tutela del reconocido pintor Yoryi Morel, con fuerte 
              influencia del expresionismo abstracto y la cultura dominicana.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Brush className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-medium mb-2">Temática</h3>
            <p className="text-muted-foreground">
              Exploración de monumentos coloniales, marinas, figuras, paisajes, 
              flores, hojas de plátano y gallos, reflejando la identidad dominicana.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-lg mb-4">
            El estilo de Guillo Pérez se distingue por su capacidad única para 
            interpretar el entorno criollo, abarcando tanto elementos naturales 
            como culturales de la República Dominicana.
          </p>
          <p className="text-muted-foreground">
            Su obra se caracteriza por una profunda conexión con la identidad 
            dominicana, expresada a través de un dominio técnico excepcional y 
            una sensibilidad artística que trasciende fronteras.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}