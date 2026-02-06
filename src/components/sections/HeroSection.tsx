import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";
import { FloatingImage } from "@/components/ui/FloatingImage";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { useEffect } from "react";

// Floating image data for hero
const floatingImages = [
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    position: "top-20 -left-10 md:left-10",
    size: "md" as const,
    glow: "blue" as const,
    delay: 0.2,
    floatDuration: 7,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    position: "top-40 -right-10 md:right-20",
    size: "lg" as const,
    glow: "purple" as const,
    delay: 0.4,
    floatDuration: 8,
  },
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=400&fit=crop",
    position: "bottom-40 -left-5 md:left-20",
    size: "sm" as const,
    glow: "cyan" as const,
    delay: 0.6,
    floatDuration: 6,
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    position: "bottom-20 -right-5 md:right-40",
    size: "md" as const,
    glow: "blue" as const,
    delay: 0.8,
    floatDuration: 9,
  },
];

export const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);
  
  // Transform for different layers
  const bgX = useTransform(parallaxX, (v) => v * 0.02);
  const bgY = useTransform(parallaxY, (v) => v * 0.02);
  const midX = useTransform(parallaxX, (v) => v * 0.05);
  const midY = useTransform(parallaxY, (v) => v * 0.05);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated Glow Orbs - Background Layer */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 pointer-events-none">
        <GlowOrb color="blue" size="xl" className="top-0 -left-32" intensity={0.6} />
        <GlowOrb color="purple" size="lg" className="bottom-0 -right-32" intensity={0.5} />
        <GlowOrb color="cyan" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" intensity={0.3} followMouse />
      </motion.div>

      {/* Floating Images - Mid Layer */}
      <motion.div style={{ x: midX, y: midY }} className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingImages.map((img, i) => (
          <FloatingImage
            key={i}
            src={img.src}
            alt={`Tech visual ${i + 1}`}
            className={`absolute ${img.position}`}
            size={img.size}
            glowColor={img.glow}
            delay={img.delay}
            floatDuration={img.floatDuration}
            parallaxIntensity={20 + i * 5}
          />
        ))}
      </motion.div>

      {/* Animated gradient lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border border-primary/20"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.span>
            <span className="text-sm font-medium text-foreground">
              Award-Winning Digital Agency
            </span>
            <motion.span
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            We craft{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              digital experiences
            </motion.span>
            {" "}that inspire
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            From concept to launch, we transform bold ideas into stunning digital
            realities. Design. Develop. Dominate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact">
              <GlassButton variant="primary" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlassButton>
            </Link>
            <Link to="/projects">
              <GlassButton variant="secondary" size="lg">
                <Play className="w-5 h-5 mr-2 inline" />
                View Our Work
              </GlassButton>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 glass rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border border-white/5"
          >
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "15+", label: "Industry Awards" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center relative group"
              >
                <motion.div 
                  className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full glass flex items-start justify-center pt-2 border border-white/10"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
