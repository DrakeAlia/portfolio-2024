import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Oops! The page you`&apos;`re looking for doesn`&apos;`t exist or has
          been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </motion.div>
    </div>
  );
}
