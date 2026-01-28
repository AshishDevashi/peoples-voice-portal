import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockBlogPosts, blogCategories } from "@/data/mockBlogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? mockBlogPosts
      : mockBlogPosts.filter((post) => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Justice":
        return "bg-primary text-primary-foreground";
      case "Social Issues":
        return "bg-pink-500 text-white";
      case "Infrastructure":
        return "bg-green-500 text-white";
      case "Governance":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-secondary-foreground md:text-5xl">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80">
              In-depth coverage of issues that matter. Read our analysis, 
              investigations, and stories of impact.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <article>
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge className={`absolute left-3 top-3 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="mb-2 line-clamp-2 text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                        Read
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
