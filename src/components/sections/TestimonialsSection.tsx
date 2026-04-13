'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { AnimatedCanopy } from '@/components/ui/AnimatedCanopy'
import type { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[380px] p-6 rounded-2xl border border-[var(--border)] bg-white flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-amber-400 text-amber-400"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--text-1)] leading-relaxed text-sm flex-1">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">
          {testimonial.avatarInitials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--text-1)]">{testimonial.author}</p>
          <p className="text-xs text-[var(--text-2)]">
            {testimonial.role} — {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[var(--surface-2)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge>Témoignages</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-1)] tracking-tight mt-4 mb-4">
            Ce que nos clients disent de nous
          </h2>
        </div>

        {/* Triple Animated Canopy */}
        <div className="relative flex flex-col gap-4">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface-2)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface-2)] to-transparent z-10" />

          {/* Line 1 */}
          <AnimatedCanopy reverse={false} pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </AnimatedCanopy>

          {/* Line 2 */}
          <AnimatedCanopy reverse={true} pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.id}-2`} testimonial={testimonial} />
            ))}
          </AnimatedCanopy>

          {/* Line 3 */}
          <AnimatedCanopy reverse={false} pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`${testimonial.id}-3`} testimonial={testimonial} />
            ))}
          </AnimatedCanopy>
        </div>
      </div>
    </section>
  )
}
