'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { contactServices, inquiryTypes, urgencyLevels } from '@/data/contact'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    service: '',
    package: '',
    urgency: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [selectedService, setSelectedService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedService(value)
    setFormData(prev => ({
      ...prev,
      service: value,
      package: '' // Reset package when service changes
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        service: '',
        package: '',
        urgency: '',
        projectDetails: '',
        budget: '',
        timeline: '',
        message: ''
      })
      setSelectedService('')
    }, 3000)
  }

  const selectedServiceData = contactServices.find(s => s.id === selectedService)

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-800/80 rounded-lg p-8 border border-slate-700">
              <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Vielen Dank!</h1>
              <p className="text-xl text-slate-300 mb-6">
                Ihre Anfrage wurde erfolgreich übermittelt. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
              </p>
              <p className="text-slate-400">
                Sie erhalten eine Bestätigungsmail an {formData.email}
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-dark">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Kontakt aufnehmen
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Bereit für Ihr nächstes Projekt? Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-800/80 border-slate-700/50 mb-6">
                <CardHeader>
                  <CardTitle className="text-white">Kontaktinformationen</CardTitle>
                  <CardDescription className="text-slate-300">
                    Sprechen Sie direkt mit unserem Team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <a href="tel:+49123456789" className="text-cyan-400 hover:text-cyan-300">
                        +49 123 456 789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="font-medium">E-Mail</p>
                      <a href="mailto:info@mainflug.de" className="text-cyan-400 hover:text-cyan-300">
                        info@mainflug.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-slate-400">Musterstraße 123<br />12345 Berlin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="font-medium">Geschäftszeiten</p>
                      <p className="text-slate-400">Mo-Fr: 8:00-18:00 Uhr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white">Schnelle Antwort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Wir antworten in der Regel innerhalb von 24 Stunden auf alle Anfragen.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-400">
                      <span>Beratungsanfragen:</span>
                      <span className="text-emerald-400">2-4 Stunden</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Kostenvoranschläge:</span>
                      <span className="text-amber-400">24 Stunden</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Notfall-Service:</span>
                      <span className="text-red-400">1 Stunde</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/80 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white">Anfrage senden</CardTitle>
                  <CardDescription className="text-slate-300">
                    Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                          Vorname *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Ihr Vorname"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                          Nachname *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Ihr Nachname"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          E-Mail-Adresse *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ihre.email@beispiel.de"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                          Telefonnummer
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+49 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Unternehmen
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ihr Unternehmen (optional)"
                      />
                    </div>

                    {/* Inquiry Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-white mb-2">
                          Art der Anfrage *
                        </label>
                        <Select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                        >
                          <option value="">Bitte auswählen</option>
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-white mb-2">
                          Dringlichkeit
                        </label>
                        <Select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                        >
                          <option value="">Bitte auswählen</option>
                          {urgencyLevels.map((level) => (
                            <option key={level.value} value={level.value}>
                              {level.label}
                            </option>
                          ))}
                        </Select>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                          Gewünschte Dienstleistung
                        </label>
                        <Select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleServiceChange}
                        >
                          <option value="">Bitte auswählen</option>
                          {contactServices.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name}
                            </option>
                          ))}
                        </Select>
                      </div>
                      {selectedServiceData && (
                        <div>
                          <label htmlFor="package" className="block text-sm font-medium text-white mb-2">
                            Paket
                          </label>
                          <Select
                            id="package"
                            name="package"
                            value={formData.package}
                            onChange={handleInputChange}
                          >
                            <option value="">Bitte auswählen</option>
                            {selectedServiceData.packages.map((pkg, index) => (
                              <option key={index} value={pkg}>
                                {pkg}
                              </option>
                            ))}
                          </Select>
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                          Budget (optional)
                        </label>
                        <Select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                        >
                          <option value="">Bitte auswählen</option>
                          <option value="under-500">Unter €500</option>
                          <option value="500-1000">€500 - €1.000</option>
                          <option value="1000-2500">€1.000 - €2.500</option>
                          <option value="2500-5000">€2.500 - €5.000</option>
                          <option value="over-5000">Über €5.000</option>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                          Gewünschter Zeitrahmen
                        </label>
                        <Input
                          id="timeline"
                          name="timeline"
                          type="text"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          placeholder="z.B. 'nächste Woche' oder '15. August'"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-2">
                        Projektdetails
                      </label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={3}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Beschreiben Sie Ihr Projekt kurz (Standort, Größe, besondere Anforderungen...)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Nachricht
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Weitere Informationen oder spezielle Wünsche..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Anfrage senden
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. 
                      Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
