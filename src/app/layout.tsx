import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Rey",
  description: "Miguel Rey Io's personal website",

  robots: {
    index: true,
    follow: false,
    nocache: true,
    noimageindex: true,
    "max-video-preview": -1,
    "max-image-preview": "none",
    "max-snippet": -1,
  },

  openGraph: {
    title: "Miguel Rey",
    description: "Miguel Rey Io's personal website",
    url: "https://nextjs.org",
    siteName: "Miguel Rey",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
