"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Icons:
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

interface Skill {
  name: string;
  icon: StaticImageData;
  description?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: Record<string, Skill> = {
  react: {
    name: "React.js",
    icon: reactIcon,
    description: "Building complex React applications.",
  },
  typescript: {
    name: "TypeScript",
    icon: typescriptIcon,
    description: "Strong typing and code safety.",
  },
  javascript: {
    name: "JavaScript",
    icon: javascriptIcon,
    description: "Proficient in modern JavaScript.",
  },
  html5: {
    name: "HTML5",
    icon: html5Icon,
    description: "Semantic markup and accessibility.",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: tailwindcssIcon,
    description: "Utility-first CSS framework.",
  },
  shadcnui: {
    name: "shadcn/ui",
    icon: shadcnuiIcon,
    description: "Custom UI library for React.",
  },
  prettier: {
    name: "Prettier",
    icon: prettierIcon,
    description: "Code formatting and style consistency.",
  },
  nodejs: {
    name: "Node.js",
    icon: nodejsIcon,
    description: "Building scalable and performant APIs.",
  },
  prisma: {
    name: "Prisma ORM",
    icon: prismaIcon,
    description: "Modern database access for Node.js.",
  },
  postgres: {
    name: "PostgreSQL",
    icon: postgresIcon,
    description: "Relational database management system.",
  },
  git: {
    name: "Git",
    icon: gitIcon,
    description: "Version control and collaboration.",
  },
  macos: {
    name: "macOS",
    icon: macosIcon,
    description: "Primary operating system for development.",
  },
  vscode: {
    name: "VS Code",
    icon: vscodeIcon,
    description: "Powerful code editor with extensions.",
  },
  postman: {
    name: "Postman",
    icon: postmanIcon,
    description: "API development and testing tool.",
  },
  githubActions: {
    name: "GitHub Actions",
    icon: githubActionsIcon,
    description: "Automate workflows and CI/CD pipelines.",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const data: SkillCategory[] = [
    {
      title: "Front-End Development",
      skills: [
        skillsData.react,
        skillsData.typescript,
        skillsData.javascript,
        skillsData.html5,
        skillsData.tailwindcss,
        skillsData.shadcnui,
        skillsData.prettier,
      ],
    },
    {
      title: "Backend Development",
      skills: [skillsData.nodejs, skillsData.prisma, skillsData.postgres],
    },
    {
      title: "DevOps",
      skills: [skillsData.git, skillsData.githubActions],
    },
    {
      title: "Tools & Environment",
      skills: [skillsData.macos, skillsData.vscode, skillsData.postman],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const categoryVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="skills"
      className="flex w-full flex-col items-center text-center py-16 from-background to-background/50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="mb-12 text-4xl font-bold text-primary relative inline-block"
        variants={itemVariants}
      >
        My Skills
        <motion.span
          className="absolute bottom-0 left-0 w-full h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.h2>
      <motion.div
        className="w-full max-w-4xl px-4"
        variants={containerVariants}
      >
        {data.map((category) => (
          <motion.div
            key={category.title}
            className="mb-6 last:mb-0"
            variants={itemVariants}
          >
            <motion.button
              className="w-full text-left text-lg font-semibold py-2 px-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.title ? null : category.title
                )
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.title}
            </motion.button>
            <AnimatePresence>
              {selectedCategory === category.title && (
                <motion.div
                  variants={categoryVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} {...skill} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function SkillBadge({ icon, name, description }: Skill) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center"
        >
          <Badge variant="secondary" className="p-2 mb-2">
            <div className="flex items-center gap-2">
              <Image src={icon} alt={name} width={24} height={24} />
              <span>{name}</span>
            </div>
          </Badge>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
