"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const comments = [
  {
    id: 1,
    author: "Ana López",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    date: "Hace 2 días",
    content: "Excelente artículo. Me encantó especialmente la parte sobre el arte digital y su evolución."
  },
  {
    id: 2,
    author: "Carlos Ruiz",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    date: "Hace 3 días",
    content: "Muy interesante perspectiva sobre las tendencias actuales. ¿Han considerado también el impacto de los NFTs?"
  }
];

export function Comments() {
  const [newComment, setNewComment] = useState("");

  return (
    <section>
      <h2 className="text-2xl font-serif mb-6">Comentarios</h2>
      
      <div className="mb-8">
        <Textarea
          placeholder="Escribe tu comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-4"
        />
        <Button>Publicar Comentario</Button>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}