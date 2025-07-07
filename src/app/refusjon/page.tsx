import { 
  CheckCircle,
  CreditCard,
  Users,
  GraduationCap,
  Heart,
  ArrowRight,
  Calendar,
  Sparkles,
  Building,
  Phone,
  MapPin,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RefundPage() {
  const helfoRefunds = [
    {
      treatment: "Undersøkelse",
      patientPays: "75 kr",
      helfoCovers: "715 - 1.125 kr",
      total: "790 - 1.200 kr"
    },
    {
      treatment: "Enkelt røntgen",
      patientPays: "75 kr", 
      helfoCovers: "75 kr",
      total: "150 kr"
    },
    {
      treatment: "Enflateplombe",
      patientPays: "275 kr",
      helfoCovers: "825 kr", 
      total: "1100 kr"
    },
    {
      treatment: "Rotbehandling",
      patientPays: "1.125 - 1.625 kr",
      helfoCovers: "3.375 - 4.875 kr",
      total: "4.500 - 6.500 kr"
    }
  ];

  const supportPrograms = [
    {
      icon: Users,
      title: "NAV Støtte",
      description: "Hvis du mottar støtte fra NAV kan du få dekket tannbehandling",
      eligibility: "AAP, uføretrygd, sosialhjelp",
      process: "Forhåndsuttalelse fra NAV kreves"
    },
    {
      icon: GraduationCap,
      title: "Studentrabatt",
      description: "Spesielle priser for studenter med gyldig studentbevis",
      eligibility: "Alle registrerte studenter",
      process: "Vis studentbevis ved time"
    },
    {
      icon: Heart,
      title: "Trygderefusjon",
      description: "Refusjon via folketrygden for visse behandlinger", 
      eligibility: "Alle med norsk personnummer",
      process: "Automatisk via Helfo direkteoppgjør"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Book time",
      description: "Avtaler tid for undersøkelse eller behandling hos oss"
    },
    {
      step: "2", 
      title: "Behandling",
      description: "Vi utfører behandlingen og registrerer alt i våre systemer"
    },
    {
      step: "3",
      title: "Direkteoppgjør", 
      description: "Vi sender regningen direkte til Helfo - du betaler kun egenandel"
    },
    {
      step: "4",
      title: "Ferdig",
      description: "Du slipper å fylle ut skjemaer eller vente på refusjon"
    }
  ];

  const faqs = [
    {
      question: "Hvem har rett til tannhelserefusjon?",
      answer: "Alle med norsk personnummer har rett til refusjon for visse tannbehandlinger. Egenandelen er 25% av Helfo-takstene, minimum 75 kr per behandling."
    },
    {
      question: "Hva dekkes av Helfo?",
      answer: "Helfo dekker nødvendig tannbehandling som undersøkelse, røntgen, plomber, rotbehandling og proteser. Kosmetiske behandlinger som tannbleking dekkes ikke."
    },
    {
      question: "Hvordan fungerer direkteoppgjør?", 
      answer: "Vi sender regningen direkte til Helfo og du betaler kun egenandelen til oss. Du slipper å fylle ut skjemaer eller legge ut penger."
    },
    {
      question: "Kan jeg få støtte fra NAV?",
      answer: "Personer som mottar AAP, uføretrygd eller sosialhjelp kan søke NAV om dekning av tannbehandling. Forhåndsuttalelse kreves."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-8 md:py-16 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center">
              <div className="space-y-3 md:space-y-4 lg:space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-50 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  Refusjon & Støtte
                </div>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 leading-tight">
                    Få støtte til tannbehandling
                  </h1>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-normal max-w-lg">
                    Vi hjelper deg å få mest mulig refusjon fra Helfo og NAV. 
                    Med direkteoppgjør slipper du å legge ut penger og vente på refusjon.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Book time med refusjon</span>
                  </Link>
                  <Link href="/behandlinger" className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-primary-50 text-primary font-semibold rounded-xl hover:bg-primary-100 transition-all duration-300 text-xs sm:text-sm md:text-base">
                    <span>Se priser</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-lg mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/images/placeholder.svg"
                      alt="Refund and support information"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">75%</div>
                      <div className="text-sm text-gray-600">Helfo dekker</div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-green-600" />
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

        {/* Helfo Direct Settlement */}
        <section className="py-8 md:py-16 lg:py-24 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                Helfo direkteoppgjør
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-900 mb-3 sm:mb-4">
                Vi ordner <span className="text-green-600">refusjonen</span> for deg
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                Slipp å fylle ut skjemaer og vente på refusjon. Vi sender regningen direkte til Helfo.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-3 md:p-4 lg:p-6 text-center border border-green-100">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-green-600 font-bold text-sm md:text-base lg:text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-4 lg:p-8 border border-green-100">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-6 text-center">
                Eksempler på refusjon
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-gray-900 font-medium text-sm lg:text-base">Behandling</th>
                      <th className="text-center py-3 px-2 text-gray-900 font-medium text-sm lg:text-base">Total pris</th>
                      <th className="text-center py-3 px-2 text-gray-900 font-medium text-sm lg:text-base">Helfo dekker</th>
                      <th className="text-right py-3 px-2 text-gray-900 font-medium text-sm lg:text-base">Du betaler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {helfoRefunds.map((refund, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-2 text-gray-900 font-medium text-sm lg:text-base">{refund.treatment}</td>
                        <td className="py-4 px-2 text-center text-gray-700 text-sm lg:text-base">{refund.total}</td>
                        <td className="py-4 px-2 text-center text-green-600 font-semibold text-sm lg:text-base">{refund.helfoCovers}</td>
                        <td className="py-4 px-2 text-right text-primary font-semibold text-sm lg:text-base">{refund.patientPays}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-green-800">
                  <strong>Merk:</strong> Egenandelen er 25% av Helfo-taksten, minimum 75 kr per behandling. 
                  Prisene kan variere basert på kompleksitet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Programs */}
        <section className="py-16 sm:py-20 lg:py-32 xl:py-40 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Støtteordninger
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
                Flere måter å få støtte
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Vi hjelper deg å finne alle tilgjengelige støtteordninger for tannbehandling
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {supportPrograms.map((program, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 lg:p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Hvem kan søke:</div>
                      <div className="text-sm text-gray-600">{program.eligibility}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Fremgangsmåte:</div>
                      <div className="text-sm text-gray-600">{program.process}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Discount Highlight */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <GraduationCap className="w-4 h-4" />
                Studenttilbud
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-medium">
                Ekstra rabatt for <span className="text-blue-100">studenter</span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
                Som student får du ytterligere rabatt på toppen av Helfo-refusjonen. 
                Vis studentbevis og spar enda mer på tannhelsa.
              </p>
              
              <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto">
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl lg:text-2xl font-medium text-white">Studentkampanje</h3>
                      <p className="text-blue-100">Undersøkelse + røntgen + rens</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">490 - 690 kr</div>
                    <div className="text-blue-100 mb-4">Normalpris: 790 - 1.200 kr</div>
                    <div className="text-sm text-blue-200">Inkludert Helfo-refusjon</div>
                  </div>
                  
                  <Link href="/kontakt" className="block w-full bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 text-center">
                    Book studenttime nå
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-32 xl:py-40 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Ofte stilte spørsmål
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-4">
                Spørsmål om refusjon?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Her finner du svar på de vanligste spørsmålene om tannhelserefusjon
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100">
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-4 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-normal pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 lg:mt-12">
              <p className="text-sm lg:text-base text-gray-600 mb-6">Har du flere spørsmål? Vi hjelper deg gjerne!</p>
              <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300">
                <Phone className="w-4 h-4" />
                <span>Kontakt oss</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 sm:py-20 lg:py-24 bg-amber-50 border-t border-amber-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-amber-100 rounded-xl flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 mb-4">Viktig informasjon</h3>
                  <div className="space-y-4 text-sm lg:text-base text-gray-700">
                    <p>
                      <strong>Helfo-refusjon:</strong> Gjelder kun nødvendig tannbehandling. 
                      Kosmetiske behandlinger som tannbleking dekkes ikke av folketrygden.
                    </p>
                    <p>
                      <strong>NAV-støtte:</strong> Krever forhåndsuttalelse. Ta kontakt med din saksbehandler 
                      før du booker time for å sikre dekning.
                    </p>
                    <p>
                      <strong>Direkteoppgjør:</strong> Vi tilbyr direkteoppgjør med Helfo for alle behandlinger 
                      som dekkes av folketrygden. Du betaler kun egenandelen til oss.
                    </p>
                    <p>
                      <strong>Studentrabatt:</strong> Gjelder kun med gyldig studentbevis. 
                      Kan ikke kombineres med andre rabattordninger.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Klar for behandling?
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-medium">
                Vi hjelper deg med <span className="text-blue-100">refusjonen</span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-normal">
                Book time i dag og la oss ta oss av alt papirarbeidet. 
                Du betaler kun egenandelen - vi ordner resten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <Link href="/kontakt" className="inline-flex items-center justify-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Book time med refusjon</span>
                </Link>
                <Link href="/behandlinger" className="inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <span>Se behandlinger og priser</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto pt-8 lg:pt-12">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg lg:text-xl font-medium text-white">Paradis Klinikk</h3>
                    </div>
                    
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Link href="tel:+4797326724" className="hover:underline text-sm lg:text-base">+47 97 32 67 24</Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Paradisleitet 1, 5231 Paradis</span>
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
                      <h3 className="text-lg lg:text-xl font-medium text-white">Solheim Klinikk</h3>
                    </div>
                    
                    <div className="space-y-3 text-blue-100">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <Link href="tel:+4792943499" className="hover:underline text-sm lg:text-base">+47 92 94 34 99</Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm lg:text-base">Fjøsangerveien 39, 5054 Bergen</span>
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