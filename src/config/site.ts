// This site.ts file is a crucial part of the application's architecture.
// It centralizes important site-wide information, making it easier to maintain
// and update. The use of TypeScript for type definitions ensures that this
// configuration can be used safely throughout the application, reducing the
// likelihood of errors related to misspelled property names or incorrect value types.

// The siteConfig object contains key information about the website
export const siteConfig = {
  // The name of the website or application
  name: "Portfolio",

  // The URL where the site is hosted
  url: "https://drakealia-sandy.vercel.app/",

  // A brief description of the website or application
  description: "A personal portfolio website for Drake Alia",

  // An object containing important links related to the project
  links: {
    // The creator's or project's Twitter profile
    twitter: "https://x.com/Drake2Alia",

    // The creator's GitHub profile
    github: "https://github.com/DrakeAlia/",

    // The specific GitHub repository for this project
    githubProject: "https://github.com/DrakeAlia/portfolio-2024",
  },
};

// Export a type definition based on the siteConfig object
// This allows for type-safe usage of the configuration throughout the application
export type siteConfig = typeof siteConfig;
