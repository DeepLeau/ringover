'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  { feature: 'Détection des signaux prioritaires', emailmind: true, optionA: true, optionB: false },
  { feature: 'Reply IA personnalisé', emailmind: true, optionA: false, optionB: true },
  { feature: 'Warmup d\'email intégré', emailmind: true, optionA: false, optionB: false },
  { feature: 'Scoring intelligent des leads', emailmind: true, optionA: true, optionB: false },
  { feature: 'Intégrations CRM natives', emailmind: true, optionA: true, optionB: true },
  { feature: 'Analytics avancés', emailmind: true, optionA: false, optionB: true },
  { feature: 'Séquences multicanal', emailmind: true, optionA: true, optionB: false },
  { feature: 'Support en français', emailmind: true, optionA: false, optionB: false },
]

export function ComparatifSection() {
  return (
    <section
      className="py-20 relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,.03) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-8 max-w-[1000px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'var(--accent-dim)',
              border: '1px solid rgba(99,102,241,.3)',
              color: 'var(--accent-hi)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent)' }}
            />
            Comparatif
          </div>

          <h2
            className="text-gradient-h"
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 'clamp(22px, 2.2vw, 32px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              marginBottom: '10px',
            }}
          >
            Pourquoi Ringover胜过 la concurrence
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto' }}>
            Une comparaison honnête avec les solutions du marché.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[var(--r-xl)] overflow-hidden"
          style={{
            border: '1px solid var(--glass-border)',
            background: 'linear-gradient(160deg, rgba(99,102,241,.04) 0%, rgba(17,17,17,.6) 100%)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Table header */}
          <div
            className="grid px-6 py-4"
            style={{
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            {['Fonctionnalité', 'Ringover', 'Option A', 'Option B'].map(
              (col, i) => (
                <div
                  key={col}
                  className="text-[11px] font-semibold uppercase tracking-widest"
                  style={{
                    color:
                      i === 0
                        ? 'var(--text-2)'
                        : i === 1
                        ? 'var(--accent-hi)'
                        : 'var(--dim)',
                    fontFamily: 'var(--font-mono), monospace',
                  }}
                >
                  {i === 1 ? (
                    <span
                      className="inline-flex items-center gap-1.5"
                      style={{
                        padding: '2px 8px',
                        borderRadius: '100px',
                        background: 'var(--accent-dim)',
                        border: '1px solid rgba(99,102,241,.3)',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                      {col}
                    </span>
                  ) : (
                    col
                  )}
                </div>
              )
            )}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid px-6 py-3.5 transition-colors duration-150"
              style={{
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                borderBottom:
                  i < rows.length - 1
                    ? '1px solid rgba(255,255,255,0.03)'
                    : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {/* Feature name */}
              <span
                className="text-[13px]"
                style={{ color: 'var(--muted)' }}
              >
                {row.feature}
              </span>

              {/* Ringover */}
              <div className="flex justify-center">
                {row.emailmind ? (
                  <Check size={15} strokeWidth={1.5} style={{ color: 'var(--green)' }} />
                ) : (
                  <X size={15} strokeWidth={1.5} style={{ color: 'var(--red)' }} />
                )}
              </div>

              {/* Option A */}
              <div className="flex justify-center">
                {row.optionA ? (
                  <Check size={15} strokeWidth={1.5} style={{ color: 'var(--green)' }} />
                ) : (
                  <X size={15} strokeWidth={1.5} style={{ color: 'var(--red)' }} />
                )}
              </div>

              {/* Option B */}
              <div className="flex justify-center">
                {row.optionB ? (
                  <Check size={15} strokeWidth={1.5} style={{ color: 'var(--green)' }} />
                ) : (
                  <X size={15} strokeWidth={1.5} style={{ color: 'var(--red)' }} />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <p
          className="text-center mt-5 text-[11px]"
          style={{
            color: 'var(--dim)',
            fontFamily: 'var(--font-mono), monospace',
          }}
        >
          Comparaison basée sur les fonctionnalités publiques au 1er trimestre 2025.
          Les résultats peuvent varier.
        </p>
      </div>
    </section>
  )
}
