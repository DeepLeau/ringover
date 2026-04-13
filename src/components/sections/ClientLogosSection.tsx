'use client'

import { motion } from 'framer-motion'
import type { Client } from '@/types'

interface ClientLogosSectionProps {
  clients: Client[]
}

export function ClientLogosSection({ clients }: ClientLogosSectionProps) {
  return (
    <section className="py-12 px-6 border-y border-[var(--border)] bg-[var(--surface-2)]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs text-[var(--text-2)] uppercase tracking-widest mb-8">
          Plus de 3000 équipes commerciales nous font confiance
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {clients.map((client, i) => (
            <motion.span
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="text-sm font-semibold text-[var(--text-2)] tracking-tight cursor-default hover:opacity-100 transition-opacity duration-200 grayscale opacity-50 hover:grayscale-0"
            >
              {client.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
