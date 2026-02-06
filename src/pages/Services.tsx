import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Link } from "react-router-dom";
import {
  Palette,
  Code,
  Megaphone,
  Smartphone,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We create stunning, intuitive interfaces that captivate users and drive engagement. Our design process combines research, strategy, and creativity to deliver exceptional experiences.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Responsive Design",
      "Accessibility Compliance",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build high-performance websites and web applications using cutting-edge technologies. Our solutions are scalable, secure, and optimized for speed.",
    features: [
      "React & Next.js",
      "Custom CMS Solutions",
      "E-commerce Platforms",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "We craft strategic campaigns that amplify your brand and convert visitors into loyal customers through data-driven marketing approaches.",
    features: [
      "SEO & Content Strategy",
      "Social Media Marketing",
      "PPC & Paid Advertising",
      "Email Marketing",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "We develop native and cross-platform mobile applications that deliver seamless experiences across all devices and platforms.",
    features: [
      "iOS & Android Development",
      "React Native",
      "App Store Optimization",
      "Push Notifications",
      "In-App Analytics",
    ],
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "We develop comprehensive branding that tells your story and creates lasting connections with your audience.",
    features: [
      "Brand Identity Design",
      "Logo & Visual Systems",
      "Brand Guidelines",
      "Messaging Strategy",
      "Brand Positioning",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Solutions",
    description:
      "We implement data-driven strategies to scale your business, maximize digital ROI, and achieve sustainable growth.",
    features: [
      "Conversion Optimization",
      "A/B Testing",
      "Growth Hacking",
      "Customer Journey Mapping",
      "Revenue Optimization",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Everything you need to{" "}
              <span className="gradient-text">succeed online</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              From strategy to execution, we provide comprehensive digital
              solutions that transform your business and drive measurable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard hover={false} className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6"
                      >
                        <service.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="font-display text-3xl font-bold mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>
                      <Link to="/contact">
                        <GlassButton variant="secondary">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </GlassButton>
                      </Link>
                    </div>

                    <div className="glass rounded-2xl p-6">
                      <h4 className="font-semibold text-lg mb-4">
                        What's included:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 md:p-16 text-center gradient-border"
          >
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Ready to get <span className="gradient-text">started</span>?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss your project and find the perfect solution for your
              business needs.
            </p>
            <Link to="/contact">
              <GlassButton variant="primary" size="lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
