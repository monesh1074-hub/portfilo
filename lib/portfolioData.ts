export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'full-stack' | 'ai-hackathon' | 'e-commerce' | 'internship' | 'client-work';
  categoryLabel: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  features: string[];
  highlights: string[];
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
  type: 'hackathon' | 'internship' | 'client' | 'project';
}

export const MONESH_BIO = {
  name: "Monesh",
  role: "Full-Stack & AI Software Engineer",
  tagline: "Building high-performance Next.js web applications, AI tools & sleek digital products.",
  location: "Tamil Nadu, India",
  email: "kamaleshmonesh908@gmail.com",
  github: "https://github.com/monesh1074-hub",
  linkedin: "https://www.linkedin.com/in/monesh908",
  about: "Passionate Full-Stack Developer specializing in Next.js 14, React 18, TypeScript, Node.js, and AI voice integrations. Experienced in delivering client-grade production web platforms, hackathon-winning AI tools, and responsive e-commerce & analytics platforms.",
  stats: [
    { label: "Deployed Apps", value: "6+" },
    { label: "Hackathons & AI Projects", value: "2+" },
    { label: "Tech Stack Mastery", value: "10+" },
    { label: "Code Quality & UX", value: "100%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "voicebill-hackathon",
    title: "VOICEBILL — AI Voice Billing Platform",
    subtitle: "Hackathon Project • AI-Powered Merchant Billing System",
    description: "An automated voice-driven billing platform built for merchants to transform spoken voice orders into structured instant receipts.",
    fullDescription: "VOICEBILL is an innovative hackathon project engineered to streamline retail checkout workflows. By leveraging natural language processing and speech recognition, it listens to merchant voice commands (e.g., 'Add 2 coffees and 1 sandwich') and dynamically constructs line-item invoices with live tax calculations and print/download receipts.",
    category: "ai-hackathon",
    categoryLabel: "AI & Hackathon",
    techStack: ["Next.js 14", "TypeScript", "AI Voice Recognition", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/monesh1074-hub/VOICEBILL-hackthon",
    liveUrl: "https://voicebill-hackthon-six.vercel.app",
    featured: true,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time voice-to-invoice processing for fast merchant checkouts",
      "Dynamic multi-item price lookup & automated tax calculations",
      "Printable & shareable PDF invoice generation",
      "Responsive merchant dashboard layout optimized for mobile & tablet",
      "Built with high-type-safety TypeScript and Next.js 14"
    ],
    highlights: ["Hackathon Project", "AI Voice Tech", "Next.js 14 & TypeScript", "Live Vercel Deployment"],
    stats: [
      { label: "Recognition Speed", value: "< 1.5s" },
      { label: "Accuracy", value: "98%" }
    ]
  },
  {
    id: "aaru-luxury-fashion",
    title: "AARU — Luxury Fashion E-Commerce",
    subtitle: "Full-Stack E-Commerce Storefront",
    description: "A premium luxury fashion e-commerce storefront with dynamic catalog browsing, collection filters, and reactive cart management.",
    fullDescription: "AARU Luxury Fashion is a high-end web application crafted with pure minimalist design principles. It features an fluid hero carousel, interactive lookbook grid, multi-attribute product filters (category, color, size, price range), reactive shopping cart, and seamless checkout flow.",
    category: "e-commerce",
    categoryLabel: "E-Commerce & Retail",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Context API", "Vercel"],
    githubUrl: "https://github.com/monesh1074-hub/aaru-luxury-fashion",
    liveUrl: "https://aaru-luxury-fashion.vercel.app",
    featured: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Editorial luxury typography & glassmorphic UI design system",
      "Interactive product collection filter by price, style & availability",
      "Persistent cart state management with real-time total calculator",
      "High-resolution image gallery with smooth lightbox view",
      "Fully responsive across 375px mobile up to 4K desktop screens"
    ],
    highlights: ["Luxury UI/UX", "TypeScript & React", "E-Commerce State", "Deployed on Vercel"],
    stats: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Product Types", value: "50+" }
    ]
  },
  {
    id: "murfalcon-ai",
    title: "Murfalcon AI — Intelligent Assistant Platform",
    subtitle: "AI Workspace & Generative Assistant Tool",
    description: "Full-stack AI workspace platform offering conversational prompt engineering, text synthesis, and automated task execution.",
    fullDescription: "Murfalcon AI is a web-based AI workspace application designed for seamless prompt interaction, content generation, and smart workflow automation. Features streaming response UI, conversation history management, custom prompt presets, and robust backend API integrations.",
    category: "ai-hackathon",
    categoryLabel: "AI Platform",
    techStack: ["JavaScript", "Node.js", "Express", "AI Integration", "Render"],
    githubUrl: "https://github.com/monesh1074-hub/murfalcon-ai",
    liveUrl: "https://murfalcon-ai-3.onrender.com/",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Conversational AI workspace with real-time prompt streaming",
      "Custom prompt library & category presets for coding & writing",
      "Persistent session state and prompt history management",
      "Full-stack Node.js + Express backend service deployed on Render",
      "Clean dark-theme interface with syntax-highlighted code outputs"
    ],
    highlights: ["Full-Stack AI App", "Node.js & Express", "Render Deployment", "Prompt Automation"],
    stats: [
      { label: "Backend Latency", value: "< 200ms" },
      { label: "Deployment", value: "Render Cloud" }
    ]
  },
  {
    id: "kalai-decorators-client",
    title: "Kalai Decorators — Client Showcase Platform",
    subtitle: "Production Client Web Application • 27+ Yrs Event Staging Showcase",
    description: "Production web platform built for a premier stage design & Kollywood film set company, featuring interactive portfolio galleries.",
    fullDescription: "An production client web platform built for Kalai Decorators, a 27-year veteran in mega political rallies and Kollywood blockbuster cinema sets (Vikram, Master, Leo, Kaithi). Incorporates multi-category photo albums, client testimonial showcase, interactive booking enquiry form, and founder spotlight.",
    category: "client-work",
    categoryLabel: "Client Production App",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
    githubUrl: "https://github.com/monesh1074-hub/client1",
    liveUrl: "https://client1-beta-mauve.vercel.app",
    featured: true,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-category event gallery (Political, Cinema Sets, Weddings, Temple Festivals)",
      "High-resolution 100+ photo album modal viewer with keyboard navigation",
      "Interactive enquiry form with direct email & WhatsApp routing",
      "Founding story spotlight and celebrity milestone achievements",
      "SEO-optimized Next.js architecture with instant load speeds"
    ],
    highlights: ["Real Client Project", "Kollywood Cinema Showcase", "Next.js 14", "Vercel Deployed"],
    stats: [
      { label: "Gallery Photos", value: "100+" },
      { label: "Client History", value: "27 Years" }
    ]
  },
  {
    id: "airbnb-clone-internship",
    title: "Airbnb Web App Clone",
    subtitle: "Software Engineering Internship Project",
    description: "Full-featured Airbnb web application clone built during internship, featuring property listing feeds, search filters & booking UI.",
    fullDescription: "A comprehensive replica of the Airbnb web application developed as an internship capstone project. Includes dynamic property card grids, category navigation filters (Beachfront, Cabins, Iconic Cities), interactive property details view, reservation modal, and responsive mobile-first UI.",
    category: "internship",
    categoryLabel: "Internship Project",
    techStack: ["JavaScript", "React", "CSS3", "REST APIs", "Vercel"],
    githubUrl: "https://github.com/monesh1074-hub/Airbnb-clone-internship",
    liveUrl: "https://airbnb-clone-internship.vercel.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Property listing card layout with pricing & rating indicators",
      "Interactive location search & category filter bar",
      "Detailed property view with photo grid and amenities list",
      "Responsive layout mirroring authentic Airbnb web experience",
      "Deployed live on Vercel with clean code structure"
    ],
    highlights: ["Internship Capstone", "React & REST API", "Property Booking UI", "Vercel Live"],
    stats: [
      { label: "Component Count", value: "15+" },
      { label: "Platform", value: "Vercel" }
    ]
  },
  {
    id: "dashboard-internship",
    title: "Analytics & Management Dashboard",
    subtitle: "Software Engineering Internship Project",
    description: "Interactive metrics dashboard with data visual charts, real-time KPI stat cards, and administrative control tools.",
    fullDescription: "An enterprise-style admin and analytics management dashboard built during internship. Features interactive chart widgets, revenue/user metric stat cards, data tables with search & sorting, user role management, and dark/light UI theme support.",
    category: "internship",
    categoryLabel: "Internship Project",
    techStack: ["JavaScript", "React", "Chart.js", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/monesh1074-hub/Dashboard-Internship",
    liveUrl: "https://dashboard-beta-taupe-24.vercel.app",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Interactive data visualizations & metric charts",
      "KPI summary cards with trend percentage indicators",
      "Searchable data table with sortable columns & pagination",
      "Clean dark obsidian dashboard design system",
      "Deployed live on Vercel"
    ],
    highlights: ["Internship Project", "Data Visualizations", "Admin Dashboard", "Vercel Live"],
    stats: [
      { label: "Chart Modules", value: "6+" },
      { label: "Response", value: "< 100ms" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "Next.js 14 / App Router", level: 95, highlight: true },
      { name: "React.js / React 18", level: 95, highlight: true },
      { name: "TypeScript", level: 92, highlight: true },
      { name: "JavaScript (ES6+)", level: 95, highlight: true },
      { name: "Tailwind CSS & Modern CSS", level: 95, highlight: true },
      { name: "HTML5 / Semantic Web", level: 98 }
    ]
  },
  {
    title: "Backend & AI Technologies",
    icon: "Cpu",
    skills: [
      { name: "Node.js", level: 88, highlight: true },
      { name: "Express.js", level: 85 },
      { name: "AI API Integration & Speech Processing", level: 90, highlight: true },
      { name: "RESTful APIs", level: 92 },
      { name: "JSON Data Architectures", level: 95 }
    ]
  },
  {
    title: "Tools, Cloud & Deployment",
    icon: "Cloud",
    skills: [
      { name: "Vercel Cloud Deployment", level: 98, highlight: true },
      { name: "Render Cloud Hosting", level: 90 },
      { name: "Git & GitHub Version Control", level: 95, highlight: true },
      { name: "Next.js Build Tooling & Turbopack", level: 92 },
      { name: "Postman & API Testing", level: 90 }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-voicebill",
    period: "2026",
    role: "Lead Developer & Architect",
    company: "VOICEBILL — AI Hackathon",
    location: "Tamil Nadu, India",
    description: "Conceived and engineered an automated AI voice billing web application that converts spoken merchant orders into structured invoices with real-time calculation.",
    achievements: [
      "Built complete Next.js 14 + TypeScript architecture from scratch",
      "Integrated speech recognition and automatic tax/line-item calculation",
      "Deployed live on Vercel for instant merchant testing"
    ],
    skillsUsed: ["Next.js 14", "TypeScript", "AI Voice Tech", "Tailwind CSS", "Vercel"],
    type: "hackathon"
  },
  {
    id: "exp-client1",
    period: "2026",
    role: "Full-Stack Web Developer",
    company: "Kalai Decorators Showcase Platform",
    location: "Chennai, Tamil Nadu",
    description: "Designed and built a client-grade showcase platform for a 27-year mega event staging company featuring 100+ photo gallery albums and booking system.",
    achievements: [
      "Engineered multi-category album modal viewer and interactive lead booking form",
      "Achieved 95+ performance lighthouse score with optimized media assets",
      "Successfully deployed client site live on Vercel"
    ],
    skillsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "client"
  },
  {
    id: "exp-internship",
    period: "2026",
    role: "Software Engineering Intern",
    company: "Frontend & Web Development Internship",
    location: "India",
    description: "Developed complex frontend applications including an Airbnb clone web app and an interactive administrative analytics dashboard.",
    achievements: [
      "Constructed modular React components and responsive UI design systems",
      "Integrated chart data visualization widgets and interactive listing filters",
      "Published production builds to Vercel"
    ],
    skillsUsed: ["React", "JavaScript", "Chart.js", "Tailwind CSS", "REST APIs"],
    type: "internship"
  }
];
