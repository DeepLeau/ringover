'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Metric } from '@/types'

interface MetricsSectionProps {
  metrics: Metric[]
}

interface CounterFeatureProps {
  value: number
  suffix: string
}

function CounterFeature({ value, suffix }: CounterFeatureProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const frames = 60
    const increment = value / (duration / (1000 / frames))
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / frames)

    return () => clearInterval(interval)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-white tracking-tight">
      {count.toLocaleString()}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </div>
  )
}

export function MetricsSection({ metrics }: MetricsSectionProps) {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#4f46e5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Des résultats mesurables
          </h2>
          <p className="text-base text-white/80 leading-relaxed">
            Nos clients constatent des améliorations significatives dès les premiers mois d&apos;utilisation.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <CounterFeature value={metric.value} suffix={metric.suffix} />
              <p className="text-lg font-medium text-white mt-2">{metric.label}</p>
              <p className="text-sm text-white/60 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
