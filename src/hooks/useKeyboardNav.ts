// hooks/useKeyboardNav.ts
import { useEffect } from "react";

export function useKeyboardNav() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add keyboard navigation
      if (e.altKey) {
        if (e.key === "h") window.location.href = "#"; // Home
        if (e.key === "a") window.location.href = "#about"; // About
        if (e.key === "s") window.location.href = "#skills"; // Skills
        if (e.key === "p") window.location.href = "#projects"; // Projects
        if (e.key === "c") window.location.href = "#contact"; // Contact
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
