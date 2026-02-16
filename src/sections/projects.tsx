"use client";

import React, { useState, useEffect } from "react";
import { m, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "../lib/projects";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const cardVariantsReduced = {
  hidden: { opacity: 0, filter: "blur(0px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.01 },
  },
};

// Lazy loaded project card wrapper
function LazyProjectCard({ project, index, shouldReduceMotion }: { project: any; index: number; shouldReduceMotion: boolean }) {
  return (
    <m.div
      variants={shouldReduceMotion ? cardVariantsReduced : cardVariants}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectCard {...project} />
    </m.div>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setSwipeDirection('left');
    setTimeout(() => setSwipeDirection(null), 300);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setSwipeDirection('right');
    setTimeout(() => setSwipeDirection(null), 300);
  };

  const swipeRef = useSwipeGesture({
    onSwipeLeft: nextPage,
    onSwipeRight: prevPage,
  });

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Projects</h2>
          <p className="text-base sm:text-lg text-center text-muted-foreground max-w-2xl">
            Explore my recent projects showcasing my expertise in modern web
            development
          </p>
          {isClient && totalPages > 1 && (
            <m.div
              className="flex items-center gap-2 text-sm text-muted-foreground"
              animate={shouldReduceMotion ? {} : (swipeDirection ? { x: swipeDirection === 'left' ? -10 : 10 } : { x: 0 })}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
            >
              {swipeDirection === 'right' && <span>← </span>}
              <span className="md:hidden">Swipe left/right</span>
              <span className="hidden md:inline">Use navigation buttons</span>
              <span>• Page {currentPage + 1} of {totalPages}</span>
              {swipeDirection === 'left' && <span> →</span>}
            </m.div>
          )}
        </m.div>

        {/* Navigation buttons for desktop */}
        {isClient && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={currentPage === 0}
              className="hidden md:flex"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className="group p-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                  aria-label={`Go to page ${i + 1}`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? "w-8 h-3 bg-primary"
                        : "w-3 h-3 sm:w-4 sm:h-4 bg-muted-foreground/30 group-hover:bg-muted-foreground/50 group-active:scale-125"
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="hidden md:flex"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}

        {/* Projects grid with swipe support */}
        <m.div
          key={`projects-page-${currentPage}`}
          ref={swipeRef}
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 touch-pan-y"
        >
          {currentProjects.map((project, index) => (
            <LazyProjectCard
              key={`${project.title}-${currentPage}-${index}`}
              project={project}
              index={index}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
}
