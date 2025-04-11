"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "InfinitePages",
        description:
          "A full-stack application for reviewing books and sharing them with others.",
        image: "/images/cover-book-reviews.png",
        longDescription:
          "This full-stack application allows users to manage and share book reviews. Users can create an account, add books to their collection, and write reviews. The application is built with Next.js, TypeScript, MongoDB, and Tailwind CSS.",
        liveUrl: "https://book-reviews-orcin.vercel.app/",
        githubUrl: "https://github.com/DrakeAlia/book-reviews",
        tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
        features: [
          "User authentication",
          "Database integration",
          "Responsive layout",
        ],
        category: "full-stack",
      },
      {
        title: "Green Thumb",
        description: "A plant monitoring app with automated watering.",
        image: "/images/cover-green-thumb.png",
        longDescription:
          "This splash page revolves around products and features for water plants remotely with a app. The splash is center around animations based on user interaction  Built with Next.js, Tailwind CSS, TypeScript, Shadcn, and Framer Motion.",
        liveUrl: "https://green-thumb-mu.vercel.app/",
        githubUrl: "https://github.com/DrakeAlia/green-thumb",
        tags: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
        ],
        features: [
          "Interactive animations",
          "Custom design system",
          "Responsive layout",
        ],
        category: "front-end",
      },
      {
        title: "VitaFlow",
        description: "A modern pharmacy and healthcare provider website.",
        image: "/images/cover-vitaflow.png",
        longDescription:
          "Designed and developed a fully-functional front-end website for VitaFlow pharmacy using Next.js and React. The site features responsive design, interactive UI components with Framer Motion animations, and a comprehensive service showcase that effectively communicates VitaFlow's healthcare offerings and brand identity.",
        liveUrl: "https://vitaflow.vercel.app/",
        githubUrl: "https://github.com/DrakeAlia/vitaflow",
        tags: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
        ],
        features: [
          "Responsive design with grid and flex layouts",
          "Interactive animations and transitions",
          "Component-based architecture",
          "Modern UI with hover effects and cards",
        ],
        category: "front-end",
      },
    ],
    []
  );

  // Extract unique categories and tags for filtering
  const allCategories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const allTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags))),
  ];

  // State for filtering and search
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
  }, [selectedCategory, selectedTag, searchValue, projects]);

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

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedTag}-${searchValue}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.title}-${index}`}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    longDescription={project.longDescription}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    features={project.features}
                  />
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