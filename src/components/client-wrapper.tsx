"use client";

import dynamic from "next/dynamic";
import { SkipToContent } from "@/components/skip-to-content";

// Import GoogleAnalytics with dynamic import
const GoogleAnalytics = dynamic(
  () => import("@/components/analytics").then((mod) => mod.GoogleAnalytics),
  { ssr: false }
);

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipToContent />
      <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
      {children}
    </>
  );
}
