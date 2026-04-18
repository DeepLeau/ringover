'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  badge?: string
  badgeVariant?: 'default' | 'warn' | 'info'
  visual?: React.ReactNode
  className?: string
  colSpan?: 'normal' | 'wide' | 'tall' | 'full'
}

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  badgeVariant = 'default',
  visual,
  className,
  colSpan = 'normal',
}: FeatureCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [2, -2])
  const rotateY = useTransform(x, [-100, 100], [-2, 2])

  const badgeColors = {
    default: 'bg-[rgba(40,200,100,.1)] border-[rgba(40,200,100,.2)] text-[rgba(40,200,100,.8)]',
    warn: 'bg-[rgba(254,188,46,.08)] border-[rgba(254,188,46,.2)] text-[rgba(254,188,46,.8)]',
    info: 'bg-[rgba(99,102,241,.08)] border-[rgba(99,102,241,.2)] text-[rgba(165,180,252,.8)]',
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(((e.clientX - rect.left) / rect.width - 0.5) * 100)
        y.set(((e.clientY - rect.top) / rect.height - 0.5) * 100)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative rounded-[var(--r-xl)] border border-[var(--border-md)] overflow-hidden',
        'bg-[linear-gradient(145deg,var(--accent-dim)_0%,var(--surface-1)_40%,rgba(165,180,252,.03)_100%)]',
        'p-7 flex flex-col gap-5 cursor-default',
        'transition-all duration-300',
        'group',
        colSpan === 'wide' && 'md:col-span-2',
        colSpan === 'tall' && 'md:row-span-2 md:flex',
        colSpan === 'full' && 'md:col-span-full md:grid md:grid-cols-[1fr_1.5fr] md:gap-8 md:items-center',
        className
      )}
    >
      {/* Top gradient line on hover */}
      <div className="absolute top-0 left-[20%] right-[20%] h-px bg-[linear-gradient(90deg,transparent,rgba(99,102,241,.6),rgba(165,180,252,.4),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Status badge */}
      {badge && (
        <div className={cn('absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-mono z-10', badgeColors[badgeVariant])}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-[pulse-dot_2s_ease-in-out_infinite]" />
          {badge}
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[var(--accent-dim)] border border-[rgba(99,102,241,.2)] flex items-center justify-center relative z-10">
        {icon}
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-[20px] font-[var(--font-bricolage)] font-[400] tracking-[-0.02em] text-[var(--text-1)] leading-tight">
          {title}
        </h3>
        <p className="text-[15px] text-[var(--muted)] leading-[1.7]">
          {description}
        </p>
      </div>

      {/* Visual */}
      {visual && (
        <div className="mt-6 relative z-10">
          {visual}
        </div>
      )}
    </motion.div>
  )
}
