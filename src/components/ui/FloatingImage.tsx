import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  floatIntensity?: number;
  floatDuration?: number;
  parallaxIntensity?: number;
  glowColor?: "blue" | "cyan" | "purple";
  delay?: number;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-24 h-24 md:w-32 md:h-32",
  md: "w-32 h-32 md:w-48 md:h-48",
  lg: "w-48 h-48 md:w-64 md:h-64",
  xl: "w-64 h-64 md:w-80 md:h-80",
};

const glowColors = {
  blue: "shadow-[0_0_60px_hsl(190_100%_50%/0.4)]",
  cyan: "shadow-[0_0_60px_hsl(174_100%_50%/0.4)]",
  purple: "shadow-[0_0_60px_hsl(271_91%_65%/0.4)]",
};

export const FloatingImage = ({
  src,
  alt,
  className,
  floatIntensity = 20,
  floatDuration = 6,
  parallaxIntensity = 30,
  glowColor = "blue",
  delay = 0,
  size = "md",
}: FloatingImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;
      
      mouseX.set(normalizedX * (parallaxIntensity / 100));
      mouseY.set(normalizedY * (parallaxIntensity / 100));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, parallaxIntensity]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn("relative", className)}
      style={{
        x: useTransform(x, (v) => v * parallaxIntensity),
        y: useTransform(y, (v) => v * parallaxIntensity),
      }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [-floatIntensity / 2, floatIntensity / 2, -floatIntensity / 2],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow background */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-2xl blur-xl opacity-60",
            glowColors[glowColor]
          )}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glass frame */}
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl glass",
            "border border-white/10",
            sizeClasses[size]
          )}
        >
          {/* Image */}
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Shine overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
