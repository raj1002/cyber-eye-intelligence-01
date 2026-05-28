import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyber-Eye Intelligence — Digital Forensics & Investigation",
  description:
    "Digital forensics, fraud investigation and training. Court-admissible reports. Chain of custody. 24/7 incident response. Mumbai · Bengaluru · Delhi.",
  metadataBase: new URL("https://cybereye.com"),
  openGraph: {
    title: "Cyber-Eye Intelligence",
    description: "Digital forensics that holds up in court.",
    url: "https://cybereye.com",
    siteName: "Cyber-Eye Intelligence",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans bg-ink text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
