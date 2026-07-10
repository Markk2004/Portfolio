# Portfolio Frontend

A premium, dark-themed, bilingual (Thai/English) portfolio landing page for **Juggit Khunkhaw**, built with React, Next.js (App Router), and Tailwind CSS.

Workspace context: [`E:\portfolio\CONTEXT.md`](E:/portfolio/CONTEXT.md). Approved design: [`docs/superpowers/specs/2026-07-10-dark-portfolio-design.md`](E:/portfolio/front/docs/superpowers/specs/2026-07-10-dark-portfolio-design.md).

## Features
- **Welcome Intro**: A 1.2-second styled branded loading sequence.
- **Bilingual Interface**: Seamless switching between Thai (TH) and English (EN) using local dictionary files.
- **Project Grid**: Showcases 3 curated projects (`hospital-app`, `InvestingNew`, `investerBack`) fetched from static JSON metadata with technology logos.
- **Responsive Layout**: Fluid UI optimized for mobile, tablet, and desktop viewports.
- **Contact Form**: Bilingual validated form posts JSON to the Laravel API and stores messages in `contact_messages`.
- **Interactive UI**: Grid background, glass cards, typing role, scroll reveal, fine-pointer cursor, sticky navigation, and keyboard-accessible portfolio tabs.
- **3D ID Card**: React Three Fiber/Three.js on desktop fine pointers; CSS/static fallback for touch, mobile, and reduced motion.

## Project Structure
- `app/`: Next.js App Router core files (root page and layouts).
- `components/`: Modular React view parts (Intro, Header, Sections, Badge, Cards).
- `lib/locales/`: Localization files (`th.js`, `en.js`).
- `lib/portfolio-content.js`: Unified static metadata repository for projects and skills.
- `lib/tech-icons.js`: Shared Devicon mapping with initials fallback.
- `components/`: `InteractiveIdCard`, `TypingRole`, `CustomCursor`, `Reveal`, and `PortfolioTabs` are isolated client interactions; visual state must not own contact/content data.
- `public/`: SVG icons and placeholder image fallback graphics.

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
