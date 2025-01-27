import { Service, CaseStudy, Testimonial } from '../types';
import { Brain, Code, GraduationCap } from 'lucide-react';
import { team } from './team';

export { team };

export const services: Service[] = [
  {
    title: 'AI Implementation',
    description: 'Seamlessly integrate cutting-edge AI solutions into your existing business processes.',
    icon: Brain.name,
  },
  {
    title: 'Custom AI Development',
    description: 'Tailored AI solutions designed specifically for your unique business challenges.',
    icon: Code.name,
  },
  {
    title: 'AI Training & Strategy',
    description: 'Comprehensive training and strategic guidance for successful AI adoption.',
    icon: GraduationCap.name,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI-Powered Customer Service Transformation',
    client: 'Global Retail Corp',
    challenge: 'Managing high volume of customer inquiries with long response times.',
    solution: 'Implemented an AI chatbot system with natural language processing.',
    outcome: '70% reduction in response time and 45% cost savings in customer service operations.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Predictive Maintenance System',
    client: 'Industrial Manufacturing Inc',
    challenge: 'Frequent equipment downtime causing production delays.',
    solution: 'Developed custom AI model for predictive maintenance.',
    outcome: '85% reduction in unplanned downtime and 30% decrease in maintenance costs.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Jennifer Smith',
    role: 'CIO',
    company: 'TechCorp Solutions',
    content: 'NeuralEdge transformed our operations with their AI solutions. The results exceeded our expectations.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'David Park',
    role: 'Director of Innovation',
    company: 'Future Industries',
    content: 'Their expertise in AI implementation is unmatched. A game-changer for our business.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
];