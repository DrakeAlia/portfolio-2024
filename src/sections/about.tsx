"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

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



  return (
    <m.section
      id="about"
      className="mx-auto my-12 sm:my-16 px-4 sm:px-6 md:px-8 max-w-6xl rounded-xl py-8 sm:py-12 bg-muted/30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center mb-8 sm:mb-12">
        <m.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center relative"
          variants={itemVariants}
        >
          About Me
          <m.span
            className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-primary w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </m.h2>
      </div>

      <div className="relative">
        {/* Decorative shapes background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
          <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
          <div
            className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/5 blur-xl rotate-45"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>

        {/* Full-width text content */}
        <m.div variants={itemVariants}>
          <Card className="relative z-10 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <p className="leading-relaxed text-base sm:text-lg text-foreground tracking-wide max-w-4xl mx-auto">
                I&apos;m a passionate and innovative Web Developer from the Greater Seattle Area,
                specializing in modern web development with React, Next.js, TypeScript, and Tailwind CSS.
                I leverage cutting-edge tools like Vite for lightning-fast development, shadcn/ui for
                beautiful components, and Framer Motion for engaging animations to create exceptional
                user experiences.
              </p>

              <p className="leading-relaxed text-base sm:text-lg text-foreground tracking-wide max-w-4xl mx-auto">
                I embrace the future of development by integrating AI tools like Claude and Cursor AI
                into my workflow, exploring MCP servers, and staying at the forefront of web technologies.
                Whether building dynamic applications with seamless interactions or crafting pixel-perfect
                responsive designs, I&apos;m dedicated to delivering innovative solutions that exceed expectations.
              </p>

              <p className="leading-relaxed text-base sm:text-lg text-foreground tracking-wide max-w-4xl mx-auto">
                My development philosophy combines technical excellence with creative problem-solving.
                Like a chef perfecting a recipe, I carefully select the right tools and techniques from
                TypeScript&apos;s type safety to Framer Motion&apos;s smooth animations - to create web
                experiences that are not just functional, but delightful and memorable.
              </p>
            </CardContent>
          </Card>
        </m.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4">
        <Button
          variant="outline"
          size="lg"
          className="border-2 flex items-center justify-center gap-2 bg-background hover:bg-accent group w-full sm:w-auto touch-manipulation"
          onClick={() => window.open("/pdf-file/resume-drake.pdf", "_blank")}
        >
          <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span className="text-base">View Resume</span>
        </Button>
      </div>
    </m.section>
  );
}
