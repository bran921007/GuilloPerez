"use client";

import { Share2, Calendar, User, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RelatedPosts } from "./sections/RelatedPosts";
import { Comments } from "./sections/Comments";
import { ShareButtons } from "./sections/ShareButtons";

export function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            15 Abril, 2024
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            María González
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min de lectura
          </span>
        </div>

        <h1 className="text-4xl font-serif mb-6">
          Tendencias Emergentes en el Arte Contemporáneo
        </h1>

        <div className="flex items-center gap-2 mb-8">
          <Tag className="w-4 h-4" />
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Arte Digital</Button>
            <Button variant="secondary" size="sm">Tendencias</Button>
            <Button variant="secondary" size="sm">Contemporáneo</Button>
          </div>
        </div>
      </div>

      <div className="relative aspect-[21/9] mb-12">
        <img
          src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80"
          alt="Tendencias en Arte Contemporáneo"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          El arte contemporáneo está experimentando una transformación sin precedentes,
          impulsada por la convergencia de tecnología, sostenibilidad y cambios sociales.
          En este artículo, exploramos las tendencias más significativas que están
          definiendo el panorama artístico actual.
        </p>

        <h2>La Revolución Digital en el Arte</h2>
        <p>
          La tecnología digital ha abierto nuevas posibilidades para la creación artística.
          Desde el arte generativo hasta las experiencias inmersivas en realidad virtual,
          los artistas están explorando formas innovadoras de expresión que desafían los
          límites tradicionales del medio.
        </p>

        <h2>Sostenibilidad y Conciencia Ambiental</h2>
        <p>
          Cada vez más artistas están incorporando temas ambientales en su trabajo,
          utilizando materiales reciclados y creando obras que comentan sobre la crisis
          climática. Esta tendencia refleja una creciente preocupación por la
          sostenibilidad en el mundo del arte.
        </p>

        <h2>Arte Participativo y Comunidad</h2>
        <p>
          Las instalaciones interactivas y el arte participativo están ganando prominencia,
          difuminando las líneas entre el artista, la obra y el espectador. Estas
          experiencias colectivas están redefiniendo la relación entre el arte y su
          audiencia.
        </p>
      </div>

      <ShareButtons />
      
      <Separator className="my-12" />
      
      <RelatedPosts />
      
      <Separator className="my-12" />
      
      <Comments />
    </article>
  );
}