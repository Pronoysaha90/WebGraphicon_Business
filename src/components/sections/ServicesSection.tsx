import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Palette, 
  Code, 
  Megaphone, 
  Smartphone, 
  Lightbulb, 
  TrendingUp 
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning interfaces that captivate users and drive engagement through intuitive design.",
    glow: "blue" as const,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "High-performance websites built with cutting-edge technologies for speed and scalability.",
    glow: "cyan" as const,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that amplify your brand and convert visitors into loyal customers.",
    glow: "purple" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps that deliver seamless experiences across all devices.",
    glow: "blue" as const,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Comprehensive branding that tells your story and creates lasting connections.",
    glow: "cyan" as const,
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?w=300&h=200&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Growth Solutions",
    description: "Data-driven strategies to scale your business and maximize digital ROI.",
    glow: "purple" as const,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const cardRef = useMotionValue(0);
  
  return (
    <GlassCard key={service.title} delay={index * 0.1} glow={service.glow}>
      <div className="flex flex-col h-full">
        {/* Image with hover effect */}
        <motion.div 
          className="relative w-full h-32 mb-4 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          
          {/* Icon overlay */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute bottom-2 right-2 w-10 h-10 rounded-lg gradient-bg flex items-center justify-center"
          >
            <service.icon className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
        
        <h3 className="font-display text-xl font-semibold mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm flex-1">
          {service.description}
        </p>
        <motion.a
          href="/services"
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group"
        >
          Learn more
          <motion.span 
            className="inline-block"
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </GlassCard>
  );
};

export const ServicesSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) * 0.01);
      mouseY.set((e.clientY - centerY) * 0.01);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        style={{ x, y }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(x, v => -v), y: useTransform(y, v => -v) }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Everything you need to{" "}
            <span className="gradient-text">dominate digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From strategy to execution, we provide end-to-end solutions that
            transform your digital presence and drive real results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
