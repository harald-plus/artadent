import { 
  Phone, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  Building, 
  Clock, 
  Shield, 
  Heart, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { statistics } from "@/data/statistics";
import { testimonials } from "@/data/testimonials";
import { getServices } from "@/lib/markdown";
import { PageLayout, getPageImages } from "@/components/layout/page-layout";

export default function Home() {
  const allServices = getServices();
  const images = getPageImages();
  // Select featured services from different categories for variety
  const featuredServices = [
    allServices.find(s => s.id === 'komplett-undersokelse'), // examination
    allServices.find(s => s.id === 'fyllinger-en-tannflate'), // fillings
    allServices.find(s => s.id === 'rotfylling-fortann'), // endodontics
    allServices.find(s => s.id === 'metallkeramisk-krone'), // prosthetics
    allServices.find(s => s.id === 'blekeskinne'), // whitening
    allServices.find(s => s.id === 'implantat') // prosthetics
  ].filter(Boolean); // Remove any undefined services

  return (
    <PageLayout>
      <main>
        {/* Clean Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  20+ års erfaring
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 leading-tight">
                    Hvor vi gir deg en grunn til å smile stolt!
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                    Avansert tannbehandling og førsteklasses omsorg i hjertet av Bergen.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Calendar className="w-5 h-5" />
                    <span>Book time i dag</span>
                  </Link>
                  <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300">
                    <span>Se våre tjenester</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-8">
                  {[
                    { icon: Shield, text: "Autoriserte tannleger" },
                    { icon: Heart, text: "Angstspesialister" },
                    { icon: Zap, text: "Akuttimer" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                    <Image
                      src={images.homepageHero || "/images/hero-dental.webp"}
                      alt="Professional dental care at Artadent"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Statistics overlay */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">8,450+</div>
                      <div className="text-sm text-gray-600">Glade pasienter</div>
                    </div>
                  </div>
                  
                  {/* Helfo badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Direkteoppgjør</div>
                        <div className="text-sm text-gray-600">med Helfo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                Tilliten vi har bygget
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Over to tiår med kvalitet, tillit og omsorg
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => {
                const icons = [Award, Users, Building, Clock];
                const Icon = icons[index];
                
                return (
                  <div key={stat.id} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                    <div className="font-medium text-gray-700">{stat.label}</div>
                    {stat.description && (
                      <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden">
                    <Image
                      src={images.homepageTeamLarge || "/images/dental-team.webp"}
                      alt="Artadent dental team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={images.clinicInteriorGeneral || "/images/clinic-interior.webp"}
                      alt="Modern clinic interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <Heart className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-medium">Omsorgsfull behandling</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  <Heart className="w-4 h-4" />
                  Om Artadent
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal">
                    Tannleger du kan stole på
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Vårt mål er å gjøre deg smertefri og gi den hjelpen og servicen 
                    du forventer av en tannlege. Vi har spesiell kompetanse innen 
                    behandling av pasienter med tannlegeskrekk.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Award, text: "20+ års erfaring", desc: "Etablert tannklinikk siden 2000" },
                    { icon: Building, text: "To klinikker i Bergen", desc: "Paradis og Solheim - begge sentralt beliggende" },
                    { icon: Clock, text: "Fleksible åpningstider", desc: "Akuttimer tilgjengelig på helger" },
                    { icon: CheckCircle, text: "8,450+ fornøyde pasienter", desc: "Høy kundetilfredshet gjennom årene" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-2">{item.text}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link href="/om-oss" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg">
                  <span>Les mer om oss</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Safe Treatment & Skilled Dentists Section */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              {/* Content */}
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  Trygg og profesjonell behandling
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal">
                    Erfarne tannleger med nyeste teknologi
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Våre autoriserte og erfarne tannleger kombinerer 20+ års klinisk 
                    erfaring med moderne utstyr for å gi deg trygg, 
                    smertefri og presis behandling.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { icon: Users, title: "Autoriserte tannleger", desc: "Kun kvalifiserte spesialister med godkjenning" },
                    { icon: Shield, title: "Trygg behandling", desc: "Strenge hygienerutiner og sikkerhetsprotokoller" },
                    { icon: Heart, title: "Spesialisert på angst", desc: "Rolig miljø og erfaring med redde pasienter" },
                    { icon: Zap, title: "Smertefri metoder", desc: "Moderne teknikker for minimal ubehag" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-2">{item.title}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Images */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={images.homepageEquipment1 || "/images/young-dentist.webp"}
                        alt="Modern dental equipment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <div className="text-center text-green-700">
                          <Shield className="w-12 h-12 mx-auto mb-2" />
                          <div className="text-sm font-medium">Trygg behandling</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src={images.homepageEquipment2 || "/images/female-staff.webp"}
                        alt="Comfortable treatment room"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src={images.homepageEquipment3 || "/images/treatment-scene.webp"}
                        alt="Advanced dental technology"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating experience badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-primary">20+</div>
                    <div className="text-sm text-gray-600">års erfaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Våre tjenester
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Hva vi gjør
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Komplett tannbehandling under ett tak
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service) => {
                
                return (
                  <div key={service.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                      <Image
                        src={service.image || images.placeholderGeneral || "/images/placeholder.webp"}
                        alt={service.title}
                        fill
                        className="object-cover opacity-80"
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                          {service.priceRange}
                        </div>
                        <Link href={`/kontakt?service=${encodeURIComponent(service.title)}&scroll=form`} className="text-primary font-medium text-sm hover:underline">
                          Book nå →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center">
              <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300">
                <span>Se alle behandlinger</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                5-stjernes vurderinger
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Hva våre pasienter sier
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Over 8,450 fornøyde pasienter har valgt Artadent
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed text-lg mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Verifisert pasient</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Calendar className="w-5 h-5" />
                <span>Book din første time</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Klar for endring?
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium leading-normal">
                Klar for et sunnere smil?
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Kontakt oss i dag for en konsultasjon. Vi tilbyr studentrabatt, 
                spesialisert behandling for angstpasienter, og direkteoppgjør med Helfo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/kontakt?scroll=form" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book time i dag</span>
                </Link>
                <Link href="/refusjon" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <span>Se refusjonsmuligheter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              {/* Clinic contact cards */}
              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-12">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-white">Paradis Klinikk</h3>
                    </div>
                    
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Link href="tel:+4797326724" className="hover:underline">+47 97 32 67 24</Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <Link href="https://maps.app.goo.gl/YRiCpcHjSQLEDsbZ8" target="_blank" rel="noopener noreferrer" className="hover:underline">Paradisleitet 1, 5231 Paradis</Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-white">Solheim Klinikk</h3>
                    </div>
                    
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Link href="tel:+4792943499" className="hover:underline">+47 92 94 34 99</Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <Link href="https://maps.app.goo.gl/fk3T1SoMWFqK85Q76" target="_blank" rel="noopener noreferrer" className="hover:underline">Fjøsangerveien 39, 5054 Bergen</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}