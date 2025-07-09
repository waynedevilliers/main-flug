import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { services, companyInfo } from '@/data/services'
import { ArrowRight, CheckCircle, Star, Building2, Camera, Box, Search, Ruler, FileText } from 'lucide-react'

const iconMap = {
  Building2,
  Camera,
  Box,
  Search,
  Ruler,
  FileText
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-slate-900/20"></div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              {companyInfo.name}
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              {companyInfo.description}
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-cyan-500/25">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-cyan-400/30 text-cyan-200 hover:bg-cyan-400/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Unsere Projekte
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Zertifizierte Piloten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>Vollversichert</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                <span>4.9/5 Bewertung</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Unsere Dienstleistungen im Überblick
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Entdecken Sie unser umfassendes Angebot an professionellen Drohnendienstleistungen für jeden Bedarf
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <Card key={service.id} className="group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 bg-slate-800/80 border-slate-700/50 hover:border-cyan-500/30 backdrop-blur-sm overflow-hidden flex flex-col h-full">
                  <CardHeader className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 pb-8">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-12 w-12 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-semibold text-cyan-400 text-base">
                      {service.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-slate-300 mb-4 leading-relaxed flex-grow">{service.description}</p>
                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">{service.details}</p>
                    <Button variant="outline" className="w-full group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 border-slate-600 text-slate-300 transition-all duration-300 font-medium mt-auto">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Better blended background */}
      <section className="bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-cyan-900/40 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/5 to-slate-800/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Bereit für Ihr nächstes Projekt?
          </h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
            Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie uns gemeinsam Ihre Vision verwirklichen.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Kostenvoranschlag anfordern
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-20 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-36 h-36 bg-blue-400/5 rounded-full blur-xl"></div>
      </section>
    </main>
  )
}
