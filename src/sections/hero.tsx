"use client";

import React from "react";
import Image from "next/image";
import ContactList from "@/components/contact-list";
import { m, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedGradient from "@/components/animated-gradient";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 xl:py-24">
      <AnimatedGradient />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <m.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
          >
            {/* Greeting Badge */}
            <m.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
            >
              <Badge variant="secondary" className="text-sm font-normal px-4 py-1.5">
                <span className="inline-block mr-2 animate-pulse">👋</span>
                Hello, I&apos;m
              </Badge>
            </m.div>

            {/* Name - Hero Text */}
            <m.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              Drake Alia
            </m.h1>

            {/* Role/Title */}
            <m.div
              className="space-y-3"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold relative">
                <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </m.div>

            {/* Description */}
            <m.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
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
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
            >
              <Button size="lg" className="group text-base w-full sm:w-auto touch-manipulation" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group text-base w-full sm:w-auto touch-manipulation" asChild>
                <a href="/pdf-file/resume-drake.pdf" target="_blank">
                  <Eye className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View Resume
                </a>
              </Button>
            </m.div>

            {/* Social Links */}
            <m.div
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
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
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-3xl" />

              {/* Image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl">
                <Image
                  src="/images/hero.png"
                  alt="Drake Alia - Web Developer"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Floating badge */}
              <m.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-background border-2 border-border rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-6 sm:py-4 shadow-lg max-w-[140px] sm:max-w-none"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: shouldReduceMotion ? 0 : [0, -12, 0],
                  rotate: shouldReduceMotion ? 0 : [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.8,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Based in</p>
                <p className="text-base sm:text-lg font-semibold whitespace-nowrap">Seattle Area</p>
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
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </m.div>
      </m.div>
    </section>
  );
}
