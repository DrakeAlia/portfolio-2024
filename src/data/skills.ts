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
}

export const skills: Skill[] = [
  { name: "React.js", icon: reactIcon, category: "Front-End Development" },
  { name: "Next.js", icon: nextjsIcon, category: "Front-End Development" },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    category: "Front-End Development",
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
    category: "Front-End Development",
  },
  { name: "HTML5", icon: html5Icon, category: "Front-End Development" },
  {
    name: "Tailwind CSS",
    icon: tailwindcssIcon,
    category: "Front-End Development",
  },
  {
    name: "Midjourney",
    icon: { src: "/icons/midjourney.svg", width: 40, height: 40 },
    category: "AI Tools",
  },
  {
    name: "ChatGPT",
    icon: { src: "/icons/chatgpt.svg", width: 40, height: 40 },
    category: "AI Tools",
  },
  {
    name: "Claude",
    icon: { src: "/icons/claude.svg", width: 40, height: 40 },
    category: "AI Tools",
  },
  {
    name: "Cursor AI",
    icon: { src: "/icons/cursor.svg", width: 40, height: 40 },
    category: "AI Tools",
  },
  { name: "shadcn/ui", icon: shadcnuiIcon, category: "Front-End Development" },
  { name: "Prettier", icon: prettierIcon, category: "Front-End Development" },
  { name: "Node.js", icon: nodejsIcon, category: "Backend Development" },
  { name: "Prisma ORM", icon: prismaIcon, category: "Backend Development" },
  { name: "PostgreSQL", icon: postgresIcon, category: "Backend Development" },
  { name: "Git", icon: gitIcon, category: "DevOps" },
  { name: "GitHub Actions", icon: githubActionsIcon, category: "DevOps" },
  { name: "macOS", icon: macosIcon, category: "Tools & Environment" },
  { name: "VS Code", icon: vscodeIcon, category: "Tools & Environment" },
  { name: "Postman", icon: postmanIcon, category: "Tools & Environment" },
];

export const categories = [
  "Front-End Development",
  "Backend Development",
  "DevOps",
  "Tools & Environment",
  "AI Tools",
];
