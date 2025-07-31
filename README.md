This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Tier-Based Event Showcase

A Next.js 15 app for showcasing events based on user subscription tier.  
Users can sign up/sign in with Clerk, view events according to their tier (Free/Silver/Gold/Platinum), and upgrade their tier to unlock more events.

---

## Features
- Authentication with Clerk (Sign-in & Sign-up)
- Tier-based event filtering (Free → Platinum)
- Supabase (PostgreSQL) for event storage
- Upgrade tier functionality (updates Clerk metadata)
- Responsive UI with TailwindCSS
- Full-screen loader during upgrades

---

## Demo Users

Use these credentials to test different tiers:


- **Silver User**  
  Email: silveruser@test.com  
  Password: silver@1234#  

- **Gold User**  
  Email: golduser@test.com 
  Password: gold@1234#  

- **Platinum User**  
  Email: platinumuser@test.com  
  Password: platinum@1234#  

---

## Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/tier-event-app.git
cd tier-event-app
