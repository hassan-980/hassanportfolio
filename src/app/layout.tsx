import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Han_Sans } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const blackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: '400',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hassan's Portfolio",
  description: "Hassan's Portfolio site.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Swami Malode",
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swami Malode",
              url: "https://swamimalode.online",
              sameAs: [
                "https://github.com/swamimalode07",
                "https://linkedin.com/in/swamimalode",
                "https://x.com/swamimalode",
              ],
              jobTitle: "Full Stack Developer & Frontend Developer & UI/UX Designer",
              image: "https://swamimalode.online/opengraphh.jpg",
            }),
          }}
        /> */}
      </head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}
        ${blackHanSans.variable}
        antialiased`}>
        {children}
        <Analytics />
        <CustomCursor />
      </body>
    </html>
  );
}
