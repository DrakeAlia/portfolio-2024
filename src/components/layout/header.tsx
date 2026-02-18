"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "../command-menu";
import { ModeToggle } from "../mode-toggle";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, Linkedin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "testimonials", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setIsSheetOpen(false);
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4 touch-pan-y">
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
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Desktop Social Links */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "p-0 group"
                )}
              >
                <Icons.gitHub className="h-4 w-4 transition-colors duration-200 group-hover:text-primary" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/drake-alia/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "p-0 group"
                )}
              >
                <Linkedin className="h-4 w-4 transition-colors duration-200 group-hover:text-primary" />
                <span className="sr-only">LinkedIn</span>
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
                    size: "icon",
                  }),
                  "p-0 group"
                )}
              >
                <Icons.twitter className="h-4 w-4 fill-current transition-colors duration-200 group-hover:text-primary" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </div>
          
          <ModeToggle />

          {/* Mobile menu sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
                <SheetDescription className="text-left">
                  Explore my portfolio sections
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 flex flex-col space-y-6">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {links.map((link) => (
                    <Button
                      key={link}
                      variant="ghost"
                      className="justify-start text-base font-medium hover:text-primary hover:bg-accent/50 transition-all duration-200"
                      onClick={() => handleLinkClick(link)}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </Button>
                  ))}
                </nav>

                <Separator />

                {/* Social Links */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground">Connect</p>
                  <div className="flex flex-col space-y-2">
                    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                      <Button
                        variant="ghost"
                        className="w-full justify-start hover:text-primary hover:bg-accent/50 transition-all duration-200"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <Icons.gitHub className="h-5 w-5 mr-3" />
                        <span>GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/drake-alia/" target="_blank" rel="noreferrer">
                      <Button
                        variant="ghost"
                        className="w-full justify-start hover:text-primary hover:bg-accent/50 transition-all duration-200"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <Linkedin className="h-5 w-5 mr-3" />
                        <span>LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                      <Button
                        variant="ghost"
                        className="w-full justify-start hover:text-primary hover:bg-accent/50 transition-all duration-200"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <Icons.twitter className="h-5 w-5 mr-3 fill-current" />
                        <span>Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>

                <Separator />

                {/* Theme Toggle in Sheet */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground">Theme</p>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <CommandMenu className="hidden" />
        </div>
      </div>
    </motion.header>
  );
}