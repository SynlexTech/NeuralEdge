import React from 'react';
import { services } from '../data/content';
import { Brain, Code, GraduationCap } from 'lucide-react';

const iconComponents = {
  [Brain.name]: Brain,
  [Code.name]: Code,
  [GraduationCap.name]: GraduationCap,
};

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>
      
      <div className="space-y-20">
        {services.map((service) => {
          const Icon = iconComponents[service.icon];
          return (
            <section key={service.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-blue-600 mb-4">
                  <Icon size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {[
                    'Comprehensive needs assessment',
                    'Customized solution design',
                    'Implementation and integration',
                    'Training and support',
                    'Performance monitoring',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2 text-blue-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Increased operational efficiency',
                    'Cost reduction through automation',
                    'Enhanced decision-making capabilities',
                    'Improved customer experience',
                    'Scalable solutions for growth',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <span className="mr-2 text-green-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}