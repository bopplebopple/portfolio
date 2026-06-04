import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import Backdrop from "@/components/Backdrop";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Backdrop />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
