"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

const HomeSection = () => {
  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/igoralexandria-ia",
      label: "GitHub",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/igoralexandria/",
      label: "LinkedIn",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/1gor.alexandria",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-1 via-dark-2 to-dark-1"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ParticlesBackground />
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none animate-pulse delay-1000" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl font-medium text-primary mb-4"
          >
            Olá, eu sou
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Igor Alexandria
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-4xl text-light-muted font-light mb-8 h-20 md:h-16"
          >
            <TypeAnimation
              sequence={[
                "Desenvolvedor Front-End",
                2000,
                "Desenvolvedor Web",
                2000, 
                "Apaixonado por interfaces modernas",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-light-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Transformo ideias em interfaces digitais funcionais, com atenção à performance
            e à experiência do usuário, utilizando boas práticas de desenvolvimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-dark-3/50 backdrop-blur-sm border border-white/10 text-light hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/50"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-light-muted rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full mb-1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
