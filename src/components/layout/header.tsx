"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary text-white p-3 rounded-xl">
              <div className="text-xl font-bold">A</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">ARTADENT</div>
              <div className="text-sm text-primary font-medium hidden sm:block">
                Tannleger Du Kan stole på
              </div>
            </div>
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
            <Button asChild className="hidden md:flex bg-primary-50 text-primary border-none hover:bg-primary-100 font-medium px-8 py-6 rounded-xl">
              <Link href="/kontakt" className="flex items-center justify-center min-h-full leading-none">Kontakt oss</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary-700 text-white font-medium rounded-xl px-8 py-6">
              <Link href="/kontakt?scroll=form" className="flex items-center justify-center min-h-full leading-none">Book time</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-2">
            <Link href="/om-oss" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Om oss
            </Link>
            <Link href="/behandlinger" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Behandlinger
            </Link>
            <Link href="/solheim" className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors">
              Solheim Klinikk
            </Link>
            <Link href="/paradis" className="block py-2 pl-4 text-gray-600 hover:text-primary transition-colors">
              Paradis Klinikk
            </Link>
            <Link href="/refusjon" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Refusjon & Støtte
            </Link>
            <Link href="/kontakt" className="block py-2 text-gray-700 hover:text-primary transition-colors">
              Kontakt oss
            </Link>
            
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" />
                <span>Paradis: +47 97 32 67 24</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-primary" />
                <span>Solheim: +47 92 94 34 99</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}