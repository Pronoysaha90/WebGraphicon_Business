import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { useEffect } from "react";

export const CTASection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Glow Orbs */}
      <GlowOrb color="blue" size="xl" className="top-0 left-1/4" intensity={0.4} followMouse />
      <GlowOrb color="purple" size="lg" className="bottom-0 right-1/4" intensity={0.3} />
      <GlowOrb color="cyan" size="md" className="top-1/2 right-1/3" intensity={0.2} />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-16 text-center gradient-border overflow-hidden relative"
          style={{
            rotateX: useTransform(y, (v) => v * 0.5),
            rotateY: useTransform(x, (v) => v * 0.5),
            transformStyle: "preserve-3d",
            transformPerspective: 2000,
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.2) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`,
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-10 left-10 w-20 h-20 rounded-full glass opacity-50 hidden md:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-16 h-16 rounded-full glass opacity-50 hidden md:block"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 right-20 w-12 h-12 rounded-lg glass opacity-30 hidden lg:block"
          />

          {/* Decorative images */}
          <motion.div
            className="absolute -left-10 top-1/4 w-32 h-32 rounded-2xl overflow-hidden opacity-40 hidden lg:block"
            animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card" />
          </motion.div>
          <motion.div
            className="absolute -right-10 bottom-1/4 w-28 h-28 rounded-2xl overflow-hidden opacity-40 hidden lg:block"
            animate={{ y: [0, 15, 0], rotate: [3, -3, 3] }}
            transition={{ duration: 9, repeat: Infinity }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop"
              alt="Analytics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 relative z-10"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium">Let's Create Together</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight relative z-10"
          >
            Ready to{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              elevate your brand
            </motion.span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10"
          >
            Join hundreds of forward-thinking companies who've transformed their
            digital presence with WebGraphicon. Your success story starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            <Link to="/contact">
              <GlassButton variant="primary" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlassButton>
            </Link>
            <Link to="/projects">
              <GlassButton variant="secondary" size="lg">
                View Case Studies
              </GlassButton>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground relative z-10"
          >
            {[
              "Free Consultation",
              "Fast Turnaround",
              "100% Satisfaction Guarantee"
            ].map((text, i) => (
              <motion.span 
                key={text}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
                {text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
