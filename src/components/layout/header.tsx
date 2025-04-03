import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo Placeholder */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> Replace with actual logo */}
            <span className="hidden font-bold sm:inline-block text-primary">
              M2M Consulting
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Placeholder - Using simple links for now */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </Link>
          <Link href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Services
          </Link>
          <Link href="#team" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Team
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Testimonials
          </Link>
        </nav>

        {/* Right Aligned Items - Contact Button */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <Link href="#contact">
              <Button variant="default" size="sm">Contact Us</Button> { /* Changed from secondary to default for visibility */ }
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Placeholder (TBD) */}
        <div className="md:hidden">
          {/* Add Mobile Menu Trigger Button here later */}
        </div>
      </div>
    </header>
  );
} 