
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Instagram, url: '#' },
    { icon: Linkedin, url: '#' }
  ];

  return (
    <footer className="bg-estate-950 text-white">
      <div className="container mx-auto pt-16 pb-8 px-4 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-estate-800">
          {/* Brand */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-display font-bold mb-2">KRYSTELLE ROMY</h3>
              <p className="text-sm text-estate-300">LUXURY REAL ESTATE</p>
              <p className="text-sm text-estate-400 mt-2">DRE#01977487</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-4 mt-6"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="bg-estate-800 hover:bg-luxury-700 p-2.5 rounded-full transition-colors duration-300"
                    aria-label={`Follow on ${Icon.name}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>
          
          {/* Contact */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-display font-semibold mb-6"
            >
              CONTACT
            </motion.h4>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-start">
                <Mail className="mr-3 text-luxury-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-estate-300 text-sm mb-1">EMAIL</p>
                  <a href="mailto:krystelle@gmail.com" className="text-white hover:text-luxury-500 transition-colors">
                    krystelle@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-3 text-luxury-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-estate-300 text-sm mb-1">PHONE</p>
                  <a href="tel:(123)456-7890" className="text-white hover:text-luxury-500 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-luxury-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-estate-300 text-sm mb-1">ADDRESS</p>
                  <p className="text-white">
                    1123 HERMOSA AVENUE, SUITE #210,<br />HERMOSA BEACH, CA 92804
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-display font-semibold mb-6"
            >
              QUICK LINKS
            </motion.h4>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 gap-y-3"
            >
              {["Home", "About", "Properties", "Sell", "Buy", "Contact"].map((item, index) => (
                <Link 
                  key={index} 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="text-estate-300 hover:text-white transition-colors"
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </motion.div>
          </div>
          
          {/* Newsletter */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg font-display font-semibold mb-6"
            >
              NEWSLETTER
            </motion.h4>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-estate-300 mb-4">Subscribe to receive updates on new properties and real estate news.</p>
              
              <form className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-estate-900 border border-estate-700 rounded-md px-4 py-3 placeholder:text-estate-500 focus:outline-none focus:border-luxury-600 text-white"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-luxury-700 hover:bg-luxury-800 text-white py-3 px-4 rounded-md transition-colors duration-300"
                >
                  SUBSCRIBE
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-estate-400 mb-4 md:mb-0"
          >
            <span>&copy; {currentYear} KRYSTELLE ROMY | </span>
            <span className="text-estate-500">POWERED BY </span>
            <a href="#" className="text-luxury-500 hover:text-luxury-400 transition-colors">
              ROUNDTECHSQUARE
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            <Link to="/terms" className="text-estate-400 hover:text-white transition-colors">
              TERMS OF USE
            </Link>
            <Link to="/privacy" className="text-estate-400 hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
          </motion.div>
        </div>
        
        {/* Legal Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-xs text-estate-500 leading-relaxed max-w-5xl mx-auto text-center"
        >
          Krystelle Romy is a real estate agent licensed by the state of California affiliated with compass. Krystelle Romy is a real estate broker licensed by the state of California and abides by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
