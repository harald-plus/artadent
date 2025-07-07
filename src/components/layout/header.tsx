"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  logoSrc?: string;
}

export function Header({ logoSrc = "/images/main-logo.webp" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up or at top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          // Hide navbar when scrolling down (but only if mobile menu is closed)
          if (!isMobileMenuOpen) {
            setIsVisible(false);
          }
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header 
      className={`bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-2 md:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Artadent Tannklinikk"
              width={240}
              height={110}
              className="h-12 md:h-16 lg:h-18 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/om-oss" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Om oss
            </Link>
            <Link href="/behandlinger" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Behandlinger
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors font-medium flex items-center space-x-1">
                <span>Klinikker</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solheim" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-t-xl">
                  Solheim Klinikk
                </Link>
                <Link href="/paradis" className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-b-xl">
                  Paradis Klinikk
                </Link>
              </div>
            </div>
            <Link href="/refusjon" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Refusjon
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button asChild className="hidden md:flex bg-primary-50 text-primary border-none hover:bg-primary-100 font-medium px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base">
              <Link href="/kontakt" className="flex items-center justify-center min-h-full leading-none">Kontakt oss</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary-700 text-white font-medium rounded-xl px-6 py-3 md:px-8 md:py-4 text-sm md:text-base">
              <Link href="/kontakt?scroll=form" className="flex items-center justify-center min-h-full leading-none">Book time</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="lg:hidden p-2 h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-2">
            {/* Main navigation links */}
            <Link 
              href="/om-oss" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Om oss
            </Link>
            <Link 
              href="/behandlinger" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Behandlinger
            </Link>
            <Link 
              href="/refusjon" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Refusjon & Støtte
            </Link>
            <Link 
              href="/kontakt" 
              className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt oss
            </Link>
            
            {/* Clinics section at bottom */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-gray-900 font-semibold text-xs uppercase tracking-wide mb-3">Våre klinikker</h3>
              
              <div className="grid grid-cols-1 gap-3">
                {/* Solheim Clinic */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <Link 
                    href="/solheim" 
                    className="block text-gray-900 hover:text-primary transition-colors font-medium text-sm mb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solheim Klinikk
                  </Link>
                  <a 
                    href="tel:+4792943499" 
                    className="flex items-center space-x-2 text-xs text-gray-600 hover:text-primary transition-colors"
                  >
                    <Phone className="h-3 w-3 text-primary flex-shrink-0" />
                    <span>Ring: 92 94 34 99</span>
                  </a>
                </div>
                
                {/* Paradis Clinic */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <Link 
                    href="/paradis" 
                    className="block text-gray-900 hover:text-primary transition-colors font-medium text-sm mb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Paradis Klinikk
                  </Link>
                  <a 
                    href="tel:+4797326724" 
                    className="flex items-center space-x-2 text-xs text-gray-600 hover:text-primary transition-colors"
                  >
                    <Phone className="h-3 w-3 text-primary flex-shrink-0" />
                    <span>Ring: 97 32 67 24</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}