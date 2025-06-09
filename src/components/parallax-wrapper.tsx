"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  speed?: number;
}

export default function ParallaxWrapper({ 
  children, 
  offset = 50, 
  className = "",
  speed = 0.5
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: springY }}>
        {children}
      </motion.div>
    </div>
  );
}