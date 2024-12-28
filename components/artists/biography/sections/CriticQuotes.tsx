"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    quote: "Pérez ha redefinido los límites entre el arte tradicional y contemporáneo, creando un lenguaje visual único que resuena tanto con el pasado como con el futuro.",
    author: "María González",
    publication: "Arte Contemporáneo Magazine",
    year: "2018"
  },
  {
    quote: "Su trabajo no solo representa una evolución en el arte latinoamericano, sino que establece nuevos paradigmas para el diálogo cultural global.",
    author: "John Smith",
    publication: "International Art Review",
    year: "2015"
  },
  {
    quote: "La capacidad de Guillermo para entretejer narrativas culturales con técnicas innovadoras lo posiciona como uno de los artistas más influyentes de su generación.",
    author: "Ana López",
    publication: "Crítica de Arte Moderna",
    year: "2020"
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