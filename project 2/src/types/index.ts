export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}