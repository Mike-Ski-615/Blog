import { defineProjects, type SiteContent } from "../types";

const home = {
  profile: {
    tocLabel: "Profile",
    name: "Mike Ski",
    avatarAlt: "Mike Ski avatar",
    roles: ["Indie Hacker", "Full Stack Engineer", "Open Source Contributor"],
  },
  about: {
    tocLabel: "About",
    greeting:
      "Hi, I'm Mike Ski, a full-stack developer. I focus on building clean, modern, and high-performance web applications, with attention to system architecture and user interface experience.",
    school: {
      name: "Zhangjiajie University",
      major: "Computer Science and Technology",
      majorEnglish: "Computer Science Student",
    },
    status:
      "Currently studying Computer Science and Technology, seeking front-end / full-stack internship opportunities.",
    badges: [
      { id: "open-to-work", label: "Open to Work", icon: "briefcase" },
      { id: "undergraduate", label: "Undergraduate", icon: "school" },
      { id: "full-stack", label: "Full Stack Developer", icon: "code" },
      { id: "open-source", label: "Open Source Contributor", icon: "star" },
      { id: "indie-hacker", label: "Indie Hacker", icon: "rocket" },
      { id: "fast-learner", label: "Fast Learner", icon: "bolt" },
      { id: "coffee-driven", label: "Coffee Driven", icon: "coffee" },
      { id: "night-coder", label: "Night Coder", icon: "moon" },
    ],
  },
  projects: {
    tocLabel: "Projects",
    title: "Projects",
    viewDetailsLabel: "View details",
  },
  github: {
    tocLabel: "GitHub",
    title: "GitHub Activity",
    totalTemplate: "{count} contributions in {year}",
    activityTemplate: "{count} contributions on {date}",
    legend: {
      less: "Less",
      more: "More",
    },
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
  experiences: {
    tocLabel: "Experience",
    title: "Experiences",
    items: [
      {
        id: "shanghai-byte-intern",
        organization: "Shanghai Qingliu Technology Co., Ltd.",
        role: "Frontend Engineering Intern",
        employmentType: "Internship",
        period: "Jul, 2025 - Oct, 2025",
        location: "Shanghai, China - On-site",
        logoText: "B",
        highlights: [
          "Contributed to an operations dashboard rebuild and shipped 12 core pages with React and TypeScript.",
          "Built reusable form and table components to reduce duplicate implementation work.",
          "Worked with product and QA during staged rollout, fixing production feedback quickly.",
        ],
      },
      {
        id: "shenzhen-commerce-intern",
        organization: "Shenzhen Yunzhou E-commerce Technology Co., Ltd.",
        role: "Full-stack Engineering Intern",
        employmentType: "Internship",
        period: "Nov, 2025 - Feb, 2026",
        location: "Shenzhen, China - Hybrid",
        logoText: "S",
        highlights: [
          "Owned campaign signup and analytics dashboard modules and delivered stable peak-period support.",
          "Designed Node.js and PostgreSQL APIs and query flows that reduced key endpoint response time.",
          "Added automation tests and monitoring for critical paths to speed up incident diagnosis.",
        ],
      },
      {
        id: "hangzhou-cloud-engineer",
        organization: "Hangzhou Chenxing Cloud Computing Co., Ltd.",
        role: "Frontend Engineer",
        employmentType: "Full Time",
        period: "Mar, 2026 - Present",
        location: "Hangzhou, China - Remote / On-site",
        logoText: "H",
        highlights: [
          "Led a console UX upgrade by unifying design standards and cross-team component reuse.",
          "Optimized rendering performance on data-heavy pages to improve initial load and interaction responsiveness.",
          "Established frontend release and rollback workflows that improved deployment reliability.",
        ],
      },
    ],
  },
  skills: {
    tocLabel: "Skills",
    title: "Skills & Technologies",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma", icon: "prisma" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Rust", icon: "rust" },
      { name: "Python", icon: "python" },
      { name: "Three.js", icon: "threejs" },
      { name: "Vite", icon: "vite" },
      { name: "Vue.js", icon: "vue" },
      { name: "Radix UI", icon: "radix" },
      { name: "Docker", icon: "docker" },
      { name: "Shadcn UI" },
      { name: "Motion" },
      { name: "GSAP" },
      { name: "PostgreSQL" },
      { name: "Bun" },
      { name: "tRPC" },
      { name: "pnpm" },
      { name: "eslint" },
    ],
  },
  now: {
    tocLabel: "Now",
    title: "Now",
    items: [
      {
        id: "shipping",
        title: "Refining this personal site",
        description:
          "Turning projects, experience, and contact paths into a clearer home base for people who want to understand what I am building.",
        badge: "Iterating",
        icon: "code-dots",
      },
      {
        id: "learning",
        title: "Deepening modern web engineering",
        description:
          "Focused on React, TypeScript, motion, server-side capabilities, and developer experience while turning practice into reusable patterns.",
        badge: "Learning",
        icon: "book",
      },
      {
        id: "direction",
        title: "Looking for front-end / full-stack internships",
        description:
          "Hoping to join a team that cares about product experience and engineering quality, with room to own shippable features.",
        badge: "Open",
        icon: "target",
      },
    ],
  },
  resume: {
    tocLabel: "Resume",
    title: "Resume",
    badges: {
      available: "Open to internships",
      updated: "Spring 2026 update",
    },
    heading: "A one-page snapshot for quick context",
    description:
      "This downloadable draft gives a quick look at my direction, stack, and contact path before a deeper conversation.",
    downloadLabel: "Download resume",
    copyEmailLabel: "Copy email",
    emailCopiedLabel: "Copied",
  },
  newsletter: {
    tocLabel: "Newsletter",
    title: "Newsletter",
    formLabel: "Newsletter signup form",
    emailLabel: "Email address",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    successMessage: "You're on the list. Thanks for subscribing.",
    errors: {
      required: "Please enter your email address.",
      invalid: "Please enter a valid email address.",
    },
  },
  introduction: {
    tocLabel: "Introduction",
    quote:
      "Turn complex problems into clear paths, and make every round of practice something worth shipping.",
    author: "Mike Ski",
  },
} satisfies SiteContent["home"];

const projects = defineProjects({
  "nextjs-authentication-scaffold": {
    slug: "nextjs-authentication-scaffold",
    cover: "/images/projects/nextjs-authentication-scaffold.webp",
    name: "Next.js-Authentication-Scaffold",
    summary:
      "A full-featured, modular Next.js authentication system scaffold with Email/Phone OTP, passkeys, and wallet connections.",
    intro:
      "A full-featured, modular Next.js authentication system scaffold with multiple modern authentication methods including Email/Phone OTP, Passkey biometrics, and wallet connections.",
    detail:
      "Built with Next.js 16, React 19, TypeScript, Prisma, and PostgreSQL, this scaffold provides a practical starting point for secure, extensible authentication flows in production apps.",
    status: "online",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Prisma 7",
      "PostgreSQL",
      "Prisma Migrate",
      "Tailwind CSS 4",
      "Shadcn UI",
      "Radix UI",
      "Motion",
      "Tabler Icons",
      "React Hook Form",
      "Zod",
      "Input OTP",
      "Jose",
      "WebAuthn",
      "Server-only",
      "ESLint",
      "Prettier",
    ],
    links: {
      github: "https://github.com/Mike-Ski-615/Next.js-Authentication-Scaffold",
      readme:
        "https://github.com/Mike-Ski-615/Next.js-Authentication-Scaffold#readme",
      issues:
        "https://github.com/Mike-Ski-615/Next.js-Authentication-Scaffold/issues",
    },
  },
  "three-d-face-particles": {
    slug: "three-d-face-particles",
    cover: "/images/projects/3d-face.webp",
    name: "3D Face Particles",
    summary:
      "A GPU particle-face experiment driven by depth maps, shader noise fields, and smooth face-to-face morph transitions.",
    intro:
      "This project reconstructs portrait depth textures into a dense point cloud and animates them with custom GLSL vertex/fragment shaders. It blends between multiple faces over time and preserves visual continuity during transitions.",
    detail:
      "Built with React Three Fiber, Three.js, and GSAP, it renders 78,400 particles (280x280) with DOF shading, curl-noise deformation, vortex controls, and live parameter tuning via Leva for rapid art-direction.",
    status: "online",
    stack: [
      "React 19",
      "TypeScript 5",
      "Three.js",
      "@react-three/fiber",
      "@react-three/drei",
      "GLSL",
      "GSAP",
      "maath",
      "Leva",
      "Vite 8",
    ],
    links: {
      github: "https://github.com/Mike-Ski-615/3D-Face",
      readme: "https://github.com/Mike-Ski-615/3D-Face#readme",
      issues: "https://github.com/Mike-Ski-615/3D-Face/issues",
    },
  },
});

const ui = {
  common: {
    copy: "Copy",
    copied: "Copied",
    backToTop: "Back to top",
    status: {
      building: "Building",
      online: "Online",
      beta: "Beta",
      concept: "Concept",
    },
    links: {
      github: "GitHub",
      readme: "README",
      issues: "Issues",
      demo: "Demo",
      website: "Website",
    },
  },
  projectDetail: {
    title: "Projects",
    tabsLabel: "Project detail sections",
    tabs: {
      overview: "Overview",
      readme: "README",
      website: "Repository",
    },
    cloneProtocols: {
      https: "HTTPS",
      ssh: "SSH",
      cli: "GitHub CLI",
    },
    stackTitle: "Stack used",
    readmeEnterFullscreen: "Expand README",
    readmeExitFullscreen: "Collapse README",
    readmeLoading: "Loading README...",
    readmeError: "README could not be loaded.",
    cloneDescription: "Clone this repository with the selected command.",
    downloadZip: "Download ZIP",
    websiteUnavailable: "Repository links are not available.",
  },
  settings: {
    buttonAria: "Open settings menu",
    menuLabel: "Settings",
    themeLabel: "Theme",
    dividerLabel: "Dividers",
    languageLabel: "Language",
    dividerPresets: "Choose a style",
    themeOptions: {
      light: "Light",
      dark: "Dark",
    },
    dividerOptions: {
      "double-solid": "Double solid",
      "single-dashed": "Single dashed",
      "soft-fade": "Soft fade",
      "dot-chain": "Dot chain",
      hairline: "Hairline",
      "dash-dot": "Dash dot",
      "center-glow": "Center glow",
      "woven-grid": "Woven grid",
    },
    languageOptions: {
      "en-US": "English",
      "zh-CN": "Chinese",
    },
  },
  notFound: {
    eyebrow: "Page Not Found",
    description:
      "The page you were looking for slipped away quietly. Nothing is broken, it just is not here right now.",
  },
  errorBoundary: {
    oops: "Oops!",
    unexpectedDescription: "An unexpected error occurred.",
    errorTitle: "Error",
    notFoundDescription: "The requested page could not be found.",
  },
  scrollAnchor: {
    label: "Home section navigation",
    title: "On this page",
  },
  actions: {
    sendEmail: "Send an email",
    reserve: "Book an intro call",
    accountPrefix: "Here are my",
    accountHighlight: "socials",
  },
} satisfies SiteContent["ui"];

const content = {
  home,
  projects,
  ui,
} satisfies SiteContent;

export default content;
