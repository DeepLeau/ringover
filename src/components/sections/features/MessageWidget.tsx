'use client'

import { useState, useEffect } from 'react'

const transcriptText =
  'Bonjour Thomas, j\'ai remarqué que vous avez consulté notre page tarifs hier. Avez-vous des questions sur le plan Business ? Je pourrais vous faire une démo personnalisée si vous le souhaitez. Bien cordialement, Sophie.'

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
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 shadow-sm min-h-[220px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs text-[var(--text-2)]">Transcription IA en cours...</span>
      </div>

      <div className="bg-[var(--surface-2)] rounded-lg p-4 border border-[var(--border)]">
        <p className="text-sm text-[var(--text-2)] leading-relaxed min-h-[80px] font-mono">
          {displayedText}
          {charIndex < transcriptText.length && (
            <span className="inline-block w-0.5 h-4 bg-[var(--accent)] animate-pulse align-middle ml-0.5" />
          )}
          {!showCursor && charIndex >= transcriptText.length && (
            <span className="inline-block w-0.5 h-4 bg-[var(--accent)] align-middle ml-0.5" />
          )}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-[var(--text-2)]">
        <span>Transcrit en 0.3s</span>
        <span className="text-green-600">Précision 96%</span>
      </div>
    </div>
  )
}
