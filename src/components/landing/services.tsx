import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Placeholder data for services
const services = [
  { id: '1', title: 'Strategic Planning', description: 'Developing actionable growth roadmaps.' },
  { id: '2', title: 'Digital Transformation', description: 'Implementing modern tech solutions.' },
  { id: '3', title: 'Operational Efficiency', description: 'Optimizing processes for better results.' },
];

export function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Tailored expertise to elevate your business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{service.description}</p>
              </CardContent>
              {/* Optional: Add CardFooter for links/buttons */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 