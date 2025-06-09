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
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="group">
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
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
              
              {/* Meta information */}
              <div className="flex flex-wrap gap-4 mb-6">
                {project.completedAt && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Completed {project.completedAt}</span>
                  </div>
                )}
                {caseStudy?.timeline && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{caseStudy.timeline} duration</span>
                  </div>
                )}
                {caseStudy?.role && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{caseStudy.role}</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 mb-6">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
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
                className="object-cover"
                priority
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
              <CardHeader>
                <CardTitle>Challenges & Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Decisions */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseStudy.techDecisions.map((decision, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        {decision.decision}
                      </h4>
                      <p className="text-sm text-muted-foreground">{decision.reasoning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-lg text-primary mb-2">{outcome.value}</h4>
                      <p className="text-sm text-muted-foreground">{outcome.metric}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learnings */}
            <Card>
              <CardHeader>
                <CardTitle>Key Learnings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {caseStudy.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{learning}</span>
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
          className="mt-16 pt-8 border-t"
        >
          <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.slug !== params.slug && p.slug)
              .slice(0, 2)
              .map((otherProject) => (
                <Card key={otherProject.slug} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={otherProject.image}
                          alt={otherProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {otherProject.description}
                        </p>
                        <Button variant="ghost" size="sm" asChild>
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