import { type ProjectMap, type SiteContent } from "../types";

type ProjectSlug = Extract<
  keyof typeof import("./en").default.projects,
  string
>;

const home = {
  profile: {
    tocLabel: "名片",
    name: "Mike Ski",
    avatarAlt: "Mike Ski 头像",
    roles: ["独立开发者", "全栈工程师", "开源贡献者"],
  },
  about: {
    tocLabel: "介绍",
    greeting:
      "嗨，我是 Mike Ski，一名全栈开发者。我专注于构建简洁、现代且高性能的 Web 应用，从系统架构到界面体验都追求高质量。",
    school: {
      name: "张家界学院",
      major: "计算机科学与技术",
      majorEnglish: "计算机专业学生",
    },
    status: "目前就读于计算机科学与技术专业，正在寻找前端 / 全栈开发实习机会。",
    badges: [
      { id: "open-to-work", label: "求职中", icon: "briefcase" },
      { id: "undergraduate", label: "本科在读", icon: "school" },
      { id: "full-stack", label: "全栈开发者", icon: "code" },
      { id: "open-source", label: "开源贡献者", icon: "star" },
      { id: "indie-hacker", label: "独立开发者", icon: "rocket" },
      { id: "fast-learner", label: "学习能力强", icon: "bolt" },
      { id: "coffee-driven", label: "咖啡驱动", icon: "coffee" },
      { id: "night-coder", label: "夜猫程序员", icon: "moon" },
    ],
  },
  projects: {
    tocLabel: "项目",
    title: "项目",
    viewDetailsLabel: "查看详情",
  },
  github: {
    tocLabel: "GitHub",
    title: "GitHub 活跃度",
    totalTemplate: "{year} 年共 {count} 次贡献",
    activityTemplate: "{date} 共 {count} 次贡献",
    legend: {
      less: "少",
      more: "多",
    },
    weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  },
  experiences: {
    tocLabel: "经历",
    title: "经历",
    items: [
      {
        id: "shanghai-byte-intern",
        organization: "上海青流科技有限公司",
        role: "前端开发实习生",
        employmentType: "实习",
        period: "2025年7月 - 2025年10月",
        location: "上海，中国 - 现场",
        logoText: "B",
        highlights: [
          "参与商家运营后台重构，使用 React + TypeScript 交付 12 个核心页面。",
          "落地表单与表格通用组件，减少重复代码并提升页面开发效率。",
          "与产品和测试协作推进灰度上线，修复线上反馈并持续优化交互细节。",
        ],
      },
      {
        id: "shenzhen-commerce-intern",
        organization: "深圳云舟电商技术有限公司",
        role: "全栈开发实习生",
        employmentType: "实习",
        period: "2025年11月 - 2026年2月",
        location: "深圳，中国 - 混合办公",
        logoText: "S",
        highlights: [
          "负责活动报名与数据看板模块，完成前后端联调并支持高峰期稳定运行。",
          "基于 Node.js 与 PostgreSQL 设计接口与查询方案，缩短关键接口响应时间。",
          "补充关键路径自动化测试与埋点监控，提升问题定位速度和发布信心。",
        ],
      },
      {
        id: "hangzhou-cloud-engineer",
        organization: "杭州辰星云计算有限公司",
        role: "前端工程师",
        employmentType: "全职",
        period: "2026年3月 - 至今",
        location: "杭州，中国 - 远程 / 现场",
        logoText: "H",
        highlights: [
          "主导企业级控制台体验升级，统一设计规范并推动跨团队组件复用。",
          "优化复杂数据页面渲染性能，在高数据量场景下提升首屏和交互响应速度。",
          "制定前端发布与回滚流程，降低线上故障影响并提升迭代稳定性。",
        ],
      },
    ],
  },
  skills: {
    tocLabel: "技能",
    title: "技能与技术栈",
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
    tocLabel: "近况",
    title: "近况",
    items: [
      {
        id: "shipping",
        title: "正在打磨个人主页",
        description:
          "把项目、经历和联系方式整理成一个更清晰的入口，让来访者能快速了解我正在构建什么。",
        badge: "迭代中",
        icon: "code-dots",
      },
      {
        id: "learning",
        title: "持续学习现代 Web 工程",
        description:
          "重点关注 React、TypeScript、动画交互、服务端能力和工程化体验，边做项目边沉淀方法。",
        badge: "学习中",
        icon: "book",
      },
      {
        id: "direction",
        title: "寻找前端 / 全栈实习机会",
        description:
          "希望加入重视产品体验与工程质量的团队，参与真实业务场景并承担可交付的功能模块。",
        badge: "开放沟通",
        icon: "target",
      },
    ],
  },
  resume: {
    tocLabel: "简历",
    title: "简历",
    badges: {
      available: "实习机会开放",
      updated: "2026 春季更新",
    },
    heading: "一页简历，方便快速了解我",
    description:
      "这里放了一份可下载的简历草稿，适合先快速浏览我的方向、技术栈和联系方式。",
    downloadLabel: "下载简历",
    copyEmailLabel: "复制邮箱",
    emailCopiedLabel: "已复制",
  },
  newsletter: {
    tocLabel: "订阅",
    title: "订阅通讯",
    formLabel: "订阅通讯表单",
    emailLabel: "邮箱地址",
    placeholder: "输入你的邮箱",
    submitLabel: "订阅",
    successMessage: "已记录，感谢订阅。",
    errors: {
      required: "请输入邮箱地址。",
      invalid: "请输入有效的邮箱地址。",
    },
  },
  introduction: {
    tocLabel: "引言",
    quote: "把复杂问题拆成清晰路径，把每一次练习都做成可以交付的作品。",
    author: "Mike Ski",
  },
} satisfies SiteContent["home"];

const projects: ProjectMap<ProjectSlug> = {
  "nextjs-authentication-scaffold": {
    slug: "nextjs-authentication-scaffold",
    cover: "/images/projects/nextjs-authentication-scaffold.webp",
    name: "Next.js-Authentication-Scaffold",
    summary:
      "一个功能完整、模块化的 Next.js 认证系统脚手架，支持邮箱/手机 OTP、Passkey 生物认证与钱包连接。",
    intro:
      "一个功能完整、模块化的 Next.js 认证系统脚手架，集成多种现代认证方式，包括邮箱/手机 OTP、Passkey 生物识别与钱包连接。",
    detail:
      "项目基于 Next.js 16、React 19、TypeScript、Prisma 与 PostgreSQL 构建，可作为生产级应用快速接入安全且可扩展认证流程的起点。",
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
      "基于深度图与 GLSL 的人脸粒子重建实验，支持多人脸插值切换与噪声驱动形变。",
    intro:
      "项目将人像的颜色图与深度图重建为高密度粒子点云，并通过自定义顶点/片元着色器实现动态过渡。在多张人脸之间切换时，粒子分布和明暗保持连续，减少突兀跳变。",
    detail:
      "核心由 React Three Fiber、Three.js 与 GSAP 驱动，使用 280x280（78,400）粒子进行渲染，包含景深衰减、curl noise 流场、vortex 旋涡参数以及 Leva 实时调参，便于快速进行视觉迭代。",
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
};

const ui = {
  common: {
    copy: "复制",
    copied: "已复制",
    backToTop: "回到顶部",
    status: {
      building: "开发中",
      online: "已上线",
      beta: "内测中",
      concept: "概念阶段",
    },
    links: {
      github: "GitHub",
      readme: "README",
      issues: "Issues",
      demo: "演示",
      website: "官网",
    },
  },
  projectDetail: {
    title: "项目",
    tabsLabel: "项目详情分区",
    tabs: {
      overview: "概览",
      readme: "README",
      website: "仓库",
    },
    cloneProtocols: {
      https: "HTTPS",
      ssh: "SSH",
      cli: "GitHub CLI",
    },
    stackTitle: "技术栈",
    readmeEnterFullscreen: "展开 README",
    readmeExitFullscreen: "收起 README",
    readmeLoading: "正在加载 README...",
    readmeError: "README 加载失败。",
    cloneDescription: "使用当前选中的命令克隆这个仓库。",
    downloadZip: "下载 ZIP",
    websiteUnavailable: "仓库链接不可用。",
  },
  settings: {
    buttonAria: "打开设置菜单",
    menuLabel: "设置",
    themeLabel: "主题",
    dividerLabel: "分割线",
    languageLabel: "语言",
    dividerPresets: "选择样式",
    themeOptions: {
      light: "浅色",
      dark: "深色",
    },
    dividerOptions: {
      "double-solid": "双实线",
      "single-dashed": "单虚线",
      "soft-fade": "柔光渐隐",
      "dot-chain": "点阵链线",
      hairline: "极细线",
      "dash-dot": "点划线",
      "center-glow": "中心微光",
      "woven-grid": "编织网格",
    },
    languageOptions: {
      "en-US": "英文",
      "zh-CN": "中文",
    },
  },
  notFound: {
    eyebrow: "页面未找到",
    description: "你要找的页面悄悄溜走了。这里没有出错，只是它暂时不在这里。",
  },
  errorBoundary: {
    oops: "出了点问题",
    unexpectedDescription: "发生了一个意外错误。",
    errorTitle: "错误",
    notFoundDescription: "你请求的页面不存在。",
  },
  scrollAnchor: {
    label: "首页模块导航",
    title: "本页目录",
  },
  actions: {
    sendEmail: "发送邮件",
    reserve: "预约沟通",
    accountPrefix: "这里是我的",
    accountHighlight: "社交账号",
  },
} satisfies SiteContent["ui"];

const content = {
  home,
  projects,
  ui,
} satisfies SiteContent<ProjectSlug>;

export default content;
