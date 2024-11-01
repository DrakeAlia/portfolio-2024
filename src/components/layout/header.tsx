"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "../command-menu";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";

const goldenSignature = localFont({
  src: "../../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const links = ["about", "skills", "projects"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled ? "bg-background/95 shadow-md" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left section */}
        <Link href="/" className="flex-shrink-0">
          <motion.div
            className={cn(
              "text-3xl md:text-4xl font-bold text-primary",
              goldenSignature.className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Drake Alia
          </motion.div>
        </Link>

        {/* Center section */}
        <motion.nav
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => (
            <motion.span
              key={link}
              className="cursor-pointer text-sm font-medium hover:text-primary transition-colors duration-200"
              variants={childVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document
                  .getElementById(link)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </motion.span>
          ))}
        </motion.nav>

        {/* Right section */}
        <motion.div
          className="flex items-center space-x-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.twitter className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
          <ModeToggle />
          <CommandMenu className="hidden" />{" "}
          {/* Hidden but keeping functionality */}
        </motion.div>
      </div>
    </motion.header>
  );
}