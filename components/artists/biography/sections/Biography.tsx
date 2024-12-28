"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Biography() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="w-5 h-5" />
          Biografía Autorizada
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4">
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
              alt="Portada del libro: Guillermo Pérez - El Arte de la Transformación"
              className="object-cover w-full h-full"
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">
              "Guillermo Pérez: El Arte de la Transformación"
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Por Elena Martínez<br />
              Editorial Arte Contemporáneo, 2023<br />
              ISBN: 978-0123456789
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Una exploración profunda de la vida y obra del artista, incluyendo
              entrevistas exclusivas, fotografías inéditas y análisis detallado
              de sus obras más emblemáticas.
            </p>
            <Button className="w-full" asChild>
              <Link href="/store/biography-book">
                Adquirir Libro <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}