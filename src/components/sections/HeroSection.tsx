'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { LustreText } from '@/components/ui/LustreText'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[var(--bg)] overflow-hidden pt-14">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <Badge>Nouveau</Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-1)] tracking-tight leading-tight">
              Maîtrisez chaque conversation.{' '}
              <LustreText text="Multipliez vos" speed={4} mode="light" />{' '}
              <LustreText text="performances." speed={5} mode="light" />
            </h1>

            <p className="text-lg text-[var(--text-2)] max-w-lg leading-relaxed">
              Ringover centralise vos communications, analyse vos conversations avec l&apos;IA et automatise vos processus commerciaux.
              Plus de 3000 équipes font confiance à Ringover pour accélérer leurs ventes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button variant="primary" size="lg" href="https://app.ringover.com/signup">
                Essayer gratuitement
              </Button>
              <Button variant="outline" size="lg" href="#demo">
                Voir une démo
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--text-2)]">
              <CheckCircle2 size={16} className="text-[var(--accent)]" strokeWidth={1.5} />
              <span>+3000 équipes nous font confiance</span>
            </div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="bg-[var(--surface-1)] border border-[var(--border)] rounded-2xl shadow-2xl p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-[var(--text-2)] font-medium">Dashboard</span>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Appels', value: '247', change: '+12%' },
                  { label: 'Conversion', value: '34%', change: '+5%' },
                  { label: 'Score IA', value: '87', change: '+8' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-[var(--border)] rounded-lg p-3">
                    <p className="text-xs text-[var(--text-2)]">{stat.label}</p>
                    <p className="text-lg font-semibold text-[var(--text-1)]">{stat.value}</p>
                    <p className="text-[10px] text-green-600">{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-white border border-[var(--border)] rounded-lg p-4">
                <p className="text-xs text-[var(--text-2)] mb-3">Performance hebdomadaire</p>
                <div className="flex items-end gap-1 h-16">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[var(--accent)]/20 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Calls */}
              <div className="bg-white border border-[var(--border)] rounded-lg p-4 space-y-2">
                <p className="text-xs text-[var(--text-2)] mb-2">Appels récents</p>
                {[
                  { name: 'Marie D.', duration: '12:34', status: 'completed' },
                  { name: 'Thomas M.', duration: '08:21', status: 'completed' },
                  { name: 'Sophie L.', duration: '05:47', status: 'missed' },
                ].map((call, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-[10px] font-medium">
                        {call.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-[var(--text-1)]">{call.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--text-2)]">{call.duration}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${call.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {call.status === 'completed' ? 'OK' : 'Raté'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-4 top-8 bg-white border border-[var(--border)] rounded-xl p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--text-1)]">Deal gagné !</p>
                  <p className="text-[10px] text-[var(--text-2)]">12 500 € — TechStart</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
