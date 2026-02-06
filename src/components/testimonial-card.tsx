"use client";

import React from "react";
import { m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    photo?: string;
  };
  project?: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  project,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="p-6 sm:p-8 flex flex-col relative z-10">
          {/* Quote Icon */}
          <div className="mb-4">
            <div className="inline-flex p-2 rounded-lg bg-primary/10">
              <Quote className="h-6 w-6 text-primary" />
            </div>
          </div>

          {/* Star Rating */}
          {rating && (
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < rating
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </div>
          )}

          {/* Quote Text */}
          <blockquote className="text-base sm:text-lg text-foreground leading-relaxed mb-6 flex-grow">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Project Badge */}
          {project && (
            <div className="mb-4">
              <Badge variant="secondary" className="text-xs">
                <Building2 className="h-3 w-3 mr-1" />
                {project}
              </Badge>
            </div>
          )}

          {/* Author Info */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            {author.photo ? (
              <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                <Image
                  src={author.photo}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-2 ring-primary/20">
                <span className="text-lg font-semibold text-primary">
                  {author.name.charAt(0)}
                </span>
              </div>
            )}

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">
                {author.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {author.title}
              </p>
              <p className="text-xs text-muted-foreground/80 truncate">
                {author.company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
}
