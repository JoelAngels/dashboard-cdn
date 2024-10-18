import type { Metadata } from "next";
import "./globals.css";
import { Rocgrotesk } from "@/utils/customFonts";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Creator",
  description: "Creator Web Application",
};

const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bricolage",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${Rocgrotesk.variable} ${SpaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
