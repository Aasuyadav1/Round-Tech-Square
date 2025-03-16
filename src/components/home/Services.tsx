
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ClipboardCheck, Scale, DollarSign, Clipboard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "SELL YOUR HOME",
      description: "Expert marketing, staging advice, and negotiation to achieve the best possible price for your property."
    },
    {
      icon: Search,
      title: "BUY A HOME",
      description: "Access to exclusive listings and personalized property searches tailored to your specific preferences."
    },
    {
      icon: ClipboardCheck,
      title: "HOME INSPECTION",
      description: "Comprehensive inspection services to ensure your potential home is in optimal condition before purchase."
    },
    {
      icon: Scale,
      title: "LEGAL SERVICES",
      description: "Partnership with top real estate attorneys to navigate complex transactions with confidence."
    },
    {
      icon: DollarSign,
      title: "FREE EVALUATION",
      description: "Detailed home valuation analysis to determine your property's current market value."
    },
    {
      icon: Clipboard,
      title: "PROPERTY MANAGEMENT",
      description: "Full-service property management solutions for homeowners and investors."
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-estate-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-estate-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="h-[1px] w-12 bg-blue-700 mr-4"></div>
            <span className="text-blue-700 font-medium tracking-wide">OUR SERVICES</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-estate-900 mb-4">
              EXCLUSIVE. COMMITTED. PROFESSIONAL SERVICES
            </h2>
            <p className="text-estate-600 text-lg">
              With a focus on personalized service and attention to detail, we offer a comprehensive 
              range of real estate solutions tailored to your unique needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} 
                  className="service-card group"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex items-center">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-700 mr-4 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-estate-900">{service.title}</h3>
                  </div>
                  <p className="text-estate-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
