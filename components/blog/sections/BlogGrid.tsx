"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "El Impacto de la Tecnología en el Arte Moderno",
    excerpt: "Cómo las nuevas tecnologías están transformando la creación y experiencia artística...",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80",
    date: "12 Abril, 2024",
    author: "Carlos Ruiz",
    category: "Arte Digital"
  },
  {
    id: 2,
    title: "Artistas Emergentes: Nuevas Voces en la Escena",
    excerpt: "Descubre los talentos emergentes que están redefiniendo el panorama artístico...",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?auto=format&fit=crop&q=80",
    date: "10 Abril, 2024",
    author: "Ana Martínez",
    category: "Artistas"
  },
  {
    id: 3,
    title: "El Arte de la Conservación",
    excerpt: "Técnicas y mejores prácticas para preservar obras de arte a través del tiempo...",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    date: "8 Abril, 2024",
    author: "Miguel Torres",
    category: "Conservación"
  }
];

interface BlogGridProps {
  searchQuery: string;
  currentPage: number;
  selectedCategory: string | null;
}

export function BlogGrid({ searchQuery, currentPage, selectedCategory }: BlogGridProps) {
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 gap-8">
      {filteredPosts.map(post => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="block group"
                >
                  <h2 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{post.category}</span>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}