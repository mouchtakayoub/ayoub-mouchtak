import { Project, SkillCategory, Service, StatItem } from '../models/portfolio.models';

export const STATS: StatItem[] = [
  { value: '100%', label: 'Job Success Score', subtext: 'Committed to client satisfaction' },
  { value: '4+', label: 'Flagship Web Portals', subtext: 'Healthcare, Fitness, Legal & Luxury' },
  { value: '30%+', label: 'Average Efficiency Boost', subtext: 'Proven client conversion growth' },
  { value: '< 200ms', label: 'API Response Latency', subtext: 'Optimized Angular & Spring Boot/.NET' },
];

export const PROJECTS: Project[] = [
  {
    id: 'elitecare',
    title: 'EliteCare — Telemedicine & Multi-Specialty Clinic Portal',
    tagline: 'Exceptional Care for Your Health & Wellness',
    client: 'Elite Healthcare Systems',
    category: 'healthcare',
    categoryLabel: 'Healthcare & MedTech',
    primaryImage: 'projects/elitecare.png',
    badge: 'Featured Health Portal',
    themeColor: '#1d4ed8',
    accentColor: '#0ea5e9',
    techStack: ['Angular 18', 'TypeScript', 'RxJS', 'Spring Boot', 'Tailwind CSS', 'MySQL', 'JWT Auth'],
    metrics: [
      { label: 'Patient Trust', value: '5,000+' },
      { label: 'Satisfaction', value: '99%' },
      { label: 'Experience', value: '15+ Yrs' },
      { label: 'Availability', value: '24/7' }
    ],
    overview: 'A patient-first healthcare web portal designed for rapid doctor discovery, instant appointment booking, and seamless clinic navigation across all screen sizes.',
    problem: 'The client faced high drop-off rates with their legacy booking portal, leading to phone hotline congestion and lost new patient intake.',
    solution: 'Engineered a modern, accessible web application with Angular 18, featuring dynamic specialist filtering, instant consultation time-slot reservations, and a mobile-optimized clinic map.',
    keyFeatures: [
      'Interactive Doctor & Specialist Directory with Board-Certified verification badges',
      'Real-time appointment scheduling with automated calendar synchronization',
      'Unified Desktop & Mobile experience with zero layout shift',
      'HIPAA-compliant patient data collection endpoints powered by Spring Boot',
      'Clinic location discovery with interactive interactive map integration'
    ],
    architectureNotes: 'Modular standalone Angular architecture utilizing reactive signals for appointment state and RxJS streams for live calendar availability.',
    verifiedOutcome: 'Delivered ahead of deadline with 99% patient approval rating and a 42% increase in online appointment conversions within the first 60 days.'
  },
  {
    id: 'powerfit',
    title: 'PowerFit — High-Performance Gym & Membership Conversion Engine',
    tagline: 'Redefine Your Limits • High-Converting Fitness Web & Mobile Experience',
    client: 'PowerFit Athletic Clubs',
    category: 'fitness',
    categoryLabel: 'Fitness & High-Performance',
    primaryImage: 'projects/powerfit.png',
    badge: 'High Conversion',
    themeColor: '#10b981',
    accentColor: '#84cc16',
    techStack: ['Angular 18', 'Tailwind CSS', 'Spring Boot', 'Stripe Subscriptions', 'MySQL', 'REST API'],
    metrics: [
      { label: 'Active Members', value: '500+' },
      { label: 'Elite Trainers', value: '50+' },
      { label: 'Access', value: '24/7' },
      { label: 'Conversion Lift', value: '+64%' }
    ],
    overview: 'An aggressive, high-energy fitness brand web portal built to convert casual gym visitors into committed monthly subscription members.',
    problem: 'The gym relied on manual desk sign-ups and an outdated static site that failed to convert social media traffic into paying members.',
    solution: 'Designed and coded a dark-themed, ultra-responsive web platform with prominent calls-to-action, trainer showcase, and automated Stripe subscription checkout.',
    keyFeatures: [
      'Strategic high-converting hero layout with live membership intake CTAs',
      'Stripe Recurring Billing & automated digital waiver sign-off',
      'Trainer showcase with specialized fitness regimen tags and schedules',
      'Interactive membership plan comparator with monthly vs. annual toggles',
      'Mobile-first responsive design tailored for smartphones and tablets'
    ],
    architectureNotes: 'Leverages modern CSS grid and flexbox animations with lightweight Angular signals, ensuring a sub-second initial contentful paint on cellular networks.',
    verifiedOutcome: 'Boosted gym sign-ups by 64% in the first month post-launch, automating all recurring payment collections.'
  },
  {
    id: 'vanguard',
    title: 'Vanguard Law — Corporate Practice & High-Stakes Litigation Portal',
    tagline: 'Protecting Your Rights. Securing Your Future.',
    client: 'Vanguard Legal Group',
    category: 'legal',
    categoryLabel: 'Corporate & Legal',
    primaryImage: 'projects/vanguard-hero.png',
    secondaryImage: 'projects/vanguard-team.png',
    badge: 'Enterprise Advisory',
    themeColor: '#0f172a',
    accentColor: '#d97706',
    techStack: ['Angular 18', 'C# / .NET 8', 'Entity Framework Core', 'SQL Server', 'Azure DevOps'],
    metrics: [
      { label: 'Years Experience', value: '25+' },
      { label: 'Recovered For Clients', value: '$500M+' },
      { label: 'Success Rate', value: '98%' },
      { label: 'Legal Minds', value: 'Distinguished' }
    ],
    overview: 'A prestigious, authoritative legal web application engineered for a top-tier civil litigation and corporate M&A law firm.',
    problem: 'High-net-worth clients and corporate partners require an immediate sense of trust, institutional authority, and discreet consultation request workflows.',
    solution: 'Architected a sophisticated dual-palette design (executive navy & warm gold), complete with attorney profiles, practice area deep-dives, and an encrypted confidential inquiry system.',
    keyFeatures: [
      'Editorial luxury typography and structured firm credibility metrics',
      'World-Class Legal Minds team directory featuring senior partners and specialties',
      'Encrypted client consultation booking pipeline',
      'Practice area explorer covering Corporate Law, M&A, and Civil Litigation',
      'Enterprise security standards with rate-limited submission APIs'
    ],
    architectureNotes: 'Microservice-ready backend powered by .NET 8 Web APIs with strict input validation, coupled with Angular client components optimized for executive readability.',
    verifiedOutcome: 'Won top praise from executive partners for pristine code quality, WCAG accessibility, and 98% positive client feedback.'
  },
  {
    id: 'lelixir',
    title: "L'Élixir — Haute Gastronomie & Curated Dining Experience",
    tagline: "A Symphony of Excellence • Est. 1998 Paris",
    client: "L'Élixir Luxury Dining Group",
    category: 'hospitality',
    categoryLabel: 'Luxury & Hospitality',
    primaryImage: 'projects/lelixir-hero.jpg',
    secondaryImage: 'projects/lelixir.png',
    badge: 'Fine Dining & Reservation',
    themeColor: '#1c1917',
    accentColor: '#eab308',
    techStack: ['Angular 18', 'PrimeNG', 'Spring Boot', 'Stripe Payments', 'PostgreSQL', 'Cloudinary'],
    metrics: [
      { label: 'Signature Dishes', value: '42' },
      { label: 'Table Bookings', value: '3.2x' },
      { label: 'Mobile Optimized', value: '100%' },
      { label: 'Order Flow', value: 'Instant' }
    ],
    overview: 'An exquisite Parisian digital culinary portal featuring immersive storytelling, digital menu exploration, signature dish curation, and private table VIP reservations.',
    problem: 'The venue needed an online presence as refined as their Paris dining room to tell their culinary story and secure guaranteed VIP reservations with upfront deposits.',
    solution: 'Crafted a dark-luxury aesthetic with gold typography, high-definition culinary media, seamless order-now modals, and real-time reservation confirmation.',
    keyFeatures: [
      'Full-screen luxury hero landing "A Symphony of Excellence" with storytelling CTAs',
      'Interactive Chef\'s Selection showcase with ingredient breakdowns (e.g. Umbrian black truffles, 36-month aged parmesan)',
      'Instant "Order Now" & "Reserve Now" checkout modals with Stripe integration',
      'Dynamic menu inventory tracking backed by Spring Boot REST services',
      'Special requests & dietary restriction customization engine'
    ],
    architectureNotes: 'Built with optimized image lazy loading, responsive aspect ratios, and instant feedback animations for high-ticket cart interactions.',
    verifiedOutcome: 'Tripled online private table bookings and enabled smooth curbside gourmet ordering for VIP patrons.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    description: 'Modern, reactive single-page applications with pixel-perfect precision.',
    skills: [
      { name: 'Angular (16-18+)', level: 'Expert', experience: '3+ Years', badge: 'Core' },
      { name: 'TypeScript / JavaScript', level: 'Expert', experience: '4+ Years', badge: 'Core' },
      { name: 'RxJS & Signals', level: 'Advanced', experience: '3 Years' },
      { name: 'Tailwind CSS & PrimeNG', level: 'Expert', experience: '3 Years' },
      { name: 'HTML5 / CSS3 / SCSS', level: 'Expert', experience: '4+ Years' },
      { name: 'Responsive UI/UX & Mobile-First', level: 'Expert', experience: '4+ Years' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'High-throughput, scalable backend architectures and secure microservices.',
    skills: [
      { name: 'Java & Spring Boot', level: 'Expert', experience: '3+ Years', badge: 'Core' },
      { name: 'C# & .NET / .NET Core', level: 'Advanced', experience: '2+ Years', badge: 'Core' },
      { name: 'RESTful API Architecture', level: 'Expert', experience: '4+ Years' },
      { name: 'Microservices & JWT Security', level: 'Advanced', experience: '2+ Years' },
      { name: 'Stripe & PayPal Integration', level: 'Advanced', experience: '2 Years', badge: 'Payment' }
    ]
  },
  {
    title: 'Databases & Cloud',
    description: 'Reliable data modeling, query optimization, and CI/CD pipelines.',
    skills: [
      { name: 'MySQL & PostgreSQL', level: 'Advanced', experience: '3+ Years' },
      { name: 'Microsoft SQL Server', level: 'Advanced', experience: '2 Years' },
      { name: 'Git, GitHub, GitLab', level: 'Expert', experience: '4+ Years' },
      { name: 'Azure DevOps & Agile/Scrum', level: 'Advanced', experience: '2+ Years' },
      { name: 'Unit Testing & Clean Code', level: 'Advanced', experience: '3 Years' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    subtitle: 'From Database to Pixel-Perfect Frontend',
    icon: 'code',
    description: 'Complete web applications built with Angular on the frontend and Spring Boot or .NET on the backend. Fast, scalable, and easy to maintain.',
    deliverables: ['Custom Angular SPA', 'Secure REST API Endpoints', 'Database Schema & Migrations', 'Deployment & CI/CD Setup'],
    techUsed: ['Angular 18', 'Spring Boot', '.NET 8', 'MySQL / PostgreSQL']
  },
  {
    id: 'landing',
    title: 'High-Converting Landing Pages',
    subtitle: 'Turn Visitors into Paying Customers',
    icon: 'layout',
    description: 'Stunning, lightning-fast landing platforms for gyms, clinics, law firms, and SaaS businesses. Built to generate leads and boost revenue.',
    deliverables: ['Mobile-Optimized Design', 'Conversion-Focused Layout', 'Lead Capture Forms', 'Speed Optimization (<1s load)'],
    techUsed: ['Angular', 'Tailwind CSS', 'Micro-Animations', 'SEO Best Practices']
  },
  {
    id: 'payment',
    title: 'Payment & API Integrations',
    subtitle: 'Automated Monetization & Workflows',
    icon: 'credit-card',
    description: 'Seamless integration of Stripe, PayPal, booking calendars, and third-party APIs with webhook handling and automated reconciliation.',
    deliverables: ['Stripe Checkout & Subscriptions', 'PayPal Smart Buttons', 'Webhook Event Listeners', 'Invoice & Receipt Generation'],
    techUsed: ['Stripe API', 'PayPal SDK', 'JWT Auth', 'Webhooks']
  },
  {
    id: 'modernization',
    title: 'Legacy App Modernization',
    subtitle: 'Revamp Outdated Codebases',
    icon: 'refresh-cw',
    description: 'Migrating legacy apps to modern Angular versions, optimizing slow SQL queries, or refactoring monoliths into modular services.',
    deliverables: ['Angular Upgrade', 'Performance Auditing', 'State Management Cleanup', 'Unit Test Coverage'],
    techUsed: ['Angular Migrations', 'RxJS Refactoring', 'API Optimization']
  }
];
