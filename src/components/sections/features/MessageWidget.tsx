'use client'

import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

const transcriptText =
  "Bonjour Thomas, j'ai remarqué que vous avez consulté notre page tarifs. Avez-vous des questions sur le plan Business ? Je pourrais vous faire une démo personnalisée si vous le souhaitez. Bien cordialement, Sophie."

export function MessageWidget() {
  const [displayedText, setDisplayedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (charIndex < transcriptText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(transcriptText.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, 35)
      return () => clearTimeout(timeout)
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }
  }, [charIndex])

  return (
    <div
      className="rounded-[var(--r-lg)] border border-[var(--border)] bg-[var(--bg-2)] p-5 min-h-[220px]"
      style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.03) inset' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: 'var(--green)' }}
        />
        <span className="text-[11px] font-medium text-[var(--text-2)]">
          Réponse IA en cours…
        </span>
        <Sparkles
          size={12}
          strokeWidth={1.5}
          className="ml-auto"
          style={{ color: 'var(--accent-hi)' }}
        />
      </div>

      {/* Message bubble */}
      <div
        className="rounded-lg p-4"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid var(--border)',
        }}
      >
        <p
          className="text-[13px] leading-relaxed min-h-[80px]"
          style={{
            fontFamily: 'var(--font-mono), monospace',
            color: 'var(--text-2)',
          }}
        >
          {displayedText}
          {charIndex < transcriptText.length ? (
            <span
              className="inline-block w-0.5 h-4 animate-pulse align-middle ml-0.5"
              style={{ background: 'var(--accent-hi)' }}
            />
          ) : !showCursor ? (
            <span
              className="inline-block w-0.5 h-4 align-middle ml-0.5"
              style={{ background: 'var(--accent-hi)' }}
            />
          ) : null}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between text-[11px]">
        <span style={{ color: 'var(--dim)' }}>Généré en 0.3s</span>
        <span style={{ color: 'var(--green)' }}>Pertinence 96%</span>
      </div>
    </div>
  )
}
