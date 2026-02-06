import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import { motion } from "framer-motion";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ArrowUpRight,
  Mail
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "Branding", path: "/services" },
    { name: "Digital Strategy", path: "/services" },
  ],
  resources: [
    { name: "Projects", path: "/projects" },
    { name: "Case Studies", path: "/projects" },
    { name: "Blog", path: "/news" },
    { name: "FAQ", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 text-center gradient-border"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your <span className="gradient-text">digital presence</span>?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src={logo}
                alt="WebGraphicon Logo"
                className="w-20 h-20 object-contain rounded-sm mb-3"
                whileHover={{ scale: 1.08, rotate: 3 }}
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Crafting digital experiences that inspire, engage, and convert.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-foreground">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest insights and news.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 glass rounded-xl px-4 py-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary px-5 py-3 text-sm"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 WebGraphicon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
