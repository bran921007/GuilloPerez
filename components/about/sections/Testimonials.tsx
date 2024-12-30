"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "El magistral colorista dominicano ha interpretado como nadie tal vez, el entorno criollo, hombre y paisaje, cielo, mar y tierra",
    author: "Marianne de Tolentino",
    role: "Crítica de Arte"
  },
  {
    quote: "Very nice staff ... professional framework, work at affordable prices ... great",
    author: "Vincenzo Mancini",
    role: "Visitante"
  },
  {
    quote: "Excelente lugar para comprar arte",
    author: "Estalin Sanchez",
    role: "Visitante"
  },
];

export function Testimonials() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-serif mb-12 text-center">Lo Que Dicen de Nosotros</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-secondary/50">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 mb-4 text-primary" />
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}