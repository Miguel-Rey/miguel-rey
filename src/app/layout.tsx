import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Contact } from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Rey",
  description: "Miguel Rey Io's personal website",
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
