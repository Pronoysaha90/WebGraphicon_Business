import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechFlow Platform",
    category: "Web Development",
    description: "A comprehensive SaaS platform that revolutionized workflow management for enterprise teams.",
    results: "300% increase in user engagement",
    image: "gradient-to-br from-primary/40 to-secondary/40",
  },
  {
    title: "Luxe Fashion",
    category: "E-Commerce",
    description: "A premium fashion e-commerce experience with immersive product visualization.",
    results: "250% boost in online sales",
    image: "gradient-to-br from-accent/40 to-primary/40",
  },
  {
    title: "FinanceHub",
    category: "Fintech",
    description: "A modern banking dashboard that simplifies personal finance management.",
    results: "1M+ active users",
    image: "gradient-to-br from-secondary/40 to-accent/40",
  },
  {
    title: "HealthFirst App",
    category: "Healthcare",
    description: "A telemedicine platform connecting patients with healthcare providers globally.",
    results: "500K+ consultations",
    image: "gradient-to-br from-primary/40 to-accent/40",
  },
  {
    title: "EduLearn Platform",
    category: "EdTech",
    description: "An interactive learning management system with gamification elements.",
    results: "95% course completion rate",
    image: "gradient-to-br from-secondary/40 to-primary/40",
  },
  {
    title: "GreenEnergy Dashboard",
    category: "Sustainability",
    description: "Real-time energy monitoring and optimization platform for smart buildings.",
    results: "40% energy savings",
    image: "gradient-to-br from-accent/40 to-secondary/40",
  },
];

const Projects = () => {
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
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Projects that{" "}
              <span className="gradient-text">make an impact</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Explore our portfolio of award-winning digital experiences that
              have transformed businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard className="overflow-hidden group">
                  {/* Project Image/Visual */}
                  <div
                    className={`aspect-video bg-${project.image} rounded-xl mb-6 relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-${project.image}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-foreground/20">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="glass px-6 py-3 rounded-xl flex items-center gap-2">
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="glass rounded-xl px-4 py-3 inline-block">
                    <span className="text-sm font-medium gradient-text">
                      {project.results}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "$50M+", label: "Revenue Generated" },
              { value: "15+", label: "Awards Won" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
    </Layout>
  );
};

export default Projects;
