import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
})

const inter = Inter({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  fallback: ['monospace'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Ringover — L\'IA qui transforme vos conversations en résultats',
  description:
    'Ringover centralise vos communications, analyse vos conversations avec l\'IA et automatise vos processus commerciaux pour des résultats mesurables.',
  openGraph: {
    title: 'Ringover — L\'IA qui transforme vos conversations en résultats',
    description:
      'Ringover centralise vos communications, analyse vos conversations avec l\'IA et automatise vos processus commerciaux.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`${bricolage.variable} ${inter.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
