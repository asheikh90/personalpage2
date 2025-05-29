import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
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

  const milestones = [
    {
      year: '2013',
      age: '18',
      title: 'Started in Sales',
      description: 'Began career at T-Mobile, laying the foundation for future business ventures.',
      icon: <FiTarget />,
    },
    {
      year: '2018',
      age: '23',
      title: '$600K Funding Secured',
      description: 'Secured funding to open 5 T-Mobile stores across New Jersey.',
      icon: <FiTrendingUp />,
    },
    {
      year: '2019',
      age: '24',
      title: 'One Investments',
      description: 'Led marketing, consulting, and operations for international real estate firm.',
      icon: <FiUsers />,
    },
    {
      year: '2020-2023',
      age: '25-28',
      title: 'Tennex Legal Expansion',
      description: 'Scaled from 3 to 30+ law firms using systems, SOPs, and AI implementation.',
      icon: <FiAward />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column - Bio */}
          <motion.div variants={itemVariants}>
            <h2 className="text-sm uppercase tracking-wider text-primary mb-2">About</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              From Queens to <span className="gradient-text">Multiple Businesses</span>
            </h3>
            
            <div className="space-y-4 text-light-200">
              <p>
                Born in Queens, NY and relocating to New Jersey at 13, my journey began in sales at T-Mobile when I was just 18 years old. By 23, I had secured $600,000 in funding to open five T-Mobile stores throughout New Jersey.
              </p>
              <p>
                My experience spans across various industries, from leading marketing and operations at One Investments in international real estate to expanding my family's body shop from one to two thriving locations.
              </p>
              <p>
                One of my proudest achievements has been scaling Tennex Legal from 3 to over 30 law firms in under three years by implementing robust systems, SOPs, and leveraging AI technology.
              </p>
              <p>
                My mission extends beyond business success. I'm deeply committed to empowering the Shia community and professional class through mentorship, business building, and strategic growth initiatives.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#projects" className="btn-primary">View My Projects</a>
            </div>
          </motion.div>
          
          {/* Right column - Timeline */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-16"
                  variants={itemVariants}
                >
                  <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center bg-dark-100 rounded-full border border-primary/30 text-primary text-xl">
                    {milestone.icon}
                  </div>
                  
                  <div className="card">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary font-medium">{milestone.year}</span>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Age: {milestone.age}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                    <p className="text-light-300">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
