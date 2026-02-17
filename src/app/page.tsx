"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import SectionDivider from "@/components/section-divider";
import { SkillsSkeleton, ProjectsSkeleton, TestimonialsSkeleton, ContactSkeleton } from "@/components/loading-skeletons";

// Lazy load below-the-fold sections
const Skills = dynamic(() => import("@/sections/skills"), {
  loading: () => <SkillsSkeleton />,
});
const Projects = dynamic(() => import("@/sections/projects"), {
  loading: () => <ProjectsSkeleton />,
});
const Testimonials = dynamic(() => import("@/sections/testimonials"), {
  loading: () => <TestimonialsSkeleton />,
});
const Contact = dynamic(() => import("@/sections/contact"), {
  loading: () => <ContactSkeleton />,
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
        // Clean the hash from the URL after scrolling
        window.history.replaceState(null, "", window.location.pathname);
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, []);

  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Contact />
    </>
  );
}
