// Central data source for the portfolio.
// All content is factual — nothing here is invented.

export const profile = {
  name: 'Remonda Ropil',
  firstName: 'Remonda',
  title: 'Full Stack Developer',
  subtitle: 'React.js & Node.js · JavaScript (ES6+)',
  location: 'Cairo, Egypt',
  phone: '01282880265',
  email: 'mondaropil3@gmail.com',
  linkedin: 'https://linkedin.com/in/remonda-ropil',
  portfolioUrl: 'https://remonda-ropil.vercel.app',
  availability: 'Available for work',
  summary:
    'Full Stack Developer with hands-on experience building complete web applications across the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in developing responsive, component-driven frontends and designing RESTful APIs, database schemas, and backend logic to support them. Background in education brings strong communication, structured problem-solving, and user-centered thinking to product and UI decisions. Comfortable owning a feature end-to-end, from database design through API implementation to a polished, accessible UI.',
  portrait: '/assets/remonda.jpg',
}

export const about = {
  heading: 'Where Education Meets Engineering',
  paragraphs: [
    "I'm a Full Stack Developer with hands-on experience building complete web applications with MongoDB, Express.js, React.js and Node.js. I design responsive, component-driven frontends and the RESTful APIs, schemas and backend logic behind them.",
    'My journey started in the classroom, teaching Special Education and Geography in Cairo. That background brings strong communication, structured problem-solving and user-centered thinking to my product and UI decisions.',
    'I trained through the Digilians Program, in partnership with the Egyptian Ministry of Communications, and completed the Meta Front-End Developer Professional Certificate.',
  ],
  highlights: ['Cairo, Egypt', 'Full Stack', 'Former educator', 'Multilingual', 'Accessible UI'],
}

export const skillGroups = [
  {
    icon: '◐',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Context API', 'Redux', 'Responsive UI Design', 'Accessible UI Design', 'Vite'],
  },
  {
    icon: '◑',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful API Design', 'JWT Authentication', 'Socket.io'],
  },
  {
    icon: '◒',
    title: 'Database',
    skills: ['MongoDB', 'Mongoose', 'Schema Design', 'Supabase (PostgreSQL)'],
  },
  {
    icon: '◓',
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Axios', 'Fetch API', 'Stripe API Integration', 'i18n', 'REST API Testing', 'Agile Collaboration', 'Unit Testing'],
  },
]

export const languages = [
  { flag: 'EG', name: 'Arabic', level: 'Native' },
  { flag: 'GB', name: 'English', level: 'Intermediate / Professional' },
  { flag: 'IT', name: 'Italian', level: 'B1 Certified' },
]

export const projects = [
  {
    id: 'desertia',
    title: 'Desertia',
    tagline: 'Full-Stack Luxury Travel Booking Platform',
    featured: true,
    image: '/assets/desertia.jpg',
    description:
      'A luxury travel booking platform built end to end, with a React/Vite frontend and a Node.js/Express REST API backed by MongoDB.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Socket.io', 'i18n'],
    features: [
      'Built the platform end-to-end: React/Vite frontend and Node.js/Express REST API',
      'Designed data models and API endpoints for trips, bookings, hotels and payments',
      'Integrated Stripe for secure payment processing',
      'Implemented Socket.io for real-time booking updates',
      'Internationalization across 6 languages',
    ],
    role: 'Sole full-stack developer — frontend, API, data models, payments, real-time layer and i18n.',
  },
  {
    id: 'finkids',
    title: 'FinKids Bank Builder',
    tagline: 'Educational FinTech Web App',
    image: '/assets/finkids.jpg',
    description:
      'An interactive web application that teaches children core banking and financial-literacy concepts through a gamified, component-driven UI.',
    technologies: ['React', 'JavaScript', 'Component-Based UI'],
    features: [
      'Interactive financial-literacy experience for children',
      'Gamified interface',
      'Component-driven architecture',
      'UX informed by special-education instructional principles',
    ],
    role: 'Designed and built the app, applying special-education instructional principles to structure content and interactions for a young audience.',
  },
  {
    id: 'bright-future',
    title: 'Bright Future',
    tagline: 'Responsive Learning Platform',
    image: '/assets/brightfuture.jpg',
    description:
      'A responsive learning platform that delivers structured educational content through an accessible, easy-to-navigate interface.',
    technologies: ['React', 'JavaScript', 'Responsive Design'],
    features: [
      'Responsive layout',
      'Accessible, easy-to-navigate interface',
      'Reusable UI components for consistent styling',
    ],
    role: 'Developed the platform and built reusable components for consistent styling and faster feature delivery.',
  },
  {
    id: 'little-lemon',
    title: 'Little Lemon',
    tagline: 'React Restaurant Booking App — Meta Front-End Capstone',
    description:
      'A full table-reservation application with validated forms, dynamic time-slot availability and state management.',
    technologies: ['React', 'Jest', 'Accessibility', 'Git'],
    features: [
      'Table reservation workflow with form validation',
      'Dynamic time-slot availability',
      'Unit testing with Jest',
      'Semantic HTML and ARIA accessibility',
    ],
    role: 'Built the reservation app, wrote unit tests, applied accessibility best practices and submitted via GitHub following code-review conventions.',
  },
  {
    id: 'mini-linkedin',
    title: 'Mini LinkedIn',
    tagline: 'Vanilla JavaScript Social Feed App',
    description:
      'A social-feed style application built without a framework, implementing full CRUD functionality.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'localStorage'],
    features: [
      'Full CRUD: create, read, update and delete posts',
      'Social-feed experience',
      'Client-side persistence with localStorage',
    ],
    role: 'Built the app in vanilla JavaScript and implemented persistence so state survives across sessions.',
  },
]

export const experience = [
  {
    role: 'Digilians Program',
    org: 'Cairo, Egypt — in partnership with the Egyptian Ministry of Communications',
    period: '01/2026',
    current: true,
    points: [
      'Completed an intensive digital-competency program covering web development, problem-solving and collaborative project delivery.',
      'Built hands-on web development projects while strengthening technical and leadership skills in a team-based environment.',
    ],
  },
  {
    role: 'Teacher — Special Education',
    org: 'Al Wadi School, Cairo, Egypt',
    period: '09/2020 – 2023',
    points: [
      'Designed individualized education plans (IEPs) and structured teaching approaches for students with diverse learning needs.',
      'Built assessment tools to track academic and behavioral progress, translating data into actionable teaching decisions.',
    ],
  },
  {
    role: 'Teacher — Geography',
    org: 'Shubra High School Girls, Cairo, Egypt',
    period: '09/2018 – 09/2020',
    points: [
      'Taught Geography using visual tools, maps and interactive techniques, improving concept clarity for a large student cohort.',
      'Designed quizzes and evaluation frameworks to measure analytical and map-reading proficiency.',
    ],
  },
]

export const education = [
  {
    title: 'Diploma of Education, Special Education and Teaching',
    school: 'Ain Shams University, Cairo, Egypt',
    period: '09/2019 – 07/2020',
  },
  {
    title: 'Bachelor of Education, Geography',
    school: 'Ain Shams University, Cairo, Egypt',
    period: '09/2015 – 09/2019',
  },
]

export const certifications = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta (Coursera) · 2026',
    detail: '9-course program covering React, HTML/CSS, JavaScript, UI/UX principles and version control.',
  },
  {
    title: 'Italian Language Course, Level B1',
    issuer: 'Istituto Italiano di Cultura, Cairo · 2025',
    detail: '',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
