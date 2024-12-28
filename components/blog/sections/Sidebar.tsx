"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

interface SidebarProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const popularPosts = [
  {
    title: "Los 10 Artistas Más Influyentes del 2024",
    date: "5 Abril, 2024",
    views: 1250
  },
  {
    title: "Guía para Coleccionistas Principiantes",
    date: "3 Abril, 2024",
    views: 980
  },
  {
    title: "El Futuro de las Galerías Virtuales",
    date: "1 Abril, 2024",
    views: 856
  }
];

const categories = [
  "Arte Digital",
  "Artistas",
  "Conservación",
  "Exposiciones",
  "Mercado del Arte",
  "Técnicas",
  "Historia del Arte"
];

const tags = [
  "contemporáneo",
  "digital",
  "pintura",
  "escultura",
  "fotografía",
  "instalación",
  "arte urbano",
  "multimedia"
];

export function Sidebar({ selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Artículos Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                <h3 className="font-medium hover:text-primary cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>{post.date}</span>
                  <span>{post.views} lecturas</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categorías</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => onCategorySelect(category)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Etiquetas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Suscríbete para recibir las últimas noticias y actualizaciones.
          </p>
          <div className="space-y-4">
            <Input placeholder="Tu correo electrónico" type="email" />
            <Button className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Suscribirse
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}