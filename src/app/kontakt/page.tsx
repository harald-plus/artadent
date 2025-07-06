"use client";

import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Building,
  Heart,
  Shield,
  Sparkles,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  TreePine,
  Car,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { locations } from "@/data/locations";
import { services as allServices } from "@/data/services";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState<"solheim" | "paradis">("solheim");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "solheim",
    service: "",
    message: "",
  });

  // Handle URL parameters for preselection
  useEffect(() => {
    const clinic = searchParams.get('clinic');
    const service = searchParams.get('service');
    const shouldScroll = searchParams.get('scroll') === 'form';

    if (clinic && (clinic === 'solheim' || clinic === 'paradis')) {
      setFormData(prev => ({ ...prev, location: clinic }));
      setSelectedLocation(clinic);
    }

    if (service) {
      // Decode URL-encoded service name
      const decodedService = decodeURIComponent(service);
      const allServiceNames = allServices.map(s => s.name);
      console.log('Service from URL:', decodedService);
      console.log('Available services:', allServiceNames);
      console.log('Service match found:', allServiceNames.includes(decodedService));
      setFormData(prev => ({ ...prev, service: decodedService }));
    }

    // Smooth scroll to form if requested
    if (shouldScroll) {
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  const solheimLocation = locations.find(loc => loc.id === "solheim")!;
  const paradisLocation = locations.find(loc => loc.id === "paradis")!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send to a backend API
    console.log("Form submitted:", formData);
    alert("Takk for din henvendelse! Vi kontakter deg snart.");
  };

  // Group services by category
  const servicesByCategory = {
    examination: allServices.filter(s => s.category === 'examination'),
    treatment: allServices.filter(s => s.category === 'treatment'),
    prosthetics: allServices.filter(s => s.category === 'prosthetics'),
    emergency: allServices.filter(s => s.category === 'emergency')
  };

  const categoryLabels = {
    examination: "Undersøkelse & Forebygging",
    treatment: "Behandlinger",
    prosthetics: "Proteser",
    emergency: "Akutthjelp"
  };

  const quickFacts = [
    {
      icon: Clock,
      title: "Åpningstider",
      content: "Mandag-Fredag: 09:30-18:00"
    },
    {
      icon: Zap,
      title: "Akutthjelp",
      content: "24/7 telefontjeneste tilgjengelig"
    },
    {
      icon: CheckCircle,
      title: "Direkteoppgjør",
      content: "Helfo refusjon ordnes automatisk"
    },
    {
      icon: Heart,
      title: "Angstpasienter",
      content: "Spesialisert på redde pasienter"
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
                  <Phone className="w-4 h-4" />
                  Kontakt oss
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 leading-tight">
                    La oss ta vare på ditt smil
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-normal max-w-lg">
                    Book time, still spørsmål eller få akutthjelp. Vi er her for å hjelpe deg 
                    med alle dine tannhelsebehov.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span>Ring Solheim</span>
                  </Link>
                  <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span>Ring Paradis</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/placeholder.svg"
                      alt="Contact Artadent"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-gray-600">Telefontjeneste</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Rask</div>
                        <div className="text-sm text-gray-600">respons</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickFacts.map((fact, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <fact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{fact.title}</h3>
                  <p className="text-gray-600 text-sm">{fact.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24">
              {/* Contact Form */}
              <div id="contact-form" className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Book time
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                    Send oss en melding
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-normal">
                    Fyll ut skjemaet så kontakter vi deg for å avtale time eller svare på spørsmål.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Ditt fulle navn"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+47 xxx xx xxx"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="din@email.no"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Foretrukket klinikk
                      </label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="solheim">Solheim</option>
                        <option value="paradis">Paradis</option>
                        <option value="begge">Begge klinikker</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Type behandling
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Velg behandling</option>
                        {Object.entries(servicesByCategory).map(([categoryKey, categoryServices]) => (
                          <optgroup key={categoryKey} label={categoryLabels[categoryKey as keyof typeof categoryLabels]}>
                            {categoryServices.map((service) => (
                              <option key={service.id} value={service.name}>
                                {service.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                        <option value="Annet">Annet</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Melding
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Beskriv dine behov eller still spørsmål..."
                    />
                  </div>
                  
                  
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg w-full"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send melding</span>
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Vi svarer vanligvis innen 2 timer på hverdager. 
                    For akutte tilfeller, ring oss direkte.
                  </p>
                </form>
              </div>
              
              {/* Clinic Information */}
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Våre klinikker
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                    Besøk oss på våre klinikker
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-normal">
                    To moderne klinikker i Bergen med samme høye standard og kompetanse.
                  </p>
                </div>
                
                {/* Clinic Cards */}
                <div className="space-y-8">
                  {/* Solheim Clinic */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-medium text-gray-900">Solheim Klinikk</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">
                              {solheimLocation.address}, {solheimLocation.postalCode} {solheimLocation.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-500" />
                            <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-primary transition-colors">{solheimLocation.phone}</Link>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <Link href={`mailto:${solheimLocation.email}`} className="text-gray-700 hover:text-primary transition-colors">{solheimLocation.email}</Link>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">{solheimLocation.openingHours.weekdays}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Car className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">Gratis parkering • 15 min fra sentrum</span>
                          </div>
                        </div>
                        
                        <Link href="/solheim" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                          Les mer om Solheim
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Paradis Clinic */}
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <TreePine className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-medium text-gray-900">Paradis Klinikk</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">
                              {paradisLocation.address}, {paradisLocation.postalCode} {paradisLocation.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-500" />
                            <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-primary transition-colors">{paradisLocation.phone}</Link>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-500" />
                            <Link href={`mailto:${paradisLocation.email}`} className="text-gray-700 hover:text-primary transition-colors">{paradisLocation.email}</Link>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">{paradisLocation.openingHours.weekdays}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <TreePine className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">Naturskjønne omgivelser • 20 min fra sentrum</span>
                          </div>
                        </div>
                        
                        <Link href="/paradis" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                          Les mer om Paradis
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-xl flex-shrink-0">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">Akutthjelp</h3>
                      <p className="text-gray-600 mb-4">
                        Ved akutte smerter eller skader, ring oss umiddelbart. 
                        Vi har 24/7 telefontjeneste og kan tilby akuttimer.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 text-sm">
                          <Phone className="w-4 h-4" />
                          <span>Ring Solheim</span>
                        </Link>
                        <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 text-sm">
                          <Phone className="w-4 h-4" />
                          <span>Ring Paradis</span>
                        </Link>
                      </div>
                    </div>
                  </div>
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
                <Sparkles className="w-4 h-4" />
                Vi er her for deg
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium">
                Ditt smil er <span className="text-blue-100">vårt fokus</span>
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
                Uansett om du trenger rutinekontroll, akutthjelp eller avansert behandling - 
                vi er klare til å hjelpe deg.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="#contact-form" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book time nå</span>
                </Link>
                <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <span>Se våre tjenester</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}