"use client";

import React from "react";
import { m, useReducedMotion } from "framer-motion";
import TestimonialCard from "@/components/testimonial-card";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { MessageSquareQuote } from "lucide-react";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  // If no testimonials, don't render the section
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <MessageSquareQuote className="h-4 w-4 mr-2" />
              Testimonials
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Clients Say
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from satisfied clients I&apos;ve had the pleasure of
            working with
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div
          className={`grid gap-8 ${
            testimonials.length === 1
              ? "max-w-3xl mx-auto"
              : testimonials.length === 2
              ? "md:grid-cols-2 max-w-5xl mx-auto"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              project={testimonial.project}
              rating={testimonial.rating}
              delay={shouldReduceMotion ? 0 : index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action - Optional */}
        {testimonials.length > 0 && (
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-muted-foreground">
              Interested in working together?{" "}
              <a
                href="#contact"
                className="text-primary hover:underline font-medium transition-colors"
              >
                Let&apos;s talk
              </a>
            </p>
          </m.div>
        )}
      </div>
    </section>
  );
}
