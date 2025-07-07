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
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { getServices } from "@/lib/markdown";
import Image from "next/image";
import { locations } from "@/data/locations";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function SolheimPage() {
  const solheimLocation = locations.find(loc => loc.id === "solheim")!;
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
      icon: Shield,
      title: "Moderne utstyr",
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
      description: "Kjør Fjøsangerveien sørover fra Bergen sentrum. Klinikken ligger på høyre side.",
      time: "<5 min"
    },
    {
      icon: Bus,
      title: "Med buss",
      description: "Ta buss til Solheim. Kort gåtur til Fjøsangerveien 39.",
      time: "<5 min"
    },
    {
      icon: ParkingCircle,
      title: "Parkering",
      description: "Gratis parkering rett utenfor klinikken. Også tilgjengelig i nærområdet.",
      time: "Gratis"
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
                  <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                  Solheim Klinikk
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                    Artadent Solheim
                  </h1>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                    Vår moderne klinikk i Solheim tilbyr komplett tannbehandling 
                    i komfortable og trygge omgivelser, under 5 minutter med bil fra Bergen sentrum.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">{solheimLocation.address}, {solheimLocation.postalCode} {solheimLocation.city}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="font-medium text-sm sm:text-base hover:text-primary transition-colors">{solheimLocation.phone}</Link>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-700">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm sm:text-base">Hverdager: {solheimLocation.openingHours.weekdays}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/kontakt?clinic=solheim&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book time her</span>
                  </Link>
                  <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 text-sm md:text-base">
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
                      alt="Solheim clinic interior"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-primary">&lt;5</div>
                      <div className="text-xs sm:text-sm text-gray-600">min med bil</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <ParkingCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Gratis</div>
                        <div className="text-xs sm:text-sm text-gray-600">parkering</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 mb-3 sm:mb-4 leading-tight">
                Hvorfor velge Solheim?
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Moderne fasiliteter, erfarne tannleger og lett tilgjengelig beliggenhet
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
                    Komplett tannbehandling på Solheim
                  </h2>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    Fra rutinekontroll til avanserte inngrep - vi tilbyr alle 
                    tannhelsetjenester du trenger i moderne og komfortable omgivelser.
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
                      <Link href={`/kontakt?service=${encodeURIComponent(service.title)}&clinic=solheim&scroll=form`} className="text-primary font-medium text-xs sm:text-sm hover:underline flex-shrink-0 ml-2">
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
                      alt="Solheim clinic treatment room"
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
                  <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-700">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2" />
                      <div className="text-xs sm:text-sm font-medium">Erfarne tannleger</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions & Parking */}
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Navigation className="w-3 h-3 sm:w-4 sm:h-4" />
                Veibeskrivelse
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 mb-3 sm:mb-4 leading-tight">
                Lett å finne frem
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Lett tilgjengelig i Solheim med god tilgjengelighet og gratis parkering
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
              {directions.map((direction, index) => (
                <div key={index} className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border border-gray-100">
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                      <direction.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{direction.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{direction.description}</p>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
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
                    href="https://maps.app.goo.gl/fk3T1SoMWFqK85Q76" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm sm:text-base"
                  >
                    <MapPin className="w-4 h-4" />
                    Åpne i Google Maps
                  </Link>
                </div>
                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15787.07860593293!2d5.322144459103048!3d60.35628088440382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf9c1f2247e9b%3A0xf62e421cb6b5d875!2sSolheim%20Tannlegevakt!5e0!3m2!1sno!2sno!4v1751768602461!5m2!1sno!2sno"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Solheim Tannlegevakt location"
                  />
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">Fjøsangerveien 39, 5054 Bergen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <div className="relative h-40 sm:h-48 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.webp"
                        alt="Solheim clinic exterior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-32 sm:h-40 lg:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <div className="text-center text-primary-700">
                        <Building className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-1 sm:mb-2" />
                        <div className="text-xs sm:text-sm font-medium">Moderne lokaler</div>
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
              
              <div className="space-y-4 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  Kontakt oss
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 leading-tight">
                    Ta kontakt med Solheim
                  </h2>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                    Vi er her for å hjelpe deg med alle dine tannhelsebehov. 
                    Ring oss eller book time direkte.
                  </p>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="p-2 sm:p-3 bg-primary-100 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Telefon</div>
                      <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="text-gray-600 mb-2 sm:mb-3 hover:text-primary transition-colors block text-sm sm:text-base">{solheimLocation.phone}</Link>
                      <div className="text-xs sm:text-sm text-gray-500">Åpent hverdager 09:30-18:00</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                    <div className="p-2 sm:p-3 bg-primary-100 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">E-post</div>
                      <Link href={`mailto:${solheimLocation.email}`} className="text-gray-600 mb-2 sm:mb-3 hover:text-primary transition-colors block text-sm sm:text-base break-all">{solheimLocation.email}</Link>
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
                        {solheimLocation.address}<br />
                        {solheimLocation.postalCode} {solheimLocation.city}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">Gratis parkering tilgjengelig</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <Link href="/kontakt?clinic=solheim&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 text-sm md:text-base">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Book time</span>
                  </Link>
                  <Link href="/paradis" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 text-sm md:text-base">
                    <span>Paradis klinikk</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                Velkommen til Solheim
              </div>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight">
                Book din time på <span className="text-blue-100">Solheim i dag</span>
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Moderne fasiliteter, erfarne tannleger og lett tilgjengelig beliggenhet. 
                Vi ser frem til å ta vare på ditt smil.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Link href="/kontakt?clinic=solheim&scroll=form" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-sm md:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book time på Solheim</span>
                </Link>
                <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ring {solheimLocation.phone}</span>
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
                    <div className="text-sm sm:text-base">Mandag - Fredag: {solheimLocation.openingHours.weekdays}</div>
                    <div className="text-sm sm:text-base">Helger: {solheimLocation.openingHours.weekend}</div>
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