import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MessageCircle, Pencil, Code, Rocket } from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Discovery",
    description: "We dive deep into your vision, goals, and audience to craft a strategic roadmap for success.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    description: "Our designers create stunning visuals and intuitive interfaces that capture your brand essence.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop",
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "We build robust, scalable solutions using the latest technologies and best practices.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Grow",
    description: "We deploy your project and provide ongoing support to ensure continued success and growth.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=200&fit=crop",
  },
];

export const ProcessSection = () => {
  const mouseX = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Animated line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
        }}
        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            How we bring your{" "}
            <span className="gradient-text">vision to life</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A proven methodology that transforms ideas into exceptional digital experiences.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <GlassCard hover className="h-full text-center relative z-10 overflow-visible">
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold z-20"
                  >
                    {step.step}
                  </motion.div>

                  {/* Image thumbnail */}
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-2xl overflow-hidden mb-4 mt-4 relative"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </motion.div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </GlassCard>
                
                {/* Connecting dots for desktop */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
