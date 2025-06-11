"use client";

import { useEffect, useState } from "react";

export const useMobileOptimizedMotion = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Return optimized animation settings
  const getMotionConfig = () => {
    if (prefersReducedMotion) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 },
        whileHover: {},
        whileTap: {},
      };
    }

    if (isMobile) {
      return {
        transition: { duration: 0.3, ease: "easeOut" },
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };
    }

    return {
      transition: { duration: 0.5, ease: "easeOut" },
      whileHover: { scale: 1.05, y: -5 },
      whileTap: { scale: 0.95 },
    };
  };

  return {
    isMobile,
    prefersReducedMotion,
    isClient,
    getMotionConfig,
  };
};