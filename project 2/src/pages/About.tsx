import React from 'react';
import { TeamSection } from '../components/about/TeamSection';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Mission Section */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-8">About NeuralEdge Consulting</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At NeuralEdge Consulting, we're dedicated to democratizing AI technology,
              making it accessible and practical for businesses of all sizes. Our mission
              is to bridge the gap between cutting-edge AI innovations and real-world
              business applications.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-6">
              We envision a future where AI enhances every aspect of business operations,
              driving innovation, efficiency, and growth. Our goal is to be at the
              forefront of this transformation, helping organizations harness the full
              potential of AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovation',
              description: 'Constantly pushing boundaries and exploring new possibilities in AI.',
            },
            {
              title: 'Excellence',
              description: 'Delivering the highest quality solutions and exceeding expectations.',
            },
            {
              title: 'Partnership',
              description: 'Building lasting relationships based on trust and mutual success.',
            },
          ].map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}