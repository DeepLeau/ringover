'use client'

import { useState, useEffect } from 'react'
import { Trophy } from 'lucide-react'

export function ScoreWidget() {
  const [score, setScore] = useState(0)
  const targetScore = 87

  const metrics = [
    { label: 'Priorité', value: 92 },
    { label: 'Timing', value: 78 },
    { label: 'Contexte', value: 85 },
    { label: 'Closing', value: 88 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        if (prev >= targetScore) {
          clearInterval(interval)
          return targetScore
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="rounded-[var(--r-lg)] border border-[var(--border)] bg-[var(--bg-2)] p-6 min-h-[220px]"
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={14} strokeWidth={1.5} style={{ color: 'var(--yellow)' }} />
        <p className="text-[13px] font-medium" style={{ color: 'var(--text-1)' }}>
          Score de priorité
        </p>
      </div>

      {/* Score display */}
      <div className="mb-4">
        <div className="flex items-baseline gap-1">
          <span
            className="text-5xl font-semibold"
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              letterSpacing: '-0.04em',
              color: 'var(--accent-hi)',
            }}
          >
            {Math.min(score, 100)}
          </span>
          <span className="text-xl" style={{ color: 'var(--text-2)' }}>
            /100
          </span>
        </div>
        {/* Progress bar */}
        <div
          className="h-1.5 rounded-full overflow-hidden mt-2"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${Math.min(score, 100)}%`,
              background: 'linear-gradient(90deg, var(--accent), var(--accent-hi))',
            }}
          />
        </div>
      </div>

      {/* Metrics breakdown */}
      <div className="space-y-2.5">
        {metrics.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-3 text-[12px]">
            <span
              className="w-16 flex-shrink-0"
              style={{ color: 'var(--dim)' }}
            >
              {label}
            </span>
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${value}%`,
                  background: 'rgba(99,102,241,0.4)',
                }}
              />
            </div>
            <span
              className="w-8 text-right flex-shrink-0 tabular-nums"
              style={{ color: 'var(--text-2)' }}
            >
              {value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
