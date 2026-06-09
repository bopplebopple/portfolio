import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import { profile } from "@/lib/content";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Matthew Brian Khoe Munandar — Back-End Engineer based in Jakarta. 3+ years building reliable, high-performance backend systems in Go with PostgreSQL, clean architecture, and scalable APIs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://matthew-munandar.vercel.app"),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.shortName}`,
  },
  description,
  keywords: [
    "Matthew Munandar",
    "Back-End Engineer",
    "Golang Developer",
    "Go Engineer",
    "Backend Developer Jakarta",
    "PostgreSQL",
    "Software Engineer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f1ede4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} ${instrument.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll>
          <ScrollProgress />
          <div className="editorial-grid" aria-hidden />
          {children}
          <div className="grain" aria-hidden />
        </SmoothScroll>
      </body>
    </html>
  );
}
