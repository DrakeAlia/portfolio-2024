"use client";

import React from "react";
import Image from "next/image";
import ContactList from "@/components/contact-list";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedGradient from "@/components/animated-gradient";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { isMobile, mounted } = useIsMobile();
  const { scrollY } = useScroll();

  // Parallax transforms for different elements
  const imageY = useTransform(scrollY, [0, 800], [0, -80]);
  const contentY = useTransform(scrollY, [0, 800], [0, -40]);
  const decorativeY = useTransform(scrollY, [0, 800], [0, -120]);
  return (
    <section className="relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      <AnimatedGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <m.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
            style={shouldReduceMotion ? {} : { y: contentY }}
          >
            {/* Greeting Badge */}
            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10, filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                x: shouldReduceMotion ? 0 : [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.1,
                x: shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Badge variant="secondary" className="text-sm font-normal px-4 py-1.5">
                <span className="inline-block mr-2 animate-pulse">👋</span>
                Hello, I&apos;m
              </Badge>
            </m.div>

            {/* Name - Hero Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              {"Drake Alia".split("").map((char, index) => (
                <m.span
                  key={index}
                  initial={{ opacity: 0, rotateX: shouldReduceMotion ? 0 : 90 }}
                  animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: shouldReduceMotion ? 0 : [0, -2, 0]
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.4,
                    delay: shouldReduceMotion ? 0 : 0.2 + index * 0.04,
                    y: shouldReduceMotion ? {} : {
                      duration: 2 + index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5 + index * 0.08
                    }
                  }}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </m.span>
              ))}
            </h1>

            {/* Role/Title */}
            <m.div
              className="space-y-3"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={shouldReduceMotion || isMobile ? { opacity: 1, y: 0 } : { opacity: [0.9, 1, 0.9], y: 0 }}
              transition={shouldReduceMotion || isMobile ? { duration: 0.01, delay: 0 } : {
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                y: { duration: 0.6, delay: 0.7 }
              }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold relative">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h2>
              <m.div
                className="h-1 w-20 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.9 }}
                style={{ originX: 0 }}
              />
            </m.div>

            {/* Description */}
            <m.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 1.0 }}
            >
              Specializing in modern web technologies like{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span>, and{" "}
              <span className="text-foreground font-medium">TypeScript</span>.
              Building exceptional digital experiences from the Greater Seattle Area.
            </m.p>

            {/* CTA Buttons */}
            <m.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 1.1 }}
            >
              <m.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                animate={shouldReduceMotion ? {} : {
                  boxShadow: [
                    "0 0 0px hsl(var(--primary) / 0)",
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 0px hsl(var(--primary) / 0)"
                  ]
                }}
                transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
              >
                <Button size="lg" className="group text-base w-full sm:w-auto touch-manipulation" asChild>
                  <a href="#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </m.div>
              <m.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <Button size="lg" variant="outline" className="group text-base w-full sm:w-auto touch-manipulation" asChild>
                  <a href="/pdf-file/resume-drake.pdf" target="_blank">
                    <Eye className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    View Resume
                  </a>
                </Button>
              </m.div>
            </m.div>

            {/* Social Links */}
            <m.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={shouldReduceMotion || isMobile ? { opacity: 1 } : { opacity: 1, scale: [1, 1.03, 1] }}
              transition={shouldReduceMotion || isMobile ? { duration: 0.01, delay: 0 } : {
                opacity: { duration: 0.6, delay: 1.2 },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <ContactList delayOffset={0} showWhenInView={false} />
            </m.div>
          </m.div>

          {/* Image Column */}
          <m.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
            style={{}}
          >
            <div className="relative w-full max-w-md lg:max-w-lg pr-6 sm:pr-8 pb-6 sm:pb-8">
              {/* Decorative background element */}
              <m.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl"
                style={shouldReduceMotion ? {} : { y: decorativeY }}
              />

              {/* Rotating glow effect */}
              <m.div
                className="absolute -inset-5 rounded-full blur-2xl hidden lg:block"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)'
                }}
                animate={shouldReduceMotion ? {} : {
                  rotate: [0, 360],
                  scale: [1, 1.15, 1]
                }}
                transition={shouldReduceMotion ? {} : {
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Image container */}
              {/* Outer wrapper for desktop-only rotate/scale */}
              <m.div
                className="relative"
                animate={shouldReduceMotion || isMobile || !mounted ? {} : {
                  rotate: [0, 1.5, 0, -1.5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={shouldReduceMotion || isMobile || !mounted ? {} : {
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Inner container with the float that works everywhere */}
                <m.div
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl"
                  animate={mounted ? {
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 20px 40px hsl(var(--foreground) / 0.05)",
                      "0 30px 60px hsl(var(--foreground) / 0.12)",
                      "0 20px 40px hsl(var(--foreground) / 0.05)"
                    ]
                  } : {}}
                  transition={mounted ? {
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  } : {}}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                >
                  <Image
                    src="/images/hero.png"
                    alt="Drake Alia - Web Developer"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                    priority
                  />
                </m.div>
              </m.div>

              {/* Floating badge */}
              <m.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
              >
                {/* Outer wrapper for desktop-only rotate/scale */}
                <m.div
                  animate={shouldReduceMotion || isMobile || !mounted ? {} : {
                    rotate: [0, 3, 0, -3, 0],
                    scale: [1, 1.04, 1],
                  }}
                  transition={shouldReduceMotion || isMobile || !mounted ? {} : {
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {/* Inner badge with always-on y/x float */}
                  <m.div
                    className="bg-background border-2 border-border rounded-xl sm:rounded-2xl px-3 py-2 sm:px-6 sm:py-4 shadow-lg max-w-[120px] xs:max-w-[140px] sm:max-w-none"
                    animate={mounted ? { y: [0, -6, 0], x: [0, 4, 0, -4, 0] } : {}}
                    transition={mounted ? {
                      y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    } : {}}
                  >
                    <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Based in</p>
                    <p className="text-base sm:text-lg font-semibold whitespace-nowrap">Seattle Area</p>
                  </m.div>
                </m.div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1, duration: shouldReduceMotion ? 0.01 : 0.6 }}
      >
        <p className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</p>
        <m.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </m.div>
      </m.div>
    </section>
  );
}
