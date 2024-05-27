import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>
        <header className="fixed right-0 top-0">
          <nav>
            <ul className="text-right">
              <li>
                <a href="mailto:miguelreymallen@gmail.com">Email</a>
              </li>
              <li>
                <Link href="">Linkedin</Link>
              </li>
              <li>
                <Link href="https://github.com/Miguel-Rey" target="_blank">
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
