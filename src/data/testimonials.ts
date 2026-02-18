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
    quote: "Drake completely transformed our online presence. We were stuck on Squarespace and the site felt slow and outdated — he built us something custom with Next.js that loads incredibly fast and looks amazing. Our members keep complimenting the new site. He was easy to work with, kept us in the loop the whole time, and delivered exactly what we needed. Would absolutely work with him again.",
    author: {
      name: "Iron Works Gym",
      title: "Fitness Center",
      company: "Bellevue, WA",
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
