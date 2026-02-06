import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends that are shaping the digital landscape and how to implement them in your projects.",
    category: "Design",
    date: "Jan 15, 2025",
    readTime: "5 min read",
  },
  {
    title: "How AI is Transforming Digital Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the way brands connect with their audiences online.",
    category: "Marketing",
    date: "Jan 12, 2025",
    readTime: "7 min read",
  },
  {
    title: "Building Scalable React Applications",
    excerpt: "Best practices and architectural patterns for building maintainable, high-performance React applications.",
    category: "Development",
    date: "Jan 10, 2025",
    readTime: "10 min read",
  },
  {
    title: "The Psychology of User Experience",
    excerpt: "Understanding cognitive principles that make interfaces intuitive and engaging for users.",
    category: "UX",
    date: "Jan 8, 2025",
    readTime: "6 min read",
  },
  {
    title: "E-commerce Conversion Optimization Secrets",
    excerpt: "Proven strategies to increase your online store's conversion rate and maximize revenue.",
    category: "E-commerce",
    date: "Jan 5, 2025",
    readTime: "8 min read",
  },
  {
    title: "Creating Memorable Brand Experiences",
    excerpt: "How to build a brand that resonates with your audience and stands out in a crowded market.",
    category: "Branding",
    date: "Jan 3, 2025",
    readTime: "5 min read",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              News & Insights
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Stay ahead with our{" "}
              <span className="gradient-text">latest insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Expert articles, industry trends, and thought leadership from our
              team of digital specialists.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-foreground/20">
                    Featured
                  </span>
                </div>
                <div>
                  <span className="text-sm text-primary font-medium">
                    Featured Article
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
                    The Complete Guide to Modern Web Development in 2025
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to know about building world-class web
                    applications with the latest technologies, frameworks, and
                    best practices.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Jan 18, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15 min read
                    </span>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-medium"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <GlassCard key={article.title} delay={i * 0.1}>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-foreground/20">
                    {article.category}
                  </span>
                </div>
                <span className="text-sm text-primary font-medium">
                  {article.category}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center gradient-border"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Subscribe to our <span className="gradient-text">newsletter</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the latest insights, trends, and tips delivered straight to
              your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/50"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
