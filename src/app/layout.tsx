import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientWrapper } from "@/components/client-wrapper";
import { SkipToContent } from "@/components/skip-to-content";
import { StructuredData } from "@/components/structured-data";
import { Analytics } from "@/components/analytics";
import { WebVitals } from "@/components/web-vitals";
import { PrefetchLinks } from "@/components/prefetch-links";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Drake Alia | Full Stack Developer & UI Engineer",
    template: "%s | Drake Alia"
  },
  metadataBase: new URL("https://drakealia.dev"),
  alternates: {
    canonical: "/",
  },
  description:
    "Full Stack Developer & UI Engineer specializing in modern web applications with Next.js, React, TypeScript, and Node.js. Creating responsive, accessible, and performant digital experiences.",
  keywords: [
    "Drake Alia",
    "full stack developer",
    "web developer", 
    "frontend developer",
    "backend developer",
    "UI engineer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "JavaScript developer",
    "web design",
    "responsive design",
    "mobile-first design",
    "portfolio",
    "freelance developer"
  ],
  authors: [{ name: "Drake Alia", url: "https://github.com/DrakeAlia" }],
  creator: "Drake Alia",
  publisher: "Drake Alia",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drakealia.com",
    title: "Drake Alia | Full Stack Developer & UI Engineer",
    description:
      "Full Stack Developer creating modern, responsive web applications with cutting-edge technologies. Specializing in React, Next.js, TypeScript, and Node.js.",
    siteName: "Drake Alia Portfolio",
    images: [
      {
        url: "/images/hero.png", // Your main hero image
        width: 1200,
        height: 630,
        alt: "Drake Alia - Full Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/images/hero.png", // Your profile photo
        width: 400,
        height: 400,
        alt: "Drake Alia - Professional Headshot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Drake2Alia",
    creator: "@Drake2Alia",
    title: "Drake Alia | Full Stack Developer & UI Engineer",
    description: "Full Stack Developer creating modern web applications with React, Next.js, and TypeScript.",
    images: ["/images/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.className
        )}
      >
        <StructuredData />
        <WebVitals />
        <PrefetchLinks />
        <Analytics
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          plausibleDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
        />
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-screen flex-col bg-background">
              <Header />
              <GridBackground />
              <ClientWrapper>
                <main className="flex-1">{children}</main>
              </ClientWrapper>
              <BackToTop />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
