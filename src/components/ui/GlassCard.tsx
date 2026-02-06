import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "cyan" | "purple" | "none";
  delay?: number;
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) => {
  const glowClasses = {
    blue: "hover:shadow-[0_0_60px_hsl(190_100%_50%/0.2)]",
    cyan: "hover:shadow-[0_0_60px_hsl(174_100%_50%/0.2)]",
    purple: "hover:shadow-[0_0_60px_hsl(271_91%_65%/0.2)]",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-500",
        hover && "glass-hover cursor-pointer",
        glowClasses[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
