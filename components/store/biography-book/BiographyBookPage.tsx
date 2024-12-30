"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ShoppingCart, Star, Truck } from "lucide-react";
import Link from "next/link";

export function BiographyBookPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
            <img
              src="../libro-portada.png"
              alt="Portada del libro: Guillo Pérez y su pasión por el color"
              className="object-contain w-full h-full"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <img
                  src={`../libro/libro${i + 1}.jpg`}
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
              Guillo Pérez y su pasión por el color
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Por Cándido Gerón
            </p>
            {/* <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="text-muted-foreground">(128 reseñas)</span>
            </div> */}
            <div className="text-2xl font-bold mb-8">RD$ 5,000</div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Detalles del Libro</h3>
                    <p className="text-sm text-muted-foreground">
                      Editora Corripio C. por A., 31 de marzo de 2006<br />
                      Tapa dura, 224 páginas<br />
                      ISBN: 978-99934-55-96-7
                    </p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-serif mb-4">Descripción</h2>
            <p className="text-muted-foreground">
              "Guillo Pérez y su pasión por el color" es una obra que explora la vida y trayectoria artística de Guillo Pérez, uno de los más destacados pintores dominicanos. Escrito por el historiador y crítico de arte Cándido Gerón, el libro ofrece una visión profunda del desarrollo artístico de Pérez, destacando su maestría en el uso del color y su contribución al arte caribeño.
            </p>
            <br />
            <p className="text-muted-foreground">
              Publicado por Editora Corripio el 31 de marzo de 2006, la obra cuenta con 224 páginas y está presentada en un formato de 32.5 x 29 cm. El diseño y arte final estuvieron a cargo de Gianfranco Lanzetti, complementado con fotografías de Lanzetti, Luis Nova y Ricardo Thorman, que enriquecen visualmente el contenido. Además, la traducción al inglés realizada por Altagracia Amelia Cabral permite que el libro sea accesible a una audiencia más amplia.
            </p>

            <br />
            <p className="text-muted-foreground">
              El libro ha sido reconocido por su excelente diseño y formato, siendo considerado uno de los mejores en la plástica dominicana. Durante su presentación en el Hotel Embajador, se destacó la importancia de esta publicación como un valioso aporte a la bibliografía del arte dominicano, ofreciendo una visión comprensiva de la obra de Guillo Pérez.
            </p>
            <br />
            <p className="text-muted-foreground">
              Esta publicación es esencial para quienes deseen profundizar en la obra de Guillo Pérez, comprendiendo su influencia en el arte dominicano y su legado como maestro del color.
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
          <Link 
              href="https://wa.me/+18493610323?text=Hola,%20me%20interesa%20comprar%20el%20libro%20'Guillo%20Pérez%20y%20su%20pasión%20por%20el%20color'." 
              target="_blank"
              className="flex-1"
            >
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-4 h-4 mr-2" />
                  Comprar ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
