"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { projects, Project } from "../lib/projects";

export default function Projects() {
  // Extract unique categories and tags for filtering
  const allCategories = [
    "all",
    ...Array.from(
      new Set(projects.map((project: Project) => project.category))
    ),
  ] as string[];
  const allTags = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((project: Project) => project.tags))
    ),
  ] as string[];

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Format category names for display
  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Filter projects when any filter changes
  useEffect(() => {
    setIsLoading(true);
    let result = projects;

    const timer = setTimeout(() => {
      let result = projects;

      // Filter by category
      if (selectedCategory !== "all") {
        result = result.filter(
          (project) => project.category === selectedCategory
        );
      }

      // Filter by tag
      if (selectedTag !== "all") {
        result = result.filter((project) => project.tags.includes(selectedTag));
      }

      // Filter by search
      if (searchValue.trim() !== "") {
        const searchLower = searchValue.toLowerCase();
        result = result.filter(
          (project) =>
            project.title.toLowerCase().includes(searchLower) ||
            project.description.toLowerCase().includes(searchLower) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      }

      setFilteredProjects(result);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, selectedTag, searchValue]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedTag("all");
    setSearchValue("");
  };

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
        </motion.div>

        {/* Search and filter controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Search input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pl-8 w-full"
              />
              {searchValue && (
                <button
                  className="absolute right-2 top-2.5 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchValue("")}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter toggle for mobile */}
            <div className="md:hidden w-full">
              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span>Filters</span>
                <Filter className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Desktop filters */}
            <div className="hidden md:flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 flex-wrap">
                {allCategories.map((category) => (
                  <Button
                    key={`category-${category}`}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {formatCategoryName(category)}
                  </Button>
                ))}
              </div>

              <div className="w-[1px] h-6 bg-border mx-1"></div>

              <div className="flex items-center gap-1 flex-wrap">
                {allTags.slice(0, 5).map((tag) => (
                  <Button
                    key={`tag-${tag}`}
                    variant={selectedTag === tag ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
                {allTags.length > 5 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    +{allTags.length - 5} more
                  </Button>
                )}
              </div>

              {(selectedCategory !== "all" ||
                selectedTag !== "all" ||
                searchValue) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="ml-2"
                >
                  <X className="h-3 w-3 mr-1" /> Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Mobile filters (expanding) */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden mt-4"
              >
                <div className="p-4 border rounded-md bg-card">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map((category) => (
                        <Button
                          key={`mobile-category-${category}`}
                          variant={
                            selectedCategory === category
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="capitalize"
                        >
                          {formatCategoryName(category)}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Button
                          key={`mobile-tag-${tag}`}
                          variant={selectedTag === tag ? "secondary" : "ghost"}
                          size="sm"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {(selectedCategory !== "all" || selectedTag !== "all") && (
                    <div className="mt-4 pt-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetFilters}
                        className="w-full"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center my-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedTag}-${searchValue}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Card className="h-[400px] overflow-hidden relative">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        animate={{ x: [-200, 400] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatDelay: 1,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative aspect-video bg-muted animate-pulse" />
                      <CardContent className="p-4">
                        <motion.div 
                          className="h-6 w-3/4 bg-muted rounded mb-4"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.div 
                          className="h-4 bg-muted rounded mb-2"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="h-4 w-2/3 bg-muted rounded mb-6"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        />
                        <div className="flex gap-2 mb-4">
                          {[1, 2, 3].map((j) => (
                            <motion.div
                              key={j}
                              className="h-5 w-16 bg-muted rounded"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                delay: 0.6 + j * 0.1 
                              }}
                            />
                          ))}
                        </div>
                        <motion.div 
                          className="h-9 bg-muted rounded mt-auto"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.title}-${index}`}
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
              </div>
            ) : (
              <div className="text-center py-20 border rounded-lg bg-card">
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search criteria.
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
