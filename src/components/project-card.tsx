"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, X, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useMobileOptimizedMotion } from "@/hooks/use-mobile-optimized-motion";
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
  featured?: boolean;
  liveUrl?: string;
  features: string[];
  longDescription: string;
  slug?: string; // Optional for linking to dedicated project pages
  category?: string; // Optional for categorization
}

const getTagColor = (tag: string) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes("react"))
    return "bg-[#61dafb]/20 text-[#61dafb] border-[#61dafb]/30";
  if (tagLower.includes("next"))
    return "bg-black/10 text-foreground border-gray-700/20";
  if (tagLower.includes("typescript"))
    return "bg-[#3178c6]/20 text-[#3178c6] border-[#3178c6]/30";
  if (tagLower.includes("mongodb"))
    return "bg-[#47a248]/20 text-[#47a248] border-[#47a248]/30";
  if (tagLower.includes("tailwind"))
    return "bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/30";
  if (tagLower.includes("shadcn"))
    return "bg-black/10 text-foreground border-gray-700/20";
  return "bg-secondary/50 text-secondary-foreground";
};

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
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isMobile, getMotionConfig } = useMobileOptimizedMotion();
  const motionConfig = getMotionConfig();

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
        whileHover={isMobile ? motionConfig.whileHover : { 
          y: -10,
          scale: 1.02,
          rotateX: 5,
          rotateY: 5
        }}
        whileTap={motionConfig.whileTap}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={isMobile ? motionConfig.transition : { 
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        viewport={{ once: true }}
        className={cn("h-full touch-optimize", isMobile && "mobile-optimize")}
        style={isMobile ? {} : { perspective: "1000px" }}
      >
        <Card
          className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-project-title={title}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Image container with category badge */}
          <div className="relative overflow-hidden aspect-video">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
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
                  whileHover={{ 
                    scale: 1.1, 
                    y: -3,
                    rotateX: 10
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 400
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transition: `transform 0.2s ease-out ${index * 0.1}s` }}
                >
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs cursor-pointer transition-all duration-300 hover:shadow-md",
                      getTagColor(tag)
                    )}
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {tags.length > 4 && (
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="outline" className="text-xs hover:bg-muted/80 transition-colors">
                    +{tags.length - 4}
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Details dialog or link to project page */}
            {slug ? (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group relative overflow-hidden"
                  asChild
                >
                  <Link href={`/projects/${slug}`}>
                    <motion.span
                      className="absolute inset-0 bg-primary/10 rounded-md"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">View Project Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                  </Link>
                </Button>
              </motion.div>
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
                <DialogContent
                  className="max-w-3xl max-h-[90vh] overflow-y-auto"
                  forceMount
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <DialogHeader>
                      <DialogTitle>{title}</DialogTitle>
                      <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-4">
                      <div className="md:col-span-3">
                        <div className="relative aspect-video mb-4">
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
                      </div>

                      <div className="md:col-span-2">
                        <h4 className="text-lg font-medium mb-2">Features</h4>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                          {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-medium mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className={getTagColor(tag)}
                            >
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
                                <ExternalLink className="mr-2 h-4 w-4" /> Live
                                Demo
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
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
