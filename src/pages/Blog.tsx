import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Footer from "@/components/landing/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogPosts, type BlogPost } from "@/services/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchPosts() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="hero-section pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center space-y-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge mx-auto">
                <span className="text-lg">📝</span>
                <span>Blog</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                Updates &{" "}
                <span className="text-[hsl(var(--primary))]">News</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay up to date with the latest Happy Duo news, tips, and promotions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">{error}</p>
              </div>
            ) : posts.length === 0 ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bold-card rounded-2xl p-8 max-w-md mx-auto">
                  <p className="text-xl font-display font-semibold mb-2">
                    No posts yet
                  </p>
                  <p className="text-muted-foreground">
                    Check back soon for updates and news about Happy Duo!
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
