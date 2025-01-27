import React from 'react';
import { caseStudies } from '../data/content';

export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Case Studies</h1>
      
      <div className="grid grid-cols-1 gap-16">
        {caseStudies.map((study) => (
          <div key={study.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src={study.imageUrl}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                <p className="text-blue-600 mb-6">{study.client}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                    <p className="text-gray-700">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}