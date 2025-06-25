"use client";

import Script from "next/script";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Drake Alia",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer & UI Engineer specializing in modern web applications with Next.js, React, TypeScript, and Node.js.",
    "url": "https://drakealia.com",
    "image": "https://drakealia.com/images/hero.png",
    "sameAs": [
      "https://github.com/DrakeAlia",
      "https://twitter.com/Drake2Alia",
      "https://linkedin.com/in/drakealia"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "Responsive Web Design"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Drake Alia Portfolio",
    "url": "https://drakealia.com",
    "description": "Portfolio website showcasing full stack development projects and skills",
    "author": {
      "@type": "Person",
      "name": "Drake Alia"
    },
    "publisher": {
      "@type": "Person", 
      "name": "Drake Alia"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Drake Alia - Web Development Services",
    "description": "Full stack web development services specializing in modern React applications, responsive design, and user experience optimization.",
    "provider": {
      "@type": "Person",
      "name": "Drake Alia",
      "jobTitle": "Full Stack Developer"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Frontend Development", 
      "Backend Development",
      "UI/UX Design",
      "Responsive Web Design",
      "Mobile App Development"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Custom web development solutions",
      "availability": "https://schema.org/InStock"
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Drake Alia Developer Portfolio",
    "description": "A collection of web development projects showcasing expertise in modern technologies",
    "creator": {
      "@type": "Person",
      "name": "Drake Alia"
    },
    "about": [
      "Web Development",
      "React",
      "Next.js", 
      "TypeScript",
      "Node.js"
    ]
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
    </>
  );
}