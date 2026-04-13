'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function CtaFinalSection() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
          Prêt à transformer vos conversations en performance ?
        </h2>

        <p className="text-base text-white/80 max-w-md">
          Rejoignez plus de 3000 équipes qui utilisent Ringover pour accélérer leurs ventes.
        </p>

        <Button
          variant="primary"
          size="lg"
          href="https://app.ringover.com/signup"
          className="bg-white text-[var(--accent)] hover:bg-white/90"
        >
          Essayer 14 jours gratuits
        </Button>

        <p className="text-sm text-white/60">
          Sans carte bancaire. Configuration en moins de 5 minutes.
        </p>
      </motion.div>
    </section>
  )
}
