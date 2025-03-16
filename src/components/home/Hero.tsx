
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const backgroundImages = [
    'https://public.readdy.ai/ai/img_res/597ef5f161a35d526382a79f5b43e241.jpg',
    'https://public.readdy.ai/ai/img_res/e462e78c382102113320d3b5781eac3a.jpg',
    'https://public.readdy.ai/ai/img_res/7bd3c7856e529813e5f5cca47afc8a1f.jpg'
  ];

  useEffect(() => {
    // Preload images
    backgroundImages.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setIsLoaded(true);
      };
    });

    // Setup background rotation
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 1 } }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0 h-full w-full"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white/90 text-sm mb-6 tracking-wide"
            variants={itemVariants}
          >
            DISCOVER UNPARALLELED LUXURY
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl xl:text-6xl font-display font-bold text-white leading-tight tracking-tight mb-8"
            variants={itemVariants}
          >
            FIND YOUR <span className="text-[#096CC9]">DREAM</span> RESIDENCE
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            We are recognized for exceeding client expectations and delivering
            extraordinary results through dedication, ease of process, and
            exceptional service to our worldwide clients.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <a
              href="#valuation"
              className="px-8 py-4 bg-white text-estate-950 rounded-md hover:bg-luxury-100 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              WHAT'S MY HOME WORTH
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all duration-300 font-medium"
            >
              WORK WITH KRYSTELLE
            </a>
          </motion.div>
          <motion.form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto w-full"
            variants={itemVariants}
          >
            <div className="relative flex overflow-hidden rounded-lg shadow-2xl">
              <input
                type="text"
                placeholder="Enter an address, city or neighborhood"
                className="flex-1 pl-6 pr-12 py-4 bg-white/95 border-none outline-none text-estate-900"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                type="submit"
                className="bg-luxury-800 text-white px-8 py-4 font-medium hover:bg-luxury-900 transition-colors duration-300 flex items-center"
              >
                <span className="hidden sm:inline mr-2">SEARCH</span>
                <span className="sm:inline">LISTINGS</span>
                <ChevronRight size={16} className="ml-2" />
              </button>
              <div className="absolute right-[140px] top-1/2 transform -translate-y-1/2 text-estate-400 pointer-events-none">
                <Search size={20} />
              </div>
            </div>
          </motion.form>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-white/70 text-sm mb-2">Scroll to explore</p>
          <motion.div
            className="w-[1px] h-10 bg-white/30"
            animate={{
              height: [10, 40, 10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
