export interface NavLink {
  label: string
  href: string
}

export interface Client {
  name: string
  logoUrl?: string
}

export interface PainPoint {
  icon: string
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  benefits: string[]
  accentColor?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  widgetType?: 'integrations' | 'score' | 'activity' | 'message' | null
}

export interface Metric {
  value: number
  suffix: string
  label: string
  description: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatarInitials: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: Array<{ label: string; included: boolean }>
  highlighted: boolean
  ctaLabel: string
}

export interface Integration {
  name: string
  logoUrl?: string
  category: string
}

export interface CallContact {
  id: string
  fullName: string
  jobTitle: string
  company: string
  phone: string
}
