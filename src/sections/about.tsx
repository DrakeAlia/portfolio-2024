"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Code, Rocket, Download } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const handleDownloadResume = () => {
    // The path to your resume PDF file
    const resumeUrl = "/path/to/your/resume.pdf";

    // Creating a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Name_Resume.pdf"; // Set the desired file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="about"
      className="mx-auto my-16 px-4 md:px-8 max-w-6xl rounded-xl py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center relative inline-block"
        variants={itemVariants}
      >
        About Me
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-blue-500"
          variants={underlineVariants}
        />
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="h-full">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              {["paragraph1", "paragraph2", "paragraph3"].map((key, index) => (
                <motion.p
                  key={key}
                  className="mb-4"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.5 }}
                >
                  {key === "paragraph1" && (
                    <>
                      I&apos;m a passionate and innovative UI Developer hailing
                      from the vibrant and tech-forward Greater Seattle Area.
                      With a strong foundation in TypeScript, Next.js, React,
                      and Tailwind CSS, I specialize in crafting engaging,
                      responsive, and user-friendly web experiences.
                    </>
                  )}
                  {key === "paragraph2" && (
                    <>
                      I thrive on challenges and continuously strive to push the
                      boundaries of what&apos;s possible in web development.
                      Whether it&apos;s building dynamic applications or
                      designing intuitive user interfaces, I am dedicated to
                      delivering high-quality solutions that exceed
                      expectations.
                    </>
                  )}
                  {key === "paragraph3" && (
                    <>
                      My approach to frontend engineering is akin to the art of
                      cooking—a process where meticulous preparation, innovative
                      use of ingredients, and an understanding of complex
                      techniques come together to create something
                      extraordinary.
                    </>
                  )}
                </motion.p>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-2xl mx-auto lg:max-w-full flex flex-col items-center"
        >
          <CardContainer className="w-full max-w-md">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-all duration-300 hover:scale-105">
              <CardItem
                translateZ="100"
                className="w-full aspect-[4/3] transition-transform duration-300 group-hover:scale-110"
              >
                <Image
                  src="/images/photo.png"
                  alt="Drake Alia"
                  width={450}
                  height={400}
                  className="rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          <motion.div
            className="mt-4 flex justify-center space-x-4"
            variants={itemVariants}
          >
            {[
              { icon: Code, tooltip: "Innovative Coder" },
              { icon: Rocket, tooltip: "Problem Solver" },
              { icon: ChefHat, tooltip: "UI Chef" },
            ].map((item) => (
              <motion.div
                key={item.tooltip}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant="secondary"
                        className="p-3 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                      >
                        <item.icon size={18} />
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 text-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="lg" className=" " onClick={handleDownloadResume}>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </motion.div>
    </motion.section>
  );
}
