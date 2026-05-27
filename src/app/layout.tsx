import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Reconnect Wellness | Doctor-Led Strength Training for Joint Pain, Arthritis & Bone Health",
    template: "%s | Reconnect Wellness",
  },
  description:
    "A personalized, rheumatologist-designed strength and nutrition program for joint pain, arthritis, back & disc issues, and osteoporosis. Doctor-led, not generic workouts.",
  keywords: [
    "arthritis exercise program",
    "knee pain strength training",
    "rheumatologist-led fitness India",
    "osteoporosis exercise",
    "back pain exercise",
    "disc bulge exercise",
    "joint pain treatment without surgery",
    "strength training for arthritis",
    "bone health program",
  ],
  openGraph: {
    title: "Reconnect Wellness | Stronger Joints. Denser Bones. A Life Without Pain.",
    description:
      "A personalized, doctor-designed strength and nutrition program for joint pain, arthritis, and osteoporosis.",
    type: "website",
    locale: "en_IN",
    siteName: "Reconnect Wellness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconnect Wellness | Doctor-Led Joint & Bone Health Programs",
    description:
      "Personalized strength training designed by a rheumatologist for joint pain, arthritis, and bone health.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
