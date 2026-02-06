import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: "blue" | "cyan" | "purple" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  intensity?: number;
  followMouse?: boolean;
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[32rem] h-[32rem]",
};

const colorStyles = {
  blue: "bg-[radial-gradient(circle,hsl(190_100%_50%/0.4)_0%,transparent_70%)]",
  cyan: "bg-[radial-gradient(circle,hsl(174_100%_50%/0.4)_0%,transparent_70%)]",
  purple: "bg-[radial-gradient(circle,hsl(271_91%_65%/0.4)_0%,transparent_70%)]",
  mixed: "bg-[radial-gradient(circle,hsl(190_100%_50%/0.3)_0%,hsl(271_91%_65%/0.2)_50%,transparent_70%)]",
};

export const GlowOrb = ({
  color = "blue",
  size = "md",
  className,
  intensity = 1,
  followMouse = false,
}: GlowOrbProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!followMouse) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set((e.clientX - centerX) * 0.1);
      mouseY.set((e.clientY - centerY) * 0.1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse, mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[80px] pointer-events-none",
        sizeClasses[size],
        colorStyles[color],
        className
      )}
      style={{
        opacity: intensity,
        x: followMouse ? x : 0,
        y: followMouse ? y : 0,
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [intensity * 0.6, intensity, intensity * 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};
