'use client'

import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function AppNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 flex items-center border-b border-[var(--border)] bg-white">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Section gauche — Logo Rignover */}
        <div className="flex items-center gap-2.5">
          {/* Carré vert avec "R" */}
          <div className="w-8 h-8 rounded-md bg-[#16a34a] flex items-center justify-center shrink-0">
            <span className="text-white text-sm font-bold leading-none">R</span>
          </div>
          {/* Label texte */}
          <span className="text-sm font-semibold text-[var(--text-1)] tracking-tight">
            Rignover
          </span>
        </div>

        {/* Section centre — Onglets */}
        <nav className="flex items-center gap-0.5">
          <button
            onClick={() => {}}
            className={cn(
              'h-9 px-4 flex items-center justify-center text-sm border-b-2 transition-colors duration-150',
              // Onglet actif : Calls
              'border-[#16a34a] text-[var(--text-1)] font-medium'
            )}
          >
            Calls
          </button>
          <button
            onClick={() => {}}
            className={cn(
              'h-9 px-4 flex items-center justify-center text-sm border-b-2 transition-colors duration-150',
              // Onglets inactifs
              'border-transparent text-[var(--text-3)] hover:text-[var(--text-2)]'
            )}
          >
            Chat
          </button>
          <button
            onClick={() => {}}
            className={cn(
              'h-9 px-4 flex items-center justify-center text-sm border-b-2 transition-colors duration-150',
              // Onglets inactifs
              'border-transparent text-[var(--text-3)] hover:text-[var(--text-2)]'
            )}
          >
            Visio
          </button>
        </nav>

        {/* Section droite — Avatar utilisateur */}
        <div className="w-8 h-8 rounded-full bg-[var(--surface-2)] flex items-center justify-center shrink-0">
          <User size={15} strokeWidth={1.5} className="text-[var(--text-2)]" />
        </div>
      </div>
    </header>
  )
}
