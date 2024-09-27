"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ContactList from "@/components/contact-list";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Hero() {
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();
  const scrollY = useMotionValue(0);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, scrollY]);

  const coverImageHeight = useTransform(scrollY, (latest) =>
    Math.max(400, 800 - latest * 0.5)
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInUpTransition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99],
  };

  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative overflow-hidden"
      style={{ height: coverImageHeight, minHeight: "100vh" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/hero.png"
          alt="Drake Alia"
          fill
          sizes="100vw"
          priority
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto h-full flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            className="max-w-2xl text-left"
          >
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={fadeInUpTransition}
            >
              <motion.h1
                className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Drake Alia
                <br />
                <motion.span
                  className="text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  UI Developer
                </motion.span>
              </motion.h1>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ ...fadeInUpTransition, delay: 0.2 }}
            >
              <motion.p className="text-white/80 text-xl font-semibold md:text-2xl max-w-xl mb-6">
                Passionate and innovative UI Developer from the Greater Seattle
                Area
              </motion.p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={fadeInUpTransition}
            >
              <motion.ul
                className="space-y-2 mb-6 text-white"
                variants={fadeInUp}
              >
                {[
                  {
                    icon: Code,
                    text: "TypeScript & Next.js",
                    color: "text-blue-500",
                  },
                  {
                    icon: Palette,
                    text: "React & Tailwind CSS",
                    color: "text-purple-500",
                  },
                  {
                    icon: Zap,
                    text: "User-Centric Design",
                    color: "text-yellow-500",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <item.icon className={`mr-2 ${item.color}`} />
                    </motion.div>
                    {item.text}
                  </motion.li>
                ))}
              </motion.ul>
              <ContactList delayOffset={1.2} showWhenInView={false} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ ...fadeInUpTransition, delay: 0.6 }}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleScrollDown}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-primary hover:bg-primary/20 rounded-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isHovered ? "hovered" : "default"}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-6 w-6 text-white" />
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Go to About</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </motion.section>
  );
}
