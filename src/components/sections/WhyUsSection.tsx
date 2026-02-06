import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingImage } from "@/components/ui/FloatingImage";
import { 
  Zap, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  HeartHandshake 
} from "lucide-react";
import { useEffect } from "react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security built into every solution.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with diverse industry experience.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized globally for design excellence and innovation.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it.",
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    description: "We invest in your success as if it were our own.",
  },
];

export const WhyUsSection = () => {
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.03);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseY]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-accent/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              We're not just an agency.{" "}
              <span className="gradient-text">We're your partner.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              With over a decade of experience, we've helped hundreds of
              businesses transform their digital presence. Our approach combines
              creativity, technology, and strategy to deliver results that
              exceed expectations.
            </motion.p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.slice(0, 4).map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <reason.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Cards with Floating Images */}
          <motion.div className="grid gap-4 relative" style={{ y }}>
            {/* Decorative floating images */}
            <div className="absolute -top-10 -right-10 hidden xl:block">
              <FloatingImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=150&h=150&fit=crop"
                alt="Team collaboration"
                size="sm"
                glowColor="purple"
                floatDuration={7}
                parallaxIntensity={15}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {reasons.slice(4).map((reason, i) => (
                <GlassCard
                  key={reason.title}
                  delay={0.2 + i * 0.1}
                  glow={i === 0 ? "cyan" : "purple"}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <reason.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h4 className="font-display font-semibold mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </GlassCard>
              ))}
            </div>

            {/* Large Feature Card with Image */}
            <GlassCard delay={0.4} glow="blue" className="p-8 relative overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=300&fit=crop"
                  alt="Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
              </div>
              
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    15+
                  </span>
                </motion.div>
                <div>
                  <h4 className="font-display text-xl font-bold">Years of Excellence</h4>
                  <p className="text-muted-foreground">Industry-leading expertise</p>
                </div>
              </div>
              <p className="text-muted-foreground relative z-10">
                Our team brings together decades of combined experience across
                design, development, and digital strategy.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
