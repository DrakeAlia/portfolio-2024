"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactList from "@/components/contact-list";
import ParallaxWrapper from "@/components/parallax-wrapper";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export default function Hero() {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInUpTransition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99],
  };

  return (
    <motion.section className="relative overflow-hidden py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
        <motion.div style={{ y: y1 }}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={fadeInUpTransition}
          >
            Hello, I&apos;m Drake Alia!{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <CardContent className="p-0 h-full">
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Drake Alia"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 text-primary"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUpTransition, delay: 0.2 }}
        >
          A Web Developer
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-xl sm:max-w-2xl"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUpTransition, delay: 0.4 }}
        >
          Passionate Web Developer from the Greater Seattle Area, specializing
          in TypeScript, Next.js, React, and Tailwind CSS. Crafting engaging,
          responsive, and user-friendly web experiences that drive results.
        </motion.p>
        {/* Resume and CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUpTransition, delay: 0.5 }}
        >
          <Button className="group" asChild>
            <a href="/pdf-file/resume-drake.pdf" target="_blank">
              <Eye className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View Resume
            </a>
          </Button>
          <Button variant="outline" className="group" asChild>
            <a href="#projects">
              View Projects{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ ...fadeInUpTransition, delay: 0.6 }}
        >
          <ContactList delayOffset={1.2} showWhenInView={false} />
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-xs text-muted-foreground mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10 9L19 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
