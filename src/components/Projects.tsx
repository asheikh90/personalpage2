import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaGavel, FaCar, FaBuilding, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      icon: <FaStore className="text-4xl mb-4 text-primary" />,
      title: "T-Mobile Retail Expansion",
      description: "Secured $600K investment to open 5 T-Mobile stores across New Jersey. Developed sales strategies and operational systems that ensured profitability within the first year.",
      category: "retail"
    },
    {
      icon: <FaGavel className="text-4xl mb-4 text-primary" />,
      title: "Tennex Legal Growth",
      description: "Scaled operations from 3 to 30 law firms in under 3 years by implementing advanced systems, SOPs, AI tools, and automation processes that streamlined client acquisition and case management.",
      category: "legal"
    },
    {
      icon: <FaCar className="text-4xl mb-4 text-primary" />,
      title: "Auto Body Shop Expansion",
      description: "Transformed family's single auto body shop into a multi-location business within 2 years. Implemented marketing strategies and operational improvements that doubled revenue.",
      category: "automotive"
    },
    {
      icon: <FaBuilding className="text-4xl mb-4 text-primary" />,
      title: "One Investments Real Estate",
      description: "Developed marketing and operational strategies for an international real estate developer. Created systems that improved client acquisition and project management efficiency.",
      category: "real-estate"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A showcase of businesses I've built, scaled, and transformed through strategic systems, automation, and growth strategies.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-dark rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'all' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'retail' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Retail
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'legal' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Legal
            </button>
            <button
              onClick={() => setActiveTab('automotive')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'automotive' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Automotive
            </button>
            <button
              onClick={() => setActiveTab('real-estate')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'real-estate' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Real Estate
            </button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {project.icon}
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="mt-auto pt-4">
                  <a href="#" className="inline-flex items-center text-primary group-hover:text-primary-light transition-colors">
                    Learn more <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
