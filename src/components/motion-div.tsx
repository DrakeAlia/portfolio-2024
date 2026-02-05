"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { ReactElement, useEffect, useRef } from "react";
export default function MotionDiv({
  children,
  delayOffset,
}: {
  children: ReactElement | string;
  delayOffset?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative flex items-center justify-center")}
      initial={shouldReduceMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
      animate={controls}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : {
              type: "spring",
              damping: 30,
              stiffness: 200,
              delay: delayOffset,
            }
      }
    >
      {children}
    </motion.div>
  );
}
