"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users } from "lucide-react";

export function Mission() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Conectar artistas excepcionales con amantes del arte, fomentando un diálogo cultural significativo."
    },
    {
      icon: Heart,
      title: "Visión",
      description: "Ser el espacio de referencia para el arte contemporáneo, impulsando la innovación y la excelencia artística."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Excelencia, autenticidad, innovación y compromiso con la comunidad artística."
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-serif mb-12 text-center">Nuestra Esencia</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} className="relative overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <value.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}