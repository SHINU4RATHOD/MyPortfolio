
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, professionalName } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const nameParts = professionalName.split(' ');
  const firstName = nameParts[0];
  const lastNameInitial = nameParts.length > 1 ? nameParts[1][0] : '';

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#hero" className="text-2xl font-bold text-primary hover:text-accent transition-colors" onClick={handleLinkClick}>
            {firstName}<span className="text-accent">{lastNameInitial}.</span>
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" suppressHydrationWarning /> : <Menu className="h-6 w-6" suppressHydrationWarning />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
