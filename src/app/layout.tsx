import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Help Center | Privacy Policy",
  openGraph: {
    title: "Meta | Business Help Center | Support",
    description:
      "Meta Support page - Dedicated to making our meta safe for everyone",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/charity-7cbc9.appspot.com/o/card_img.jpg?alt=media&token=2ea1c79f-ef3d-4516-a511-4d42a0b36940",
        width: 800,
        height: 600,
        alt: "Meta Support | Help Center",
      },
    ],
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
