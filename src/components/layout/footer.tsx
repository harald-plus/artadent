import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { locations } from "@/data/locations";

interface FooterProps {
  logoSrc?: string;
}

export function Footer({ logoSrc = "/images/main-logo.webp" }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-white border-t border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <Image
              src={logoSrc}
              alt="Artadent Tannklinikk"
              width={200}
              height={90}
              className="h-12 md:h-14 lg:h-16 w-auto"
            />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Veien til et sunnere, vakrere smil. 20+ års erfaring med avansert 
              tannbehandling og førsteklasses omsorg.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-3 bg-primary-100 rounded-xl text-primary hover:bg-primary-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-3 bg-primary-100 rounded-xl text-primary hover:bg-primary-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">Hurtiglenker</h3>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
              <li>
                <Link href="/om-oss" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-primary transition-colors font-medium">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/behandlinger" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-primary transition-colors font-medium">
                  Behandlinger
                </Link>
              </li>
              <li>
                <Link href="/refusjon" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-primary transition-colors font-medium">
                  Refusjon & Støtte
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-primary transition-colors font-medium">
                  Kontakt oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Paradis Location */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">Paradis Klinikk</h3>
            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-xs sm:text-sm md:text-base text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <Link 
                  href="https://maps.app.goo.gl/YRiCpcHjSQLEDsbZ8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <div className="font-medium">{locations[0].address}</div>
                  <div>{locations[0].postalCode} {locations[0].city}</div>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href={`tel:${locations[0].phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors">{locations[0].phone}</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href={`mailto:${locations[0].email}`} className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors">{locations[0].email}</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <div className="font-medium">Man-Fre: {locations[0].openingHours.weekdays}</div>
                  <div>Helg: {locations[0].openingHours.weekend}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solheim Location */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">Solheim Klinikk</h3>
            <div className="space-y-2 md:space-y-3 lg:space-y-4 text-xs sm:text-sm md:text-base text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <Link 
                  href="https://maps.app.goo.gl/fk3T1SoMWFqK85Q76" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <div className="font-medium">{locations[1].address}</div>
                  <div>{locations[1].postalCode} {locations[1].city}</div>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href={`tel:${locations[1].phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors">{locations[1].phone}</Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href={`mailto:${locations[1].email}`} className="text-xs sm:text-sm md:text-base font-medium hover:text-primary transition-colors">{locations[1].email}</Link>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <div className="font-medium">Man-Fre: {locations[1].openingHours.weekdays}</div>
                  <div>Helg: {locations[1].openingHours.weekend}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-8 md:mt-12 lg:mt-16 pt-4 md:pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm md:text-base text-gray-500">&copy; {new Date().getFullYear()} Artadent. Alle rettigheter forbeholdt.</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">
              Designet og utviklet av{" "}
              <Link href="https://www.instagram.com/harald.plus/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                Harald+
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}