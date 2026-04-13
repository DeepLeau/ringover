'use client'

interface LustreTextProps {
  text: string
  speed?: number
  mode?: 'light'
  className?: string
}

export function LustreText({
  text,
  speed = 5,
  mode = 'light',
  className = '',
}: LustreTextProps) {
  return (
    <span
      className={`animate-shine lustre-on-white ${className}`}
      style={{
        animationDuration: `${speed}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
      }}
    >
      {text}
    </span>
  )
}
