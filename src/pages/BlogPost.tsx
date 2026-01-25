import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockBlogPosts } from "@/data/mockBlogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

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

  const relatedPosts = mockBlogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative h-64 overflow-hidden bg-secondary lg:h-96">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
      </section>

      {/* Content */}
      <article className="relative z-10 -mt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div className="rounded-t-xl bg-card p-6 shadow-lg lg:p-10">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="mb-6 -ml-2"
              >
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <Badge className={`mb-4 ${getCategoryColor(post.category)}`}>
                {post.category}
              </Badge>

              <h1 className="text-3xl font-bold text-card-foreground lg:text-4xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-6 flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  <Share2 className="mr-1 inline h-4 w-4" />
                  Share:
                </span>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div className="rounded-b-xl bg-card px-6 pb-10 shadow-lg lg:px-10">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-6 leading-relaxed text-card-foreground">
                  {post.content}
                </p>
                <p className="mt-6 text-sm italic text-muted-foreground">
                  [This is placeholder content. Replace with the full article 
                  content when available. The article should include detailed 
                  coverage, quotes, facts, and relevant images.]
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mx-auto mt-16 max-w-5xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground">
                Related Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="line-clamp-2 font-semibold text-card-foreground group-hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {new Date(relatedPost.date).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
