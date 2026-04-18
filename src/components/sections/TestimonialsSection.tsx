'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'
import type { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] rounded-[var(--r-lg)] p-6 flex flex-col gap-4"
      style={{
        background: 'linear-gradient(145deg, rgba(99,102,241,.05) 0%, rgba(17,17,17,.5) 50%, rgba(165,180,252,.03) 100%)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Quote mark */}
      <div
        className="text-2xl font-extrabold leading-none"
        style={{
          fontFamily: 'var(--font-bricolage), sans-serif',
          color: 'rgba(99,102,241,0.4)',
        }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            strokeWidth={0}
            className="fill-[var(--yellow)] text-[var(--yellow)]"
          />
        ))}
      </div>

      {/* Quote text */}
      <p
        className="text-[14px] leading-relaxed flex-1"
        style={{ color: 'var(--muted)' }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        <div
          className="w-[38px] h-[38px] rounded-full border flex items-center justify-center text-[13px] font-semibold flex-shrink-0"
          style={{
            background: 'var(--accent-dim)',
            borderColor: 'rgba(99,102,241,0.2)',
            color: 'var(--accent-hi)',
          }}
        >
          {testimonial.avatarInitials}
        </div>
        <div>
          <p className="text-[13px] font-semibold" style={{ color: 'var(--text-1)' }}>
            {testimonial.author}
          </p>
          <p className="text-[11px]" style={{ color: 'var(--dim)' }}>
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section
      className="py-20 overflow-hidden relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,.04) 0%, transparent 70%)',
        }}
      />

      {/* Section header */}
      <div className="container mx-auto px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
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
            Témoignages
          </div>

          <h2 className="text-gradient-h" style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontSize: 'clamp(22px, 2.2vw, 32px)',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: 1.12,
          }}>
            Plus de 3 000 équipes sales<br />
            font confiance à Ringover
          </h2>
        </motion.div>
      </div>

      {/* Triple Animated Canopy with gradient masks */}
      <div className="relative">
        {/* Left gradient mask */}
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, var(--bg), transparent)',
          }}
        />
        {/* Right gradient mask */}
        <div
          className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to left, var(--bg), transparent)',
          }}
        />

        <div className="relative flex flex-col gap-4">
          {/* Line 1 — left to right */}
          <AnimatedCanopy reverse={false} pauseOnHover>
            {testimonials.map((t) => (
              <TestimonialCard key={`t1-${t.id}`} testimonial={t} />
            ))}
          </AnimatedCanopy>

          {/* Line 2 — right to left */}
          <AnimatedCanopy reverse={true} pauseOnHover>
            {testimonials.map((t) => (
              <TestimonialCard key={`t2-${t.id}`} testimonial={t} />
            ))}
          </AnimatedCanopy>

          {/* Line 3 — left to right */}
          <AnimatedCanopy reverse={false} pauseOnHover>
            {testimonials.map((t) => (
              <TestimonialCard key={`t3-${t.id}`} testimonial={t} />
            ))}
          </AnimatedCanopy>
        </div>
      </div>
    </section>
  )
}
