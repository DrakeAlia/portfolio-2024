"use client";

import React from "react";
import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card className="w-full max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl border-t border-l border-white/50 dark:border-gray-700/50">
        <CardContent className="p-8 md:p-12">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            variants={itemVariants}
          >
            <MotionDiv delayOffset={0.4} className="relative">
              <motion.div>
                <Image
                  src="/images/hero.png"
                  alt="Drake Alia"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                />
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </MotionDiv>

            <div className="flex-1">
              <motion.h1
                className="mb-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                variants={itemVariants}
              >
                <MotionText delayOffset={0}>Drake Alia</MotionText>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <Badge
                  variant="secondary"
                  className="text-lg font-semibold mb-4 px-4 py-2"
                >
                  UI Developer
                </Badge>
              </motion.div>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6"
                variants={itemVariants}
              >
                Passionate and innovative UI Developer hailing from the vibrant
                and tech-forward Greater Seattle Area. Crafting engaging web
                experiences, I specialized in:
              </motion.p>

              <motion.ul className="space-y-2 mb-6" variants={itemVariants}>
                <li className="flex items-center">
                  <Code className="mr-2 text-blue-500" /> TypeScript & Next.js
                </li>
                <li className="flex items-center">
                  <Palette className="mr-2 text-purple-500" /> React & Tailwind
                  CSS
                </li>
                <li className="flex items-center">
                  <Zap className="mr-2 text-yellow-500" /> User-Centric Design
                </li>
              </motion.ul>

              <motion.div variants={itemVariants}>
                <ContactList delayOffset={1.2} showWhenInView={false} />
              </motion.div>
            </div>
          </motion.div>
        </CardContent>
      </Card>

      <motion.div
        className="mt-8"
        variants={itemVariants}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </motion.section>
  );
}
