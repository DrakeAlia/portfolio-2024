export function SkillsSkeleton() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 h-6 w-24 bg-muted rounded-full animate-pulse" />
          <div className="h-10 w-64 mx-auto bg-muted rounded-md mb-4 animate-pulse" />
          <div className="h-6 w-96 max-w-full mx-auto bg-muted rounded-md animate-pulse" />
        </div>

        {/* Featured Skills Skeleton */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-muted rounded-2xl animate-pulse" />
                <div className="mt-2 h-4 w-16 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-8">
          <div className="flex gap-3 justify-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>

          {/* Skills Grid Skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-2xl animate-pulse" />
                <div className="mt-2 h-3 w-12 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="h-10 w-48 bg-muted rounded-md animate-pulse" />
          <div className="h-6 w-96 max-w-full bg-muted rounded-md animate-pulse" />
          <div className="h-4 w-64 bg-muted rounded-md animate-pulse" />
        </div>

        {/* Navigation Skeleton */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="h-10 w-24 bg-muted rounded-md animate-pulse hidden md:block" />
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-muted rounded-full animate-pulse" />
            ))}
          </div>
          <div className="h-10 w-24 bg-muted rounded-md animate-pulse hidden md:block" />
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-border shadow-lg relative">
              {/* Featured Badge Skeleton (show on first card) */}
              {i === 0 && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="h-7 w-24 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-bl-lg animate-pulse" />
                </div>
              )}

              {/* Image Skeleton with category badge */}
              <div className="aspect-video bg-muted animate-pulse relative">
                <div className="absolute top-2 left-2">
                  <div className="h-5 w-20 bg-muted-foreground/20 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="p-4 space-y-4">
                {/* Title */}
                <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-4/6 bg-muted rounded animate-pulse" />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                  ))}
                </div>

                {/* Quick Action Buttons Skeleton */}
                <div className="flex gap-2">
                  <div className="h-9 flex-1 bg-muted rounded-md animate-pulse" />
                  <div className="h-9 flex-1 bg-muted rounded-md animate-pulse" />
                </div>

                {/* Details Button Skeleton */}
                <div className="h-9 w-full bg-muted/50 rounded-md animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-32 bg-muted rounded-full animate-pulse" />
          </div>
          <div className="h-10 w-64 mx-auto bg-muted rounded-md mb-4 animate-pulse" />
          <div className="h-6 w-96 max-w-full mx-auto bg-muted rounded-md animate-pulse" />
        </div>

        {/* Testimonial Card Skeleton - centered single card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-border shadow-lg p-6 sm:p-8">
            {/* Quote Icon */}
            <div className="mb-4">
              <div className="h-10 w-10 bg-muted rounded-lg animate-pulse" />
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-muted rounded animate-pulse" />
              ))}
            </div>

            {/* Quote Text */}
            <div className="space-y-3 mb-6">
              <div className="h-5 w-full bg-muted rounded animate-pulse" />
              <div className="h-5 w-full bg-muted rounded animate-pulse" />
              <div className="h-5 w-4/5 bg-muted rounded animate-pulse" />
            </div>

            {/* Project Badge */}
            <div className="mb-4">
              <div className="h-6 w-40 bg-muted rounded-full animate-pulse" />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="h-12 w-12 rounded-full bg-muted animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-32 bg-muted rounded animate-pulse" />
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
                <div className="h-3 w-28 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center mt-12">
          <div className="h-5 w-64 mx-auto bg-muted rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export function ContactSkeleton() {
  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Skeleton */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="h-10 w-64 mx-auto bg-muted rounded-md mb-3 sm:mb-4 animate-pulse" />
          <div className="h-5 w-96 max-w-full mx-auto bg-muted rounded-md animate-pulse" />
        </div>

        {/* Form Skeleton */}
        <div className="max-w-2xl mx-auto">
          <div className="shadow-lg rounded-lg border border-border p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                <div className="h-11 sm:h-12 w-full bg-muted rounded-md animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                <div className="h-11 sm:h-12 w-full bg-muted rounded-md animate-pulse" />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
              <div className="h-11 sm:h-12 w-full bg-muted rounded-md animate-pulse" />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
              <div className="h-24 sm:h-32 w-full bg-muted rounded-md animate-pulse" />
            </div>

            {/* Button */}
            <div className="h-11 sm:h-12 w-full bg-muted rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
