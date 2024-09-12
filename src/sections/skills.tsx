"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <motion.section
      id="skills"
      className="flex w-full flex-col items-center text-center py-16 bg-gradient-to-b from-background to-background/50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="mb-8 text-3xl font-bold" variants={itemVariants}>
        My Skills
      </motion.h2>
      <motion.div
        className="w-full max-w-4xl px-4"
        variants={containerVariants}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={(value) => setSelectedCategory(value)}
        >
          {data.map((category, index) => (
            <AccordionItem key={index} value={category.title}>
              <AccordionTrigger className="text-lg font-semibold">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence>
                  {selectedCategory === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4"
                    >
                      {category.skills.map((skill) => (
                        <SkillBadge key={skill.name} {...skill} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionContent>
              {index < data.length - 1 && <Separator className="my-2" />}
            </AccordionItem>
          ))}
        </Accordion>
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center"
        >
          <Badge variant="secondary" className="p-2 mb-2">
            <div className="flex items-center gap-2">
              <Image src={icon} alt={name} width={24} height={24} />
              <span>{name}</span>
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
