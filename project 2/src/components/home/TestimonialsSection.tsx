import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/content';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-500 ring-offset-2"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}