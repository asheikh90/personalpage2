import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="animated-bg"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/5 to-secondary/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 15,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium mb-4 inline-flex items-center">
              <span className="h-px w-8 bg-primary mr-3"></span>
              <span className="text-primary">Consultant • Strategist • Multi-Business Owner</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-8 leading-tight">
              Empowering <span className="gradient-text">Business Growth</span> Through <span className="text-highlight">Strategic Vision</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-light-300 mb-10 leading-relaxed max-w-2xl">
              Building and scaling businesses from the ground up with a focus on systems, 
              automation, and community empowerment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary flex items-center">
                <span>Get in Touch</span>
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn-outline">View Projects</button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <div className="p-3 rounded-full border border-primary/30 bg-dark-300/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
            <FiArrowDown className="text-xl text-primary" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
