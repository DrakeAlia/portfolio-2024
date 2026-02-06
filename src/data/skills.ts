import { StaticImageData } from "next/image";
import reactIcon from "../../public/icons/react.png";
import nextjsIcon from "../../public/icons/next-js.png";
import typescriptIcon from "../../public/icons/typescript.png";
import javascriptIcon from "../../public/icons/javascript.png";
import html5Icon from "../../public/icons/html5.png";
import tailwindcssIcon from "../../public/icons/tailwindcss.png";
import shadcnuiIcon from "../../public/icons/shadcn-ui.png";
import prettierIcon from "../../public/icons/prettier.png";
import nodejsIcon from "../../public/icons/nodejs.png";
import prismaIcon from "../../public/icons/prisma.png";
import postgresIcon from "../../public/icons/postgres.png";
import gitIcon from "../../public/icons/git.png";
import macosIcon from "../../public/icons/macos.png";
import vscodeIcon from "../../public/icons/vscode.png";
import postmanIcon from "../../public/icons/postman.svg";
import githubActionsIcon from "../../public/icons/github-actions.png";

export interface Skill {
  name: string;
  icon: StaticImageData | { src: string; width: number; height: number };
  category: string;
  description: string;
}

export const skills: Skill[] = [
  { name: "React.js", icon: reactIcon, category: "Front-End Development", description: "3+ years, primary framework for building UIs" },
  { name: "Next.js", icon: nextjsIcon, category: "Front-End Development", description: "2+ years, go-to framework for full-stack apps" },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    category: "Front-End Development",
    description: "3+ years, preferred over JavaScript for type safety",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    category: "Front-End Development",
    description: "3+ years, foundation for all web development",
  },
  { name: "HTML5", icon: html5Icon, category: "Front-End Development", description: "3+ years, semantic markup and accessibility" },
  {
    name: "Tailwind CSS",
    icon: tailwindcssIcon,
    category: "Front-End Development",
    description: "2+ years, utility-first CSS for rapid styling",
  },
  {
    name: "Midjourney",
    icon: { src: "/icons/midjourney.svg", width: 40, height: 40 },
    category: "AI Tools",
    description: "AI image generation for design mockups",
  },
  {
    name: "ChatGPT",
    icon: { src: "/icons/chatgpt.svg", width: 40, height: 40 },
    category: "AI Tools",
    description: "Daily use for problem-solving and ideation",
  },
  {
    name: "Claude",
    icon: { src: "/icons/claude.svg", width: 40, height: 40 },
    category: "AI Tools",
    description: "Code generation and technical documentation",
  },
  {
    name: "Cursor AI",
    icon: { src: "/icons/cursor.svg", width: 40, height: 40 },
    category: "AI Tools",
    description: "AI-powered code editor for faster development",
  },
  { name: "shadcn/ui", icon: shadcnuiIcon, category: "Front-End Development", description: "Component library for modern React apps" },
  { name: "Prettier", icon: prettierIcon, category: "Front-End Development", description: "Code formatting for consistency" },
  { name: "Node.js", icon: nodejsIcon, category: "Backend Development", description: "2+ years, server-side JavaScript runtime" },
  { name: "Prisma ORM", icon: prismaIcon, category: "Backend Development", description: "Type-safe database ORM for Node.js" },
  { name: "PostgreSQL", icon: postgresIcon, category: "Backend Development", description: "Relational database for production apps" },
  { name: "Git", icon: gitIcon, category: "DevOps", description: "3+ years, version control for all projects" },
  { name: "GitHub Actions", icon: githubActionsIcon, category: "DevOps", description: "CI/CD pipelines for automated deployments" },
  { name: "macOS", icon: macosIcon, category: "Tools & Environment", description: "Primary development environment" },
  { name: "VS Code", icon: vscodeIcon, category: "Tools & Environment", description: "Primary code editor with extensions" },
  { name: "Postman", icon: postmanIcon, category: "Tools & Environment", description: "API testing and development" },
];

export const categories = [
  "Front-End Development",
  "Backend Development",
  "DevOps",
  "Tools & Environment",
  "AI Tools",
];
