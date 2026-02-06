"use client";

import { useEffect, useState } from "react";
import { m, useSpring, useTransform, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate scroll progress (0 to 1)
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0
        ? scrollTop / totalScrollableHeight
        : 0;

      setScrollYProgress(progress);
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also recalculate on resize
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Use spring for smooth animation (unless reduced motion is preferred)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 100,
    damping: shouldReduceMotion ? 100 : 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left pointer-events-none"
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : scaleX,
        transformOrigin: "0%",
      }}
    />
  );
}
