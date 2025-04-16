import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/layout/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientWrapper } from "@/components/client-wrapper";
import { SkipToContent } from "@/components/skip-to-content";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Drake Alia | Web Developer",
  metadataBase: new URL("https://github.com/DrakeAlia"), // Keep your existing URL
  alternates: {
    canonical: "/",
  },
  description:
    "Web Developer specializing in modern UI development with Next.js, React, and TypeScript",
  keywords: [
    "web developer",
    "frontend",
    "UI engineer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Drake Alia", url: "https://github.com/DrakeAlia" }],
  creator: "Drake Alia",
  publisher: "Drake Alia",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "Drake Alia | Web Developer",
    description:
      "Creating engaging, responsive web experiences with modern technologies",
    siteName: "Drake Alia Portfolio",
    images: [
      {
        url: "/images/photo.png", // Use your existing image or create a dedicated OG image
        width: 640,
        height: 800,
        alt: "Drake Alia - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Drake2Alia",
    images: ["/images/photo.png"], // Use your existing image or create a dedicated Twitter image
  },
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
