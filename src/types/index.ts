export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}
