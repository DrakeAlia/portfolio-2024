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
import { Progress } from "@/components/ui/progress";

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
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Skill {
  name: string;
  icon: StaticImageData;
  proficiency?: number;
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
    proficiency: 90,
    description: "Advanced proficiency in building complex React applications.",
  },
  typescript: {
    name: "TypeScript",
    icon: typescriptIcon,
    proficiency: 80,
    description: "Strong typing and code safety.",
  },
  javascript: {
    name: "JavaScript",
    icon: javascriptIcon,
    proficiency: 80,
    description: "Proficient in modern JavaScript.",
  },
  html5: {
    name: "HTML5",
    icon: html5Icon,
    proficiency: 90,
    description: "Semantic markup and accessibility.",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: tailwindcssIcon,
    proficiency: 85,
    description: "Utility-first CSS framework.",
  },
  shadcnui: {
    name: "shadcn/ui",
    icon: shadcnuiIcon,
    proficiency: 90,
    description: "Custom UI library for React.",
  },
  prettier: {
    name: "Prettier",
    icon: prettierIcon,
    proficiency: 90,
    description: "Code formatting and style consistency.",
  },
  nodejs: {
    name: "Node.js",
    icon: nodejsIcon,
    proficiency: 70,
    description: "Building scalable and performant APIs.",
  },
  prisma: {
    name: "Prisma ORM",
    icon: prismaIcon,
    proficiency: 70,
    description: "Modern database access for Node.js.",
  },
  postgres: {
    name: "PostgreSQL",
    icon: postgresIcon,
    proficiency: 50,
    description: "Relational database management system.",
  },
  reactnative: {
    name: "React Native",
    icon: reactIcon,
    proficiency: 50,
    description: "Building cross-platform mobile apps.",
  },
  git: {
    name: "Git",
    icon: gitIcon,
    proficiency: 90,
    description: "Version control and collaboration.",
  },
  macos: {
    name: "macOS",
    icon: macosIcon,
    proficiency: 90,
    description: "Primary operating system for development.",
  },
  vscode: {
    name: "VS Code",
    icon: vscodeIcon,
    proficiency: 90,
    description: "Powerful code editor with extensions.",
  },
  postman: {
    name: "Postman",
    icon: postmanIcon,
    proficiency: 50,
    description: "API development and testing tool.",
  },
  githubActions: {
    name: "GitHub Actions",
    icon: githubActionsIcon,
    proficiency: 45,
    description: "Automate workflows and CI/CD pipelines.",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("projects"); // Adjust this to the ID of your next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data: SkillCategory[] = [
    {
      title: "Web Development",
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
      title: "Mobile Development",
      skills: [skillsData.reactnative],
    },
    {
      title: "DevOps",
      skills: [skillsData.git, skillsData.githubActions],
    },
    {
      title: "Languages",
      skills: [skillsData.typescript, skillsData.javascript],
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
      className="flex w-full flex-col items-center text-center py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="mb-12 text-4xl font-bold relative inline-block"
        variants={itemVariants}
      >
        <motion.span
          initial={{ color: "hsl(var(--foreground))" }}
          whileHover={{
            color: "hsl(var(--primary))",
            transition: { duration: 0.2 },
          }}
        >
          My Skills
        </motion.span>
      </motion.h2>
      <motion.div
        className="w-full max-w-4xl px-4"
        variants={containerVariants}
      >
        {data.map((category, index) => (
          <motion.div
            key={category.title}
            className="mb-6 last:mb-0"
            variants={itemVariants}
          >
            <motion.button
              className="w-full text-left text-lg font-semibold py-2 px-4 bg-secondary rounded-lg transition-colors"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.title ? null : category.title
                )
              }
              whileHover={{
                scale: 1.02,
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              }}
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

      <motion.div
        className="mt-12"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5 }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleScrollDown}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-primary hover:bg-primary/20 rounded-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isHovered ? "hovered" : "default"}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-6 w-6 text-white" />
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to Projects</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </motion.section>
  );
}

function SkillBadge({
  icon,
  name,
  proficiency,
  description,
}: {
  icon: StaticImageData;
  name: string;
  proficiency?: number;
  description?: string;
}) {
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
              <motion.span
                initial={{ color: "inherit" }}
                whileHover={{
                  color: "hsl(var(--primary))",
                  transition: { duration: 0.2 },
                }}
              >
                {name}
              </motion.span>
            </div>
          </Badge>
          <Progress value={proficiency} className="w-full h-1" />
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{name}</h4>
          <Progress value={proficiency} className="w-full h-2" />
          <p className="text-xs text-muted-foreground">
            Proficiency: {proficiency}%
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
