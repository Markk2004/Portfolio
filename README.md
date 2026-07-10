# Portfolio Frontend

A premium, dark-themed, bilingual (Thai/English) portfolio landing page for **Juggit Khunkhaw**, built with React, Next.js (App Router), and Tailwind CSS.

Workspace context: [`E:\portfolio\CONTEXT.md`](E:/portfolio/CONTEXT.md). Approved design: [`docs/superpowers/specs/2026-07-10-dark-portfolio-design.md`](E:/portfolio/front/docs/superpowers/specs/2026-07-10-dark-portfolio-design.md).

## Features
- **Welcome Intro**: A 1.2-second styled branded loading sequence.
- **Bilingual Interface**: Seamless switching between Thai (TH) and English (EN) using local dictionary files.
- **Project Grid**: Showcases 3 curated projects (`hospital-app`, `InvestingNew`, `investerBack`) from local static metadata with technology logos.
- **Responsive Layout**: Fluid UI optimized for mobile, tablet, and desktop viewports.
- **Contact Form**: Bilingual validated form posts JSON to the Laravel API and stores messages in `contact_messages`.
- **Interactive UI**: Grid background, glass cards, typing role, scroll reveal, fine-pointer cursor, sticky navigation, and keyboard-accessible portfolio tabs.
- **3D ID Card**: React Three Fiber/Three.js on desktop fine pointers; CSS/static fallback for touch, mobile, and reduced motion.

## Project Structure
- `app/`: Next.js App Router shell and page composition.
- `components/3d/`: Desktop R3F ID Card and CSS/static fallback.
- `components/layout/`: Header, footer, locale switcher, cursor, and welcome intro.
- `components/sections/`: Hero, About, Contact, Projects, Skills, portfolio tabs, and certificate empty state.
- `components/ui/`: Contact form, cards, badges, reveal wrapper, and typing role UI.
- `hooks/`: Browser capability, reduced-motion, and reveal hooks.
- `lib/content/`: Portfolio data, role phrases, and technology icon mapping.
- `lib/i18n/`: Thai and English dictionaries (`th.js`, `en.js`).
- `lib/forms/`: Client-side contact validation.
- `public/`: Canonical profile/project images and placeholder graphics.

Client interactions remain isolated from portfolio/contact data. Visual state must not own API or content state.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Run Unit/Component Tests
```bash
npm test
```

### 4. Compile Production Bundle
```bash
npm run build
```

The frontend keeps essential profile text and CTAs in normal DOM. With `prefers-reduced-motion` enabled, typing, reveal, cursor, and 3D motion are reduced or disabled without hiding content.
