
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  image: string;
  title: string;
  alt: string;
  date?: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      image: "https://public.readdy.ai/ai/img_res/c96b144420364b618e34fd10d3e50949.jpg",
      title: "Top 10 best appreciating areas in Las Vegas",
      alt: "Top appreciating areas",
      date: "June 15, 2023"
    },
    {
      id: 2,
      image: "https://public.readdy.ai/ai/img_res/26852b24f95aec8c37567867d66e1f8d.jpg",
      title: "The top 5 most livable Las Vegas neighborhoods",
      alt: "Livable neighborhoods",
      date: "July 22, 2023"
    },
    {
      id: 3,
      image: "https://public.readdy.ai/ai/img_res/105e2f10028a670dae2a55338065c71f.jpg",
      title: "In Las Vegas home prices have doubled in the past year",
      alt: "Home prices",
      date: "August 10, 2023"
    },
    {
      id: 4,
      image: "https://public.readdy.ai/ai/img_res/9749ab63e75430de8a0c3b7b4e1b23ff.jpg",
      title: "Las Vegas neighborhoods where it's better to buy than rent",
      alt: "Better neighborhoods",
      date: "September 5, 2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white">
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
            <span className="text-blue-700 font-medium tracking-wide">MARKET INSIGHTS</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-estate-900 mb-4">
              The Latest Real Estate News
            </h2>
            <p className="text-estate-600 text-lg max-w-2xl">
              Stay informed with our curated collection of market trends, investment opportunities,
              and essential insights from the world of luxury real estate.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {newsItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="news-card group h-[400px]" /* Added 'group' class directly in JSX */
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="news-card-overlay group-hover:opacity-100"></div>
                
                <div className="news-card-content">
                  {item.date && (
                    <span className="text-blue-200 text-sm block mb-2">
                      {item.date}
                    </span>
                  )}
                  <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-white text-sm hover:text-blue-300 transition-colors"
                  >
                    Continue reading
                    <ExternalLink size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-16"
            variants={itemVariants}
          >
            <a 
              href="/blog" 
              className="text-blue-700 hover:text-blue-800 font-medium flex items-center group"
            >
              <span className="border-b-2 border-blue-700 pb-1 group-hover:border-blue-800 transition-colors">
                VIEW ALL ARTICLES
              </span>
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
