"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 3);

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
            <span>•</span>
            <Badge variant="secondary" className="capitalize">
              {post.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button variant="ghost" size="sm" onClick={sharePost}>
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </motion.header>

        <Separator className="mb-12" />

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .split('\n')
              .map(line => {
                if (line.startsWith('#')) {
                  const level = line.match(/^#+/)?.[0].length || 1;
                  const text = line.replace(/^#+\s*/, '');
                  return `<h${level}>${text}</h${level}>`;
                }
                if (line.startsWith('```')) {
                  return line.includes('```') ? '<pre><code>' : '</code></pre>';
                }
                if (line.startsWith('- ')) {
                  return `<li>${line.replace(/^-\s*/, '')}</li>`;
                }
                if (line.trim() === '') {
                  return '<br>';
                }
                return `<p>${line}</p>`;
              })
              .join('')
              .replace(/<li>/g, '<ul><li>')
              .replace(/<\/li>(?!\s*<li>)/g, '</li></ul>')
              .replace(/<ul><\/li><ul>/g, '<ul>')
              .replace(/<\/ul><li>/g, '<li>')
          }}
        />

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t pt-12"
          >
            <h2 className="text-2xl font-bold mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}