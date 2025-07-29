# SaasFlow – Modern SaaS Landing Page & Component System

A polished landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion—featuring a reusable component library designed for scaling SaaS design systems.

---

## 🔥 Features

- **Hero Section**: Animated headline, CTA buttons, glassmorphism visuals  
- **Features Section**: 6+ feature cards with icons and descriptions  
- **Pricing**: 3-tier pricing cards and comparison table (with hover effects)  
- **Testimonials Carousel**: Sliding customer reviews with visuals and quotes  
- **FAQ**: Collapsible Q&A accordion component  
- **Contact Form**: Inline validation, success modal, and responsive layout  
- **Footer**: Navigation links, social icons, and contact info  
- **2025 Design Trends**: Glass blur cards, gradients, modern typography, and micro‑animations  
- **Responsive Design**: Mobile-first experience across all device sizes  
- **Performance Optimized**: Lazy-load images with `next/image` and code-splitting

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router + TypeScript)  
- **Tailwind CSS** for styling  
- **Framer Motion** for scroll-triggered animations  
- **Lucide Icons** for lightweight and modern iconography

---

## 🧱 Component Library

Located in `components/ui/`:

- `Button.tsx`
- `Card.tsx`
- `Modal.tsx`
- `Input.tsx`
- `Accordion.tsx`
- `Carousel.tsx`
- `PricingCard.tsx`
- `FeatureBlock.tsx`

All components are fully typed, theme-aware (light/dark), and styled via Tailwind.

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/NandithaBM/SaasFlow.git
   cd SaasFlow
2. Install dependencies:
   npm install
    or
   yarn install
3. Copy environment file (if needed):
   cp .env.example .env
4. Run the dev server:
   npm run dev
    or
   yarn dev
View at http://localhost:3000

---

📂 Project Structure

.

├── app/                # Next.js App Router pages and layout

├── components/

│   ├── sections/       # Hero, Features, Pricing, FAQ, etc.

│   └── ui/             # Reusable components

├── styles/             # Tailwind configuration and CSS

├── utils/              # Helper utilities (e.g. validation)

└── README.md

---

🤖 AI Tools & Manual Work
ChatGPT: Architecture planning, animations, prompt refinement

Cursor AI: Live code editing and component refactoring

Bolt.new: Quick UI mockups and layout testing

Manual work includes dark/light mode logic, custom floating mascot with eye-tracking, and refined UX motion transitions.

---

🔭 Roadmap / To Do
Add pricing calculator widget

Embed demo video or animation

Build a CMS/blog section

Integrate backend for contact form (EmailJS/Formspree)

---

📄 License
This project is open-source under the MIT License. See the LICENSE file for details.

---

You can edit this file anytime via GitHub or locally using your editor. Let me know if you'd like badges, screenshots, or deployment links added!
::contentReference[oaicite:0]{index=0}
