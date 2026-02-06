import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Link } from "react-router-dom";
import { Users, Target, Award, Rocket, ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "25+", label: "Countries Served" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We listen, adapt, and deliver beyond expectations.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We never compromise on quality. Every pixel, every line of code reflects our commitment.",
  },
  {
    icon: Rocket,
    title: "Results Driven",
    description: "Beautiful design meets business impact. We create solutions that deliver real ROI.",
  },
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              We are <span className="gradient-text">WebGraphicon</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              A team of passionate creatives, strategists, and technologists
              dedicated to crafting exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4"
              >
                Our Story
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold mb-6"
              >
                Born from a passion for{" "}
                <span className="gradient-text">digital excellence</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-muted-foreground"
              >
                <p>
                  Founded in 2010, WebGraphicon began with a simple belief: that
                  great design can transform businesses. What started as a small
                  studio has grown into a full-service digital agency serving
                  clients worldwide.
                </p>
                <p>
                  Our journey has been defined by a relentless pursuit of
                  excellence and an unwavering commitment to our clients'
                  success. We've evolved with the digital landscape, always
                  staying ahead of trends while maintaining our core values.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for startups,
                  enterprises, and everything in between. Our diverse team brings
                  together expertise from across the globe, united by a shared
                  passion for creating impactful digital experiences.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 aspect-square flex items-center justify-center gradient-border">
                <div className="text-center">
                  <div className="font-display text-8xl font-bold gradient-text mb-4">
                    W
                  </div>
                  <p className="text-muted-foreground">
                    Crafting digital excellence since 2010
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-32 h-32 glass rounded-2xl flex items-center justify-center"
              >
                <span className="font-display text-2xl font-bold text-primary">15+</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-card/30 to-transparent">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              Our Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold"
            >
              What drives us <span className="gradient-text">every day</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <GlassCard key={value.title} delay={i * 0.1} glow="blue">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6"
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center gradient-border"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want to join our <span className="gradient-text">team</span>?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion
              for digital excellence.
            </p>
            <Link to="/contact">
              <GlassButton variant="primary" size="lg">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
