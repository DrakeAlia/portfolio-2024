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
            <div key={i} className="overflow-hidden rounded-lg border border-border shadow-lg">
              {/* Image Skeleton */}
              <div className="aspect-video bg-muted animate-pulse" />

              {/* Content Skeleton */}
              <div className="p-4 space-y-4">
                <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-muted rounded-full animate-pulse" />
                  ))}
                </div>

                {/* Button Skeleton */}
                <div className="h-10 w-full bg-muted rounded-md animate-pulse" />
              </div>
            </div>
          ))}
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
