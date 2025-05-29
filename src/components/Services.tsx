import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaCogs, 
  FaLaptopCode, 
  FaBullhorn, 
  FaUserTie, 
  FaHandshake 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-primary" />,
      title: "Business Scaling",
      description: "Strategic growth planning and implementation to take your business to the next level. Proven methods that have helped scale multiple businesses across different industries.",
      forCommunity: "Shia Community",
      forProfessionals: true
    },
    {
      icon: <FaCogs className="text-4xl mb-4 text-primary" />,
      title: "Systems & Automation",
      description: "Development of efficient SOPs, workflows, and automation tools to streamline operations and increase productivity. The same systems that scaled Tennex Legal from 3 to 30 law firms.",
      forCommunity: "Shia Community",
      forProfessionals: true
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-primary" />,
      title: "AI Implementation",
      description: "Strategic integration of AI tools to enhance business operations, customer service, and decision-making processes. Custom solutions tailored to your specific business needs.",
      forCommunity: "Professional Members",
      forProfessionals: true
    },
    {
      icon: <FaBullhorn className="text-4xl mb-4 text-primary" />,
      title: "Marketing Strategy",
      description: "Comprehensive marketing plans that drive customer acquisition and retention. Experience from international real estate development to local business promotion.",
      forCommunity: "Shia Community",
      forProfessionals: true
    },
    {
      icon: <FaUserTie className="text-4xl mb-4 text-primary" />,
      title: "Business Consulting",
      description: "Expert guidance on business operations, management, and growth strategies. Personalized consulting based on years of multi-industry experience.",
      forCommunity: "Shia Community",
      forProfessionals: true
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-primary" />,
      title: "Investment Planning",
      description: "Strategic advice on business investments and expansion opportunities. Learn from my experience securing a $600K investment at age 23 and subsequent business ventures.",
      forCommunity: "Professional Members",
      forProfessionals: true
    }
  ];

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
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Services</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I offer a range of specialized services to help businesses grow, optimize operations, and achieve sustainable success. My expertise is available to both the Shia community and professional members.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card bg-dark-lighter p-8 rounded-lg border border-gray-800 hover:border-primary transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="mt-auto pt-4">
                  <span className="inline-block px-3 py-1 bg-primary bg-opacity-20 text-primary text-sm rounded-full">
                    {service.forCommunity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block cursor-pointer"
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

import { Link } from 'react-scroll';

export default Services;
