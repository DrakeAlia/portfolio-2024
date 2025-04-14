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

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Drake Alia | Personal",
  metadataBase: new URL("https://github.com/DrakeAlia"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Drake Alia", url: "https://github.com/DrakeAlia" }],
  description: "Drake Alia",
  openGraph: {
    title: "Drake Alia | Personal",
    description: "Drake Alia's Personal Website",
    images: [
      {
        url: "/images/photo.png",
        alt: "Drake's Portrait",
        width: 640,
        height: 800,
      },
    ],
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
