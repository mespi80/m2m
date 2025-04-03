import React from 'react';

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground dark:text-secondary tracking-tight">
            About M2M Consulting
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            We partner with boutique firms to unlock their growth potential through strategic insights and tailored digital transformation.
          </p>
          {/* Placeholder for more detailed mission/values or image */}
          <p className="mt-6 text-base text-foreground/80">
            Our mission is to provide actionable strategies and implement innovative solutions that deliver measurable results. We value collaboration, integrity, and a relentless focus on client success.
          </p>
        </div>
      </div>
    </section>
  );
} 