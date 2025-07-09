import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const services = [
    'Immobilien-Exposés',
    'Imagefilme',
    '3D-Modellierung',
    'Dachinspektionen',
    'Präzisionsmessungen',
    'Baudokumentation'
  ]

  const quickLinks = [
    { name: 'Über uns', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Karriere', href: '/careers' },
    { name: 'Datenschutz', href: '/privacy' },
    { name: 'Impressum', href: '/legal' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo-mainFlug.jpeg"
                alt="Mainflug Logo"
                width={100}
                height={33}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300">
              Professionelle Drohnendienstleistungen für Immobilien, Industrie und kreative Projekte.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Musterstraße 123, 12345 Berlin</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+49123456789" className="hover:text-blue-400 transition-colors">
                  +49 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@mainflug.de" className="hover:text-blue-400 transition-colors">
                  info@mainflug.de
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Mo-Fr: 8:00-18:00 Uhr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Dienstleistungen</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Schnellzugriff</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Bleiben Sie informiert</h3>
            <p className="text-gray-300 text-sm">
              Erhalten Sie Updates über neue Technologien und Angebote.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
                Anmelden
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mainflug. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Datenschutz
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                AGB
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
