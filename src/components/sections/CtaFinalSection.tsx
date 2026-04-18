'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaFinalSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, rgba(20,15,40,.25) 40%, rgba(20,15,40,.25) 60%, var(--bg) 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 60%, rgba(99,102,241,.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              borderRadius: '50%',
              background:
                Math.random() > 0.6
                  ? 'rgba(165,180,252,.3)'
                  : 'rgba(99,102,241,.4)',
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-8 rounded-[var(--r-xl)] overflow-hidden"
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background:
            'linear-gradient(145deg, rgba(99,102,241,.08) 0%, rgba(17,17,17,.6) 40%, rgba(165,180,252,.06) 100%)',
          border: '1px solid rgba(99,102,241,.2)',
          backdropFilter: 'blur(40px)',
          padding: '56px',
        }}
      >
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-[20%] right-[20%] h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(99,102,241,.7), rgba(165,180,252,.5), transparent)',
          }}
        />

        {/* Decorative rings */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            top: -100,
            right: -100,
            border: '1px solid rgba(99,102,241,.15)',
            animation: 'ring-pulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 200,
            height: 200,
            bottom: -60,
            left: -60,
            border: '1px solid rgba(99,102,241,.15)',
            animation: 'ring-pulse 4s ease-in-out infinite -2s',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 150,
            height: 150,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid rgba(99,102,241,.15)',
            animation: 'ring-pulse-center 4s ease-in-out infinite -1s',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center gap-5">
          <h2
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 'clamp(22px, 2.8vw, 36px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              color: 'var(--text-1)',
            }}
          >
            Prêt à transformer vos<br />
            <span className="text-gradient-h">conversations en résultats ?</span>
          </h2>

          <p
            className="text-[15px] leading-relaxed max-w-[400px]"
            style={{ color: 'var(--muted)' }}
          >
            Rejoignez 3 000+ équipes commerciales. Configuration en moins de 5 minutes.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 flex-wrap justify-center mt-2">
            {/* Primary CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 py-3.5 px-8 rounded-full text-[14px] font-medium transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #4338CA)',
                color: '#fff',
                boxShadow: '0 0 24px rgba(99,102,241,.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 36px rgba(99,102,241,.55)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(99,102,241,.35)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Démarrer gratuitement
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full text-[14px] font-medium transition-all duration-200"
              style={{
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                color: 'var(--text-2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,.4)'
                e.currentTarget.style.background = 'var(--accent-dim)'
                e.currentTarget.style.color = 'var(--text-1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.background = 'var(--glass-bg)'
                e.currentTarget.style.color = 'var(--text-2)'
              }}
            >
              Voir la démo
            </a>
          </div>

          {/* Note */}
          <p
            className="text-[12px]"
            style={{
              color: 'var(--dim)',
              fontFamily: 'var(--font-mono), monospace',
              marginTop: '4px',
            }}
          >
            Essai 14j inclus · Sans carte bancaire · Setup 5 min
          </p>
        </div>
      </motion.div>
    </section>
  )
}
