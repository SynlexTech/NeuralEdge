import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/content';
import { Brain, Code, GraduationCap } from 'lucide-react';

const iconComponents = {
  [Brain.name]: Brain,
  [Code.name]: Code,
  [GraduationCap.name]: GraduationCap,
};

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconComponents[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <Icon size={32} className="transform hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}