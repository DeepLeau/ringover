'use client'

import { motion } from 'framer-motion'
import Script from 'next/script'
import { CheckCircle2, ArrowRight, Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { LustreText } from '@/components/ui/LustreText'

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{ background: 'var(--bg)', paddingTop: '72px' }}
    >
      {/* ── Unicorn Studio background ──────────────────────────── */}
      <div className="hero__bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div
          data-us-project="lFqI94GW0JcxJNk1NH4n"
          data-us-scale="1"
          data-us-dpi="1.5"
          data-us-fps="60"
          data-us-lazyload="true"
          data-us-production="true"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>

      {/* ── Overlay ───────────────────────────────────────────── */}
      <div
        className="hero__overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            radial-gradient(ellipse 80% 50% at 30% 40%, rgba(99,102,241,.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(139,92,246,.10) 0%, transparent 50%),
            radial-gradient(ellipse 50% 35% at 50% 30%, rgba(165,180,252,.08) 0%, transparent 55%),
            linear-gradient(to bottom, rgba(9,9,15,.32) 0%, rgba(9,9,15,.18) 35%, rgba(9,9,15,.35) 65%, rgba(9,9,15,.88) 100%),
            radial-gradient(ellipse 100% 80% at 50% 50%, transparent 0%, rgba(9,9,15,.35) 70%, rgba(9,9,15,.85) 100%)
          `,
        }}
      />

      {/* ── Floating orbs ────────────────────────────────────── */}
      <div
        className="orb"
        style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          width: 600,
          height: 400,
          background: 'rgba(99,102,241,.06)',
          top: -200,
          right: -200,
          zIndex: 1,
          animation: 'orb-float 8s ease-in-out infinite',
        }}
      />
      <div
        className="orb"
        style={{
          position: 'absolute',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          width: 400,
          height: 600,
          background: 'rgba(165,180,252,.04)',
          bottom: -200,
          left: -100,
          zIndex: 1,
          animation: 'orb-float 8s ease-in-out infinite -4s',
        }}
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div
        className="relative z-10 text-center max-w-[960px] mx-auto"
        style={{ padding: '0 32px' }}
      >
        {/* Badge */}
        <div
          className="hero__badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '5px 12px 5px 8px',
            borderRadius: 100,
            background: 'var(--accent-dim)',
            border: '1px solid rgba(99,102,241,.3)',
            fontSize: 12,
            fontWeight: 500,
            color: 'var(--accent-hi)',
            marginBottom: 20,
            animation: 'badge-glow 3s ease-in-out infinite',
            letterSpacing: '-0.01em',
          }}
        >
          <div className="glow-dot" />
          <span
            style={{
              background: 'linear-gradient(90deg, var(--accent), var(--accent-hi))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '.08em',
            }}
          >
            Nouveau
          </span>
          <span style={{ marginLeft: 4, color: 'var(--muted)' }}>
            AI Reply · Nouveau →
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(40px, 5.5vw, 72px)',
            lineHeight: 1.06,
            letterSpacing: '-0.04em',
            marginBottom: 18,
            textShadow: '0 4px 32px rgba(0,0,0,.85)',
          }}
        >
          Trouvez l&apos;email clé.{' '}
          <em
            style={{
              fontStyle: 'normal',
              fontWeight: 400,
              color: '#fff',
              textShadow: '0 0 80px rgba(99,102,241,.9), 0 0 32px rgba(165,180,252,.6), 0 4px 40px rgba(0,0,0,.95)',
            }}
          >
            <LustreText text="Votre lead ne répond pas." speed={5} mode="dark" />
          </em>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.6vw, 17px)',
            color: 'rgba(248,247,255,.75)',
            lineHeight: 1.6,
            maxWidth: 480,
            margin: '0 auto 28px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            textShadow: '0 2px 20px rgba(0,0,0,.8)',
          }}
        >
          Ringover identifie les signaux cachés dans vos inbox. Répondez en premier, convertissez plus.
        </p>

        {/* CTAs */}
        <div
          className="hero__actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 28,
          }}
        >
          {/* Primary CTA */}
          <button
            className="btn-hero-primary"
            style={{
              position: 'relative',
              padding: '15px 32px',
              minWidth: 200,
              height: 52,
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 400,
              background: 'rgba(99,102,241,.18)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderRadius: 100,
              color: '#fff',
              border: '1px solid rgba(165,180,252,.45)',
              boxShadow: '0 0 32px rgba(99,102,241,.35), 0 0 80px rgba(99,102,241,.12), inset 0 1px 0 rgba(255,255,255,.18)',
              letterSpacing: '-0.02em',
              transition: 'all .35s cubic-bezier(.16,1,.3,1)',
              overflow: 'hidden',
              isolation: 'isolate',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              animation: 'hero-btn-breathe 4s ease-in-out infinite',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {/* Spinning gradient border */}
            <span
              style={{
                position: 'absolute',
                inset: '-1px',
                borderRadius: 'inherit',
                background:
                  'conic-gradient(from var(--angle), transparent 0%, rgba(165,180,252,.9) 18%, rgba(99,102,241,.6) 35%, transparent 52%, transparent 100%)',
                animation: 'spin-angle 3.5s linear infinite',
                zIndex: -1,
              }}
            />
            {/* Shimmer sweep */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: '-80%',
                width: '50%',
                height: '100%',
                background:
                  'linear-gradient(105deg, transparent 0%, rgba(255,255,255,.22) 50%, transparent 100%)',
                transform: 'skewX(-15deg)',
                animation: 'btn-shimmer 4.5s ease-in-out infinite 0.8s',
                pointerEvents: 'none',
              }}
            />
            Démarrer gratuitement
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>

          {/* Ghost CTA */}
          <button
            style={{
              position: 'relative',
              padding: '15px 32px',
              minWidth: 200,
              height: 52,
              justifyContent: 'center',
              fontSize: 15,
              fontWeight: 400,
              color: 'rgba(248,247,255,.7)',
              letterSpacing: '-0.02em',
              transition: 'all .25s cubic-bezier(.16,1,.3,1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              border: '1px solid rgba(255,255,255,.16)',
              background: 'rgba(255,255,255,.04)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 100,
              overflow: 'hidden',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            <Play size={16} strokeWidth={1.5} />
            Voir la démo
          </button>
        </div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <div
        className="hero__stats"
        style={{
          position: 'relative',
          zIndex: 4,
          display: 'flex',
          gap: 1,
          marginTop: 20,
          borderRadius: 'var(--r-lg)',
          overflow: 'hidden',
          border: '1px solid var(--glass-border)',
        }}
      >
        {[
          { value: '99.9%', label: 'Reply Rate' },
          { value: '< 3 min', label: 'Avg Response' },
          { value: '12K+', label: 'Sales Teams' },
          { value: '4.8★', label: 'G2 Rating' },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="hero__stat"
            style={{
              flex: 1,
              padding: '10px 18px',
              background: 'rgba(255,255,255,.03)',
              backdropFilter: 'blur(32px)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {i > 0 && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '20%',
                  bottom: '20%',
                  width: 1,
                  background: 'var(--glass-border)',
                }}
              />
            )}
            <div
              style={{
                fontFamily: 'var(--font-bricolage), sans-serif',
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, var(--peak), var(--accent-hi))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: 11,
                color: 'var(--dim)',
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                marginTop: 4,
                fontFamily: 'var(--font-mono), monospace',
                whiteSpace: 'nowrap',
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom gradient fade ───────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 380,
          background:
            'linear-gradient(to top, var(--bg) 0%, rgba(9,9,15,.85) 40%, transparent 100%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* ── Unicorn Studio loader ───────────────────────────────── */}
      <Script id="unicorn-studio-loader" strategy="afterInteractive">
        {`
          !function(){
            var u=window.UnicornStudio;
            if(u&&u.init){
              if(document.readyState==="loading"){
                document.addEventListener("DOMContentLoaded",function(){u.init()});
              }else{u.init()}
            }else{
              window.UnicornStudio={isInitialized:!1};
              var i=document.createElement("script");
              i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0/dist/unicornStudio.umd.js";
              i.onload=function(){
                if(document.readyState==="loading"){
                  document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()});
                }else{UnicornStudio.init()}
              };
              (document.head||document.body).appendChild(i)
            }
          }();
        `}
      </Script>
    </section>
  )
}
