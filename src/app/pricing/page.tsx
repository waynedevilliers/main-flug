import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { pricingData, pricingNotes } from '@/data/pricing'
import { Check, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Preise - Mainflug Drohnendienstleistungen',
  description: 'Transparente Preisgestaltung für alle Mainflug Drohnendienstleistungen. Von Immobilien-Exposés bis Baudokumentation.',
}

export default function PricingPage() {
  const services = Object.values(pricingData)

  return (
    <main className="min-h-screen bg-gradient-dark">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Preisliste für Dienstleistungen
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Diese Preisliste bietet Ihnen einen Überblick über unsere indikative Preisgestaltung für die verschiedenen Dienstleistungen von Mainflug. Die genauen Kosten können je nach Umfang, Komplexität, erforderlichen Genehmigungen und spezifischen Kundenwünschen variieren.
            </p>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Individuelles Angebot anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Pricing Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="mb-20">
              {/* Service Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-cyan-400 mb-4">{service.subtitle}</p>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {service.packages?.map((pkg, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full ${
                      pkg.popular
                        ? 'border-cyan-500 bg-slate-800/90 ring-2 ring-cyan-500/20'
                        : 'bg-slate-800/80 border-slate-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-cyan-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                        <Star className="h-3 w-3 inline mr-1" />
                        Beliebt
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-white mb-2">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-cyan-400 mb-4">{pkg.price}</div>
                      <CardDescription className="text-slate-300 text-sm leading-relaxed">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col flex-grow">
                      <ul className="space-y-3 mb-6 flex-grow">
                        {pkg.features?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-slate-300">
                            <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {pkg.note && (
                        <p className="text-xs text-slate-400 mb-4 p-3 bg-slate-700/50 rounded-lg">
                          {pkg.note}
                        </p>
                      )}
                      
                      <Button
                        variant="outline"
                        className="w-full border-slate-600 text-slate-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300 mt-auto"
                      >
                        Paket auswählen
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add-ons for Immobilien service */}
              {service.title === 'Immobilien-Exposés' && (
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Individuelle Add-ons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pricingData.immobilien.addons?.map((addon, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                        <span className="text-slate-300 text-sm">{addon.name}</span>
                        <span className="text-cyan-400 font-medium text-sm">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-4">
                    Ermöglicht die weitere Anpassung von Paketen.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Wichtige Hinweise</h3>
            <div className="bg-slate-800/50 rounded-lg p-6">
              <ul className="space-y-4">
                {pricingNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Bereit für Ihr Projekt?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              Gerne erstellen wir Ihnen ein individuelles Angebot basierend auf Ihren spezifischen Anforderungen.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Kostenloses Beratungsgespräch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
