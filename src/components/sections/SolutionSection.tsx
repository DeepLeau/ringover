'use client'

import { motion } from 'framer-motion'
import { Phone, Sparkles, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { Product } from '@/types'

interface SolutionSectionProps {
  products: Product[]
}

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Sparkles,
  Zap,
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export function SolutionSection({ products }: SolutionSectionProps) {
  return (
    <section className="py-24 px-6 bg-[var(--surface-2)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>La solution</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            Une suite intégrée. Trois solutions. Zéro friction.
          </h2>
          <p className="text-base text-[var(--text-2)] leading-relaxed">
            Ringover, Empower et Cadence fonctionnent ensemble pour transformer vos processus commerciaux.
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {products.map((product) => {
            const IconComponent = iconMap[product.icon] || Phone
            return (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className={cn(
                  'relative flex flex-col gap-4 p-6 rounded-xl border bg-[var(--bg)] transition-all duration-200',
                  product.id === 'ringover'
                    ? 'border-[var(--accent)] shadow-lg'
                    : 'border-[var(--border)] hover:border-[var(--accent)]'
                )}
              >
                {product.id === 'ringover' && (
                  <div className="absolute -top-3 left-4">
                    <span className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-[10px] font-medium">
                      Principal
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 flex items-center justify-center">
                  <IconComponent size={24} className="text-[var(--accent)]" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-1)]">{product.name}</h3>
                  <p className="text-xs text-[var(--accent)] uppercase tracking-wide">{product.tagline}</p>
                </div>

                <p className="text-sm text-[var(--text-2)] leading-relaxed">{product.description}</p>

                <ul className="flex flex-col gap-2 mt-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-[var(--text-2)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
