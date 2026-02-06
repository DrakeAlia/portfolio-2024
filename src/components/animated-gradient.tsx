"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

export default function AnimatedGradient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 blur-3xl ${
          shouldReduceMotion ? "" : "animate-gradient-shift"
        }`}
        style={shouldReduceMotion ? {} : { backgroundSize: "400% 400%" }}
      />
    </div>
  );
}
