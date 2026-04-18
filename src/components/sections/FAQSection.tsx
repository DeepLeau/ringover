'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Comment Ringover détecte-t-il les signaux prioritaires dans ma boîte email ?",
    answer:
      "Notre IA analyse en temps réel le contenu de vos emails, les modèles de réponse, et le comportement de vos prospects pour identifier automatiquement les conversations les plus stratégiques. Elle vous alerte dès qu'un lead à fort potentiel vous écrit.",
  },
  {
    question: "Puis-je connecter mon CRM existant (Salesforce, HubSpot) ?",
    answer:
      "Oui. Ringover s'intègre nativement à Salesforce, HubSpot, Pipedrive, Sellsy et Pennylane. La synchronisation est bidirectionnelle : vos contacts, deals et conversations sont automatiquement mis à jour des deux côtés.",
  },
  {
    question: "Combien de temps faut-il pour configurer Ringover ?",
    answer:
      "La configuration prend moins de 5 minutes. Importez vos contacts, connectez votre boîte email, et Ringover commence immédiatement à analyser vos signaux. Aucune compétence technique requise.",
  },
  {
    question: "Mes données email sont-elles sécurisées ?",
    answer:
      "Absolument. Ringover est hébergé sur des serveurs en Europe, certifié SOC2 Type II, et chiffré de bout en bout. Vos données ne sont jamais utilisées pour entraîner nos modèles.",
  },
  {
    question: "Y a-t-il un essai gratuit ?",
    answer:
      "Oui, tous nos plans incluent un essai gratuit de 14 jours, sans carte bancaire. Vous avez accès à l'ensemble des fonctionnalités Pro pendant cette période.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(99,102,241,.03) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-8 max-w-[800px]">
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
            FAQ
          </div>

          <h2
            className="text-gradient-h"
            style={{
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontSize: 'clamp(22px, 2.2vw, 32px)',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
            }}
          >
            Questions fréquentes
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[var(--r-lg)] overflow-hidden"
              style={{
                border: '1px solid var(--glass-border)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {/* Question */}
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-[14px] font-medium"
                  style={{ color: 'var(--text-1)' }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    style={{ color: 'var(--accent-hi)' }}
                  />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-5 pb-4"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
                    >
                      <p className="text-[13px] leading-relaxed pt-4" style={{ color: 'var(--muted)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
