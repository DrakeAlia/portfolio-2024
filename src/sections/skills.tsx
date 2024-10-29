"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  icon: any; // Use the appropriate type for your icons
  category: string;
}

const skills: Skill[] = [
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

const categories = [
  "Front-End Development",
  "Backend Development",
  "DevOps",
  "Tools & Environment",
];

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
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
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="overflow-hidden h-full">
                <CardHeader className="bg-primary/5 dark:bg-primary/10">
                  <CardTitle className="text-2xl font-semibold text-primary/80 dark:text-primary/90">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <SkillIcon key={skill.name} skill={skill} />
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full p-3 shadow-md transition-all duration-300 group-hover:bg-primary/30 dark:group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20 dark:group-hover:shadow-primary/40">
              <div className="relative w-10 h-10">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  
                  className="transition-all duration-300 group-hover:brightness-110 dark:group-hover:brightness-125"
                />
              </div>
            </div>
            <span className="mt-2 text-sm text-center font-medium transition-colors duration-300 group-hover:text-primary dark:group-hover:text-primary-foreground">
              {skill.name}
            </span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}