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
      className="mx-auto my-16 px-4 md:px-8 max-w-6xl rounded-xl py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center relative inline-block"
        variants={itemVariants}
      >
        About Me
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                          hailing from the vibrant and tech-forward Greater
                          Seattle Area. With a strong foundation in TypeScript,
                          Next.js, React, and Tailwind CSS, I specialize in
                          crafting engaging, responsive, and user-friendly web
                          experiences.
                        </motion.span>
                      )}
                      {key === "paragraph2" && (
                        <span className="block text-foreground">
                          I thrive on challenges and continuously strive to push
                          the boundaries of what&apos;s possible in web
                          development. Whether it&apos;s building dynamic
                          applications or designing intuitive user interfaces, I
                          am dedicated to delivering high-quality solutions that
                          exceed expectations.
                        </span>
                      )}
                      {key === "paragraph3" && (
                        <span className="block text-foreground">
                          My approach to frontend engineering is akin to the art
                          of cooking—a process where meticulous preparation,
                          innovative use of ingredients, and an understanding of
                          complex techniques come together to create something
                          extraordinary.
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
          className="w-full max-w-2xl mx-auto lg:max-w-full flex flex-col items-center"
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContainer className="w-full max-w-md">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-all duration-300">
                <CardItem
                  translateZ={isHovered ? "120" : "50"}
                  className="w-full aspect-[4/3] transition-all duration-300 ease-out"
                >
                  <Image
                    src="/images/photo.png"
                    alt="Drake Alia"
                    width={450}
                    height={400}
                    className="rounded-xl group-hover/card:shadow-xl transition-transform duration-300"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          <motion.div
            className="mt-4 flex justify-center space-x-4"
            variants={itemVariants}
          >
            {[
              { icon: Code, tooltip: "Innovative Coder" },
              { icon: Rocket, tooltip: "Problem Solver" },
              { icon: ChefHat, tooltip: "UI Chef" },
            ].map((item, index) => (
              <motion.div
                key={item.tooltip}
                whileHover={{ scale: 1.1, rotate: shouldReduceMotion ? 0 : 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant="secondary"
                        className="p-3 transition-all duration-300
                        hover:scale-110 hover:bg-primary hover:text-white
                        "
                      >
                        <item.icon size={18} />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 flex items-center gap-2 bg-background hover:bg-accent relative overflow-hidden group"
            onClick={() => window.open("/pdf-file/resume-drake.pdf", "_blank")}
          >
            <motion.div
              className="absolute inset-0 bg-primary/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
            View Resume
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
