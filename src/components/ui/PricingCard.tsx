import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { PricingPlan } from '@/types'

interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-[28px] p-8 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1',
        plan.highlighted
          ? 'bg-[linear-gradient(160deg,rgba(99,102,241,0.12),rgba(30,20,60,0.6),rgba(165,180,252,0.08))] border border-[rgba(99,102,241,0.4)] shadow-[0_0_60px_rgba(99,102,241,0.15)]'
          : 'bg-[linear-gradient(160deg,rgba(99,102,241,0.05),rgba(17,17,17,0.5),rgba(165,180,252,0.03)] border border-[rgba(255,255,255,0.06)] backdrop-blur-[12px]',
        className
      )}
    >
      {/* Topbar gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 rounded-t-[28px] ${
          plan.highlighted ? 'h-[3px]' : 'h-[2px]'
        }`}
        style={{
          background: plan.highlighted
            ? 'linear-gradient(90deg, transparent, rgba(165,180,252,0.8), rgba(99,102,241,0.6), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
        }}
      />

      {/* Popular badge */}
      {plan.highlighted && (
        <div className="inline-flex self-start">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hi)] text-white text-[11px] font-bold uppercase tracking-widest">
            Populaire
          </span>
        </div>
      )}

      {/* Plan name */}
      <div>
        <p className="text-[18px] font-medium text-[var(--text-1)] tracking-[-0.02em] font-[var(--font-bricolage)]">
          {plan.name}
        </p>
        <p className="text-[14px] text-[var(--text-2)] mt-1 leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1.5">
        <span
          className={cn(
            'text-[40px] font-[var(--font-bricolage)] tracking-[-0.04em] leading-none',
            plan.highlighted
              ? 'text-gradient'
              : 'text-[var(--text-1)]'
          )}
        >
          {plan.price === '0' ? 'Gratuit' : `${plan.price}€`}
        </span>
        {plan.price !== '0' && (
          <span className="text-[14px] text-[var(--text-2)]">{plan.period}</span>
        )}
      </div>

      {/* CTA */}
      <button
        className={cn(
          'h-11 rounded-[12px] text-[15px] font-medium transition-all duration-200',
          plan.highlighted
            ? 'bg-gradient-to-r from-[var(--accent)] to-[#4338ca] text-white shadow-[0_8px_24px_rgba(99,102,241,0.4)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.6)] hover:-translate-y-0.5'
            : 'bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-1)] hover:border-[rgba(99,102,241,0.4)] hover:bg-[var(--accent-dim)]'
        )}
      >
        {plan.ctaLabel}
      </button>

      {/* Divider */}
      <div className="h-px bg-[rgba(255,255,255,0.06)]" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5 text-[14px]">
            {feature.included ? (
              <Check
                size={15}
                className="text-[var(--accent-hi)] shrink-0 mt-0.5"
                strokeWidth={2}
              />
            ) : (
              <Minus
                size={15}
                className="text-[var(--text-3)] shrink-0 mt-0.5"
                strokeWidth={2}
              />
            )}
            <span
              className={
                feature.included ? 'text-[var(--text-2)]' : 'text-[var(--text-3)]'
              }
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
