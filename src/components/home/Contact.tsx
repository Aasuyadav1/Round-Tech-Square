
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll be in touch soon!",
        variant: "default",
      });
      
      // Reset form and loading state
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-24 bg-estate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-estate-200 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Section */}
              <motion.div 
                className="p-8 md:p-12 xl:p-16 bg-gradient-to-br from-blue-700 to-estate-900 text-white flex flex-col justify-center"
                variants={itemVariants}
              >
                <span className="text-blue-300 font-medium tracking-wide mb-4">LET'S CONNECT</span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                  Ready to Find Your Dream Home?
                </h2>
                
                <p className="text-white/80 text-lg max-w-lg mb-10">
                  Our experts would love to contribute their expertise and insights to help you today. 
                  Contact us to plan your next real estate transaction, whether buying or selling a home.
                </p>
                
                <div className="space-y-6 mt-auto">
                  <div>
                    <h3 className="font-semibold text-blue-300 mb-1">EMAIL</h3>
                    <a 
                      href="mailto:krystelle@gmail.com" 
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      krystelle@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-300 mb-1">PHONE</h3>
                    <a 
                      href="tel:(123)456-7890" 
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-blue-300 mb-1">ADDRESS</h3>
                    <p className="text-white/80">
                      1123 HERMOSA AVENUE, SUITE #210,<br />
                      HERMOSA BEACH, CA 92804
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Form Section */}
              <motion.div className="p-8 md:p-12 xl:p-16" variants={itemVariants}>
                <h3 className="text-2xl font-display font-bold text-estate-900 mb-8">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-estate-700 mb-2">
                      Full Name <span className="text-luxury-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-estate-700 mb-2">
                      Phone Number <span className="text-luxury-700">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-estate-700 mb-2">
                      Email Address <span className="text-luxury-700">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-estate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Tell us about your real estate needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-blue-700 text-white py-4 px-6 rounded-md hover:bg-blue-800 transition-all duration-300 font-medium flex items-center justify-center ${loading ? 'opacity-80' : ''}`}
                  >
                    {loading ? (
                      <>
                        <span className="mr-2">SENDING</span>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
