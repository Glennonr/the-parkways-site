import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/common/components/layout/components/header";
import Footer from "@/common/components/layout/components/footer";

// Load Geist as secondary font
const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: "The Parkways Band | South Jersey Rock & Roll",
  description: "The Parkways - South Jersey's premier rock and alternative cover band. Check out our upcoming shows and original music.",
  keywords: "The Parkways, The Parkways Band, Parkways, South Jersey, Rock Band, Live Music, Cover Band, Original Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`font-display ${geist.variable} bg-background text-foreground antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
