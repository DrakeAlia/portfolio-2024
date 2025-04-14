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
  completedAt?: string; // Optional date when project was completed
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
  },
];
