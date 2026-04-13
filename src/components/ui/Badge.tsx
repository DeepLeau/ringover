import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent'
  className?: string
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wide font-medium',
        variant === 'accent' &&
          'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20',
        className
      )}
    >
      {children}
    </span>
  )
}
