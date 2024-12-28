"use client";

import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Custom Web Development",
    description: "Transform your vision into a powerful digital presence with our expert web development services.",
    price: "Starting at $2,999",
    features: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "Performance-focused development",
      "3-week typical delivery"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Launch your online store with our comprehensive e-commerce development and optimization services.",
    price: "Starting at $3,999",
    features: [
      "Secure payment integration",
      "Inventory management system",
      "Customer analytics dashboard",
      "4-week typical delivery"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence and drive growth with our data-driven digital marketing strategies.",
    price: "Starting at $1,499/mo",
    features: [
      "Social media management",
      "SEO optimization",
      "Content marketing",
      "Monthly performance reports"
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elevate your digital presence with our comprehensive suite of services. 
            We combine innovation with expertise to deliver solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-6">
            Ready to take your business to the next level? Let's create something amazing together.
          </p>
          <Button size="lg" variant="default">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}