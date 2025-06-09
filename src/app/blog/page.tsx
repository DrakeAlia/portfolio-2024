"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </motion.div>

        {/* Search and filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Popular tags */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Popular Topics</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 8).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={() => setSearchTerm(tag)}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
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
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read Article →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular posts */}
        {regularPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More →
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or browse all articles.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}