"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Code, Rocket, Eye } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const cardHoverVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textHighlightVariants = {
    initial: { backgroundSize: "0% 100%" },
    hover: {
      backgroundSize: "100% 100%",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="about"
      className="mx-auto my-12 sm:my-16 px-4 sm:px-6 md:px-8 max-w-6xl rounded-xl py-8 sm:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center mb-8 sm:mb-12">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center relative"
          variants={itemVariants}
        >
          About Me
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-primary w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <motion.div
          className="lg:col-span-2"
          variants={itemVariants}
          whileHover="hover"
          initial="idle"
          animate="idle"
        >
          <motion.div variants={cardHoverVariants}>
            <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                {["paragraph1", "paragraph2", "paragraph3"].map(
                  (key, index) => (
                    <motion.p
                      key={key}
                      className="mb-8 md:mb-10 leading-relaxed text-base sm:text-lg text-muted-foreground/90 tracking-wide"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.3 }}
                    >
                      {key === "paragraph1" && (
                        <motion.span
                          className="block text-foreground"
                          initial="initial"
                          whileHover="hover"
                          variants={textHighlightVariants}
                        >
                          I&apos;m a passionate and innovative Web Developer
                          from the Greater Seattle Area, specializing in modern
                          web development with React, Next.js, TypeScript, and
                          Tailwind CSS. I leverage cutting-edge tools like Vite
                          for lightning-fast development, shadcn/ui for
                          beautiful components, and Framer Motion for engaging
                          animations to create exceptional user experiences.
                        </motion.span>
                      )}
                      {key === "paragraph2" && (
                        <span className="block text-foreground">
                          I embrace the future of development by integrating AI
                          tools like Claude and Cursor AI into my workflow,
                          exploring MCP servers, and staying at the forefront of
                          web technologies. Whether building dynamic
                          applications with seamless interactions or crafting
                          pixel-perfect responsive designs, I&apos;m dedicated
                          to delivering innovative solutions that exceed
                          expectations.
                        </span>
                      )}
                      {key === "paragraph3" && (
                        <span className="block text-foreground">
                          My development philosophy combines technical
                          excellence with creative problem-solving. Like a chef
                          perfecting a recipe, I carefully select the right
                          tools and techniques from TypeScript&apos;s type
                          safety to Framer Motion&apos;s smooth animations—to
                          create web experiences that are not just functional,
                          but delightful and memorable.
                        </span>
                      )}
                    </motion.p>
                  )
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto flex flex-col items-center"
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full"
          >
            <CardContainer className="w-full">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-3 sm:p-4 md:p-6 border transition-all duration-300">
                <CardItem
                  translateZ={
                    shouldReduceMotion ? "0" : isHovered ? "120" : "50"
                  }
                  className="w-full aspect-[4/3] transition-all duration-300 ease-out"
                >
                  <Image
                    src="/images/photo.png"
                    alt="Drake Alia - Web Developer"
                    width={450}
                    height={400}
                    className="rounded-lg sm:rounded-xl group-hover/card:shadow-xl transition-transform duration-300 w-full h-full object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 450px"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          <motion.div
            className="mt-4 sm:mt-6 flex justify-center space-x-3 sm:space-x-4"
            variants={itemVariants}
          >
            {[
              { icon: Code, tooltip: "Innovative Coder" },
              { icon: Rocket, tooltip: "Problem Solver" },
              { icon: ChefHat, tooltip: "UI Chef" },
            ].map((item, index) => (
              <motion.div
                key={item.tooltip}
                whileHover={{
                  scale: shouldReduceMotion ? 1 : 1.1,
                  rotate: shouldReduceMotion ? 0 : 5,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant="secondary"
                        className="p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white touch-manipulation"
                      >
                        <item.icon
                          size={16}
                          className="sm:w-[18px] sm:h-[18px]"
                        />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs sm:text-sm">{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-full sm:w-auto"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 flex items-center justify-center gap-2 bg-background hover:bg-accent relative overflow-hidden group w-full sm:w-auto touch-manipulation"
            onClick={() => window.open("/pdf-file/resume-drake.pdf", "_blank")}
          >
            <motion.div
              className="absolute inset-0 bg-primary/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="text-sm sm:text-base">View Resume</span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
