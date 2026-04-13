'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageSquare, Mail, Calendar } from 'lucide-react'

interface Activity {
  id: number
  icon: 'call' | 'sms' | 'email' | 'meeting'
  text: string
  time: string
}

const initialActivities: Omit<Activity, 'id'>[] = [
  { icon: 'call', text: 'Appel entrant de Marie D.', time: 'il y a 2 min' },
  { icon: 'sms', text: 'SMS envoyé à Thomas M.', time: 'il y a 5 min' },
  { icon: 'email', text: 'Email ouvert par Sophie L.', time: 'il y a 8 min' },
  { icon: 'meeting', text: 'Réunion planifiée avec Lucas', time: 'il y a 12 min' },
  { icon: 'call', text: 'Appel sortant vers Antoine B.', time: 'il y a 15 min' },
]

const iconMap = {
  call: Phone,
  sms: MessageSquare,
  email: Mail,
  meeting: Calendar,
}

export function ActivityWidget() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= initialActivities.length) {
          return 0
        }
        return prev + 1
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-1)] p-5 shadow-sm min-h-[220px] space-y-3">
      <p className="text-sm text-[var(--text-1)] font-medium mb-1">Activité en temps réel</p>
      {initialActivities.slice(0, visibleCount).map((activity, index) => {
        const IconComponent = iconMap[activity.icon]
        return (
          <div
            key={index}
            className="flex items-center gap-3 text-sm animate-in fade-in slide-in-from-bottom-2"
          >
            <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center flex-shrink-0">
              <IconComponent size={12} strokeWidth={1.5} />
            </div>
            <span className="text-[var(--text-1)] flex-1 truncate">{activity.text}</span>
            <span className="text-[10px] text-[var(--text-2)] flex-shrink-0">{activity.time}</span>
          </div>
        )
      })}
    </div>
  )
}
