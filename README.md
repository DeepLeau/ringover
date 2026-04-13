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
- **Phone Dialer** — Interactive numeric keypad with call button and backspace for composing phone numbers
- **Contact List** — Scrollable list of contacts displaying name, job title, and company with click-to-dial functionality

### Navbar Details

- **Logo** — Green square with bold white "R" on the left
- **Navigation Tabs** — Calls (active/highlighted), Chat, Visio centered in the navbar
- **User Avatar** — Circular profile icon on the right

### Dialer Rules

- Accepts exactly 11 digits starting with country code (without leading zero)
- Displays formatted as: `+33 3 82 45 71 09`
- Call button disabled until exactly 11 digits are entered
- Input blocked after 11 digits reached

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
- **A code editor** — [VS Code](https://code.visualstudio.com/) recommended
- **Git installed**

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
| `src/components` | Reusable UI components |
| `src/components/home` | Home page components (Navbar, Dialer, ContactList) |

### Key Files

| File | Description |
|------|-------------|
| `src/components/home/AppNavbar.tsx` | Fixed top navbar with logo, nav tabs, and user avatar |
| `src/components/home/Dialer.tsx` | Phone number input with numeric keypad and call button |
| `src/components/home/HomeClient.tsx` | Client-side wrapper for home page interactivity |

## 🧪 Running Tests

This project uses Jest for unit testing. Unit tests verify that small pieces of code (like functions or components) work correctly.

### Run all tests

```bash
npm test
```

### Run a specific test file

```bash
npm test -- path/to/file.test.ts
```

### Watch mode (re-runs tests when files change)

```bash
npm test -- --watch
```

### Understanding test output

- **PASS** — All tests in that file passed ✓
- **FAIL** — Something broke. Look for the error message below the failure showing what was expected vs what happened

### What the tests cover

No tests exist yet. When you add test files, place them next to their source files using the naming convention `ComponentName.test.ts` or `ComponentName.test.tsx`.

Example test structure:

```typescript
// src/components/home/Dialer.test.tsx
import { render, screen } from '@testing-library/react'
import Dialer from './Dialer'

describe('Dialer', () => {
  it('disables call button when input is empty', () => {
    render(<Dialer />)
    const callButton = screen.getByRole('button', { name: /call/i })
    expect(callButton).toBeDisabled()
  })

  it('enables call button when 11 digits are entered', () => {
    render(<Dialer />)
    // ... test implementation
  })
})
```

## 🚀 Deploy to Vercel

The easiest way to deploy your Next.js app is with Vercel.

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step

1. **Import your repository**
   - Click "Import Project" on Vercel
   - Select your GitHub repo: `YOUR_USERNAME/my-app`

2. **Configure project**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

3. **Add environment variables** (if any)
   - Go to Settings > Environment Variables
   - Add each variable from your `.env.local` file
   - Example: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for the build
   - Your app will be live at: `https://your-project.vercel.app`

> 💡 **Important**: Make sure to add all environment variables in Vercel before deploying, or your app may break in production.

## 📝 License

MIT