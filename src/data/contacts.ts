import { Mail, Linkedin, Github, LucideIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import React from "react";

export type Contact = {
  name: string;
  className: string;
  href: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
};

export const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:drakealia@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    className: "bg-blue-600 hover:bg-blue-700",
    href: "https://www.linkedin.com/in/drake-alia/",
    icon: Linkedin,
  },
  {
    name: "X",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://x.com/Drake2Alia",
    icon: Icons.twitter,
  },
  {
    name: "Github",
    className: "bg-green-500 hover:bg-green-600",
    href: "https://github.com/DrakeAlia",
    icon: Github,
  },
];
