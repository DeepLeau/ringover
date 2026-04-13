'use client'

import { useState, useEffect } from 'react'

interface Integration {
  name: string
  status: 'pending' | 'connected'
  delay: number
}

const initialIntegrations: Integration[] = [
  { name: 'Salesforce', status: 'pending', delay: 0 },
  { name: 'HubSpot', status: 'pending', delay: 150 },
  { name: 'Pipedrive', status: 'pending', delay: 300 },
  { name: 'Slack', status: 'pending', delay: 450 },
  { name: 'Notion', status: 'pending', delay: 600 },
]

export function IntegrationsWidget() {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations)

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    integrations.forEach((integration) => {
      const timeout = setTimeout(() => {
        setIntegrations((prev) =>
          prev.map((item) =>
            item.name === integration.name
              ? { ...item, status: 'connected' }
              : item
          )
        )
      }, integration.delay)
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 shadow-sm min-h-[220px] space-y-3">
      <p className="text-sm text-[var(--text-1)] font-medium mb-1">Connexions CRM</p>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${
            integration.status === 'connected'
              ? 'border-green-200 bg-green-50'
              : 'border-[var(--border)] bg-[var(--surface-1)]'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-500 ${
              integration.status === 'connected' ? 'bg-green-500' : 'bg-[var(--text-2)]'
            }`}
          />
          <span className="text-sm text-[var(--text-1)] flex-1">{integration.name}</span>
          {integration.status === 'connected' && (
            <span className="text-xs text-green-600 font-medium">Connecté ✓</span>
          )}
          {integration.status === 'pending' && (
            <span className="text-xs text-[var(--text-2)]">En attente...</span>
          )}
        </div>
      ))}
    </div>
  )
}
