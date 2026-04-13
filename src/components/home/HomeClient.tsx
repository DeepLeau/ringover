'use client'

import { useState } from 'react'
import { Dialer } from './Dialer'
import { ContactList } from './ContactList'
import { callContacts } from '@/lib/data'
import type { CallContact } from '@/types'

export function HomeClient() {
  const [dialedNumber, setDialedNumber] = useState('')
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null)

  const handleSelectContact = (phone: string, contactId: CallContact['id']) => {
    setDialedNumber(phone)
    setSelectedContactId(contactId)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--bg)] p-6 gap-6">
      {/* Colonne gauche — Dialer */}
      <div className="w-[380px] shrink-0 flex items-center justify-center">
        <Dialer
          dialedNumber={dialedNumber}
          onDialedNumberChange={setDialedNumber}
        />
      </div>

      {/* Séparation visuelle */}
      <div className="w-px bg-[var(--border)] shrink-0" />

      {/* Colonne droite — ContactList */}
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <ContactList
          contacts={callContacts}
          onSelectContact={handleSelectContact}
          selectedContactId={selectedContactId}
        />
      </div>
    </div>
  )
}
