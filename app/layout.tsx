import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "./ThemeProvider";
import BackgroundCircles from "../components/BackgroundCircles";
import SocialsFloat from '../components/SocialsFloat';

export const metadata: Metadata = {
  title: "Sharvari Bhondekar | Portfolio",
  description: "Aspiring SDE and AI/Data Science Enthusiast",
  keywords: ["Software Developer", "AI", "Data Science", "Full Stack", "Portfolio"],
  authors: [{ name: "Sharvari Bhondekar" }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Sharvari Bhondekar | Portfolio",
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
      <body className="font-body antialiased bg-light-background dark:bg-background text-light-text-primary dark:text-text-primary">
        <ThemeProvider>
          <BackgroundCircles />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <SocialsFloat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
