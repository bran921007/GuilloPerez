"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  titleEn: string;
  image: string;
  description: string;
  features: string[];
  link?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  titleEn,
  image,
  description,
  features,
  link
}: ServiceCardProps) {
  return (
    <Card className="group">
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6 shrink-0 text-primary" />
          <div>
            <h3 className="text-xl font-medium leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{titleEn}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center text-sm text-muted-foreground gap-2"
            >
              <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {link && (
          <Button variant="link" className="p-0 h-auto" asChild>
            <Link 
              href={link} 
              className="group-hover:text-primary transition-colors inline-flex items-center"
            >
              Más Información
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}