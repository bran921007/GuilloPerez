"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-serif">
            D&apos;Guillermo Galeria
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/exhibitions" className="hover:text-primary">
              Exposiciones
            </Link>
            <Link href="/artists/guillo-perez" className="hover:text-primary">
              Biografía
            </Link>
            <Link href="/collection" className="hover:text-primary">
              Colección
            </Link>
            {/* <Link href="/blog" className="hover:text-primary">
              Blog
            </Link> */}
            <Link href="/about" className="hover:text-primary">
              Nosotros
            </Link>
            <Link href="/visit" className="hover:text-primary">
              Visítanos
            </Link>
            <Button variant="outline">Contacto</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/exhibitions"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Exposiciones
            </Link>
            <Link
              href="/artists/guillo-perez"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Biografía
            </Link>
            <Link
              href="/collection"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Colección
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Nosotros
            </Link>
            <Link
              href="/visit"
              className="block px-3 py-2 hover:bg-secondary rounded-md"
            >
              Visítanos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}