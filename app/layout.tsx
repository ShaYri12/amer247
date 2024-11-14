import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

// Suspense fallback component
const SuspenseFallback = () => (
  <div className="flex justify-center items-center min-h-screen">
    Loading...
  </div>
);

export const metadata: Metadata = {
  title: "AMER247 - Immigration Services | Dubai Visa Applications/Renewal",
  description:
    "Amer247 is a Semi Government Organization operating 24 hrs, allowing residents to complete all Visa and Residency transactions. Apply Online!",

  openGraph: {
    title: "AMER247 - Immigration Services | Dubai Visa Applications/Renewal",
    description:
      "Amer247 is a Semi Government Organization operating 24 hrs, allowing residents to complete all Visa and Residency transactions. Apply Online!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <script
          src="//code.tidio.co/dkrjbkbxukwe3w8kkvtlremhaintgbvu.js"
          async
        ></script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<SuspenseFallback />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
