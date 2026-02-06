import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "WebGraphicon transformed our entire digital presence. The results exceeded our wildest expectations – 300% increase in conversions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, Innovate Labs",
    content: "Working with this team was a game-changer. They understood our vision and delivered a website that truly represents our brand.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "CMO, Growth Partners",
    content: "The attention to detail and creative excellence is unmatched. Our new platform has received incredible feedback from users.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const logos = [
  { name: "TechCorp", width: "w-28" },
  { name: "InnovateLabs", width: "w-32" },
  { name: "DigitalFirst", width: "w-28" },
  { name: "GrowthCo", width: "w-24" },
  { name: "FutureScale", width: "w-28" },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const normalizedY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(normalizedX * 0.5);
    mouseY.set(normalizedY * 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <GlassCard
        delay={index * 0.15}
        glow={index === 0 ? "blue" : index === 1 ? "cyan" : "purple"}
        className="relative h-full"
      >
        {/* Quote Icon */}
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
        </motion.div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, j) => (
            <motion.div
              key={j}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + j * 0.05 }}
            >
              <Star className="w-4 h-4 fill-primary text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <motion.div 
            className="relative w-12 h-12 rounded-full overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          </motion.div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export const SocialProofSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-transparent to-card/20" />

      <div className="container-custom relative">
        {/* Client Logos - Infinite scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: [0, -400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <motion.div
                  key={i}
                  className={`text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors whitespace-nowrap ${logo.width}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {logo.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Hear from our{" "}
            <span className="gradient-text">happy clients</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
