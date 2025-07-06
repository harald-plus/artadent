import { 
  Sparkles,
  ArrowRight,
  Calendar,
  Building,
  CheckCircle,
  Star,
  Heart,
  Shield,
  Clock,
  Zap,
  Phone,
  MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TreatmentsPage() {
  const servicesByCategory = {
    examination: services.filter(s => s.category === 'examination'),
    treatment: services.filter(s => s.category === 'treatment'),
    prosthetics: services.filter(s => s.category === 'prosthetics'),
    emergency: services.filter(s => s.category === 'emergency')
  };

  const categoryInfo = {
    examination: {
      title: "Undersøkelse & Forebygging",
      description: "Regelmessig kontroll og profesjonell rens",
      icon: "🔍",
      color: "blue"
    },
    treatment: {
      title: "Behandlinger",
      description: "Plomber, rotbehandling og tannrestaurering",
      icon: "🦷",
      color: "green"
    },
    prosthetics: {
      title: "Protetikk",
      description: "Kroner, broer, proteser og implantater",
      icon: "💎",
      color: "purple"
    },
    emergency: {
      title: "Akutt",
      description: "Øyeblikkelig hjelp ved tannsmerte og skader",
      icon: "🚨",
      color: "red"
    }
  };

  const highlights = [
    {
      icon: CheckCircle,
      title: "Helfo direkteoppgjør",
      description: "Vi tar oss av alt papirarbeidet for deg"
    },
    {
      icon: Heart,
      title: "Spesialist på angst",
      description: "Rolig og trygg behandling for redde pasienter"
    },
    {
      icon: Shield,
      title: "Moderne utstyr",
      description: "Siste teknologi for beste resultat"
    },
    {
      icon: Clock,
      title: "Fleksible tider",
      description: "Åpent på kveld og helg for akutte tilfeller"
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
                  <Sparkles className="w-4 h-4" />
                  Komplett tannbehandling
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 leading-tight">
                    Alle behandlinger under ett tak
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-normal max-w-lg">
                    Fra rutinemessig kontroll til avanserte kirurgiske inngrep - 
                    vi dekker alle dine tannhelsebehov med moderne teknikk og omsorgsfull tilnærming.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Calendar className="w-5 h-5" />
                    <span>Book behandling</span>
                  </Link>
                  <Link href="/refusjon" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300">
                    <span>Se refusjonsmuligheter</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/placeholder.svg"
                      alt="Modern dental treatment room"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-gray-600">Behandlinger</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Moderne</div>
                        <div className="text-sm text-gray-600">teknologi</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                Hvorfor velge Artadent?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vi kombinerer erfaring, moderne teknologi og individuell omsorg
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
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

        {/* Treatment Categories */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-normal mb-4">
                Våre tjenester
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Komplett tannhelsetjenester tilpasset dine behov og økonomi
              </p>
            </div>

            {/* Category Sections */}
            <div className="space-y-20">
              {Object.entries(servicesByCategory).map(([categoryKey, categoryServices]) => {
                if (categoryServices.length === 0) return null;
                
                const category = categoryInfo[categoryKey as keyof typeof categoryInfo];
                
                return (
                  <div key={categoryKey} className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.map((service) => (
                        <div key={service.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="text-xl font-medium text-gray-900">{service.name}</h4>
                              <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                              <div className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                                {service.priceRange}
                              </div>
                              <Link href={`/kontakt?service=${encodeURIComponent(service.name)}&scroll=form`} className="text-primary font-medium text-sm hover:underline">
                                Book nå →
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Discount Section */}
        <section className="py-24 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Star className="w-4 h-4" />
                Spesialtilbud
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium">
                Studentrabatt på <span className="text-green-100">alle behandlinger</span>
              </h2>
              
              <p className="text-xl text-green-100 max-w-2xl mx-auto leading-normal">
                Som student hos oss får du rabatt på alle behandlinger. 
                Vis gyldig studentbevis og spar penger på tannhelsa.
              </p>
              
              <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-medium text-white">Studentkampanje</h3>
                      <p className="text-green-100">Inkluderer undersøkelse, røntgen og rens</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">490 - 690 kr</div>
                    <div className="text-green-100">Normalpris: 790 - 1.200 kr</div>
                  </div>
                  
                  <Link href={`/kontakt?service=${encodeURIComponent("Studentkampanje")}&scroll=form`} className="block w-full bg-white text-green-600 font-semibold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 text-center">
                    Book studenttime nå
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Care */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Akuttbehandling
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                    Rask hjelp når du trenger det mest
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-normal">
                    Tannsmerte og akutte skader kan ikke vente. Vi holder åpent på kveld 
                    og helger for å gi deg øyeblikkelig lindring og behandling.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Clock, title: "24/7 telefontjeneste", desc: "Ring oss når som helst for råd og time" },
                    { icon: Zap, title: "Samme-dag behandling", desc: "Akuttimer tilgjengelig innen 24 timer" },
                    { icon: Heart, title: "Smertelindring", desc: "Rask og effektiv behandling av tannsmerte" },
                    { icon: Shield, title: "Akuttkirurgi", desc: "Erfaring med komplekse akuttinngrep" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-red-100 rounded-xl flex-shrink-0">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 mb-2">{item.title}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="tel:+4792943499" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span>92 94 34 99</span>
                  </Link>
                  <Link href="tel:+4797326724" className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    <span>97 32 67 24</span>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Emergency dental care"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                      <div className="text-center text-red-700">
                        <Zap className="w-12 h-12 mx-auto mb-2" />
                        <div className="text-sm font-medium">Øyeblikkelig hjelp</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Pain relief treatment"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Emergency equipment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-red-600">24/7</div>
                    <div className="text-sm text-gray-600">Akutthjelp</div>
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
                Klar for behandling?
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium">
                La oss ta vare på <span className="text-blue-100">ditt smil</span>
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
                Book time i dag og opplev forskjellen med profesjonell tannbehandling 
                i trygge og moderne omgivelser.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book time nå</span>
                </Link>
                <Link href="/om-oss" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <span>Les mer om oss</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
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
                        <span>Paradisleitet 1, 5231 Paradis</span>
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
                        <span>Fjøsangerveien 39, 5054 Bergen</span>
                      </div>
                    </div>
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