import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}