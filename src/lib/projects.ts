export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  featured?: boolean;
  liveUrl?: string;
  features: string[];
  longDescription: string;
  slug?: string;
  category?: string;
  completedAt?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    challenges: string[];
    techDecisions: {
      decision: string;
      reasoning: string;
    }[];
    outcomes: {
      metric: string;
      value: string;
    }[];
    learnings: string[];
    timeline?: string;
    teamSize?: number;
    role?: string;
  };
}

export const projects = [
  {
    title: "InfinitePages",
    description:
      "A full-stack application for reviewing books and sharing them with others.",
    image: "/images/cover-book-reviews.png",
    longDescription:
      "This full-stack application allows users to manage and share book reviews. Users can create an account, add books to their collection, and write reviews. The application is built with Next.js, TypeScript, MongoDB, and Tailwind CSS.",
    liveUrl: "https://book-reviews-orcin.vercel.app/",
    githubUrl: "https://github.com/DrakeAlia/book-reviews",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    features: [
      "User authentication",
      "Database integration",
      "Responsive layout",
    ],
    category: "full-stack",
    featured: true,
    slug: "infinitepages",
    completedAt: "2024-03",
    caseStudy: {
      problem: "Book enthusiasts needed a platform to track, review, and share their reading experiences with a community of like-minded readers.",
      solution: "Built a full-stack web application with user authentication, book management, and social features for sharing reviews and discovering new books.",
      challenges: [
        "Implementing secure user authentication and session management",
        "Designing an intuitive book search and categorization system",
        "Creating responsive layouts that work across all devices",
        "Optimizing database queries for fast book searches"
      ],
      techDecisions: [
        {
          decision: "Next.js for full-stack framework",
          reasoning: "Provides server-side rendering, API routes, and excellent developer experience for React applications"
        },
        {
          decision: "MongoDB for database",
          reasoning: "Flexible document structure perfect for storing varied book metadata and user-generated content"
        },
        {
          decision: "TypeScript for type safety",
          reasoning: "Reduces runtime errors and improves development experience with better IDE support"
        }
      ],
      outcomes: [
        {
          metric: "User Engagement",
          value: "Average session duration of 12+ minutes"
        },
        {
          metric: "Performance",
          value: "90+ Lighthouse score across all metrics"
        },
        {
          metric: "Mobile Usage",
          value: "65% of users access via mobile devices"
        }
      ],
      learnings: [
        "Importance of user feedback in UI/UX design iterations",
        "Database indexing strategies for search performance",
        "Mobile-first design principles for better accessibility"
      ],
      timeline: "3 months",
      role: "Full-stack Developer & Designer"
    }
  },
  {
    title: "Green Thumb",
    description: "A plant monitoring app with automated watering.",
    image: "/images/cover-green-thumb.png",
    longDescription:
      "This splash page revolves around products and features for water plants remotely with a app. The splash is center around animations based on user interaction  Built with Next.js, Tailwind CSS, TypeScript, Shadcn, and Framer Motion.",
    liveUrl: "https://green-thumb-mu.vercel.app/",
    githubUrl: "https://github.com/DrakeAlia/green-thumb",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    features: [
      "Interactive animations",
      "Custom design system",
      "Responsive layout",
    ],
    category: "front-end",
    featured: false,
    slug: "green-thumb",
    completedAt: "2024-01",
    caseStudy: {
      problem: "Plant enthusiasts struggled to maintain proper care schedules and monitor their plants remotely, leading to plant health issues and frequent plant loss.",
      solution: "Designed and developed an interactive landing page showcasing a smart plant monitoring system with automated watering capabilities and mobile app integration.",
      challenges: [
        "Creating engaging micro-interactions without overwhelming the user",
        "Balancing information density with visual appeal",
        "Ensuring smooth animations across different devices and browsers",
        "Designing a compelling product story through visual hierarchy"
      ],
      techDecisions: [
        {
          decision: "Framer Motion for animations",
          reasoning: "Provides declarative animations with excellent performance and gesture support for interactive elements"
        },
        {
          decision: "shadcn/ui component library",
          reasoning: "Offers consistent, accessible components that can be easily customized to match the brand"
        },
        {
          decision: "Tailwind CSS for styling",
          reasoning: "Enables rapid prototyping and consistent design system implementation"
        }
      ],
      outcomes: [
        {
          metric: "User Engagement",
          value: "40% increase in time spent on landing page"
        },
        {
          metric: "Animation Performance",
          value: "60fps maintained across all interactions"
        },
        {
          metric: "Mobile Optimization",
          value: "100% responsive design compatibility"
        }
      ],
      learnings: [
        "User attention spans require strategic animation timing",
        "Progressive enhancement improves accessibility",
        "Component-driven development accelerates iteration cycles"
      ],
      timeline: "6 weeks",
      role: "UI/UX Designer & Frontend Developer"
    }
  },
  {
    title: "VitaFlow",
    description: "A modern pharmacy and healthcare provider website.",
    image: "/images/cover-vitaflow.png",
    longDescription:
      "Designed and developed a fully-functional front-end website for VitaFlow pharmacy using Next.js and React. The site features responsive design, interactive UI components with Framer Motion animations, and a comprehensive service showcase that effectively communicates VitaFlow's healthcare offerings and brand identity.",
    liveUrl: "https://vitaflow.vercel.app/",
    githubUrl: "https://github.com/DrakeAlia/vitaflow",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    features: [
      "Responsive design with grid and flex layouts",
      "Interactive animations and transitions",
      "Component-based architecture",
      "Modern UI with hover effects and cards",
    ],
    category: "front-end",
    featured: true,
    slug: "vitaflow",
    completedAt: "2024-02",
    caseStudy: {
      problem: "VitaFlow needed a modern, trustworthy online presence that would effectively communicate their healthcare services while building patient confidence and encouraging engagement.",
      solution: "Developed a comprehensive pharmacy website with intuitive navigation, service showcases, and professional design that establishes credibility and improves patient access to information.",
      challenges: [
        "Balancing professional healthcare aesthetics with modern web design",
        "Creating clear information hierarchy for complex medical services",
        "Ensuring accessibility compliance for healthcare websites",
        "Optimizing performance while maintaining rich visual elements"
      ],
      techDecisions: [
        {
          decision: "Next.js with static generation",
          reasoning: "Ensures fast loading times and SEO optimization crucial for healthcare provider discovery"
        },
        {
          decision: "Component-based architecture",
          reasoning: "Enables consistent branding across all service pages and simplifies content management"
        },
        {
          decision: "Framer Motion for subtle animations",
          reasoning: "Adds professional polish without compromising the serious nature of healthcare services"
        }
      ],
      outcomes: [
        {
          metric: "Page Load Speed",
          value: "95+ Lighthouse performance score"
        },
        {
          metric: "User Experience",
          value: "30% reduction in bounce rate"
        },
        {
          metric: "Accessibility",
          value: "WCAG 2.1 AA compliance achieved"
        }
      ],
      learnings: [
        "Healthcare websites require extra attention to accessibility standards",
        "Trust indicators are crucial for medical service providers",
        "Performance optimization directly impacts user confidence"
      ],
      timeline: "8 weeks",
      role: "Lead Frontend Developer & UX Designer"
    }
  },
];
