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
- **Phone Dialer** — Interactive numeric keypad with call button and backspace for composing phone numbers
- **Contact List** — Scrollable list of contacts displaying name, job title, and company with click-to-dial functionality

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
| `src/app/home` | Home page with dialer and contact list |
| `src/components/ui` | Reusable UI components (Button, Badge, AnimatedCanopy, LustreText) |
| `src/components/layout` | Layout components (Navbar, Footer) |
| `src/components/sections` | Landing page sections (Hero, Features, Pricing, etc.) |
| `src/components/sections/features` | Feature-related components |
| `src/components/sections/pricing` | Pricing section components |
| `src/components/sections/testimonials` | Testimonials section components |
| `src/components/sections/integrations` | Integrations section components |
| `src/components/home` | Home page components (Dialer, ContactList, HomeClient) |
| `src/types` | TypeScript type definitions |
| `src/lib` | Utility functions and data |
| `public` | Static assets |

## 🚀 Deploy to Vercel

The easiest way to deploy this Next.js app is to use Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step:

1. **Import your Git repository** — Click "Import Git Repository" and select your GitHub/GitLab repo
2. **Add environment variables** — In Vercel dashboard, go to Settings > Environment Variables and add any variables from your `.env.local` (if applicable)
3. **Deploy** — Click "Deploy" and wait for the build to complete
4. **Your site is live** — Vercel will provide a URL like `your-app.vercel.app`

> 💡 **Note**: If you add Supabase or other services later, remember to add their environment variables in Vercel as well.

## 📝 License

MIT