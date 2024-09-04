import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

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
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
