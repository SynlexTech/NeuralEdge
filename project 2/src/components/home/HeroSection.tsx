import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedText } from '../ui/AnimatedText';
import { Brain } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center items-center mb-8">
            <Brain className="h-16 w-16 text-blue-400" />
            <AnimatedText
              text="NeuralEdge"
              className="ml-4 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Empowering Businesses with the Future of AI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
          >
            Transform your business with cutting-edge AI solutions that drive efficiency,
            reduce costs, and accelerate growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}