import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollTools } from "@/components/layout/scroll-tools";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./routes.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Muhammad Afiq Hakiki | Cybersecurity & Networking Portfolio",
    template: "%s | Muhammad Afiq Hakiki",
  },
  description: siteConfig.description,
  keywords: [
    "Muhammad Afiq Hakiki",
    "cybersecurity portfolio",
    "networking student",
    "Universiti Malaya",
    "network security",
    "MCP security",
    "AI security",
  ],
  authors: [{ name: siteConfig.displayName }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Afiq Hakiki | Cybersecurity & Networking",
    description: siteConfig.description,
    type: "website",
    locale: "en_MY",
    url: "/",
    siteName: siteConfig.brand,
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 909,
        alt: "Muhammad Afiq Hakiki — Cybersecurity and Networking portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Afiq Hakiki | Cybersecurity & Networking",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { colorScheme: "dark light", themeColor: "#07111f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        sameAs: [siteConfig.github, siteConfig.linkedin],
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universiti Malaya" },
        knowsAbout: ["Cybersecurity", "Computer Networking", "Network Security", "AI Security"],
      },
      { "@type": "WebSite", name: siteConfig.brand, url: siteConfig.url, description: siteConfig.description },
    ],
  };
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >{`try{const t=localStorage.getItem('afiq-theme');const d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);document.querySelector('meta[name="theme-color"]')?.setAttribute('content',d?'#07111f':'#f7f3eb')}catch(e){document.documentElement.classList.add('dark')}`}</Script>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <ScrollTools />
        {children}
        <Footer />
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}
