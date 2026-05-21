import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const publicSans = localFont({
  src: [
    {
      path: "../public/fonts/PublicSans-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../public/fonts/PublicSans-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-public-sans",
  display: "swap",
});

const ptSerif = localFont({
  src: [
    { path: "../public/fonts/PTSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/PTSerif-Bold.ttf",    weight: "700", style: "normal" },
    { path: "../public/fonts/PTSerif-Italic.ttf",  weight: "400", style: "italic" },
  ],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DCivitas | Pro Bono Consulting at Georgetown",
  description:
    "DCivitas is a pro bono consulting club with consultants from all 5 undergraduate schools within Georgetown University. We serve DMV-area nonprofits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${ptSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
