import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const About = () => {
  const milestones = [
    {
      year: "2008",
      age: "18",
      title: "Started in Sales",
      description: "Began career at T-Mobile, developing strong sales and customer service skills."
    },
    {
      year: "2013",
      age: "23",
      title: "First Major Investment",
      description: "Secured $600K investment to open 5 T-Mobile stores in New Jersey."
    },
    {
      year: "2015",
      age: "25",
      title: "Expanded to Marketing & Consulting",
      description: "Joined One Investments, an international real estate developer, handling marketing, consulting, and operations."
    },
    {
      year: "2020",
      age: "30",
      title: "Scaled Tennex Legal",
      description: "Developed systems, SOPs, AI, and automation to grow from 3 to 30 law firms in under 3 years."
    },
    {
      year: "2021",
      age: "31",
      title: "Family Business Expansion",
      description: "Expanded family's auto body shop business from 1 to 2 locations in just 2 years."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Born in Queens, NY and relocated to New Jersey at 13, I've built a career focused on business growth, strategic systems, and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-gray-400 mb-6">
              My entrepreneurial journey began at 18 with a sales position at T-Mobile. By 23, I had secured a $600K investment to open 5 T-Mobile stores across New Jersey. This early success fueled my passion for business development and strategic growth.
            </p>
            <p className="text-gray-400 mb-6">
              I later transitioned into marketing, consulting, and operations for One Investments, an international real estate developer, where I honed my skills in strategic planning and business optimization.
            </p>
            <p className="text-gray-400">
              One of my proudest achievements has been scaling Tennex Legal from 3 to 30 law firms in under 3 years by implementing effective systems, SOPs, AI, and automation. I've also helped expand my family's auto body shop business, doubling our locations in just 2 years.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Core Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-dark p-6 rounded-lg">
                <FaChartLine className="text-primary text-3xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Business Scaling</h4>
                <p className="text-gray-400">Proven strategies to grow businesses efficiently and sustainably.</p>
              </div>
              <div className="bg-dark p-6 rounded-lg">
                <FaLightbulb className="text-primary text-3xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Strategic Planning</h4>
                <p className="text-gray-400">Developing roadmaps for business success and market dominance.</p>
              </div>
              <div className="bg-dark p-6 rounded-lg">
                <FaHandshake className="text-primary text-3xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Consulting</h4>
                <p className="text-gray-400">Expert guidance for businesses at any stage of development.</p>
              </div>
              <div className="bg-dark p-6 rounded-lg">
                <FaRocket className="text-primary text-3xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Systems & Automation</h4>
                <p className="text-gray-400">Creating efficient processes that scale with your business.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex items-start mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`hidden md:block w-1/2 ${
                index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'
              }`}>
                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                <span className="text-white font-bold">{milestone.age}</span>
              </div>
              
              <div className={`md:hidden w-full pl-16 mb-6`}>
                <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
              
              <div className={`hidden md:block w-1/2 ${
                index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'
              }`}>
                <span className="text-primary font-bold text-xl">{milestone.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
