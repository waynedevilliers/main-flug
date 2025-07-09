import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainLayout } from '@/components/layout/main-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mainflug - Professionelle Drohnendienstleistungen',
  description: 'Modernste Drohnen- und Kameratechnologie mit Expertise für Immobilien, Industrie und kreative Projekte.',
  keywords: 'Drohne, Luftaufnahmen, Immobilien, 3D-Modellierung, Baudokumentation, Deutschland',
  authors: [{ name: 'Mainflug' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
