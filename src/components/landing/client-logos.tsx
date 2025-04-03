import React from 'react';

// Placeholder data for client logos (replace with actual image paths/components)
const clientLogos = [
  { name: 'Client 1', id: '1' },
  { name: 'Client 2', id: '2' },
  { name: 'Client 3', id: '3' },
  { name: 'Client 4', id: '4' },
  { name: 'Client 5', id: '5' },
  { name: 'Client 6', id: '6' },
];

export function ClientLogos() {
  return (
    <section id="clients" className="w-full py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-8">
          Clients We&apos;ve Helped Grow
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              {/* Placeholder - Replace with <Image> component later */}
              <span className="text-sm font-medium text-foreground/80">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 