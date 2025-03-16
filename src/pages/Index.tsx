
import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Properties from '../components/home/Properties';
import Services from '../components/home/Services';
import News from '../components/home/News';
import Contact from '../components/home/Contact';
import Footer from '../components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  // Add smooth scrolling behavior and preloading
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Preload images for better performance
    const preloadImages = () => {
      const images = [
        "https://public.readdy.ai/ai/img_res/597ef5f161a35d526382a79f5b43e241.jpg",
        "https://public.readdy.ai/ai/img_res/e462e78c382102113320d3b5781eac3a.jpg",
        "https://public.readdy.ai/ai/img_res/7bd3c7856e529813e5f5cca47afc8a1f.jpg",
        "https://public.readdy.ai/ai/img_res/3a3b9b6bd4cdedcdc8ffcedc3c452297.jpg"
      ];
      
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Header />
        
        <main>
          <Hero />
          <About />
          <Properties />
          <Services />
          <News />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 bg-luxury-800 text-white p-3 rounded-full shadow-lg hover:bg-luxury-900 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
