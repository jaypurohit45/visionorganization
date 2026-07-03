import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionorganisation.com"),
  title: {
    default: "Vision Organisation | Premium Digital Marketing Agency",
    template: "%s | Vision Organisation"
  },
  description:
    "Vision Organisation helps brands grow with social media management, content creation, branding, performance marketing, video editing, and Instagram growth strategy.",
  keywords: [
    "Vision Organisation",
    "digital marketing agency",
    "social media management",
    "Instagram growth",
    "content creation",
    "branding agency",
    "performance marketing"
  ],
  openGraph: {
    title: "Vision Organisation | Premium Digital Marketing Agency",
    description:
      "Creative marketing solutions that generate real growth for modern brands.",
    url: "https://visionorganisation.com",
    siteName: "Vision Organisation",
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1920,
        alt: "Vision Organisation logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Organisation | Premium Digital Marketing Agency",
    description:
      "Creative marketing solutions that generate real growth for modern brands.",
    images: ["/logo.jpg"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
