"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ShoppingCart, Star, Truck } from "lucide-react";

export function BiographyBookPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
              alt="Portada del libro: Guillermo Pérez - El Arte de la Transformación"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1589829085413 + i}-56de8ae18c73?auto=format&fit=crop&q=80`}
                  alt={`Vista previa ${i + 1} del libro`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-serif mb-4">
              Guillermo Pérez: El Arte de la Transformación
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Por Elena Martínez
            </p>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="text-muted-foreground">(128 reseñas)</span>
            </div>
            <div className="text-2xl font-bold mb-8">$49.99 USD</div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Detalles del Libro</h3>
                    <p className="text-sm text-muted-foreground">
                      Editorial Arte Contemporáneo, 2023<br />
                      Tapa dura, 320 páginas<br />
                      ISBN: 978-0123456789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Envío</h3>
                    <p className="text-sm text-muted-foreground">
                      Envío gratuito a todo el mundo<br />
                      Entrega estimada: 5-7 días hábiles
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-serif mb-4">Descripción</h2>
            <p className="text-muted-foreground">
              Una exploración profunda de la vida y obra del renombrado artista Guillermo Pérez. 
              Este libro ofrece una mirada íntima a su proceso creativo, influencias y evolución 
              artística a través de entrevistas exclusivas, fotografías inéditas y análisis 
              detallado de sus obras más emblemáticas.
            </p>
            <h3 className="text-xl font-medium mt-6 mb-3">Contenido:</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Primeros años y formación artística</li>
              <li>Desarrollo de su estilo único</li>
              <li>Análisis de obras principales</li>
              <li>Influencia en el arte contemporáneo</li>
              <li>Entrevistas con críticos y colaboradores</li>
              <li>Galería fotográfica exclusiva</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Añadir al Carrito
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Comprar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}