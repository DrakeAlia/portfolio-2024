"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";
import { SkipToContent } from "@/components/skip-to-content";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

// Import GoogleAnalytics with dynamic import
const GoogleAnalytics = dynamic(
  () => import("@/components/analytics").then((mod) => mod.GoogleAnalytics),
  { ssr: false }
);

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  useKeyboardNav();

  return (
    <LazyMotion features={domAnimation}>
      <SkipToContent />
      <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      {children}
    </LazyMotion>
  );
}
