# Dark Portfolio Landing Page Design

**Date:** 2026-07-10  
**Status:** Approved design; implementation plan pending review

## Goal

สร้าง portfolio landing page สำหรับ Juggit Khunkhaw (`Markk2004`) เพื่อแสดง profile, skills, technology stack, และผลงานเด่น 3 รายการ ใน dark theme รองรับภาษาไทย/อังกฤษและมี contact form ที่บันทึกข้อความลง database ผ่าน Laravel API

## Source Profile and Featured Projects

ข้อมูลตั้งต้นมาจาก GitHub profile และ repositories สาธารณะ:

- Profile: https://github.com/Markk2004
- `hospital-app`: React + TypeScript + Vite — https://github.com/Markk2004/hospital-app
- `InvestingNew`: Next.js/TypeScript project with Vercel deployment — https://github.com/Markk2004/InvestingNew
- `investerBack`: PHP backend repository — https://github.com/Markk2004/investerBack

ชื่อที่ใช้ใน profile จาก git metadata คือ `Juggit Khunkhaw`. `Portfolio` และ `PortBack` เป็น repository เป้าหมายที่ยังมีเพียง `.gitkeep`; ห้ามสร้างข้อมูลผลงานปลอมจากสอง repository นี้

## User Experience and Visual Design

- Dark developer portfolio: charcoal background `#0B0F14`, surface `#111827`, off-white text, cyan/blue accent
- Header: ชื่อหรือ logo, links ไปยัง About, Skills, Projects, Contact และ language switcher TH/EN
- Hero: ชื่อ, short bio, บทบาท Full-stack Developer, CTA ไป Projects และ Contact, รูป profile ที่เปลี่ยนได้
- About: คำอธิบายสั้นและจุดเด่นด้าน web/system development
- Skills: responsive grid พร้อม logo และชื่อเทคโนโลยี เช่น Next.js, JavaScript, Tailwind CSS, PHP, Laravel, React, TypeScript, Vite และ MySQL
- Projects: curated cards 3 รายการ; แต่ละ card มีรูป, summary, stack logos, GitHub link และ demo link เมื่อมี
- Project details: problem, solution, role, stack, project image และ links โดยไม่ทำ CMS หรือ admin dashboard
- Contact: name, email, message; แสดง validation/success/error ตาม locale และไม่ส่งอีเมลใน version แรก
- Footer: GitHub link, copyright และ mobile-friendly navigation
- Responsive: hero/project grid แบบหลายคอลัมน์บน desktop และ single-column stack บน mobile; mobile header เป็น collapsible navigation
- Images: project images อยู่ใน `front/public/images/projects` หรือใช้ URL ที่กำหนดใน content config; ทุกภาพมี alt text สองภาษาและ fallback placeholder
- Page entry: แสดง Short branded intro ก่อนเข้า Hero โดยใช้ข้อความ `WELCOME TO MY PORTFOLIO`, ชื่อ/โลโก้ `Juggit Khunkhaw`, dark surface และ cyan/blue accent
- Welcome intro ใช้เวลา 1–1.5 วินาที แล้ว fade/slide เข้า Hero; เป็น visual transition ไม่รอ API และไม่ทำให้ data loading ช้าลง
- ใช้ CSS animation เป็นหลัก ไม่เพิ่ม animation dependency และรองรับ `prefers-reduced-motion` ด้วย transition สั้นหรือข้าม animation

## Internationalization

- รองรับ `th` และ `en`
- ใช้ locale dictionaries แยก UI strings และ curated content ไม่ hard-code ข้อความใน components
- locale ที่ไม่รู้จัก fallback เป็น `en`
- language switcher ต้องรักษา section/page context และทำงานบน mobile
- metadata, title, description และ image alt text ต้องมีทั้งสองภาษา

## Architecture & Flow

```text
Browser
  -> Next.js landing page
      -> static locale/content configuration
      -> contact form
          -> POST /api/contact
              -> Laravel validation and rate limit
              -> ContactMessage persistence
                  -> MySQL 8.0+
```

### Frontend

Next.js ใช้ JavaScript และ Tailwind CSS รับผิดชอบ layout, responsive UI, dark theme, locale switching, project/skill presentation และการเรียก Laravel API. Portfolio content ใช้ static-first configuration เพื่อ performance/SEO และไม่ scrape GitHub ใน runtime

### Backend

Laravel เป็น API ขนาดเล็กสำหรับ `POST /api/contact` และ persistence เท่านั้น. ไม่มี authentication, admin dashboard หรือ runtime GitHub integration ใน scope นี้

### Runtime behavior

1. Browser render landing page จาก static content และ locale dictionary
2. User เปลี่ยนภาษา; UI/content/metadata เปลี่ยนตาม locale
3. User submit contact form; frontend validate และส่ง JSON ไป Laravel
4. Laravel validate ซ้ำ, normalize input, apply rate limit, persist message แล้วคืน success/error JSON
5. Frontend reset form เมื่อสำเร็จ หรือคงค่าฟอร์มไว้เมื่อผิดพลาด

### Welcome intro flow

1. Initial render แสดง `WelcomeIntro` แบบเต็ม viewport และไม่เปิด main content ให้ focus ก่อนจบ intro
2. แสดงชื่อ/โลโก้, ข้อความ `WELCOME TO MY PORTFOLIO` และ subtle progress line บน dark theme
3. หลัง 1–1.5 วินาทีเรียก `onComplete`
4. `WelcomeIntro` fade out และทำให้ main portfolio visible/focusable
5. หาก `prefers-reduced-motion` เป็นจริง ให้ใช้ transition สั้นหรือแสดง/ซ่อนโดยไม่เคลื่อนไหว
6. Component ต้องไม่ loop จาก re-render และต้องไม่ทำให้ screen reader อ่านข้อความซ้ำซ้อน

## Core Logic

- Curated project object ต้องมี `slug`, `title`, `summary`, `description`, `image`, `stack`, `githubUrl`, และ optional `demoUrl`
- Featured project list จำกัดที่ 3 รายการ: `hospital-app`, `InvestingNew`, `investerBack`
- Missing demo link แสดงเฉพาะ GitHub link
- Missing image ใช้ project-name placeholder และไม่ทำให้ทั้งหน้า render ล้มเหลว
- Contact frontend validate required fields, email format และ bounded lengths ก่อน submit
- Laravel validate ซ้ำและ return field-level errors ที่ frontend แปลงเป็นข้อความตาม locale
- Error response ไม่เผย exception, SQL error หรือ stack trace

## Database Design

Production ใช้ MySQL 8.0+. Local/test ใช้ SQLite ได้ แต่ schema ต้องมาจาก Laravel migration เดียวกัน

### `contact_messages`

| Field | Type | Rule |
|---|---|---|
| `id` | bigint | primary key |
| `name` | varchar(120) | required |
| `email` | varchar(255) | required, valid email, indexed |
| `message` | text | required, bounded length |
| `locale` | varchar(5) | only `th` or `en` |
| `status` | varchar(20) | default `new` |
| `created_at` | timestamp | Laravel timestamp |
| `updated_at` | timestamp | Laravel timestamp |

ไม่มี user/admin table และไม่เก็บ IP หรือข้อมูลส่วนตัวเกินความจำเป็นใน version แรก. เพิ่ม index ที่ `email`, `created_at`, `status` ตาม migration ที่จำเป็น

## Security Logic

- Validate ทั้ง Next.js และ Laravel
- ใช้ Laravel Form Request จำกัด field, length, email format และ locale enum
- จำกัด `POST /api/contact` ด้วย rate limit 5 requests/minute/IP
- กำหนด CORS ให้รับเฉพาะ frontend origin และรับเฉพาะ HTTP method ที่ต้องใช้
- ใช้ CSRF protection ตาม deployment mode ของ Laravel
- Render user message เป็น plain text และห้าม inject HTML เพื่อป้องกัน XSS
- เก็บ database credentials และ origins ใน `.env`; ห้าม commit secrets
- ใช้ HTTPS ใน production
- ไม่ส่ง database error หรือ exception detail กลับ client
- ตั้ง security headers พื้นฐาน: CSP, `X-Content-Type-Options`, `Referrer-Policy`

## Testing and Acceptance Criteria

- Landing page render ได้ทั้ง `th` และ `en` และ switch ภาษาได้โดยไม่เสีย layout
- เปิดหน้าเว็บแล้วเห็น branded welcome intro เต็ม viewport ด้วยข้อความ `WELCOME TO MY PORTFOLIO` และชื่อ `Juggit Khunkhaw`
- Welcome intro จบภายใน 1–1.5 วินาที แล้วเข้า Hero ได้โดยไม่รอ API และไม่ทำให้ main content สูญเสีย keyboard focus
- `prefers-reduced-motion` ลดหรือข้าม animation ได้ และ intro ไม่ loop เมื่อ component re-render
- Responsive layout ผ่าน desktop/mobile viewport และ keyboard navigation พื้นฐาน
- Project cards แสดง 3 repositories ที่กำหนด พร้อม stack logos, GitHub links และ demo link เฉพาะรายการที่มี
- รูป profile/project มี fallback และ alt text ครบ
- Laravel migration สร้าง `contact_messages` ได้บน MySQL และ SQLite test environment
- Valid contact request ถูกบันทึกใน database พร้อม locale และ status `new`
- Invalid request ถูกปฏิเสธพร้อม field errors; ไม่มี invalid row ถูกบันทึก
- Rate limit ป้องกัน request เกิน 5 ครั้งต่อนาทีต่อ IP
- CORS, secrets, error masking และ security headers ถูกตรวจด้วย automated tests หรือ integration checks
- Frontend build/lint และ backend tests ผ่านก่อน handoff ให้ Gemini

## Scope Boundaries

ไม่รวม admin dashboard, authentication, CMS editor, email notification, GitHub runtime scraping, analytics, comments, blog และ dynamic repository discovery. หากต้องการสิ่งเหล่านี้ให้แยกเป็น phase/spec ใหม่
