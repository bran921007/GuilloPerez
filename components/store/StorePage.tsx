"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ShoppingCart } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    title: "Guillermo Pérez: El Arte de la Transformación",
    author: "Elena Martínez",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
    description: "Biografía autorizada del reconocido artista",
    link: "/store/biography-book"
  },
  {
    id: 2,
    title: "Catálogo: Retrospectiva 2024",
    author: "D'Guillermo Galeria",
    price: "$35.99",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    description: "Colección completa de obras maestras",
    link: "#"
  }
];

export function StorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">Tienda de Arte</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-medium mb-2">{product.title}</h2>
                    <p className="text-muted-foreground mb-2">por {product.author}</p>
                    <p className="text-lg font-bold mb-4">{product.price}</p>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link href={product.link}>
                        Ver Detalles <Book className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      Añadir al Carrito <ShoppingCart className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}