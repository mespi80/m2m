'use client'; // Needed for Sheet component

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'; // Import Menu icon

// Define nav items for reuse
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#team', label: 'Team' },
  { href: '#testimonials', label: 'Testimonials' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo - Visible on all sizes now for consistency */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* <Icons.logo className="h-6 w-6" /> Replace with actual logo */}
            <span className="font-bold text-primary">
              M2M Consulting
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Aligned Items - Desktop Contact Button */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <Link href="#contact">
              <Button variant="default" size="sm">Contact Us</Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Button/Sheet Trigger */}
        <div className="flex md:hidden flex-1 justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-left text-primary">M2M Consulting</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                    onClick={() => setIsSheetOpen(false)} // Close sheet on link click
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Contact Link/Button for Mobile */}
                <Link
                  href="#contact"
                  className="mt-4"
                  onClick={() => setIsSheetOpen(false)} // Close sheet on link click
                >
                  <Button variant="default" className="w-full">Contact Us</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 