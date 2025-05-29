import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just set the submitted state
    setIsSubmitted(true);
  };

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

  const contactInfo = [
    {
      icon: <FiMail className="text-2xl text-primary" />,
      title: 'Email',
      details: 'contact@alisheikhconsulting.com',
      link: 'mailto:contact@alisheikhconsulting.com',
    },
    {
      icon: <FiPhone className="text-2xl text-primary" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FiMapPin className="text-2xl text-primary" />,
      title: 'Location',
      details: 'New Jersey, United States',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-sm uppercase tracking-wider text-primary mb-2">
            Contact
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Let's <span className="gradient-text">Connect</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-light-300">
            Interested in working together? Reach out to discuss how we can help your business grow and thrive.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-dark-100 rounded-xl p-8 h-full">
              <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h5 className="font-bold">{item.title}</h5>
                      <a 
                        href={item.link} 
                        className="text-light-300 hover:text-primary transition-colors duration-300"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h5 className="font-bold mb-4">Connect on Social Media</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-dark-200 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-dark-100 rounded-xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <FiSend className="text-2xl" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Message Sent Successfully!</h4>
                  <p className="text-light-300 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your name"
                        {...register('name', { required: true })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-sm">Name is required</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Your email"
                        {...register('email', { 
                          required: true,
                          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                        })}
                      />
                      {errors.email?.type === 'required' && (
                        <p className="mt-1 text-red-500 text-sm">Email is required</p>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <p className="mt-1 text-red-500 text-sm">Invalid email address</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="Subject of your message"
                      {...register('subject', { required: true })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm">Subject is required</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Your message"
                      {...register('message', { required: true })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">Message is required</p>
                    )}
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
