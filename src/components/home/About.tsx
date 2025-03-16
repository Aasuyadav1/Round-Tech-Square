
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, ChevronRight } from 'lucide-react';

const About = () => {
  const achievements = [
    { 
      number: '$150M+', 
      label: 'Property Sales', 
      description: 'Total value of properties sold in 2023'
    },
    { 
      number: '98%', 
      label: 'Client Satisfaction', 
      description: 'Based on annual client surveys'
    },
    { 
      number: '250+', 
      label: 'Happy Clients', 
      description: 'Families placed in their dream homes'
    },
    { 
      number: '15+', 
      label: 'Years Experience', 
      description: 'In luxury real estate market'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img 
                  src="https://public.readdy.ai/ai/img_res/3a3b9b6bd4cdedcdc8ffcedc3c452297.jpg" 
                  alt="Krystelle Romy" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-80 h-80 bg-luxury-100 rounded-full -z-10 opacity-80"></div>
              <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-60 h-60 bg-estate-200 rounded-full -z-10 opacity-70"></div>
              
              {/* Stats Card */}
              <motion.div 
                className="absolute bottom-10 right-0 translate-x-1/4 glass-card p-6 rounded-xl w-64"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-luxury-100 rounded-full mr-4">
                    <Award className="text-luxury-800" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-estate-900">Top 1% Agent</h3>
                </div>
                <p className="text-estate-600 text-sm">
                  Recognized among the top 1% of real estate agents nationwide for exceptional sales performance.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center mb-6">
                <div className="h-[1px] w-12 bg-luxury-700 mr-4"></div>
                <span className="text-luxury-700 font-medium tracking-wide">ABOUT KRYSTELLE</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-estate-900 mb-6">
                Your Dedicated Luxury Real Estate Expert
              </h2>
              
              <div className="space-y-6 text-estate-700 mb-8">
                <p>
                  Helping you achieve your real estate goals is my top priority. When we work together, 
                  it's about YOU. I listen to your needs, work diligently to achieve your objectives, 
                  and strive to always exceed your expectations.
                </p>
                <p>
                  My success-driven approach, investment, and care have earned me a five-star status and 
                  outstanding client testimonials. I employ cutting-edge innovation, custom advertising methodologies, 
                  and in-depth market analysis to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                {achievements.map((item, index) => (
                  <div key={index}>
                    <div className="text-2xl font-display font-bold text-luxury-800 mb-1">
                      {item.number}
                    </div>
                    <div className="text-estate-900 font-medium mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-estate-600">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href="/about" 
                  className="inline-flex items-center group"
                >
                  <span className="bg-luxury-800 text-white px-6 py-3 rounded-md group-hover:bg-luxury-900 transition-all duration-300 shadow-md group-hover:shadow-lg font-medium flex items-center">
                    LEARN MORE ABOUT ME
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
