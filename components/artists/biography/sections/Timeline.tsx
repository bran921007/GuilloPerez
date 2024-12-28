"use client";

import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "1923",
    title: "Nacimiento",
    description: "Nace en San Víctor, Moca, República Dominicana."
  },
  {
    year: "1946",
    title: "Graduación",
    description: "Se gradúa de la Escuela de Bellas Artes de Santiago."
  },
  {
    year: "1950",
    title: "Primeras Exposiciones",
    description: "Participa en exposiciones colectivas en Santiago y Santo Domingo."
  },
  {
    year: "1952",
    title: "Inicio en la Docencia",
    description: "Es nombrado profesor en la Escuela de Bellas Artes de Santiago."
  },
  {
    year: "1966-1968",
    title: "Reconocimientos",
    description: "Obtiene primeros premios consecutivos en el Concurso Eduardo León Jimenes."
  },
  {
    year: "1984",
    title: "Fundación de su Escuela",
    description: "Establece la Escuela de Arte Guillo Pérez en Santo Domingo."
  },
  {
    year: "2014",
    title: "Fallecimiento",
    description: "Fallece en Santo Domingo, dejando un importante legado artístico."
  }
];

export function Timeline() {
  return (
    <section>
      <h2 className="text-3xl font-serif mb-8">Trayectoria Artística</h2>
      
      <div className="relative">
        <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border" />
        
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{event.year.slice(-2)}</span>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-medium">{event.title}</h3>
                      <span className="text-sm text-muted-foreground">{event.year}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}