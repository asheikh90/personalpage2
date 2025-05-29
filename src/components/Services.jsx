import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiTrendingUp, 
  FiSettings, 
  FiBarChart2, 
  FiLayers, 
  FiCpu, 
  FiUsers 
} from 'react-icons/fi';

const Services = () => {
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

  const services = [
    {
      icon: <FiTrendingUp className="text-3xl text-primary" />,
      title: 'Business Growth Strategy',
      description: 'Comprehensive growth strategies tailored to your business goals, market position, and competitive landscape.',
    },
    {
      icon: <FiSettings className="text-3xl text-primary" />,
      title: 'Systems & Operations',
      description: 'Development and implementation of efficient systems, SOPs, and workflows to streamline operations and scale effectively.',
    },
    {
      icon: <FiBarChart2 className="text-3xl text-primary" />,
      title: 'Marketing & Sales',
      description: 'Strategic marketing plans and sales funnel optimization to drive customer acquisition and revenue growth.',
    },
    {
      icon: <FiLayers className="text-3xl text-primary" />,
      title: 'Business Development',
      description: 'Identifying and capitalizing on new business opportunities, partnerships, and market expansions.',
    },
    {
      icon: <FiCpu className="text-3xl text-primary" />,
      title: 'AI & Automation',
      description: 'Implementation of cutting-edge AI solutions and automation tools to increase efficiency and reduce operational costs.',
    },
    {
      icon: <FiUsers className="text-3xl text-primary" />,
      title: 'Team Building & Leadership',
      description: 'Strategies for building high-performing teams, leadership development, and organizational culture.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider text-primary mb-2">
            Services
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-serif mb-6">
            How I Can <span className="gradient-text">Help You</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-light-300">
            Leveraging years of experience across multiple industries to help businesses scale, optimize, and thrive in competitive markets.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="card hover:border hover:border-primary/30"
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-light-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-dark-100 rounded-2xl p-8 md:p-10 border border-primary/20"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Testimonial" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3">
                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl font-serif mb-6">
                  Ali's expertise helped TenneX Legal scale significantly by implementing marketing funnels for recruiting, CRM systems, automations, and lead generation strategies.
                </p>
                <div>
                  <h5 className="font-bold">Omar Alseginy</h5>
                  <p className="text-primary">Founder, TenneX Legal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
