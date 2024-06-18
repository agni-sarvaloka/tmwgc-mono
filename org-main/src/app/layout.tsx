import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TMWGC | The Meta Web3 Global Consortium",
  description:
    "Building an open-source, truly decentralized ecosystem for the immersive future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>{children}</body>
    </html>
  );
}
