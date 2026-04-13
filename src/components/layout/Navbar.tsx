'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { NavLink } from '@/types'

interface NavbarProps {
  navLinks: NavLink[]
}

export function Navbar({ navLinks }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 flex items-center border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[var(--accent)] flex items-center justify-center">
            <span className="text-white text-xs font-bold">R</span>
          </div>
          <span className="text-base font-semibold text-[var(--text-1)] tracking-tight">
            Ringover
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 h-8 flex items-center justify-center text-sm text-[var(--text-2)] hover:text-[var(--text-1)] rounded-md hover:bg-[var(--surface-1)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" size="sm">
            Démarrer gratuitement
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center text-[var(--text-2)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-14 inset-x-0 bg-white border-b border-[var(--border)] md:hidden">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="h-10 px-4 flex items-center text-sm text-[var(--text-2)] hover:text-[var(--text-1)] rounded-md hover:bg-[var(--surface-1)] transition-colors duration-150"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <Button variant="primary" size="md" className="w-full">
                Démarrer gratuitement
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
