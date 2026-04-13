'use client'

import { useState } from 'react'
import { Search, X, SearchX, UserX, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CallContact } from '@/types'

// ----------------------------------------------------------------
// Constants
// ----------------------------------------------------------------
const PAGE_SIZE = 10

// ----------------------------------------------------------------
// Avatar palettes — dérivées de charCodeAt(0) % 4
// Couleurs cohérentes avec le domaine (violet/vert/orange/cyan)
// ----------------------------------------------------------------
const AVATAR_PALETTES = [
  { bg: 'rgba(124, 58, 237, 0.12)',  text: '#7c3aed' }, // index 0 — violet
  { bg: 'rgba(22, 163, 74, 0.12)',   text: '#16a34a' }, // index 1 — vert
  { bg: 'rgba(249, 115, 22, 0.12)',  text: '#f97316' }, // index 2 — orange
  { bg: 'rgba(8, 145, 178, 0.12)',   text: '#0891b2' }, // index 3 — cyan
] as const

// ----------------------------------------------------------------
// Pure helpers
// ----------------------------------------------------------------
function getInitials(fullName: string): string {
  const trimmed = fullName.trim()
  if (!trimmed) return '?'
  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function formatSubtitle(jobTitle: string, company: string): string {
  const parts = [jobTitle.trim(), company.trim()].filter(Boolean)
  return parts.join(' · ')
}

// ----------------------------------------------------------------
// Internal sub-components (non-exported)
// ----------------------------------------------------------------
function AvatarInitial({ fullName }: { fullName: string }) {
  const paletteIndex = fullName.charCodeAt(0) % 4
  const palette = AVATAR_PALETTES[paletteIndex]

  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
      style={{ backgroundColor: palette.bg, color: palette.text }}
    >
      {getInitials(fullName)}
    </div>
  )
}

function ScoreBadge({ score }: { score: number }) {
  // Fallback hex values — var(--red/yellow/green) non définis dans globals.css du projet
  const colorClass =
    score <= 39
      ? 'bg-[#dc2626]/10 text-[#dc2626] border-[#dc2626]/20'
      : score <= 69
      ? 'bg-[#d97706]/10 text-[#d97706] border-[#d97706]/20'
      : 'bg-[#16a34a]/10 text-[#16a34a] border-[#16a34a]/20'

  return (
    <span
      className={cn(
        'px-1.5 py-0.5 rounded text-[11px] font-medium border whitespace-nowrap tabular-nums',
        colorClass
      )}
    >
      {score}%
    </span>
  )
}

// ----------------------------------------------------------------
// Props
// ----------------------------------------------------------------
interface ContactListProps {
  contacts: CallContact[]
  onSelectContact: (phone: string, contactId: CallContact['id']) => void
  selectedContactId: string | null
}

// ----------------------------------------------------------------
// Main component
// ----------------------------------------------------------------
export function ContactList({
  contacts,
  onSelectContact,
  selectedContactId,
}: ContactListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const trimmedQuery = searchQuery.trim()

  const filteredContacts = trimmedQuery
    ? contacts.filter((c) =>
        c.fullName.toLowerCase().includes(trimmedQuery.toLowerCase())
      )
    : contacts

  const totalPages = Math.ceil(filteredContacts.length / PAGE_SIZE)
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const startIndex =
    filteredContacts.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1
  const endIndex = Math.min(currentPage * PAGE_SIZE, filteredContacts.length)

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setCurrentPage(1)
  }

  // ── Empty state : liste source vide ────────────────────────────
  if (contacts.length === 0) {
    return (
      <div className="flex flex-col h-full bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="shrink-0 px-5 py-4 border-b border-[var(--border)]">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--text-1)]">
              Contacts à appeler
            </h2>
            <span className="text-xs text-[var(--text-2)] font-mono tabular-nums">0</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
          <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
            <UserX size={18} className="text-[var(--accent)]" strokeWidth={1.5} />
          </div>
          <p className="text-sm font-medium text-[var(--text-2)]">
            Aucun contact à appeler
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">

      {/* ── Header + barre de recherche ── */}
      <div className="shrink-0 px-4 py-4 border-b border-[var(--border)] bg-[var(--surface-1)]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-[var(--text-1)]">
            Contacts à appeler
          </h2>
          <span className="text-xs text-[var(--text-2)] font-mono tabular-nums">
            {contacts.length}
          </span>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--text-2)] pointer-events-none shrink-0"
            strokeWidth={1.5}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Rechercher un contact..."
            className={cn(
              'w-full h-8 pl-8 rounded-md text-sm',
              searchQuery ? 'pr-8' : 'pr-3',
              'bg-[var(--bg)] border border-[var(--border)]',
              'text-[var(--text-1)] placeholder:text-[var(--text-2)]',
              'focus:outline-none focus:border-[var(--accent)]/60',
              'focus:ring-2 focus:ring-[var(--accent)]/15 transition-colors duration-150'
            )}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-150"
              aria-label="Effacer la recherche"
            >
              <X size={13} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      {/* ── Liste scrollable ── */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.length === 0 ? (
          // Empty state : filtre sans résultat
          <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6 py-8">
            <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
              <SearchX size={18} className="text-[var(--text-2)]" strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--text-1)]">
                Aucun résultat
              </p>
              <p className="text-xs text-[var(--text-2)]">
                Aucun contact pour « {trimmedQuery} »
              </p>
            </div>
            <button
              onClick={handleClearSearch}
              className="h-7 px-3 flex items-center justify-center rounded border border-[var(--border)] bg-[var(--surface-2)] text-xs text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors duration-150"
            >
              Effacer la recherche
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {paginatedContacts.map((contact) => {
              const isActive = contact.id === selectedContactId

              return (
                <button
                  key={contact.id}
                  onClick={() => onSelectContact(contact.phone, contact.id)}
                  className={cn(
                    'group flex items-center gap-3 px-4 py-3.5 text-left',
                    'transition-colors duration-150 border-b border-[var(--border)] last:border-0',
                    isActive
                      ? 'bg-[var(--accent)]/5 border-l-2 border-l-[var(--accent)] pl-[14px]'
                      : 'hover:bg-[var(--accent)]/5'
                  )}
                >
                  <AvatarInitial fullName={contact.fullName} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[var(--text-1)] truncate">
                      {contact.fullName}
                    </p>
                    <p className="text-xs text-[var(--text-2)] truncate mt-0.5">
                      {formatSubtitle(contact.jobTitle, contact.company)}
                    </p>
                  </div>

                  <ScoreBadge score={contact.closingScore} />
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* ── Pagination (affichée uniquement si totalPages > 1) ── */}
      {totalPages > 1 && (
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-t border-[var(--border)] bg-[var(--surface-1)]">
          {/* Info */}
          <p className="text-xs text-[var(--text-2)] whitespace-nowrap shrink-0">
            <span className="text-[var(--text-1)] font-medium tabular-nums">
              {startIndex}–{endIndex}
            </span>{' '}
            sur{' '}
            <span className="text-[var(--text-1)] font-medium tabular-nums">
              {filteredContacts.length}
            </span>
          </p>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              aria-label="Page précédente"
              className="h-7 w-7 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <ChevronLeft size={13} strokeWidth={1.5} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'h-7 min-w-[28px] px-1.5 flex items-center justify-center rounded text-xs transition-colors duration-150',
                  page === currentPage
                    ? 'bg-[var(--accent)] text-white font-medium'
                    : 'text-[var(--text-2)] border border-[var(--border)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)]'
                )}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              aria-label="Page suivante"
              className="h-7 w-7 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-2)] hover:text-[var(--text-1)] hover:bg-[var(--surface-2)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <ChevronRight size={13} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
