import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Loader2 } from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, type BlogPost } from "@/services/blog";

// Configure marked for proper markdown parsing
marked.setOptions({
  breaks: true,
  gfm: true,
});

const categoryColors: Record<string, string> = {
  Update: "bg-feature-blue",
  Promotion: "bg-feature-yellow",
  News: "bg-feature-pink",
  Tips: "bg-feature-purple",
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchPost() {
      if (!slug) return;

      try {
        const data = await getBlogPostBySlug(slug);
        if (!data) {
          setError("Post not found");
        } else {
          setPost(data);
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="overflow-x-hidden">
        <main className="min-h-screen hero-section pt-32 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bold-card rounded-2xl p-8">
                <p className="text-xl font-display font-semibold mb-4">
                  {error || "Post not found"}
                </p>
                <Link to="/blog">
                  <Button variant="hero">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const bgColor = categoryColors[post.category] || "bg-feature-blue";
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="overflow-x-hidden">
      <main>
        {/* Header Section */}
        <section className="hero-section pt-32 pb-8 md:pt-40">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Link */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`${bgColor} text-foreground text-sm font-bold px-3 py-1 rounded-full border-2 border-foreground`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {post.title}
              </h1>

              {/* Cover Image - compact banner style */}
              {post.coverImage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="rounded-2xl overflow-hidden border-2 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full aspect-[21/9] object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4">
            <motion.article
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bold-card rounded-2xl p-6 md:p-10">
                <div
                  className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-li:text-foreground prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(post.content) as string) }}
                />
              </div>

              {/* Back to Blog CTA */}
              <div className="text-center mt-10">
                <Link to="/blog">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to all posts
                  </Button>
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
