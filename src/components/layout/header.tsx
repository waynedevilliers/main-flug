'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Dienstleistungen', href: '/services' },
    { name: 'Preise', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/90">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden items-center justify-end border-b border-gray-800 py-2 text-sm text-gray-300 md:flex">
          <div className="flex items-center gap-6">
            <a
              href="tel:+49123456789"
              className="flex items-center gap-1 transition-colors hover:text-blue-400"
            >
              <Phone className="h-3 w-3" />
              +49 123 456 789
            </a>
            <a
              href="mailto:info@mainflug.de"
              className="flex items-center gap-1 transition-colors hover:text-blue-400"
            >
              <Mail className="h-3 w-3" />
              info@mainflug.de
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-noBackground.jpeg"
              alt="Mainflug Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative font-medium text-gray-300 transition-colors hover:text-blue-400"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Button className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-blue-500/25">
              Kostenlose Beratung
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-gray-300 transition-colors hover:text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-800 bg-gray-900 lg:hidden">
            <div className="space-y-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-2 py-2 font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-800 pt-4">
                <Button className="w-full rounded-full bg-blue-600 py-2 font-medium text-white transition-all duration-300 hover:bg-blue-700">
                  Kostenlose Beratung
                </Button>
              </div>
              <div className="flex flex-col gap-2 pt-2 text-sm text-gray-400">
                <a
                  href="tel:+49123456789"
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <Phone className="h-4 w-4" />
                  +49 123 456 789
                </a>
                <a
                  href="mailto:info@mainflug.de"
                  className="flex items-center gap-2 transition-colors hover:text-blue-400"
                >
                  <Mail className="h-4 w-4" />
                  info@mainflug.de
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
