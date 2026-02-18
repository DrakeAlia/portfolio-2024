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
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const ContactList = memo(function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("drakealia@gmail.com");
      toast.success("Email copied!", {
        description: "drakealia@gmail.com",
        duration: 3000,
      });
    } catch (err) {
      toast.error("Failed to copy email", {
        description: "Please try again",
      });
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
        {contacts.map((contact, index) => {
          const isEmail = contact.name === "Email";

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                {isEmail ? (
                  <Button
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                      contact.className
                    )}
                    onClick={copyEmailToClipboard}
                    aria-label="Copy email address"
                  >
                    <contact.icon className={cn("w-5 h-5", contact.name === "X" && "fill-current")} />
                  </Button>
                ) : (
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
                      <contact.icon className={cn("w-5 h-5", contact.name === "X" && "fill-current")} />
                    </a>
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent sideOffset={6}>
                <p>{isEmail ? "Copy Email" : contact.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </MotionList>
    </TooltipProvider>
  );
});

export default ContactList;
