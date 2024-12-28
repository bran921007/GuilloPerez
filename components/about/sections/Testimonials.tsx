"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "D'Guillermo Galeria ha transformado la manera en que experimentamos el arte contemporáneo.",
    author: "Ana Martínez",
    role: "Crítica de Arte, El Universal"
  },
  {
    quote: "Un espacio que verdaderamente entiende y apoya a los artistas emergentes.",
    author: "Miguel Torres",
    role: "Artista Contemporáneo"
  },
  {
    quote: "La curaduría excepcional y el compromiso con la calidad son evidentes en cada exposición.",
    author: "Laura Chen",
    role: "Coleccionista de Arte"
  }
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