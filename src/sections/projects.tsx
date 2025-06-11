"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "../lib/projects";
import { useSwipeGesture } from "@/hooks/use-swipe-gesture";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 mb-8"
        >
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl">
            Explore my recent projects showcasing my expertise in modern web
            development
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-muted-foreground">
              Swipe left/right on mobile or use navigation buttons • Page {currentPage + 1} of {totalPages}
            </p>
          )}
        </motion.div>

        {/* Navigation buttons for desktop */}
        {totalPages > 1 && (
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
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
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
        <motion.div
          ref={swipeRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 touch-pan-y"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${currentPage}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
