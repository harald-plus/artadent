import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowRight,
  Building,
  Car,
  Bus,
  Heart,
  Shield,
  CheckCircle,
  Navigation,
  ParkingCircle,
  Users,
  Zap,
  TreePine,
  Mountain
} from "lucide-react";
import Link from "next/link";
import { getServices } from "@/lib/markdown";
import Image from "next/image";
import { locations } from "@/data/locations";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ParadisPage() {
  const paradisLocation = locations.find(loc => loc.id === "paradis")!;
  const allServices = getServices();
  // Select featured services for clinic page
  const featuredServices = [
    allServices.find(s => s.id === 'komplett-undersokelse'),
    allServices.find(s => s.id === 'fyllinger-en-tannflate'), 
    allServices.find(s => s.id === 'rotfylling-fortann'),
    allServices.find(s => s.id === 'blekeskinne'),
    allServices.find(s => s.id === 'metallkeramisk-krone'),
    allServices.find(s => s.id === 'implantat')
  ].filter((service): service is NonNullable<typeof service> => service !== undefined);
  
  const features = [
    {
      icon: Building,
      title: "Moderne fasiliteter",
      description: "Siste teknologi innen tannbehandling"
    },
    {
      icon: Heart,
      title: "Angstspesialister",
      description: "Erfarne med redde pasienter"
    },
    {
      icon: Zap,
      title: "Akuttbehandling",
      description: "Øyeblikkelig hjelp ved smerte"
    },
    {
      icon: CheckCircle,
      title: "Helfo direkteoppgjør",
      description: "Vi ordner refusjonen for deg"
    }
  ];

  const directions = [
    {
      icon: Car,
      title: "Med bil",
      description: "Fra Bergen sentrum kjør Paradisveien vestover. Klinikken ligger i Paradisleitet 1.",
      time: "10 min"
    },
    {
      icon: Bus,
      title: "Med buss",
      description: "Ta buss til Paradis. Kort gåtur til Paradisleitet 1.",
      time: "20 min"
    },
    {
      icon: ParkingCircle,
      title: "Parkering",
      description: "Rikelig med gratis parkering rett utenfor klinikken.",
      time: "Gratis"
    }
  ];

  const paradisHighlights = [
    {
      icon: Users,
      title: "Personlig service",
      description: "Mindre klinikk gir mer personlig oppfølging"
    },
    {
      icon: Clock,
      title: "God tid",
      description: "Vi tar oss tid til hver enkelt pasient"
    },
    {
      icon: Shield,
      title: "Trygg behandling",
      description: "Samme høye standard som på Solheim"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
              <div className="space-y-3 md:space-y-4 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-50 text-primary-800 rounded-full text-xs sm:text-sm font-medium">
                  <TreePine className="w-3 h-3 sm:w-4 sm:h-4" />
                  Paradis Klinikk
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                    Artadent Paradis
                  </h1>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                    Vår klinikk i Paradis tilbyr personlig tannbehandling 
                    i komfortable omgivelser, kun 10 minutter med bil fra Bergen sentrum.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{paradisLocation.address}, {paradisLocation.postalCode} {paradisLocation.city}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="font-medium text-sm sm:text-base hover:text-primary transition-colors">{paradisLocation.phone}</Link>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">Hverdager: {paradisLocation.openingHours.weekdays}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book time her</span>
                  </Link>
                  <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 text-sm md:text-base">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Ring nå</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <Image
                      src="/images/clinic-interior.webp"
                      alt="Paradis clinic interior"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-primary">10</div>
                      <div className="text-xs sm:text-sm text-gray-600">min med bil</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Lett</div>
                        <div className="text-xs sm:text-sm text-gray-600">tilgjengelig</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paradis Unique Features */}
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight mb-3 sm:mb-4">
                Hvorfor velge Paradis?
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Personlig service og moderne fasiliteter i rolige omgivelser
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {paradisHighlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border border-gray-100 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <highlight.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">{highlight.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight mb-3 sm:mb-4">
                Våre fasiliteter
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Kombinasjon av profesjonell tannbehandling og rolige omgivelser
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border border-gray-100 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight">
                    Kvalitetstannbehandling i Paradis
                  </h2>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    Vi tilbyr samme høye standard som på Solheim, men i mer intime 
                    og personlige omgivelser i vår moderne klinikk i Paradis.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {featuredServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-100 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-medium text-gray-900 block text-sm sm:text-base truncate">{service.title}</span>
                          <span className="text-primary font-semibold text-xs sm:text-sm">{service.priceRange}</span>
                        </div>
                      </div>
                      <Link href={`/kontakt?service=${encodeURIComponent(service.title)}&clinic=paradis&scroll=form`} className="text-primary font-medium text-xs sm:text-sm hover:underline flex-shrink-0 ml-2">
                        Book nå →
                      </Link>
                    </div>
                  ))}
                </div>
                
                <Link href="/behandlinger" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg text-sm md:text-base">
                  <span>Se alle behandlinger</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="col-span-2 relative h-48 sm:h-64 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden">
                    <Image
                      src="/images/placeholder.webp"
                      alt="Paradis clinic treatment room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/placeholder.webp"
                      alt="Modern dental equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <Mountain className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xs sm:text-sm font-medium">Moderne utstyr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions & Parking */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                Veibeskrivelse
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight mb-3 sm:mb-4">
                Lett å finne frem til Paradis
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Lett tilgjengelig beliggenhet i Paradis med rikelig parkering
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
              {directions.map((direction, index) => (
                <div key={index} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                  <div className="text-center space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                      <direction.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900">{direction.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{direction.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs sm:text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      {direction.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">Finn frem til oss</h3>
                  <Link 
                    href="https://maps.app.goo.gl/YRiCpcHjSQLEDsbZ8" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm sm:text-base"
                  >
                    <MapPin className="w-4 h-4" />
                    Åpne i Google Maps
                  </Link>
                </div>
                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.5553642638242!2d5.343821778155213!3d60.336938129961965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9dc75cffc31%3A0xa0d41d67468a30cd!2sArtaDent%20Paradis%20Tannklinikk!5e0!3m2!1sno!2sno!4v1751768538531!5m2!1sno!2sno"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ArtaDent Paradis Tannklinikk location"
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">Paradisleitet 1, 5231 Paradis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-20 lg:py-32 xl:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="relative h-40 sm:h-48 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Paradis clinic exterior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center text-primary-700">
                        <TreePine className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2" />
                        <div className="text-xs sm:text-sm font-medium">Moderne klinikk</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-6 sm:mt-8 lg:mt-12">
                    <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Reception area"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-40 sm:h-48 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Waiting room"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Kontakt oss
                </div>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                    Ta kontakt med Paradis
                  </h2>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Vi er her for å hjelpe deg med alle dine tannhelsebehov 
                    i rolige og komfortable omgivelser.
                  </p>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="p-2 sm:p-3 bg-primary-100 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Telefon</div>
                      <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="text-gray-600 mb-2 sm:mb-3 hover:text-primary transition-colors block text-sm sm:text-base">{paradisLocation.phone}</Link>
                      <div className="text-xs sm:text-sm text-gray-500">Åpent hverdager 09:30-18:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="p-2 sm:p-3 bg-primary-100 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">E-post</div>
                      <Link href={`mailto:${paradisLocation.email}`} className="text-gray-600 mb-2 sm:mb-3 hover:text-primary transition-colors block text-sm sm:text-base break-all">{paradisLocation.email}</Link>
                      <div className="text-xs sm:text-sm text-gray-500">Vi svarer innen 24 timer</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="p-2 sm:p-3 bg-primary-100 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Adresse</div>
                      <div className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                        {paradisLocation.address}<br />
                        {paradisLocation.postalCode} {paradisLocation.city}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">Rikelig gratis parkering</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 text-sm md:text-base">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Book time</span>
                  </Link>
                  <Link href="/solheim" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 text-sm md:text-base">
                    <span>Solheim klinikk</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                <TreePine className="w-3 h-3 sm:w-4 sm:h-4" />
                Velkommen til Paradis
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-medium leading-tight">
                Book din time i Paradis i dag
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Opplev tannbehandling i rolige og komfortable omgivelser. 
                Personlig service og profesjonell omsorg venter på deg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-sm md:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book time i Paradis</span>
                </Link>
                <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ring {paradisLocation.phone}</span>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-white">Åpningstider</h3>
                  </div>
                  
                  <div className="text-center space-y-1 sm:space-y-2 text-blue-100">
                    <div className="text-sm sm:text-base">Mandag - Fredag: {paradisLocation.openingHours.weekdays}</div>
                    <div className="text-sm sm:text-base">Helger: {paradisLocation.openingHours.weekend}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}