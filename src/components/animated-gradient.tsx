"use client";

import React from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AnimatedGradient() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Create subtle parallax effect - moves slower than scroll (0.5x speed)
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300, 600], [1, 0.7, 0.3]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <m.div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 blur-3xl ${
          shouldReduceMotion ? "" : "animate-gradient-shift"
        }`}
        style={
          shouldReduceMotion
            ? {}
            : {
                backgroundSize: "400% 400%",
                y,
                opacity,
              }
        }
      />
    </div>
  );
}
