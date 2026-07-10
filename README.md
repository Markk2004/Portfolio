# Portfolio Frontend

A premium, dark-themed, bilingual (Thai/English) portfolio landing page for **Juggit Khunkhaw**, built with React, Next.js (App Router), and Tailwind CSS.

## Features
- **Welcome Intro**: A 1.2-second styled branded loading sequence.
- **Bilingual Interface**: Seamless switching between Thai (TH) and English (EN) using local dictionary files.
- **Project Grid**: Showcases 3 curated projects (`hospital-app`, `InvestingNew`, `investerBack`) fetched from static JSON metadata with technology logos.
- **Responsive Layout**: Fluid UI optimized for mobile, tablet, and desktop viewports.
- **Direct Contact Links**: Easy one-click triggers to phone (082-6610469) and email (jiggtkk@gmail.com).

## Project Structure
- `app/`: Next.js App Router core files (root page and layouts).
- `components/`: Modular React view parts (Intro, Header, Sections, Badge, Cards).
- `lib/locales/`: Localization files (`th.js`, `en.js`).
- `lib/portfolio-content.js`: Unified static metadata repository for projects and skills.
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
