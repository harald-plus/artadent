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
  ].filter(Boolean);
  
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
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">
                  <TreePine className="w-4 h-4" />
                  Paradis Klinikk
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 leading-tight">
                    Artadent Paradis
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Vår klinikk i Paradis tilbyr personlig tannbehandling 
                    i komfortable omgivelser, kun 10 minutter med bil fra Bergen sentrum.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-medium">{paradisLocation.address}, {paradisLocation.postalCode} {paradisLocation.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-primary" />
                    <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="font-medium hover:text-primary transition-colors">{paradisLocation.phone}</Link>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium">Hverdager: {paradisLocation.openingHours.weekdays}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Calendar className="w-5 h-5" />
                    <span>Book time her</span>
                  </Link>
                  <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span>Ring nå</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/clinic-interior.webp"
                      alt="Paradis clinic interior"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10</div>
                      <div className="text-sm text-gray-600">min med bil</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <TreePine className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Lett</div>
                        <div className="text-sm text-gray-600">tilgjengelig</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paradis Unique Features */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Hvorfor velge Paradis?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Personlig service og moderne fasiliteter i rolige omgivelser
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {paradisHighlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Hvorfor velge Paradis?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kombinasjon av profesjonell tannbehandling og rolige omgivelser
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal">
                    Kvalitetstannbehandling i Paradis
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Vi tilbyr samme høye standard som på Solheim, men i mer intime 
                    og personlige omgivelser i vår moderne klinikk i Paradis.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {featuredServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 block">{service.title}</span>
                          <span className="text-primary font-semibold text-sm">{service.priceRange}</span>
                        </div>
                      </div>
                      <Link href={`/kontakt?service=${encodeURIComponent(service.title)}&clinic=paradis&scroll=form`} className="text-primary font-medium text-sm hover:underline flex-shrink-0">
                        Book nå →
                      </Link>
                    </div>
                  ))}
                </div>
                
                <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg">
                  <span>Se alle behandlinger</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/placeholder.webp"
                      alt="Paradis clinic treatment room"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/placeholder.webp"
                      alt="Modern dental equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center text-primary-700">
                      <Mountain className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-medium">Moderne utstyr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions & Parking */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Navigation className="w-4 h-4" />
                Veibeskrivelse
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Lett å finne frem til Paradis
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Lett tilgjengelig beliggenhet i Paradis med rikelig parkering
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {directions.map((direction, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-100">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                      <direction.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{direction.title}</h3>
                    <p className="text-gray-600">{direction.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      {direction.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-gray-900">Finn frem til oss</h3>
                  <Link 
                    href="https://maps.app.goo.gl/YRiCpcHjSQLEDsbZ8" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <MapPin className="w-4 h-4" />
                    Åpne i Google Maps
                  </Link>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
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
                <p className="text-gray-600 text-center">Paradisleitet 1, 5231 Paradis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Paradis clinic exterior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center text-primary-700">
                        <TreePine className="w-12 h-12 mx-auto mb-2" />
                        <div className="text-sm font-medium">Moderne klinikk</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Reception area"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
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
              
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  <Phone className="w-4 h-4" />
                  Kontakt oss
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal">
                    Ta kontakt med Paradis
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Vi er her for å hjelpe deg med alle dine tannhelsebehov 
                    i rolige og komfortable omgivelser.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Telefon</div>
                      <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="text-gray-600 mb-3 hover:text-primary transition-colors block">{paradisLocation.phone}</Link>
                      <div className="text-sm text-gray-500">Åpent hverdager 09:30-18:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-2">E-post</div>
                      <Link href={`mailto:${paradisLocation.email}`} className="text-gray-600 mb-3 hover:text-primary transition-colors block">{paradisLocation.email}</Link>
                      <div className="text-sm text-gray-500">Vi svarer innen 24 timer</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-2">Adresse</div>
                      <div className="text-gray-600 mb-3">
                        {paradisLocation.address}<br />
                        {paradisLocation.postalCode} {paradisLocation.city}
                      </div>
                      <div className="text-sm text-gray-500">Rikelig gratis parkering</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                    <span>Book time</span>
                  </Link>
                  <Link href="/solheim" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300">
                    <span>Solheim klinikk</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <TreePine className="w-4 h-4" />
                Velkommen til Paradis
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium leading-normal">
                Book din time i Paradis i dag
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Opplev tannbehandling i rolige og komfortable omgivelser. 
                Personlig service og profesjonell omsorg venter på deg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/kontakt?clinic=paradis&scroll=form" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book time i Paradis</span>
                </Link>
                <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <Phone className="w-4 h-4" />
                  <span>Ring {paradisLocation.phone}</span>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-medium text-white">Åpningstider</h3>
                  </div>
                  
                  <div className="text-center space-y-2 text-blue-100">
                    <div>Mandag - Fredag: {paradisLocation.openingHours.weekdays}</div>
                    <div>Helger: {paradisLocation.openingHours.weekend}</div>
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