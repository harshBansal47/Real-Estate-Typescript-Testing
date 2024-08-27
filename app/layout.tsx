
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/assets/scss/index.scss"


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Website",
  description: "Real Estates Trading Helper & Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}