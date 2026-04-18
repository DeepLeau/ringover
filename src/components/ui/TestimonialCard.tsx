import { Star } from 'lucide-react'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={`flex-shrink-0 w-[340px] rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(145deg,rgba(99,102,241,0.05),rgba(17,17,17,0.6),rgba(165,180,252,0.03)]] p-6 flex flex-col gap-4 backdrop-blur-[12px] transition-colors duration-300 hover:border-[rgba(99,102,241,0.3)] ${className ?? ''}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-[rgba(254,188,46,0.8)] text-[rgba(254,188,46,0.8)]"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--text-1)] leading-[1.7] text-[15px] flex-1">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <img
          className="w-[38px] h-[38px] rounded-full border border-[rgba(99,102,241,0.2)] object-cover shrink-0"
          src={`https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=96&h=96&fit=crop&crop=faces&auto=format`}
          alt={testimonial.author}
        />
        <div>
          <p className="text-[14px] font-semibold text-[var(--text-1)]">
            {testimonial.author}
          </p>
          <p className="text-[12px] text-[var(--text-3)] font-[var(--font-mono)]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}
