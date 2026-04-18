import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'new' | 'warn' | 'info'
  className?: string
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest font-[var(--font-mono)]',
        variant === 'accent' &&
          'bg-[var(--accent-dim)] text-[var(--accent-hi)] border border-[rgba(99,102,241,0.3)]',
        variant === 'new' &&
          'bg-[var(--accent-dim)] text-[var(--accent-hi)] border border-[rgba(99,102,241,0.3)]',
        variant === 'warn' &&
          'bg-[rgba(254,188,46,0.08)] text-[rgba(254,188,46,0.8)] border border-[rgba(254,188,46,0.2)]',
        variant === 'info' &&
          'bg-[var(--accent-dim)] text-[var(--accent-hi)] border border-[rgba(99,102,241,0.2)]',
        className
      )}
    >
      {children}
    </span>
  )
}
