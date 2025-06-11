import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Blog</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </div>

        {/* Popular tags */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Popular Topics</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allTags.slice(0, 8).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow group touch-manipulation">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium hover:text-primary transition-colors">
                      Read Article →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular posts */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow group touch-manipulation">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sm font-medium hover:text-primary transition-colors">
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}