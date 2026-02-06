"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { DialogProps } from "@radix-ui/react-dialog";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  FileText as FileIcon,
  Laptop as LaptopIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  Layout as LayoutIcon,
  Box as BoxIcon,
  Home as HomeIcon,
  User as UserIcon,
  Code as CodeIcon,
  Briefcase as BriefcaseIcon,
  Mail as MailIcon,
  MessageSquare as MessageSquareIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import { projects } from "@/lib/projects";

export function CommandMenu({
  className,
  ...props
}: DialogProps & { className?: string }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const handleScroll = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Sections">
          <CommandItem
            value="Home"
            onSelect={() => runCommand(() => handleScroll("hero"))}
          >
            <HomeIcon className="mr-2 h-4 w-4" />
            Home
          </CommandItem>
          <CommandItem
            value="About"
            onSelect={() => runCommand(() => handleScroll("about"))}
          >
            <UserIcon className="mr-2 h-4 w-4" />
            About
          </CommandItem>
          <CommandItem
            value="Skills"
            onSelect={() => runCommand(() => handleScroll("skills"))}
          >
            <CodeIcon className="mr-2 h-4 w-4" />
            Skills
          </CommandItem>
          <CommandItem
            value="Projects"
            onSelect={() => runCommand(() => handleScroll("projects"))}
          >
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Projects
          </CommandItem>
          <CommandItem
            value="Testimonials"
            onSelect={() => runCommand(() => handleScroll("testimonials"))}
          >
            <MessageSquareIcon className="mr-2 h-4 w-4" />
            Testimonials
          </CommandItem>
          <CommandItem
            value="Contact"
            onSelect={() => runCommand(() => handleScroll("contact"))}
          >
            <MailIcon className="mr-2 h-4 w-4" />
            Contact
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Featured Projects">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <CommandItem
                key={project.slug}
                value={project.title}
                onSelect={() =>
                  runCommand(() => {
                    if (project.liveUrl) {
                      window.open(project.liveUrl, "_blank");
                    }
                  })
                }
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                {project.title}
              </CommandItem>
            ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <SunIcon className="mr-2 h-4 w-4" />
            Light
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <MoonIcon className="mr-2 h-4 w-4" />
            Dark
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <LaptopIcon className="mr-2 h-4 w-4" />
            System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}