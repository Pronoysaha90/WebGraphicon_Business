import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { GlassButton } from "@/components/ui/GlassButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="mesh-background" />
      <div className="noise-overlay" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-32 h-32 glass rounded-full opacity-30"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 glass rounded-full opacity-30"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="font-display text-[150px] md:text-[200px] font-bold leading-none gradient-text mb-4"
          >
            404
          </motion.div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            Oops! The page you're looking for seems to have wandered off into
            the digital void.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <GlassButton variant="primary" size="lg">
                <Home className="w-5 h-5 mr-2 inline" />
                Back to Home
              </GlassButton>
            </Link>
            <button onClick={() => window.history.back()}>
              <GlassButton variant="secondary" size="lg">
                <ArrowLeft className="w-5 h-5 mr-2 inline" />
                Go Back
              </GlassButton>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
