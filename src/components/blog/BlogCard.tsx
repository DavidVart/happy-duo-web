import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/services/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const categoryColors: Record<string, string> = {
  Update: "bg-feature-blue",
  Promotion: "bg-feature-yellow",
  News: "bg-feature-pink",
  Tips: "bg-feature-purple",
};

const BlogCard = ({ post, index }: BlogCardProps) => {
  const bgColor = categoryColors[post.category] || "bg-feature-blue";

  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={`${bgColor} feature-card rounded-2xl overflow-hidden block group`}
      >
        {post.coverImage && (
          <div className="aspect-[16/9] overflow-hidden border-b-2 border-foreground">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>

          <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
