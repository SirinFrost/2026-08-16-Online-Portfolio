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

export type Project = {
  name: string
  period: string
  url?: string
  tags: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    name: 'Keyboard Restriction App',
    period: 'July 2026',
    tags: ['Python', 'Tkinter', 'Windows Hooks', 'PyInstaller'],
    highlights: [
      'Built as an always-on-top overlay for game challenges that globally blocks selected keys.',
      'Designed toggleable "missions" whose blocked keys combine as a union, so any activation order stays correct.',
      'Packaged the tool as a standalone Windows executable.',
    ],
  },
  {
    name: 'Clip-Worthy Finder',
    period: 'June 2026',
    url: 'https://github.com/SirinFrost/2026-06-12-Clip-Worthy-Finder',
    tags: ['Python', 'faster-whisper', 'Ollama', 'FFmpeg', 'FastAPI'],
    highlights: [
      'Turns a Twitch VOD into ranked, automatically cut clips of its best moments, fully offline.',
      'Transcribes with faster-whisper, then has a local LLM score 30-minute blocks of transcript for clip-worthy moments.',
      'Ships as both a CLI and a drag-and-drop web app with a background job queue and live progress.',
      'Caches each pipeline stage so reruns only redo the missing work.',
    ],
  },
  {
    name: 'The Goat',
    period: 'May 2026 – June 2026',
    url: 'https://github.com/SirinFrost/2026-05-7-The-Goat',
    tags: ['Python', 'pygame-ce', 'Game Engine', 'Git Workflow'],
    highlights: [
      'Built a 2D ship shooter on a custom component-based engine written in pygame-ce.',
      'Implemented colliders and physics, a chunked tile world loaded from level files, particles, and audio.',
      'Added menu, play, shop, and game-over scenes with an upgrade system and enemy spawning.',
      'Developed through feature branches and 17 merged pull requests.',
    ],
  },
  {
    name: 'Simple Authentication System',
    period: 'April 2026 – May 2026',
    url: 'https://github.com/SirinFrost/2026-04-27-Simple-Authentication-System',
    tags: ['FastAPI', 'PostgreSQL', 'OAuth 2.0', 'React', 'TypeScript'],
    highlights: [
      'Full-stack login system supporting email/password accounts and Google, Facebook, and Microsoft sign-in.',
      'Hashes passwords with Argon2 and issues JWT access tokens for sessions.',
      'Built the React frontend with register, login, and protected dashboard pages.',
    ],
  },
  {
    name: 'YouTube to MP3 / MP4',
    period: 'April 2026',
    url: 'https://github.com/SirinFrost/2026-04-24-Youtube-To-Mp4-Mp3',
    tags: ['React', 'FastAPI', 'yt-dlp', 'FFmpeg'],
    highlights: [
      'Web app that converts a YouTube link into a downloadable MP3 or MP4.',
      'FastAPI backend handles downloading, merging, and audio encoding, with a health check for FFmpeg.',
    ],
  },
  {
    name: 'Reel Summarization',
    period: 'April 2026',
    url: 'https://github.com/SirinFrost/2026-04-22-Reel-Summarization',
    tags: ['React', 'TypeScript', 'FastAPI', 'faster-whisper', 'Ollama'],
    highlights: [
      'Turns short videos into a transcript and a summary using speech-to-text and a local LLM.',
      'Accepts file uploads or public Instagram, YouTube, and TikTok links.',
    ],
  },
  {
    name: 'Reel Extraction Pipeline',
    period: 'January 2026',
    tags: ['Python', 'Playwright', 'Ollama', 'YAML'],
    highlights: [
      'Scrapes Instagram Reels with Playwright and runs two LLM passes to segment transcripts and classify their hooks.',
      'Classifies hooks against a custom taxonomy of engagement patterns such as curiosity gaps and pattern interrupts.',
    ],
  },
]

export const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
]
