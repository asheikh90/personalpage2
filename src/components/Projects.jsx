import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';

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
      link: '#',
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
    <section id="projects" className="section-padding bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider text-primary mb-2">
            Ventures
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Current <span className="gradient-text">Projects</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-light-300">
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
              className="project-card group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/70 to-transparent opacity-90 z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-light-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">Learn more</span>
                  <FiExternalLink />
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
