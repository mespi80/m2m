import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button component is needed

export function Hero() {
  // Adjust height, padding, and background as needed to match inspiration
  return (
    <section id="hero" className="w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Content aligned left, similar to inspiration */}
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            M2M Consulting
          </h1>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            Your Growth Transformation Partner
            {/* Adjusted sub-headline */}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            Drive impact with strategy, tailored solutions, and innovation designed for boutique firms.
            {/* Adjusted description */}
          </p>
          <div className="mt-8 flex gap-4">
             {/* Example CTA Button - Link and text TBD */}
            <Button size="lg" variant="default">Learn More</Button>
            <Button size="lg" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 