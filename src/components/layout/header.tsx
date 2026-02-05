"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "../command-menu";
import { ModeToggle } from "../mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setIsMobileMenuOpen(false);
    if (link === "home") {
      // Navigate to home page / scroll to top
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
    } else {
      // Check if we're on the home page
      if (window.location.pathname === "/") {
        // We're on home page, just scroll to section
        document
          .getElementById(link)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        // We're on a different page, navigate to home page with hash
        window.location.href = `/#${link}`;
      }
    }
  };

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
          <div className="text-xl md:text-2xl font-bold text-primary hover:scale-105 transition-transform">
            DA
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8 lg:space-x-12">
          {links.map((link) => (
            <span
              key={link}
              className="cursor-pointer text-sm font-medium hover:text-primary transition-colors duration-200"
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </span>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center space-x-2">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-8 h-8 p-0 md:w-9 md:h-9"
                )}
              >
                <Icons.gitHub className="h-3 w-3 md:h-4 md:w-4" />
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
                  "w-8 h-8 p-0 md:w-9 md:h-9"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
          
          <ModeToggle />
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
          
          <CommandMenu className="hidden" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {links.map((link) => (
                  <button
                    key={link}
                    className="text-left text-base font-medium hover:text-primary transition-colors duration-200 py-2 px-2 hover:bg-accent rounded-md"
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/40">
                  <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Icons.gitHub className="h-4 w-4" />
                      <span>GitHub</span>
                    </div>
                  </Link>
                  <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Icons.twitter className="h-4 w-4 fill-current" />
                      <span>Twitter</span>
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}