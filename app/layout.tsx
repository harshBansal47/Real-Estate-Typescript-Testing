
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/assets/scss/index.scss"
import Footer from "@/components/commons/Footer/Footer";
import CopyrightFooter from "@/components/commons/Footer/CopyrightFooter";
import Navbar from "@/components/commons/Navbar/Navbar";


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
        <Navbar/>
          {children}
          <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
      </body>
    </html>
  );
}