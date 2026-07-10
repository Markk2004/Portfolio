# Portfolio File Organization Design

**Date:** 2026-07-10  
**Status:** Approved direction, pending implementation-plan review

## Goal

จัดระเบียบ workspace ให้ค้นหาไฟล์ง่าย แยกความรับผิดชอบของ frontend ชัดเจน และล้างไฟล์ scaffold/asset ที่ไม่ได้ใช้ โดยไม่เปลี่ยน behavior, UI, API contract หรือโครงสร้าง Git ของ `front` และ `back`.

## Current Context

- `E:\portfolio\front` เป็น Next.js repository หลักของ portfolio
- `E:\portfolio\back` เป็น Laravel repository สำหรับ `POST /api/contact`
- Frontend components, content, locale และ 3D code ยังวางรวมกันในหลายระดับของ `front`
- รูป profile ที่ใช้งานจริงอยู่ใน `front\public\images\profile`
- รูป `.jfif` ที่ root เป็นไฟล์ซ้ำของ profile images และไม่มีเหตุผลต้องอยู่นอก frontend
- Backend ใช้ convention ของ Laravel และไม่ควรถูกย้ายโฟลเดอร์แบบ frontend

## Target Structure

```text
E:\portfolio
├─ CONTEXT.md
├─ README.md
├─ pending.md
├─ front
│  ├─ app
│  ├─ components
│  │  ├─ 3d
│  │  ├─ layout
│  │  ├─ sections
│  │  └─ ui
│  ├─ hooks
│  ├─ lib
│  │  ├─ content
│  │  ├─ i18n
│  │  └─ forms
│  ├─ public/images
│  └─ docs
└─ back
   └─ Laravel structure unchanged
```

## Move Map

### 3D components

Move the following files into `front/components/3d/`:

- `InteractiveIdCard.js`
- `IdCardScene.js`
- `IdCardFallback.js`

The public interface remains `InteractiveIdCard({ profile, role, ctaHref })`. Only import paths change.

### Layout components

Move into `front/components/layout/`:

- `Header.js`
- `Footer.js`
- `LanguageSwitcher.js`
- `CustomCursor.js`
- `WelcomeIntro.js`

### Section components

Move into `front/components/sections/`:

- `Hero.js`
- `About.js`
- `Contact.js`
- `PortfolioTabs.js`
- `Projects.js`
- `Skills.js`
- `CertificatesEmptyState.js`

### Reusable UI components

Move into `front/components/ui/`:

- `ContactForm.js`
- `ProjectCard.js`
- `SkillBadge.js`
- `Reveal.js`
- `TypingRole.js`

### Data and domain modules

Move into `front/lib/content/`:

- `portfolio-content.js`
- `roles.js`
- `tech-icons.js`

Move into `front/lib/i18n/`:

- `en.js`
- `th.js`

Move into `front/lib/forms/`:

- `validation.js`

The existing `@/*` alias remains rooted at `front`, so imports will use paths such as `@/components/sections/Hero` and `@/lib/i18n/en`.

## Cleanup Rules

1. Confirm references with `rg` before deleting any file.
2. Delete root duplicates `52b6ec24-2fd2-4dbe-8c54-826d173e42bf.jfif` and `8c16cfe9-7b6c-4e85-9702-bd5e1e4320b0.jfif`; keep the named copies under `front/public/images/profile`.
3. Delete unused default Next assets only when no source or documentation references them: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, and `public/window.svg`.
4. Keep `front/app/favicon.ico`, profile/project placeholders, repository instruction files, docs, and configuration files.
5. Keep Laravel scaffold files unless a reference check proves they are unused and removal is safe under Laravel conventions. This task does not restructure `back`.
6. Do not create a root Git repository and do not move either `.git` directory.

## Import and Behavior Safety

- Update all imports in `front/app`, tests, and components after each move.
- Do not change component props, exported names, locale keys, project slugs, API URLs, CSS classes, or runtime behavior.
- Preserve the three featured projects: `hospital-app`, `InvestingNew`, and `investerBack`.
- Preserve profile image paths after cleanup: `/images/profile/profile-1.jfif` and `/images/profile/profile-2.jfif`.
- Keep `back` API routes, migrations, rate limiting, CORS, and security middleware untouched.

## Verification

Run from `E:\portfolio\front`:

```powershell
rg -n "components/(?!3d|layout|sections|ui)|lib/(locales|portfolio-content|roles|tech-icons|validation)" app components hooks lib __tests__
npm run lint
npm test -- --runInBand
npm run build
git diff --check
```

The first command is a review aid; any result must be checked against the target map rather than treated as an automatic failure. Also verify that no moved source path remains in imports and that no deleted asset is referenced.

Run from `E:\portfolio\back` when PHP/Composer are available:

```powershell
php artisan test
```

## Commit Boundary

Commit the frontend reorganization in `front` with:

```text
refactor: organize portfolio frontend files
```

Do not mix unrelated visual, API, or content changes into this reorganization commit.

## Out of Scope

- Redesigning UI or changing the dark theme
- Changing Next.js, React, Laravel, or dependency versions
- Moving Laravel directories into a custom architecture
- Adding aliases, barrel files, new abstractions, or a component library
- Changing database schema, API behavior, project content, or locale wording
