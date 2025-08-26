import type { Metadata } from "next";
import { Space_Grotesk, Sour_Gummy } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gautam Blogs",
  description: "A blog by Gautam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${spaceGrotesk.variable} ${sourGummy.variable} antialiased`}
        >
          <header className="sticky top-0 z-50 flex items-center justify-center p-4 shadow-md">
            <Link href="/">
              <h1 className="font-sour-gummy text-2xl font-bold">
                Gautam Blogs
              </h1>
            </Link>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
