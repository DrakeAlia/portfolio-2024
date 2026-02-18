"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const links = ["home", "about", "skills", "projects", "testimonials", "contact"];

  const handleLinkClick = (link: string) => {
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
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Tagline Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex-shrink-0">
              <div className="text-2xl md:text-3xl font-bold text-primary hover:scale-105 transition-transform">
                DA
              </div>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building exceptional digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-1 sm:gap-y-2">
              {links.map((link) => (
                <span
                  key={link}
                  className="cursor-pointer text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => handleLinkClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </span>
              ))}
            </nav>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex items-center space-x-3">
              <Link
                href="https://github.com/DrakeAlia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "group"
                  )}
                >
                  <Github className="h-5 w-5 transition-colors duration-200 group-hover:text-primary" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/drake-alia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "group"
                  )}
                >
                  <Linkedin className="h-5 w-5 transition-colors duration-200 group-hover:text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    }),
                    "group"
                  )}
                >
                  <Icons.twitter className="h-5 w-5 fill-current transition-colors duration-200 group-hover:text-primary" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Drake Alia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
