import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "Cyber Eye Intelligence — Digital Forensics & Investigation",
  description:
    "Digital forensics, cyber investigation, digital intelligence & managed security. Court-admissible reports. Chain of custody. 24/7 incident response. Mumbai · Bengaluru · Delhi.",
  metadataBase: new URL("https://cybereyeintelligence.com"),
  openGraph: {
    title: "Cyber Eye Intelligence",
    description: "Digital forensics that holds up in court.",
    url: "https://cybereyeintelligence.com",
    siteName: "Cyber Eye Intelligence",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og/home", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/home"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ce-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-ink text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
