"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code, X, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  longDescription: string;
  slug?: string; // Optional for linking to dedicated project pages
  category?: string; // Optional for categorization
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  features,
  longDescription,
  slug,
  category = "project",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // This handles the slug-based navigation if you implement dedicated project pages
  const handleViewDetails = () => {
    if (slug) {
      // Do nothing here as the link will handle navigation
      return;
    }
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-full"
      >
        <Card
          className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image container with category badge */}
          <div className="relative overflow-hidden h-48">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />

            <Image
              src={image}
              alt={title}
              width={640}
              height={360}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              onLoad={() => setImageLoaded(true)}
              priority
            />

            {/* Category badge */}
            {category && (
              <div className="absolute top-2 left-2 z-10">
                <Badge
                  variant="secondary"
                  className="capitalize text-xs font-medium"
                >
                  {category.replace("-", " ")}
                </Badge>
              </div>
            )}

            {/* Hover overlay with action buttons */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${title} source code on GitHub`}
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          <CardContent className="flex flex-col flex-grow p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              {description}
            </p>

            {/* Tags with interactive hover */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 4).map((tag, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs cursor-pointer transition-colors hover:bg-secondary/80"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {tags.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 4}
                </Badge>
              )}
            </div>

            {/* Details dialog or link to project page */}
            {slug ? (
              <Button
                variant="outline"
                size="sm"
                className="w-full group"
                asChild
              >
                <Link href={`/projects/${slug}`}>
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={handleViewDetails}
                  >
                    <Code className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                  </DialogHeader>

                  <div className="mt-4">
                    <div className="relative h-64 mb-4">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>

                    <h4 className="text-lg font-medium mb-2">
                      About this project
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {longDescription}
                    </p>

                    <h4 className="text-lg font-medium mb-2">Features</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-4">
                      {githubUrl && (
                        <Button asChild>
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </a>
                        </Button>
                      )}
                      {liveUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                      <DialogClose asChild>
                        <Button variant="ghost">
                          <X className="mr-2 h-4 w-4" /> Close
                        </Button>
                      </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
