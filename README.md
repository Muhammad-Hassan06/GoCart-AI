# 🛒 GoCart AI — Multi-Vendor E-Commerce Platform (Next.js 15)

> **GoCart AI** is a enterprise-grade Multi-Vendor E-Commerce SaaS platform built with Next.js 15, Clerk Authentication, Neon Serverless PostgreSQL, Prisma ORM, Stripe Payments, Inngest background job processing, and ImageKit media CDN.

---

## 📌 Short Description (300 Chars with Emojis)

> 🛒 **GoCart AI** — Next-gen Multi-Vendor E-Commerce SaaS powered by Next.js 15, Clerk Auth, Neon PostgreSQL & Stripe! Features seller dashboards, AI product descriptions, Inngest background jobs, ImageKit CDN & real-time analytics. 💳🛍️✨

---

## ✨ Key Features

- 🏪 **Multi-Vendor Storefronts**: Independent seller storefronts, product management, and vendor onboarding.
- 🔐 **Clerk Authentication**: Seamless multi-role user authentication (Customers, Vendors, Admins).
- ⚡ **Next.js 15 & Turbopack**: High-performance App Router with server-side rendering (SSR) and edge caching.
- 🐘 **Neon Serverless PostgreSQL**: High-scalability PostgreSQL database powered by Prisma ORM.
- 🔄 **Inngest Background Workflows**: Asynchronous event-driven background job processing for order fulfillment and emails.
- 📸 **ImageKit Media Storage**: High-speed image optimization, transformation, and media storage.
- 💳 **Stripe Checkout & Webhooks**: Integrated payment gateway supporting vendor payouts and credit transactions.
- 📊 **Vendor Analytics Dashboard**: Built-in revenue tracking, order analytics, and interactive charts via Recharts.

---

## 🛠️ Tech Stack

### **Core Stack**
- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: JavaScript / TypeScript (ES Modules)
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons, React Hot Toast
- **State Management**: Redux Toolkit & React Redux

### **Backend & Database**
- **Database**: Neon Serverless PostgreSQL
- **ORM**: Prisma ORM (`@prisma/adapter-neon`)
- **Authentication**: Clerk (`@clerk/nextjs`)
- **Background Jobs**: Inngest (`inngest`)
- **Media CDN**: ImageKit (`imagekit`)
- **Payments**: Stripe Node SDK (`stripe`)
- **AI**: Groq API (`llama-3.2-11b-vision-preview`)

---

## 📁 Repository Structure

```
Project2/
├── app/                    # Next.js 15 App Router Pages & API Routes
│   ├── (store)/            # Customer Storefront Pages (Products, Cart, Checkout)
│   ├── (vendor)/           # Vendor Dashboard & Product Management
│   ├── api/                # API Endpoints (Stripe webhooks, Inngest, Clerk)
│   └── layout.jsx          # Root Layout with Redux & Clerk Providers
│
├── components/             # Reusable UI Components (Navbar, ProductCards, Modals)
├── configs/                # Third-party configurations (ImageKit, Inngest, Stripe, Groq)
├── inngest/                # Inngest Background Functions & Triggers
├── lib/                    # Helper utilities and Prisma client singleton
├── prisma/                 # Prisma Schema & Database Models
├── public/                 # Static Assets
├── .env.example            # Environment Template
├── .gitignore              # Git Ignore File
└── README.md               # Project Documentation
```

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Neon PostgreSQL Database Connection
DATABASE_URL="postgresql://user:password@ep-cool-db-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Inngest Background Job Keys
INNGEST_EVENT_KEY="ink_..."
INNGEST_SIGNING_KEY="signkey-..."

# ImageKit CDN Storage Keys
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="public_..."
IMAGEKIT_PRIVATE_KEY="private_..."
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_account"

# Stripe Payment Gateway Keys
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Groq AI Key (Free Llama-3 Vision Model)
GROQ_API_KEY="gsk_..."
GROQ_BASE_URL="https://api.groq.com/openai/v1"
GROQ_MODEL="llama-3.2-11b-vision-preview"
```

---

## 🚀 Step-by-Step Deployment Guide

Follow this guide to deploy your Next.js 15 application.

---

### Option A: Deploy All-in-One on Vercel (Recommended & 100% Free)

Since Next.js 15 combines frontend pages and serverless API endpoints, deploying on Vercel runs both the frontend and backend natively on Vercel Edge Network.

#### **Step 1: Push Code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - GoCart AI"
git branch -M main
git remote add origin https://github.com/your-username/gocart-ai.git
git push -u origin main
```

#### **Step 2: Deploy on Vercel**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New...** -> **Project**.
2. Select your GitHub repository (`gocart-ai`).
3. Set **Framework Preset**: `Next.js`.
4. Leave Root Directory as `./`.
5. Under **Build & Development Settings**, verify:
   - **Build Command**: `prisma generate && next build`
6. Add all Environment Variables listed in `.env.local` to Vercel's Environment Variables tab.
7. Click **Deploy**.

---

### Option B: Deploy Backend / API Server on Render & Frontend on Vercel

If you prefer running a dedicated Node server process on Render for backend background workers:

#### **Step 1: Deploy Backend Service on Render**
1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Set:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npx prisma generate`
   - **Start Command**: `npm run start`
5. Add your Environment Variables (`DATABASE_URL`, `CLERK_SECRET_KEY`, `STRIPE_SECRET_KEY`, `INNGEST_SIGNING_KEY`).
6. Click **Create Web Service**.

#### **Step 2: Deploy Frontend on Vercel**
1. Import the same repository on Vercel.
2. Add `NEXT_PUBLIC_APP_URL` pointing to your live Vercel URL.
3. Deploy!

---

## 🏷️ Suggested Project Names

1. **GoCart AI** *(Recommended)* 🛒
2. **VendorPulse AI** ⚡
3. **OmniMarket AI** 🛍️
4. **ShopCraft AI** 💎
5. **TradeHub AI** 🚀

---

## 📜 License

Distributed under the MIT License. See `LICENSE.md` for details."# GoCart-AI" 
