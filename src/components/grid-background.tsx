"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GridBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  // Create subtle parallax effect on scroll
  const y1 = useTransform(scrollY, [0, 1000], [0, -20]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main grid */}
      <motion.div
        className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{ y: y1 }}
      />

      {/* Gradient overlays for smoother edges */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
