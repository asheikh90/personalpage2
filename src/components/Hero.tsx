import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Ali Sheikh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Consultant, Strategist & Multi-Business Owner
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Transforming businesses through strategic systems, automation, and proven growth strategies. From retail to real estate, I've built and scaled successful ventures across industries.
              </p>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  Get in Touch
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="border border-gray-600 hover:border-primary text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="relative z-10 w-full h-full flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border p-1">
                  <div className="w-full h-full rounded-full bg-dark-lighter flex items-center justify-center">
                    <span className="text-6xl">AS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
