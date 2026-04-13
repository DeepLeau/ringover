'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { Integration } from '@/types'

interface IntegrationsSectionProps {
  integrations: Integration[]
}

export function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  return (
    <section id="integrations" className="py-24 px-6 bg-[var(--surface-2)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Intégrations</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            S&apos;intègre à vos outils existants
          </h2>
          <p className="text-base text-[var(--text-2)] leading-relaxed">
            Connectez Ringover à votre stack existante en quelques clics. Plus de 60 intégrations disponibles.
          </p>
        </div>

        {/* Integrations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-1)] cursor-pointer transition-all duration-200 hover:border-[var(--accent)] hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[var(--border)] flex items-center justify-center">
                <span className="text-xs font-semibold text-[var(--text-1)]">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="text-xs text-[var(--text-2)] text-center">{integration.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#integrations"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            Voir toutes les intégrations →
          </a>
        </div>
      </div>
    </section>
  )
}
