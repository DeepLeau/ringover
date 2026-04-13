'use client'

import { useState } from 'react'
import { Delete, Phone, PhoneOff } from 'lucide-react'

const KEYPAD_KEYS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
]

const MAX_NUMBER_LENGTH = 15

interface DialerProps {
  dialedNumber: string
  onDialedNumberChange: (number: string) => void
}

export function Dialer({ dialedNumber, onDialedNumberChange }: DialerProps) {
  const [isCalling, setIsCalling] = useState(false)

  const appendDigit = (digit: string) => {
    if (dialedNumber.length < MAX_NUMBER_LENGTH && !isCalling) {
      onDialedNumberChange(dialedNumber + digit)
    }
  }

  const deleteLast = () => {
    if (!isCalling && dialedNumber.length > 0) {
      onDialedNumberChange(dialedNumber.slice(0, -1))
    }
  }

  const startCall = () => {
    if (dialedNumber.length > 0) {
      setIsCalling(true)
    }
  }

  const endCall = () => {
    setIsCalling(false)
  }

  return (
    <div className="w-full max-w-[340px] bg-[var(--surface-1)] border border-[var(--border)] rounded-xl p-6 shadow-sm">
      {/* Écran du numéro */}
      <div className="flex items-center gap-3 mb-6 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
        <span
          className={`flex-1 text-center font-mono text-2xl tracking-wider min-h-[36px] flex items-center justify-center ${
            dialedNumber.length > 0
              ? 'text-[var(--text-1)]'
              : 'text-[var(--text-3)] text-lg'
          }`}
        >
          {dialedNumber.length > 0 ? dialedNumber : 'Composer un numéro'}
        </span>
        <button
          onClick={deleteLast}
          disabled={dialedNumber.length === 0 || isCalling}
          className="w-9 h-9 flex items-center justify-center rounded-md text-[var(--text-3)] hover:bg-[var(--surface-2)] hover:text-[var(--text-2)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Supprimer"
        >
          <Delete size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Clavier */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {KEYPAD_KEYS.flat().map((key) => (
          <button
            key={key}
            onClick={() => appendDigit(key)}
            disabled={isCalling}
            className="h-12 w-full flex items-center justify-center rounded-lg text-base font-medium text-[var(--text-1)] bg-[var(--bg)] border border-[var(--border)] hover:bg-[var(--surface-2)] hover:border-[var(--border-md)] active:bg-[var(--surface-1)] transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Bouton d'appel */}
      <div className="flex justify-center">
        {isCalling ? (
          <button
            onClick={endCall}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white transition-colors duration-150 shadow-md"
            aria-label="Raccrocher"
          >
            <PhoneOff size={24} strokeWidth={1.5} />
          </button>
        ) : (
          <button
            onClick={startCall}
            disabled={dialedNumber.length === 0}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white transition-colors duration-150 shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Appeler"
          >
            <Phone size={24} strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  )
}
