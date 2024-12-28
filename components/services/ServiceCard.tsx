"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <Icon className="w-12 h-12 text-primary mb-6" />
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        <Button variant="link" className="p-0 h-auto" asChild>
          <Link href={link} className="group-hover:text-primary transition-colors">
            Más Información
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}