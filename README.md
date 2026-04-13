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
- **Contact List** — Scrollable list of contacts with search, pagination, and enriched cards featuring avatars, closing scores, and visual hierarchy
- **Closing Score Badge** — Color-coded score (0-100) displayed on each contact card with progress bar (red/orange/green)
- **Contact Search** — Filter contacts by name with real-time search functionality
- **Contact Pagination** — Navigate through contacts with 10 items per page
- **Responsive Layout** — Centered dialer and contact sections with proper vertical spacing from navbar

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

This project does not require any environment variables to run locally. All configuration is handled within the codebase.

### 4. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

> 💡 **VS Code tip**: Open the integrated terminal with `Ctrl+`` (or `Cmd+`` on Mac)

## 🧪 Running Tests

Unit tests automatically verify that key functions work correctly without errors.

### Run all tests

```bash
npx jest
```

### Run a specific test file

```bash
npx jest __tests__/formatPhoneNumber.test.ts
npx jest __tests__/lib/contactUtils.test.ts
```

### Watch mode (re-runs on file change)

```bash
npx jest --watch
```

### Reading test output

- **PASS** — All tests passed, the code works correctly
- **FAIL** — Something broke, check the error message below for details on which test failed and why

### What the tests cover

| Test File | What It Tests |
|-----------|---------------|
| `__tests__/formatPhoneNumber.test.ts` | Phone number formatting logic (spaces, country codes) |
| `__tests__/lib/contactUtils.test.ts` | Contact utility functions (search, pagination, scoring) |

## 📁 Project Structure

| Folder / File | Description |
|---------------|-------------|
| `src/app` | Next.js App Router pages and layouts |
| `src/components` | React components including home page components |
| `src/components/home` | Home page specific components like `HomeClient.tsx` |
| `src/lib` | Utility functions and helpers |
| `__tests__` | Jest unit tests |
| `public` | Static assets (images, fonts) |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `jest.config.ts` | Jest testing configuration |
| `next.config.ts` | Next.js configuration |

## 🚀 Deploy to Vercel

The easiest way to deploy this Next.js app is with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Step by step

1. **Import your repository** — Click "Import Project" and select your GitHub repo
2. **Configure project** — Vercel auto-detects Next.js, no build command changes needed
3. **Add environment variables** — This project requires no environment variables
4. **Deploy** — Click "Deploy" and wait ~1 minute

Your app will be live at `https://your-project.vercel.app`.

## 📝 License

MIT