import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../../data/team';

export function TeamSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.title}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}