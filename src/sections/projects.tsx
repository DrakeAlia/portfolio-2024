"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

export default function Projects() {
  const projects = [
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
    },
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
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 mb-16"
        >
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl">
            Explore my recent projects showcasing my expertise in modern web
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="space-x-4">
                        <Button variant="secondary" size="sm" asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Key Features:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Project
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
