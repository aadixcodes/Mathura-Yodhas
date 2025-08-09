import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mathura Yodhas - UPPVL Season 1 Team",
  description: "Discover the Mathura Yodhas team from UPPVL Season 1! Explore their journey, key players, match highlights, and team achievements in the Uttar Pradesh Pro Volleyball League.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

