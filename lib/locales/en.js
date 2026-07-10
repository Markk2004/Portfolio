export const en = {
  ui: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      design: 'Design & Tools',
    },
    common: {
      viewGithub: 'View on GitHub',
      liveDemo: 'Live Demo',
      noDemo: 'No Demo Available',
    }
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Juggit Khunkhaw',
    title: 'Full-Stack Developer',
    description: 'Building modern, high-performance web applications from front to back with elegant designs and robust APIs.',
    ctaProjects: 'View My Work',
    ctaContact: 'Get in Touch',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am Juggit Khunkhaw, a Full-Stack Developer passionate about crafting clean code and intuitive user interfaces. With experience in React, Next.js, and backend technologies like PHP and Laravel, I bridge the gap between design and functionality.',
      'I enjoy solving complex problems, optimizing database queries, and continuously learning new technologies to build robust and scalable applications.'
    ],
  },
  projects: {
    'hospital-app': {
      title: 'Hospital Management Application',
      summary: 'A web platform designed to streamline hospital workflows and patient management.',
      description: 'Built with React, Vite, and TypeScript. This application features patient scheduling, medical records management, and real-time appointment updates to enhance productivity and healthcare services.',
      imageAlt: 'Screenshot of Hospital Management Application',
    },
    'InvestingNew': {
      title: 'Investing New Portal',
      summary: 'An interactive investment portal offering real-time financial tracking and insights.',
      description: 'Leverages Next.js and TypeScript for server-side rendering, SEO friendliness, and performance. Features user portfolio dashboard, financial news feed, and interactive asset charts.',
      imageAlt: 'Screenshot of Investing New Portal',
    },
    'investerBack': {
      title: 'Invester Portal Backend API',
      summary: 'A secure and scalable PHP backend powering financial transactions and portfolio data.',
      description: 'Built using PHP, this backend handles complex calculations, secure API routing, database schema migrations, and role-based access control for investment services.',
      imageAlt: 'Diagram of Invester Portal Backend API',
    },
  },
  contact: {
    title: 'Contact Me',
    subtitle: "Feel free to drop a message. I'll get back to you as soon as possible!",
    form: {
      name: 'Name',
      email: 'Email Address',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Thank you! Your message has been sent successfully.',
      error: 'Failed to send message. Please try again later.',
      validation: {
        nameRequired: 'Name is required.',
        nameLength: 'Name must not exceed 120 characters.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email address.',
        emailLength: 'Email must not exceed 255 characters.',
        messageRequired: 'Message is required.',
        messageLength: 'Message must not exceed 5000 characters.',
      }
    }
  },
  footer: {
    copyright: '© {year} Juggit Khunkhaw. All rights reserved.',
  }
};
