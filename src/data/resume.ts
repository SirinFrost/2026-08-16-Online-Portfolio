export const profile = {
  name: 'Andrew Zhang',
  brand: 'AndrewZhang',
  phone: '(647) 482-3915',
  email: 'azworkemail123@gmail.com',
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/andrew-zhang-07657427b/',
  },
  github: {
    label: 'GitHub',
    url: 'https://github.com/SirinFrost',
  },
  tagline: 'Undergraduate Student · Programming/Robotics Educator',
  school: "Queen's University · Year 3 · Cybersecurity",
  intro:
    "I build game engines, teach robotics and coding, and sometimes build the occasional application. Currently teaching at Code Ninjas and developing a game.",
  interests: ['Programming', 'Robotics', 'Badminton', 'Teaching', 'Aviation', 'Cybersecurity']
}

export type HeroImage = {
  src: string
  alt: string 
}

export const heroImages: HeroImage[] = []

export const skills = {
  software: [
    'Adobe Photoshop',
    'Premiere Pro',
    'Canva',
    'Krita',
    'VS Code',
    'Fusion 360',
    'Aseprite', 
    'Google Docs',
    'Google Slides',
    'Zoom',
  ],
  subtitle: 'Technical tools and areas I enjoy learning and working in',
}

export const education = [
  {
    school: "Queen's University",
    period: 'Year 3',
    details: ['Math 112', 'Math 121 A & B', 'CISC 121', 'CISC 102', 'ECON 112'],
  },  
  {
    school: 'St. Robert Catholic High School',
    period: '2020 – 2024',
    details: [
      'Ontario Secondary School Diploma',
      'Specialized High Skills Major — Aviation & Aerospace',
      'CPR & First Aid C',
    ],
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  logo?: string
  logoClassName?: string
  continued?: boolean
  tags: string[]
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Code Ninjas',
    role: 'Coding Instructor',
    period: 'July 2026 – Present',
    logo: '/code-ninjas.png',
    logoClassName: 'experience-logo--lg',
    tags: ['Teaching', 'Programming'],
    highlights: [
      'Teaching coding basics to students using scratch code.',
      'Introduced circuitry and electronics using bitmaker labs.',
      'Taught students lua programming language to build their own games.',
      'Guided students through 3d design using Tinkercad as well as 3d terrain and model building in Roblox Studio.',
    ],
  },
  {
    company: 'Envision Robotics',
    role: 'Floor Manager',
    period: 'June 2025 – July 2025',
    logo: '/envision-robotics.png',
    tags: ['Leadership', 'Camp Operations', 'Student Safety'],
    highlights: [
      'Managed and supervised 30+ students, ensuring student safety on campgrounds.',
      'Managed daily floor operations, including schedules, lunch break activities, and headcounts.',
      'Led and mentored a team of counselors, providing guidance, conflict resolution, and performance feedback.',
      'Documented incidents, attendance, and behavioral reports accurately and promptly.',
    ],
  },
  {
    company: 'Envision Robotics',
    role: 'Co-op Placement',
    period: 'March 2024 – June 2024',
    continued: true,
    tags: ['Robotics', 'Lesson Design', 'Student Supervision'],
    highlights: [
      'Helped manage and supervise students during robotics programs.',
      'Used creativity to develop lessons for Envision Robotics to use.',
      'Built robotics models for lessons and helped organize materials and tools.',
    ],
  },
  {
    company: 'RoboEdu',
    role: 'Programming Instructor',
    period: 'July 2023 – February 2024',
    logo: '/robo-edu.png',
    tags: ['Python', 'Teaching', 'Curriculum'],
    highlights: [
      'Taught Python to small and large groups of students.',
      'Marked homework and supported learners at different skill levels.',
      'Developed classroom management skills while delivering technical content.',
    ],
  },
]

export const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
]
