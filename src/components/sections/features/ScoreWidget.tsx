'use client'

import { useState, useEffect } from 'react'

export function ScoreWidget() {
  const [score, setScore] = useState(0)
  const targetScore = 87

  const metrics = [
    { label: 'Clarté', value: 92 },
    { label: 'Rythme', value: 78 },
    { label: 'Écoute', value: 85 },
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
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-6 shadow-sm min-h-[220px]">
      <p className="text-sm text-[var(--text-1)] font-medium mb-4">Score de performance IA</p>

      <div className="mb-4">
        <div className="text-5xl font-bold text-[var(--accent)]">
          {Math.min(score, 100)}
          <span className="text-xl text-[var(--text-2)]">/100</span>
        </div>
        <div className="h-2 bg-[var(--surface-2)] rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-[var(--accent)] rounded-full transition-all duration-75"
            style={{ width: `${Math.min(score, 100)}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        {metrics.map(({ label, value }) => (
          <div key={label} className="flex items-center gap-3 text-xs">
            <span className="text-[var(--text-2)] w-16">{label}</span>
            <div className="flex-1 h-1.5 bg-[var(--surface-2)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent)]/40 rounded-full"
                style={{ width: `${Math.min(value, 100)}%` }}
              />
            </div>
            <span className="text-[var(--text-2)] w-8 text-right">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
