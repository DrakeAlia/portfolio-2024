import { memo } from "react";
import { contacts } from "@/data/contacts";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const ContactList = memo(function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
        {contacts.map((contact, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <contact.icon className="w-5 h-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </MotionList>
    </TooltipProvider>
  );
});

export default ContactList;
