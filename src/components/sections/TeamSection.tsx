'use client'

import { motion } from 'framer-motion'
import { Link2, MessageCircle } from 'lucide-react'

const team = [
  {
    name: 'Martin Klein',
    role: 'CEO & Co-founder',
    bio: '12 ans dans la commutation cloud. Ex-Aircall, ex-Salesforce.',
    initials: 'MK',
    color: 'var(--accent)',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Product',
    bio: 'Design systems et IA conversationnelle. Ex-Linear, ex-Notion.',
    initials: 'SC',
    color: 'var(--accent-hi)',
  },
  {
    name: 'David Morel',
    role: 'CTO & Co-founder',
    bio: 'Architecte distribuée. Expert OpenTelemetry et infrastructure.',
    initials: 'DM',
    color: 'var(--accent)',
  },
]

export function TeamSection() {
  return (
    <section
      className="py-20 relative"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99,102,241,.03) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-4"
            style={{
              background: 'var(--accent-dim)',
              border: '1px solid rgba(99,102,241,.3)',
              color: 'var(--accent-hi)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent)' }}
            />
            L'équipe
          </div>

          <h2
            className="text-gradient-h"
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 'clamp(22px, 2.2vw, 32px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              marginBottom: '10px',
            }}
          >
            Construite par des experts<br />
            de la communication
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
            Une équipe passionnée par l'efficacité des équipes commerciales et la qualité des conversations.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid gap-5 max-w-[900px] mx-auto" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -4, borderColor: 'rgba(99,102,241,.3)' }}
              className="rounded-[var(--r-xl)] p-6 flex flex-col gap-4 transition-all duration-200 cursor-default"
              style={{
                background: 'linear-gradient(145deg, rgba(99,102,241,.06) 0%, rgba(17,17,17,.6) 40%, rgba(165,180,252,.04) 100%)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full border flex items-center justify-center text-[16px] font-bold"
                style={{
                  background: 'var(--accent-dim)',
                  borderColor: 'rgba(99,102,241,.2)',
                  color: 'var(--accent-hi)',
                  fontFamily: 'var(--font-bricolage), sans-serif',
                }}
              >
                {member.initials}
              </div>

              {/* Info */}
              <div>
                <p className="text-[15px] font-semibold mb-0.5" style={{ color: 'var(--text-1)' }}>
                  {member.name}
                </p>
                <p className="text-[12px] font-medium mb-3" style={{ color: 'var(--accent-hi)' }}>
                  {member.role}
                </p>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {member.bio}
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-2 mt-auto pt-2">
                <a
                  href="#"
                  aria-label={`${member.name} sur LinkedIn`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--dim)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'
                    e.currentTarget.style.color = 'var(--accent-hi)'
                    e.currentTarget.style.background = 'var(--accent-dim)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)'
                    e.currentTarget.style.color = 'var(--dim)'
                    e.currentTarget.style.background = 'var(--glass-bg)'
                  }}
                >
                  <Link2 size={14} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label={`${member.name} sur Twitter`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150"
                  style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--dim)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'
                    e.currentTarget.style.color = 'var(--accent-hi)'
                    e.currentTarget.style.background = 'var(--accent-dim)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)'
                    e.currentTarget.style.color = 'var(--dim)'
                    e.currentTarget.style.background = 'var(--glass-bg)'
                  }}
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
