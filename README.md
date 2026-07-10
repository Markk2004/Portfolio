# Portfolio Frontend

A premium, dark-themed, bilingual (Thai/English) portfolio landing page for **Juggit Khunkhaw**, built with React, Next.js (App Router), and Tailwind CSS.

## Features
- **Welcome Intro**: A 1.2-second styled branded loading sequence.
- **Bilingual Interface**: Seamless switching between Thai (TH) and English (EN) using local dictionary files.
- **Project Grid**: Showcases 3 curated projects (`hospital-app`, `InvestingNew`, `investerBack`) fetched from static JSON metadata.
- **Responsive Layout**: Fluid UI optimized for mobile, tablet, and desktop viewports.
- **Accessible Contact Form**: Bounded text areas, email regex validation, ARIA state roles, and connection with Laravel backend API.

## Project Structure
- `app/`: Next.js App Router core files (root page and layouts).
- `components/`: Modular React view parts (Intro, Header, Sections, Badge, Cards, ContactForm).
- `lib/locales/`: Localization files (`th.js`, `en.js`).
- `lib/portfolio-content.js`: Unified static metadata repository for projects and skills.
- `lib/validation.js`: Custom frontend validation algorithms.
- `public/`: SVG icons and placeholder image fallback graphics.

## Quick Start

### 1. Configure Environments
Create a `.env` file from the provided template:
```bash
cp .env.example .env
```
Ensure `NEXT_PUBLIC_API_URL` points to the Laravel backend (default is `http://localhost:8000`).

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 4. Run Unit/Component Tests
```bash
npm test
```

### 5. Compile Production Bundle
```bash
npm run build
```
