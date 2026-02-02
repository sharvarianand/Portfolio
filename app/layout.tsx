import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "./ThemeProvider";
import GlobalBackground from "../components/GlobalBackground";
import SocialsFloat from '../components/SocialsFloat';

export const metadata: Metadata = {
  title: "Sharvari Bhondekar | Portfolio",
  description: "Aspiring SDE and AI/Data Science Enthusiast",
  keywords: ["Software Developer", "AI", "Data Science", "Full Stack", "Portfolio"],
  authors: [{ name: "Sharvari Bhondekar" }],
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
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
      <body className="antialiased bg-light-background dark:bg-background text-light-text-primary dark:text-text-primary" style={{ fontFamily: "'Times New Roman', serif" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <GlobalBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <SocialsFloat />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
