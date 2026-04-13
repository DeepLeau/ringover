'use client'

import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import type { PricingPlan } from '@/types'

interface PricingSectionProps {
  plans: PricingPlan[]
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 px-6 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Tarifs</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            Un plan adapté à chaque équipe.
          </h2>
          <p className="text-base text-[var(--text-2)] leading-relaxed">
            Commencez gratuitement et évoluez selon vos besoins. Aucune carte bancaire requise.
          </p>
        </div>

        {/* Plans Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className={cn(
                'relative flex flex-col gap-5 p-6 rounded-xl border bg-white transition-all duration-200',
                plan.highlighted
                  ? 'border-[var(--accent)] shadow-lg scale-[1.02]'
                  : 'border-[var(--border)] hover:border-[var(--accent)]'
              )}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-medium">
                    Plan le plus populaire
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div>
                <p className="text-sm font-medium text-[var(--text-2)]">{plan.name}</p>
                <div className="flex items-end gap-1 mt-1.5">
                  <span className="text-4xl font-semibold text-[var(--text-1)] tracking-tight">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[var(--text-2)] text-sm mb-1.5">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-2)] mt-2">{plan.description}</p>
              </div>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                size="md"
                className="w-full"
                href={`/signup?plan=${plan.id}`}
              >
                {plan.ctaLabel}
              </Button>

              {/* Features List */}
              <ul className="flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-2 text-sm"
                  >
                    {feature.included ? (
                      <Check
                        size={14}
                        className="text-green-600 shrink-0"
                        strokeWidth={2}
                      />
                    ) : (
                      <Minus
                        size={14}
                        className="text-[var(--text-2)] shrink-0"
                        strokeWidth={2}
                      />
                    )}
                    <span className={feature.included ? 'text-[var(--text-1)]' : 'text-[var(--text-2)]'}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
