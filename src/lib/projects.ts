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
    learnings: string[];
    timeline?: string;
    teamSize?: number;
    role?: string;
  };
}

export const projects = [
  {
    title: "Iron Works Gym",
    description: "Complete website redesign and migration from Squarespace to a custom Next.js application for a local Seattle-area fitness center.",
    image: "/images/cover-iron-works-gym.png",
    longDescription: "A full website redesign and platform migration for Iron Works Gym, a fitness center in the Greater Seattle Area. Migrated from Squarespace to a custom-built Next.js application with improved performance, modern design, responsive layouts, and optimized images. The project included domain transfer, DNS configuration, and deployment on Vercel.",
    liveUrl: "https://www.iron-works.com",
    githubUrl: "https://github.com/DrakeAlia/ironworks-gym",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Image Optimization"],
    features: [
      "Complete Squarespace to Next.js migration",
      "Responsive mobile-first design",
      "Optimized image loading and compression",
      "Modern UI with smooth animations",
      "SEO optimization",
      "Contact form integration",
      "Fast page load times"
    ],
    category: "full-stack",
    featured: true,
    slug: "ironworks-gym",
    completedAt: "2025-02",
    caseStudy: {
      problem: "Iron Works Gym had an outdated Squarespace website that was slow, difficult to update, and didn't reflect the energy and quality of their fitness center. They needed a modern, fast, and professional web presence.",
      solution: "Built a custom Next.js application from scratch with modern design, optimized performance, and easy content management. Handled the complete migration including domain transfer and DNS configuration.",
      challenges: [
        "Migrating content and maintaining SEO during platform transition",
        "Optimizing high-resolution gym images without quality loss",
        "Creating a design that captures the gym's energetic brand identity",
        "Ensuring fast load times for image-heavy pages",
        "Coordinating domain transfer with zero downtime"
      ],
      techDecisions: [
        {
          decision: "Next.js for the framework",
          reasoning: "Provides excellent performance, SEO capabilities, and image optimization out of the box"
        },
        {
          decision: "Vercel for hosting",
          reasoning: "Seamless Next.js integration with automatic deployments and excellent CDN performance"
        },
        {
          decision: "Tailwind CSS for styling",
          reasoning: "Enables rapid development of custom designs with consistent spacing and responsive utilities"
        },
        {
          decision: "Next.js Image component",
          reasoning: "Automatic image optimization, lazy loading, and responsive sizing for the image-heavy site"
        }
      ],
      learnings: [
        "Client communication is crucial during platform migrations",
        "Image optimization strategy should be planned from the start",
        "Domain transfers require careful timing and DNS propagation planning",
        "Real-world client projects require balancing technical ideals with practical timelines"
      ],
      timeline: "3 weeks",
      role: "Full-stack Developer"
    }
  },
  {
    title: "Fit & Fly",
    description:
      "AI-powered travel workout and meal planner for fitness-conscious travelers.",
    image: "/images/cover-fit-and-fly.png",
    longDescription:
      "A comprehensive travel fitness companion that generates personalized workout routines and meal plans based on your destination, available equipment, and fitness goals. Features AI-powered suggestions, habit tracking, workout sessions with timers, and regional cuisine recommendations.",
    liveUrl: "https://fit-and-fly.vercel.app/",
    githubUrl: "https://github.com/DrakeAlia/fit-and-fly",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Framer Motion",
      "Tailwind CSS",
      "shadcn/ui",
      "AI Integration",
    ],
    features: [
      "Multi-step onboarding with city search",
      "AI-powered meal and workout suggestions",
      "Interactive workout session tracking",
      "Daily habit tracking system",
      "Regional cuisine integration",
      "Responsive mobile-first design",
      "Persistent state management",
      "Advanced animations and micro-interactions",
    ],
    category: "full-stack",
    featured: true,
    slug: "fit-and-fly",
    completedAt: "2025-06",
    caseStudy: {
      problem:
        "Travelers often struggle to maintain their fitness routines and healthy eating habits while traveling, lacking personalized guidance for their specific destinations and available resources.",
      solution:
        "Built a comprehensive travel fitness app that provides AI-powered, location-aware workout and meal planning with real-time tracking capabilities and cultural cuisine integration.",
      challenges: [
        "Creating an intuitive multi-step onboarding flow with complex form validation",
        "Implementing persistent state management for offline capability",
        "Designing a responsive workout session interface with timer functionality",
        "Integrating regional cuisine data for personalized meal suggestions",
        "Building complex animations while maintaining 60fps performance",
        "Handling complex nested state updates for workout progress tracking",
      ],
      techDecisions: [
        {
          decision: "Zustand for state management",
          reasoning:
            "Lightweight alternative to Redux with excellent TypeScript support and simpler boilerplate for complex state",
        },
        {
          decision: "Framer Motion for animations",
          reasoning:
            "Provides declarative animations with layout animations and gesture support crucial for mobile interactions",
        },
        {
          decision: "Next.js App Router",
          reasoning:
            "Latest routing system with improved performance and better developer experience for modern React patterns",
        },
        {
          decision: "TypeScript with Zod validation",
          reasoning:
            "Ensures type safety throughout the app and provides runtime validation for user inputs",
        },
        {
          decision: "shadcn/ui component system",
          reasoning:
            "Provides consistent, accessible components while allowing full customization and brand integration",
        },
      ],
      learnings: [
        "Complex state management requires careful architecture planning from the start",
        "Mobile-first design is crucial for fitness and travel applications",
        "User onboarding flow significantly impacts overall app adoption",
        "Performance optimization is critical for animation-heavy applications",
        "Persistent storage strategies need to handle edge cases gracefully",
      ],
      timeline: "2 days",
      role: "Full-stack Developer & UX Designer",
    },
  },
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
    completedAt: "2024-01",
    caseStudy: {
      problem:
        "Book enthusiasts needed a platform to track, review, and share their reading experiences with a community of like-minded readers.",
      solution:
        "Built a full-stack web application with user authentication, book management, and social features for sharing reviews and discovering new books.",
      challenges: [
        "Implementing secure user authentication and session management",
        "Designing an intuitive book search and categorization system",
        "Creating responsive layouts that work across all devices",
        "Optimizing database queries for fast book searches",
      ],
      techDecisions: [
        {
          decision: "Next.js for full-stack framework",
          reasoning:
            "Provides server-side rendering, API routes, and excellent developer experience for React applications",
        },
        {
          decision: "MongoDB for database",
          reasoning:
            "Flexible document structure perfect for storing varied book metadata and user-generated content",
        },
        {
          decision: "TypeScript for type safety",
          reasoning:
            "Reduces runtime errors and improves development experience with better IDE support",
        },
      ],
      learnings: [
        "Importance of user feedback in UI/UX design iterations",
        "Database indexing strategies for search performance",
        "Mobile-first design principles for better accessibility",
      ],
      timeline: "3 months",
      role: "Full-stack Developer & Designer",
    },
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
    completedAt: "2024-03",
    caseStudy: {
      problem:
        "Plant enthusiasts struggled to maintain proper care schedules and monitor their plants remotely, leading to plant health issues and frequent plant loss.",
      solution:
        "Designed and developed an interactive landing page showcasing a smart plant monitoring system with automated watering capabilities and mobile app integration.",
      challenges: [
        "Creating engaging micro-interactions without overwhelming the user",
        "Balancing information density with visual appeal",
        "Ensuring smooth animations across different devices and browsers",
        "Designing a compelling product story through visual hierarchy",
      ],
      techDecisions: [
        {
          decision: "Framer Motion for animations",
          reasoning:
            "Provides declarative animations with excellent performance and gesture support for interactive elements",
        },
        {
          decision: "shadcn/ui component library",
          reasoning:
            "Offers consistent, accessible components that can be easily customized to match the brand",
        },
        {
          decision: "Tailwind CSS for styling",
          reasoning:
            "Enables rapid prototyping and consistent design system implementation",
        },
      ],
      learnings: [
        "User attention spans require strategic animation timing",
        "Progressive enhancement improves accessibility",
        "Component-driven development accelerates iteration cycles",
      ],
      timeline: "6 weeks",
      role: "UI/UX Designer & Frontend Developer",
    },
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
    completedAt: "2024-03",
    caseStudy: {
      problem:
        "VitaFlow needed a modern, trustworthy online presence that would effectively communicate their healthcare services while building patient confidence and encouraging engagement.",
      solution:
        "Developed a comprehensive pharmacy website with intuitive navigation, service showcases, and professional design that establishes credibility and improves patient access to information.",
      challenges: [
        "Balancing professional healthcare aesthetics with modern web design",
        "Creating clear information hierarchy for complex medical services",
        "Ensuring accessibility compliance for healthcare websites",
        "Optimizing performance while maintaining rich visual elements",
      ],
      techDecisions: [
        {
          decision: "Next.js with static generation",
          reasoning:
            "Ensures fast loading times and SEO optimization crucial for healthcare provider discovery",
        },
        {
          decision: "Component-based architecture",
          reasoning:
            "Enables consistent branding across all service pages and simplifies content management",
        },
        {
          decision: "Framer Motion for subtle animations",
          reasoning:
            "Adds professional polish without compromising the serious nature of healthcare services",
        },
      ],
      learnings: [
        "Healthcare websites require extra attention to accessibility standards",
        "Trust indicators are crucial for medical service providers",
        "Performance optimization directly impacts user confidence",
      ],
      timeline: "3 weeks",
      role: "Lead Frontend Developer & UX Designer",
    },
  },
];
