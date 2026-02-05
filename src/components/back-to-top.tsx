"use client";

import { useWindowScroll } from "react-use";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";
import { motion, useAnimation, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50 touch-manipulation"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.8, y: 100 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: isVisible ? 1 : 0 }
          : {
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.8,
              y: isVisible ? 0 : 100,
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { duration: 0.4, ease: "easeInOut" }
      }
      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="60"
          style={{ pathLength }}
        />
        <motion.path
          d="M12 8V16M8 12L12 8L16 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
