"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import About from "@/sections/about";
import Hero from "@/sections/hero";

// Lazy load below-the-fold sections
const Skills = dynamic(() => import("@/sections/skills"), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import("@/sections/projects"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("@/sections/contact"), {
  loading: () => <div className="min-h-screen" />,
});

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
