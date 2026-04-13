# my-app

A premium landing page for Ringover, a SaaS suite that transforms every customer interaction into a performance driver through AI. Designed for sales directors, customer success managers, and sales/support teams in SMBs and mid-market companies.

## ✨ Features

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

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ — [Download here](https://nodejs.org/)
- A code editor — [VS Code](https://code.visualstudio.com/) recommended
- Git installed

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/my-app.git
cd my-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

This project does not require any environment variables to run locally. All features work out of the box.

If you later add services like Supabase, add a `.env.local` file in the root directory:

```env
# Example (add as needed):
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip**: Open the integrated terminal with `Ctrl+`` (or `Cmd+`` on Mac)

## 📁 Project Structure

| Folder | Description |
|--------|-------------|
| `src/app` | Next.js App Router — pages, layouts, and global styles |
| `src/components/ui` | Reusable UI components (Button, Badge, AnimatedCanopy, LustreText) |
| `src/components/layout` | Layout components (Navbar, Footer) |
| `src/components/sections` | Landing page sections (Hero, Features, Pricing, etc.) |
| `src/components/sections/features` | Dashboard widget components for the mockup |
| `src/lib` | Utility functions and data (utils, data, types) |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `next.config.mjs` | Next.js configuration |

## 🚀 Deploy to Vercel

The easiest way to deploy this Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Step by step:**

1. Click "Add New Project" on Vercel
2. Import your GitHub repository (`my-app`)
3. Vercel auto-detects Next.js — click "Deploy"
4. Your site is live at `https://your-project.vercel.app`

> ⚠️ **Note**: If you add environment variables later (e.g., for Supabase), go to **Vercel > Settings > Environment Variables** and add each variable before redeploying.

## 📝 License

MIT — feel free to use this template for your projects.