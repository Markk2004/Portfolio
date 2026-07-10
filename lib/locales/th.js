export const th = {
  ui: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับฉัน',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      contact: 'ติดต่อ',
      portfolio: 'Portfolio',
      certificates: 'ใบรับรอง',
      techStack: 'Tech Stack',
    },
    categories: {
      frontend: 'ฟรอนต์เอนด์',
      backend: 'แบ็คเอนด์',
      design: 'ดีไซน์และเครื่องมือ',
    },
    common: {
      viewGithub: 'ดูบน GitHub',
      liveDemo: 'ลิงก์เดโม',
      noDemo: 'ไม่มีลิงก์เดโม',
      certificatesEmpty: 'จะเพิ่มข้อมูลใบรับรองเร็ว ๆ นี้',
    }
    ,portfolioTitle: 'ผลงานและเทคโนโลยีที่เลือกสรร'
  },
  hero: {
    greeting: 'สวัสดีครับ ผมชื่อ',
    name: 'จักรกฤษณ์ ขวัญข้าว',
    title: 'นักพัฒนาเว็บ Full-Stack',
    description: 'มุ่งมั่นสร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัย ทำงานได้รวดเร็ว ทั้งส่วนหน้าบ้านและระบบหลังบ้านที่เสถียร พร้อมดีไซน์ที่พรีเมียม',
    ctaProjects: 'ดูผลงานทั้งหมด',
    ctaContact: 'ติดต่อฉัน',
  },
  metadata: {
    title: 'Juggit Khunkhaw | Portfolio นักพัฒนา Full-Stack',
    description: 'Portfolio สองภาษาที่นำเสนอผลงานและทักษะเทคโนโลยีที่ตรวจสอบได้ พร้อมแบบฟอร์มติดต่อ',
  },
  about: {
    title: 'เกี่ยวกับฉัน',
    paragraphs: [
      'ผมชื่อ จักรกฤษณ์ ขวัญข้าว นักพัฒนา Full-Stack ที่ชื่นชอบการเขียนโค้ดที่สะอาดและออกแบบ UI/UX ที่ใช้งานง่าย มีประสบการณ์ทั้งด้าน React, Next.js รวมถึงฝั่งหลังบ้านอย่าง PHP และ Laravel ทำให้เข้าใจการเชื่อมโยงระบบแบบครบวงจร',
      'ผมรักการแก้ปัญหาที่ซับซ้อน การปรับแต่งคิวรีของฐานข้อมูลให้มีประสิทธิภาพสูงสุด และอัปเดตเทคโนโลยีใหม่ๆ อยู่เสมอเพื่อนำมาสร้างระบบที่รองรับการขยายตัวได้ดี'
    ],
  },
  projects: {
    'hospital-app': {
      title: 'แอปพลิเคชันจัดการระบบโรงพยาบาล',
      summary: 'แพลตฟอร์มเว็บช่วยจัดการเวิร์กโฟลว์ในโรงพยาบาลและข้อมูลผู้ป่วย',
      description: 'Repository สาธารณะของ Markk2004 ที่ใช้ React, Vite และ TypeScript',
      imageAlt: 'ภาพหน้าจอระบบจัดการโรงพยาบาล',
    },
    'InvestingNew': {
      title: 'พอร์ทัลข้อมูลและการลงทุน Investing New',
      summary: 'โปรเจกต์ Next.js ของ Markk2004 พร้อมลิงก์ deployment บน Vercel',
      description: 'Repository สาธารณะที่ใช้ Next.js และ TypeScript พร้อมลิงก์เว็บไซต์จาก GitHub',
      imageAlt: 'ภาพหน้าจอระบบลงทุน Investing New',
    },
    'investerBack': {
      title: 'ระบบหลังบ้าน Invester API',
      summary: 'Repository backend สาธารณะที่พัฒนาด้วย PHP โดย Markk2004',
      description: 'Repository สาธารณะที่เน้นงาน backend และพัฒนาด้วย PHP',
      imageAlt: 'แผนภาพสถาปัตยกรรมระบบหลังบ้าน Invester API',
    },
  },
  contact: {
    title: 'ติดต่อฉัน',
    subtitle: 'ยินดีให้คำปรึกษาและร่วมงาน สามารถติดต่อได้ตามช่องทางด้านล่างนี้ครับ',
    phone: 'เบอร์โทรศัพท์',
    email: 'อีเมล',
    form: {
      name: 'ชื่อ',
      email: 'อีเมล',
      message: 'ข้อความ',
      submit: 'ส่งข้อความ',
      sending: 'กำลังส่ง...',
      success: 'ขอบคุณครับ บันทึกข้อความเรียบร้อยแล้ว',
      error: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
      validation: {
        nameRequired: 'กรุณากรอกชื่อ',
        nameLength: 'ชื่อต้องมีความยาวไม่เกิน 120 ตัวอักษร',
        emailRequired: 'กรุณากรอกอีเมล',
        emailInvalid: 'กรุณากรอกรูปแบบอีเมลให้ถูกต้อง',
        emailLength: 'อีเมลต้องมีความยาวไม่เกิน 255 ตัวอักษร',
        messageRequired: 'กรุณากรอกข้อความ',
        messageLength: 'ข้อความต้องมีความยาวไม่เกิน 5,000 ตัวอักษร',
      },
    },
  },
  footer: {
    copyright: '© {year} จักรกฤษณ์ ขวัญข้าว. สงวนลิขสิทธิ์ทั้งหมด',
  }
};
