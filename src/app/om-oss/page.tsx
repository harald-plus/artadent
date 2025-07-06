import { 
  Award, 
  Users, 
  Building, 
  Clock, 
  Heart, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Sparkles,
  MapPin,
  Phone,
  Target,
  HandHeart,
  Zap,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { statistics } from "@/data/statistics";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {

  const values = [
    {
      icon: Heart,
      title: "Pasienten i sentrum",
      description: "Vi setter pasientens komfort og trivsel i høysetet. Hver behandling tilpasses den enkelte pasients behov."
    },
    {
      icon: Shield,
      title: "Trygghet og kvalitet",
      description: "Høyeste standard innen hygiene og sikkerhet. Vi bruker kun moderne utstyr og godkjente materialer."
    },
    {
      icon: Users,
      title: "Erfarne fagfolk",
      description: "4 autoriserte tannleger med lang erfaring som jevnlig tar kurs for å holde seg oppdatert."
    },
    {
      icon: Target,
      title: "Forebyggende fokus",
      description: "Vi fokuserer på forebyggende behandling og langvarige løsninger som gir beste resultat."
    }
  ];

  const emergencyServices = [
    "Vedvarende tannverk som ikke gir seg",
    "Betennelse i tannkjøttet",
    "Løse tenner",
    "Tannskader",
    "Tannbyller"
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
                  <Heart className="w-4 h-4" />
                  Om Artadent
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-medium text-gray-900 leading-tight">
                    Hvor vi gir deg en grunn til å smile stolt!
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-normal max-w-lg">
                    Med over 20 års erfaring har Artadent blitt en av Bergens mest betrodde tannklinikker. 
                    Vi spesialiserer oss på akuttbehandling og behandling av pasienter med tannlegeskrekk.
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
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/dental-team.svg"
                      alt="Artadent dental team"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-gray-600">Akutthjelp</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Award className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">20+ år</div>
                        <div className="text-sm text-gray-600">erfaring</div>
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

        {/* About Artadent - Extended Text Section */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Våre klinikker
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                    To moderne klinikker i Bergen
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Artadent har to strategisk plasserte klinikker i Bergen - en i Paradis og en på Solheim 
                      (tidligere Danmarksplass). Begge klinikkene er moderne utstyrt og tilbyr hele spekteret 
                      av tannhelsetjenester.
                    </p>
                    
                    <p>
                      Vi er spesialister på akuttbehandling og har lang erfaring med pasienter som sliter 
                      med tannlegeskrekk. Vårt dedikerte team på 4 erfarne tannleger sørger for at du får 
                      den beste behandlingen i trygge og komfortable omgivelser.
                    </p>
                    
                    <p>
                      Gjennom våre 20+ år i bransjen har vi behandlet over 8.450 fornøyde pasienter. 
                      Vi tar oss god tid til hver pasient og forklarer alltid behandlingsprosessen 
                      steg for steg, slik at du føler deg trygg og ivaretatt.
                    </p>
                  </div>
                </div>
                
                <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg">
                  <span>Se alle våre behandlinger</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 relative h-80 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/clinic-interior.svg"
                      alt="Modern clinic interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/placeholder.svg"
                      alt="Dental equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center text-green-700">
                      <HandHeart className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm font-medium">Omsorgsfull behandling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Våre verdier
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                Dette står vi for
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Våre verdier gjenspeiles i alt vi gjør - fra første konsultasjon til ferdig behandling
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency & Anxiety Specialization */}
        <section className="py-32 lg:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Anxiety patient treatment"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <div className="text-center text-blue-700">
                        <Heart className="w-12 h-12 mx-auto mb-2" />
                        <div className="text-sm font-medium">Angstpasienter</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6 mt-12">
                    <div className="relative h-48 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Emergency dental care"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/placeholder.svg"
                        alt="Modern dental technology"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Akutthjelp</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  Våre spesialområder
                </div>
                
                <div className="space-y-8">
                  <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                    Spesialister på akuttbehandling og tannlegeskrekk
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Vi har spesialisert oss på å behandle pasienter med tannlegeskrekk. 
                      Vi har et eget rom for pasienter som trenger ekstra tid og ro, og våre 
                      tannleger er erfarne i å håndtere nervøse pasienter.
                    </p>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-800 font-medium mb-2">
                            Visste du at du kan unngå omfattende tannbehandling dersom du er 
                            rask til å søke akutthjelp hos tannlegen?
                          </p>
                          <p className="text-gray-700 text-base">
                            Tidlig behandling kan spare deg for både smerte og kostnader.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">
                    Vi behandler akutte tilfeller som:
                  </h3>
                  <div className="space-y-3">
                    {emergencyServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg">
                  <Phone className="w-5 h-5" />
                  <span>Ring for akutthjelp</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Comfort Section */}
        <section className="py-24 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Pasientomsorg
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
                Vi tar oss god tid til deg
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Hos oss får du alltid en grundig forklaring på behandlingen steg for steg. 
                Vi har et spesielt rom for pasienter som trenger ekstra tid og ro, og vi 
                tilpasser alltid behandlingen etter dine behov og ønsker.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                  { icon: Clock, title: "God tid", desc: "Aldri stress eller hastverk" },
                  { icon: Heart, title: "Forståelse", desc: "Vi lytter til dine bekymringer" },
                  { icon: Shield, title: "Trygghet", desc: "Moderne og skånsom behandling" }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
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
                Bli en del av Artadent-familien
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-medium">
                Over 8.450 fornøyde pasienter kan ikke ta feil
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
                Med over 20 års erfaring, 4 dedikerte tannleger og 2 moderne klinikker 
                er vi klare til å gi deg den beste tannbehandlingen i Bergen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book din første time</span>
                </Link>
                <Link href="/solheim" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <span>Besøk våre klinikker</span>
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

      <Footer />
    </div>
  );
}