
import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Square, ArrowRight } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  image: string;
  location?: string;
}

const Properties = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "Oceanfront Villa with Private Beach",
      price: 3950000,
      description: "Beautiful spacious oceanfront villa with private beach access, panoramic views and modern amenities...",
      bedrooms: 5,
      bathrooms: 6,
      area: 4200,
      location: "Malibu, CA",
      image: "https://public.readdy.ai/ai/img_res/597ef5f161a35d526382a79f5b43e241.jpg",
    },
    {
      id: 2,
      title: "Modern Penthouse with City Views",
      price: 2850000,
      description: "Stunning penthouse featuring floor-to-ceiling windows, private terrace, and panoramic city views...",
      bedrooms: 3,
      bathrooms: 3.5,
      area: 3100,
      location: "Beverly Hills, CA",
      image: "https://public.readdy.ai/ai/img_res/7bd3c7856e529813e5f5cca47afc8a1f.jpg",
    },
    {
      id: 3,
      title: "Contemporary Mansion with Pool",
      price: 4750000,
      description: "Exquisite contemporary mansion with infinity pool, home theater, wine cellar and smart home features...",
      bedrooms: 6,
      bathrooms: 7,
      area: 6800,
      location: "Newport Beach, CA",
      image: "https://public.readdy.ai/ai/img_res/e462e78c382102113320d3b5781eac3a.jpg",
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-estate-50" id="properties">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="h-[1px] w-12 bg-blue-700 mr-4"></div>
            <span className="text-blue-700 font-medium tracking-wide">FEATURED PROPERTIES</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-estate-900 mb-4">
              Discover Our Exclusive Properties
            </h2>
            <p className="text-estate-600 text-lg max-w-2xl">
              Explore our handpicked selection of luxury properties, each offering exceptional craftsmanship,
              premium locations, and unparalleled amenities.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {properties.map((property) => (
              <motion.div 
                key={property.id}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="property-card h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-md shadow-md">
                      <span className="text-estate-900 font-semibold">${property.price.toLocaleString()}</span>
                    </div>
                    {property.location && (
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm">
                        <span className="text-white">{property.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-display font-semibold text-estate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {property.title}
                    </h3>
                    
                    <p className="text-estate-600 mb-4 flex-grow">
                      {property.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-estate-100">
                      <div className="flex items-center space-x-4 text-estate-700">
                        <div className="flex items-center">
                          <Bed size={18} className="mr-2 text-blue-700" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath size={18} className="mr-2 text-blue-700" />
                          <span>{property.bathrooms}</span>
                        </div>
                        {property.area && (
                          <div className="flex items-center">
                            <Square size={18} className="mr-2 text-blue-700" />
                            <span>{property.area.toLocaleString()} ft²</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <a 
              href="/properties" 
              className="flex items-center group"
            >
              <span className="bg-blue-700 text-white px-6 py-3 rounded-md group-hover:bg-blue-800 transition-all duration-300 shadow-md group-hover:shadow-lg font-medium flex items-center">
                VIEW ALL PROPERTIES
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Properties;
