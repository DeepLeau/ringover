import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Ringover — L\'IA qui transforme vos conversations en résultats',
  description: 'Ringover centralise vos communications, analyse vos conversations avec l\'IA et automatise vos processus commerciaux pour des résultats mesurables.',
  openGraph: {
    title: 'Ringover — L\'IA qui transforme vos conversations en résultats',
    description: 'Ringover centralise vos communications, analyse vos conversations avec l\'IA et automatise vos processus commerciaux.',
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
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
