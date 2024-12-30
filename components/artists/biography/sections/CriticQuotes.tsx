"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    quote: "El magistral colorista dominicano ha interpretado como nadie tal vez, el entorno criollo, hombre y paisaje, cielo, mar y tierra",
    author: "Marianne de Tolentino",
    publication: "Listín Diario",
    year: "2014"
  },
  {
    quote: "Guillo Pérez fue uno de los más altos maestros de la pintura dominicana de los últimos cien años. Su personalidad poseía un aire de dignidad al estilo de los grandes maestros clásicos de Hispanoamérica",
    author: "Cándido Gerón - Crítico de arte",
    publication: "Acento",
    year: "2023"
  },
  {
    quote: "Además de los aportes fundamentales de Guillo Pérez mediante la conceptualización de lo nacional en la pintura moderna dominicana, está su capacidad de aprendizaje originario con su maestro Yoryi Morel; con los lenguajes estéticos y estructuras plásticas del Constructivismo Latinoamericano del uruguayo Joaquín Torres García, asociándolo con inteligencia e intuición al Constructivismo Ruso, generando una poética y una teoría estética que él estableció como Constructivismo Antillano. En la República Dominicana, sólo Jaime Colson, con su Neohumanismo, creó una base científica para definir los principios estéticos de su arte.",
    author: "Abil Peralta Agüero - Reconocido crítico, curador de arte",
    publication: "El Periódico Hoy",
    year: "2014"
  }
];

export function CriticQuotes() {
  return (
    <section>
      <h2 className="text-2xl font-serif mb-8">Críticas y Reconocimientos</h2>

      <div className="space-y-6">
        {quotes.map((quote, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg italic mb-4">
                "{quote.quote}"
              </blockquote>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">{quote.author}</p>
                <p>{quote.publication}, {quote.year}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}