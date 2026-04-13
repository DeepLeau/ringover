'use client'

import { motion } from 'framer-motion'
import { AlertCircle, EyeOff, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { PainPoint } from '@/types'

interface ProblemSectionProps {
  painPoints: PainPoint[]
}

const iconMap: Record<string, React.ElementType> = {
  AlertCircle,
  EyeOff,
  Clock,
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

export function ProblemSection({ painPoints }: ProblemSectionProps) {
  return (
    <section className="py-24 px-6 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Le problème</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            Vos échanges clients sont éparpillés.
            <br />
            Vos équipes perdent du temps.
          </h2>
          <p className="text-base text-[var(--text-2)] leading-relaxed">
            Quand vos communications sont dispersées, vos équipes perdent en efficacité et vos clients sienten le manque de réactivité.
          </p>
        </div>

        {/* Pain Points Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {painPoints.map((painPoint) => {
            const IconComponent = iconMap[painPoint.icon] || AlertCircle
            return (
              <motion.div
                key={painPoint.title}
                variants={fadeInUp}
                className="flex flex-col gap-4 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-1)]"
              >
                <div className="w-12 h-12 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 flex items-center justify-center">
                  <IconComponent size={24} className="text-[var(--accent)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-1)] mb-2">
                    {painPoint.title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">
                    {painPoint.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
