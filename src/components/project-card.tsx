"use client";

import React, { useState, memo, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, X, ArrowRight, Calendar } from "lucide-react";
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
  completedDate?: string; // Optional completion date display
}

// Move getTagColor outside component to prevent recreation on every render
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

const ProjectCard = memo(function ProjectCard({
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
  completedDate,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showExpandedDescription, setShowExpandedDescription] = useState(false);
  const { isMobile, getMotionConfig } = useMobileOptimizedMotion();
  const motionConfig = useMemo(() => getMotionConfig(), [getMotionConfig]);

  // Memoize callbacks to prevent unnecessary re-renders
  const handleImageLoad = useCallback(() => setImageLoaded(true), []);
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setShowExpandedDescription(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setShowExpandedDescription(false);
  }, []);

  return (
    <>
      <m.div
        whileHover={isMobile ? motionConfig.whileHover : { y: -8 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className={cn("h-full touch-optimize", isMobile && "mobile-optimize")}
      >
        <Card
          className="overflow-hidden h-full flex flex-col shadow-lg transition-all duration-300 relative group active:scale-[0.98] hover:shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          data-project-title={title}
        >
          {/* Image container */}
          <div className="relative overflow-hidden aspect-video">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <m.div
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
              onLoad={handleImageLoad}
              loading="lazy"
            />

            {/* Hover overlay with action buttons */}
            <m.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-2">
                {githubUrl && (
                  <m.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${title} source code on GitHub`}
                  >
                    <Github size={20} />
                  </m.a>
                )}
                {liveUrl && (
                  <m.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </m.a>
                )}
              </div>
            </m.div>
          </div>

          <CardContent className="flex flex-col flex-grow p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>

            {/* Description with expand on hover */}
            <div className="mb-4 flex-grow relative">
              <AnimatePresence mode="wait">
                {!showExpandedDescription ? (
                  <m.div key="short">
                    <m.p
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-muted-foreground line-clamp-3"
                    >
                      {description}
                    </m.p>
                    {completedDate && (
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-2">
                        <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                        Completed {completedDate}
                      </p>
                    )}
                  </m.div>
                ) : (
                  <m.div
                    key="expanded"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground text-sm"
                  >
                    <p className="mb-3 font-medium text-foreground">{description}</p>
                    {completedDate && (
                      <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mb-3">
                        <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                        Completed {completedDate}
                      </p>
                    )}
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold text-foreground/80">Quick Preview:</p>
                      {features.slice(0, 3).map((feature, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          className="flex items-start gap-1.5"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          <span className="text-xs">{feature}</span>
                        </m.div>
                      ))}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tags - simplified without individual animations */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 4).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={cn(
                    "text-xs transition-all duration-200 hover:scale-105",
                    getTagColor(tag)
                  )}
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 4 && (
                <Badge variant="outline" className="text-xs hover:bg-muted/80 transition-colors">
                  +{tags.length - 4}
                </Badge>
              )}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex gap-2">
                {liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(liveUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    Live Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(githubUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <Github className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
                    GitHub
                  </Button>
                )}
              </div>
            </div>

            {/* Details dialog or link to project page */}
            {slug ? (
              <Button
                variant="ghost"
                size="sm"
                className="w-full group"
                asChild
              >
                <Link href={`/projects/${slug}`}>
                  View Full Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full"
                  >
                    <Code className="mr-2 h-4 w-4" /> View Full Details
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-3xl max-h-[90vh] overflow-y-auto"
                  forceMount
                >
                  <m.div
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
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
                  </m.div>
                </DialogContent>
              </Dialog>
            )}
          </CardContent>
        </Card>
      </m.div>
    </>
  );
});

export default ProjectCard;
