"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { skills, categories, Skill } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        {/* Skills by Category */}
        <div ref={ref} className="space-y-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <m.div
                key={category}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.1 + catIndex * 0.1,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="text-sm px-3 py-1.5 font-medium shrink-0 transition-colors hover:bg-primary/10 hover:text-primary">
                    {category.replace(" Development", "").replace("Tools & Environment", "Tools")}
                  </Badge>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {categorySkills.map((skill, index) => (
                    <m.div
                      key={skill.name}
                      className="flex justify-center"
                      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.3,
                        delay: shouldReduceMotion ? 0 : 0.2 + catIndex * 0.1 + index * 0.03,
                      }}
                    >
                      <SkillBubble skill={skill} shouldReduceMotion={shouldReduceMotion ?? false} index={index} />
                    </m.div>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>
        </div>
      </TooltipProvider>
    </section>
  );
}

function SkillBubble({ skill, shouldReduceMotion = false, index = 0 }: { skill: Skill; shouldReduceMotion?: boolean; index?: number }) {
  const isPlaceholder = skill.icon.src && skill.icon.src.includes("placeholder");
  const dimensions = "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex flex-col items-center group cursor-pointer w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[140px]"
        >
          <m.div
            className={`${dimensions} flex items-center justify-center rounded-xl sm:rounded-2xl bg-background shadow-sm transition-all duration-300 hover:shadow-lg`}
            style={{
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'hsl(var(--border))'
            }}
            whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <m.div
              className="relative mx-auto w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1] }}
              transition={shouldReduceMotion ? {} : {
                scale: { duration: 3 + (index % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {isPlaceholder ? (
                <Sparkles className="w-full h-full text-primary" />
              ) : (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              )}
            </m.div>
          </m.div>
          <span
            className="mt-2 text-center font-medium transition-colors duration-300 text-[11px] sm:text-xs md:text-sm text-foreground group-hover:text-primary"
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
