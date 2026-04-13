'use client'

import { Phone, UserX } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CallContact } from '@/types'

interface ContactListProps {
  contacts: CallContact[]
  onSelectContact: (phone: string, contactId: CallContact['id']) => void
  selectedContactId: string | null
}

function getContactInitial(fullName: string): string {
  if (!fullName || fullName.trim().length === 0) return '?'
  return fullName.trim()[0].toUpperCase()
}

function formatSubtitle(jobTitle: string, company: string): string {
  const parts = [jobTitle, company].filter(Boolean)
  return parts.join(' · ')
}

export function ContactList({
  contacts,
  onSelectContact,
  selectedContactId,
}: ContactListProps) {
  return (
    <div className="flex flex-col h-full bg-[var(--surface-1)] border border-[var(--border)] rounded-xl overflow-hidden">
      {/* Header fixe */}
      <div className="shrink-0 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface-1)]">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[var(--text-1)]">Contacts à appeler</h2>
          <span className="text-xs text-[var(--text-3)] font-mono tabular-nums">
            {contacts.length}
          </span>
        </div>
      </div>

      {/* Liste scrollable */}
      <div className="flex-1 overflow-y-auto">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center">
              <UserX size={18} className="text-[var(--accent)]" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-medium text-[var(--text-2)]">Aucun contact à appeler</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {contacts.map((contact) => {
              const isActive = contact.id === selectedContactId

              return (
                <button
                  key={contact.id}
                  onClick={() => onSelectContact(contact.phone, contact.id)}
                  className={cn(
                    'group flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 border-b border-[var(--border)] last:border-0',
                    isActive
                      ? 'bg-[var(--accent)]/5 border-l-2 border-l-[var(--accent)] pl-[14px]'
                      : 'hover:bg-[var(--accent)]/5'
                  )}
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-[var(--accent)]">
                      {getContactInitial(contact.fullName)}
                    </span>
                  </div>

                  {/* Contenu texte */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-[var(--text-1)] truncate">
                      {contact.fullName}
                    </p>
                    <p className="text-xs text-[var(--text-2)] truncate">
                      {formatSubtitle(contact.jobTitle, contact.company)}
                    </p>
                  </div>

                  {/* Icône appel rapide */}
                  <Phone
                    size={13}
                    strokeWidth={1.5}
                    className="text-[var(--text-3)] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
