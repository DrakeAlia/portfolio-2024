"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";

export default function SectionDivider() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className="w-full py-8 flex items-center justify-center"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
      </div>
    </m.div>
  );
}
