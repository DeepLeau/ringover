// ============================================================
// Ringover Landing Page — Données statiques centralisées
// ============================================================

import type {
  NavLink,
  Client,
  PainPoint,
  Product,
  Feature,
  Metric,
  Testimonial,
  PricingPlan,
  Integration,
} from '@/types'

// ----------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------
export const navLinks: NavLink[] = [
  { label: 'Produits', href: '#solutions' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Ressources', href: '#integrations' },
  { label: 'Démarrer gratuitement', href: '#contact' },
]

// ----------------------------------------------------------------
// Clients / Partenaires
// ----------------------------------------------------------------
export const clients: Client[] = [
  { name: 'Sellsy' },
  { name: 'Pennylane' },
  { name: 'Aircall' },
  { name: 'HubSpot' },
  { name: 'Salesforce' },
  { name: 'Zendesk' },
  { name: 'Freshdesk' },
  { name: 'Pipedrive' },
]

// ----------------------------------------------------------------
// Points de douleur
// ----------------------------------------------------------------
export const painPoints: PainPoint[] = [
  {
    icon: 'PhoneOff',
    title: 'Canaux déconnectés',
    description:
      'Vos équipes jonguent entre téléphone, email et Slack sans vision unifiée. Chaque canal génère ses propres données, et vous perdez le fil entre les interactions.',
  },
  {
    icon: 'Search',
    title: 'Aucune visibilité',
    description:
      'Vous n\'avez aucun moyen de mesurer ce qui se dit lors de vos appels commerciaux. Les conversations précieuses restent prisonnières des enregistrements audio.',
  },
  {
    icon: 'Clock',
    title: 'Prospection chronophage',
    description:
      'Vos commerciaux passent plus de temps à rechercher des contacts et à relancer manuellement qu\'à vendre. Le volume de calls reste faible face au potentiel.',
  },
]

// ----------------------------------------------------------------
// Gamme de produits
// ----------------------------------------------------------------
export const products: Product[] = [
  {
    id: 'ringover',
    name: 'Ringover',
    tagline: 'Votre central téléphonique dans le cloud',
    description:
      'Softphone puissant intégré à votre CRM. Appels illimités, numéros internationaux dans 100 pays, file d\'attente intelligente et routing intelligent.',
    icon: 'Phone',
    benefits: [
      'Appels illimités en HD',
      'Numéros locaux 100 pays',
      'Intégration CRM native',
      'Analytics temps réel',
    ],
    accentColor: '#4f46e5',
  },
  {
    id: 'empower',
    name: 'Empower',
    tagline: 'L\'IA qui écoute et analyse vos calls',
    description:
      'Transcription automatique et résumés IA de chaque conversation. Score d\'engagement, détection d\'intentions d\'achat et coaching personnalisé.',
    icon: 'Brain',
    benefits: [
      'Transcription en temps réel',
      'Résumés IA instantanés',
      'Score émotionnel',
      'Alertes intents d\'achat',
    ],
    accentColor: '#7c3aed',
  },
  {
    id: 'cadence',
    name: 'Cadence',
    tagline: 'Automatisez votre prospection à grande échelle',
    description:
      'Séquences d\'outreach multicanal : calls, emails, LinkedIn, SMS. Enchaînez automatiquement selon les réponses et gardant une touche humaine.',
    icon: 'Zap',
    benefits: [
      'Séquences multicanal',
      'Automation complète',
      'Personnalisation à l\'échelle',
      'Reporting avancé',
    ],
    accentColor: '#0891b2',
  },
]

// ----------------------------------------------------------------
// Fonctionnalités
// ----------------------------------------------------------------
export const features: Feature[] = [
  {
    id: 'crm-natif',
    title: 'CRM intégré en natif',
    description:
      'Tous vos contacts, deals et conversations dans une seule interface. Aucune synchronisation capricieuse — tout est synchronisé en temps réel.',
    icon: 'Database',
    widgetType: null,
  },
  {
    id: 'transcription-ia',
    title: 'Transcription & résumé IA',
    description:
      ' Chaque appel est transcrit automatiquement. Un résumé de 5 bullets est généré en moins de 30 secondes avec les points clés et les next steps.',
    icon: 'Mic',
    widgetType: 'message',
  },
  {
    id: 'numeros-locaux',
    title: 'Numéros locaux dans 100 pays',
    description:
      'Proposez à vos prospects un numéro local dans leur pays. Taux de décroché multiplié par 3 vs un numéro étranger.',
    icon: 'Globe',
    widgetType: null,
  },
  {
    id: 'dashboard-temps-reel',
    title: 'Dashboard temps réel',
    description:
      'Supervisez l\'activité de vos équipes : nombre d\'appels, durée moyenne, taux de conversion. Des metrics actionnables sans délai.',
    icon: 'BarChart3',
    widgetType: 'activity',
  },
  {
    id: 'sequences-prospection',
    title: 'Séquences de prospection',
    description:
      'Automatisez vos sequences d\'outreach multicanal. Email, call, LinkedIn, SMS — le tout orchestré selon les réponses received.',
    icon: 'ListOrdered',
    widgetType: 'score',
  },
  {
    id: 'coaching-ia',
    title: 'Coaching IA personnalisé',
    description:
      'L\'IA analyse les appels et suggère des axes d\'amélioration personnalisés pour chaque commercial. Feedback instantané, gains mesurables.',
    icon: 'MessageSquare',
    widgetType: 'integrations',
  },
]

// ----------------------------------------------------------------
// Métriques
// ----------------------------------------------------------------
export const metrics: Metric[] = [
  {
    value: 35,
    suffix: '%',
    label: 'de productivité en plus',
    description: 'Vos équipes gagnent du temps sur les tâches admin et se concentrent sur ce qui compte : vendre.',
  },
  {
    value: 50,
    suffix: '%',
    label: 'de temps de traitement en moins',
    description: 'Transcription automatique et résumés instantanés éliminent la saisie manuelle post-appel.',
  },
  {
    value: 2,
    suffix: 'x',
    label: 'le taux de décroché',
    description: 'Les numéros locaux et le routing intelligent augmentent significativement le taux de réponse.',
  },
]

// ----------------------------------------------------------------
// Témoignages
// ----------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'On a réduit notre temps de traitement post-appel de 70%. L\'équipe consacre ce temps récupéré à des calls supplémentaires.',
    author: 'Thomas Mercier',
    role: 'Head of Sales',
    company: 'Sellsy',
    avatarInitials: 'TM',
  },
  {
    id: 'testimonial-2',
    quote:
      'La transcription automatique a changé notre façon de faire le debrief. Plus besoin de réécouter les calls — le résumé est là en 30 secondes.',
    author: 'Sophie Delamare',
    role: 'Responsable Customer Success',
    company: 'Pennylane',
    avatarInitials: 'SD',
  },
  {
    id: 'testimonial-3',
    quote:
      'Empower nous a permis de former nos nouveaux commerciaux 3x plus vite. Le coaching IA détecte les gaps en temps réel.',
    author: 'Lucas Renard',
    role: 'Directeur Commercial',
    company: 'Aircall',
    avatarInitials: 'LR',
  },
]

// ----------------------------------------------------------------
// Tarifs
// ----------------------------------------------------------------
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '29',
    period: '/agent/mois',
    description: 'Pour les équipes qui commencent à structurer leur prospection téléphonique.',
    features: [
      { label: 'Softphone dans le cloud', included: true },
      { label: '100 pays de numéros', included: true },
      { label: 'Intégration CRM', included: true },
      { label: 'Dashboard basique', included: true },
      { label: 'Transcription IA', included: false },
      { label: 'Séquences d\'outreach', included: false },
      { label: 'Coaching IA', included: false },
      { label: 'Support prioritaire', included: false },
    ],
    highlighted: false,
    ctaLabel: 'Essai gratuit 14j',
  },
  {
    id: 'business',
    name: 'Business',
    price: '79',
    period: '/agent/mois',
    description: 'Pour les équipes commerciales qui veulent maîtriser leurs performances.',
    features: [
      { label: 'Softphone dans le cloud', included: true },
      { label: '100 pays de numéros', included: true },
      { label: 'Intégration CRM avancée', included: true },
      { label: 'Dashboard temps réel', included: true },
      { label: 'Transcription & résumé IA', included: true },
      { label: 'Séquences d\'outreach', included: true },
      { label: 'Coaching IA', included: false },
      { label: 'Support prioritaire', included: false },
    ],
    highlighted: true,
    ctaLabel: 'Commencer maintenant',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '149',
    period: '/agent/mois',
    description: 'Pour les organisations qui font de leur centre d\'appels un avantage compétitif.',
    features: [
      { label: 'Softphone illimité', included: true },
      { label: '100 pays de numéros', included: true },
      { label: 'Intégration CRM & BI', included: true },
      { label: 'Dashboard avancé + API', included: true },
      { label: 'Transcription & résumé IA', included: true },
      { label: 'Séquences d\'outreach illimitées', included: true },
      { label: 'Coaching IA personnalisé', included: true },
      { label: 'Support dédié + SLA', included: true },
    ],
    highlighted: false,
    ctaLabel: 'Contacter les ventes',
  },
]

// ----------------------------------------------------------------
// Intégrations
// ----------------------------------------------------------------
export const integrations: Integration[] = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'Sellsy', category: 'CRM' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Make', category: 'Automation' },
  { name: 'Zendesk', category: 'Support' },
  { name: 'Freshdesk', category: 'Support' },
  { name: 'LinkedIn Sales Navigator', category: 'Prospection' },
  { name: 'Google Workspace', category: 'Productivité' },
]
