"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Clock, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <Button variant="ghost" asChild className="group touch-manipulation">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{project.title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">{project.description}</p>
              
              {/* Meta information */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                {project.completedAt && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Completed {project.completedAt}</span>
                  </div>
                )}
                {caseStudy?.timeline && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{caseStudy.timeline} duration</span>
                  </div>
                )}
                {caseStudy?.role && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{caseStudy.role}</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                {project.liveUrl && (
                  <Button asChild className="touch-manipulation">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild className="touch-manipulation">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project image */}
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Case Study Section */}
        {caseStudy && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400">The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600 dark:text-green-400">The Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Challenges */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Challenges & Approach</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Decisions */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Technical Decisions</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-4">
                  {caseStudy.techDecisions.map((decision, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-3 sm:pl-4">
                      <h4 className="font-semibold text-sm sm:text-base text-blue-600 dark:text-blue-400 mb-1">
                        {decision.decision}
                      </h4>
                      <p className="text-sm text-muted-foreground">{decision.reasoning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


            {/* Learnings */}
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl">Key Learnings</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <ul className="space-y-3">
                  {caseStudy.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Navigation to other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects
              .filter((p) => p.slug !== params.slug && p.slug)
              .slice(0, 2)
              .map((otherProject) => (
                <Card key={otherProject.slug} className="group hover:shadow-lg transition-shadow touch-manipulation">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          sizes="(max-width: 640px) 64px, 80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          {otherProject.description}
                        </p>
                        <Button variant="ghost" size="sm" asChild className="touch-manipulation">
                          <Link href={`/projects/${otherProject.slug}`}>
                            View Project <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}