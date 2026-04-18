import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CtaFinalSection } from '@/components/sections/CtaFinalSection'
import { Footer } from '@/components/layout/Footer'
import { navLinks, clients, features, testimonials } from '@/lib/data'

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar navLinks={navLinks} />
      <HeroSection />
      <ClientLogosSection clients={clients} />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection />
      <CtaFinalSection />
      <Footer />
    </main>
  )
}
