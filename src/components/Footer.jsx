import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Ali</span> Sheikh
            </h3>
            <p className="text-light-300 mb-4">
              Consultant, strategist, and multi-business owner focused on empowering growth through strategic vision and implementation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="about" smooth={true} duration={500} offset={-80} className="text-light-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} offset={-80} className="text-light-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-80} className="text-light-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-80} className="text-light-300 hover:text-primary transition-colors duration-300 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Ventures */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ventures</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  DriveCal
                </a>
              </li>
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  BlackForge
                </a>
              </li>
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Maaco Philly
                </a>
              </li>
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Blueprint313
                </a>
              </li>
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Ghadeer Club
                </a>
              </li>
              <li>
                <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
                  Sheikh Advisory
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-light-300">contact@alisheikhconsulting.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-light-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-light-300">New Jersey, United States</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ali Sheikh. All rights reserved.
          </p>
          
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="w-10 h-10 rounded-full bg-dark-100 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
          >
            <FiArrowUp className="text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
