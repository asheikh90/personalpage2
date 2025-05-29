import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: 'DriveCal',
      description: 'Automotive calibration business for static and dynamic ADAS systems.',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#',
      category: 'Automotive',
    },
    {
      title: 'BlackForge',
      description: 'Oil lubricants and greases distribution business based in Houston and Miami.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#',
      category: 'Distribution',
    },
    {
      title: 'Maaco',
      description: 'Bodyshop franchise with locations in Philadelphia and Neptune, NJ.',
      image: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://autobodyshopphiladelphia.com',
      category: 'Franchise',
    },
    {
      title: 'Blueprint313',
      description: 'Strategic business planning and development consultancy for Shia professionals.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: 'https://blueprint313.com',
      category: 'Consulting',
    },
    {
      title: 'Ghadeer Club',
      description: 'Community organization focused on bringing together Shia gamers and gaming enthusiasts.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#',
      category: 'Community',
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-300 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-3">
            <span className="h-px w-5 bg-primary mr-3"></span>
            <span className="text-sm uppercase tracking-wider text-primary font-medium">Ventures</span>
            <span className="h-px w-5 bg-primary ml-3"></span>
          </motion.div>
          
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Current <span className="gradient-text">Projects</span>
          </motion.h3>
          
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-light-300 text-lg">
            A portfolio of businesses and initiatives built on strategic vision, systems implementation, and community empowerment.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="project-card group h-[400px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/70 to-transparent opacity-90 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-light-300 mb-5 opacity-90">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-white transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 font-medium">Learn more</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
