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
  Sparkles,
  Send,
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
import { Service } from "@/lib/markdown";
import { Turnstile } from "@marsidev/react-turnstile";

interface ContactFormProps {
  services: Service[];
}

export function ContactForm({ services: allServices }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "solheim",
    service: "",
    message: "",
  });
  
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle URL parameters for preselection
  useEffect(() => {
    const clinic = searchParams.get('clinic');
    const service = searchParams.get('service');
    const shouldScroll = searchParams.get('scroll') === 'form';

    if (clinic && (clinic === 'solheim' || clinic === 'paradis')) {
      setFormData(prev => ({ ...prev, location: clinic }));
    }

    if (service) {
      // Decode URL-encoded service name
      const decodedService = decodeURIComponent(service);
      const allServiceNames = allServices.map(s => s.title);
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
  }, [searchParams, allServices]);

  const solheimLocation = locations.find(loc => loc.id === "solheim")!;
  const paradisLocation = locations.find(loc => loc.id === "paradis")!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("Vennligst fullfør sikkerhetskontroll før innsending.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://artadent-forms.h-6a2.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          'cf-turnstile-response': turnstileToken,
        }),
      });
      
      const result = await response.json() as { success: boolean; message: string };
      
      if (result.success) {
        alert(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "solheim",
          service: "",
          message: "",
        });
        setTurnstileToken("");
      } else {
        alert(result.message || "Det oppstod en feil. Prøv igjen senere.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Det oppstod en feil. Prøv igjen senere.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Group services by category - matching treatments page exactly
  const servicesByCategory = {
    examination: allServices.filter(s => s.category === 'examination'),
    xray: allServices.filter(s => s.category === 'xray'),
    fillings: allServices.filter(s => s.category === 'fillings'),
    extractions: allServices.filter(s => s.category === 'extractions'),
    endodontics: allServices.filter(s => s.category === 'endodontics'),
    prosthetics: allServices.filter(s => s.category === 'prosthetics'),
    whitening: allServices.filter(s => s.category === 'whitening'),
    misc: allServices.filter(s => s.category === 'misc')
  };

  const categoryLabels = {
    examination: "Undersøkelse og rens",
    xray: "Røntgen",
    fillings: "Fyllinger",
    extractions: "Ekstraksjon",
    endodontics: "Pulpa og rotbehandling",
    prosthetics: "Protetikk inklusive tanntekniker",
    whitening: "Bleking",
    misc: "Diverse"
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
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="space-y-3 md:space-y-4 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-50 text-primary-800 rounded-full text-xs sm:text-sm font-medium">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                Kontakt oss
              </div>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                  La oss ta vare på ditt smil
                </h1>
                
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-normal max-w-lg">
                  Book time, still spørsmål eller få akutthjelp. Vi er her for å hjelpe deg 
                  med alle dine tannhelsebehov.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 text-sm md:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ring Solheim</span>
                </Link>
                <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 text-sm md:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ring Paradis</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] max-w-sm md:max-w-2xl mx-auto lg:max-w-none relative">
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
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bg-white rounded-xl p-3 md:p-4 lg:p-6 border border-gray-100 text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <fact.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{fact.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div id="contact-form" className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                Book time
              </div>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900">
                  Send oss en melding
                </h2>
                
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-normal">
                  Fyll ut skjemaet så kontakter vi deg for å avtale time eller svare på spørsmål.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
                <div className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                      placeholder="Ditt fulle navn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                      placeholder="+47 xxx xx xxx"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                    placeholder="din@email.no"
                  />
                </div>
                
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                  <div>
                    <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Foretrukket klinikk
                    </label>
                    <select
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                    >
                      <option value="solheim">Solheim</option>
                      <option value="paradis">Paradis</option>
                      <option value="begge">Begge klinikker</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Type behandling
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                    >
                      <option value="">Velg behandling</option>
                      {Object.entries(servicesByCategory).map(([categoryKey, categoryServices]) => {
                        if (categoryServices.length === 0) return null;
                        return (
                          <optgroup key={categoryKey} label={categoryLabels[categoryKey as keyof typeof categoryLabels]}>
                            {categoryServices.map((service) => (
                              <option key={service.id} value={service.title}>
                                {service.title}
                              </option>
                            ))}
                          </optgroup>
                        );
                      })}
                      <option value="Annet">Annet</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-xs sm:text-sm md:text-base"
                    placeholder="Beskriv dine behov eller still spørsmål..."
                  />
                </div>
                
                {/* Cloudflare Turnstile */}
                <div className="flex justify-center">
                  <Turnstile
                    siteKey="0x4AAAAAABkO7BQ5o8uAhgdJ"
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                    options={{
                      theme: 'light',
                      size: 'normal'
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={!turnstileToken || isSubmitting}
                  className={`inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg w-full text-sm md:text-base ${
                    !turnstileToken || isSubmitting 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-primary-700'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sender...' : 'Send melding'}</span>
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  Vi svarer vanligvis innen 2 timer på hverdager. 
                  For akutte tilfeller, ring oss direkte.
                </p>
              </form>
            </div>
            
            {/* Clinic Information */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                Våre klinikker
              </div>
              
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900">
                  Besøk oss på våre klinikker
                </h2>
                
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-normal">
                  To moderne klinikker i Bergen med samme høye standard og kompetanse.
                </p>
              </div>
              
              {/* Clinic Cards */}
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                {/* Solheim Clinic */}
                <div className="bg-gray-50 rounded-2xl p-3 md:p-4 lg:p-6">
                  <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900">Solheim Klinikk</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">
                            {solheimLocation.address}, {solheimLocation.postalCode} {solheimLocation.city}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-primary transition-colors text-sm md:text-base">{solheimLocation.phone}</Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-500" />
                          <Link href={`mailto:${solheimLocation.email}`} className="text-gray-700 hover:text-primary transition-colors text-sm md:text-base">{solheimLocation.email}</Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 text-sm md:text-base">{solheimLocation.openingHours.weekdays}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Car className="w-5 h-5 text-gray-500 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">Gratis parkering • 15 min fra sentrum</span>
                        </div>
                      </div>
                      
                      <Link href="/solheim" className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm md:text-base">
                        Les mer om Solheim
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Paradis Clinic */}
                <div className="bg-gray-50 rounded-2xl p-3 md:p-4 lg:p-6">
                  <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900">Paradis Klinikk</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">
                            {paradisLocation.address}, {paradisLocation.postalCode} {paradisLocation.city}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-gray-500" />
                          <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-primary transition-colors text-sm md:text-base">{paradisLocation.phone}</Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-500" />
                          <Link href={`mailto:${paradisLocation.email}`} className="text-gray-700 hover:text-primary transition-colors text-sm md:text-base">{paradisLocation.email}</Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 text-sm md:text-base">{paradisLocation.openingHours.weekdays}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <TreePine className="w-5 h-5 text-gray-500 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">Naturskjønne omgivelser • 20 min fra sentrum</span>
                        </div>
                      </div>
                      
                      <Link href="/paradis" className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm md:text-base">
                        Les mer om Paradis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-xl flex-shrink-0">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">Akutthjelp</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Ved akutte smerter eller skader, ring oss umiddelbart. 
                      Vi har 24/7 telefontjeneste og kan tilby akuttimer.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <Link href={`tel:${solheimLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 text-sm md:text-base">
                        <Phone className="w-4 h-4" />
                        <span>Ring Solheim</span>
                      </Link>
                      <Link href={`tel:${paradisLocation.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 text-sm md:text-base">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Vi er her for deg
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium">
              Ditt smil er <span className="text-blue-100">vårt fokus</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
              Uansett om du trenger rutinekontroll, akutthjelp eller avansert behandling - 
              vi er klare til å hjelpe deg.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="#contact-form" className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-sm md:text-base">
                <Calendar className="w-5 h-5" />
                <span>Book time nå</span>
              </Link>
              <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                <span>Se våre tjenester</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}