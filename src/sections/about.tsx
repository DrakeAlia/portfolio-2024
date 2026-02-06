"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Briefcase,
  FolderGit2,
  MapPin,
  Code2,
  Award,
  Building2,
  ArrowRight
} from "lucide-react";

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

  const stats = [
    {
      icon: Briefcase,
      label: "Experience",
      value: "3+ Years",
      color: "text-blue-500",
    },
    {
      icon: FolderGit2,
      label: "Projects",
      value: "10+ Completed",
      color: "text-green-500",
    },
    {
      icon: Code2,
      label: "Tech Stack",
      value: "React, Next.js, TypeScript",
      color: "text-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle Area",
      color: "text-orange-500",
    },
  ];

  const journey = [
    {
      icon: Award,
      title: "WATR Certificate",
      description: "Completed WATR Program",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Building2,
      title: "Apple",
      description: "Technical Experience",
      color: "bg-gray-500/10 text-gray-500",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Full Stack Journey",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Briefcase,
      title: "Current",
      description: "Building Solutions",
      color: "bg-primary/10 text-primary",
    },
  ];



  return (
    <m.section
      id="about"
      className="py-12 sm:py-16 lg:py-20 xl:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl rounded-xl py-8 sm:py-12 bg-muted/30">
      <div className="flex justify-center mb-8 sm:mb-12">
        <m.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative"
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

      {/* Decorative shapes background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/5 blur-xl rotate-45"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
      </div>

      {/* Stats Grid */}
      <m.div
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <m.div
            key={stat.label}
            variants={itemVariants}
            whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="relative overflow-hidden group cursor-default">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`${stat.color} p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </m.div>

      {/* Main Content */}
      <div className="relative">
        <m.div variants={itemVariants}>
          <Card className="relative z-10 transition-shadow duration-300 hover:shadow-lg">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Hello! I&apos;m Drake 👋
                </h3>
                <p className="leading-relaxed text-base sm:text-lg text-muted-foreground">
                  A passionate <span className="text-foreground font-semibold">Web Developer</span> from the Greater Seattle Area,
                  specializing in modern web development with <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">Next.js</span>, and <span className="text-primary font-medium">TypeScript</span>.
                  I create exceptional user experiences using cutting-edge tools like Vite, shadcn/ui, and Framer Motion.
                </p>
              </div>

              <div className="space-y-4">
                <p className="leading-relaxed text-base sm:text-lg text-muted-foreground">
                  I embrace the future of development by integrating AI tools like <span className="text-foreground font-medium">Claude</span> and <span className="text-foreground font-medium">Cursor AI</span> into my workflow.
                  From dynamic applications with seamless interactions to pixel-perfect responsive designs,
                  I deliver innovative solutions that exceed expectations.
                </p>
              </div>
            </CardContent>
          </Card>
        </m.div>
      </div>

      {/* Journey Timeline */}
      <m.div variants={itemVariants} className="mt-8">
        <div className="text-center mb-6">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            My Journey
          </Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {journey.map((step, index) => (
            <m.div
              key={step.title}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              className="relative"
            >
              <Card className="h-full">
                <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full ${step.color}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-muted-foreground/30">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </m.div>

      {/* Prominent CTA Button */}
      <m.div
        variants={itemVariants}
        className="flex justify-center mt-10"
      >
        <m.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("/pdf-file/resume-drake.pdf", "_blank")}
          >
            {/* Animated background gradient */}
            <m.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
              animate={shouldReduceMotion ? {} : {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: "200% 200%" }}
            />
            <span className="relative flex items-center gap-3">
              <Eye className="h-5 w-5 transition-transform group-hover:scale-110" />
              View My Resume
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </m.div>
      </m.div>
      </div>
    </m.section>
  );
}
