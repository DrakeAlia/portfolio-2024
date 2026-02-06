export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    photo?: string;
  };
  project?: string;
  rating?: number;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Drake delivered an exceptional website that perfectly captures the energy and professionalism of our gym. The migration from Squarespace to Next.js was seamless, and the performance improvements are remarkable. Our clients love the new design, and it's so much easier for us to manage. Highly recommend his work!",
    author: {
      name: "Iron Works Gym",
      title: "Fitness Center",
      company: "Seattle Area",
      // photo: "/images/testimonials/ironworks.jpg", // Optional: add photo later
    },
    project: "Iron Works Gym Website",
    rating: 5,
    date: "February 2025",
  },
  // Add more testimonials here as you collect them
  // {
  //   id: "2",
  //   quote: "Your testimonial text here...",
  //   author: {
  //     name: "Client Name",
  //     title: "Position",
  //     company: "Company Name",
  //     photo: "/images/testimonials/client.jpg",
  //   },
  //   project: "Project Name",
  //   rating: 5,
  //   date: "Month Year",
  // },
];
