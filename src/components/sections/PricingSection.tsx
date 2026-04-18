'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Minus } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import type { PricingPlan } from '@/types'

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section
      id="tarifs"
      className="py-20 relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99,102,241,.05) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-8 max-w-[1200px]">
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
            Tarifs
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
            Un plan adapté à chaque équipe
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto' }}>
            Commencez gratuitement et évoluez selon vos besoins. Aucune carte bancaire requise.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
              Mensuel
            </span>
            {/* Toggle switch */}
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-[44px] h-[24px] rounded-full transition-all duration-200 cursor-pointer"
              style={{
                background: isAnnual ? 'var(--accent-dim)' : 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
              }}
              aria-label="Basculer entre mensuel et annuel"
            >
              <span
                className="absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full transition-all duration-200"
                style={{
                  background: isAnnual ? 'var(--accent-hi)' : 'var(--dim)',
                  transform: isAnnual ? 'translateX(20px)' : 'translateX(0)',
                }}
              />
            </button>
            <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
              Annuel{' '}
              <span
                className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ml-1"
                style={{
                  background: 'rgba(99,102,241,.2)',
                  color: 'var(--accent-hi)',
                }}
              >
                -20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: '1fr 1.1fr 1fr',
            alignItems: 'start',
          }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative rounded-[var(--r-xl)] p-7 flex flex-col gap-5 transition-all duration-200"
              style={
                plan.highlighted
                  ? {
                      background:
                        'linear-gradient(160deg, rgba(99,102,241,.12) 0%, rgba(30,20,60,.6) 40%, rgba(165,180,252,.08) 100%)',
                      border: '1px solid rgba(99,102,241,.25)',
                      backdropFilter: 'blur(16px)',
                      marginTop: '-20px',
                      marginBottom: '-20px',
                      boxShadow: '0 0 48px rgba(99,102,241,.15)',
                    }
                  : {
                      background:
                        'linear-gradient(160deg, rgba(99,102,241,.05) 0%, rgba(17,17,17,.5) 50%, rgba(165,180,252,.03) 100%)',
                      border: '1px solid var(--glass-border)',
                      backdropFilter: 'blur(12px)',
                    }
              }
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-[20%] right-[20%] rounded-b"
                style={{
                  height: plan.highlighted ? '3px' : '2px',
                  background: plan.highlighted
                    ? 'linear-gradient(90deg, transparent, var(--accent-hi), var(--accent), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(99,102,241,.5), transparent)',
                }}
              />

              {/* Popular badge */}
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-hi))',
                    borderRadius: '100px',
                    padding: '3px 12px',
                  }}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest text-white"
                  >
                    Populaire
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div>
                <p
                  className="text-[15px] font-medium mb-2"
                  style={{ color: 'var(--text-1)' }}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-[38px] font-extralight tracking-tight"
                    style={{
                      fontFamily: 'var(--font-bricolage), sans-serif',
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      ...(plan.highlighted
                        ? {
                            background:
                              'linear-gradient(135deg, var(--peak), var(--accent-hi))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : { color: 'var(--text-1)' }),
                    }}
                  >
                    {isAnnual && plan.price !== '0'
                      ? `${Math.round(Number(plan.price) * 0.8)}`
                      : plan.price}
                    {plan.price !== '0' ? '€' : ''}
                  </span>
                  {plan.price !== '0' && (
                    <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                      /{plan.period}
                    </span>
                  )}
                </div>

                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)', minHeight: 44 }}>
                  {plan.description}
                </p>
              </div>

              {/* CTA button */}
              <button
                className="w-full py-3.5 rounded-xl text-[14px] font-medium transition-all duration-200"
                style={
                  plan.highlighted
                    ? {
                        background: 'linear-gradient(135deg, var(--accent), #4338CA)',
                        color: '#fff',
                        boxShadow: '0 8px 24px rgba(99,102,241,.4)',
                      }
                    : {
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-1)',
                      }
                }
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'
                    e.currentTarget.style.background = 'var(--accent-dim)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = 'var(--glass-border)'
                    e.currentTarget.style.background = 'var(--glass-bg)'
                  }
                }}
              >
                {plan.ctaLabel}
              </button>

              {/* Divider */}
              <div
                className="h-px"
                style={{ background: 'var(--glass-border)' }}
              />

              {/* Features list */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-start gap-2.5 text-[13px]"
                  >
                    {feature.included ? (
                      <Check
                        size={15}
                        strokeWidth={1.5}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--accent-hi)' }}
                      />
                    ) : (
                      <Minus
                        size={15}
                        strokeWidth={1.5}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--dim)' }}
                      />
                    )}
                    <span
                      style={{
                        color: feature.included
                          ? 'var(--muted)'
                          : 'var(--dim)',
                      }}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
