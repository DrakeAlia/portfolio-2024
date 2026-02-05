"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills, categories, Skill } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Featured skills to highlight
  const featuredSkills = ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"];
  const featured = skills.filter((skill) => featuredSkills.includes(skill.name));

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Tech Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </m.div>

        {/* Featured Skills */}
        <m.div
          ref={ref}
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {featured.map((skill, index) => (
              <m.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <SkillBubble skill={skill} featured />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Tabbed Categories */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm sm:text-base py-2 px-3 rounded-lg border border-border"
                >
                  {category.replace(" Development", "")}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <SkillBubble key={skill.name} skill={skill} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </m.div>
      </div>
    </section>
  );
}

function SkillBubble({ skill, featured = false }: { skill: Skill; featured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const isPlaceholder = skill.icon.src && skill.icon.src.includes("placeholder");

  const size = featured ? "lg" : "md";
  const dimensions = {
    lg: "w-20 h-20 sm:w-24 sm:h-24",
    md: "w-16 h-16 sm:w-20 sm:h-20",
  };

  return (
    <div
      className="flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <m.div
        className={`${dimensions[size]} flex items-center justify-center rounded-2xl bg-background border-2 ${
          featured ? "border-primary/50" : "border-border"
        } shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary ${
          featured ? "hover:scale-110" : "hover:scale-105"
        }`}
        whileHover={{ y: -4 }}
      >
        <div className={`relative ${featured ? "w-10 h-10 sm:w-12 sm:h-12" : "w-8 h-8 sm:w-10 sm:h-10"}`}>
          {isPlaceholder ? (
            <Sparkles className="w-full h-full text-primary" />
          ) : (
            <Image
              src={skill.icon}
              alt={skill.name}
              width={featured ? 48 : 40}
              height={featured ? 48 : 40}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </div>
      </m.div>
      <span
        className={`mt-2 text-center font-medium transition-colors duration-300 ${
          featured ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        } ${isHovered ? "text-primary" : "text-foreground"}`}
      >
        {skill.name}
      </span>
    </div>
  );
}
