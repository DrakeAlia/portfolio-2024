import Link from "next/link";

/**
 * Prefetch important pages for faster navigation
 * This component doesn't render anything but tells Next.js to prefetch pages
 */
export function PrefetchLinks() {
  return (
    <>
      {/* Prefetch project pages - hidden links for prefetching */}
      <div className="hidden">
        <Link href="/projects" prefetch={true}>
          Projects
        </Link>
      </div>
    </>
  );
}
