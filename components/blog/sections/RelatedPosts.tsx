"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const relatedPosts = [
  {
    id: 1,
    title: "El Impacto de la IA en el Arte",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80",
    date: "12 Abril, 2024"
  },
  {
    id: 2,
    title: "Nuevas Formas de Expresión Digital",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80",
    date: "10 Abril, 2024"
  },
  {
    id: 3,
    title: "El Futuro de las Galerías Virtuales",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    date: "8 Abril, 2024"
  }
];

export function RelatedPosts() {
  return (
    <section>
      <h2 className="text-2xl font-serif mb-6">Artículos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/blog/${post.id}`} className="block group">
                <div className="relative aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}