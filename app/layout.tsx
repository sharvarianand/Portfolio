import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import { ThemeProvider } from "./ThemeProvider";
import BackgroundCircles from "../components/BackgroundCircles";
import SocialsFloat from '../components/SocialsFloat';

export const metadata: Metadata = {
  title: "Sharvari Bhondekar | Software Developer",
  description: "Aspiring SDE and AI/Data Science Enthusiast",
  keywords: ["Software Developer", "AI", "Data Science", "Full Stack", "Portfolio"],
  authors: [{ name: "Sharvari Bhondekar" }],
  openGraph: {
    title: "Sharvari Bhondekar | Software Developer",
    description: "Aspiring SDE and AI/Data Science Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>
          <BackgroundCircles />
          <ScrollIndicator />
          <Navbar />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <SocialsFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
