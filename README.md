# my-app

A premium landing page for Ringover, a SaaS suite that transforms every customer interaction into a performance driver through AI. Designed for sales directors, customer success managers, and sales/support teams in SMBs and mid-market companies.

## ✨ Features

- **Fixed Navbar** — Sticky navigation bar at the top with Ringover logo, Calls/Chat/Visio tabs, and user avatar
- **Responsive Navigation** — Sticky navbar with product links, pricing, resources, and CTA
- **Hero Section** — Bold headline with dual CTAs and product mockup visualization
- **Client Logos** — Trust band showcasing "X000+ commercial teams" with grayscale client logos
- **Problem Section** — Three-column pain points highlighting disconnected channels, no visibility, and time-consuming prospecting
- **Solution Section** — Three product cards: Ringover (communication), Empower (conversational AI), and Cadence (automated prospecting)
- **Features Grid** — 6 key features in a 3x2 layout with icons
- **Metrics Section** — Blue background with 3 key stats: +35% productivity, -50% handling time, x2 answer rate
- **Testimonials** — 3 customer quotes with name, role, company, and photo placeholder
- **Pricing** — 3-column pricing table (Starter/Business/Enterprise) with popular badge
- **Integrations** — Logo grid: Salesforce, HubSpot, Pipedrive, Slack, Teams, Zapier
- **Final CTA** — Gradient blue-to-violet section with "Try 14 days free" and no credit card mention
- **Footer** — Logo, product links, legal, social media, copyright
- **FAQ Section** — Expandable accordion with common questions
- **Team Section** — Showcase of team members or company leadership
- **Animated Components** — Smooth animations powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Testing**: Jest

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** — [Download here](https://nodejs.org/)
- **A code editor** — We recommend [VS Code](https://code.visualstudio.com/) with the Tailwind CSS IntelliSense extension
- **Git** — [Download here](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/my-app.git
cd my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip**: Open the integrated terminal with `Ctrl+`` (or ``Cmd+`` on Mac) and type the command above.

## 🧪 Running Tests

Unit tests verify that specific parts of the code work correctly. When you see **PASS**, everything is working. When you see **FAIL**, something needs to be fixed.

### Run all tests

```bash
npm test
```

Or using Jest directly:

```bash
npx jest
```

### Run a specific test file

```bash
npx jest __tests__/formatPhoneNumber.test.ts
npx jest __tests__/lib/contactUtils.test.ts
```

### Watch mode (re-runs tests automatically when files change)

```bash
npx jest --watch
```

### Understanding test output

- **PASS** — All assertions passed, the code works as expected
- **FAIL** — Something broke, check the error message below for what went wrong

### What the tests cover

- **`__tests__/formatPhoneNumber.test.ts`** — Tests for phone number formatting utilities (input validation, formatting patterns, edge cases)
- **`__tests__/lib/contactUtils.test.ts`** — Tests for contact-related utility functions

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/                      # Next.js App Router (pages & layout)
│   │   ├── globals.css           # Global styles & Tailwind imports
│   │   ├── layout.tsx            # Root layout with navbar structure
│   │   └── page.tsx              # Main landing page
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── AnimatedCanopy.tsx    # Animated decorative component
│   │   │   ├── Badge.tsx             # Badge/label component
│   │   │   ├── FeatureCard.tsx       # Feature card with icon
│   │   │   ├── LustreText.tsx        # Premium text styling
│   │   │   ├── PricingCard.tsx       # Pricing plan card
│   │   │   └── TestimonialCard.tsx  # Customer testimonial card
│   │   └── sections/             # Page sections
│   │       ├── CtaFinalSection.tsx   # Final call-to-action
│   │       ├── ComparatifSection.tsx # Comparison section
│   │       ├── FAQSection.tsx        # FAQ accordion
│   │       ├── HeroSection.tsx       # Hero banner
│   │       ├── PricingSection.tsx    # Pricing plans
│   │       ├── TeamSection.tsx       # Team showcase
│   │       ├── TestimonialsSection.tsx # Customer testimonials
│   │       └── features/             # Feature-specific widgets
│   │           ├── MessageWidget.tsx    # Messaging feature
│   │           └── ScoreWidget.tsx       # Scoring feature
│   └── lib/                     # Utility functions & helpers
├── __tests__/                   # Jest test files
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build production-ready bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run all Jest tests |
| `npx jest --watch` | Run tests in watch mode |

## 🚀 Deploy to Vercel

The easiest way to deploy this Next.js app is with Vercel.

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step

1. **Import your repository** — Click "Import Project" on Vercel, select your GitHub repo
2. **Configure project** — Vercel auto-detects Next.js settings (no special configuration needed)
3. **Deploy** — Click "Deploy" — your site will be live at `https://your-project.vercel.app`

> ⚠️ **Note**: This project doesn't require environment variables, so you can deploy directly without any configuration.

## 📝 License

MIT