import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { MetricsSection } from '@/components/sections/MetricsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { IntegrationsSection } from '@/components/sections/IntegrationsSection'
import { CtaFinalSection } from '@/components/sections/CtaFinalSection'
import { Footer } from '@/components/layout/Footer'
import {
  navLinks,
  clients,
  painPoints,
  products,
  features,
  metrics,
  testimonials,
  pricingPlans,
  integrations,
} from '@/lib/data'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar navLinks={navLinks} />
      <HeroSection />
      <ClientLogosSection clients={clients} />
      <ProblemSection painPoints={painPoints} />
      <SolutionSection products={products} />
      <FeaturesSection features={features} />
      <MetricsSection metrics={metrics} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection plans={pricingPlans} />
      <IntegrationsSection integrations={integrations} />
      <CtaFinalSection />
      <Footer />
    </main>
  )
}
