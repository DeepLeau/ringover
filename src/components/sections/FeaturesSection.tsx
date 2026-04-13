'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Puzzle, Mic, BarChart3, FileText, Video, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { IntegrationsWidget } from './features/IntegrationsWidget'
import { ScoreWidget } from './features/ScoreWidget'
import { ActivityWidget } from './features/ActivityWidget'
import { MessageWidget } from './features/MessageWidget'
import { cn } from '@/lib/utils'
import type { Feature } from '@/types'

interface FeaturesSectionProps {
  features: Feature[]
}

const iconMap: Record<string, React.ElementType> = {
  Puzzle,
  Mic,
  BarChart3,
  FileText,
  Video,
  TrendingUp,
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
}

function BentoCard({ children, className }: BentoCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [2, -2])
  const rotateY = useTransform(x, [-100, 100], [-2, 2])

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 100)
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 100)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 flex flex-col gap-3 overflow-hidden',
        className
      )}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="flex flex-col gap-2 flex-1">
        {children}
      </div>
    </motion.div>
  )
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-24 px-6 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Fonctionnalités</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            6 raisons pour lesquelles les équipes choisissent Ringover
          </h2>
          <p className="text-base text-[var(--text-2)] leading-relaxed">
            Chaque fonctionnalité est conçue pour accélérer vos ventes et améliorer vos performances.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Integrations Widget - Large Card */}
          <BentoCard className="md:col-span-2">
            <h3 className="text-base font-semibold text-[var(--text-1)]">
              {features[0].title}
            </h3>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {features[0].description}
            </p>
            <div className="flex-1 mt-2">
              <IntegrationsWidget />
            </div>
          </BentoCard>

          {/* Score Widget */}
          <BentoCard>
            <h3 className="text-base font-semibold text-[var(--text-1)]">
              {features[1].title}
            </h3>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {features[1].description}
            </p>
            <div className="flex-1 mt-2">
              <ScoreWidget />
            </div>
          </BentoCard>

          {/* Activity Widget */}
          <BentoCard>
            <h3 className="text-base font-semibold text-[var(--text-1)]">
              {features[2].title}
            </h3>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {features[2].description}
            </p>
            <div className="flex-1 mt-2">
              <ActivityWidget />
            </div>
          </BentoCard>

          {/* Static Feature - Scripting */}
          <BentoCard>
            {(() => {
              const IconComponent = iconMap[features[3].icon] || FileText
              return (
                <>
                  <div className="w-10 h-10 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/10 flex items-center justify-center mb-2">
                    <IconComponent size={20} className="text-[var(--accent)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-1)]">
                    {features[3].title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">
                    {features[3].description}
                  </p>
                </>
              )
            })()}
          </BentoCard>

          {/* Static Feature - Recording */}
          <BentoCard>
            {(() => {
              const IconComponent = iconMap[features[4].icon] || Video
              return (
                <>
                  <div className="w-10 h-10 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/10 flex items-center justify-center mb-2">
                    <IconComponent size={20} className="text-[var(--accent)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-1)]">
                    {features[4].title}
                  </h3>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed">
                    {features[4].description}
                  </p>
                </>
              )
            })()}
          </BentoCard>

          {/* Message Widget - Wide */}
          <BentoCard className="md:col-span-2">
            <h3 className="text-base font-semibold text-[var(--text-1)]">
              {features[5].title}
            </h3>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {features[5].description}
            </p>
            <div className="flex-1 mt-2">
              <MessageWidget />
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}
