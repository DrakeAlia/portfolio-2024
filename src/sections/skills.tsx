"use client";

import { useState } from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skills, categories, Skill } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Featured skills to highlight
  const featuredSkills = ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"];
  const featured = skills.filter((skill) => featuredSkills.includes(skill.name));

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 xl:py-24 overflow-visible">
      <TooltipProvider delayDuration={200}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Tech Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </m.div>

        {/* Featured Skills */}
        <m.div
          ref={ref}
          className="mb-12 pt-2"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto pt-4">
            {featured.map((skill, index) => (
              <m.div
                key={skill.name}
                className="flex justify-center"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                animate={shouldReduceMotion ? (inView ? { opacity: 1, scale: 1 } : {}) : (inView ? { opacity: 1, scale: 1, y: [0, -6, 0] } : {})}
                transition={shouldReduceMotion ? { duration: 0.01 } : {
                  opacity: { duration: 0.4, delay: 0.3 + index * 0.08 },
                  scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 + index * 0.08 },
                  y: { duration: 2.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <SkillBubble skill={skill} featured shouldReduceMotion={shouldReduceMotion ?? false} index={index} />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Tabbed Categories */}
        <m.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
        >
          <Tabs defaultValue={categories[0]} className="w-full overflow-visible">
            {/* Horizontal scrollable tabs on mobile */}
            <div className="relative mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="overflow-x-auto pb-2 pt-1 pr-8 scrollbar-hide touch-pan-x">
                <TabsList className="inline-flex w-auto min-w-full sm:grid sm:w-full sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 bg-transparent">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 rounded-lg border-2 border-border min-h-[48px] min-w-[110px] sm:min-w-0 whitespace-nowrap transition-all hover:border-primary/50 touch-manipulation"
                    >
                      {category.replace(" Development", "").replace("Tools & Environment", "Tools")}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {/* Scroll indicator for mobile */}
              <div className="absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none sm:hidden" />
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0 overflow-visible">
                <div>
                  <m.div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 py-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.05,
                        },
                      },
                    }}
                  >
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <m.div
                        key={skill.name}
                        className="flex justify-center"
                        variants={{
                          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <SkillBubble skill={skill} shouldReduceMotion={shouldReduceMotion ?? false} index={index} />
                      </m.div>
                    ))}
                  </m.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </m.div>
        </div>
      </TooltipProvider>
    </section>
  );
}

function SkillBubble({ skill, featured = false, shouldReduceMotion = false, index = 0 }: { skill: Skill; featured?: boolean; shouldReduceMotion?: boolean; index?: number }) {
  const isPlaceholder = skill.icon.src && skill.icon.src.includes("placeholder");

  const size = featured ? "lg" : "md";
  const dimensions = {
    lg: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
    md: "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex flex-col items-center group cursor-pointer w-full max-w-[100px] sm:max-w-[120px]"
        >
          <m.div
            className={`${dimensions[size]} flex items-center justify-center rounded-xl sm:rounded-2xl bg-background shadow-sm transition-all duration-300 hover:shadow-lg`}
            style={featured ? {
              borderWidth: '2px',
              borderStyle: 'solid',
            } : {
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'hsl(var(--border))'
            }}
            animate={shouldReduceMotion ? {} : (featured ? {
              borderColor: ['hsl(var(--primary) / 0.3)', 'hsl(var(--primary) / 0.7)', 'hsl(var(--primary) / 0.3)']
            } : {})}
            transition={shouldReduceMotion ? {} : (featured ? {
              borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            } : {})}
            whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <m.div
              className={`relative mx-auto ${featured ? "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" : "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"}`}
              animate={shouldReduceMotion ? {} : (!featured ? { scale: [1, 1.04, 1] } : {})}
              transition={shouldReduceMotion ? {} : (!featured ? {
                scale: { duration: 3 + (index % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }
              } : {})}
            >
              {isPlaceholder ? (
                <Sparkles className="w-full h-full text-primary" />
              ) : (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={featured ? 48 : 40}
                  height={featured ? 48 : 40}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              )}
            </m.div>
          </m.div>
          <span
            className={`mt-2 text-center font-medium transition-colors duration-300 ${
              featured ? "text-xs sm:text-sm md:text-base" : "text-[11px] sm:text-xs md:text-sm"
            } text-foreground group-hover:text-primary`}
          >
            {skill.name}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[200px] text-center z-50">
        <p className="text-xs">{skill.description}</p>
      </TooltipContent>
    </Tooltip>
  );
}
